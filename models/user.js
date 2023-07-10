const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    username: String,
    problems: [
        {
            name: String,
            link: String,
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
        }
    ],
    bookmarks: [
        {
            name: String,
            link: String,
            topic: {
                type: String,
            },
            solved: {
                type: Boolean,
                default: false,
            },
        }
    ]
});

const User = mongoose.model("user" , UserSchema);
module.exports = User;