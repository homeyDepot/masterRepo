import React, { Component } from 'react';
import './app.css';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Axios from 'axios';
import MinDescription from './components/MinDescription.jsx';
import Price from './components/Price.jsx';
import Header from './components/Header.jsx';
import Advertise from './components/Advertise.jsx'
import AddToCart from './components/AddToCart.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      query: 1001,
    };
  }
  componentDidMount() {
    window.addEventListener('hello', (e)=>{
      this.setState({query: Number(e.detail)})
      this.fetchOne(this.state.query);
    })
    this.fetchOne(this.state.query)
    
    
  }
  fetchOne(ok) {
    console.log('IamOk',ok)
    const url = 'http://localhost:3001/product/';
     console.log(url+ok)
    Axios.get(url + ok).then(({ data }) => {
      this.setState({ products: data});
    });
  }

  render() {  
    
    const item = this.state.products;

    console.log('I am item', item)

    return (
      <div className="product-min-desc">
        {item.map(product => (
          <Header
            key={product.skuid}
            id={product.skuid}
            name={product.name}
            designer={product.designer}
            price={product.price}
          />
        ))}

        {item.map(product => (
          <MinDescription key={product.skuid} descriptions={product.descriptions} />
        ))}
        <div className="fullDescription">
          FullDescription
          <br />
          <br />
          <br />
          <br />
        </div>

        {item.map(product => (
          <Price key={product.skuid} price={product.price} />
        ))}

        {item.map((product)=>(
          <Advertise price = {product.price}/>
        ))}

        <AddToCart/>
        

        
      </div>
    );
  }
}
export default App;
