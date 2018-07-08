import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { supplant, translateKey, createHTMLMarkup } from './utils'
import { IntlActions } from 'react-redux-multilingual'

class IntlProvider extends React.Component {
  constructor (props) {
    super(props)
    if (!props.translations || !props.locale) {
      let namePart = this.constructor.displayName ? ' of ' + this.constructor.displayName : ''
      throw new Error('Could not find translations or locale on this.props ' + namePart)
    }

    if (!props._locale) {
      props.setLocale(this.props.locale || 'en')
    }
  }
  static childContextTypes = {
    translate: PropTypes.func
  };
  translate = (key, placeholders, isHTML) => {
    let result = translateKey(key, this.props.translations[this.props._locale || this.props.locale]['messages'])
    if (typeof placeholders === 'undefined') {
      return result
    }
    return isHTML
    ? <div dangerouslySetInnerHTML={createHTMLMarkup(supplant(result, placeholders))} />
    : supplant(result, placeholders)
  };
  getChildContext () {
    return {
      translate: this.translate
    }
  }
  render () {
    return Children.only(this.props.children)
  }
}

function mapStateToProps (state) {
  const { Intl } = state
  return {
    ...Intl,
    key: Intl._locale
  }
}
function mapDispatchToProps (dispatch) {
  return {
    setLocale: val => dispatch(IntlActions.setLocale(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntlProvider)
