import React, {Component} from 'react';
import './Post.css';
import Axios from 'axios';
import Popup from 'react-popup';

class post extends Component {

    constructor(){
        super()
        // this.RequestHandler = this.RequestHandler.bind(this)
        this.state={son:[],son1:null}

    }


    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const per = response.data;
            this.setState({son: per})
        });
    }

    PopupHandler(id,e){
        Axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(response => {
            const per = "Title:"+response.data.title+"\n"+
            "Body:"+response.data.body;
            this.setState({son1: per})
            Popup.alert(per);
        });

        // console.log(post)
    //     Popup.alert(
    //         "Id:"+post.id+'\n'+
    //  "Title:"+post.title + "\n"+
    //  "Body:"+post.body);
    
        
    }



    render(){
       
        return(

        //     <div className = "Post">
        //     {this.state.person.map(post =>
        //       <div className = "well"  key={post.id}  >
        //       <div onClick = {() =>this.PopupHandle({post})}>   
        //       <b>Id:</b>{post.id}<br />
        //       </div>
        //       <b>Title:</b>{post.title}<br />
        //       <b>body:</b>{post.body}<br />
        //       </div>
        //     )}
        //   </div>

        <div className = "Post">
           {/* {this.state.son1} */}
       {this.state.son.map(

           post => <div key={post.id} 
           onClick={()=>this.PopupHandler(post.id)}>
           
           <div className="well">
           ID:{post.id}

           </div>

            </div>
           
            
        )}
     
        <div className="popup">
     <Popup />
     </div>
   </div>
   
            
        );
    }
}



// class post extends Component {
//     constructor () {
//       super()
//       this.state = {
//         username: ''
//       }
  
//       this.handleClick = this.handleClick.bind(this)
//     }
  
//     handleClick () {
//         Axios.get('https://api.github.com/users/maecapozzi')
//         .then(response => this.setState({username: response.data.name}))
//     }
  
//     render () {
//       return (
//         <div className='button__container'>
//           <button className='button' onClick={this.handleClick}>Click Me</button>
//           <p>{this.state.username}</p>
//         </div>
//       )
//     }
//   }


export default post;