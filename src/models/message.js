const mongoose = require("mongoose");
const validator = require("validator");




const messageSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        Validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }

    },
    number:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

const RegisterMessage = new mongoose.model("RegisterMessage" , messageSchema);

module.exports = RegisterMessage;