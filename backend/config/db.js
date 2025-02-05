const mongoose=require('mongoose');
require('dotenv').config();
const mongoURL=process.env.MONGO_URI;
mongoose.connect(mongoURL);
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected to mongoDB');
});
db.on('error',()=>{
    console.log('error in connecting to mongoDB');
});
db.on('disconnected',()=>{
    console.log('disconnected from mongoDB');
});

module.exports=db;
