import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, CardGroup,Button } from 'react-bootstrap';

const Service = () => {
  // hooks
    const [recipe,setRecipe]=useState([]);

    useEffect(()=>{
        fetch('/ServiceData.json')
        .then(res=>res.json())
        .then(data=>setRecipe(data));
    },[]);


    return (
        <div>
            <section className="section m-5">
                <h2 className="text-center mb-5">Cooking Recipe</h2>
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

            <section className="section m-5">
              {/* card */}
                <CardGroup className="gap-5">
                    <Card>
                        <Card.Img variant="top" src={recipe[4]?.strMealThumb} />
                        <Card.Body>
                          <Card.Title>{recipe[4]?.strMeal}</Card.Title>
                          <Card.Text className="text-muted">
                          {recipe[4]?.strInstructions}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-primary">$ 1000</Button>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={recipe[5]?.strMealThumb} />
                        <Card.Body>
                          <Card.Title>{recipe[5]?.strMeal}</Card.Title>
                          <Card.Text className="text-muted">
                          {recipe[5]?.strInstructions}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-primary">$ 1100</Button>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={recipe[6]?.strMealThumb} />
                        <Card.Body>
                          <Card.Title>{recipe[6]?.strMeal}</Card.Title>
                          <Card.Text className="text-muted">
                          {recipe[6]?.strInstructions}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-primary">$ 1300</Button>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={recipe[7]?.strMealThumb} />
                        <Card.Body>
                          <Card.Title>{recipe[7]?.strMeal}</Card.Title>
                          <Card.Text className="text-muted">
                          {recipe[7]?.strInstructions}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-primary">$ 1400</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </section>
        </div>
    );
};

export default Service;