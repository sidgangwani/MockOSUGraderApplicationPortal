import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import useStyles from './styles';

const Success = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>
                <Typography variant="h2" align="center" className={classes.typography}>
                    Thank You For Applying!! NOW SIT BACK AND RELAX!!!
                </Typography>
            </Paper>
        </div>
    )
}
export default Success;
