var initialState = {
  _locale: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_LOCALE':
      return {
        ...state,
        _locale: action.locale
      }
    default:
      return state
  }
}
