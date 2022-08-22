import React from 'react';

// components
import Header from '../components/Header';
import Features from '../components/Features';

// styles
import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div>
            <Header />
            <Features />
        </div>
    );
};

export default HomePage;