const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:{
        type:String,//datatype
        required:true//validate
    },
    supplier:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model(
    "products",//file name
    userSchema //function name
)