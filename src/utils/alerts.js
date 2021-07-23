import React from "react";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";

const Alerts = ({
  alert
}) => {

  return (
    <Alert variant={alert.variant} style={{display: alert.show ? "block" : "none"}}>
      {alert.message}
    </Alert>
  );
};

function mapStateToProps(state) {
  return {
    alert: state.general.alert
  };
}

export default connect(
  mapStateToProps
)(Alerts);
