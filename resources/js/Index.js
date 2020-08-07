import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, {Component} from 'react';

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from './pages/SignUpPage'
import CreateQuizPage from './pages/CreateQuizPage'
import EditQuizPage from "./pages/EditQuizPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import './../../public/css/style.css'
// import './../../public/css/apwp.css'
import NotFoundPage from "./pages/NotFoundPage";
import UserProfilePage from "./pages/UserProfilePage";

class Index extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact render={() => <HomePage/>}/>
                    <Route path='/login' exact render={() => <LoginPage/>}/>
                    <Route path='/signup' exact render={() => <SignUpPage/>}/>
                    {/*<Route path='/quiz/create' exact render={() => <CreateQuizPage/>}/>*/}
                    <Route path='/quiz/create' exact render={() => <EditQuizPage/>}/>
                    {/*<Route path='/quiz/:id' exact render={()=> <EditQuizPage />} />*/}
                    <Route path='/quiz/:id/edit' exact render={()=> <EditQuizPage />} />
                    <Route path='/forget_password' exact render={ ()=> <ForgetPasswordPage />} />
                    <Route path='/profile' exact render={ ()=> <UserProfilePage /> } />
                    <Route path='*' render={ ()=> <NotFoundPage /> } />

                </Switch>
            </Router>
        );
    }
}


export default Index;




