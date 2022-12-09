import React from 'react';
// import TextField from '@material-ui/core/TextField';
import { Button, TextField} from '@mui/material';
import "../css/Login.css"

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // call the backend API to verify the username and password
  }

  render() {
    return (
      <div className='login-box'>
      <form onSubmit={this.handleSubmit}>
        <TextField
          label="Username"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <TextField
          label="Password"
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      </div>
    );
  }
}