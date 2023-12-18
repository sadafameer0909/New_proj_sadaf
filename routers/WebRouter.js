const router = require('express').Router()
const {User}=require('../models')
const ApiResponse=require('../utils/ApiResponse')
const errorParser=require('../utils/ErrorParser')

//name,email,password,phone,image
router.post("/user_reg",async(request,response)=>
{
    const reqData = request.body;
    try{
  const { name, email, password, phone, image } = reqData;
  const userData = { name, email, password, phone, image };
const user=await User.create(userData);

    response.status(201).json(new ApiResponse(true,"User Saved !",user,null))

}catch(err){
    response.status(500).json(new ApiResponse(false,"User Not Saved !",null,errorParser(err)))
    console.log(err)
}


})
module.exports=router;