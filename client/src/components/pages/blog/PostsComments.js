import React, { Component } from 'react';
import PostCommentListItem from './PostCommentListItem';
import * as API from '../../../api/index'
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class PostsComments extends Component {

  state ={
    posts: [{id:1, title: 'Sport', description: 'It maters'}],
    noError: true,
    errorStatus: ''
  }
  componentDidMount = async() => {
    const fetchedPost = await API.getFetchedPosts();
    console.log(fetchedPost);
    if(!fetchedPost.status){
      this.setState({posts: fetchedPost});
    }
    else{
      this.setState({noError: false}, {errorStatus: fetchedPost.status});
    }    
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
                <h1>Available Posts and comments</h1>  
                <h2>Posts</h2> 
                {this.state.noError &&
                <React.Fragment>
                {this.state.posts.map(post => {
                  return( 
                    <React.Fragment>
                      <PostCommentListItem key= {post.id} post = {post}/>     
                    </React.Fragment>
                  )
                })
              } 
              </React.Fragment>
            }                                         
            </div>
        </div>    
    )
  }
}


const linkStyle = {
    color: '#hhh3333',
    textDecoration: 'none'
  }


export default PostsComments;