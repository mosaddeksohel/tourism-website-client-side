import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './Footer.css'


const Footer = () => {
    return (
        <>
            <Row className="footer">
                <Col xs={6} md={3}>
                    <div style={{ textAlign: 'left', marginLeft: '3rem', marginTop: '2rem' }}>
                        <h5>Guest Service</h5>
                        <h5>Your Account</h5>
                        <h5>Best attractive place</h5>
                        <h6>Frequently Asked Questions</h6>
                        <h5>Gift Cards</h5>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div style={{ textAlign: 'left', marginLeft: '2rem', marginTop: '2rem' }}>
                        <h5>Learn More</h5>
                        <h5>About Us</h5>
                        <h5>New offers</h5>
                        <h5>Privacy Policy</h5>
                        <h5>Our Blog</h5>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div style={{ textAlign: 'left', marginLeft: '2rem', marginTop: '2rem' }}>
                        <h5>Programs</h5>
                        <h5>Discount Offers</h5>
                        <h5>Travel to forein</h5>
                        <h5>Air Ticket</h5>
                        <h5>Hotel Bocking</h5>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div style={{ textAlign: 'left', marginLeft: '2rem', marginTop: '2rem' }}>
                        <h5>Let's Talk</h5>
                        <Button>CHAT WITY US</Button>
                        <h5>Help Center</h5>
                        <h5>Follow Us</h5>
                    </div>
                </Col>
            </Row>





        </>

    );
};

export default Footer;