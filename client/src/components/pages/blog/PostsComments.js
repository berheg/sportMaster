import React, { Component } from 'react';
import PostCommentListItem from './PostCommentListItem';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class PostsComments extends Component {
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
                <label>Post</label>       
                {this.props.posts.map(post => {
                  return( 
                    <React.Fragment>
                      <PostCommentListItem postTitle={this.state.post.title}
                        postDescription={post.description}/>
                        <label>Comment</label>
                        { this.props.comments.forEach(comment => {
                          return(
                          <div>                              
                                                        
                            <PostCommentListItem postTitle={this.state.post.title}/> 
                            </div>   
                          )
                        })
                    }
                  
                    </React.Fragment>
                  )                   
                })}                                   
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