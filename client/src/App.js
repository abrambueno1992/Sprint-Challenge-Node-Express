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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [],
      project: []
    }
  }
  componentDidMount = () => {
    axios.get(`http://localhost:7000/api/actions`)
      .then(res => {
        let act = res.data;
        console.log('response.data of actions: ', res.data)
        this.setState({ actions: act })
      });
    axios.get(`http://localhost:7000/api/projects`)
      .then(res => {
        let proj = res.data;
        console.log('response.data of project: ', res.data)
        this.setState({ project: proj })
      });
  }
  render() {
    return (
      <div>

        <Route exact path="/" component={MainComponent} />
        {this.state.project.map((action, i) => 
        // {return console.log('the project id is :', action)}
        {
          return (
            <div> 
              <Route exact path={`/projects/${action.id}`} component={PostLogic} />
              {console.log("the project id is: ", action.id)}
            </div>)
        }
      )
        }
        {/* <Route to="http://localhost:3000/users/posts" component={DisplayPosts} /> */}
        {/* <Route exact path="/projects" component={PostLogic} /> */}
        {/* <Route to="http://localhost:3000/users/tags" component={DisplayTags} /> */}
      </div>
    )
  }

}

export default App;
