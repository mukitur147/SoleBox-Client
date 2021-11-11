import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        data.id= 4
        fetch('http://localhost:5000/products',{
            method : 'POST',
            headers:{
                'content-type':'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
           if(result.insertedId){
               
               alert('Product Added Successfully')
               reset()
           }
        })
       
        
   };
    return (
        <div>
           <h3><b>Add Products</b></h3>
           <form className="hooks2" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true})} placeholder="Product Name" />
      <input className="rev" {...register("details", { required: true})} placeholder="Short Details" />
      <input className="rev" {...register("description", { required: true})} placeholder="Details" />
      <input {...register("image", { required: true})} placeholder="Image Link" />
      <input {...register("price", {required: true })} placeholder="Previous Price" />
      <input {...register("prevPrice", {required: true })}  placeholder="Discounted Price"/>
      <button type="submit" className="confirm-button2">Submit</button>
    </form>
        </div>
    );
};

export default AddProducts;