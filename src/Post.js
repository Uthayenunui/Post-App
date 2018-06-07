import React, {Component} from 'react';
import './Post.css';
import Axios from 'axios';

class post extends Component {

    constructor(){
        super()
        this.RequestHandler = this.RequestHandler.bind(this)
    }


    RequestHandler(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => console.log(response))
    }

    render(){
        return(
            <div>
                <button onClick = {this.RequestHandler}
                className="btn">Post Request</button>
            </div>
            
        );
    }
}



export default post;