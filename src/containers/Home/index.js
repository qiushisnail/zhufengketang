import React, { Component, Fragment } from 'react'
import HomeHeader from './components/HomeHeader';
import HomeSwipe from './components/HomeSwipe';
import HomeLessons from './components/HomeLessons';
import { connect } from 'react-redux'
import actions from '@/store/actions/home'
import "./index.less"
import { loadMore, downRefresh } from "@/utils"
@connect(
  state => state.home,
  actions
)
export default class Home extends Component {
  componentDidMount() {
    this.props.getSliders();
    this.props.getLessons();
    loadMore(this.mainContent, this.props.getLessons)
    downRefresh(this.mainContent, this.props.refreshLessons)
  }
  render() {
    let { category, changeCategory, sliders, lessons, refreshLessons } = this.props;
    return (
      <Fragment>
        <HomeHeader
          category={category}
          changeCategory={changeCategory}
          refreshLessons={refreshLessons}
        >
        </HomeHeader>
        <div className="main-content" ref={ref => this.mainContent = ref}>
          <HomeSwipe sliders={sliders}></HomeSwipe>
          {<HomeLessons lessons={lessons}></HomeLessons>}
        </div>
      </Fragment>
    )
  }
}
