import React, { Children } from 'react'
import { connect } from 'react-redux'
import { supplant, translateKey, createHTMLMarkup } from './utils'

class IntlProvider extends React.Component {
  constructor (props) {
    super(props)
    if (!props.translations || !props.locale) {
      let namePart = this.constructor.displayName ? ' of ' + this.constructor.displayName : ''
      throw new Error('Could not find translations or locale on this.props ' + namePart)
    }
  }
  static childContextTypes = {
    translate: React.PropTypes.func
  };
  translate = (key, placeholders, isHTML) => {
    let result = translateKey(key, this.props.translations[this.props.locale]['messages'])
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

function mapPropsToState (state) {
  const { Intl } = state
  return {
    ...Intl,
    key: Intl.locale
  }
}

module.exports = connect(mapPropsToState)(IntlProvider)
