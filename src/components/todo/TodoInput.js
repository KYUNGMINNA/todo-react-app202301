import React from 'react';
import './css/TodoInput.css';
import {MdAdd} from 'react-icons/md'
const TodoInput = () => {
  return (

    <>
    <div className='todo-input'>
       {/* 웹 표준에 의하면  input은 form태그 안에 사용(form 을 안쓰더라도
        ) */}
       <form  className='insert-form'>
            {/* 닫는 태그가 없는 것들은 /로 닫아야함  */}
  
            <input type="text"  placeholder='할 일을 입력 후 ,엔터를 누르세요'
            autoFocus />
       </form>
    </div>
    <button className='begin-btn'>
      <MdAdd />
      </button>

      </>
  );
};

export default TodoInput;