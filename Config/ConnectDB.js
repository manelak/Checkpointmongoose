//Connect To DataBase:
const mongoose = require ('mongoose');

const connectDB = async () =>{
    try {
        let result = mongoose.connect("mongodb://localhost:27017/contactDB",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Successfully Connected');
    } catch (error) {
        console.log(error);
    }
};

module.exports=connectDB;