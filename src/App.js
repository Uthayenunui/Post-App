import React, { Component } from 'react';
import Post from './Post';
import classes from './App.css';

class App extends Component {
  render() {
    return (   
      <div className= {classes.App}>
        <Post />
        </div>
    );
  }
}

export default App;
