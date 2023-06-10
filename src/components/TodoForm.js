import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TodoForm(props) {

    const [value, setValue] = useState("");

    const handleValueChange = e => {
        setValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addTodo(value);
    }

    return (
        <div className='todoForm'>
            <TextField id="outlined-basic" 
                label="What's the task Today ?"
                variant="outlined"
                onChange={handleValueChange} />
            <Button id="todo-button" variant="contained" onClick={handleSubmit}>Add Task</Button>
        </div>
    );
}

export default TodoForm;