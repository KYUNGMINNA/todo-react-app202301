import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, Link } from "@mui/material";
import { BASE_URL,USER } from '../../config/host-config';

const Join = () => {

    const API_BASE_URL=BASE_URL+USER;



    //검증 메시지 저장 -- 아이디 ,비밀번호, 다 따로 만들어야되서 객체로
    //만들면 이를 해결 할 수 있음
    const [message, setMessage] = useState({
        username: '',
        password: '',
        passwordCheck:'',
        email: ''
    });

    // 검증 완료 여부
    const [validate, setValidate] = useState({
        username: false,
        password: false,
        passwordCheck:false,
        email: false
    });

    //입력값 저장
    const [userValue,setUserValue]=useState({
        userName: '',
        password: '',
        email: ''
    })


    //정규 표현식 -한글 2~5자리
    const nameRegex = /^[가-힣]{2,5}$/;

    //정규 표현식 - 영문 +숫자 +특수문자 포함 8자리 이상
    const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;

    //유저 이름 입력란 검증 체인지 이벤트 핸들러
    const nameHandler = e => {
        // console.log(e.target.value);

        //검증 시작   e.target.value===''와 같은 의미
        let msg;
        if (!e.target.value) { //유저 이름 빈 문자열-->왜냐면 String은 ""일때 False임 
            msg = '유저 이름은 필수값입니다!';
            setValidate({
                ...validate,
                username: false
            });
        } else if (!nameRegex.test(e.target.value)) {
            msg = '2~5글자 사이의 한글로만 작성해주세요!';
            setValidate({
                ...validate,
                username: false
            });
        } else {
            msg = '사용 가능한 이름입니다.';
            setValidate({
                ...validate,
                username: true
            });
        }
        setMessage({
            ...message,
            username: msg
        });
        setUserValue({
            ...userValue,
            userName:e.target.value
        });
    };

    //이메일 중복확인 요청 함수
    const checkEmail=email=>{
        fetch(`${API_BASE_URL}/check?email=${email}`)
        .then(res=>res.json())
        .then(flag=>{
            let msg;
            if(flag){
                msg='중복된 이메일입니다.';
                setValidate({
                    ...validate,
                    email:false
                });
            }else{
                msg='사용가능한 이메일입니다.';
                setValidate({
                    ...validate,
                    email:true
                });
            }
            setMessage({
                ...message,
                email: msg
            });
            

        });
    };


    // 이메일 입력 검증
    const emailHandler = (e) => {
        const emailRegex = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/;

        let msg;
        if (!e.target.value) {
            msg = '이메일은 필수값입니다!';
            setValidate({ ...validate, email: false });
        } else if (!emailRegex.test(e.target.value)) {
            msg = '이메일 형식이 아닙니다!';
            setValidate({ ...validate, email: false });
        } else {
            
            checkEmail(e.target.value);
        }
        setMessage({ ...message, email: msg });
        setUserValue({
            ...userValue,
            email:e.target.value
        });
    };

    //비밀번호 입력란 검증 체인지 이벤트 핸들러
    const passwordHandler = e => {

        //패스워드 확인란을 비워버리기
        document.getElementById('password-check').value='';
        document.getElementById('check-text').textContent='';
        setValidate({
            ...validate,passwordCheck:false
        });




        //검증시작
        let msg;
        if (!e.target.value) { //패스워드 안적은 상황 
            msg = '비밀번호는 필수값입니다!';
            setValidate({
                ...validate,
                password: false
            });
        } else if (!pwRegex.test(e.target.value)) {
            msg = '8글자 이상의 영문,숫자,특수문자를 포함해주세요!';
            setValidate({
                ...validate,
                password: false
            });
        } else {
            msg = '사용 가능한 비밀번호입니다.';
            setValidate({
                ...validate,
                password: true
            });
        }
        setMessage({
            ...message,
            password: msg
        });
        setUserValue({
            ...userValue,
            password:e.target.value
        });
    };
    
    //비밀번호 일치 검사
    const passwordCheckHandler=e=>{
       //검증시작
       let msg;
       if (!e.target.value) { //패스워드 안적은 상황 
           msg = '비밀번호는 필수값입니다!';
           setValidate({
               ...validate,
               passwordCheck: false
           });
       } else if (e.target.value!==userValue.password) {
           msg = '1차 비밀번호와 일치하게 작성해주세요!';
           setValidate({
               ...validate,
               passwordCheck: false
           });
       } else {
           msg = '비밀번호가 일치합니다.';
           setValidate({
               ...validate,
               passwordCheck: true
           });
       }
       setMessage({
           ...message,
           passwordCheck: msg
       });
    };



    //validate 객체 안의 모든 논리값이 true인지 검사하는 함수
    const isvalid=()=>{
        //for of : 배열 반복 ,  for in :객체 반복
        //객체에서 key값만 뽑아줌 -> String 타입이라 'username'이런식으로나옴
        for(let key in validate){
            //validate는 객체 , key String타입이라서 배열처럼 접근함
            let value=validate[key];
            if (!value) return false;

        }
        return true;

    };

    //회원 가입 요청 서버로 보내기 
    const submitHandler=e=>{
        e.preventDefault();

        //입력값 검증을 오바르게 수쟁했는지 검사
            if(isvalid()){

                fetch(`${API_BASE_URL}/signup`,{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(userValue)
                })
                .then(res=>{
                    if(res.status===200){
                        alert('회원가입을축하합니다.');
                        //로그인 페이지로 리다이렉트
                        window.location.href = '/login';
                    }else{
                        alert('회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.');
                    }
                });

            }else{
                alert('입력창 다시확인해라~');
            }

    };







    return (
        <Container component="main" maxWidth="xs" style={{ margin: "300px auto" }}>
            <form onSubmit={submitHandler} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5">
                            계정 생성
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="fname"
                            name="username"
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="유저 이름"
                            autoFocus
                            onChange={nameHandler}
                        />
                        <span style={
                            validate.username
                                ? { color: 'green' }
                                : { color: 'red' }
                        }>{message.username}</span>


                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="이메일 주소"
                            name="email"
                            autoComplete="email"
                            onChange={emailHandler}

                        />
                        <span style={
                            validate.email
                                ? { color: 'green' }
                                : { color: 'red' }
                        }>{message.email}</span>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="패스워드"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={passwordHandler}
                        />
                        <span style={
                            validate.password
                                ? { color: 'green' }
                                : { color: 'red' }
                        }>{message.password}</span>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="passwordCheck"
                            label="패스워드확인"
                            type="password"
                            id="password-check"
                            autoComplete="current-password"
                            onChange={passwordCheckHandler}
                        />
                        <span  id="check-text" style={
                            validate.passwordCheck
                                ? { color: 'green' }
                                : { color: 'red' }
                        }>{message.passwordCheck}</span>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            계정 생성
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                            이미 계정이 있습니까? 로그인 하세요.
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default Join;