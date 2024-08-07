import React, { useState } from 'react';
import '../Assets/CSS/order.css';
import { Link } from 'react-router-dom';
 
const Order = () => {
  const [orderDetails, setOrderDetails] = useState({
    transportMode: '',
    quantity: '',
    rawMaterialName: '',
    description: '',
    address: '',
    phoneNumber: '',
    customerName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({
      ...orderDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission logic here
    console.log('Order submitted:', orderDetails);
  };

  return (
    <div className="order-container">
      <h1>Place an Order</h1>
      <form onSubmit={handleSubmit} className="order-form">
        <label>
          Transport Mode:
          <select name="transportMode" value={orderDetails.transportMode} onChange={handleChange} required>
            <option value="">Select Mode</option>
            <option value="air">Air</option>
            <option value="sea">Sea</option>
            <option value="land">Land</option>
          </select>
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={orderDetails.quantity} onChange={handleChange} required />
        </label>
        <label>
          Raw Material Name:
          <input type="text" name="rawMaterialName" value={orderDetails.rawMaterialName} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={orderDetails.description} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={orderDetails.address} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={orderDetails.phoneNumber} onChange={handleChange} required />
        </label>
        <label>
          Customer Name:
          <input type="text" name="customerName" value={orderDetails.customerName} onChange={handleChange} required />
        </label>
        <button type="submit" className="submit-button"><Link to="/booking">Submit Order</Link></button>
      </form>
    </div>
  );
};

export default Order;
