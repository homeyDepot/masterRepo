import React from 'react';
import Axios from 'axios';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test_pic: [],
      currentImage: '',
      query: 1001
    };
  }

  componentDidMount() {
    window.addEventListener('hello', e => {
      this.setState({ query: Number(e.detail) });
      this.getImages(this.state.query);
    });
    this.getImages(this.state.query);
  }

  getImages(ok) {
    const url = 'http://localhost:3014/test_pic/';
    Axios.get(url + ok).then(({ data }) => {
      this.setState({
        test_pic: data[0],
        currentImage: data[0].img
      });
    });
  }

  handleClick(arg) {
    this.setState({ currentImage: arg });
  }

  render() {
    const pic = this.state.test_pic;
    return (
      <div className="main">
        <div className="small">
          
            <div onClick={() => this.handleClick(pic.img)}>
              <img  src={pic.img} alt="" />
            </div>
            <div onClick={() => this.handleClick(pic.pic2)}>
              <img  src={pic.pic2} alt="" />
            </div>
            <div onClick={() => this.handleClick(pic.pic3)}>
              <img src={pic.pic3} alt="" />
            </div>
            <div onClick={() => this.handleClick(pic.pic4)}>
              <img  src={pic.pic4} alt="" />
            </div>
            <div onClick={() => this.handleClick(pic.pic5)}>
              <img  src={pic.pic5} alt="" />
            </div>
          
        </div>

        <div className="big">
          <img src={this.state.currentImage} alt="" />
        </div>
      </div>
    );
  }
}

export default App;
