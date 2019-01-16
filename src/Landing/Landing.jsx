import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './landing.css';

const Landing = () => {
  return (
    <div id="landing">
      <Jumbotron>
        <h1>Cake and Things!</h1>
        <p>Mmm Mmm, our tasty bake goods are so yummy.</p>
        <p>We have a full stomach guarantee.</p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Landing;
