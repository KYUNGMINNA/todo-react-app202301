import React from 'react';
import './css/TodoHeader.css';

const TodoHeader = ({todoList}) => {
  
  //todoList에서 done 값이 false 인 객체들만 필터링
  const undoneTodos=todoList.filter(todo=>!todo.done);


  return (
        <header>
                <h1>2023년 1월 25일</h1>
                <h2 className="day">수요일</h2>
                <div className="tasks-left">할 일 {undoneTodos.length}개 남음</div>
        </header>    
  );
};

export default TodoHeader;