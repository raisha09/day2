import { Button } from '@mui/base'
import { TextField, Typography } from '@mui/material'
import axios from 'axios';
import React , { useState } from 'react'
 

const Add = () => {
  var[data,setData]=useState();
    const student=(e)=>{
      setData({...data,[e.target.name]:e.target.value});
      console.log(data);
  }
  const submit=()=>{
   
      axios.post("http://localhost:4000/students",{
      student_name:data.name,
      student_age:data.age,
      student_department:data.department,
    })
     .then(()=>{
      alert('New entry created successfully')
     })
     .catch(()=>{
     alert('Error saving data');
    });
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
        <Button variant="contained" onClick={submit}>submit</Button>
    </div>
  )

}

export default Add