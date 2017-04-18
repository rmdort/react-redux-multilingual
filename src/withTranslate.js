import React from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'

const getComponentDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default (WrappedComponent) => {
  const WithTranslate = (props, context) => {
    return <WrappedComponent {...props} translate={context.translate} />
  }
  WithTranslate.displayName = `withTranslate(${getComponentDisplayName(WrappedComponent)})`
  WithTranslate.contextTypes = {
    translate: PropTypes.func
  }
  return hoistNonReactStatics(WithTranslate, WrappedComponent)
}
