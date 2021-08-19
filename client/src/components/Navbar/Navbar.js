import React, {useState, useEffect} from 'react';
import { AppBar, Typography, Button, Avatar, Toolbar} from '@material-ui/core';
import {Link, useHistory, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getApplication } from '../../actions/application';
import decode from 'jwt-decode';
import useStyles from './styles';

const Navbar = () =>{
    const [user, setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout=()=>{
        dispatch({type:'LOGOUT'});
        history.push('/');
        setUser(null);
    }

    useEffect(()=>{
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location])

    const handleClick=()=>{
        dispatch(getApplication());
    }
    

    return(
        <AppBar className={classes.root} >
            <div>
                <Typography component={Link} to="/"  variant="h2" className={classes.typography1}>
                CSE COURSES 2021</Typography>
            </div>
            <Toolbar className={classes.toolbar} >
                
                {user ?(
                    <div className={classes.div}>
                        <Avatar alt={user.result.name}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.typography2} variant="h6">{user.result.name}</Typography>
                        <Button component={Link} to="/" variant="contained" onClick={logout}>Log Out</Button>
                        <Button component={Link} to="/apply" variant="contained" onClick={handleClick}>Apply</Button>
                    </div>
                ):(
                    <Button component={Link} to="/auth" variant="contained" align="right"  >
                        Sign In
                    </Button>
                )

                }
            </Toolbar>
            
        </AppBar>
    );
}

export default Navbar;
