const { Router } = require('express');//getting the router form express 

const adminRouter = Router();//creating the router



//for user signup process  route 
adminRouter.post('/signup' , function (req, res)  {
    res.json({
        message: 'User signup'
    })
});


//for user sign in process route
adminRouter.post('/signin', function (req, res) {
    res.json({
        message: 'User signin'
    })
})

//for admin to create a course 
adminRouter.post('/course', function (req, res) {
    res.json({
        message: 'admin purchased courses'
    })
})

//for admin to make some changes in the code 
adminRouter.post('/course', function (req, res) {
    res.json({
        message: 'admin purchased courses'
    })
})
//for admin to get all the courses made by them 
adminRouter.get('/course/all', function (req, res) {
    res.json({
        message: 'admin purchased courses'
    })
})
module.exports = {
    adminRouter : adminRouter
}