import React, {Component} from "react";
import Home from "./home";
import Textbody from "./textbody";
import Imagedisplay from "./imagedisplay"

class Main extends Component{
    render(){
      return(
    
          <div>
          <Home/>
          <Imagedisplay/>
          <Textbody/>   
          </div>
           
         
      )

    }
}

export default Main;