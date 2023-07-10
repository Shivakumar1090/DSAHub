import React, { useState } from "react";
import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const { container, heading } = require("./auth/styles");
const {CREATE_PROBLEM} = require('../apis/problems');

const Createform = () => {
    const [name,setName] = useState("");
    const [link,setLink] = useState("");
    const [topic , setTopic] = useState("");
    const [platform,setPlatform] = useState("leetcode");

    const TopicTags = ["Arrays" , "String" , "Matrix","Search & Sort","Linked List","Binary Trees","Bst", "Greedy", "Backtracing",
                    "Stack & queues","Heap","Graph","Trie","Dynamic Programming","Bit Manupulation","Math"];

    const handleSave = () => {
        const newProblem = {
            name: name,
            link: link,
            topic: topic,
            userId: window.localStorage.getItem("id"),
            // platform: platform,
        }
        axios.post( CREATE_PROBLEM , newProblem)
            .then(async(resp) => {
                await resp.status === 200 ? toast.success("Successfully Created") : toast.warn(resp.data.Message);
                await window.localStorage.setItem("problems" , JSON.stringify(resp.data.user.problems));
                window.location.href = "/";
            })
            .catch(async (err) => {
                console.log(err);
                toast.warn("something went wrong");
            })
    }

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
            {/* <Box textAlign='left'>
                <FormLabel>Platform</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Leetcode"
                >
                    <FormControlLabel value="Leetcode" control={<Radio />} label="Leetcode" />
                    <FormControlLabel value="Geeksforgeeks" control={<Radio />} label="Geeksforgeeks" />
                    {/* <FormControlLabel value="Codeforces" control={<Radio />} label="Codeforces" /> */}
                    {/* <FormControlLabel value="Other" control={<Radio />} label="Other" /> */}
                {/* </RadioGroup> */}
            {/* // </Box>  */}
            <Button variant="contained" style={{width: '200px',marginTop: '5px'}} onClick={()=>handleSave()}>Save</Button>
           
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
 
export default Createform;