import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();

        addTodo(value);

        setValue("");
    }
    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input value={value} type="text" className="todo-input" onChange={(e) => setValue(e.target.value)} placeholder="Input your task" />
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    );
}
