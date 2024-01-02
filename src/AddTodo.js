import React,{Component  } from "react";

class AddTodo extends Component{
    state ={
        content : ""
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState({
            content :""
    })
    }
    render(){
        return(
            <div>
                <form on onSubmit={this.handleSubmit}>
                    <label>Add your new todo</label>
                    <input type="text" onChange={this.handleChange}  value={this.state.content}></input>
                </form>
            </div>
        )
    }
}

export default AddTodo