import React from 'react';
import Axios from 'axios';
import './app.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test_pic : [],
      currentImage : ''
    };
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    Axios.get("http://localhost:3014/test_pic")
      .then(({ data }) => {
        this.setState({ test_pic: data });
          // this.state.test_pic.map((currentImage) => {
          //   this.setState({currentImage: test_pic.img})

          // })
    });
  }


  handleClick(arg) {
    this.setState({currentImage: arg});
  }
  


  render() {

    

    
    return (
     <div>
          <div className='main'>
               {this.state.test_pic.map((pic,i) => (
                 <div className = "small" key = {i}>
                      <ul className = 'viewer'>
                            <li  onClick={() => this.handleClick(pic.img)}><img className='productImage1' src={pic.img} alt=''/></li>
                            <li  onClick={() => this.handleClick(pic.pic2)}><img className='productImage2' src={pic.pic2} alt=''/></li>
                            <li  onClick={() => this.handleClick(pic.pic3)}><img className='productImage3' src={pic.pic3} alt=''/></li>
                            <li  onClick={() => this.handleClick(pic.pic4)}><img className='productImage4' src={pic.pic4} alt=''/></li>
                            <li  onClick={() => this.handleClick(pic.pic5)}><img className='productImage5' src={pic.pic5} alt=''/></li>
                      </ul> 
                 </div>
               ))} 

                    <div className="big">
                        <img src={this.state.currentImage} alt=''/>
                    </div>

          </div>

  
     </div>

    )
  }
 }


export default App;
