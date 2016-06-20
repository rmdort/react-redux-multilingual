var initialState = {
  locale: 'en'
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_LOCALE':
      return {
        ...state,
        locale: action.locale
      }
    default:
      return state
  }
}


module.exports = reducer