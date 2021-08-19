import React from 'react';
import {Container} from '@material-ui/core';

import Form from './components/Form/Form';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Success from './components/Success/Success';
import Failure from './components/Failure/Failure';
import FailureSignUp from './components/FailureSignUp/FailureSignUp';

const App = () => {
    return(
        <BrowserRouter>
        <Navbar/>
            <Container maxWidth="lg">
                
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/apply" exact component={Form}/>
                    <Route path="/auth" exact component={Auth}/>
                    <Route path="/success" exact component={Success}/>
                    <Route path="/failure" exact component={Failure}/>
                    <Route path="/failureSignUp" exact component={FailureSignUp}/>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;