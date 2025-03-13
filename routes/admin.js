const { Router } = require('express');//getting the router form express 

const adminRouter = Router();//creating the router



//for user signup process  route 
adminRouter.post('/user/signup' , function (req, res)  {
    res.json({
        message: 'User signup'
    })
});


//for user sign in process route
adminRouter.post('/user/signin', function (req, res) {
    res.json({
        message: 'User signin'
    })
})

//for user purchased courses 
adminRouter.get('/user/purchased', function (req, res) {
    res.json({
        message: 'User purchased courses'
    })
})

module.exports = {
    adminRouter : adminRouter
}