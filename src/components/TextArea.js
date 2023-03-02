import {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import './TextArea.css';

function TextArea(props) {

	const [wordLength, setWordLength] = useState(0);

	function textChangeHandler(event) {
		setWordLength(event.target.value.length);
	}

  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <textarea className="main-text-area" onChange={textChangeHandler}/>
				
      </Col>
			<Col className="d-flex justify-content-center">
				<p className="word-count">Word count: {wordLength}</p>
			</Col>
    </Row>
  );
}

export default TextArea;
