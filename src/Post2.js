import React, {Component} from 'react';
import Axios from 'axios';
import './Post.css';   

class post2 extends Component{
    constructor(){
        super()
        this.state={son:[],son1:null}
    }

    PopupHandler(id,e){
        Axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(response => {
            const per = "Title:"+response.data.title+"\n"+
            "Body:"+response.data.body;
            this.setState({son1: per})    
        });
    }

    render(){
        return(
            <div>
                {this.state.son.map( 
                post => 
                <div key={post.id} 
                onClick={()=>this.PopupHandler(post.id)}> 
                  <div className="popup">{this.state.son1}</div>
            </div>
            )}
            </div> 
        );
    }
}

export default post2;