import React, {Component} from "react";




class Imagedisplay extends Component{
    render(){
      return(
        <div id="row" class="fbtProduct-Line">

                <div>
                  <img class="fbtProductImage" src="https://images.homedepot-static.com/productImages/aa5154d6-e176-463c-8225-cd16c0b89140/svn/chrome-moen-bathtub-shower-faucet-combos-82603-64_145.jpg"></img>
                </div>               
                <p class="plus">+</p> 

                <div>  
                  <img class="fbtProductImage" src="https://images.homedepot-static.com/productImages/012d00bf-b275-445b-84a7-d77dfe14af91/svn/chrome-moen-shower-faucets-82604-64_145.jpg"></img>
                </div> 

                <p class="plus">+</p> 

                <div>
                  <img class="fbtProductImage" src="https://images.homedepot-static.com/productImages/df8e9b7f-6013-48bc-a1b3-f99082482eff/svn/white-glacier-bay-two-piece-toilets-n2316-64_145.jpg"></img>
                </div>

                <div class="priceBlock">
                    <span class="fbtAtcPrice">
                        <span>Price For All Three:</span>
                        <br></br>
                        <br></br>
                        <span class="fbtAtcPrice__currency">$</span>
                        <span class="fbtAtcPrice__dollar">282</span>
                        <span class="fbtAtcPrice__cents">00</span>
                        <br></br><br></br>
                        <button class="button">Add All Three To The Cart</button>
                    </span>    
            </div>
            </div>
           
       )       
    }
}

export default Imagedisplay;