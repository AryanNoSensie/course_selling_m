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
const { JWT_USER_PASSWORD } = require('../config');









//-------------------------------------------------------------------------------------


//for user signup process  route for user 
userRouter.post('/signup' , async function (req, res)  {

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
        password,
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




// -------------------------------------------------------------------------------------



//for user sign in process route
userRouter.post('/signin', async function (req, res) {

    //providing zod input validatioon for sign in 
  

    //getting the email and password from the user
    const { email, password } = req.body;


   //checking if the email exists in the database
   const response = await UserModel.findOne({//finding the entry in db 
    email: email,
    password: password

});
  
   //if the email does not exist in the database
    if (response) {
     const token = jwt.sign({
        id: response._id

     } , JWT_USER_PASSWORD);

       res.json({
              token: token
    })
    }
    else{
        res.status(404).json({
            message: 'User not found or wrong credentials '
        })
    }
   
})



//-------------------------------------------------------------------------------------

//finsihing this after getting internships lol


//for user purchased courses 
userRouter.get('/user/purchased', function (req, res) {
     
    res.json({
        message: 'User purchased courses'
    })
})

module.exports = {
    userRouter : userRouter
}