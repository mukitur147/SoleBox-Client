import React from 'react';
import { Form } from 'react-bootstrap';
import Footer from '../Shared/Footer';
import Navigation from '../Shared/Navigation';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="container my-5 contact">
            <h5><b>CONTACT US</b></h5>
            <p style={{fontSize:'18px',color:'rgb(77, 75, 75)'}}><small>If you have any questions in regards to your order or general inquiries <br /> about our site feel free to contact with us at anytime . Our customer <br /> support agents  are available 24/7 and should respond within 24 hours</small></p>
            
            <Form.Control  size="sm" type="text" placeholder="Your Name" /> <br />
            <Form.Control  size="sm" type="email" placeholder="Your Email" /> <br />
            <Form.Control size="sm" type="number" placeholder="Phone Number" /> <br />
            <Form.Group   className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Control className="text-msg" size="sm" placeholder="Your Message"  as="textarea" rows={3} />
            </Form.Group>
            <button className="contact-button">Send</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;