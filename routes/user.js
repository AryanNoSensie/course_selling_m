const { Router } = require('express');//getting the router form express 

const userRouter = Router();//creating the router



//for user signup process  route 
userRouter.post('/user/signup' , function (req, res)  {
    res.json({
        message: 'User signup'
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