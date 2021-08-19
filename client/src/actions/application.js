import * as api from '../api';
import { loading } from './loader';

export const getApplication = () => async(dispatch)=>{
    try {
        const {data} = await api.getApplication();
        dispatch(loading(false));
        dispatch({type:'FETCH_APPLICATION', payload:data})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateApplication = (application, history) => async (dispatch) => {
    try {
        const { data } = await api.updateApplication(application);
        dispatch(loading(false));
        history.push('/success');        
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};