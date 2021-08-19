import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import useStyles from './styles';

const FailureSignUp = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>
                <Typography variant="h2" align="center" className={classes.typography}>
                    EMAIL ALREADY TAKEN OR PASSWORD AND REPEAT PASSWORD DON'T MATCH
                </Typography>
            </Paper>
        </div>
    )
}
export default FailureSignUp;
