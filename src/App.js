import "./App.css";
import TextArea from "./components/TextArea";
import ButtonGroup from "./components/ButtonGroup";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Container} from 'react-bootstrap';


function App() {
  return (
    <div id="root">
      <Container>
        <TextArea />
        <ButtonGroup />
      </Container>
    </div>
  );
}

export default App;
