import React, {Component} from 'react';
import './Post.css';
import Axios from 'axios';

import Post1 from './Post2';


class post extends Component {

    constructor(){
        super()
        this.state={son:[]
            // son1:null
        }
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const per = response.data;
            this.setState({son: per})
        });
    }
     
    // PopupHandler(id,e){
    //     Axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //     .then(response => {
    //         const per = "Title:"+response.data.title+"\n"+
    //         "Body:"+response.data.body;
    //         this.setState({son1: per})    
    //     });
    // }
    

    render(){
        
        return(
            
    <div className = "Post">
       {this.state.son.map( 
           post => 
        <div key={post.id} 
        //  onClick={()=>this.PopupHandler(post.id)}
        // onClick={(<Post1 />)}
         >
    
           <div className="well">ID:{post.id}</div>
           {/* <div className="popup">{this.state.son1}</div> */}
           <Post1 /> 
        </div>   
        )}
       
   </div>  
        );
    }
}

export default post;