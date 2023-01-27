
//로그인 유저의 토큰을 반환하는 함수
export const getToken=()=>{
    return localStorage.getItem('ACCESS_TOKEN');
};




//로그인 유저의 이름을 반환하는 함수 
export const getUsername=()=> localStorage.getItem('LOGIN_USERNAME');


//로그인 상태인지 검증해주는 함수 
export const isLogin=()=>!!getUsername();

//getUsername 이 null이면 Falsey한 값인데 -> !하나 붙이면 true
// true에서 ! 붙이면 False