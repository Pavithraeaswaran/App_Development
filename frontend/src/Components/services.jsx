import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar'; // Import your existing Navbar component
import Footer from './footer'; // Import the Footer component
import '../Assets/CSS/service.css'; // Import the CSS file for styling

// Import images
import airImage from '../Assets/Images/1.jpg';
import seaImage from '../Assets/Images/2.jpg';
import roadImage from '../Assets/Images/3.jpg';
import railImage from '../Assets/Images/4.jpg';
import pipelineImage from '../Assets/Images/5.jpg';
import intermodalImage from '../Assets/Images/6.jpg';
import bonjohnson from '../Assets/Images/bonjohnson.jpg';
import agri from '../Assets/Images/agri.jpeg';
import auto from '../Assets/Images/auto.jpeg';
import clean from '../Assets/Images/clean.jpeg';
import construct from '../Assets/Images/construct.jpeg';
import food from '../Assets/Images/food.jpeg';
import furn from '../Assets/Images/furn.jpeg';
import hotel from '../Assets/Images/hotel.jpeg';
import marine from '../Assets/Images/marine.jpeg';
import text from '../Assets/Images/text.jpeg';
import trade from '../Assets/Images/trade.jpeg';
import plastic from '../Assets/Images/plastic.jpeg';
import laun from '../Assets/Images/laun.jpeg';

// Mock data for raw materials
const rawMaterials = [
    { name: 'Construction Industry', image: construct, transport: 'air'},
    { name: 'Textile Industry', image: text, transport: 'sea' },
    { name: 'Marine Industry', image: marine, transport: 'road' },
    { name: 'Automobile Industry', image: auto, transport: 'rail' },
    { name: 'Furniture Industry', image: furn, transport: 'pipeline' },
    { name: 'Cleaning Solution', image: clean, transport: 'rail' },
    { name: 'Laundry Industry', image: laun, transport: 'intermodal' },
    { name: 'Plastic Industry', image: plastic, transport: 'sea' },
    { name: 'Food & Beverage', image: food, transport: 'road' },
    { name: 'Agricultural Products', image: agri, transport: 'intermodal' },
    { name: 'Hotels & Resorts', image: hotel, transport: 'intermodal' },
    { name: 'Trade & Services', image: trade, transport: 'air' },
];

const images = {
    all: null,
    air: airImage,
    sea: seaImage,
    road: roadImage,
    rail: railImage,
    pipeline: pipelineImage,
    intermodal: intermodalImage,
};

const Service = () => {
    const [selectedMode, setSelectedMode] = useState('all');
    const [showDetails, setShowDetails] = useState(false);

    const handleModeChange = (e) => {
        setSelectedMode(e.target.value);
        setShowDetails(true); // Show details when a mode is selected
    };

    return (
        <div>
            <Navbar />
            <div className="service-container">
                <h2>Transportation Planning and Execution</h2>
                
                {/* Filters for Modes of Transport */}
                <div className="filters-container">
                    <h3>Filter by Mode of Transport</h3>
                    <div className="mode-filters">
                        {Object.keys(images).map((mode) => (
                            <label key={mode} className={`mode-label ${selectedMode === mode ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    value={mode}
                                    checked={selectedMode === mode}
                                    onChange={handleModeChange}
                                />
                                <div className="mode-info">
                                    {mode !== 'all' && <img src={images[mode]} alt={mode} className="mode-img" />}
                                    <span className="mode-text">{mode.charAt(0).toUpperCase() + mode.slice(1)}</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Display Content Based on Selected Mode */}
                <div className="details-container">
                    {showDetails && (
                        <div className="details-content">
                            <h3>Supplier and Vendor Management for {selectedMode === 'all' ? 'All Transport Modes' : `${selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)} Transport`}</h3>
                            <div className="details-form">
                                <label htmlFor="supplier">Supplier Name:</label>
                                <input type="text" id="supplier" placeholder="Enter supplier name" />

                                <label htmlFor="vendor">Vendor Name:</label>
                                <input type="text" id="vendor" placeholder="Enter vendor name" />

                                <label htmlFor="performance">Performance Metrics:</label>
                                <textarea id="performance" placeholder="Enter performance metrics"></textarea>

                                <button className="submit-button"><Link to="/booking">Submit</Link></button>
                            </div>
                            <div className="details-info">
                                <h4>Additional Information</h4>
                                <p>Track supplier information, monitor vendor performance metrics, and collaborate effectively with suppliers to ensure timely and quality deliveries. Each mode of transport has specific requirements and metrics to be managed.</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Raw Materials Section */}
                <div className="materials-container">
                    <h3>Raw Materials for {selectedMode === 'all' ? 'All Transport Modes' : `${selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)} Transport`}</h3>
                    <div className="materials-grid">
                        {rawMaterials
                            .filter(material => selectedMode === 'all' || material.transport === selectedMode)
                            .map((material, index) => (
                                <div key={index} className="material-card">
                                    <img src={material.image} alt={material.name} className="material-img" />
                                    <div className="material-info">
                                        <h4>{material.name}</h4>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Warehouse Management Section */}
                <div className="warehouse-management">
                    <h2>Warehouse Management</h2>
                    <div className="warehouse-info">
                        <img src={bonjohnson} alt="Warehouse" className="warehouse-img" />
                        <div className="warehouse-details">
                            <h3>Inventory Management</h3>
                            <p>Manage your inventory efficiently with real-time updates and tracking.</p>
                            <h3>Storage Location Optimization</h3>
                            <p>Optimize storage locations to maximize space and improve accessibility.</p>
                            <h3>Order Fulfillment</h3>
                            <p>Streamline order fulfillment processes to enhance efficiency and accuracy.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer /> {/* Add the Footer component here */}
        </div>
    );
};

export default Service;
