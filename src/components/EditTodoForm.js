import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e =>{
        e.preventDefault();

        editTodo(value, task.id);

        setValue("");
    }
    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input value={value} type="text" className="todo-input" onChange={(e) => setValue(e.target.value)} placeholder="Update task" />
            <button type="submit" className="todo-btn">Update task</button>
        </form>
    );
}
