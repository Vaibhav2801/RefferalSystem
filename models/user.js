const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        reuired: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    RefUser:{
        type:String,
        unique: true,
        trim: true,
        lowercase: true,
        default:null
    },
    isPaymentMode:{
        type:Boolean,  
         default:false
    },
    TotalEarnings:{
        type:Number,
        default:0
    }    
})
    
    const User=mongoose.model("user", UserSchema);
    module.exports=User