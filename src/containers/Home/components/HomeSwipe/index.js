import React, { Component } from 'react'
import "./index.less"
import ReactSwipe from 'react-swipe';
export default class HomeSwipe extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 }
  }
  render() {
    let { sliders } = this.props
    let swipeOptions = {
      continuous: true,
      startSlide: this.state.index,
      transitionEnd: (index) => {
        this.setState({ index });
      },
      auto: 3000,
    }

    return (
      <div className="home-swipe">
        {
          sliders.length > 0 ? (
            <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
              {
                sliders.map((item, index) => (
                  <div key={index}>
                    <img src={item} alt="" />
                  </div>
                ))
              }
            </ReactSwipe>
          ) : <div>正在加载</div>
        }
        {
          <div className="dots">
            {
              sliders.map((item, index) => (
                <span key={index} className={`dot ${index === this.state.index ? 'active' : ''}`}></span>
              ))
            }
          </div>
        }

      </div>
    )
  }
}