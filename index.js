require('dotenv').config(); //getting the env variables


const express = require('express');
const mongoose = require('mongoose');

const { userModel, adminModel, courseModel, purchaseModel } = require('./database/db');

//getting the routes form all files through router 
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');

//diffractions to just use 
const app = express();
app.use(express.json());//if user send data , u wanted to parse that data in json format u need to use this 


//version one routes redirtecting 
//anything coming to this route will redirect to the endpoint i pointed in end 
app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/admin', adminRouter);




async function connect() {
    await mongoose.connect("process.env.MONGO_URL");

    app.listen(3000, () => {
        console.log('Server is running on port 3000');}
    );

}
//startiing rthe db and node server 
connect();











