import React, {Component} from "react";

class Textbody extends Component{
    
    render(){
      return(
            <div class="fbtProductLines">              
                <br></br>
                <div class="fbtProductLine">
                  <div class="checkbox-btn">
                    <input onClick="checked" class="checkbox-btn__input" type="checkbox" value="value-1" id="fbt_300213962" name="fbt_300213962" checked="checked" data-itemid="300213962" data-index="0" data-component="product pod"></input>
                    
                    
                    <label class="checkbox-btn_label fbtProdDescription" for="fbt_300213962">
                    <span class="fbtProductMsg fbtOpacitizer">
                      <span class="u__bold">This Item:</span>
                      "Adler Single-Handle 4-Spray Tub and Shower Faucet With Valve in Chrome(Valve Included)"
                      <span class="u__bold fbt__price">$94.00</span>
                    </span>
                    
                    </label>
                  </div>
                </div>
                <div class="fbtProductLine">
                  <div class="checkbox-btn">
                    <input onClick="checked" class="checkbox-btn__input" type="checkbox" value="value-1" id="fbt_300213962" name="fbt_300213962" data-itemid="300213962" data-index="0" data-component="product pod"></input>
                    
                    
                    <label class="checkbox-btn_label fbtProdDescription" for="fbt_300213962">
                    <span class="fbtProductMsg fbtOpacitizer">
                      <span class="u__bold">Suggested Item:</span>
                      "Adler Single-Handle 4-Spray Tub and Shower Faucet With Valve in Chrome(Valve Included)"
                      <span class="u__bold fbt__price">$44.00</span>
                    </span>
                    </label>
                  </div>
                </div>
                <div class="fbtProductLine">
                  <div class="checkbox-btn">
                    <input placeholder= "52" onClick="checked" class="checkbox-btn__input" type="checkbox" value="value-1" id="fbt_300213962" name="fbt_300213962" checked="checked" data-itemid="300213962" data-index="0" data-component="product pod"></input>
                    
                    
                    <label class="checkbox-btn_label fbtProdDescription" for="fbt_300213962">
                    <span class="fbtProductMsg fbtOpacitizer">
                      <span class="u__bold">Suggested Item:</span>
                      "Adler Single-Handle 4-Spray Tub and Shower Faucet With Valve in Chrome(Valve Included)"
                      <span id="item2" class="u__bold fbt__price"></span>$52
                    </span>
                    </label>
                  </div>
                </div>                
              </div>
            

                
                
            
           
      )

    }
}

export default Textbody;