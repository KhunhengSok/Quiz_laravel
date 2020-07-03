import React, {PureComponent} from 'react';
import Navbar from "../components/navbar/Navbar";

class HomePage extends PureComponent {
    render() {
        return (
            <div>
                <Navbar/>
                <div className='container my-4'>
                    <h1>Home Page</h1>
                </div>
            </div>
        )
    }
}


export default HomePage;

