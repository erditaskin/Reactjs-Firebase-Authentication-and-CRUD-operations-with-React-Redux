import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Container 
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
    >
    <div className="w-100" style={{ maxWidth: "700px" }}>
      <h1 className="heading1">Inventory Task</h1>
      <Jumbotron className="text-center">
        <h1>404 - Not Found!</h1>
        <h6>The page you looking for is not found.</h6>
        <Link className="btn btn-primary btn-lg mt-5" to="/">Return Home</Link>
      </Jumbotron>
    </div>
  </Container>
);

export default NotFound;