import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useProducts from '../../Hooks/useProducts';
import Footer from '../Shared/Footer';
import Navigation from '../Shared/Navigation';
import './ProductDetails.css'
import { useForm } from "react-hook-form";
import userEvent from '@testing-library/user-event';
import useFirebase from '../../Hooks/useFirebase';

const ProductDetails = () => {

    const { register, handleSubmit,reset } = useForm();
    const {user}=useFirebase()
    
    const {id}=useParams()
    const [products,setProducts]=useState([])
    const [singleProduct,setSingleProduct]=useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const foundProduct = products.find(product=>product.id==id)
        setSingleProduct(foundProduct)
    },[products])


    const onSubmit = data =>{
        data.product_name= singleProduct?.name
        data.price=singleProduct?.prevPrice
        data.key=singleProduct?.id
        console.log(data)

        fetch('http://localhost:5000/orders',{
            method : 'POST',
            headers:{
                'content-type':'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
           if(result.insertedId){
               
               alert('Order processed Successfully')
               reset()
           }
        })
    };

    return (
        <div>
            <Navigation></Navigation>
            <div className=" container main-container my-2">
               <div>
                   <img className="img-fluid sp-img" src={singleProduct?.image} alt="" />
               </div>
               <div className="left-align">
                   <h4><b>{singleProduct?.name}</b></h4>
                   <div className="d-flex ">
                   <h6 className="me-2"><b>${singleProduct?.prevPrice}</b></h6>
                   <h6><del><b>${singleProduct?.price}</b></del></h6>
                   </div>
                   <p><small>{singleProduct?.description}</small></p>
                   


                    
                   <form className="mt-3 hooks" onSubmit={handleSubmit(onSubmit)}>
                  <input value={user.displayName} {...register("userName")} required placeholder="Your Name" /> 
                  <input value={user.email} {...register("userEmail")} placeholder="Your Email" required /> 
                  <input {...register("address")} placeholder="Address" required/>
                  <input type="number" {...register("phone")} placeholder="Phone Number" required />
                  <button type="submit" className="confirm-button">Confirm Purchase</button>
    </form>
               </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;