import React, { useState, useEffect } from 'react';
import '../../Assets/CSS/home.css';
import Navbar from '../../Components/navbar';
import Footer from '../../Components/footer';
import Card from '../../Components/card';
import img1 from '../../Assets/Images/img1.png';
import img2 from '../../Assets/Images/img2.png';
import img3 from '../../Assets/Images/img3.png';
import img4 from '../../Assets/Images/img4.png';
import img5 from '../../Assets/Images/img5.png';
import img6 from '../../Assets/Images/img6.png';
import img7 from '../../Assets/Images/img7.png';

function Home() {
  const features = [
    { title: "Real-Time Tracking", description: "Track your shipments in real-time with our advanced GPS system." },
    { title: "Inventory Management", description: "Manage your inventory with precision and ease." },
    { title: "Secure Payments", description: "Ensure secure and reliable transactions with our payment gateway." },
    { title: "Detailed Analytics", description: "Gain insights with detailed analytics and reporting tools." },
  ];

  const storeInfo = [
    { title: "Our Story", description: "We started our journey in 2010, aiming to revolutionize logistics." },
    { title: "Our Mission", description: "To provide the fastest and most reliable delivery services." },
    { title: "Our Vision", description: "To be the global leader in logistics and supply chain solutions." },
  ];

  const services = [
    { title: "Transportation Planning", description: "Optimize routes and manage transportation resources efficiently." },
    { title: "Supplier and Vendor Management", description: "Manage your suppliers and vendors effectively with our tools." },
    { title: "Warehouse Management", description: "Automate and streamline your warehouse operations." },
    { title: "Order Fulfillment", description: "Ensure timely and accurate order fulfillment." },
  ];

  const testimonials = [
    { name: "John Doe", feedback: "Excellent service! Our logistics operations have never been smoother." },
    { name: "Jane Smith", feedback: "The real-time tracking feature is a game-changer for us." },
    { name: "Mark Johnson", feedback: "Highly reliable and efficient service. Highly recommend!" },
  ];

  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1200); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <Navbar />
      <div className="carousel-container">
        <img src={images[currentImageIndex]} alt="carousel" className="carousel-image" />
      </div>
      <div className="home-container">
      
        <div className="card-container">
          {features.map((feature, index) => (
            <Card key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
        
      
        <div className="card-container">
          {storeInfo.map((info, index) => (
            <Card key={index} title={info.title} description={info.description} />
          ))}
        </div>
 
        <div className="card-container">
          {services.map((service, index) => (
            <Card key={index} title={service.title} description={service.description} />
          ))}
        </div>

       
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
