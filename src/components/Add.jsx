import { Button } from '@mui/base'
import { TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
         <br /><br />
         <Typography  variant='H5'>Name</Typography>
         <br /><br />
        <TextField variant='outlined' label="Name"></TextField>
        <br /><br />
        <TextField variant='outlined' label="Age"></TextField>
        <br /><br />
        <TextField variant='outlined' label="Department"></TextField>
        <br /><br />
        <Button variant="contained">submit</Button>
    </div>
  )
}

export default Add