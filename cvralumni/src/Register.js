import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { TextField,MenuItem,Select,Button ,FormGroup,FormControlLabel,Switch} from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
const Register = () => {
  const depts = ["CSE","ECE"];
  const [datas,setdatas]=('');
  const [data,setdata]=useState({
    RollNumber:'',
    YearofPassOut:'',
    MobileNumber:'',
    PresentJob:''
  });
  var chan = (e)=>{
    setdata({...data,[e.target.name]:e.target.value});
  }
  var sub = (e)=>{
    console.log(data);
    setdatas(data.RollNumber);
  }
  return (
    <div>
      <br />
      <br /><br />
      <div>
          <center><h3><u>Register For Cvr Alumni Network</u></h3><br />
          <TextField sx={{width:260}} id="outlined-basic" label="Email Id" name="email" /><br /><br />
          <TextField sx={{width:260}} id="outlined-basic" label="RollNumber" onChange={chan} variant="standard" name="RollNumber"/><br /> <br />    
          <TextField sx={{width:260}}id="outlined-basic" label="YearofPassOut" variant="standard" name="YearofPassOut" onChange={chan}/><br /> <br />
          <TextField sx={{width:260}}id="outlined-basic" label="MobileNumber" variant="standard" name="MobileNumber" onChange={chan}/><br /> <br />
          <TextField sx={{width:260}}id="outlined-basic" label="PresentJob" variant="standard" name="PresentJob" onChange={chan}/><br /> <br /> <br />
          <Button sx={{width:150}} variant="outlined" color='seconadry' onClick={sub}>Register</Button>
          <h4>Status: {datas}</h4>
          </center>
      </div>
    </div>
  )
}

export default Register
