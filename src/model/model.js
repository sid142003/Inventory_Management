const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const bcrypt=require('bcryptjs')
const schema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String ,
        required:true,
        maxLength:10,
        minLength:5
    },
    conf_password:{
        type:String ,
        required:true,
        maxLength:10,
        minLength:5
    }

})


schema.methods.generateAuthToken=()=>{
    try {
        const token=jwt.sign({_id:this._id} , "asfgasyfasgfsagfsgfashfghasfgsahfgashfasfgasfgashgfafgashfgs")
        console.log(token);
    } catch (error) {
        console.log("error");
    }
}
schema.pre("save" , async function (next) {
    if (this.isModified("password")) {
        // const passwordHash=await bcrypt.hash(password , 10);
    this.password= await bcrypt.hash(this.password , 10)
    this.conf_password= await bcrypt.hash(this.conf_password , 10)
}
next();
    
})
const details = new mongoose.model("details" , schema)
module.exports=details;
