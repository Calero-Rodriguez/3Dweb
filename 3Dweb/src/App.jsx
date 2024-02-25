import './App.css'
import { Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
