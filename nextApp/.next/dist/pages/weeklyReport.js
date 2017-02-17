'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _global = require('../hoc/global');

var _global2 = _interopRequireDefault(_global);

var _WeekTable = require('../components/WeekTable');

var _WeekTable2 = _interopRequireDefault(_WeekTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mymomo/workspace/github/backend-present/nextApp/pages/weeklyReport.js?entry';


var columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function WeeklyReport() {
  return _react2.default.createElement(_WeekTable2.default, {
    title: '\u672C\u5468',
    columns: columns,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  });
}

exports.default = WeeklyReport;