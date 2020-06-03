import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    render() {
        return (

            <div className="jumbotron text-center">
                <h1 className="display-5 font-weight-light py-3">blog<span className="font-weight-bold">Post</span></h1>
                <p className="lead">This is simple Full Stack React App backed by Nodejs + Express and MongoDb database.</p>
                <Link to="/addPost">
                    <button className="btn btn-outline-dark my-2">Write Post</button>
                </Link>
            </div>

        )
    }
}
export default Header;