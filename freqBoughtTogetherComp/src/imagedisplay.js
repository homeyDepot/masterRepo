import React, {Component} from "react";
import './style.css'



class Imagedisplay extends Component{
    render(){
      function totalSum(){
        let cart= [];
        return cart.push(1470);
      }

      return(
        <div id="row" className="fbtProduct-Line">

                <div>
                  <img className="fbtProductImage" src="https://images.homedepot-static.com/productImages/f103a2e8-c7e8-4db6-9069-8942d899a33e/svn/chocolate-leather-home-decorators-collection-sofas-loveseats-9948100120-e1_145.jpg"></img>
                </div>               
                <p className="plus">+</p> 

                <div>  
                  <img className="fbtProductImage" src="https://images.homedepot-static.com/productImages/f7573381-7fcf-4ce3-8dd1-87cab5233c23/svn/chestnut-home-decorators-collection-bookcases-6054850970-64_600.jpg"></img>
                </div> 

                <p className="plus">+</p> 

                <div>
                  <img className="fbtProductImage" src="https://images.homedepot-static.com/productImages/d04ae477-0fbf-4cea-8bcc-6f1cb78aa7f0/svn/walnut-home-decorators-collection-craft-storage-1860000960-64_600.jpg"></img>
                </div>

                <div className="priceBlock">
                    <span className="fbtAtcPrice">
                        <span>Price For All Three:</span>
                        <br></br>
                        <br></br>
                        <span className="fbtAtcPrice__currency">$</span>
                        <span id="cart" className="fbtAtcPrice__dollar">1470</span>
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