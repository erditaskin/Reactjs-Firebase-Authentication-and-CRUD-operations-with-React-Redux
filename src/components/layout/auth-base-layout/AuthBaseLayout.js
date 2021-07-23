import { Container } from "react-bootstrap";

export default function Layout(props) {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
      >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h1 className="heading1">Inventory Task</h1>
        {props.children}
      </div>
    </Container>
  );
}