import React, {Component} from "react";
import Todos from "./Todo";


 class App extends Component() {
   state ={
      todos : [
        {id:1 , content:"Read my notes"},
        {id:2 , content: "Revise for the coming exams"}
      ]
    }
    render(){
   
    return (
      <div className="todo container">
      <Todos todos={this.state.todos}/>
      </div>
  );
}
}

export default App;
