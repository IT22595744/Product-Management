const express=require("express");
const router=express.Router();

//Insert Model
const User=require("../Model/UserModel");
//Insert User Controller
const UserController=require("../Controllers/UserController");

router.get("/",UserController.getAllProducts);//displaying we use get method
router.post("/",UserController.addproduct);//adding we use post method
router.get("/:id",UserController.getById);//getting the details one particular user we use get method /:id should be same as in user controller getbyid function=>id=req.params.id
router.put("/:id",UserController.updateproduct);//updating the particular product details we use put method
router.delete("/:id",UserController.deleteProduct);//deleting the particular product details we use delete method
//export
module.exports=router       