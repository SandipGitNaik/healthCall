import { Component } from "react";

class MenuComponents extends Component{

    render(){
        return(<div className="container">
       <div class="container" >
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Healthcall</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/testlist">Testlist</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/profile">Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="re">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Services</a>
      </li>
    </ul>
  </div>
</nav>
</div>


 
        </div>);
    }
}
export default MenuComponents;