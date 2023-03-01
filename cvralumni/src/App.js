import React from 'react';
import Login from './Login';
import Register from './Register'
import Home from './Home'
import {Typography,Tab,Tabs,AppBar,Toolbar,Button} from '@material-ui/core'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
var App=()=>{
  return (
    <div>
       <BrowserRouter> 
           <Routes> 
             <Route path='/' element={<Home />} />
             <Route path='/login' element = {<Login />} />
             <Route path='/register' element = {<Register />} />
           </Routes>
       </BrowserRouter>
       <AppBar> 
            <Toolbar>
                 <Typography>Web Alumni</Typography>
                 <Tabs > 
                     <Tab label="AboutUs" />
                     <Tab label="Achievements" />
                     <Tab label="Events" />
                     <Tab label="More" />
                 </Tabs>
                 <Button color="#063925" variant="contained" sx={{marginLeft:'auto'}}>Login</Button>
                 <Button sx={{marginLeft:"10px"}}color="#063925" variant="contained">Register</Button>
            </Toolbar> 
        </AppBar>
    </div>
  )
}

export default App

