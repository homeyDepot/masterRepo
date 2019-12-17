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
      reviewsList: [],
      isToggleOn: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    // this.handleClick();
  }
  fetchData() {
    Axios.get('http://localhost:5000/reviews')
    .then(({data}) => {
      // console.log(data)
      this.setState({reviewsList: data})
       //console.log(this.state.reviewsList)
      })
      // .catch((err) => {
      //   console.log(err);
      // })
  }
// handleClick(event) {
  
// }


  render() {
    console.log(this.state)
  
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
      
  {/* <span className="fa fa-star checked"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span> */}
      
     
      
      <ReviewForm  />

    </div>
  ); 



  }
}

export default ReviewsComp;
