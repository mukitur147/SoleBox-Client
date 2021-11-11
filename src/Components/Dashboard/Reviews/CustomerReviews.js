import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../../Hooks/useFirebase';
import './CustomerReview.css'

const CustomerReviews = () => {
    const {user}=useFirebase()
    const { register, handleSubmit ,reset} = useForm();

    const onSubmit = data =>{

        fetch('http://localhost:5000/reviews',{
            method : 'POST',
            headers:{
                'content-type':'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
           if(result.insertedId){
               
               alert('Review Posted Successfully')
               reset()
           }
        })
    };

    return (
        <div>
            <h4><b>Give us a review</b></h4>


            <form className="hooks2 " onSubmit={handleSubmit(onSubmit)}>
                  <input value={user?.displayName} {...register("userName",{ required: true })}  placeholder="Your Name" /> 
                  <input  value={user?.email} {...register("userEmail",{ required: true })} placeholder="Your Email"  /> 
                  <input type="text"  className="rev" {...register("review_text",{ required: true })} placeholder="Your Review" /> 
                  <input type="number" {...register("rating",{ min: 0, max: 5,required: true  })} placeholder="Rating out of 5"  /> 
                  <button type="submit" className="confirm-button2">Submit</button>
    </form>
        </div>
    );
};

export default CustomerReviews;