# React Multilingual with redux

A simple and slim (Only 6KB) multi-lingual component for React with Redux without react-intl or react-i18n

## Install

```
npm i react-redux-multilingual --save
```

## Wiring it up

```js
import translations from './translations'
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

let reducers = combineReducers(Object.assign({}, { Intl }))
let store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider translations={translations} locale='en'>
      <App />
    </IntlProvider>
  </Provider>
, document.getElementById('root'))
```

## Translations format
The translations props accepts object in this format

```js
{
  en: {
    locale: 'en-US',
    messages: {
      hello: 'how are you {name}'
    }
  },
  zh: {
    locale: 'zh',
    messages: {
      hello: '你好！你好吗 {name}'
    }
  }
}
```

## Translate using hook

```js
import { useTranslate } from 'react-redux-multilingual'

function App () {
  const t = useTranslate()

  return (
    <div>
      {t('hello', { name: 'Foo Bar'})}
    </div>
  )
}
```

## Translate using higher-order component (HOC)

```js
import { withTranslate } from 'react-redux-multilingual'

const App = ({ translate }) = {
  return (
    <div>
      {translate('hello', { name: 'John Doe' })}
    </div>
  )
}

module.exports = withTranslate(App)
```

## Translate using Context

```js
const App = (props, context) => {
  return (
    <div>
      {context.translate('hello', { name: 'John Doe' })}
    </div>
  )
}

App.contextTypes = {
  translate: React.propTypes.func
}

module.exports = App
```

## Setting the initial locale

Option 1: Pass your locale to initial state of your reducer
```js
let store = createStore(reducers, { Intl: { locale: 'zh'}})
```

Option 2: Dispatch an action to change locale
```js
import { IntlActions } from 'react-redux-multilingual'
let store = createStore(reducers)
store.dispatch(IntlActions.setLocale('zh'))
```
