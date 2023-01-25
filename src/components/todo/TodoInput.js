import React, { useState } from 'react';
import './css/TodoInput.css';
import {MdAdd} from 'react-icons/md'
import cn from 'classnames';
//별칭을 cn이라고 지정


const TodoInput = () => {

  // todo-input 박스를 렌더링할지 여부
  const [open, setOpen] = useState(false);

  // todo-input 박스를 열고 닫는 클릭이벤트 핸들러
  const inputToggle = () => setOpen(!open);





  return (

    <>

    {/* open이 true면 밑의 태그들이 렌더링, 아니면 렌더링 안함 */}
    {open &&
    <div className='todo-input'>
       {/* 웹 표준에 의하면  input은 form태그 안에 사용(form 을 안쓰더라도
        ) */}
       <form  className='insert-form'>
            {/* 닫는 태그가 없는 것들은 /로 닫아야함  */}
  
            <input type="text"  placeholder='할 일을 입력 후 ,엔터를 누르세요'
            autoFocus />
       </form>
    </div>
    }

                    {/*클래스이름 , 상태변수(t,f) -->t면 
                    클래시이름 open추가 */}
    <button className={cn('begin-btn',{open})} onClick={inputToggle}>
      <MdAdd />
      </button>

      </>
  );
};

export default TodoInput;