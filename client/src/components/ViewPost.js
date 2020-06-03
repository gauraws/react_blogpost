import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const url = 'http://localhost:5000/api/posts/';

class ViewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }
    }

    componentDidMount() {
        axios.get(`${url}` + this.props.match.params.id)
            .then(res => (
                this.setState({
                    title: res.data.title,
                    text: res.data.text
                }, () => console.log(this.state))
            )).catch(err => console.log(err))
    }

    render() {
        return (
            <React.Fragment>
                <div className="text-center text-white" style={{ backgroundColor: '#6c757d' }}>
                    <h2 className="py-3">Read Post</h2>
                </div>
                <div className="container mx-auto mt-5 text-center" style={{ width: '50rem' }}>
                    <Link to="/"><small className="">View All Posts</small></Link>
                    <p></p>
                    <h1>{this.state.title}</h1>
                    <br />
                    <p className="text-left">{this.state.text}</p>
                </div>

            </React.Fragment >
        )
    }
}

export default ViewPost;