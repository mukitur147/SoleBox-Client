import React from 'react';
import Navigation from '../Shared/Navigation';
import size from '../../Images/sizes.jpg'
import Footer from '../Shared/Footer';

const SizeChart = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="container my-5">
                <h5><b>SIZE CHART</b></h5>
                <img className="img-fluid" src={size} alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SizeChart;