import { Component } from "react";

export default class Register extends Component{



   
    render(){
        return (
            <div class="container" style={{backgroundColor: "#e8e7e3"}}>
                <div class="row">
                <div class="col-6" style={{alignItems:"center"}}>
                <div className="card" style={{textAlign: "center"}}>
                <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5>Firstname : </h5> <input type="text" name="firstname" placeholder="first name"/><br/>  
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5>  Lastname: </h5>  <input type="text" name="lastname" placeholder="last name"/> <br/>  
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5> Mobile No: </h5> <input type="text" name="Mobile No" placeholder="123-3689-200"/><br/>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5>Email.id: </h5>  <input type="text" name="Email.id"placeholder="healthcall@gmail.com"/> <br/>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5> User Pass: </h5> <input type="text" name="password"placeholder="enter a password"/> <br/>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5> Conform pass: </h5> <input type="text" name="password"placeholder="enter a password"/> <br/>
  </li>
  <button type="button" class="btn btn-secondary" style={{ alignItems:"center",width:"200px"}}>Submit</button>

                </ul>
             
            </div>
            </div> 
            </div>
            </div>
        )
    }

}