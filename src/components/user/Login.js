import React from "react";
import { Grid, Button, Container, Typography, TextField } from "@mui/material";
import { BASE_URL, USER } from "../../config/host-config";

const Login = () => {
    const API_BASE_URL = BASE_URL + USER;


    const loginHandler = e => {
        e.preventDefault();

        //이메일입력 태그, 비번 입력 태그
        const $email = document.getElementById('email');
        const $password = document.getElementById('password');

        //서버에 로그인 요청
        fetch(`${API_BASE_URL}/signin`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email: $email.value,
                password: $password.value
            })
        })
            .then(res => res.json())
            .then(result => {
                if(result.message){
                    //로그인 실패
                    alert(result.message);
                }else{
                    // alert('로그인 성공');

                    //발급받은 토큰을 저장,회원정보를 저장 
                    // 브라우저가 제공하는 local storage에 토큰을 저장하면
                    //쿠키 처럼 사용가능하고 , 심지어 원할 때에만 요청에 필요 할 때 포함시킬 수 잇음
                    // 로컬 스토리지 -브라우저가 종료되어도 남아있음  --클라이언트 스토리지
                    // 세션 스토리지- 브라우저종료되면 사라짐  --클라이언트 스토리지
                
                    localStorage.setItem('ACCESS_TOKEN',result.token);
                    localStorage.setItem('LOGIN_USERNAME',result.userName);
                    window.location.href='/';
                }
            })
    };




    return (
        <Container component="main" maxWidth="xs" style={{ margin: "300px auto" }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">
                        로그인
                    </Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit={loginHandler}>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="email address"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="on your password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            로그인
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default Login;