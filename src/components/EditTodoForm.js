import React, { useState }  from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EditTodoForm(props) {
    const [value, setValue] = useState("");

    const handleValueChange = e => {
        setValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.updateTodo(props.task.id, value);
    }

    return (
        <div className='editodoForm'>
            <TextField id="outlined-basic" 
                label="Update Todo"
                variant="outlined"
                defaultValue={props.task.task}
                onChange={handleValueChange} />
            <Button id="submit-button"
                variant="contained" onClick={handleSubmit}>Update Task</Button>
        </div>
    );
}

export default EditTodoForm;