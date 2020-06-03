import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import ViewPost from './components/ViewPost';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={Posts} />
      <Route exact path="/addPost" component={AddPost} />
      <Route exact path="/viewPost/:id" component={ViewPost} />
      <Route exact path="/editPost/:id" component={EditPost} />
    </Router>
  );
}

export default App;
