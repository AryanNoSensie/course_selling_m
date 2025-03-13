const express = require('express');

const app = express();

express.json();

//for user signup process  route 
app.post('/user/signup' , function (req, res)  {
    res.json({
        message: 'User signup'
    })
});


//for user sign in process route
app.post('/user/signin', function (req, res) {
    res.json({
        message: 'User signin'
    })
})

//for user purchased courses 
app.get('/user/purchased', function (req, res) {
    res.json({
        message: 'User purchased courses'
    })
})

//for user to when they  gonna purchase the course 
app.post('/user/purchase', function (req, res) {
    res.json({
        message: 'User purchasing this  course'
    })
})

app.get('/courses', function (req, res) {
    res.json({
        message: 'all courses'
    })
})















app.listen(3000, () => {
    console.log('Server is running on port 3000');}
);
