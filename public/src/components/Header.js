import { Box, Button, Typography  } from "@mui/material";
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    const [name , setName] = useState(
        window.localStorage.getItem("name") || "user"
    )
    return ( 
        <Box style={container}>
            <Typography style={logo}>DSA Cracker</Typography>
            <TypeAnimation
                sequence={[
                    `Hello ${name}, welcome`,
                    2000, 
                    'Pracrice Dsa , Les Go', 
                    1000, 
                    'You can do it !!',
                    1000, 
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '25px',fontFamily: "Roboto Mono, monospace", display: 'inline-block' }}
            />
            <Box marginTop={2}>
                <Button variant="outlined">Create A problem</Button>
                <Button variant="standard" onClick={() => window.localStorage.clear()}>Logout</Button>
            </Box>
        </Box>
     );
}

const container = {
    textAlign: 'center',
    padding: '20px',
}
const logo = {
    color: '#343A40',
    fontWeight: "1000",
    fontSize: "45px",
    marginBottom: '10px'
}
 
export default Header;