import React from 'react';
// import TextField from '@material-ui/core/TextField';
import { Button, TextField} from '@mui/material';
import { useState } from 'react';
import "../css/Login.css"

function Login ()  {
  

  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

    return (
      <div>
        <div className="registration">
          <h1>Registration</h1>
          <label>Username</label>
          <input 
          type="text" 
          onChange={(e) => 
          {setUsernameReg(e.target.value);
           }} />
          <label>Password</label>
          <input 
          type="text" 
          onChange={(e) => 
          {setPasswordReg(e.target.value);
           }} />
          <Button>Register</Button>
        </div>
        <div className='login'>
          <h1>login</h1>
          <input type="text" placeholder="Username..."/ >
          <input type="password" placeholder="Password../" />
          <Button>Login</Button>
        </div>
      </div>
    );

}

export default Login;