import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./index.less"
import profile from '@/images/profile.png'
import actions from "@/store/actions/session"
import { connect } from 'react-redux'
@connect(state => state.session, actions)
export default class Profile extends Component {
  render() {
    return (
      <div className='profile'>
        <img src={profile} alt="" />
        {
          this.props.users ? <a>{this.props.user.username}</a> : <Link to="/login">登录</Link>
        }

      </div>
    )
  }
}
