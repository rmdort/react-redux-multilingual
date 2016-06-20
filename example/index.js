import React from 'react'
import ReactDOM from 'react-dom'
import translations from './translations'
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

let reducers = combineReducers(Object.assign({}, { Intl }))
let store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider translations={translations}>
      <App />
    </IntlProvider>
  </Provider>
, document.getElementById('root'))