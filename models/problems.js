const mongoose = require("mongoose");

const ProblemsSchema = new mongoose.Schema({
    name: String,
    link: String,
    platform: String,
    topic: {
        type: String,
    },
    solved: {
        type: Boolean,
        default: false,
    },
    bookmarked: {
        type: Boolean,
        default: false,
    }
});

// const Problems = mongoose.model("problems" , ProblemsSchema);
// module.exports = Problems;