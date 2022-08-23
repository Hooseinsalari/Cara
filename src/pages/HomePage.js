import React from 'react';

// components
import Header from '../components/Header';
import Features from '../components/Features';
import HomeProducts from '../components/HomeProducts';
import CallToAction from '../components/CallToAction';
import BannerBoxes from '../components/BannerBoxes';

// styles
import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div>
            <Header />
            <Features />
            <HomeProducts />
            <CallToAction />
            <BannerBoxes />
        </div>
    );
};

export default HomePage;