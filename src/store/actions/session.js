import * as types from '../action-types'
import { reg, login } from '@/api/session';
export default {
  reg(body) {
    return function (dispatch, getState) {
      reg(body).then(payload => {
        dispatch({ type: types.SET_SESSION, payload })
        //如果注册成功，要跳到登录页登录，如果注册失败，重新填写提交
      })
    }
  },
  login(body) {
    return function (dispatch, getState) {
      login(body).then(payload => {
        dispatch({ type: types.SET_SESSION, payload })
      })
    }
  },
}