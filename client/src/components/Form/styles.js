import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
loginBox: {
    textAlign: 'center',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%, 5%)',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0 0 20px 2px rgba(0, 0, 0, 0.4)',
    marginBottom:'100px'
},
paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: 'white',
},
form: {
    width: '100%',
},
typography:{
    marginBottom: '15px', 
    textAlign:'center',
    fontFamily:'Arial Black'
},

typography2:{
    margin:'50px'
},

textField:{
    marginBottom: '15px'
},

select:{
    marginBottom:'15px',
    border: "1px groove",
    height:'55px'
},

span:{
    color:'red', 
    marginBottom:'20px'
},

fileBase:{
    width: '100%', 
    marginBottom:'30px', 
    fontWeight:'bold', 
    fontSize:'20px'
},

button:{
    marginBottom: 10, 
    width:'50%', 
    margin:'0 auto'
}

}));