import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ViewPost from './ViewPost';
// import EditPost from './EditPost'

const url = "http://localhost:5000/api/posts/";

const PostItems = (props) => {
    const post = props.post;

    return (<div className="text-left my-5">
        <p className="font-weight-bold">
            <Link to={"/viewPost/" + post._id} className="text-dark">{post.title}</Link>
        </p>
        <small>{post.createdAt.slice(0, 10)}</small>
        <Link onClick={props.deletePost.bind(this, post._id)} className="badge badge-dark float-right">
            Delete
        </Link>
        <Link to={"/editPost/" + post._id} className="badge badge-dark float-right mr-2">
            Edit
        </Link>
        <p className="text-left">{post.text.slice(0, 150) + '...'}</p>
        <hr />
    </div>
    )

}

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get(url)
            .then(res => this.setState({ posts: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (

            <div className="container mx-auto" style={{ width: '50rem' }}>
                <div className="text-center">
                    <h4 className="font-weight-normal mb-4">ALL POSTS</h4>
                    {this.state.posts.map((post) =>
                        <PostItems key={post._id} post={post} deletePost={this.deletePost} />
                    )}

                </div>

            </div>

        )
    }

    deletePost = (id) => {
        axios.delete(`${url}${id}`)
            .then(res => {
                this.setState({
                    posts: this.state.posts.filter(post => post._id !== id)
                })
            });
    }
}
export default Posts;