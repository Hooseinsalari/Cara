import './App.css';
import {Routes, Route} from "react-router-dom";

// context
import CartContextProvider from './context/CartContextProvider';

// pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

// components
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
