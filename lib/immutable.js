'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactRedux = require('react-redux');

var _provider = require('./provider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = _immutable2.default.fromJS({
  locale: 'en'
});

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'SET_LOCALE':
      return state.set('locale', action.locale);
    default:
      return state;
  }
}

function mapPropsToState(state) {
  return _extends({}, state.get('Intl').toJS(), {
    key: state.getIn(['Intl', 'locale'])
  });
}

exports.default = {
  reducer: reducer,
  provider: (0, _reactRedux.connect)(mapPropsToState)(_provider.IntlProvider)
};