/*import React from "react"
import ReactDOM from "react-dom"

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from "./components/App"

import * as reducers from './state/reducers';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
)

*/

import React from "react"
import ReactDOM from "react-dom"

import App from "./components/App"

ReactDOM.render(
    <App />,
  document.querySelector("#root")
)


