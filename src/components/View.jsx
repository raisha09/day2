import React ,{useEffect,useState}from 'react'
import { TableBody,Table,TableCell,TableContainer,TableHead ,TableRow} from '@mui/material'
import axios from 'axios';

const View = () => {
  var[data,setData]=useState([]);
  useEffect(()=>{
        axios.get("http://localhost:4000/students").then((response)=>{
            console.log(response.data)
            setData(response.data);
        })
        .catch((error)=>console.log(error));
      },[])
  return (
    <div>
         <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{color:"black",fontFamily:"cursive",fontSize:"20PX"}}> Name</TableCell>
                  <TableCell style={{color:"black",fontFamily:"cursive",fontSize:"20PX"}}>Age</TableCell>
                  <TableCell style={{color:"black",fontFamily:"cursive",fontSize:"20PX"}}>Department</TableCell>
                </TableRow>
               </TableHead>
               <TableBody>
                {data.map((value,index)=>{
                  return(
                    <TableRow>
                      <TableCell>{value.name}</TableCell>
                      <TableCell>{value.age}</TableCell>
                      <TableCell>{value.department}</TableCell>
                    </TableRow>
                  )
                })}

               </TableBody>
            </Table>
        </TableContainer> 
    </div>
  )
}

export default View