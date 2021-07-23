import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import { editProduct } from "actions/product";
import { setLoading, setAlert, clearAlert } from "actions/general";
import { Form, Button, Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import Alerts from "utils/alerts"
import moment from "moment"

const ProductEdit = ({
  product,
  clearAlert,
  editProduct,
  setLoading,
  setAlert,
  history,
}) => {

  const [inputs, setInputs] = useState({
    name: product.name,
    price: product.price,
    desc: product.desc,
  });

  function handleItem(e) {

    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    clearAlert()
  }, [clearAlert]);

  function handleGoBack() {
    history.goBack();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    editProduct(inputs.name, inputs.price, inputs.desc, product.id, () => {
      setAlert({
        show: true,
        variant: 'success',
        message: 'Product has been altered succesfully'
      });
      history.push("/product/" +  product.id, { from: 'productEdit' });
    }).then(() => {
      setLoading(false);
    });
  }

  return (
    <Container>
      <Card className="jumbotron auth">
        <Card.Body>
          <h2 className="text-center mb-4">Edit Product</h2>
          <Alerts />
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Product ID</Form.Label>
              <Form.Control type="text" value={product.id} disabled />
            </Form.Group>
            <Form.Group id="name">
              <Form.Label>Product Name</Form.Label>
              <Form.Control name="name" type="text" onChange={(e) => handleItem(e)} value={inputs.name} required />
            </Form.Group>
            <Form.Group id="price">
              <Form.Label>Product Price</Form.Label>
              <Form.Control name="price" type="number" onChange={(e) => handleItem(e)} value={inputs.price} required step="any" />
            </Form.Group>
            <Form.Group id="description">
              <Form.Label>Product Description</Form.Label>
              <Form.Control name="desc" as="textarea" rows={3} onChange={(e) => handleItem(e)} value={inputs.desc} required />
            </Form.Group>
            <Form.Group id="description">
              <Form.Label>Created At</Form.Label>
              <Form.Control type="text" value={moment(product.createdAt).format('LLL')} disabled />
            </Form.Group>
            <Button className="w-100 mt-3 btn-warning" type="submit">
              Edit Product
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

function mapStateToProps(state, props) {
  console.log(props.match.params.id);
  return {
    product: state.product.products.find((product) => product.id === props.match.params.id)
  };
}


function mapDispatchToProps(dispatch) {
  return {
    setAlert: (alert) => dispatch(setAlert(alert)),
    clearAlert: () => dispatch(clearAlert()),
    setLoading: (status) => dispatch(setLoading(status)),
    editProduct: (name, price, desc, key, callback) =>
      dispatch(editProduct(name, price, desc, key, callback))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductEdit);