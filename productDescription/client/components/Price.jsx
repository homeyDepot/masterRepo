import React from 'react'

const Price = ({price}) =>{
	// console.log(props)
	let priceComp = price.toString().split('.');
	return (
		<div className="product-price">
        <span className="product-price-small">$</span>
        <span className="product-price-large">{priceComp[0]}</span>
        <span className="product-price-small">{priceComp[1]}</span>
      </div>
	)
}

export default Price
