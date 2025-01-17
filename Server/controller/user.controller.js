const User = require("../model/user.model.js");
const bcryptjs = require("bcryptjs");

module.exports.signup = async(req,res)=>{
    try {
        const {fullName, email, password}= req.body;
        const user = await User.findOne({email})
        // alread User ragister
        if(user){
            return res.status(400).json({message: "User already exists"})
        }
        const hashPassword = await bcryptjs.hash(password, 10)
        const createdUser= new User ({
            fullName: fullName,
            email: email,
            password: hashPassword,
        })
       await createdUser.save();
       res.status(201).json({
        message: "User created successfully",
        user: {
            _id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email,
        },
    });
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({message: "Internal server error "});
    }
}
module.exports.login = async(req, res)=>{
      try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password, user.password )
        if(!user || !isMatch){
            return res.status(400).json({message: "Invalid username or password"});
        }else{
            res.status(200).json({message: "Login successfully", user:{
                _id: user.id,
                fullName: user.fullName,
                email: user.email
            }})
        }
      } catch (error) {
          console.log("Error"+ error.message)
        res.status(500).json({message: "Internal server error "});

      }
}