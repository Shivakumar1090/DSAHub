const mongoose = require("mongoose");

const ProblemsSchema = new mongoose.Schema({
    name: String,
    link: String,
    platform: String,
    topic: {
        type: String,
    }
});

const Problems = mongoose.model("problems" , ProblemsSchema);
module.exports = Problems;