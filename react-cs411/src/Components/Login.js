import React from 'react'
// import TextField from '@material-ui/core/TextField';
import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import "../css/Login.css"
import Axios from "axios"
import { GoogleLogin } from '@react-oauth/google'
import { useEffect } from 'react'
import Header from "./Header"
import NavBar from "./NavBar"

function Login () {


  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response)
    })
  }

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {

      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data[0].user_name)
        console.log(response)
      }
    })
  }

// runs every time we refresh the page
// requests to see if a user is logged in 
  useEffect(()=> {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true){
        setLoginStatus(response.data.user[0].user_name);
        localStorage.setItem('user', response.data[0].user_name);
      }
    })
  }, [])

  return (
    <div className='login-box'>
      <div className="registration">
        <Typography sx={{textAlign:"center"}} variant="h5">Registration</Typography>
        <TextField
          placeholder="Enter Username"
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value)
          }} />

        <TextField
           placeholder="Enter Password"
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value)
          }} />
        <Button variant="contained" onClick={register}>Register</Button>
      </div>


      <div className='login'>
        <Typography sx={{textAlign:"center"}} variant="h5">Login</Typography>
        <TextField type="text" placeholder="Enter Username"
          onChange={(e) => {
            setUsername(e.target.value)
          }} />
        <TextField type="password" placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value)
          }} />
        <Button variant="contained" onClick={login}>Login</Button>
      </div>

      <h1>{loginStatus}</h1>
      <br></br>

      <div className='oauth'>
      <Typography sx={{textAlign:"center"}} variant="h5">Sign in with Google!</Typography>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
        }}
      />
      </div>
    </div>
  )

}

export default Login