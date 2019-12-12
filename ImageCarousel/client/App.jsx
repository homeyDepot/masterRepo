import React from 'react';
import './App.css';
import Axios from 'axios';
import Slider from 'react-slick';




class App extends React.Component {
     constructor(props) {
       super(props)
       this.state = {
            products: []
       }
       
      }
    
  componentDidMount(){
    this.fetchProducts()
  }

  fetchProducts(){
    Axios.get('http://localhost:30013/products')
    .then(({data}) => {
      this.setState({products: data})
    })
    .catch(err => console.log(err))
  }

 

    
  
  render() {
    
    // const prevArrow = <img id='prevArrow' src='https://cdn1.iconfinder.com/data/icons/mixed-17/16/icon_right_rounded-512.png' />
    const nextArrow = <img id='nextArrow' src='https://cdn1.iconfinder.com/data/icons/mixed-17/16/icon_right_rounded-512.png' />
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      // prevArrow,
      nextArrow
    };
  return (
    <div> 
    <h2 id='Customers'>  Customers Who Viewed This Item Bought ... </h2>
    <Slider {...settings}>
      {this.state.products.map((product) => (
         <div id='description' key={product.id}> 
        <img id='img' src = {product.img} alt='abc'></img>
         <div id='name'> {product.name}</div>
         <div id='priceFormat'> ${product.price} </div>
         <div className="product-price">
            <span className="product-price-small">$</span>
            <span className="product-price-large">{product.price}</span>
            <span className="product-price-small">{}</span>
          </div>
           <div id='desc'>  {product.description} </div> 
       </div>
      ))}
           {/* <h5 id='cart'> Add To Cart </h5> */}
       
    </Slider>
    </div>
        );
      }
    }
    
    {/* <h1 id='Customers'>  Customers Who Viewed This Item Bought ... </h1> */}
    
    {/* {this.state.products.map(product => 
    <div id='items' key = {product.id}>
    <h1  key={product.name}> {product.name} ${product.price} {product.description} </h1>
    </div> */}
    

export default App;
