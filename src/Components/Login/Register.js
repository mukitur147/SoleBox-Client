import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import cover from '../../Images/cover4.jpg'
import Navigation from '../Shared/Navigation';
import Footer from '../Shared/Footer';


const Register = () => {
    const [loginData,setLoginData]=useState({})
    const {user,registerUser,isLoading,authError}=useFirebase();
    const history= useHistory();
    

    const handleOnBlur=e=>{
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = {...loginData};
      newLoginData[field]=value;
      setLoginData(newLoginData);
    }
  
    const handleLoginSubmit= e =>{
      if(loginData.password !== loginData.password2){
          alert("Password didn't matched");
          return
      }
      registerUser(loginData.email , loginData.password,loginData.name,history)
      e.preventDefault()
    }



    return (
        <>
        <Navigation></Navigation>
        <Container sx={{my:5}}>
           
          <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
    <img src={cover} alt="" />
   </Grid>
  <Grid item xs={12} md={6}>
      <Typography sx={{fontWeight:'600'}} variant="h4"   component="div">
         Register
      </Typography>

      {!isLoading && <form onSubmit={handleLoginSubmit}>
      <TextField
       sx={{mt:3 ,width:'75%'}} 
       id="standard-basic"
       label="Your Name" 
       variant="standard" 
       name="name"
       onBlur={handleOnBlur}
       />
      <TextField
       sx={{my:3 ,width:'75%'}} 
       id="standard-basic" 
       type='email'
       label="Your email" 
       variant="standard" 
       name="email"
       onBlur={handleOnBlur}
       />
      <br/>
      <TextField 
        sx={{width:'75%',mb:3}} 
        id="standard-basic" 
        label="Password" 
        variant="standard" 
        type="password"
        name="password"
        onBlur={handleOnBlur}
        />
      <TextField 
        sx={{width:'75%' ,mb:3}} 
        id="standard-basic" 
        label="Re-type Password" 
        variant="standard" 
        type="password"
        name="password2"
        onBlur={handleOnBlur}
        />
       <br/>
       
      <Button type="submit" sx={{backgroundColor:'black',width:'75%'}} variant="contained">Sign Up</Button>
      {isLoading && <CircularProgress/>}
      </form>}


      
      <br />
      <NavLink style={{textDecoration:'none'}} to="/login">  <Button variant="text">Already Registered? Login In.</Button></NavLink>
      <br />
      {authError && <Alert severity="error">{authError}</Alert>}
      <br />
      {user?.email && <Alert severity="success">User created successfully</Alert>}

     <br />
    

  </Grid>
  
</Grid>
        </Container>
        <Footer></Footer>
        </>
    )
 };

export default Register;