import React from "react";

class ListForm extends  React.Component{
    constructor(){
        super();
        this.state ={
            task: ''
        };
    }

    handleChanges = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitTask = e =>{
        e.preventDefault();
        this.props.addTask(this.state.task)
    };

    render(){
        return(
            <form onSubmit={this.submitTask}>

                <input type="text" value={this.state.task} name="task" placeholder="...todo" onChange={this.handleChanges}/>
                <button>Add Todo</button> 
                
            
            </form>
        )
    }
}

export default ListForm;