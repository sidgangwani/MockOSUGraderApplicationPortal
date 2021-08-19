const application = (application=[], action) => {
    switch(action.type){
        case 'FETCH_APPLICATION':
            //console.log(action.payload);
            return action.payload;
        case 'UPDATE':
            return action.payload;
        default:
            return application;
    }
}

export default application;