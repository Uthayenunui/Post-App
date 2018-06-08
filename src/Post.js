import React, {Component} from 'react';
import './Post.css';
import Axios from 'axios';

class post extends Component {

    constructor(){
        super()
        // this.RequestHandler = this.RequestHandler.bind(this)
        this.state={person:[]}

    }


    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const per = response.data;
            this.setState({person: per})
        });
    }

    render(){
        return(
            <div className = "Post">
            {this.state.person.map(post =>
              <div> key={post.id}><br />
              <b>Id:</b>{post.id}<br />
              <b>Title:</b>{post.title}<br />
              <b>body:</b>{post.body}<br /></div>
            )}
          </div>
            
        );
    }
}



export default post;