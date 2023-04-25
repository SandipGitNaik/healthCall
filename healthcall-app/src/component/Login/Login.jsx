import { Component } from "react";

import './login.css';

export default class Login extends Component{
    render(){
        return(<div className="container"  style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
            <div className="cards" >
           <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email ad̥dress</label>
    <input type="email"  placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password"  placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={'/profile'}>Login</button>
  <a className="nav link" href="/re">
    <b>Register now</b>
  </a>
  <a className="nav link" href="/forgot">
    Forgot Password
  </a>
</form>
</div>
        </div>)
    }



}