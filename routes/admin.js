const { Router } = require('express');//getting the router form express 
const adminRouter = Router();//creating the router

//using zod for input validation 
const { z } = require('zod');
//using bcrypt to hash the password 
const bcrypt = require('bcrypt');


//getting the admin model from db
const { UserModel , AdminModel, CourseModel, PurchaseModel } = require('../database/db');


//json webtoken for making token on signup 
const jwt = require('jsonwebtoken');
 const { JWT_ADMIN_PASSWORD } = require('../config');
const { adminAuthmiddleware } = require('../middlewares/adminAuth');



//-------------------------------------------------------------------------------------





//for user signup process  route 
adminRouter.post('/signup' , async function (req, res)  {
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
       await AdminModel.create({
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


//-------------------------------------------------------------------------------------






//for user sign in process route
adminRouter.post('/signin', async function (req, res) {
    
    //req the email and password from the admin
    const { email , password } = req.body;

    //check if email exist 
    const response = await AdminModel.findOne({
        email : email ,
        password : password
    })

    //if email does exist
    if(response){
        const token = jwt.sign({
            id : response._id
        },JWT_ADMIN_PASSWORD);

        res.json({
           
            token : token
        })
    }else{
        res.status(403).json({
            message : 'Invalid email or password'
        })
    }
})



//-------------------------------------------------------------------------------------








//for admin to create a course 
adminRouter.post('/course', adminAuthmiddleware , async function (req, res) {

   const adminId = req.adminId;

    const { title, description, imageUrl, price } = req.body;

   const course =  await CourseModel.create({
        title : title,
        description : description,
        imageUrl : imageUrl,
        price : price,
        CreatorId : adminId
    })


    res.json({
        message: 'admin purchased courses',
        courseId : course._id
    })
})


//--------------------------------------------------------------------------------------




//for admin to make some changes in the code 
adminRouter.put('/course', adminAuthmiddleware, async  function (req, res) {
   
    const adminId = req.adminId;
    const { title, description, imageUrl, price , courseId } = req.body;

    //cupdating the course also by the sole adminn, not any other admin so making a check too

    const course = await CourseModel.findOne({
        
        _id : courseId,
        CreatorId : adminId
    },{
        title : title,
        description : description,
        imageUrl : imageUrl,
        price : price
    }
)


    res.json({
        message: 'admin updated the course successfully',
        courseId : course._id
    })
})





//--------------------------------------------------------------------------------------






//for admin to get all the courses made by them 
adminRouter.get('/course/all', adminAuthmiddleware, async  function (req, res) {


    const adminId = req.adminId;
    const { title, description, imageUrl, price , courseId } = req.body;

    //cupdating the course also by the sole adminn, not any other admin so making a check too

    const courses = await CourseModel.find({
        
        CreatorId : adminId
    }
)


    res.json({
        message: 'admin updated the course successfully',
        courses : courses
    })

})






module.exports = {
    adminRouter : adminRouter
}