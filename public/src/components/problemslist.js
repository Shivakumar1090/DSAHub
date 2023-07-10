import { Box, Checkbox, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Header from "./Header";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useLocation } from "react-router-dom";
const ProblemsList = (props) => {
    const {state} = useLocation();

    // console.log(state);
    // const cart = useSelector((state) => state.cart);
    
    let problems =  JSON.parse(window.localStorage.getItem("problems"));

    const handleProblem = (prblm,type) => {
        let prblmIndx = problems.findIndex(each => each.link === prblm.link);


        type === "solve" ?
        problems[prblmIndx].solved =! problems[prblmIndx].solved:
        problems[prblmIndx].bookmarked =! problems[prblmIndx].bookmarked;

        window.localStorage.setItem("problems" ,JSON.stringify(problems));
    }

    return ( 
        <Box>
            <Box>
                <Header />
            </Box>
            <Box sx={container}>
                <TableContainer >
                    <Table>
                        <TableHead>
                            <TableRow>
                                    <TableCell style={tablestyle} width='20px'></TableCell>
                                    <TableCell style={tablestyle} width='30px'>Id </TableCell>
                                    <TableCell style={tablestyle}>Questions</TableCell>
                                    <TableCell style={tablestyle} width='40px'></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {problems && problems.map(prblm => {
                                return(
                                    prblm.topic === state.topic && 
                                    <TableRow key={prblm.link}>
                                        <TableCell style={tablestyle}><Checkbox size="small" onClick={() => handleProblem(prblm , 'solve')}/></TableCell>
                                        <TableCell style={tablestyle}>1</TableCell>
                                        <TableCell style={tablestyle} onClick={() => window.open(prblm.link , "_blank")}>{prblm.name}</TableCell>
                                        {/* <TableCell styel={tablestyle}>{prblm.link}</TableCell> */}
                                        <TableCell style={tablestyle}>
                                            <IconButton onClick={() => handleProblem(prblm , "bookmark")}>
                                                {!prblm.bookmarked === true ? <BookmarkBorderIcon/> : <BookmarkIcon />}
                                            </IconButton>
                                            
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
     );
}

const container = {
    width: '80%',
    position: 'absolute',
    left: '10%',
    right: '10%',
    // "@media only screen and (max-width: 1024px)":{
    //     width : '450px',
    // },
    "@media only screen and (max-width: 770px)":{
        width : '90%',
        left: '5%',
        right: '5%',
    },
    "@media only screen and (max-width: 480px)":{
        width : '90%',
        left: '5%',
        right: '5%',
    },
}
const tablestyle = {
    // backgroundColor: '#c2edda',
    color: '#000',
    textAlign: 'center',
    fontSize: '17px',
    border: '1px solid #ccc'
}
 
export default ProblemsList;