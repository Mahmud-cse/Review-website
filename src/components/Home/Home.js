import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, CardGroup, Col, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import img from '../img/Beef.png';

const Home = () => {
  // hooks
    const [recipe,setRecipe]=useState([]);

    useEffect(()=>{
        fetch('/homeService.json')
        .then(res=>res.json())
        .then(data=>setRecipe(data));
    },[]);


    return (
        <div>
            <section className="section bg-light pt-3">
              {/* container */}
                <div className="container">
                    <Row className="align-items-center">
                        <Col lg="5">
                            <div>
                                <h4 className="font-weight-normal text-dark mb-3 mt-4">Learn Cooking</h4>
                                <p className="text-muted">With one of our online cooking courses, you can improve your skills in the kitchen and learn about some of the principles behind why cooking is important.</p>
                                <p className="text-muted">A series of courses designed to help you specialise your skills. Start a free seven-day trial, subscribe to keep learning at your own pace, and cancel your subscription whenever you like.</p>
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

            <section className="section m-5">
                <h2 className="text-center mb-5">Our Services</h2>
                {/* card */}
                <CardGroup className="gap-5">
                  <Card>
                    <Card.Img variant="top" src={recipe[0]?.strMealThumb} />
                    <Card.Body>
                      <Card.Title>{recipe[0]?.strMeal}</Card.Title>
                      <Card.Text className="text-muted">
                        {recipe[0]?.strInstructions}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-primary">$ 1600</Button>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Img variant="top" src={recipe[1]?.strMealThumb} />
                    <Card.Body>
                      <Card.Title>{recipe[1]?.strMeal}</Card.Title>
                      <Card.Text className="text-muted">
                      {recipe[1]?.strInstructions}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="outline-primary">$ 1400</Button>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Img variant="top" src={recipe[2]?.strMealThumb} />
                    <Card.Body>
                      <Card.Title>{recipe[2]?.strMeal}</Card.Title>
                      <Card.Text className="text-muted">
                      {recipe[2]?.strInstructions}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="outline-primary">$ 1100</Button>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Img variant="top" src={recipe[3]?.strMealThumb} />
                    <Card.Body>
                      <Card.Title>{recipe[3]?.strMeal}</Card.Title>
                      <Card.Text className="text-muted">
                      {recipe[3]?.strInstructions}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-primary">$ 1000</Button>
                    </Card.Footer>
                  </Card>
                </CardGroup>
            </section>
        </div>
    );
};

export default Home;