'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _utils = require('./utils');

var _actions = require('./actions');

var _context = require('./context');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntlProvider = function (_React$Component) {
  _inherits(IntlProvider, _React$Component);

  function IntlProvider(props) {
    _classCallCheck(this, IntlProvider);

    var _this = _possibleConstructorReturn(this, (IntlProvider.__proto__ || Object.getPrototypeOf(IntlProvider)).call(this, props));

    _this.translate = function (key, placeholders, isHTML) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var result = (0, _utils.translateKey)(key, _this.props.translations[_this.props.locale]['messages']);
      var tagName = options.tagName || 'div';
      if (typeof placeholders === 'undefined') {
        return result;
      }
      var finalResult = (0, _utils.supplant)(result, placeholders);
      return isHTML ? _react2.default.createElement(tagName, { dangerouslySetInnerHTML: (0, _utils.createHTMLMarkup)(finalResult) }, null) : finalResult;
    };

    var translations = props.translations,
        locale = props.locale,
        setLocale = props.setLocale;

    if (!translations || !locale) {
      var namePart = _this.constructor.displayName ? ' of ' + _this.constructor.displayName : '';
      throw new Error('Could not find translations or locale on this.props ' + namePart);
    }
    return _this;
  }

  _createClass(IntlProvider, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _context.TranslateProvider,
        { value: this.translate },
        this.props.children
      );
    }
  }]);

  return IntlProvider;
}(_react2.default.Component);

IntlProvider.defaultProps = {
  translations: {}
};


function mapPropsToState(state) {
  var Intl = state.Intl;

  return _extends({}, Intl, {
    key: Intl.locale
  });
}

exports.default = (0, _reactRedux.connect)(mapPropsToState, { setLocale: _actions.setLocale })(IntlProvider);