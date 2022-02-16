import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return (<button>{props.text}</button>);
}

ReactDOM.render(CustomButton, document.getElementById('root'));
