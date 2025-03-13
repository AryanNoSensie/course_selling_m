const { Router } = require('express');

const courseRouter = Router();



//for user to when they  gonna purchase the course 
courseRouter.post('/purchase', function (req, res) {
    res.json({
        message: 'User purchasing this  course'
    })
})
//preview all the courses available on platform 
courseRouter.get('/preview', function (req, res) {
    res.json({
        message: 'all courses'
    })
})

module.exports = {
    courseRouter: courseRouter
}