import React from 'react';

const Advertise = ({ price }) => {
  if (price < 100) {
    var shippingCharge = '$ 19.95';
  } else {
    shippingCharge = 'Free'
  }

  let protectionPlanCharge = Math.floor(price * 0.2);

  const creditCard = (
    <div key = {Math.random()}className="applyCard">
      <div className="credit-card">Placeholder</div>
      <div>
        <strong>
          Save up to $100<span>♢</span>
        </strong>
        <span>on your Qualifying purchase</span>
        <br />
        <a href="https://localhost:3000"> Apply for a Home Depot Credit Card </a>
      </div>
      <br />
      <br />
    </div>
  );

  const protectionPlan = (
    <label className="container">
      <input type="checkbox" defaultChecked />
      <span className="checkmark"></span>
      <span className="protectionPlan">
        LET'S <span> PROTECT </span>THIS
        <br />
        <span>Add a 2-year Home Depot Protection Plan for ${protectionPlanCharge}.00</span>
        <br />
        <a href="https://localhost:3000">Learn More</a>
        <br />
        <br />
      </span>
    </label>
  );

  return (
    <div key={price}>
    <div>Shipping Charge for this product is {shippingCharge}<br/></div>
      <div>{creditCard}</div>
      
      <div>{protectionPlan}</div>
    </div>
  );
};

export default Advertise;
