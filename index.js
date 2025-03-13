const express = require('express');
const mongoose = require('mongoose');


//getting the routes form all files through router 
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');

//diffractions to just use 
const app = express();
express.json();


//version one routes redirtecting 
//anything coming to this route will redirect to the endpoint i pointed in end 
app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/admin', adminRouter);
















app.listen(3000, () => {
    console.log('Server is running on port 3000');}
);
