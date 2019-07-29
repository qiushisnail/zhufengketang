import * as types from '../action-types'
import { getSliders, getLessons } from '@/api/home';
export default {
  changeCategory(category) {
    return { type: types.CHANGE_CATEGORY, payload: category }
  },
  getSliders() {
    return function (dispatch, getState) {
      getSliders().then(sliders => {
        dispatch({ type: types.SET_HOME_SLIDERS, payload: sliders })
      })
    }

  },
  getLessons() {
    return function (dispatch, getState) {
      let { category, lessons: { offset, limit, hasMore, loading } } = getState().home;
      if (hasMore && !loading) { // 在上一次加载完毕才进行加载
        dispatch({ type: types.SET_HOME_LSEEONS_LOADING, payload: true })
        getLessons(category, offset, limit).then(lessons => {
          dispatch({ type: types.SET_HOME_LESSONS, payload: lessons })
        })
      }

    }

  },
  refreshLessons() {
    return function (dispatch, getState) {
      let { category, lessons: { limit, hasMore, loading } } = getState().home;

      if (!loading) { // 在上一次加载完毕才进行加载
        // 清空list loading=true
        dispatch({ type: types.RESET_HOME_LSEEONS })
        getLessons(category, 0, limit).then(lessons => {
          dispatch({ type: types.REFRESH_HOME_LESSONS, payload: lessons })
        })
      }

    }

  },
}