import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export class NewComment extends Component {
  constructor(props){
    super(props)
    this.state ={
      userId:'',
      postId:'',
      comment: '',
      title: ''
    }
  }
  //user name or Id input handler
  handelUserChange = e => {
    this.setState({ userId:e.target.value });
  }
  //post Id input change handler
  handelPostIdChange = e => {
    this.setState({ postId:e.target.value });
  }
  //comment input change handler
  handelCommentChange = e => {
    this.setState({ comment:e.target.value });
  }
  //submition button input handler 
  btnClickHandler = () =>{
    const newComment = { title:this.state.title,
                      description:this.state.post
                    }
    fetch(`/blogs/posts`, {
       method: 'post',
       headers: {
           'content-type': 'application/json'
       },
       body: newComment       
   });
  }
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
            <Link style={linkStyle} to="/blog">New Post</Link> | <Link style={linkStyle} to="/blog/NewComment">New Comment</Link> | <Link style={linkStyle} to="/blog/PostsComments">Posts</Link>
            <div style={this.getStyle()}>   
                <h1>Enter New Comment</h1>  
                <label>Post ID</label>       
                <input type="number" style={inputStyle} min='1' className="postIdInput" 
                onChange={this.handelPostIdChange} required/> 
                <label>User ID</label>       
                <input type="number" style={inputStyle} min='1' className="postIdInput" 
                onChange={this.handelPostIdChange} required/>                                         
            
                <label>Comment</label>       
                <textarea type="text" style={textareaStyle} maxLength='300' 
                className="textareaA" onChange={this.handelCommentChange} required/>  
                <button onClick={btnClickHandler} style={btnStyle} >Submit</button>                  
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
    width: '50%',
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
    background: '#00ff00',
    color: '#fff',
    border: 'none',
    padding: '10px 19px',
    width: '15%',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    alignSelf: 'center'
}
async function btnClickHandler(){
    fetch(`/api/blogs/comment`, {
       method: 'POST',

       headers: {
         Accept: "application/json",
           'content-type': 'application/json'
       },
              
   });
}

export default NewComment;