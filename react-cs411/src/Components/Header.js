import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

export default class Header extends Component {
  render () {
    return (
      < header >
        <div className="w">
          <div className="login">
            {/* < a href="#">Please login</ a> */}
            {/* <Link to="/login"> Please Login</Link> */}
            <Button
            component={Link}
            to="/login"
            sx={{color:"white"}}>
             Please Login
            </Button>
          </div>
        </div>
      </header >
    )
  }
}
