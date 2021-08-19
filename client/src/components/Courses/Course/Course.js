import React from 'react';
import {Accordion, Typography, AccordionDetails,  AccordionSummary} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; 
import useStyles from './styles';

const Course = ({course}) =>{
    
    //MATERIAL UI ACCORDATION TEMPLATE USED AS DESIGN TEMPLATE
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const classes = useStyles();
    //#A31F1F red
    //#FFF6F4 white
    return(
        
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.accordian}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandMoreIcon} />}
                aria-controls="panel content"
                id="panel1"
                >
                <Typography className={classes.heading}>CSE {course.number}</Typography>
                <Typography className={classes.secondaryHeading}>{course.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.typography}>
                    <span>CREDITS:</span> {course.credits}<br></br>
                    <span>PREQUISITES:</span> {course.prequisites}<br></br>
                    <span>EXCLUSIONS:</span> {course.exclusions}
                </Typography>
                </AccordionDetails>
            </Accordion>
            <br></br>
        </div>
        
    );
}

export default Course;