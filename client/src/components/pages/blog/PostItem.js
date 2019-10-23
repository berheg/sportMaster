import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class PostItem extends Component {
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
                <h1>Enter New Post</h1>  
                <label>Author</label>       
                <input type="text" style={inputStyle} min='1' className="inputA" required/>                     
            
                <label>Post</label>       
                <textarea type="text" style={textareaStyle} maxLength='300' className="textareaA" required/>  
                <button onClick={btnClickHandler} style={btnStyle}>Add</button>                  
            </div>
        </div>    
    
    )
  }
}
const inputStyle ={
    width: '50%',
    height:'20px',
    alignSelf: 'center',
    marginBottom: '10px',
    alignText: 'center'
}
const textareaStyle ={
    width: '80%',
    height:'50px',
    alignSelf: 'center',
    marginBottom: '10px',
    alignText: 'center'
}
const linkStyle = {
    color: '#hhh3333',
    textDecoration: 'none'
  }
const btnStyle = {
    background: '#00ff00',
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
    fetch(`/api/triangle`, {
       method: 'post',
       headers: {
           'content-type': 'application/json'
       },
       body: {}
       
   });
}

export default PostItem;