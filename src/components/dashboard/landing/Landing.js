import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-md-12">
            <h1 className="heading1">Welcome to Inventory Task</h1>
          </Col>
          <Col className="col-md-12 text-center">
            <Jumbotron className="jumbotron">
              <h3>Inventory task is a test task in order to collect feedback from the taken courses of React</h3> 
              <h5>It basicly allows to register and sign in via using Firebase auth and redux</h5> 
              <p>As one of its requirements is there should be products page which collects data from Firebase database as it should proceed with all CRUD operations</p> 
              <p>To see all products;</p>
              <p>
                <Link className="btn btn-primary btn-lg" to="/products">See Products</Link>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default Landing;