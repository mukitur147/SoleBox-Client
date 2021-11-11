import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import ProductsCard from '../ProductsCard/ProductsCard';
import Footer from '../Shared/Footer';
import Navigation from '../Shared/Navigation';

const AllProducts = () => {
    const [products]=useProducts()
    return (
        <div>
            <Navigation></Navigation>
             <div className="container my-5">
             <Row xs={2} md={4} className="g-2">
                {Array.from({ length: 1 }).map((_, idx) => (
                 products.map(product=> <ProductsCard
                  key={product.key}
                  product={product}
                  ></ProductsCard>)
                ))}
            </Row>
             </div>
             <Footer></Footer>
        </div>
    );
};

export default AllProducts;