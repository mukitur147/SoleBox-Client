import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import ProductsCard from '../../ProductsCard/ProductsCard';
import './HomeProducts.css'

const HomeProducts = () => {
    const [products]=useProducts()
    return (
        <div>
            <h5 className="mb-4"><b>Some of Our Products</b></h5>
             <div className="container">
             <Row xs={2} md={3} className="g-2">
                {Array.from({ length: 1 }).map((_, idx) => (
                 products.slice(0,6).map(product=> <ProductsCard
                  key={product.key}
                  product={product}
                  ></ProductsCard>)
                ))}
            </Row>
            <div className="view-all"><Link to="/allProducts" >- View All </Link></div>
            
             </div>
           
        </div>
    );
};

export default HomeProducts;