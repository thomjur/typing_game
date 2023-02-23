import {Row, Col} from 'react-bootstrap';
import './TextArea.css';

function TextArea(props) {
  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <textarea className="main-text-area"></textarea>
      </Col>
    </Row>
  );
}

export default TextArea;
