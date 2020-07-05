import React, { useEffect, useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {useForm} from 'react-hook-form'
import Auth from './../Auth'

import Navbar from "../components/navbar/Navbar";

const LoginPage = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(Auth.isAuthenticated())
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})

    const {errors, handleSubmit, register} = useForm()


    useEffect( ()=>{
        setLoggedIn(Auth.isAuthenticated())
    }, [])


    const onFormSubmit = (data) =>{
        if(!loading){
            setLoading(true)
            Auth.login(data).then( result => {
                console.log(result)
                Auth.storeAuthenticated(true);
                Auth.storeToken(result.data.token);
                Auth.storeUser(result.data.user);

                setLoading(false)
                setError({})
                setLoggedIn(true)
            }).catch ( err => {
                console.log(err.response);
                setLoading(false)
                if( err.response.status === 401){
                    setError({
                        unauthorized: {
                            message: 'Username and Password not match'
                        }
                    })
                }else{
                    console.log(err)
                }
            })
        }else{
            console.log('Loading')
        }
    }




    let location  = props.location ? props.location : '/'

    if (isLoggedIn === true ) {
        return <Redirect to={location}/>
    } else {
        return (
            <div>
                <Navbar/>

                <div className="auth-wrapper my-5">
                    <div className="auth-inner">
                        <h3>Sign In</h3>

                        <form className={'form'} onSubmit={handleSubmit(onFormSubmit)}>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name={'email'} className="form-control" placeholder="Enter email"
                                       ref={register({required: 'Email is required'})}/>
                                {errors.email && <span className={'error'}>{errors.email.message}</span>}
                                {error.email && <span className={'error'}>{error.email.message}</span>}
                                {error.unauthorized && <span className={'error'}>{error.unauthorized.message}</span>}

                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name={'password'} className="form-control" placeholder="Enter password"
                                       ref={register({required: 'Password is required'})}/>
                                {errors.password && <span className={'error'}>{errors.password.message}</span>}
                                {error.password && <span className={'error'}>{error.password.message}</span>}

                            </div>



                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input name='remember_me' type="checkbox" className="custom-control-input" id="customCheck1" ref={register}/>
                                    <label className="custom-control-label" htmlFor="customCheck1" >Remember me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Log in</button>

                        </form>


                        <p className="forgot-password text-right">
                            <Link to={'/forget_password'}>Forget password</Link>?
                        </p>


                    </div>
                </div>

            </div>
        )
    }

}


export default LoginPage;
