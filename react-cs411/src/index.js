import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { GoogleOAuthProvider } from '@react-oauth/google'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <GoogleOAuthProvider clientId="316363094058-0lea28iimm7noqssrh3as176r3vj69pd.apps.googleusercontent.com"><App /></GoogleOAuthProvider>;
=======
    <BrowserRouter>
    <App />
    </BrowserRouter>
>>>>>>> 132714df1cb9c153bc03b9dd525ddc6622cd51af
  </React.StrictMode>
)