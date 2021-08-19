import React, {useEffect} from 'react';
import {Container,Grow, Grid} from '@material-ui/core';
import Courses from '../Courses/Courses'
import { useDispatch } from 'react-redux';
import {getCourses} from '../../actions/courses'

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCourses());
    }, [dispatch])
    return (
        <div>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <Courses/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </div>
    )
}

export default Home;
