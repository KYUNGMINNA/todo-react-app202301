import cn from 'classnames';
import React from 'react';
import {MdDone,MdDelete} from 'react-icons/md';
import './css/TodoItem.css';
const TodoItem = ({todo}) => {

    const {title,done}=todo;


  return (
  
    <li className="todo-item">
        <div className={cn('check-circle',{active:done})}>
            {done && <MdDone />}
        </div>
            {/* done이 true면 finish라는 클래스 추가 아니면 안붙음 */}
        <span className={cn('text',{finish:done})}>{title}</span>
        <div className='remove'>
            <MdDelete />
        </div>

    </li>
  
  
  
  
    )
}

export default TodoItem