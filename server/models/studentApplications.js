import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    graduationDate: String,
    major: String,
    gpa: String,
    courses:[String],
    skills: String,
    hours: String,
    days:[String],
    creator:String
});

const StudentApplications = mongoose.model('StudentApplications', studentSchema);

export default StudentApplications;
