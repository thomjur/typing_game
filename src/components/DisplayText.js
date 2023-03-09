

function DisplayText(props) {
  return <p dangerouslySetInnerHTML={{ __html: props.text }}></p>;
}

export default DisplayText;
