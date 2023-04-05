const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://siddhant:%40Siddhant14022003@cluster0.khebxji.mongodb.net/Inventory_Information?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
})
.then(()=>{
    console.log("connected");
}).catch((error)=>{
    console.log("error");
}) 