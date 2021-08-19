import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import applicationsRoutes from './routes/applications.js';
import coursesRoutes from './routes/courses.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.get('/',(req,res)=>{
      res.send('Hello to Grader Application API');
})

app.use('/courses',coursesRoutes);
app.use('/user', userRoutes);
app.use('/apply', applicationsRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => 
      app.listen(PORT, () => console.log('Server Running on Port')))
.catch((error) => 
      console.log(error.message));
mongoose.set('useFindAndModify', false);

