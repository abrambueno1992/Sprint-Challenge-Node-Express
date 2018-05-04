import React from 'react';
import { Link, Route } from 'react-router-dom';

import PostLogic from './PostLogic';

const Display = props => {
    return (
        <div>
            {/* <h1>USERS</h1> */}

            <h3>id: {props.users.id}</h3>
            <h4>project_id: {props.users.project_id}</h4>
            <h4>notes: {props.users.notes}</h4>
            
            <h4>completed: {props.users.completed.toString()}</h4>
            
            <Link to={`/projects/${props.users.project_id}`}>Project {props.users.project_id}</Link>
            {/* <Link to="/"> </Link> */}
        </div>)
};
export default Display;