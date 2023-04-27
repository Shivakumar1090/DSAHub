import React, { useState } from "react";
import { Box, Button, InputBase, Typography } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
const { container, input } = require("./styles");

const { LOGIN } = require('../../apis/user');

const Login = ({setLoginScreen}) => {
    // const Navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginHandler = () => {
        const checkuser = {
            email: email,
            password: password,
        }

        axios.post(LOGIN, checkuser)
            .then(async (resp) => {
                console.log(resp);
                resp.status === 200 ? toast.success("Successfully Logged in") : toast.warn(resp.data.Message);
            })
            .catch(async (err) => {
                console.log(err);
                err.response.status === 301 ? toast.warn(err.response.data.Message) : toast.warn(err.response.data.Message);
            })
    }

    return (
        <Box style={container}>
            <InputBase
                style={input}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputBase
                style={input}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button style={btn} onClick={LoginHandler}>Login</Button>
            <Typography style={{ fontSize: "15px", marginTop: '20px' }} >
                Don't have an account yet?{" "}
                <span  style={{textDecoration: 'underline'}} onClick={() => setLoginScreen(false)}>Signup</span>
            </Typography>
        </Box>
    );
}


const btn = {
    background: "black",
    width: "200px",
    marginTop: "15px",
    padding: "7px",
    textTransform: "capitalize",
    fontSize: "15px",
    color: '#fff'
}


export default Login;