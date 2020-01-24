import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { anecdotesReducer } from './reducers/anecdotesReducer'
import { notificationReducer } from './reducers/notificationReducer'
import { userReducer } from './reducers/userReducer'
import { userInfoReducer } from './reducers/userInfoReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  anecdotes: anecdotesReducer,
  notification: notificationReducer,
  user: userReducer,
  userinfo: userInfoReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)