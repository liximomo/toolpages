'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mymomo/workspace/github/backend-present/nextApp/pageComponents/weeklyReport/WeekReport/WeekTable.js';


var tableStyle = {
  borderCollapse: 'collapse'
};

var colDefinition = function colDefinition(columns) {
  return _react2.default.createElement('colgroup', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, columns.map(function (column, index) {
    return _react2.default.createElement('col', { key: index, width: '200', __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    });
  }));
};

var WeekTable = function WeekTable(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('h4', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, props.title), _react2.default.createElement('table', {
    style: tableStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, colDefinition(props.cols), _react2.default.createElement('tbody', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, props.data.map(function (eventEntry) {
    return _react2.default.createElement(_Row2.default, (0, _extends3.default)({ key: eventEntry.id }, eventEntry, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }));
  }))));
};

exports.default = WeekTable;