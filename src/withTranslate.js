import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

const getComponentDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

module.exports = (WrappedComponent) => {
  const WithTranslate = (props, context) => {
    return <WrappedComponent {...props} translate={context.translate} />
  }
  WithTranslate.displayName = `withTranslate(${getComponentDisplayName(WrappedComponent)})`
  WithTranslate.contextTypes = {
    translate: React.PropTypes.func
  }
  return hoistNonReactStatics(WithTranslate, WrappedComponent)
}
