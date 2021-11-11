import React from 'react';
import { Card  ,Button, Row, Col } from 'react-bootstrap';
import { Link ,useHistory} from 'react-router-dom';
import './ProductCard.css'

const ProductsCard = ({product}) => {
    const {image,name,price,prevPrice,details,id}=product
    const history= useHistory()
    const handleDetails=()=>{
      history.push(`/productDetails/${id}`)
    }
    return (
        <div>
       
    <Col>
      <Card className="product-card">
        <img src={image} alt={name} />
        <h6><b>{name}</b></h6>
         
          <div className="d-flex justify-content-center prices">
          <p className="me-2"><small>${prevPrice}</small></p>    
          <p><del><small>${price}</small></del></p>
          </div>
          <p className="details">{details}</p>
          <button onClick={handleDetails} className="purchase-button">Purchase</button>
        
      </Card>
    </Col>
        </div>
    );
};

export default ProductsCard;