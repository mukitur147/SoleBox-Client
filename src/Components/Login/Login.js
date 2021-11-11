import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { NavLink ,useLocation,useHistory} from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import cover from '../../Images/cover4.jpg'
import Navigation from '../Shared/Navigation';
import Footer from '../Shared/Footer';

const Login = () => {
    const [loginData,setLoginData]=useState({})
  const {user,loginUser,isLoading,authError}=useFirebase();
  const location = useLocation();
  const history = useHistory();





  const handleOnChange=e=>{
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field]=value;
    setLoginData(newLoginData);
  }

  const handleLoginSubmit= e =>{
    loginUser(loginData.email,loginData.password,location,history)
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
        Login
    </Typography>

    <form onSubmit={handleLoginSubmit}>
    <TextField
     sx={{my:3 ,width:'75%'}} 
     id="standard-basic" 
     label="Email" 
     variant="standard" 
     name="email"
     onBlur={handleOnChange}
     />
    <br/>
    <TextField 
      sx={{width:'75%',mb:3}} 
      id="standard-basic" 
      label="Password" 
      variant="standard" 
      type="password"
      name="password"
      onBlur={handleOnChange}
      />
     <br/>
     
    <Button type="submit" sx={{backgroundColor:'Black',width:'75%'}} variant="contained">Login</Button>
    {isLoading && <CircularProgress/>}
    </form>
   <br/>

    <NavLink style={{textDecoration:'none'}} to="/register">  <Button variant="text">New user? Please register now</Button></NavLink>
    
    {authError && <Alert severity="error">{authError}</Alert>}
    {user?.email && <Alert severity="success">User login successfully</Alert>}

</Grid>

</Grid>
      </Container>
      <Footer></Footer>
      </>
    );
};

export default Login;