 const mongoose = require('mongoose');

 //build a schema 
 const Schema = mongoose.Schema;
 const ObjectId = Schema.Types.ObjectId


const userSchema = new  Schema({

    email : {type : String, unique : true},
    password: {type: String,required: true},
    firstname : {type: String},
    lastname : {type: String}

})


const adminSchema = new  Schema({

    email: {type: String,required: true,unique: true},
    password: {type: String,required: true},
    firstname : {type: String},
    lastname : {type: String}
    
})

const courseSchema = new  Schema({

    ttitle : {type: String,unique: true},
    description : String,
    price : Number,
    imageUrl : String,
    CreatorId : ObjectId
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
    UserModel : userModel,
    AdminModel : adminModel,
    CourseModel : courseModel,
    PurchaseModel : purchaseModel
}