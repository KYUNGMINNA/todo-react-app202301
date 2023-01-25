import React from 'react';
import TodoItem from './TodoItem';
import './css/TodoMain.css';

const TodoMain = ({ todoList,remove,modify }) => {


  return (
    <ul className="todo-list">
        {
            todoList.map(todo => <TodoItem 
              key={todo.id}
               todo={todo}
               remove={remove}
               modify={modify}
               />)
        }
    </ul>
  );
};

export default TodoMain;