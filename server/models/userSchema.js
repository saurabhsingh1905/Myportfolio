const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid Email")
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        // unique:true
    },
    messages: []
})


//save message
userSchema.methods.Messagesave = async function (message) {
    try {
        this.messages = this.messages.concat({ message });
        await this.save();
        return message;
    } catch (error) {
        console.log(error)
    }
}

//creating model

const users = new mongoose.model("users", userSchema);

module.exports = users;



//[].concat ({message})
//o/p=> message:"ghbdhxhfhfhgldhfghlkghlkdglkjlkjlk" jitne bar message send hoga wo is form 
//me messages[] me store ho jayega