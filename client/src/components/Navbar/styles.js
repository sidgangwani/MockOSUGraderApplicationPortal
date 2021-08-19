import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
    root: {
        width: '100%',
        position:"static",
        background: "#353D41", 
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: '10px 50px',
    },
    toolbar:{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '600px',
    },
    typography1:{
        color:'white', 
        fontFamily:'Arial', 
        textDecoration:'none'
    },
    typography2:{
        display: 'flex', 
        alignItems: 'center'
    },
    div:{
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '500px'
    },
    
}));