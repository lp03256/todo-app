import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo(props) {
    const task = props.task;
    return (
        <div className='todo'>
            <p  className={`${task.completed ? "completed" : ""}`}
                onClick={() => props.toggleComplete(task.id)}>
            {task.task}
            </p>
            <EditIcon id="edit-icon" onClick={() => props.editTodos(task.id)} />
            <DeleteIcon id="delete-icon" onClick={() => props.deleteTodos(task.id)} />
        </div>
    );
}

export default Todo;