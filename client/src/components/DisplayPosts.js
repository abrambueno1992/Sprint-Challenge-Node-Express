import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

// import Routes from './Routes';
const DisplayPosts = props => {
    return (
        <div>
            <h3>id: {props.post.id}</h3>
            <h4>name: {props.post.name}</h4>
            <h4>description: {props.post.description}</h4>

            <h4>completed: {props.post.completed.toString()}</h4>
            
            {/* <Link to="/posts/posts">Posts</Link> */}
            {/* <Route to="/posts/posts" component={DisplayPosts} /> */}


 {/* <Routes /> */}
            
            {/* {console.log({...props.post})} */}
        </div>
    )
}

export default DisplayPosts;