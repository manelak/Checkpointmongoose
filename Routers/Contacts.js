const express = require ('express');
const { Model } = require('mongoose');
const router = express.Router();
const contact = require ('../Model/Contact');


//Create and Save a Record of a Model:

router.post('/',async (req,res)=>{
    try {
        let newcontact = newcontact(req.body);
        const response = await newcontact.save();
        res.send({response:response , message:"new contact added"});
    } catch (error) {
        console.log(error);
        res.status(400).send("Can Not Save Contact");
    }
});


//Create Many Records with model.create():(Model.Create) :

let arrayOfPeople=[
    {
        name : "Rabeh",
        age : 29 , 
        favoriteFoods : [ "Pizza" , "iija"],
    },
    {
        name : "Aymen",
        age : 26 , 
        favoriteFoods : [ "Pizza" , "Spaghetti"],
    },
    {
        name : "Akel",
        age : 30 , 
        favoriteFoods : [ "Couscous" , "Marka sfaxienne"],
    },
];
contact.create(arrayOfPeople,(err,data)=>{
    if(err) console.log(err);
})

//Use model.find() to Search Your Database
contact.find({name : "Rabeh"} , (err,data)=>{
    if (err) console.log(err);
    console.log(data);
});

//Use model.findOne() to Return a Single Matching Document from Your Database
contact.findOne({favoriteFoods : {$all : ["Spaghetti"]}} , (err,data)=>{
    if(err) console.log(err);
    console.log(data);
});

//Use model.findById() to Search Your Database By _id
contact.findById("60f319c2e889c71cb89758dd",(err,data)=>{
    if (err) console.log(err);
    console.log(data);
});

//Perform Classic Updates by Running Find, Edit, then Save
contact.findById("60f319c2e889c71cb89758de",(err,result)=>{
    if (err) console.log(err);
    result.favoriteFoods.push("ojja fruit de mer");
    result.save((err,data)=>{
        console.log(data);
    })
});

//Perform New Updates on a Document Using model.findOneAndUpdate()
contact.findOneAndUpdate(({name:"Rabeh"},{age:18}),(err,data)=>{
    if(err)console.log(err);
    console.log(data);
});

//Delete One Document Using model.findByIdAndRemove
contact.findByIdAndRemove({name:'Akel'},(err,data)=>{
    if(err) console.log(err);
    console.log(data);
});

//MongoDB and Mongoose - Delete Many Documents with model.remove()
contact.remove({name:'Akel'},(err,data)=>{
    if(err) console.log(err);
    console.log(data);
});

//
contact.find({ favoriteFoods: { $all: ["iija"] } }).sort({name: 1}).limit(2).select({age: 0}).exec((err, data)=>{
    if (err) console.log(err);
    console.log(data);
});

module.exports=router;