import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useFirebase from '../../../Hooks/useFirebase';
import './Myorders.css'




const MyOrders = () => {
    const [orders,setOrders]=useState([])
    const {user}=useFirebase()
    const [matchedOrder,setMatchedOrder]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[]);
    useEffect(()=>{
      const matchedUser = orders.filter(order=>order.userEmail== user.email)
      setMatchedOrder(matchedUser)
    },[orders])
    
    const handleDelete=(key)=>{
        const url = `http://localhost:5000/orders/${key}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.deletedCount){
               alert('deleted')
               const remaining = matchedOrder.filter(matchedOrder=>matchedOrder._id !== key);
               setMatchedOrder(remaining);
           }
        })
    }



    return (
        
      <div className="mb-5">
      <h2 className="text-danger title my-4"><b>MY ORDERS</b></h2>
      <div className="list ">
          <ul className="list-group list-group-horizontal titles ">
               <li className="list-group-item "><b>Product Name</b></li>
               <li className="list-group-item hidden "><b>Price</b></li>
               <li className="list-group-item"><b>Status</b></li>
               <li className="list-group-item hidden"><b>Cancel</b></li>
           </ul>
          </div>

      {
          matchedOrder.map(order=><div className="list">
          <ul className="list-group list-group-horizontal sec ">
             
               <li className="list-group-item ">{order.product_name}</li>
               <li className="list-group-item hidden">{order.price}</li>
               <li className="list-group-item">Pending</li>
               <li className="list-group-item hidden "> <Button
                    style={{fontSize:'14px'}} 
                    onClick={()=> handleDelete(matchedOrder?._id)}
                    variant="text">Delete</Button></li>
           </ul>
          </div>)
      }
   </div>
    );
};

export default MyOrders;