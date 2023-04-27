import React, { useState } from "react";
import { Box, Button, InputBase, Typography } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const { container, input } = require("./styles");

const { REGISTER } = require('../../apis/user');

const Register = ({setLoginScreen}) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const registerHandler = () => {
        const newuser = {
            name: name,
            email: email,
            password: password,
        }

        axios.post(REGISTER, newuser)
            .then(async (res) => {
                await res.status === 200 ? toast.success(res.data.Message) : toast.warn(res.data.Message);
            })
            .catch(async (err) => {
                console.log(err);
                await err.response.status === 422 ? toast.warn(err.response.data.Message) : toast.error(err.response.data.Message);
            })
    }

    return (
        <div>
            <Box style={container}>
                <InputBase
                    style={input}
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                <Button style={btn} onClick={registerHandler}> Create </Button>
                <Typography style={{ fontSize: "15px", marginTop: '20px' }} >
                    if you have account already then{" "}
                    <span style={{textDecoration: 'underline'}} onClick={() => setLoginScreen(true)}>Login</span>
                </Typography>
            </Box>
        </div>
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

export default Register;