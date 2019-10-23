import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Header from './PostItem';
import PostItem from './PostItem';
//import AddTodo from './components/AddTodo';
import NewComment from './NewComment';
import PostsComments from './PostsComments';
// './App.css';
//NewPost component class
class NewPost extends Component {
	
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
                    />
                  </div>
                </React.Fragment>
              )}
            />
            <Route path='/blog/NewComment' component={NewComment} />
            <Route path='/blog/PostsComments' component={PostsComments} />
          </div>
        </div>
      </Router>
    );
  }
}


export default NewPost;