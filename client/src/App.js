import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';


// import Routes from './components/Routes';
// import Display from './components/Display';
// import DisplayPosts from './components/DisplayPosts';
// import DisplayTags from './components/DisplayTags';
import MainComponent from './components/MainComponent';
import PostLogic from './components/PostLogic';

const App = props => {
  return (
    <div>
      {/* <MainComponent /> */}
      {/* <Routes /> */}
      <nav>
        {/* <Link to="/users">Users</Link>
        <Link to="/users/posts">Posts</Link>
        <Link to="users/tags">Tags </Link> */}
        </nav>
      <Route exact path="/" component={MainComponent} />
        
      {/* <Route to="http://localhost:3000/users/posts" component={DisplayPosts} /> */}
      <Route exact path="/projects" component={PostLogic} />
      {/* <Route to="http://localhost:3000/users/tags" component={DisplayTags} /> */}
    </div>
  )
}

export default App;
