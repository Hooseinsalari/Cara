import './App.css';

// components
import Navbar from './components/shared/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
