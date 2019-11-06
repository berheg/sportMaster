import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostItem from './PostItem';
import NewComment from './NewComment';
import PostsComments from './PostsComments';

//NewPost component class
class NewPost extends Component {
	constructor(props){
    super(props)
    this.state ={
      post:'',
      authorId:'',
      authorName:'',
      title:''  ,
      resAddNewPost: '' ,
      resAddNewAuthor: ''  
    }
  }
  //Author name or Id input change handler
  handelAuthorChange = e => {
      this.setState({authorName: e.target.value}) ;
  }    
  //Author name or Id input change handler
  handelTitleChange = e => {
    this.setState({title: e.target.value}) ;
}    
  //post input change event handler
  handelPostChange = e => {    
    this.setState({ post:e.target.value });
  }
  
  //submition button input handler 
  btnClickHandler = () =>{
    const newPost = { title:this.state.title,
                      description:this.state.post
                    }    
    const postFetchResult = fetchHandler(`http://localhost:5000/blogs/posts`,newPost);
    const newAuthor = this.state.authorName;
    const authorFetchResult = fetchHandler(`http://localhost:5000/blogs/authors`,newAuthor);
 this.setState({resAddNewPost: postFetchResult});
 this.setState({resAddNewAuthor: authorFetchResult });
}
  render() {
    return (
      <Router>        
        <div className='NewPost'>
          <div className='container'>            
            <Route
              exact
              path='/blog'
              render={(props) => (
                <React.Fragment>                                                   
                  <div className="">                    
                    <PostItem
                      btnClickHandler={this.btnClickHandler}
                      handelAuthorChange = {this.handelAuthorChange}
                      handelTitleChange = {this.handelTitleChange}
                      handelPostChange   = {this.handelPostChange} 
                      resAddNewPost= {this.resAddNewPost} 
                      resAddNewAuthor= {this.resAddNewAuthor}               
                    />
                  </div>
                </React.Fragment>
              )}
            />
            <Route path='/blog/NewComment' component={NewComment} exact strict />
            <Route path='/blog/PostsComments' component={PostsComments} exact strict />
          </div>
        </div>
      </Router>
    );
  }
}
function fetchHandler(api, newPost) {
  fetch(api, {
     method: 'post',
     headers: {
         'content-type': 'application/json'
     },
     body: newPost       
 });
}
export default NewPost;