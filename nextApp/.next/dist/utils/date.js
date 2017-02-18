'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.monday = monday;
exports.friday = friday;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function monday() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return (0, _moment2.default)().isoWeekday(1 + offset);
}

function friday() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return (0, _moment2.default)().isoWeekday(5 + offset);
}