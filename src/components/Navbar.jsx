import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';




const Navbar = () => {
  return (
    <div><Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar variant="dense">

        <Typography variant="h6" color="inherit" sx={{flexGrow:1}} align='left' > 
        <Button color='inherit'>Add student</Button>
        </Typography>
        <Button color='inherit'>Login</Button>
        <Button color='inherit'>veiw student</Button>
       
      </Toolbar>
    </AppBar>
  </Box></div>
  )
}

export default Navbar