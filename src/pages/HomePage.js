import React from "react";

// components
import Header from "../components/HomePage/Header";
import Features from "../components/HomePage/Features";
import HomeProducts from "../components/HomePage/HomeProducts";
import CallToAction from "../components/HomePage/CallToAction";
import BannerBoxes from "../components/HomePage/BannerBoxes";

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
