import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Axios from 'axios';

// import FullDescription from './components/FullDescription'
import './app.css';
import MinDescription from './components/MinDescription.jsx';

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

  fetchOne() {
    // console.log('Yo yo yo', this.state.query);
    let id = this.state.query;
    if (!id) {
      id = 1;
    }
    const url = 'http://localhost:3001/product/';
    // console.log(url+id)
    Axios.get(url + id).then(({ data }) => {
      this.setState({ products: data, query: id });
    });
  }

  handleScroll(){
    console.log('yo yo')
  }

  render() {
    const item = this.state.products;

    const fullDescription = () => {
      return  item.map((descriptions, i) => {
        return descriptions.descriptions.split('|').map((el, i) => {
          document.getElementById('')
          return <li key = {i}>{el}</li>;
        });
      });
    };

    const products = item.map(product => {
      let price = product.price.toString().split('.');

      const descriptionArr = product.descriptions.split('|');

      let minDescription = descriptionArr.filter((description, i) => {
        if (i < 3) {
          return description;
        }
      });

      let minDesc = minDescription.map((el, i) => <li key={i}>{el}</li>);

      return (
        <div className="product-info" key={product.id}>
          <div className="product-header">
            <div className="product-title">
              <h1>{product.name}</h1>
            </div>
            <div className="product-designer">
              <span style={{ fontWeight: 'bold' }}>{product.designer} </span>
              <img src="https://assets.homedepot-static.com/images/v1/caret-orange.svg"></img>
            </div>
          </div>
          <div className="FrankyAndJuliusDoYourShit">
            <div className="FrankyComponent">StarPlaceholder </div>
            <div className="JuliusComponent">Write a review Placeholder </div>
            <div className="FrankyComponent">Q & A placeholder </div>
          </div>
          <div id = 'experiment'>experiment</div>

          <div className="product-minDescription">
            {minDesc}

            <Link to={`/fullDescription`} className="fullDescription">
              <div>See Full Description</div>
            </Link>
          </div>

          <div className="product-price">
            <span className="product-price-small">$</span>
            <span className="product-price-large">{price[0]}</span>
            <span className="product-price-small">{price[1]}</span>
          </div>
        </div>
      );
    });
    

    return (
      <Router>
        <div className="product-min-desc">{products}</div>
        
        
        <Route path="/fullDescription" component={fullDescription}  />
      </Router>
    );
  }
}

export default App;
