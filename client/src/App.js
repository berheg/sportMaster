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
	constructor(props){
    super(props)
    this.state ={
      a:'',
      b:'',
      c: '',
      answer: ''
    }
  }
  handelInputAChange = e => {
    this.setState({answer: ''}) ;
    this.setState({ a:e.target.value });
    
  }
  handelInputBChange = e => {
    this.setState({answer: ''}) ;
    this.setState({ b:e.target.value });
  }
  handelInputCChange = e => {
    this.setState({answer: ''}) ;
    this.setState({ c:e.target.value });
  }
 btnClickHandler =()=>{
  console.log(this.state.a,this.state.b,this.state.c);
  //this.setState({answer: 'Incorect'}) ; 
    fetch(`http://localhost:5000/triangle?a=${this.state.a}&&b=${this.state.b}&&c=${this.state.c}`,{method: 'GET',
    headers: {
        'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json =>{this.setState({answer: json}) ;      
      console.log(this.state.answer);     
    })
  }
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
                    handelInputAChange = {this.handelInputAChange}
                    handelInputBChange = {this.handelInputBChange} 
                    handelInputCChange = {this.handelInputCChange} 
                    answer={this.state.answer} 
                    btnClickHandler={this.btnClickHandler}                   
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