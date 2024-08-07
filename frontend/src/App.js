import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/User/home';
import Login from "./Pages/User/login";
import Register from "./Pages/User/register";
import Services from './Components/services';
import Tracking from './Components/tracking';
import Contact from './Components/contact';
import Shipping from './Components/shipping';
import Inventory from './Components/inventory';
import BookingPage from './Components/booking';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import ALogin from './Pages/User/login1';
import Admin from './Components/Admin';
import Products from './Components/products';
import Categories from './Components/catagories';
import Customers from './Components/customers';
import Inventories from './Components/inventories';
import Reports from './Components/reports';
import Settings from './Components/settings';
import Order from './Components/order';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Sidebar" element={<Sidebar/>} />
          <Route path="/Header" element={<Header/>} />
          <Route path="/login1" element={<ALogin/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/products" element={<Products />} />
          <Route path="/booking" element={< BookingPage/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/customers" element={<Customers/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/settings" element={< Settings/>} />
          <Route path="/inventories" element={< Inventories/>} />
          <Route path="/inventories" element={< Inventories/>} />
          <Route path="/order" element={< Order/>} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
