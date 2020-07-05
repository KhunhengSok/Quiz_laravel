import React, { useEffect, useState} from 'react';
import Navbar from "../components/navbar/Navbar";
import {useForm} from "react-hook-form";
import Auth from './../Auth'
import {Redirect, Link} from 'react-router-dom';


const SignUpPage = (props) => {
    const {errors, handleSubmit, register} = useForm()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})
    const [isLoggedIn, setLoggedIn] = useState(Auth.isAuthenticated())

    function onFormSubmit(data) {
        if(!loading){
            console.log(data)
            setLoading(true)
            Auth.signup(data).then( result => {
                setLoading(false)
                setError({})
            }).catch( err =>{
                setLoading(false)
                if(err.response.status == 422){
                    setError(err.response.data.errors)
                }
            })

        }else{
            console.log('loading')
        }
    }

    useEffect( ()=>{
        setLoggedIn(Auth.isAuthenticated())
    }, [])




    let location  = props.location ? props.location : '/'

    if(isLoggedIn === true){
        return <Redirect to={location} />
    }else {

        return (
            <div>
                <Navbar/>
                <div className="auth-wrapper my-5">
                    <div className="auth-inner">
                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            <h3>Sign Up</h3>

                            <div className="form-group">
                                <label>User name</label>
                                <input name='name' type="text" className="form-control" placeholder="User name"
                                       ref={register({required: "Username is required"})}/>
                                {errors.name && <span className={'error'}>{errors.name.message}</span>}
                                {error.name && <span className={'error'}>{error.name[0]}</span>}


                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input name={'email'} type="email" className="form-control" placeholder="Enter email"
                                       ref={register({required: 'Email is required'})}/>
                                {errors.email && <span className={'error'}>{errors.email.message}</span>}
                                {error.email && <span className={'error'}>{error.email[0]}</span>}
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input name='password' type="password" name='password' className="form-control"
                                       placeholder="Enter password" ref={register({required: 'Password is required'})}/>
                                {errors.password && <span className={'error'}>{errors.password.message}</span>}
                                {error.password && <span className={'error'}>{error.password[0]} </span>}

                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" name={'password_confirmation'} className="form-control"
                                       placeholder="Enter password"
                                       ref={register({required: 'Please confirm the password'})}/>
                                {errors.password_confirmation &&
                                <span className={'error'}>{errors.password_confirmation[0]}</span>}
                                {error.password_confirmation &&
                                <span className={'error'}>{error.password_confirmation[0]}</span>}
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered? <Link to={'/login'}>Log In</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default SignUpPage;
