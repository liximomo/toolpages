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
  return _react2.default.createElement('thead', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('tr', {
    style: {
      backgroundColor: 'silver'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, columns.map(function (column) {
    return _react2.default.createElement('td', {
      key: column.name,
      style: (0, _extends3.default)({
        border: '1px solid',
        padding: '10px 12px',
        textAlign: 'center',
        verticalAlign: 'middle'
      }, column.style || {}),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, column.text);
  })));
};

var WeekTable = function WeekTable(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('h4', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, props.title), _react2.default.createElement('table', {
    style: tableStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, colDefinition(props.cols), _react2.default.createElement('tbody', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, props.data.map(function (eventEntry) {
    return _react2.default.createElement(_Row2.default, (0, _extends3.default)({ key: eventEntry.id }, eventEntry, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }));
  }))));
};

exports.default = WeekTable;