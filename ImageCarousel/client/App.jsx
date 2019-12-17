import React from 'react';
import './App.css';
import Axios from 'axios';
import Slider from 'react-slick';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    // window.addEventListener('click', this.renderDescription)
    this.fetchProducts();
  }

  fetchProducts() {
    Axios.get('http://localhost:30013/products')
      .then(({ data }) => {
        // console.log(data);
        this.setState({ products: data });
      })
      .catch(err => console.log(err));
  }

  handleClick(skuId) {
    let test = skuId.target.id;
    const event = new CustomEvent('hello', {
      detail: test
    });
    window.dispatchEvent(event);
  }


  render() {
    // const prevArrow = <img id='prevArrow' src='https://cdn1.iconfinder.com/data/icons/mixed-17/16/icon_right_rounded-512.png' />
    const nextArrow = <img id="nextArrow" src="https://i.imgur.com/bRODSU5.png" />;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      // prevArrow,
      nextArrow
    };
    return (
      <div>
          <h2 id="customers"> Customers Who Viewed This Item Bought ... </h2>
          <hr id="line"></hr>
        
        <Slider {...settings}>
        
          {this.state.products.map(product => (
            <div className="description" id={product.skuid} key={product.skuid} onClick={this.handleClick}>
              <p>{product.skuid}</p>
              <img id="img" src={product.img} alt="abc"></img>
              <div id="name"> {product.name}</div>
              <div className="product-price">
                <span className="product-price-small">$</span>
                <span className="product-price-large">{product.price}</span>
              </div>
              {/* <div id='desc'>  {product.description} </div>  */}
              <h1>
                <button  className="addCartButton" id={product.skuid} onClick={this.sendToCart}>
                  {' '}
                  Add To Cart
                </button>
              </h1>
            </div>
          ))}
        </Slider>
      </div>
    );
        
  }
}




export default App;
