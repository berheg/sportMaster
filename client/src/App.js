import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import InputList from './components/pages/triangle/InputList';
//import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import NewPost from './components/pages/blog/NewPost'

import './App.css';
//App component class
class App extends Component {
	
  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={(props) => (
                <React.Fragment>
                  <h1>Triangle Checker</h1>
                  <h2>Enter three sides of the triangle and click check </h2>                  
                  <div className="">                    
                    <InputList                      
                    />
                  </div>
                </React.Fragment>
              )}
            />
            <Route path='/blog' component={NewPost} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;