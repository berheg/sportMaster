import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class NewComment extends Component {
  getStyle = () => {
    return {
      background:'#00FFFF',  
      padding: '10px',
      borderBottom: '1px #ccc dotted', 
      display:'flex',
      flexDirection:'column',
      marginTop: '100px',
      width: '50%',
      alignText:'center',
      marginLeft:'30%'
    }
  }

  render() {    
    return (  
        <div >            
            <Link style={linkStyle} to="/blog">New Post</Link> | <Link style={linkStyle} to="/blog/NewComment">New Comment</Link> | <Link style={linkStyle} to="/PostsComments">Posts</Link>
            <div style={this.getStyle()}>   
                <h1>Enter New Comment</h1>  
                <label>Post</label>       
                <input type="number" style={inputStyle} min='1' className="postIdInput" required/>                     
            
                <label>Comment</label>       
                <textarea type="text" style={textareaStyle} maxLength='300' className="textareaA" required/>  
                <button onClick={btnClickHandler} style={btnStyle}>Add</button>                  
            </div>
        </div> 
    )
  }
}
const inputStyle ={
    width: '20%',
    height:'20px',
    alignSelf: 'center',
    marginBottom: '10px',
    alignText: 'center'
}
const textareaStyle ={
    width: '30%',
    height:'100%',
    alignSelf: 'center',
    marginBottom: '10px',
    alignText: 'center'
}
const linkStyle = {
    color: 'red',
    textDecoration: 'none'
  }
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '10px 19px',
    width: '10%',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    alignSelf: 'center'
}
async function btnClickHandler(){
    fetch(`/api/blogs/comment`, {
       method: 'post',
       headers: {
           'content-type': 'application/json'
       },
       body: {}       
   });
}

export default NewComment;