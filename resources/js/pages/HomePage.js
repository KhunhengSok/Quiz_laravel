import React, {PureComponent} from 'react';
import Navbar from "../components/navbar/Navbar";
import BigButton from "../components/shared/BigButton";

class HomePage extends PureComponent {
    render() {
        return (
            <div>
                <Navbar/>
                <div className='container my-4 page-center' style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                    {/*<h1>Home page</h1>*/}
                    <BigButton text={'Create Quiz'} link={'/quiz/create'}></BigButton>
                    <BigButton text={'Login'} link={'/login'}></BigButton>
                    <BigButton text={'Register'} link={'/signup'}></BigButton>
                </div>
            </div>
        )
    }
}


export default HomePage;

