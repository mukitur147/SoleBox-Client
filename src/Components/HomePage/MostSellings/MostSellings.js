import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import ProductsCard from '../../ProductsCard/ProductsCard';
import sizes from '../../../Images/sizes.jpg'

const MostSellings = () => {
    const [products]=useProducts()
    return (
        <div>
             <h5 className="mb-4"><b>Most Selling Products</b></h5>
             <div className="container">
             <Row xs={1} md={3} className="g-2">
                {Array.from({ length: 1 }).map((_, idx) => (
                 products.slice(18,21).map(product=> <ProductsCard
                  key={product.key}
                  product={product}
                  ></ProductsCard>)
                ))}
            </Row>

            <div className="my-5"> 
                     
                     <h5><b>Our Size Chart</b></h5>
                     <img className="img-fluid" src={sizes} alt="" />

            </div>
            
             </div>
        </div>
    );
};

export default MostSellings;