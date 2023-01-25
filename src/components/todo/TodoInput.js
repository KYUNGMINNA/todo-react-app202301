import React, { useState } from 'react';
import './css/TodoInput.css';
import {MdAdd} from 'react-icons/md'
import cn from 'classnames';
//별칭을 cn이라고 지정


const TodoInput = ({add}) => {

  // todo-input 박스를 렌더링할지 여부
  const [open, setOpen] = useState(false);

  //입력폼에 입력한 데이터들을 담을 상태변수
  const [todo,setTodo]=useState({
    title :'',
  });


  // todo-input 박스를 열고 닫는 클릭이벤트 핸들러
  const inputToggle = () => setOpen(!open);

  //할 일 입력후 엔터치면 서버로 POST 요청을 보내는 이벤트 핸들러
  const todoAddHandler=e=>{
    if(e.key==='Enter'){
      // console.log('엔터키 잘 누르네');

      //입력 데이터들을 읽기
      console.log(todo);

      //서버 요청 보내기
      add(todo);
      
      //입력 끝나면 입력칸 비우기
      setTodo({
        ...todo, // 기존의 값 유지 
        title:''
      })
    }

  };

  //입력값을 실시간으로 상태변수 todo에 저장하는 체인지 이벤트 핸들러
  const titleChangeHandler=e=>{
    /* 상태 변수는 값 변화가 일어날때는 직접 접근하지말고 ,setter로 이용해서
    접근해야 함 !!!!!!! useState의 변수 2개 선언 이유 */
    // console.log(typeof e.target.value);


    setTodo({
      ...todo, //기존의 데이터 복사 -->바뀌는 값만 존재하면 기존의 데이터 날라가기때문
      title:e.target.value
    });


  };
  
  const stopSubmit=e=>e.preventDefault(); //자동 서브밋 중지



  return (

    <>

    {/* open이 true면 밑의 태그들이 렌더링, 아니면 렌더링 안함 */}
    {open &&
    <div className='todo-input'>
       {/* 웹 표준에 의하면  input은 form태그 안에 사용(form 을 안쓰더라도
        ) */}
       <form  className='insert-form' onSubmit={stopSubmit}>
            {/* 닫는 태그가 없는 것들은 /로 닫아야함  */}
  
            <input type="text"  placeholder='할 일을 입력 후 ,엔터를 누르세요'
            autoFocus 
            onKeyUp={todoAddHandler}
            onChange={titleChangeHandler}
            value={todo.title}
            />





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