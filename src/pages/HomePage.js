import React from 'react';

// components
import Header from '../components/Header';
import Features from '../components/Features';
import HomeProducts from '../components/HomeProducts';

// styles
import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div>
            <Header />
            <Features />
            <HomeProducts />
        </div>
    );
};

export default HomePage;