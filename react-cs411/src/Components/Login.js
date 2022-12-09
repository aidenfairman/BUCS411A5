import React from 'react'
// import TextField from '@material-ui/core/TextField';
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import "../css/Login.css"
import Axios from "axios"
import { GoogleLogin } from '@react-oauth/google'

function Login () {


  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

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

  return (
    <div>
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <TextField
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value)
          }} />
        <label>Password</label>
        <TextField
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value)
          }} />
        <Button onClick={register}>Register</Button>
      </div>


      <div className='login'>
        <h1>login</h1>
        <TextField type="text" placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value)
          }} />
        <TextField type="password" placeholder="Password.."
          onChange={(e) => {
            setPassword(e.target.value)
          }} />
        <Button onClick={login}>Login</Button>
      </div>

      <h1>{loginStatus}</h1>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
        }}
      />
    </div>
  )

}

export default Login