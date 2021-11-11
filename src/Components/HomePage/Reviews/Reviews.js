import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import useReviews from '../../../Hooks/useReviews';
import ReviewsCard from '../../ReviewsCard/ReviewsCard';

const Reviews = () => {
    const [reviews]=useReviews()
    return (
        <div>
             <h5 className="mb-4"><b>Customer Reviews</b></h5>
             <div className="container">
             
             <Row xs={2} md={4} className="g-2">
                {Array.from({ length: 1 }).map((_, idx) => (
                 reviews.map(review=> <ReviewsCard
                 review={review}
                 ></ReviewsCard>)
                ))}
            </Row>
 
             
            
             </div>
        </div>
    );
};

export default Reviews;