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
      query: '',
      water:''
    };
  }
  componentDidMount() {
    window.addEventListener('click', this.greet, this.experiment)
    this.fetchOne();
  }
<<<<<<< HEAD
=======
  greet(){
    console.log('What is ',this)
  }

  experiment(){
    

    console.log('This is the **',window.water)
    console.log('The link was clicked.');
  }

>>>>>>> d0fe344ddddaf34803afb8489b99feb2ff257cd6
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
  handleScroll() {
    console.log('yo yo');
    console.log(window.onclick);
  }
  render() {
<<<<<<< HEAD
    // console.log(window)
=======
    console.log("from prod",window.water)
>>>>>>> d0fe344ddddaf34803afb8489b99feb2ff257cd6
    const item = this.state.products;

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
