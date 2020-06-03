import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const url = "http://localhost:5000/api/posts/";

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            text: this.state.text
        };

        axios.post(url, post)
            .then(res => console.log(res.data))

        window.location = "/";
        this.setState({
            title: '',
            text: ''
        })
    }

    render() {
        return (

            <div className="container mx-auto mt-5" style={{ width: '50rem' }}>
                <div className="text-center">
                    <h4 className="font-weight-bold mb-4">Write POST</h4>
                    <Link to="/"><small className="">View All Posts</small></Link>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="title" maxLength="50" required placeholder="Add Title..." className="form-control" value={this.state.title} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <textarea name="text" placeholder="Add Body..." required className="form-control" rows="5" value={this.state.text} onChange={this.handleChange}></textarea>
                        </div>
                        <input type="submit" className="btn btn-outline-primary" />
                    </form>
                </div>

            </div>

        )
    }
}
export default AddPost;