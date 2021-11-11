import React from 'react';
import { Link } from 'react-router-dom';
import shoeCover from '../../Images/cover3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="left-div">
        
            <h1>PRESENTING</h1>
            <h1>SOLEBOX 33Y</h1>
            <Link to="/allProducts"><button className="mt-3 custom-button">Explore More</button></Link>
            </div>
            <div className="right-div">
             <img className="img-fluid" src={shoeCover} alt="" />
            </div>
        </div>
    );
};

export default Banner;