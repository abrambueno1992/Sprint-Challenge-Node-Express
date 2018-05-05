import React from 'react';
import DisplayPosts from './DisplayPosts';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';


class PostLogic extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            posts: []
        }
    }
    componentDidMount = () => {
        axios.get(`http://localhost:7000/api/projects`)   
        .then(res => {   
          let posts = res.data;
          console.log('response.data of project: ',res.data)
          this.setState({ posts : posts })
       });
    }
    render() {
        return (
            <div>
                            <h1>These are the PROJECTS</h1>
               {this.state.posts.map((post, i) => {return <div key={post + i} > <DisplayPosts post={post} /> <Link to="/">Back to Actions</Link> </div>} )} 
            </div>
        )

    }
}

export default PostLogic;