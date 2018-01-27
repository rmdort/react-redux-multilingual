import IntlReducer from './reducer'
import withTranslate from './withTranslate'
import IntlProvider from './provider'
import * as IntlActions from './actions'
import * as immutable from './immutable'

var ImmutableIntlReducer = immutable.default.reducer
var ImmutableIntlProvider = immutable.default.provider

export {
  IntlReducer,
  withTranslate,
  IntlProvider,
  IntlActions,
  ImmutableIntlReducer,
  ImmutableIntlProvider
}
