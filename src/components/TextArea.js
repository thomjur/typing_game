import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import DisplayText from "./DisplayText";
import "./TextArea.css";

function TextArea(props) {
  // defining constants for
  // 1. Text length
  // 2. Longest word
  // 3. Formatted display text for DisplayText component
  const [textLength, setTextLength] = useState(0);
  const [wordLongest, setWordLongest] = useState("");
  const [displayText, setDisplayText] = useState("");

  // top function called when text changes in text are
  function textChangeHandler(event) {
    textLengthHandler(event);
    longestWordChangeHandler(event);
  }

  // function to calculate text length
  function textLengthHandler(event) {
    setTextLength(event.target.value.length);
  }

  // function to search for longest word in text
  function longestWordChangeHandler(event) {
    let longestWord = "";
    let wordList = event.target.value.split(" ");
    for (let word of wordList) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    setWordLongest(longestWord);

    // underline longest word
    const textArea = event.target;
    const text = textArea.value;

    // add new underline of longest word
    const highlightedText = text.replace(
      RegExp(longestWord, "gi"),
      "<u>$&</u>"
    );

	// pass highlighted text to text dispay component
    setDisplayText(highlightedText);
  }

  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-center">
          <textarea className="main-text-area" onChange={textChangeHandler} />
        </Col>
        <Col className="d-flex justify-content-center">
          <p className="word-count">Text length: {textLength}</p>
          <p className="longest-word-display">Longest word: {wordLongest}</p>
        </Col>
      </Row>
	  <Row>
		<DisplayText text={displayText} />
	  </Row>
    </div>
  );
}

export default TextArea;
