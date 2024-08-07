import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/CSS/inventory.css';
import Navbar from './navbar'; // Import your existing Navbar component
import Footer from './footer'; // Import the Footer component
import '../Assets/CSS/inventory.css'; // Import the CSS file for styling
import oak from '../Assets/Images/im1.jpg';
import pine from '../Assets/Images/im2.jpg';
import maple from '../Assets/Images/im3.jpg';
import teak from '../Assets/Images/im4.jpg';
import mahogany from '../Assets/Images/im5.jpg';
import bamboo from '../Assets/Images/im6.jpg';
import bamb from '../Assets/Images/im7.jpg';
import bambo from '../Assets/Images/im8.jpg';
import mahogan from '../Assets/Images/im9.jpg';

const items = [
  { name: 'INOX MAGNETIC STEEL ROD ', quantity: 100, image: oak, description: 'Durable, high-quality stainless steel rod ideal for precision engineering and manufacturing applications.' },
  { name: 'RUBBER COATED STEEL SHEET ', quantity: 150, image: pine, description: 'Versatile, rust-resistant steel sheet with a protective rubber coating for enhanced durability and impact resistance.' },
  { name: 'STAINLESS STEEL ', quantity: 75, image: maple, description: 'Stainless Steel: Corrosion-resistant, durable steel alloy perfect for a wide range of industrial and architectural applications.' },
  { name: 'ALUMINIUM CUTTING PLATE', quantity: 200, image: teak, description: ' Lightweight, high-strength plate ideal for precision cutting and machining tasks in various industrial applications.' },
  { name: 'PHARMACEUTICALS', quantity: 50, image: mahogany, description: 'High-quality, regulated products designed for the prevention, treatment, and management of health conditions and diseases.' },
  { name: 'COAL', quantity: 300, image: bamboo, description: 'Essential fossil fuel used for energy production, industrial processes, and as a key raw material in various manufacturing applications.' },
  { name: 'GRAVEL', quantity: 300, image: bamb, description: ' Versatile aggregate used in construction, landscaping, and road building for its drainage and foundational support properties.' },
  { name: 'FABRICS', quantity: 300, image: bambo, description: 'Wide range of materials used in textiles and garments, offering various textures, strengths, and applications for fashion.' },
  { name: 'HANDLOOM AND COTTON YARNS', quantity: 50, image: mahogan, description: 'High-quality, naturally spun yarns ideal for traditional weaving and crafting, offering durability and a natural feel for various textile applications.' },
];

const Inventory = () => {
  return (
    <div><Navbar />
    <div className='inventory'>
      <div className="inventory-container">
        <h1 className="inventory-title">Current Warehouse Inventory</h1>
        <div className="inventory-items">
          {items.map((item, index) => (
            <div key={index} className="inventory-item">
              <img src={item.image} alt={item.name} className="inventory-item-image" />
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>{item.description}</p>
              <Link to="/booking">
                <button><Link to="/order">Order</Link> </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Inventory;