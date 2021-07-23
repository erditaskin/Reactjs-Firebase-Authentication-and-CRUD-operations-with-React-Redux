import React, { useRef, useEffect } from "react"
import { connect } from "react-redux";
import { signIn } from "actions/auth";
import { setLoading, clearAlert } from "actions/general";
import { Form, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Alerts from "utils/alerts"

const Login = ({
  signIn,
  setLoading,
  history,
  clearAlert
}) => {

  useEffect(() => {
    if (history.location.state?.from !== "signup") {
      clearAlert()
    }
  }, [clearAlert, history]);

  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    signIn(emailRef.current.value, passwordRef.current.value, () => history.push("/", { from: 'login' })).then(() => {
      setLoading(false);
    });
  }

  return (
    <div>
      <Card className="jumbotron auth">
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
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
            <Button className="w-100 mt-3" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 auth-help">
        Need an account? <Link to="/sign-up">Sign Up</Link>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    clearAlert: () => dispatch(clearAlert()),
    setLoading: (status) => dispatch(setLoading(status)),
    signIn: (email, password, callback) =>
      dispatch(signIn(email, password, callback))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);