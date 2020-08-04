import axios from 'axios'


const IS_AUTHENTICATED = 'authenticated'
const TOKEN = 'token'
const USER = 'user'

class Auth {
    constructor() {
        this.authenticated = null;
        this.token = null
        this.user = null

        this.authenticated = localStorage.getItem(IS_AUTHENTICATED)
        this.user = JSON.parse( localStorage.getItem(USER))
        this.token = JSON.parse(localStorage.getItem(TOKEN))

    }


    login(credentialInfo) {
        if(credentialInfo.email && credentialInfo.password){
            return axios.post(
                'api/auth/login', {
                    email: credentialInfo.email,
                    password: credentialInfo.password
                }
            )
        }else{
            throw 'Email and Password are required'
        }
    }


 /*   login(credentialInfo) {
        if(credentialInfo.email && credentialInfo.password){
            axios.post(
                'api/auth/login', {
                    email: credentialInfo.email,
                    password: credentialInfo.password
                }
            ).then(result => {
                this.authenticated = true;
                this.token = result.data
                this.storeToken(this.token)
                this.storeAuthenticated(this.authenticated)
            }).catch(err => {
                console.log(err)
            })
        }else{
            throw 'Email and Password are required'
        }
    }*/


    logout() {
        this.authenticated = false;
        this.storeAuthenticated(this.authenticated)

        localStorage.removeItem(USER)
        localStorage.removeItem(TOKEN)
    }

    signup(credentialInfo){
        if(credentialInfo.email && credentialInfo.name && credentialInfo.password && credentialInfo.password_confirmation){
            return axios.post('api/auth/signup', {
                'email':    credentialInfo.email,
                'name':     credentialInfo.name,
                'password': credentialInfo.password,
                'password_confirmation': credentialInfo.password_confirmation
            })
        }else{
            throw 'Email, name, password, and password_confirmation are required.'
        }

    }

    isAuthenticated() {
        let authenticated = localStorage.getItem(IS_AUTHENTICATED)
        if(authenticated) {
            // console.log(authenticated)
            this.authenticated = JSON.parse(authenticated)
            return this.authenticated
        }else{
            return false
        }
    }

    me() {
        if(this.user != null) return this.user

        let user = null
        try{
            let user = JSON.parse(localStorage.getItem(USER))
            if(user == null ){
                let token = JSON.parse(localStorage.getItem(TOKEN))
                if(token == null) return Promise.reject('No token found')

                axios.get('/api/auth/me',
                    {
                        headers: {
                            "Authorization": 'Bearer ' + token.access_token
                        }
                    }
                ).then(result => {
                    this.storeUser(result.data)
                    return Promise.resolve(result)
                }).catch(err => {
                    return Promise.reject(err)
                })
            }
            return Promise.resolve(user)

        }catch(error){
            //no user found
            return Promise.reject( error )
        }


    }


    storeAuthenticated(value) {
        localStorage.setItem(IS_AUTHENTICATED, value)
    }

    storeToken(token) {
        localStorage.setItem(TOKEN, JSON.stringify(token))
    }

    storeUser(user) {
        localStorage.setItem(USER, JSON.stringify(user))
    }

}


export default new Auth();
