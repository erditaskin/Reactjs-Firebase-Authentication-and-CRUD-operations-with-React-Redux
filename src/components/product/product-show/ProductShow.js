import React, { useEffect } from "react"
import { connect } from "react-redux";
import { clearAlert } from "actions/general";
import { Card, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Alerts from "utils/alerts"
import moment from "moment"

const ProductShow = ({
  product,
  clearAlert,
  history,
}) => {
  useEffect(() => {
    if (history.location.state?.from !== "productAdd" && history.location.state?.from !== "productEdit") {
      clearAlert()
    }
  }, [clearAlert, history]);

  function handleGoBack() {
    history.goBack();
  }

  return (
    <Container>
      <Card className="jumbotron auth">
        <Card.Body>
          <h2 className="text-center mb-4">Product Details</h2>
          <Alerts />
          <Row>
            <Col className="col-2 strong">ID</Col>
            <Col className="col-1 strong text-center">:</Col>
            <Col className="col-9">{product.id}</Col>
          </Row>
          <Row>
            <Col className="col-2 strong">Product Name</Col>
            <Col className="col-1 strong text-center">:</Col>
            <Col className="col-9">{product.name}</Col>
          </Row>
          <Row>
            <Col className="col-2 strong">Product Price</Col>
            <Col className="col-1 strong text-center">:</Col>
            <Col className="col-9">{product.price}</Col>
          </Row>
          <Row>
            <Col className="col-2 strong">Product Description</Col>
            <Col className="col-1 strong text-center">:</Col>
            <Col className="col-9">{product.desc}</Col>
          </Row>
          <Row>
            <Col className="col-2 strong">Created At</Col>
            <Col className="col-1 strong text-center">:</Col>
            <Col className="col-9">{moment(product.createdAt).format('LLL')}</Col>
          </Row>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 auth-help">
        <Link className="btn btn-secondary" to="#" onClick={handleGoBack}>Back</Link>
      </div>
    </Container>
  );
};

function mapStateToProps(state, props) {
  console.log(props.match.params.id);
  return {
    product: state.product.products.find((product) => product.id === props.match.params.id)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearAlert: () => dispatch(clearAlert())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);