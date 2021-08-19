import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import useStyles from './styles';

const Failure = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>
                <Typography variant="h2" align="center" className={classes.typography}>
                    INCORRECT CREDENTIALS!!! TRY SIGNING IN AGAIN
                </Typography>
            </Paper>
        </div>
    )
}
export default Failure;
