import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from '../components/Layout';

import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import NotePage from './note';
import SignUp from './signup';
import SignIn from './signin';
import NewNote from './new';


const Pages=()=>{
    return(
        <Router>
            <Layout>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route exact path="/" component={Home}/>
            <Route path="/mynotes" component={MyNotes}/>
            <Route path="/favorites" component={Favorites} />
            <Route path="/note/:id" component={NotePage}/>
            <Route path="/new" component={NewNote}/>
            </Layout>
           
        </Router>
    )
}


export default Pages;
