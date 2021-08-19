import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {GoogleLogin} from 'react-google-login';

import Input from './Input';
import useStyles from './styles'
import Icon from './Icon';
import { signin, signup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const [form, setForm] = useState(initialState);
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (isSignUp) {
            dispatch(signup(form, history));
        } else {
            dispatch(signin(form, history));
        }
    }

    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const switchMode = ()=>{
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    }

    const googleSucces= async(res)=>{
        const result=res?.profileObj;
        const token=res?.tokenId;

        try {
            dispatch({type:'AUTH', data: {result,token}});
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure=(error)=>{
        console.log(error);
        console.log("Google Sign In was unsuccessful. Try Again Later");
    }
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'Sign Up':'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                    { isSignUp && (
                        <>
                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus/>
                        <Input name="lastName" label="Last Name" handleChange={handleChange}/>
                        </>
                    )}
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignUp ? 'Sign Up' : 'Sign In' }
                    </Button>

                    <GoogleLogin
                        clientId="210343705094-qf7fc2o1oorfc8p3jh2hcu2204dk6bd0.apps.googleusercontent.com"
                        render={(renderProps)=>(
                            <Button className={classes.googleButton} 
                            color="primary" 
                            fullWidth 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled}
                            startIcon={<Icon/>} 
                            variant="contained">
                            Google Sign In
                            </Button>
                        )}
                        
                        onSuccess={googleSucces}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                    <Grid item>
                    <Button onClick={switchMode}>
                        { isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                    </Button>
                    </Grid>
                </Grid>
                </form>
            </Paper>
        </Container>
    )
}
export default Auth;