import React, { Component } from 'react'
import "./index.less"
import logo from "@/images/logoMobile.png"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
export default class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false }
  }
  changeShow = () => {
    this.setState({ isShow: !this.state.isShow })
  }

  changeCategory = (e) => {
    let category = event.target.dataset.category;
    this.props.changeCategory(category);
    this.changeShow();
    this.props.refreshLessons();
  }
  render() {
    return (
      <div className='home-header'>
        <div className="home-menu">
          <img src={logo} />
          <div onClick={this.changeShow}>
            {this.state.isShow ? <i className="iconfont icon-guanbi"></i> : <i className="iconfont icon-uilist"></i>}
          </div>
        </div>
        <TransitionGroup>
          {
            this.state.isShow && (
              <CSSTransition
                timeout={500}
                classNames="fadeIn">
                <ul
                  className="menu-list"
                  onClick={(e) => this.changeCategory(e)}>
                  <li data-category="react" className={this.props.category == 'react' ? 'active' : ''}>react</li>
                  <li data-category="vue" className={this.props.category == 'vue' ? 'active' : ''}>vue</li>
                </ul>

              </CSSTransition>
            )
          }
        </TransitionGroup>
      </div>
    )
  }
}
