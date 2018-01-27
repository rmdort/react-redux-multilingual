import Immutable from 'immutable'
import { connect } from 'react-redux'
import { IntlProvider } from './provider'

var initialState = Immutable.fromJS({
  locale: 'en'
})

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_LOCALE':
      return state.set('locale', action.locale)
    default:
      return state
  }
}

function mapPropsToState (state) {
  return {
    ...state.get('Intl').toJS(),
    key: state.getIn(['Intl', 'locale']),
  };
}

export default {
  reducer: reducer,
  provider: connect(mapPropsToState)(IntlProvider)
}
