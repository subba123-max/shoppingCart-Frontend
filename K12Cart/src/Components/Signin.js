import React, { Component } from 'react';
import Home from '../Views/Home';




class Signin extends Component {
  

    state ={
        credentials:{username:'',password:''},
        token : ''
       
    }
     
  login = event => {
    fetch('http://127.0.0.1:8000/account/login/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
          // console.log(data.token);
         this.setState({token:data.token});
    }
    )
   
    .catch( error => console.error(error))
  }
 
inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }



    render(){

        if (this.state.token != ''){ ;
   window.location.href = '/'
    }
  return (
    <div className="container justify-content-center">
    <h1 className='text-center'>Login</h1>
    <div className=" text-center">
    <label>
        UserName:
        <input type="text" name="username"
        value={this.state.credentials.username}
        onChange={this.inputChanged}  style={{border:'1px solid black'}}/>
    </label>
    <br/>
    <label>
       Password:
        <input type="password" name="password" style={{border:'1px solid black'}}
        value={this.state.credentials.password}
        onChange={this.inputChanged}
        />
    </label>
    <br/>
  
    <button onClick={this.login} className="btn btn-info">Login</button>
    </div>
    {  (this.state.token)? <div>
    window.location.href ='/';
                                <h2>{this.state.credentials.username}</h2>
                                </div>:null
    
    }
    </div>
  );
}
}



export default Signin;