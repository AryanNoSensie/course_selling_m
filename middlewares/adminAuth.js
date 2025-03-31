//getting jwt to verfiy 
const jwt = require('jsonwebtoken');
const  { JWT_ADMIN_PASSWORD } = require('../config');



function adminAuthmiddleware(req, res, next) {

    const token  = req.headers.token; //bringing the token from headers 
   
    //using jwt to decode the token
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);
   
    if(decoded){
       req.adminId = decoded.id; //storing the id of admin
       next()
    }
    else{
       res.status(403).json({
        message : "you are not signed in there is error whil signing you in  "
        })
       }
   
   }
   
   
   module.exports = {
      adminAuthmiddleware: adminAuthmiddleware
    }