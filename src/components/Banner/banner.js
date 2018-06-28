import React, { Component } from 'react';
import { Carousel, WingBlank } from "antd-mobile";


export default class Banner extends Component {
  state = {
    data: ['./images/banner1.jpg', './images/banner2.jpg', './images/banner3.jpg'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['./images/banner1.jpg', './images/banner2.jpg', './images/banner3.jpg'],
      });
    }, 100);
  }
  render() {
    return (
      <div>
        <WingBlank >
          <Carousel
            style={{height:150}} autoplay infinite>
            {this.state.data.map(val => (
              <a
                key={val}
                href="/"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={val}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
      </div>
    );
  }
}