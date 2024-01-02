import React, {Component} from "react";
import Todos from './Todos';
import AddTodo from "./AddTodo";


 class App extends Component {
   state ={
      todos : [
        {id:1 , content:"Read my notes"},
        {id:2 , content: "Revise for the coming exams"}
      ]
    }
    deleteTodo =(id)=>{
      const todos =this.state.todos.filter(todo =>{
        return todo.id !== id;
      })
      this.setState({
        todos
      })
    }

    addtodo =(todo)=>{
      todo.id =Math.random();
      let todos =[...this.state.todos,todo]

      this.setState({
        todos
      })
    }

    render(){
   
    return (
      <div className="todo container">
      <h1 className="center blue-text">Todo List</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addtodo={this.addtodo}/>
      </div>
  );
}
}

export default App;
