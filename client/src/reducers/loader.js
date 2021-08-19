const loaderReducer = (loader=false, action) =>{
    switch (action.type) {
        case 'LOADING':
            return action.payload;
        default:
            return loader;
    }
}

export default loaderReducer;