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
            console.log(per)
            this.setState({person: per})
        }
            
        );
    }

    render(){
        return(
            <ul>
            {this.state.person.map(post =>
              <li key={post.id}>{post.title}</li>
            )}
          </ul>
            
        );
    }
}



export default post;