import React, { useRef, useEffect } from "react"
import { connect } from "react-redux";
import { addProduct } from "actions/product";
import { setLoading, setAlert, clearAlert } from "actions/general";
import { Form, Button, Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import Alerts from "utils/alerts"

const ProductAdd = ({
  addProduct,
  setLoading,
  setAlert,
  clearAlert,
  history,
}) => {
  useEffect(() => {
    clearAlert()
  }, [clearAlert]);

  const nameRef = useRef()
  const priceRef = useRef()
  const descriptionRef = useRef();

  function handleGoBack() {
    history.goBack();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    addProduct(nameRef.current.value, priceRef.current.value, descriptionRef.current.value, (key) => {
      setAlert({
        show: true,
        variant: 'success',
        message: 'Product has been added succesfully'
      });
      history.push("/product/" + key, { from: 'productAdd' });
    }).then(() => {
      setLoading(false);
    });

  }

  return (
    <Container>
      <Card className="jumbotron auth">
        <Card.Body>
          <h2 className="text-center mb-4">New Product</h2>
          <Alerts />
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="price">
              <Form.Label>Product Price</Form.Label>
              <Form.Control type="number" ref={priceRef} required step="any" />
            </Form.Group>
            <Form.Group id="description">
              <Form.Label>Product Description</Form.Label>
              <Form.Control as="textarea" rows={3} ref={descriptionRef} required />
            </Form.Group>
            <Button className="w-100 mt-3 btn-success" type="submit">
              Add New Product
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 auth-help">
        <Link className="btn btn-secondary" to="#" onClick={handleGoBack}>Back</Link>
      </div>
    </Container>
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    setAlert: (alert) => dispatch(setAlert(alert)),
    clearAlert: () => dispatch(clearAlert()),
    setLoading: (status) => dispatch(setLoading(status)),
    addProduct: (name, price, desc, callback) =>
      dispatch(addProduct(name, price, desc, callback))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductAdd);