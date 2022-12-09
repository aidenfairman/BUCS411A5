import React from 'react';
// import TextField from '@material-ui/core/TextField';
import { Button, TextField} from '@mui/material';
import { useState } from 'react';
import "../css/Login.css"
import Axios from "axios"

function Login ()  {
  

  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
       password: passwordReg,
      }).then((response) => {
        console.log(response);
      });
  };

    return (
      <div>
        <div className="registration">
          <h1>Registration</h1>
          <label>Username</label>
          <TextField 
          type="text" 
          onChange={(e) => 
          {setUsernameReg(e.target.value);
           }} />
          <label>Password</label>
          <TextField 
          type="text" 
          onChange={(e) => 
          {setPasswordReg(e.target.value);
           }} />
          <Button onClick={register}>Register</Button>
        </div>
        <div className='login'>
          <h1>login</h1>
          <TextField type="text" placeholder="Username..."/ >
          <TextField type="password" placeholder="Password../" />
          <Button>Login</Button>
        </div>
      </div>
    );

}

export default Login;