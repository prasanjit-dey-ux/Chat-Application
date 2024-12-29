import mongoose from "mongoose";

const userSchema = mongoose.Schema (
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        pic: {
            type: String,
            require: true,
            default: 
            ""
        },
    },
    {
        timestamp: true
    }
);

const User = mongoose.Model("User", userSchema);

model.exports = User;