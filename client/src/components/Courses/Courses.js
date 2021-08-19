import React from 'react';
import Course from './Course/Course'
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

const Courses = () =>{
    const courses = useSelector((state)=>state.courses)
    //document.body.style.background = "linear-gradient(to right, rgba(255,0,0,1), rgba(255,0,0,0))";
    //document.body.style.backgroundColor = "#4c91ad"
    //document.body.style.background = "linear-gradient(to right, #556270, #ff6b6b)";
    //document.body.style.background = "linear-gradient(to right, #8e152a, #731528, #591424, #3f121d, #270f15, #1f121a, #191419, #151515, #1f1f20, #292a2b, #333536, #3e4141)";
    return(
        !courses.length ? <CircularProgress/> : (
            <div>
                <br></br>
                <Grid container alignItems="stretch">
                {courses.map((course)=>(
                    <Grid key={course.number} item xs={12} sm={12}>
                        <Course course={course}/>
                    </Grid>
                ))}
                </Grid>
            </div>
            
        )
    );
}

export default Courses;