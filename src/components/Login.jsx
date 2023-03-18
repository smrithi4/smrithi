import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div className="App">
      <h1>welcome to react</h1>
    <input placeholder='Email'></input>
    <input placeholder='password' type='password'></input>
    <Typography variant='h5'>welcome to react</Typography>
    <TextField label='Email' variant='standard'/>
    <TextField label='password' type='password' variant='standard'/>
    <br></br>
    <Button variant='contained' color='secondary' >Login</Button>
    </div>
  )
}

export default Login
