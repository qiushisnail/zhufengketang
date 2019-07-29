import { createStore, applyMiddleware } from 'redux'
import reducers from "./reducers"
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// applyMiddelware为了使用中间件，为什么要使用中间件，是为了能让我们派发function 
let store = createStore(reducers,
  applyMiddleware(promise, thunk, logger))
window.store = store;
export default store;