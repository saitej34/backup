import React,{useState} from 'react'
import {TextField,Button} from '@mui/material'
const Login = () => {
  const [data,setdata]=useState({
      Email :'',
      Password:''
  });
  const acti = ()=>{
    console.log(data);
  }
  var chan=(e)=>{
      setdata({...data,[e.target.name]:e.target.value});
  }
  return (

    <div>
      <center>
        <br />
        <br />
        <br />
        <div className="box">
            <h3>Login Page</h3>
            <TextField id="outlined-basic" label="Email ID" variant="outlined" name="Email" onChange={chan}/> <br /><br />
            <TextField id="Password" label="Password" variant="outlined" name="Password" onChange={chan}/> <br /><br />
            <Button variant="outlined" onClick={acti}>Login</Button>
        </div>
      </center>
    </div>
  )
}

export default Login
