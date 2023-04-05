const mongoose=require("mongoose")
const bcrypt=require('bcryptjs')
const schema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
     , 
     available:{
        type:String,
        required:true
     }

})
// schema.pre("save" , async function (next) {
//     if (this.isModified("password")) {
//         // const passwordHash=await bcrypt.hash(password , 10);
//     this.password= await bcrypt.hash(this.password , 10)
//     this.conf_password= await bcrypt.hash(this.conf_password , 10)
// }
// next();
    
// })
const addproduct = new mongoose.model("addproduct" , schema)
module.exports=addproduct;


