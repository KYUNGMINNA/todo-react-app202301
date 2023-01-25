import cn from 'classnames';
import React, { useState } from 'react';
import {MdDone,MdDelete} from 'react-icons/md';
import './css/TodoItem.css';
const TodoItem = ({todo,remove,update}) => {

    const {id,title,done}=todo;

    //서버에 삭제요청 클릭 이벤트 핸들러
    const deleteClickHandler=e=>{
        remove(id);//remove 자체가 함수
    };


    //할 일 완료 수정 처리 이벤트 핸들러
    const doneCheckHandler=e=>{
        //서버쪽으로 현재 done값의 반대 논리값을 전달 
            // modify(id,title,!done);
            const modTodo={
                ...todo,
                done:!done
            }
            update(modTodo);

        //id,title,done 다 TodoTempalte에 전달
    };
  return (
  
    <li className="todo-item">
        <div className={cn('check-circle',{active:done})}
             onClick={doneCheckHandler}
        >
            {done && <MdDone />}
        </div>
            {/* done이 true면 finish라는 클래스 추가 아니면 안붙음 */}
        <span className={cn('text',{finish:done})}>{title}</span>
        <div className='remove' onClick={deleteClickHandler}>
            <MdDelete />
        </div>

    </li>
  
  
  
  
    )
}

export default TodoItem