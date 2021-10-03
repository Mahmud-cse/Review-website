import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../img/Beef.png';
import './Home.css';

const Home = () => {
    return (
        <div>
            <section className="section bg-light">
                <div className="container">
                    <Row className="align-items-center">
                        <Col lg="5">
                            <div>
                                <h4 className="font-weight-normal text-dark mb-3 mt-4">Marketing Performance</h4>
                                <p className="text-muted">Itaque earum rerum hic tenetur sapiente delectut reiciendis voluptatibus perspiciatis unde omnis iste natus error sit maiores alias consequatur perferendisthat doloribus asperiores repellat.</p>
                                <p className="text-muted">Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit minusidquod maxime placeat facere possimus.</p>
                                <p className="mb-0 text-uppercase"><Link  to="/" className="text-primary f-13">learn more <span className="right-arrow ml-1">&#x21FE;</span></Link></p>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="f-14">
                                <img src={img} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
};

export default Home;