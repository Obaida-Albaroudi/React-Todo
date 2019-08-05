import React from "react";
import "/Users/obaidaalbaroudi/Desktop/LambdaSchool/React-Todo/src/components/TodoComponents/Style.css"

const Todo = props =>{
    console.log(props)
    console.log(props.todo.completed)
    console.log(props.todo.id)
    return (
        <div 
        className={`todo${props.todo.completed ? ' completed' : ''}`}
        onClick={() => props.toggleTodo(props.todo.id)} >

            <p>{props.todo.task}</p>

        </div>
    )
}

export default Todo;