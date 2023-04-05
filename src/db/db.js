const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://siddhant:%40Siddhant14022003@cluster0.khebxji.mongodb.net/Inventory_Information?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected");
}).catch((error)=>{
    console.log("error");
}) 