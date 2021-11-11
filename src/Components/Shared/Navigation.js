import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Navigation.css'

const Navigation = () => {
  const {user,logOut}=useFirebase()
    return (
        <div className="main-nav">
            <h3 className="shop-name mt-3">SoleBox</h3>

    <Navbar expand="lg">
     <Container> 
     <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-auto togg"   />
     
     <Navbar.Collapse id="basic-navbar-nav">
         
     <Nav className="mx-auto navs">
        <Link to="/home">Home</Link>
        <Link to="/allProducts">Products</Link>
        <Link to="/sizeChart">Size Chart</Link>
        <Link to="/contact">Contact Us</Link>
        {
          user.email ? <div>
            <Link to="/dashboard">Dashboard</Link>
            <button className="navs-button" onClick={logOut}>Logout</button>
            </div> 
          :
          <Link to="/login">Login</Link>
        }
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Navigation;