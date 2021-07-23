import React, { useEffect } from "react"
import { connect } from "react-redux";
import { clearAlert, setLoading } from "actions/general";
import { getProducts } from "actions/product";
import { Card, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Alerts from "utils/alerts"
import ProductItems from "components/product/product-items/ProductItems"

const ProductList = ({
  products,
  getProducts,
  clearAlert,
  setLoading,
  history,
}) => {
  useEffect(() => {
    clearAlert()
  }, [clearAlert]);

  useEffect(() => {
    setLoading(true);
    getProducts(() => {
      setLoading(false);
    });
  }, [getProducts, setLoading]);

  function handleGoBack() {
    history.goBack();
  }

  return (
    <Container>
      <Card className="jumbotron auth">
        <h2 className="mb-4">All Products</h2>
        <Alerts />
        <Row className="mb-3">
          <Col>
            <Link to="/product/add" className="btn btn-sm btn-success">Add Product</Link>
          </Col>
        </Row>
        {products.length > 0 && <ProductItems productList={products} />}
        {products.length === 0 && "There are no products."}
      </Card>
      <div className="w-100 text-center mt-2 auth-help">
        <Link className="btn btn-secondary" to="#" onClick={handleGoBack}>Back</Link>
      </div>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    products: state.product.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: (status) => dispatch(setLoading(status)),
    clearAlert: () => dispatch(clearAlert()),
    getProducts: (callback) => dispatch(getProducts(callback))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);