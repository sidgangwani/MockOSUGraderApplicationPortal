import React,{useState,useEffect} from 'react';
import { TextField, Button, Typography, Paper, Container, Grid, Select,MenuItem,InputLabel,Input} from '@material-ui/core';
import { useSelector, useDispatch} from 'react-redux';
import { getApplication,updateApplication } from '../../actions/application';
import { useLocation,useHistory } from 'react-router';
import useStyles from './styles';
import {getCourses} from '../../actions/courses';
import FileBase from 'react-file-base64';
import Loader from '../loader/loader';
import { loading } from '../../actions/loader';

const Form = () =>{
    const user=JSON.parse(localStorage.getItem('profile'))
    const application = useSelector((state) => state.application);
    const [applicationData, setApplicationData] = useState({ name: '', email: '', major: '', phone:'', gpa:'', graduationDate:'', skills:'', courses: [], days:[],hours:'', _id:'' });
    const location = useLocation();
    const dispatch=useDispatch();
    const history=useHistory();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const loader = useSelector((state) => state.loader)

    const classes = useStyles();

    const [errors, setErrors]=useState({phone: '', gpa: ''});

    dispatch(getCourses());
    let coursesAll = useSelector((state)=>state.courses)
    let options=[];
    coursesAll.map((course)=>(
        options=[...options,'CSE '+course.number]
    ))


    useEffect(() => {
        dispatch(loading(true));
        dispatch(getApplication());
    }, [dispatch,location]) 

    useEffect(() => {
        if(application) setApplicationData(application);
    }, [application]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validateForm()){
            dispatch(loading(true));
            dispatch(updateApplication(applicationData,history));
        } 
    }

    const validateForm = () => {
        if(errors.phone.length>0 || errors.gpa.length>0)
            return false;
        else
            return true;
    }

    return(!user?
        (<div>
            <Paper>
                <Typography variant="h2" align="center" className={classes.typography2}>
                    PLEASE SIGN IN TO APPLY.
                </Typography>
            </Paper>
        </div>):
    (<div>
        {loader && <Loader/>}
        {!loader && <div className={classes.loginBox}>
            <Container component="main">
                <Paper className={classes.paper} elevation={3}>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Typography className={classes.typography} variant="h5">GRADER APPLICATION</Typography>
                        <Grid container>
                            <TextField name="name" required className={classes.textField} variant="outlined" label="Name" fullWidth value={applicationData.name || ''} onChange={(e) => setApplicationData({ ...applicationData, name: e.target.value })} />
                            <TextField disabled name="email" className={classes.textField} variant="outlined" label="Email" fullWidth value={applicationData.email || ''} onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })} />
                            <TextField name="major" required className={classes.textField} variant="outlined" label="Major" fullWidth value={applicationData.major || ''} onChange={(e) => setApplicationData({ ...applicationData, major: e.target.value })} />
                            <TextField name="phone" required className={classes.textField} variant="outlined" label="Phone" fullWidth value={applicationData.phone || ''} 
                                error={errors.phone.length>0}
                                onChange={(e) => {
                                        let check=e.target.value.length < 10 || e.target.value.length>10 ? 'Phone Number must be 10 digits long!'
                                            : '';
                                        check=!(/^\d+$/.test(e.target.value)) ? 'Phone Number must only contain digits':check;
                                        setApplicationData({ ...applicationData, phone: e.target.value });
                                        setErrors({...errors, phone:check})
                                        }} />
                                {errors.phone.length > 0 && <span className={classes.span}>{errors.phone}</span>}
                            <TextField name="gpa" required className={classes.textField} variant="outlined" label="GPA" fullWidth value={applicationData.gpa || ''} 
                                onChange={(e) => {
                                            let check=parseInt(e.target.value) < 0 || parseFloat(e.target.value) > 4 || !(/^\d*[.]?\d+$/.test(e.target.value)) ? 'GPA must be a Number out of 4!'
                                            : '';
                                            setApplicationData({ ...applicationData, gpa: e.target.value });
                                            setErrors({...errors, gpa:check})
                                        }} />
                                {errors.gpa.length > 0 && <span className={classes.span}>{errors.gpa}</span>}
                            
                            <TextField type="date" name="graduationDate" className={classes.textField}  label="Graduation Date" InputLabelProps={{ shrink: true }} variant="outlined" fullWidth value={applicationData.graduationDate || ''} onChange={(e) => setApplicationData({ ...applicationData, graduationDate: e.target.value })} />
                            <InputLabel id="Courses">Courses You Are Interested To Grade</InputLabel>
                            <Select
                                className={classes.select}
                                fullWidth
                                variant="outlined"
                                labelId="Courses"
                                id="Courses"
                                multiple
                                required
                                open={open}
                                onOpen={()=>{setOpen(true)}}
                                onClose={()=>setOpen(false)}
                                value={applicationData.courses || []}
                                onChange={(e) => {
                                    if(e.target.value[e.target.value.length-1]){
                                        setApplicationData({ ...applicationData, courses: e.target.value });
                                    }else{
                                        setApplicationData({ ...applicationData, courses:[] });
                                    } 
                                    setOpen(false);
                                }}
                                input={<Input />}
                                >
                                    <MenuItem value="">
                                        <em>CLEAR</em>
                                    </MenuItem>
                                {options.length?options.map((option) => (
                                    <MenuItem key={option} value={option}>
                                    {option}
                                    </MenuItem>
                                )):<MenuItem value="">
                                    <em>NONE</em>
                                    </MenuItem>}
                            </Select>
                            <InputLabel id="days">Days You Would Like To Work</InputLabel>
                            <Select
                                className={classes.select}
                                fullWidth
                                labelId="days"
                                id="days"
                                multiple
                                open={open2}
                                onOpen={()=>{setOpen2(true)}}
                                onClose={()=>setOpen2(false)}
                                value={applicationData.days || []}
                                onChange={(e) => {
                                    if(e.target.value[e.target.value.length-1]){
                                        setApplicationData({ ...applicationData, days: e.target.value });
                                    }else{
                                        setApplicationData({ ...applicationData, days:[] });
                                    } 
                                    setOpen2(false);
                                }}
                                input={<Input />}
                                >
                                    <MenuItem value="">
                                        <em>CLEAR</em>
                                    </MenuItem>
                                    <MenuItem value="Monday">
                                        Monday
                                    </MenuItem>
                                    <MenuItem value="Tuesday">
                                        Tuesday
                                    </MenuItem>
                                    <MenuItem value="Wednesday">
                                        Wednesday
                                    </MenuItem>
                                    <MenuItem value="Thursday">
                                        Thursday
                                    </MenuItem>
                                    <MenuItem value="Friday">
                                        Friday
                                    </MenuItem>
                            </Select>
                            <TextField name="hours" className={classes.textField} variant="outlined" label="Working Hours Per Week" fullWidth value={applicationData.hours || ''} onChange={(e) => setApplicationData({ ...applicationData, hours: e.target.value })} />
                            <div className={classes.fileBase}><FileBase type="file" multiple={false} onDone={({ base64 }) => setApplicationData({ ...applicationData, skills: base64 })}/>{applicationData.skills?'Replace Old Resume Previously Added':'Add Resume'}</div>
                            <Button className={classes.button} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>}
        </div>)
    );
}

export default Form;