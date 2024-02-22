import { Button } from '@mui/base'
import { TextField, Typography } from '@mui/material'
import React , { useState } from 'react'
 

const Add = () => {
  var[data,setData]=useState();
  const student=(e)=>{
      setData({...data,[e.target.name]:e.target.value});
      console.log(data);
  }
  return (
    <div>
         <br /><br />
         <Typography  variant='H5'>Name   </Typography>
         <br /><br />
        <TextField variant='outlined' label="Name"  onChange={student}></TextField>
        <br /><br />
        <Typography  variant='H5'>Age    </Typography>
        <br /><br />
        <TextField variant='outlined' label="Age" onChange={student}></TextField>
        <br /><br />
        <Typography  variant='H5'>Department</Typography>
        <br /><br />
        <TextField variant='outlined' label="Department" onChange={student}></TextField>
        <br /><br />
        <Button variant="contained">submit</Button>
    </div>
  )
}

export default Add