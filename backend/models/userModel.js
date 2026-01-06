import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type : String,
            required: true,
            unique: true,
            lowercase:true
        },

        email: {
            type : String,
            required: true,
            unique: true,
            lowercase:true
        },

        password: {
            type : String,
            required: [true, "Password is required"], 
        },

        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const user = mongoose.model('user', userSchema)
 
export default User;