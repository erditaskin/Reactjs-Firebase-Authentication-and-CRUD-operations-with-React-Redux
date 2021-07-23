import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoading } from "actions/general";

import Loader from 'utils/loader';
import PrivateRoute from "components/hocs/private-route/PrivateRoute";
import AuthRoute from "components/hocs/auth-route/AuthRoute";
import Login from "components/auth/login/Login";
import SignUp from 'components/auth/sign-up/SignUp';
import Landing from "components/dashboard/landing/Landing";
import NotFound from "components/information/not-found/NotFound";
import ProductList from "components/product/product-list/ProductList";
import ProductAdd from "components/product/product-add/ProductAdd";
import ProductEdit from "components/product/product-edit/ProductEdit";
import ProductShow from "components/product/product-show/ProductShow";


class App extends React.Component {
  render() {
    const { auth, general } = this.props;
    return (
      <>
        {general.loading && <Loader />}
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Landing} authenticated={auth.authenticated} />
            <PrivateRoute exact path="/products" component={ProductList} authenticated={auth.authenticated} />
            <PrivateRoute exact path="/product/add" component={ProductAdd} authenticated={auth.authenticated} />
            <PrivateRoute exact path="/product/edit/:id" component={ProductEdit} authenticated={auth.authenticated} />
            <PrivateRoute exact path="/product/:id" component={ProductShow} authenticated={auth.authenticated} />
            <AuthRoute exact path="/login" component={Login} authenticated={auth.authenticated} />
            <AuthRoute exact path="/sign-up" component={SignUp} authenticated={auth.authenticated} />
            <Route path="/" component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    general: state.general
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: (status) => dispatch(setLoading(status))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);