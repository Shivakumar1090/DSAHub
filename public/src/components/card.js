import { Box, Chip, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const TopicCard = ({ topic}) => {
    const Navigate = useNavigate();
    
    return ( 
        <div>
            <Paper elevation={2} style={cardStyle} onClick= {() => Navigate(`/problems/${topic}` ,  { state: {topic:topic} })} >
                <Box display="flex" justifyContent='space-between'>
                    <Typography variant='h6'>{topic}</Typography>
                    <Chip label="Solve Now 👨‍💻"  size="medium"></Chip>
                </Box>
                <Box >
                    <Typography style={{fontSize: 14, }}>Total questions 20</Typography>
                </Box>
                <Box >
                    <Typography style={{fontSize: 16, }}>Not Yet started</Typography>
                </Box>
            </Paper>
        </div>
     );
}

const cardStyle = {
    padding: "15px 20px 15px 20px",
    height: 150,
    // width: 350,
    borderRadius: 15,
    textAlign: 'left',
    cursor: 'pointer',
    display:"flex" ,flexDirection:"column", justifyContent:'space-around'
    // backgroundColor: 'black',
}
 
export default TopicCard;