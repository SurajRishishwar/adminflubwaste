
const mongoose = require('mongoose');
const userquerySchema = new mongoose.Schema({
    user:{
        
        type:mongoose.Schema.Types.ObjectId,
        ref:'Registrations'
    },
    waste:{
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    pickupdate: {
        type: String,
        required: true
    },
    pickuptime: {
        type: String,
        required: true
    },
    status:{
        type:String,
        required:true
    },
    reachotp:{
        type:Number,
        required:true
    },
    verifyotp:{
        type:Number,
        required:true
    }
});

const UserQuery = mongoose.model('UserQuery', userquerySchema);

module.exports = UserQuery;