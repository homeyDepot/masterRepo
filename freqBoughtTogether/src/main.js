import React, {Component} from "react";
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./home";
import Textbody from "./textbody";
import Imagedisplay from "./imagedisplay"

class Main extends Component{
    render(){
      return(
        <BrowserRouter>
          <div>
          <Home/>
          <Imagedisplay/>
          <Textbody/>
        
          <div className="content">
            <Route path="/" Component={Home}/>
            <Route path="/imagedisplay" Component={Imagedisplay}/>
            <Route path="/textbody" Component={Textbody}/>
          </div>
          </div> 
        </BrowserRouter>  
      )

    }
}

export default Main;