import React from 'react'
import ReactDOM from 'react-dom'
import translations from './translations'
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

const defaultLocale = 'zh'
const reducers = combineReducers(Object.assign({}, { Intl }))
const store = createStore(reducers, { Intl: { locale: defaultLocale }})

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider translations={translations}>
      <App />
    </IntlProvider>
  </Provider>
, document.getElementById('root'))