import { Box, Chip, Paper, Typography } from "@mui/material";

const TopicCard = () => {
    return ( 
        <div>
            <Paper elevation={2} style={cardStyle}>
                <Box display="flex" justifyContent='space-between'>
                    <Typography variant='h6'>Array</Typography>
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
    display:"flex" ,flexDirection:"column", justifyContent:'space-around'
    // backgroundColor: 'black',
}
 
export default TopicCard;