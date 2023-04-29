const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    problems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "problems",
        }
    ]
});

const User = mongoose.model("user" , UserSchema);
module.exports = User;