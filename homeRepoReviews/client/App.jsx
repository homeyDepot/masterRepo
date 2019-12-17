import React from 'react';
import './app.css';
import { ThumbsUp } from 'react-feather';
import { ThumbsDown } from 'react-feather';
import ReviewForm from './reviewForm.jsx';

import Axios from 'axios';

class ReviewsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewer: '',
      reviewTitle: '',
      reviewBody: '',
      stars: null,
      dateReviewed: '',
      totalStars: null,
      helpful: null,
      notHelpful: null,
      reviewsList: []
    };
  }

  componentDidMount() {
    this.fetchData();
    this.getBasicReview();
    this.handleClick();
  }

  fetchData() {
    Axios.get('http://localhost:5000/reviews')
    .then(({data}) => {
      // console.log(data)
      this.setState({reviewsList: data})
       console.log(this.state.reviewsList)
      })
      // .catch((err) => {
      //   console.log(err);
      // })
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
        totalStars: data[0].totalStars,
        helpful: data[0].helpful,
        notHelpful: data[0].not_helpful
      });
      // console.log(this.state);
    })
  }
handleClick() {
  return (
    <ReviewForm />
  )
}


  render() {
    return (
      <div>
        <h1>
          Reviews:
        </h1>
        {this.state.reviewsList.map((review, index) => (
          <div key={index}> 
      <h2>{review.reviewer}</h2>
        <h4>{review.date_reviewed}</h4>
      <h3>{review.review_title}</h3>
        <h4>Stars: {review.stars}</h4>
      <p>{review.review_body}</p>
      <ThumbsUp /> 
        <span>  {review.helpful} </span>
        <ThumbsDown /> 
  <span>  {review.not_helpful}  </span>
      </div>
        ))}
        {/* <ReviewList items={this.state.reviewsList} /> */}
        {/* <h2>{this.state.reviewer}</h2>
        <h4>{this.state.dateReviewed}</h4>
        <h3>{this.state.reviewTitle}</h3>
        <h4>Stars: {this.state.stars}</h4>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span>
        <p>{this.state.reviewBody}</p>
        <div>
          <ThumbsUp />
          <span id="helpfulRating"> {this.state.helpful} </span>
          <ThumbsDown />
          <span id="notHelpfulRating"> {this.state.notHelpful}</span>
        </div> */}
        
        <h6 onClick={this.handleClick.bind(this)}>Write a review!</h6>
      </div>
    );
  }
}

export default ReviewsComp;
