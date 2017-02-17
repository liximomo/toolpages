'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mymomo/workspace/github/backend-present/nextApp/components/WeekTable/index.js';


var tableStyle = {
  borderCollapse: 'collapse'
};

var WeekTable = function (_React$Component) {
  (0, _inherits3.default)(WeekTable, _React$Component);

  function WeekTable(props, context) {
    (0, _classCallCheck3.default)(this, WeekTable);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WeekTable.__proto__ || (0, _getPrototypeOf2.default)(WeekTable)).call(this, props, context));

    _this.curWeek = [{
      department: 'test', // 责任部门
      event: 'test', // 涉及事项
      priority: 'test', // 象限
      descripe: 'test', // 描述
      currentState: 'test', // 当前状态
      nextState: 'test', // 下一个目标
      expectState: 'test', // 目标状态
      expectDate: 'test', // 目标时间
      person: 'test', // 责任人
      relation: 'test', // 第三方/协助方
      obstacle: 'test' }, {
      department: 'test1', // 责任部门
      event: 'test1', // 涉及事项
      priority: 'test1', // 象限
      descripe: 'test1', // 描述
      currentState: 'test1', // 当前状态
      nextState: 'test1', // 下一个目标
      expectState: 'test1', // 目标状态
      expectDate: 'test1', // 目标时间
      person: 'test1', // 责任人
      relation: 'test1', // 第三方/协助方
      obstacle: 'test1' }];
    return _this;
  }

  (0, _createClass3.default)(WeekTable, [{
    key: 'colDefinition',
    value: function colDefinition() {
      return _react2.default.createElement('colgroup', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, this.props.columns.map(function (column) {
        return _react2.default.createElement('col', { width: '200', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        });
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var curWeek = this.curWeek;
      var _props = this.props,
          title = _props.title,
          columns = _props.columns;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, title), _react2.default.createElement('table', {
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        style: tableStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, this.colDefinition(), _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, curWeek.map(function (eventEntry) {
        return _react2.default.createElement(_Row2.default, (0, _extends3.default)({}, eventEntry, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }));
      }))));
    }
  }]);

  return WeekTable;
}(_react2.default.Component);

exports.default = WeekTable;

;