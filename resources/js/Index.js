import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, {Component} from 'react';


import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from './pages/SignUpPage'
import CreateQuizPage from './pages/CreateQuizPage'
import EditQuizPage from "./pages/EditQuizPage";
import "materialize-css/dist/css/materialize.min.css"
import './../../public/css/style.css'

class Index extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact render={() => <HomePage/>}/>
                    <Route path='/login' exact render={() => <LoginPage/>}/>
                    <Route path='/signup' exact render={() => <SignUpPage/>}/>
                    <Route path='/quiz/create' exact render={() => <CreateQuizPage/>}/>
                    <Route path='/quiz/:id/edit' exact render={()=> <EditQuizPage />} />
                </Switch>
            </Router>
        );
    }
}


export default Index;




