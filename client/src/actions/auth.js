import * as api from '../api';

export const signin = (formData, history) => async(dispatch)=>{
    try {
        const {data} = await api.signIn(formData); 
        dispatch({type:'AUTH', data})

        history.push('/');
    } catch (error) {
        history.push('/failure');
    }
}

export const signup = (formData, history) => async(dispatch)=>{
    try {
        const {data} = await api.signUp(formData); 
        dispatch({type:'AUTH', data})
        history.push('/');
    } catch (error) {
        history.push('/failureSignUp');
    }
}