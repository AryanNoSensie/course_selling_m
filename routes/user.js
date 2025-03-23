const { Router } = require('express');//getting the router form express 
const userRouter = Router();//creating the router


//using zod for input validation 
const { z } = require('zod');
//using bcrypt to hash the password 
const bcrypt = require('bcrypt');


//getting the user model from db
const { UserModel , AdminModel, CourseModel, PurchaseModel } = require('../database/db');


//json webtoken for making token on signup 
const jwt = require('jsonwebtoken');




//for user signup process  route for user 
userRouter.post('/user/signup' , async function (req, res)  {

    //getting the data from the user using zod validations 
   const requestSchema = z.object({
       email : z.string().email(),
       password : z.string().min(8),
       firstname : z.string(),
       lastname : z.string()
   });


   //req the bodies
const {email,password,firstname,lastname} = req.body;


try{
    await UserModel.create({
        email,
        password: hashedPassword,
        firstname,
        lastname

    }); 
}
catch(err) {
    console.log(err);
}
res.json({
    message: "You are signed up"
})
});


//for user sign in process route
userRouter.post('/user/signin', function (req, res) {
    res.json({
        message: 'User signin'
    })
})

//for user purchased courses 
userRouter.get('/user/purchased', function (req, res) {
    res.json({
        message: 'User purchased courses'
    })
})

module.exports = {
    userRouter : userRouter
}