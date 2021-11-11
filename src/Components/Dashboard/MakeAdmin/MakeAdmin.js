import { TextField ,Button } from '@mui/material';

import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]= useState('');
    const handleOnBlur= e=>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit= e =>{
        const user = {email}
        fetch('https://dry-hamlet-68582.herokuapp.com/users',{
            method : 'PUT',
            headers :{
                'content-type':'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                alert('Admin added successfull')
            }
        })
        e.preventDefault()
    }
    return (
        <div>
            <h3 className="my-5"><b>Make Admin</b></h3>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                sx={{width:'60%'}}
                label="Email"
                type="email"
                variant="standard"
                onBlur={handleOnBlur}
                
                />
                <br />
                <button type="submit" className="navs-button mt-4">Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;