'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _context = require('./context');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Access translate function
 * @param  {Object} WrappedComponent
 * @return {Object}
 */
function withTranslate(WrappedComponent) {
  return function (props) {
    return _react2.default.createElement(
      _context.TranslateConsumer,
      null,
      function (translate) {
        return _react2.default.createElement(WrappedComponent, _extends({}, props, { translate: translate }));
      }
    );
  };
}

exports.default = withTranslate;