class Auth {
    constructor() {
        let login_url = '/api/auth/login'

        this.authenticated = false ;
        this.itemKey = 'Quiz_Laravel'
        this.user = ''
    }

    login(){
        this.authenticated = true ;
        //set user

        localStorage.setItem(this.itemKey, this.authenticated)
        localStorage.setItem(this.itemKey, JSON.stringify(this.user))
    }

    logout(){
        this.authenticated = false ;
        //clear user

    }

    isAuthenticated(){
        return this.authenticated;
    }

    me(){
        return this.user
    }

}

export default new Auth();
