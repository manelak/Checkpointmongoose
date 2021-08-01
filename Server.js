const express = require ('express');
const app = express();
const dotenv= require ('dotenv');
const connectDB = require ('./Config/ConnectDB')

//Environment Variables:
dotenv.config({path:'./.env'});
//Connect To DataBase:
connectDB();


//Middlewares:
app.use(express.json());
app.use('/api/contact', require('./Routers/Contacts'));





//Start Server:
const port=process.env.PORT;

app.listen(5000,(err)=>{
    if(err) console.log(err);
    console.log('Open Your Browser On Port 5000');
});