const express=require("express")
const mongoose=require("mongoose")
const router=require("./Routes/UserRoutes");

const app=express();
const cors=require("cors");
//middleware
/*app.use("/",(req,res,next)=>{
    res.send("It is working");
})*/
app.use(express.json());
app.use(cors());
app.use("/products",router);



mongoose.connect("mongodb+srv://Mohamedarshad:arshad123@atlascluster.d1qd0xc.mongodb.net/product_db?retryWrites=true&w=majority&appName=AtlasCluster")
.then(()=>console.log("connected to mongodb"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=> console.log((err)))
//If there is an error during the connection process, it catches the error and logs it to the console.

//call register model
//import the register model class
require("./Model/Register");
//using mongoose reqire the database 
const User=mongoose.model("Register");
//inserting details usin post method /regiter url should be equal to same as in the Register.js frontend
app.post("/register",async(req,res)=>{
    const {name,gmail,password}=req.body;
    try{
        await User.create({
            name,
            gmail,
            password,
        });
        res.send({status:"ok"});
    }catch(err){
        res.send({status:"err"});
    }

})

//login----
app.post("/login",async(req,res)=>{
    const {gmail,password}=req.body;

    try{
        //finding a user by the gmail
        const user=await User.findOne({gmail});
        if(!user){
            return res.json({err:"User Not Found"})

        }
        if(user.password ===password){
            return res.json({status:"ok"});
        }else{
            return res.json({err:"Incorrect password"});
        }
    }
    //server error
    catch(err){
        console.error(err);
        res.status(500).json({err:"server Err"})
    }
});