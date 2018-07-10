import React from 'react'

const TranslateContext = React.createContext(null)
const {
  Provider: TranslateProvider,
  Consumer: TranslateConsumer
} = TranslateContext

export { TranslateProvider, TranslateConsumer }
export default TranslateContext
