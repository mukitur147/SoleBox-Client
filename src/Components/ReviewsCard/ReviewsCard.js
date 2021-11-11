import { Rating } from '@mui/material';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ReviewCard.css';
import StarIcon from '@mui/icons-material/Star';

const ReviewsCard = ({review}) => {
    const {userName,rating,review_text}=review
    return (
        <div>
             <Col>
      <Card className="review-card">
        <h6><b>{userName}</b></h6>
        <Rating
        style={{fontSize:'18px'}}
        name="text-feedback"
        value={rating}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
         <p><small>{review_text}</small></p>
        
      </Card>
    </Col>
        </div>
    );
};

export default ReviewsCard;