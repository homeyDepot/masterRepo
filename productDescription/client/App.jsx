import React, { Component } from 'react';
// import {Text} from 'react-native'
import Axios from 'axios';
import  './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      query: ''
    };
  }

  componentDidMount() {
    this.fetchOne();
  }
  fetchProducts() {
    Axios.get('http://localhost:3001/product').then(({ data }) => {
      // console.log(data)
      this.setState({ products: data });
    });
  }
  fetchOne() {
    // console.log('Yo yo yo', this.state.query);
    if (this.state.query === '') {
      this.setState({
        products: [],
        query: 1
      });
    }
    // console.log(this.state.query)
    Axios.get('http://localhost:3001/product/', { id: this.state.query }).then(({ data }) => {
      this.setState({ products: data });
    });
  }

  render() {
    // console.log(this.state.products);
    const products = this.state.products.map(product => {
      var reg = /\|/;
      let price = product.price.toString().split('.');

      const desArr = product.descriptions
        .split(reg)
        .map((description, i) => <li key={i}>{description}</li>);

      return (
        <div className="product-info" key={product.id}>
          <div className="product-header">
            <div className="product-title">
              <h1>{product.name}</h1>
            </div>
            <div className="product-designer">
              <span>by </span>
              <span style={{ fontWeight: 'bold' }}>{product.designer} </span>
              <img src="https://assets.homedepot-static.com/images/v1/caret-orange.svg"></img>
            </div>
          </div>
          <div className="FrankyAndJuliusDoYourShit">
            <div className="FrankyComponent">StarPlaceholder </div>
            <div className="JuliusComponent">Write a review Placeholder </div>
            <div className="FrankyComponent">Q & A placeholder </div>
          </div>

          <div className="product-minDescription">
            {desArr}
            <div className="fullDescription" href="#">
              See Full Description
            </div>
          </div>

          <div className="product-price">
            <span className="product-price-small">$</span>
            <span className="product-price-large">{price[0]}</span>
            <span className="product-price-small">{price[1]}</span>
          </div>
        </div>
      );
    });

    return <div className="App">{products}</div>;
  }
}

export default App;
