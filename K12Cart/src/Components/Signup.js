import React, { Component } from 'react';



class Signin extends Component {
  

    state ={
        credentials:{username:'',password:''}
       
    }
     
  register = event => {
    fetch('http://127.0.0.1:8000/account/register/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
          console.log(data.username);
        // this.setState({this.state.token:data.token})
        if (this.state.credentials){
            window.location.href = '/signin'
        }
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
       
  return (
    <div className="container justify-content-center ">
    <h1 className='text-center'>Sign Up</h1>
    <div className=" text-center">
    <label>
        UserName:
        <input type="text" name="username"
        value={this.state.credentials.username}
        onChange={this.inputChanged}  style={{border:'1px solid black'}}/>
    </label>
    <br/>
    <label>
       Email:
        <input type="password" name="password" style={{border:'1px solid black'}}
        value={this.state.credentials.email}
        onChange={this.inputChanged}
        />
    </label><br></br>
    <label>
       Password:
        <input type="password" name="password" style={{border:'1px solid black'}}
        value={this.state.credentials.password}
        onChange={this.inputChanged}
        />
    </label>
    <br/>
  
    <button onClick={this.register} className="btn btn-info">register</button>
    </div>
    </div>
  );
}
}



export default Signin;