'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntlActions = exports.IntlProvider = exports.withTranslate = exports.IntlReducer = undefined;

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _withTranslate = require('./withTranslate');

var _withTranslate2 = _interopRequireDefault(_withTranslate);

var _provider = require('./provider');

var _provider2 = _interopRequireDefault(_provider);

var _actions = require('./actions');

var IntlActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.IntlReducer = _reducer2.default;
exports.withTranslate = _withTranslate2.default;
exports.IntlProvider = _provider2.default;
exports.IntlActions = IntlActions;