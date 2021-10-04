import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../img/chef.jpg';

const About = () => {
    return (
        <div className="container mt-5 custom-c">
            {/* row */}
        <Row className="align-items-center justify-content-center">
            {/* col */}
            <Col lg="6">
                <div className="f-14">
                    <img src={img} alt="" className="mx-auto d-block" height="400px"/>
                </div>
            </Col>
            
            {/* col */}
            <Col lg="5">
                <div>
                    <h4 className="font-weight-normal text-dark mb-3 mt-4">About Your Chef</h4>
                    <p className="text-muted">With one of our online cooking courses, you can improve your skills in the kitchen and learn about some of the principles behind why cooking is important.</p>
                    <p className="text-muted">A series of courses designed to help you specialise your skills. Start a free seven-day trial, subscribe to keep learning at your own pace, and cancel your subscription whenever you like.</p>
                    <p className="mb-0 text-uppercase"><Link  to="/" className="text-primary f-13">learn more <span className="right-arrow ml-1">&#x21FE;</span></Link></p>
                </div>
            </Col>
        </Row>
    </div>
    );
};

export default About;