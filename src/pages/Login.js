import React, { useState, useEffect } from 'react'


import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";

import CITEDU from "../assets/images/CIT Education.png"
import LogoCIT from "../assets/images/Logo.jpg"

import {useForm} from "react-hook-form"


function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://www.facebook.com/citeducation3105">
                CIT Education
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

function Login() {
    const navigate = useNavigate()
    const [loading,setLoading] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleDataLogin = (dataLogin) => {
        var dataLoginLocal = JSON.parse(localStorage.getItem("dataRegister"));
        console.log(dataLoginLocal);
        if(dataLogin.email === dataLoginLocal.email && dataLogin.password === dataLoginLocal.password){
            toast.success('Login Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setTimeout(()=>{
                    navigate('/')    ;
                }, 3000)
        } else {
            toast.error('Login Failed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        console.log(dataLogin);
        // toast.success("Register Success!");
        // setTimeout(function () {
        //   navigate("/login");
        // }, 5000);
        
      };

      useEffect(()=>{
        setTimeout(function(){
            setLoading(false)
        },2000)
      })    
    return (
        <>
        {loading ? <Box sx={{display:'flex', justifyContent:'center', margin: '25%'}}><CircularProgress /></Box> :
        <Box sx={{ display: "flex", height: "100vh" }}>
            <Box
                component="img"
                sx={{
                    height: "100%",
                    width: "50%",
                }}
                alt="CITEDU"
                src={CITEDU}
            />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            height: 100,
                            width: 150,
                        }}
                        alt="Logo"
                        src={LogoCIT}
                    />
                    <Typography component="h1" variant="h5">
                        Sign in CIT Education
                    </Typography>
                    <Box
                        onSubmit={handleSubmit(handleDataLogin)}
                        component="form"
                        onSubmit={handleSubmit(handleDataLogin)}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    {...register('email')}
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                />
                                <Typography
                                    sx={{ fontSize: "12px", marginTop: "7px" }}
                                    color="tomato"
                                >
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    {...register('password')}
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                />
                                <Typography
                                    sx={{ fontSize: "12px", marginTop: "7px" }}
                                    color="tomato"
                                >
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox value="allowExtraEmails" color="primary" />
                                    }
                                    label="Agree with CIT Education's terms and conditions"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/register" variant="body2">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    />
                <ToastContainer />
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </Box>}
        </>
    )
}

export default Login