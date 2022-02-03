const express=require('express')
const router=express.Router()
const User=require('../models/user')

// @route POST users/register
// @desc  Register user 
// @access Public
router.post('/register',(req,res)=>{
    User.findOne({ email: req.body.email })
    .then(user => {
        if (user)   return res.status(400).json('Email already exists');
         else {
            const newUser=new User({
                name:req.body.name,
                email:req.body.email,
                RefUser:req.body.RefUser,
            })
                   newUser
                   .save()
                   .then(user => res.json(user))
                   .catch(err => console.log(err))
               }
           })
           .catch(err => console.log(err))
})

//@route POST /payment/:_id
//@desc  payment and Refferal
//@access public

router.post('/payment/:_id',(req,res)=>{
  var newUser
    User.findById({_id:req.params._id})
   .then(user =>{
       if(user.isPaymentMode==false){
       user.isPaymentMode=true
       newUser=user.RefUser
       user.save()
       .then(user=> console.log(user))
       .catch(err=> console.log(err))
      
       if(newUser!=null){
           User.findOne({email:newUser})
           .then(user=>{
               user.TotalEarnings+=10
               console.log(user)
               user.save()
               .then(user=> res.send(user))
               .catch(err=> console.log(err))
           })
       }
    }
   })
   .catch(err => console.log(err))
   res.json("Done")
})



module.exports=router