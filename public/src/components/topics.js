import React , { useState } from "react";
// import axios from "axios";
import TopicCard from "./card";
import { Box, Grid } from "@mui/material";

const Topics = () => {
    const Topics = ["Arrays" , "String" , "Matrix","Search & Sort","Linked List","Binary Trees","Bst", "Greedy", "Backtracing",
                    "Stack & queues","Heap","Graph","Trie","Dynamic Programming","Bit Manupulation","Math"];
    // const problems = JSON.parse(window.localStorage.getItem("problems"));
    
    return ( 
        <Box style={container}>
             <Grid container spacing={{ xs: 3, md: 6 }} columns={{ xs: 4, sm: 8, md: 15 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                {Topics.map((topic,index) => {
                    return(
                        <Grid item  xs={2} sm={4} md={4} key={index}>
                            <TopicCard topic={topic} />
                        </Grid>
                    )
                })}
            </Grid>
            <Box></Box>
        </Box>
     );
}

const container = {
   marginBottom: 50,
}
 
export default Topics;