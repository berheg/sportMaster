import React from "react";
//import {UserConsumer} from "./context/userContext";
class List extends React.Component {

  render(){
    const { title, id} = this.props;
  return (    
    <React.Fragment>
      {
         <li key={id}>{title}</li> 
        
      }
    </React.Fragment>       
          
    )
       
  };
}

export default List;