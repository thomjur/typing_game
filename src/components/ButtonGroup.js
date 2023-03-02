import { Row, Col, Button } from "react-bootstrap";
import './ButtonGroup.css';

function ButtonGroup(props) {

	function buttonPressedHandler(event) {
		console.log("pressed!");
	}	

  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <Button className="btn-secondary" onClick={buttonPressedHandler}>Check Text!</Button>
      </Col>
    </Row>
  );
}

export default ButtonGroup;
