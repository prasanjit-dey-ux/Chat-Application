import mongoose from "mongoose";

const userSchema = mongoose.Schema (
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            
        }
    }
)