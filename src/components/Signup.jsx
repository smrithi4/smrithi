import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <TextField label='First name' />
      <br></br>
      <TextField label='Lastname' />
      <br></br>
      <TextField label='Email' type='email' />
      <br></br>
      <TextField label='Password' type='Password'/>
      <br></br>
      <Button variant='contained'>sign up</Button> 
      </div>
  )
}

export default Signup
