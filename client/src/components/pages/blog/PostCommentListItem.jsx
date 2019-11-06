import React, { Component } from 'react';
import List from './ListItem';
import * as API from '../../../api/index';
export class PostCommentListItem extends Component {
    
  state ={
    comments: [{id:1, post_id:1, description: 'It is important'},{id:2, post_id:1, description: 'It is important'}],
    noError: true,
    errorStatus: '',
    filteredComments: []
  }
  componentDidMount = async() => {
    const fetchedComments = await API.getFetchedComments();
    if(!fetchedComments.status){
      this.setState({comments: fetchedComments});
    }
    else{
      this.setState({noError: true}, {errorStatus: fetchedComments.status});
    }
    
  }
    render() {   
      const {post} = this.props;
      this.setState({filteredComments :this.state.comments.filter(comment => comment.post_id === post.id)});
      return ( 
        <div>        
          <React.Fragment>                  
            <label> Post with Id: {post.id}</label> 
            {this.state.noError && <List  key = {post.id}title = {post.description} />}
            <label>Comments</label> 
                { this.state.filteredComments.map(comment => {
                  return( 
                    <React.Fragment>
                      <List key= {comment.id} title = {comment.description}/>     
                    </React.Fragment>
                  )
                })
              }          
          </React.Fragment>
          </div>     
        )
    }
  }
   
  
  
  export default PostCommentListItem;