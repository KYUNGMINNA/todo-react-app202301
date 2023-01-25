import React,{useState,useEffect } from 'react'

const Hello = () => {

    //일반 변수는 상태값 관리가 안됨 (즉, 데이터 값이 안바뀜)
    // let nickName='익명';

          //관리되는값 , 관리되는 값을 변경하는 함수 
    const [nickName,setNickName]=useState('익명');
    //userState 리턴은  배열 타입----------------------------


    //여기에 쓴 코드는 태그가 렌더링되기 전에 실행됨.
    // const $btn=document.querySelector('.btn');
    // $btn.onclick=e=>{
    //     alert('박사님 안녕');
    // }

  
    const foo=()=>{
      console.log('foo!');
    };




  // 이벤트 핸들러 함수 정의
  const sayHello = e => {
    console.log('sayHello!');
    // alert('박사님 안녕~~');
    
    // 상태변수 값을 변경할때는 직접 대입하면 안되고 상태변경함수를 이용해야 함.
    // nickName = '척척박사'; (X)

    setNickName('척척박사'); // (O)

  };



    //화면이 처음 렌더링(마운트) 될 때 , 상태값이 변경될 때 자동 호출됨
    //처음 렌더링 될 때 해야할 일 을 적는다.
    useEffect(() => {
      console.log('2. useEffect call!!!');
      console.log('3. nickName(useEffect): ' + nickName);
    
      //정리 함수 --보통 이전상태의 값을 활용할 때 사용
      //화면이 리렌더링되기 직전에 호출 
      return ()=>{
         console.log('4.cleanup call!');
         console.log('5. nickName(cleanup)'+nickName);
      };
    
    },[nickName]);
    //첫 번째 매개변수로는 callback 함수를 넣는다.
      //callback함수만 넣으면 렌더링 될 때와 
      // 상태값 변경될 때 마다 호출
    
    //두 번째 파라미터에 의존성 배열을 넣을 수 있음
    //빈 배열 설정시 초기렌더링시에 단 1회만 호출 - 값 변경되어도 호출X
    //의존성 배열에 상태값을 넣으면 해당 값이 업데이트 될 때 다시 호출






    console.log('1.nickName(component) : '+nickName);
    //컴포넌트 내 실행코드 (1순위) -->화면이 태그가 그려지기도 전에 실행됨
    //그래서 여기에 이벤트 걸면 동작을 안하는 것 
    //렌더링 시에 실행되는 코드(2순위)-->sayHello() -->왜냐면 sayHello()밑에서 호출
    // useEffect에 있는 콜백(3순위)

  return (
    <>
    {foo()}
        <h1> Hello ~~~ {nickName} </h1>
        <button className="btn" onClick={sayHello}>척척박사</button>
        <button className="btn" onClick={() => { setNickName('척척석사'); }}>척척석사</button>
    </>

  )
}

export default Hello