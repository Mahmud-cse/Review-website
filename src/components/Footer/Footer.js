import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <Container className="mt-5">
        <Row>
            <Col lg="4">
                <div className="mb-5">
                    <p className="text-uppercase text-dark mb-4">About Us</p>
                    <p className="text-muted newValue">Our support available to help you 24 hours a day, seven days a week.

                    Please Call: + 1 703 4959 3452
                    For more information test@gmail.com
                    </p>
                </div>
            </Col>
            
            <Col lg="8">
                <Row>
                    <Col lg="4">
                    <div className="mb-5">
                            <p className="text-uppercase text-dark mb-4">company</p>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="text-muted newValue">Monitoring Grader</Link></li>
                                <li><Link to="/" className="text-muted newValue">Job Opening</Link></li>
                                <li><Link to="/" className="text-muted newValue">Customers</Link></li>
                                <li><Link to="/" className="text-muted newValue">Privacy</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="4">
                    <div className="mb-5">
                            <p className="text-uppercase text-dark mb-4">support</p>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="text-muted newValue">Get Started</Link></li>
                                <li><Link to="/" className="text-muted newValue">Blog</Link></li>
                                <li><Link to="/" className="text-muted newValue">Knowledge Base</Link></li>
                                <li><Link to="/" className="text-muted newValue">Privacy</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="4">
                    <div className="mb-5">
                            <p className="text-uppercase text-dark mb-4">Legal</p>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="text-muted newValue">Terms & Conditions</Link></li>
                                <li><Link to="/" className="text-muted newValue">Privacy Policy</Link></li>
                                <li><Link to="/" className="text-muted newValue">Customers</Link></li>
                                <li><Link to="/" className="text-muted newValue">Pricing</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Col>
          </Row>
        </Container>
    );
};

export default Footer;