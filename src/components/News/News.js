import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, CardGroup,Button } from 'react-bootstrap';
import './News.css';

import img1 from '../img/news1.jpg'
import img2 from '../img/news2.jpg'
import img3 from '../img/news3.jpg'
import { Link } from 'react-router-dom';

const News = () => {
  // hooks
    const [news,setNews]=useState([]);
    useEffect(()=>{
        fetch('/blog.json')
        .then(res=>res.json())
        .then(data=>setNews(data));
    },[]);

    console.log(news);

    return (
        <div>
            <section className="section m-5">
              {/* card */}
                <CardGroup className="gap-5">
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                          <Card.Title>{news[0]?.title}</Card.Title>
                          <Card.Text className="text-muted">
                            {news[0]?.content}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer className="custom-b">
                            <Link to="/service">
                                <Button variant="outline-primary" >Know More</Button>
                            </Link>
                        </Card.Footer>
                      </Card>

                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                          <Card.Title>{news[1]?.title}</Card.Title>
                          <Card.Text className="text-muted">
                            {news[1]?.content}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer className="custom-b">
                            <Link to="/service">
                                <Button variant="outline-primary" >Know More</Button>
                            </Link>
                        </Card.Footer>
                      </Card>

                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                          <Card.Title>{news[2]?.content}</Card.Title>
                          <Card.Text className="text-muted">
                            {news[2]?.content}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer className="custom-b">
                            <Link to="/service">
                                <Button variant="outline-primary" >Know More</Button>
                            </Link>
                        </Card.Footer>
                      </Card>
                </CardGroup>
            </section>
        </div>
    );
};

export default News;