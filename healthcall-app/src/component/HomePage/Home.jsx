import { Component } from "react";
import DoctorComponet from "../Doctor/Doctor";
import Carousel from "../Carousel/Carousel";


export default class Home extends Component{
 render(){
    return(<div>
        <header>
        <menu></menu>
        <Carousel/>
       <DoctorComponet/>
        </header> 
    </div>)
 }   
}