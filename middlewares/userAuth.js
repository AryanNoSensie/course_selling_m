//getting jwt to verfiy 
const jwt = require('jsonwebtoken');
const  { JWT_USER_PASSWORD } = require('../config');



function userAuthmiddleware(req, res, next) {
    const token = req.headers.token;
    
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);

    if(decoded){
        req.userId = decoded.id;
        next();

    }else{
        res.status(401).json({
            message: "You are not authorized or signed in "
        })
    }


}
module.exports = {
    userAuthmiddleware : userAuthmiddleware
}
