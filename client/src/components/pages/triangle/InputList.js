import React, { Component } from 'react';
import InputItem from './InputItem';
import PropTypes from 'prop-types';

export class InputList extends Component {
  getStyle = () => {
    return {
      background:'#00FFFF',  
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      width: '50%',
      alignSelf: 'center',
      marginLeft:'30%',
      hieght: '30%'    
    }
  }
  render() {
    return (
      <div style={this.getStyle()}>        
          <InputItem/> 
          <button onClick={btnClickHandler} style={btnStyle}>Check</button>
          <h4 className="answerDisplay" style={answerDisplayStyle}>{btnClickHandler}</h4>        
      </div>
    )
  }
}

InputList.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '10px 19px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
const answerDisplayStyle={
    display: 'none'
}
function btnClickHandler(){
fetch(`/api/triangle?a=6&&b=5&&c=12`)
.then(res => res.json)
.then(json =>{const objectJson = json;
  document.querySelector('h4.answerDisplay').innerHTML = objectJson.answer;
  document.querySelector('h4.answerDisplay').style.display='block';})
}

export default InputList;