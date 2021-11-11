import React from 'react';
import Footer from '../Shared/Footer';
import Navigation from '../Shared/Navigation';
import Banner from './Banner';
import HomeProducts from './HomeProducts/HomeProducts';
import MostSellings from './MostSellings/MostSellings';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <br />
            <Banner></Banner>
            <br />
            <HomeProducts/>
            <br />
            <Reviews/>
            <br />
            <MostSellings/>
            <br />
          
            <Footer></Footer>
        </div>
    );
};

export default Home;