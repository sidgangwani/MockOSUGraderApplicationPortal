import StudentApplications from "../models/studentApplications.js";
import jwt, { decode } from 'jsonwebtoken';
import mongoose from 'mongoose';

export const getApplication =  async (req,res)=>{
    try {
        const studentApplications = await StudentApplications.findOne({"creator" : String(req.userId)});
        if(!studentApplications){
            const token =req.headers.authorization.split(" ")[1];
            const isCustomAuth = token.length < 500;
            let ret;
            if(!isCustomAuth){
                let decodedData = jwt.decode(token);
                const email=decodedData?.email;
                const id=decodedData?.sub;
                ret=await StudentApplications.create({name:'', email ,phone:'',graduationDate: '', major: '',gpa:'',courses:[],skills:'',hours:'',days:[],creator:id});
            }
            return res.status(200).json(ret);
        }
        res.status(200).json(studentApplications);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const updateApplication = async (req, res) => {
    const { name,email,major,phone,gpa,graduationDate,skills,courses,days,hours,_id } = req.body;

    const id=mongoose.Types.ObjectId(_id);
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No application in records');

    const updatedPost = { name,email,major,phone,gpa,graduationDate,skills,courses,days,hours, _id: id };

    await StudentApplications.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}