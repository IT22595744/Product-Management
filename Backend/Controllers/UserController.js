const Product=require("../Model/UserModel");

//displaying all products
const getAllProducts=async(req,res,next)=>
{
    let product

    //get all products
    try{
        product=await Product.find();//finding every product and displaying
          
    } catch(err){
        console.log(err);
    }

    //not found
    if(!product){
        return res.Status(404).json({message:"products not found"});

    }

    //Display all products
    return res.status(200).json({product});
};
//http://localhost:5000/products=>testing above get method using this url in the postman

//inserting products
const addproduct=async(req,res,next)=>{
    const {name,supplier,date,address}=req.body;

    let products;

    try{
        products=new Product({name,supplier,date,address});
        await products.save();//save the inserted details in the database
    }catch(err){
        console.log(err);
    }
    //not insert product
    if(!products){
        return res.status(404).json({message:"unable to add product"});
    }
    return res.status(200).json({products});
}
//http://localhost:5000/products=>testing above post method using this url in the postman


//get by ID
const getById=async(req,res,next)=>{
    const id=req.params.id;//finding the particular product

    let product;

    try{
        product=await Product.findById(id);
    }catch(err){
        console.log(err);
    }
    //not available users
    if(!product){
        return res.status(404).json({message:"product not found"});
    }
    return res.status(200).json({product});

}
//http://localhost:5000/products/id=>testing above get method using this url in the postman

//update product details
const updateproduct=async(req,res,next)=>{
    const id=req.params.id;
    const {name,supplier,date,address}=req.body;

    console.log('body',id,req.body)

    let products;

    try{
        console.log("rcvd date",date)
        const newDate = new Date(date);
        products=await Product.findByIdAndUpdate({_id:id},{name:name,supplier:supplier,date:newDate,address:address});//finding the particular product and updating
        console.log('products',products);
    }catch(err){
        console.log(err);
    }

    //not available product
    if(!products){
        return res.status(404).json({message:"unable to update product details"});
    }
    return res.status(200).json({products});

}

//delete product details
const deleteProduct=async(req,res,next)=>{
    const id=req.params.id;

    let product;

    try{
        product=await Product.findByIdAndDelete(id)
    }catch(err){
        console.log(err);
    }
    if(!product){
        return res.status(404).json({message:"unable to update product details"});
    }
    return res.status(200).json({product});
}

//exporting the functions
exports.getAllProducts=getAllProducts;
exports.addproduct=addproduct;
exports.getById=getById;
exports.updateproduct=updateproduct;
exports.deleteProduct=deleteProduct;