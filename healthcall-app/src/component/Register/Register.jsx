import axios from "axios";
import { Component } from "react";
import './Register.css';

export default class Register extends Component{

constructor(){
    super()
    this.state={
        name:'sandip',
        user_first_name:'',
        user_last_name:''

    }
}

registerInputValues=(event)=>{
    


    

     this.setState({[event.target.id]: event.target.value})
     
}

registerSubmit=()=>{
    console.log("coming .......")

    

let json={
    "user_first_name":this.state.user_first_name,
    "user_last_name":this.state.user_last_name
    //"user_mobile":mobile,
    //"user_email":email,
    //"user_address":address,
    //"user_pincode":pincode,
    //"user_password":password
}
    axios.post("http://localhost:8080/user/save",json).then(
        

    (res)=>{

   console.log(res)
    }
    )

}

changeStaet=()=>{

    console.log("clicking");
    this.setState({name:'sandip'})
}
    render(){
        return (
            <div className="container" style={{justifyContent:"center",alignItems:"center",display:"flex"}} >
                   <div className="card">
<h3>Registration Form</h3>
<form action="home.html" name="registerform">
<label>First Name</label>
<input placeholder="Enter first Name" type="text" name='user_first_name' onChange={this.registerInputValues}/>
<label>Last Name</label>
<input placeholder="Enter Last Name" type="text"  name='user_last_name' onChange={this.registerInputValues}/>
<label>Mobile</label>
<input placeholder="Enter mobile" type="number" name='user_mobile' onChange={this.registerInputValues}/>
<label>Email</label>
<input placeholder="Enter email" type="email" name='user_email' onChange={this.registerInputValues}/>
<label>address</label>
<input placeholder="Enter your address" type="text" name='user_address' onChange={this.registerInputValues}/>
<label>pincode</label>
<input placeholder="enter your pincode" type="number" name='user_pincode' onChange={this.registerInputValues}/>
<label >password</label>
<input placeholder="enter you password" type="password" name='user_password' onChange={this.registerInputValues}/>


</form>
<button className="sub-btn"  onClick={this.registerSubmit}>Submit</button>

</div>
            </div>
        )
    }

}