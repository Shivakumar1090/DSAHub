import { Box, Modal, Typography } from "@mui/material";
import Login from "./login";
import { useState } from "react";
import Register from "./register";

const FloatingWindow = ({open}) => {
    const [loginScreen , setLoginScreen] = useState(true);
    const auth = (
        <Box>
            <Box style={ModalStyle}>
                <Box display='flex' justifyContent='space-around'>
                    <Box>
                        <Typography style={heading} onClick = {() => setLoginScreen(true)}>Login</Typography>
                        {loginScreen ? <Box style={underline}></Box> : null}
                    </Box>
                    <Box>
                        <Typography style={heading} onClick = {() => setLoginScreen(false)}>Signup</Typography>
                        {!loginScreen ? <Box style={underline}></Box> : null}
                    </Box>
                </Box>
                <Box>
                    {loginScreen ? <Login setLoginScreen= {setLoginScreen}/> : <Register setLoginScreen={setLoginScreen}/>}
                </Box>
            </Box>
        </Box>
    )
    return ( 
        <Box>
            <Modal open="open">
                {auth}
            </Modal>
        </Box>
     );
}

const heading = {
    fontSize: 20,
    fontWeight: 'bold',
    
}

const underline = {
    border: '1px solid',
    borderRadius: 100,
    width: 25,
    marginTop: 7,
    borderWidth: 'medium',
}

const ModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: '0px solid black',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
    color: "black",
    width: 400,
    // p: 4,
    padding: '3rem',
    // paddingLeft: "3rem",
    // paddingRight: "3rem",
    // paddingTop: '2rem',
    // paddingBottom: '2rem',
}
 
export default FloatingWindow;