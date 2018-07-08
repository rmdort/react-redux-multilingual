import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { supplant, translateKey, createHTMLMarkup } from './utils'
import { TranslateProvider } from './context'

class IntlProvider extends React.Component {
  constructor (props) {
    super(props)
    const { translations, locale } = props
    if (!translations || !locale) {
      let namePart = this.constructor.displayName ? ' of ' + this.constructor.displayName : ''
      throw new Error('Could not find translations or locale on this.props ' + namePart)
    }
  }
  static defaultProps = {
    translations: {}
  };
  translate = (key, placeholders, isHTML, options = {}) => {
    const result = translateKey(key, this.props.translations[this.props.locale]['messages'])
    const tagName = options.tagName || 'div'
    if (typeof placeholders === 'undefined') {
      return result
    }
    const finalResult = supplant(result, placeholders)
    return isHTML
      ? React.createElement(
        tagName,
        { dangerouslySetInnerHTML: createHTMLMarkup(finalResult) },
        null
      )
      : finalResult
  };
  render () {
    return (
      <TranslateProvider value={this.translate}>
        {this.props.children}
      </TranslateProvider>
    )
  }
}

function mapPropsToState (state) {
  const { Intl } = state
  return {
    ...Intl,
    key: Intl.locale
  }
}

export default connect(mapPropsToState)(IntlProvider)
