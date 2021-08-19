import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from '../models/user.js';
import StudentApplication from '../models/studentApplications.js'

export const signin = async(req,res) =>{
    const {email,password} =req.body;
    try {
        dotenv.config();
        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(404).json({message:'User Does Not Exist'});
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect){
            return res.status(404).json({message:'Invalid Credentials'});
        }

        const token=jwt.sign({email:existingUser.email, id:existingUser._id},process.env.SECRET,{expiresIn:"1h"});

        res.status(200).json({result:existingUser,token})

    } catch (error) {
        res.status(500).json({message:'Something Went Wrong'});
    }
}

export const signup = async(req,res) =>{
    const {email,password,confirmPassword,firstName,lastName}=req.body; 

    try {
        dotenv.config();
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(404).json({message:'User Already Exists!! Try Again!!'});
        }

        if(password !== confirmPassword){
            return res.status(404).json({message:'Passwords Dont Match!! Try Again!!'});
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const name = firstName + ' ' + lastName;
        const result = await User.create({email, password: hashedPassword, name});
        const token=jwt.sign({email:result.email, id:result._id},process.env.SECRET,{expiresIn:"1h"});

        await StudentApplication.create({name, email:result.email,phone:'',graduationDate: '', major: '',gpa:'',courses:[],skills:'',hours:'',days:[],creator:result._id});

        res.status(200).json({result,token})

    } catch (error) {
        res.status(500).json({message:'Something Went Wrong'});
    }
}