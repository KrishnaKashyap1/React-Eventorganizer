
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
/* import ProductCategory from './Pages/ProductCategory'; */
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import CallUs from './Components/Call Us/CallUs';
import About from './Pages/About';
import Service from './Pages/Service';
import Gallery from './Pages/Gallery';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Service/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/product' element={<Product/>}>
             <Route path=':productId' element={<Product/>} />
          </Route>
        </Routes>
        <Footer />
        <CallUs />
      </BrowserRouter>
    </div>
  );
}

export default App;
