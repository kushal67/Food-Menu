import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Carousel } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="https://via.placeholder.com/50"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline className="mx-auto" style={{ display:"flex" }}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" >Search</Button>
          </Form>
          <Nav style={{ marginRight: '20px' }}>
            <Nav.Link href="#cart" >
              <FaShoppingCart size={24} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Carousel interval={3000} controls={false} className="mt-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400.png?text=Image+1"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400.png?text=Image+2"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400.png?text=Image+3"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
