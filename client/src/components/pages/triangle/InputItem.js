import React, { Component } from 'react';
//import PropTypes from 'prop-types';

export class InputItem extends Component {  
  
  getStyle = () => {
    return {
      background:'#00FFFF',  
      padding: '10px',
      borderBottom: '1px #ccc dotted', 
      display:'flex',
      flexDirection:'column',
      alignSelf: 'center' 
    }
  }

  render() {    
    return (
      <div style={this.getStyle()}>        
          <input type="number" placeholder="a" style={inputStyle} min='1' className="inputA" required onChange={this.props.handelInputAChange}/>         
          <input type="number" placeholder="b" style={inputStyle} min='1' className="inputB" required onChange={this.props.handelInputBChange}/> 
          <input type="number" placeholder="c" style={inputStyle} min='1' className="inputC" required onChange={this.props.handelInputCChange}/>         
      </div>
    )
  }
}
const inputStyle ={
    width: '30%',
    height:'50px',
    alignSelf: 'center',
    marginBottom: '10px',
    alignText: 'center'
}
export default InputItem;