import React, { useRef, useEffect } from "react"
import { connect } from "react-redux";
import { signUp } from "actions/auth";
import { setLoading, setAlert, clearAlert } from "actions/general";
import { Form, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Alerts from "utils/alerts"

const SignUp = ({
  signUp,
  setLoading,
  setAlert,
  clearAlert,
  history,
}) => {

  useEffect(() => {
    clearAlert()
  }, [clearAlert]);

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      setAlert({
        show: true,
        variant: 'danger',
        message: 'Passwords do not match'
      });
      setLoading(false);
    }
    else {
      signUp(emailRef.current.value, passwordRef.current.value, (response) => {
        setAlert({
          show: true,
          variant: 'success',
          message: 'Your account has been created. You can login now.'
        });
        history.push("/login", { from: 'signup' });
      }).then(() => { 
        setLoading(false);
      });
    }
  }

  return (
    <div>
      <Card className="jumbotron auth">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Alerts />
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password_confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100 mt-3" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 auth-help">
        Have an account already? <Link to="/login">Sign In</Link>
      </div>
    </div>
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
    signUp: (email, password, callback) =>
      dispatch(signUp(email, password, callback))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);