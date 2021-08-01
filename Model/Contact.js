//Create a person with this prototype:

const mongoose = require ('mongoose');

const contactSchema = new mongoose.Schema({
    name:{type:String , required:true},
    age:Number,
    favoriteFoods:[String],
});

module.exports=contact=mongoose.model("contact",contactSchema);