import React, { useState } from 'react';
import '../Assets/CSS/booking.css';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Payment Details:', formData);
    alert('Payment submitted successfully!');
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h2 className="payment-title">Payment</h2>
      </div>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="payment-form-group">
          <label className="payment-label" htmlFor="cardName">Cardholder Name</label>
          <input
            className="payment-input"
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="payment-form-group">
          <label className="payment-label" htmlFor="cardNumber">Card Number</label>
          <input
            className="payment-input"
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="payment-form-group">
          <label className="payment-label" htmlFor="expiryDate">Expiry Date</label>
          <input
            className="payment-input"
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="payment-form-group">
          <label className="payment-label" htmlFor="cvv">CVV</label>
          <input
            className="payment-input"
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <div className="payment-form-group">
          <label className="payment-label" htmlFor="amount">Amount</label>
          <input
            className="payment-input"
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <button className="payment-button" type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default BookingPage;
