import "./App.css";
import { Routes, Route } from "react-router-dom";

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

// components
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import ScrollToTop from "./helper/ScrollToTop";

function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <div className="App">
          <Navbar />
          <ScrollToTop>
            <Routes>
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
