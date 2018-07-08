import React from 'react'
import { connect } from 'react-redux'
import { withTranslate, IntlActions } from 'react-redux-multilingual'

const App = ({ translate, dispatch }) => {
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

module.exports = connect()(withTranslate(App))