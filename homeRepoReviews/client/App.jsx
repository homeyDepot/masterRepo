import React from 'react';
import './app.css';
import { ThumbsUp } from 'react-feather';
import { ThumbsDown } from 'react-feather';

const Axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewer: '',
      reviewTitle: '',
      reviewBody: '',
      stars: null,
      dateReviewed: '',
      valueRating: null,
      energyRating: null, 
      qualityRating: null,
      helpful: null,
      notHelpful: null
    };
  }

  componentDidMount() {
    this.fetchData();
    this.getBasicReview();
  }

  fetchData() {
    Axios.get('http://localhost:5000/reviews')
    .then(({data}) => {
      console.log(data)
    })
  }

  getBasicReview() {
    Axios.get('http://localhost:5000/reviews')
    .then(({data}) => {
      this.setState({
        reviewer: data[0].reviewer,
        reviewTitle: data[0].review_title,
        reviewBody: data[0].review_body,
        stars: data[0].stars,
        dateReviewed: data[0].date_reviewed,
        valueRating: data[0].value_rating,
        energyRating: data[0].energy_efficiency_rating,
        qualityRating: data[0].quality_rating,
        helpful: data[0].helpful,
        notHelpful: data[0].not_helpful
      });
      console.log(this.state);
    })
  }

  render() {
    return (
      <div>
        <h1>
          Hello, world! It&apos;s Home Repo's Reviews
          <span role="img" aria-label="100 Emoji and face with sunglasses emoji">
            💯😎
          </span>
        </h1>
        <h2>{this.state.reviewer}</h2>
        <h4>{this.state.dateReviewed}</h4>
        <h3>{this.state.reviewTitle}</h3>
        <h4>Stars: {this.state.stars}</h4>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
        <p>{this.state.reviewBody}</p>
        <h5>Value: {this.state.valueRating}</h5>
        <h5>Energy-Efficiency: {this.state.energyRating}</h5>
        <h5>Quality: {this.state.qualityRating}</h5>
        <div>
          <ThumbsUp />
          <span id="helpfulRating"> {this.state.helpful} </span>
          <ThumbsDown />
          <span id="notHelpfulRating"> {this.state.notHelpful}</span>
        </div>
        

      </div>
    );
  }
}

export default App;
