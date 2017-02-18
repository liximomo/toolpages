'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mymomo/workspace/github/backend-present/nextApp/pageComponents/weeklyReport/WeekReport/Row.js';

var normalTdStyle = {
  padding: '10px 12px',
  textAlign: 'center',
  verticalAlign: 'middle',
  border: '1px solid'
};

var Cell = function Cell(props) {
  return _react2.default.createElement('td', {
    style: (0, _extends3.default)({}, normalTdStyle, {
      width: props.width || 'auto',
      fontSize: props.fontSize || '12px'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.children);
};

exports.default = function (props) {
  var department = props.department,
      event = props.event,
      priority = props.priority,
      descripe = props.descripe,
      currentState = props.currentState,
      nextState = props.nextState,
      expectState = props.expectState,
      expectDate = props.expectDate,
      person = props.person,
      relation = props.relation,
      obstacle = props.obstacle;

  return _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, department), _react2.default.createElement(Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, event), _react2.default.createElement(Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, priority), _react2.default.createElement(Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, person), _react2.default.createElement(Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, relation), _react2.default.createElement(Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, expectState), _react2.default.createElement(Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, currentState), _react2.default.createElement(Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, nextState), _react2.default.createElement(Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, obstacle), _react2.default.createElement(Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, expectDate), _react2.default.createElement(Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, descripe));
};