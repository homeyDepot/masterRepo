import React, {Component} from "react";
import './style.css'



class Imagedisplay extends Component{
    render(){

      return(
        <div id="row" className="fbtProduct-Line">

                <div>
                  <img className="fbtProductImage" src="https://images.homedepot-static.com/productImages/c32cac93-4afc-4c1b-b872-2f2d66dac8b8/svn/antique-tobacco-linon-home-decor-console-tables-86152atob-01-kd-u-64_600.jpg"></img>
                </div>               
                <p className="plus">+</p> 

                <div>  
                  <img className="fbtProductImage" src="https://images.homedepot-static.com/productImages/443e4dbd-bfc6-4d79-a12d-2e12587a39af/svn/irobot-robot-vacuums-r960020-64_1000.jpg"></img>
                </div> 

                <p className="plus">+</p> 

                <div>
                  <img className="fbtProductImage" src="https://images.homedepot-static.com/productImages/95577b3d-b732-4cec-8998-a31db1dc4af8/svn/rayovac-aa-batteries-815-60ppj-64_1000.jpg"></img>
                </div>

                <div className="priceBlock">
                    <span className="fbtAtcPrice">
                        <span>Price For All Three:</span>
                        <br></br>
                        <br></br>
                        <span className="fbtAtcPrice__currency">$</span>
                        <span id="cart" className="fbtAtcPrice__dollar">580.97</span>
                        <span className="fbtAtcPrice__cents">00</span>
                        <br></br><br></br>
                        <button onClick={this.totalSum}  data-product-sku="xboxoneblack" className="button">Add All Three To The Cart</button>
                    </span>    
            </div>
            </div>
           
       )       
    }
}

export default Imagedisplay;