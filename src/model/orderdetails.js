const mongoose=require("mongoose")

const orderSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
     , 
     email:{
        type:String,
        required:true
     },
     address:{
        type:String,
        required:true
     }

})

const OrderSchema = new mongoose.model("Orderdetails" , orderSchema)
module.exports=OrderSchema;


