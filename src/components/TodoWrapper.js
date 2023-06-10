import React, { useState } from 'react';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

function TodoWrapper(props) {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {
            id : uuidv4(),
            task : todo,
            completed : false,
            isEditing : false
        }])

        console.log(todos);
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => 
            todo.id === id ? {
                ...todo,
                completed: !todo.completed
            } : todo
        ))
    }

    const deleteTodos = id => {
        setTodos(todos.filter(todo => 
            todo.id !== id 
        ))
    }

    const editTodos = id => {
        setTodos(todos.map(todo => 
            todo.id === id ? {
                ...todo,
                isEditing: !todo.isEditing
            } : todo
        ))
    }

    const updateTodo = (id, todoVal) => {
        setTodos(todos.map(todo => 
            todo.id === id ? {
                ...todo,
                task : todoVal,
                isEditing: !todo.isEditing
            } : todo
        ))
    }

    return (
        <div>
            <TodoForm id="todo-form" addTodo={addTodo}/>
            {
                todos.map((todo, index) => 
                    todo.isEditing ?
                    <EditTodoForm updateTodo={updateTodo} task={todo} /> :
                    <Todo task={todo} key={index} className="instanceTodo"
                        toggleComplete={toggleComplete}
                        deleteTodos={deleteTodos} editTodos={editTodos}/>
                )
            }
        </div>
    );
}

export default TodoWrapper;