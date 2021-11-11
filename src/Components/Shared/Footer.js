import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer container">
                <div>
                   <h6>NEWSLETTER</h6>
                   <p>Subscribe to be the first to hear about our exclusive offers and letter arrivals.</p> 
                   <input type="email" placeholder="email@example.com" />
                   <button>GO</button> 
                </div>
                <div>
                    <h6>CUSTOMER SUPPORT</h6>
                    <p>Contact Us</p>
                    <p>Return/Refunds</p>
                    <p>Shipping FAQs</p>
                    <p>Sizing Guide</p>
                 
                </div>
                <div>
                    <h6>FEATURED COLLECTION</h6>
                    <p>High Tops</p>
                    <p>Low Tops</p>
                    <p>New Release</p>
                </div>
                <div>
                    <h6>GET IN TOUCH</h6>
                    <p>support@solebox.com</p>
                    <p>Taltola,Khilgaon,Dhaka</p>
                </div>
            </div>
            <p className="mt-4 dev"><small>Developed by - Mukitur Rahman Tilok</small></p>
        </div>
    );
};

export default Footer;