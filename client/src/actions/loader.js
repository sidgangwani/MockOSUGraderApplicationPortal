export const loading = (status) => async(dispatch)=>{
    try {
        dispatch({type:'LOADING', payload:status})
    } catch (error) {
        console.log(error.message);
    }
}