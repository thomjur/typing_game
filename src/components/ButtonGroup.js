import { Row, Col, Button } from "react-bootstrap";
import './ButtonGroup.css';

function ButtonGroup(props) {
  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <Button className="btn-secondary">Check Text!</Button>
      </Col>
    </Row>
  );
}

export default ButtonGroup;
