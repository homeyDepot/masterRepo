import React, {Component} from "react";
import './style.css'



class Imagedisplay extends Component{
    render(){
      return(
        <div id="row" className="fbtProduct-Line">

                <div>
                  <img className="fbtProductImage" src="https://images.homedepot-static.com/productImages/aa5154d6-e176-463c-8225-cd16c0b89140/svn/chrome-moen-bathtub-shower-faucet-combos-82603-64_145.jpg"></img>
                </div>               
                <p className="plus">+</p> 

                <div>  
                  <img className="fbtProductImage" src="https://images.homedepot-static.com/productImages/012d00bf-b275-445b-84a7-d77dfe14af91/svn/chrome-moen-shower-faucets-82604-64_145.jpg"></img>
                </div> 

                <p className="plus">+</p> 

                <div>
                  <img className="fbtProductImage" src="https://images.homedepot-static.com/productImages/df8e9b7f-6013-48bc-a1b3-f99082482eff/svn/white-glacier-bay-two-piece-toilets-n2316-64_145.jpg"></img>
                </div>

                <div className="priceBlock">
                    <span className="fbtAtcPrice">
                        <span>Price For All Three:</span>
                        <br></br>
                        <br></br>
                        <span className="fbtAtcPrice__currency">$</span>
                        <span className="fbtAtcPrice__dollar">190</span>
                        <span className="fbtAtcPrice__cents">00</span>
                        <br></br><br></br>
                        <button className="button">Add All Three To The Cart</button>
                    </span>    
            </div>
            </div>
           
       )       
    }
}

export default Imagedisplay;