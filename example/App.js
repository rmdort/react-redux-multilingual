import React from 'react'
import { connect } from 'react-redux'
import { withTranslate, IntlActions, useTranslate } from 'react-redux-multilingual'

const App = ({ dispatch }) => {

  const translate = useTranslate()
  return (
    <div>
      <p>Hey there</p>
      {translate('hello')}

      <p>
        <button
          onClick={() => {
            dispatch(IntlActions.setLocale('en'))
          }}>Switch to English</button>
        <button
          onClick={() => {
            dispatch(IntlActions.setLocale('zh'))
          }}>Switch to Chinese</button>
      </p>
    </div>
  )
}

module.exports = connect()(App)