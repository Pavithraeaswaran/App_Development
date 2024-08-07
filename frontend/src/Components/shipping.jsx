import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer'; // Import the Footer component
import '../Assets/CSS/shipping.css'; // Import the CSS file for styling

const Shipping = () => {
    const [shipmentId, setShipmentId] = useState('');
    const [trackingInfo, setTrackingInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setShipmentId(e.target.value);
    };

    const trackShipment = () => {
        setLoading(true);
        setError(null);

        setTimeout(() => {
            const mockResponse = {
                status: 'In Transit',
                location: 'New York, NY',
                expectedDelivery: '2024-07-30',
            };
            setTrackingInfo(mockResponse);
            setLoading(false);
        }, 1000);
    };

    return (
        <div>
            <Navbar />
            <div className="shipping-container">
                <h2>Shipment Tracking and Visibility</h2>
                <div className="input-container">
                    <input
                        type="text"
                        value={shipmentId}
                        onChange={handleInputChange}
                        placeholder="Enter Shipment ID"
                        className="input-box"
                    />
                    <button onClick={trackShipment} className="track-button">Track Shipment</button>
                </div>
                {loading && <p>Loading...</p>}
                {error && <p className="error">{error}</p>}
                {trackingInfo && (
                    <div className="tracking-info">
                        <h3>Tracking Information</h3>
                        <p>Status: {trackingInfo.status}</p>
                        <p>Location: {trackingInfo.location}</p>
                        <p>Expected Delivery: {trackingInfo.expectedDelivery}</p>
                    </div>
                )}
                <div className="additional-info">
                    <div className="how-it-works">
                        <h2>How It Works</h2>
                        <p>Our advanced logistics network allows you to track your package in real-time. From the moment your package is picked up to the final delivery, you will have full visibility.</p>
                    </div>
                    <div className="faq-section">
                        <h2>Frequently Asked Questions</h2>
                        <ul>
                            <li>How do I track my package?</li>
                            <li>What should I do if my package is delayed?</li>
                            <li>Can I change the delivery address?</li>
                        </ul>
                    </div>
                    <div className="customer-support">
                        <h2>Customer Support</h2>
                        <p>If you have any issues or inquiries, please contact our 24/7 support team at <a href="mailto:support@transpomaster.com">support@transpomaster.com</a> or call us at (123) 456-7890.</p>
                    </div>
                </div>
            </div>
            <Footer /> {/* Add the Footer component here */}
        </div>
    );
};

export default Shipping;
