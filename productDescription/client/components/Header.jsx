////WIP

import React from 'react';

const Header = ({ id, name, designer}) => {
  return (
    <div className="product-info" key={id}>
      <div className="product-header">
        <div className="product-title">
          <h1>{name}</h1>
          <div className="product-designer">
            <span style={{ fontWeight: 'bold' }}>{designer} </span>
            <img src="https://assets.homedepot-static.com/images/v1/caret-orange.svg"></img>
            //StarPlaceholder //q and a place holder
          </div>
        </div>
      </div>

      <span className="fa fa-star"></span>
    </div>
  );
};

export default Header;
