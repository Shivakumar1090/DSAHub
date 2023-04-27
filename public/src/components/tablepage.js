import { Box, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Header from "./Header";

const TablePage = () => {
    return ( 
        <Box>
            <Box>
                <Header />
            </Box>
            <Box marginLeft={10} marginRight={10}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                    <TableCell style={tableHead}></TableCell>
                                    <TableCell style={tableHead}>Id </TableCell>
                                    <TableCell style={tableHead}>Questions</TableCell>
                                    <TableCell style={tableHead}>Links</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell style={tableHead}><Checkbox /></TableCell>
                                <TableCell style={tableHead}>1</TableCell>
                                <TableCell style={tableHead}>Two sum problem</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
     );
}

const tableHead = {
    // backgroundColor: '#c2edda',
    color: '#000',
    textAlign: 'center',
    fontSize: '17px',
    border: '1px solid #ccc'
}
 
export default TablePage;