import React, { useEffect, useState } from 'react';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[]);
    

    return (
      <div className="mb-5">
      <h2 className="text-danger title my-4"><b>Manage Orders</b></h2>
      <div className="list">
          <ul className="list-group list-group-horizontal titles">
               <li className="list-group-item hidden"><b>Name</b></li>
               <li className="list-group-item "><b>Product Name</b></li>
               <li className="list-group-item hidden "><b>Price</b></li>
               <li className="list-group-item"><b>Status</b></li>
           </ul>
          </div>

      {
          orders.map(order=><div className="list">
          <ul className="list-group list-group-horizontal ">
             
               <li className="list-group-item hidden ">{order.userName}</li>
               <li className="list-group-item ">{order.product_name}</li>
               <li className="list-group-item hidden">{order.price}</li>
               <li className="list-group-item">Pending</li>
           </ul>
          </div>)
      }
   </div>
    );
};

export default ManageOrders;