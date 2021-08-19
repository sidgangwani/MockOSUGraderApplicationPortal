import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        fontFamily:'Arial Black', 
        color:'black', 
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        fontFamily:'Arial Black', 
        color:'black', 
    },
    accordian:{
        background:'#DCDCDC', 
        margin:2,  
        borderRadius:"25px"
    },
    expandMoreIcon:{
        color: 'black'
    },
    typography:{
        fontFamily:'Arial Black', 
        color:'black',
        fontStyle:'italic'
    }
}));