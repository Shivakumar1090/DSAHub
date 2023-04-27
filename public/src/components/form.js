import React, { useState } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

const { container, heading } = require("./auth/styles");


const AddingForm = () => {
    const [name,setName] = useState("");
    const [link,setLink] = useState("");
    const [topic , setTopic] = useState("");

    const TopicTags = ["Arrays" , "String" , "Matrix","Search & Sort","Linked List","Binary Trees","Bst", "Greedy", "Backtracing",
                    "Stack & queues","Heap","Graph","Trie","Dynamic Programming","Bit Manupulation"];

    return ( 
        <Box style={container}>
            <Typography variant="h4" style={heading}>Add a problem</Typography>
            <TextField
                style={input}
                label="Problem Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                style={input}
                label="Problem Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <FormControl  >
                <InputLabel id="demo-simple-select-label">Topic</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={topic}
                    label="Topic"
                    onChange={(e) => setTopic(e.target.value)}
                    MenuProps={MenuProps}
                    style={input}
                >
                    {TopicTags.map((topictag) => (
                        <MenuItem
                            key={topictag}
                            value={topictag}
                        >
                            {topictag}
                        </MenuItem>
                    ))}   
                </Select>
            </FormControl>
            <Button variant="contained" style={{width: '200px',marginTop: '5px'}}>Save</Button>
           
        </Box>
     );
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const input = {
    margin: "10px",
    width: "400px",
}
 
export default AddingForm;