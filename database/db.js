 const mongoose = require('mongoose');
 console.log('db.js file is running');



 //build a schema 
 const Schema = mongoose.Schema;
 const ObjectId = Schema.Types.ObjectId


const userSchema = new  Schema({

    email : {type : String, unique : true},
    password : String ,
    firstName : String ,
    lastName : String ,

})


const adminSchema = new  Schema({

    email : {type : String , unique : true},
    password : String ,
    firstName : String ,
    lastName : String ,
    
})

const courseSchema = new  Schema({

    title : String,
    description : String,
    price : Number,
    image : String,
    creatorId :  ObjectId
})

const purchaseSchema = new  Schema({

    userId : {type : ObjectId, ref : 'user'},
    courseId : {type : ObjectId, ref : 'course'},
    
    
})



const userModel = mongoose.model('user', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);


module.exports = {
    userModel : userModel,
    adminModel : adminModel,
    courseModel : courseModel,
    purchaseModel : purchaseModel
}