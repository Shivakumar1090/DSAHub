import { Box, Button, Typography  } from "@mui/material";
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return ( 
        <Box style={container}>
            <Typography style={logo}>DSA Cracker</Typography>
            <TypeAnimation
                sequence={[
                    'Hello User, Welcome',
                    2000, 
                    'Pracrice Dsa , Les Go', 
                    1000, 
                    'You can do it !!',
                    1000, 
                    () => {
                        console.log('Sequence completed'); 
                    }
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '25px',fontFamily: "Roboto Mono, monospace", display: 'inline-block' }}
            />
            {/* <Box marginTop={2}>
                <Button variant="outlined">Create A problem</Button>
                <Button variant="standard">Logout</Button>
            </Box> */}
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