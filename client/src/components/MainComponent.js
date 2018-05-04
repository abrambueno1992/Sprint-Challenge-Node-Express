import React from 'react';
import axios from 'axios';

import Display from './Display';
// import DisplayPosts from './DisplayPosts';
// import DisplayTags from './DisplayTags';
import {Link} from 'react-router-dom';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      tags: []
    }
  }
  componentDidMount () {
    axios.get(`http://localhost:7000/api/actions`)
      .then(res => {
          console.log("the response is: ", res.data)
        let list = res.data;
        this.setState({ users: list })
      });
    //    axios.get(`http://localhost:7000/api/posts`)   
    //    .then(res => {   
    //      let posts = res.data;
    //      this.setState({ posts : posts })
    //   });
    //   axios.get(`http://localhost:7000/api/tags`)   
    //   .then(res => {   
    //     let tags = res.data;
    //     this.setState({ tags : tags })
    //  })         
  }

  render() {

    return (
      <div >
            <h1>These are the ACTIONS</h1>
        {  this.state.users.map((val, i) => {return <div key={val + i} > <Display users={val} />  </div>} )}
        {/* {this.state.users.map((val, i) => {
            console.log('these are the actions: ', val)
          return (
            <div>
                <h1>Hey</h1>
              <h1>USERS</h1>
              <h1>{val.name}</h1>
              <h2>{val.id}</h2>
              <Link to="/posts"><button>Posts</button></Link>
            </div>)
        })} */}
        {/* {  this.state.posts.map((post, i) => {return <div key={post + i} > <DisplayPosts post={post} />  </div>} )} */}
        {/* {  this.state.tags.map((tag, i) => {return <div key={tag + i} > <DisplayTags tag={tag} />  </div>} )} */}




      </div>
    );
  }
}

export default MainComponent;
