import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// context
import CartContextProvider from "./context/CartContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";

// pages
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProductPage from "./pages/ProductPage";
import Blog from "./pages/Blog";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// components
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

// helper
import ScrollToTop from "./helper/ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <AuthContextProvider>
      <CartContextProvider>
        <div className="App">
          <Navbar />
          <ScrollToTop>
            <Routes>
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/shop/product/:id" element={<ProductPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </ScrollToTop>
          <Footer />
        </div>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
