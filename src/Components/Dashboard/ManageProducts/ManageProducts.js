import { Button } from '@mui/material';
import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import './ManageProducts.css'

const ManageProducts = () => {
    const [products,setProducts]=useProducts()
    
    const handleDelete=(key)=>{
        const url = `http://localhost:5000/products/${key}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.deletedCount){
               alert('deleted')
               const remaining = products.filter(product=>product._id !== key);
               setProducts(remaining);
           }
        })
    }
    return (
        <div className="mb-5">
           <h2 className="text-danger title my-4"><b>Manage Products</b></h2>
           <div className="list">
               <ul className="list-group list-group-horizontal titles ">
                    <li className="list-group-item item2"><b>Image</b></li>
                    <li className="list-group-item item1"><b>Product Name</b></li>
                    <li className="list-group-item hidden "><b>Price</b></li>
                    <li className="list-group-item hidden"><b>Remove</b></li>
                </ul>
               </div>

           {
               products.map(product=><div className="list">
               <ul className="list-group list-group-horizontal ">
                    <li className="list-group-item "><img className="pr-img" src={product.image} alt="" /></li>
                    <li className="list-group-item ">{product.name}</li>
                    <li className="list-group-item hidden">{product.price}</li>
                    <li className="list-group-item hidden"> <Button 
                    onClick={()=> handleDelete(product?._id)}
                    variant="text">Delete</Button></li>
                   
                </ul>
               </div>)
           }
        </div>
    );
};

export default ManageProducts;