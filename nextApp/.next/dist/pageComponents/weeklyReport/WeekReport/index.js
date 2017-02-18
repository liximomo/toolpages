'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _WeekTable = require('./WeekTable');

var _WeekTable2 = _interopRequireDefault(_WeekTable);

var _date = require('../../../utils/date');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mymomo/workspace/github/backend-present/nextApp/pageComponents/weeklyReport/WeekReport/index.js';


function toMonthDay(moment) {
  return moment.format('YYYY/MM/DD');
}

function weekSpan() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return [(0, _date.monday)(offset * 7), (0, _date.friday)(offset * 7)].map(toMonthDay).join('-');
}

var WeekReport = function (_React$Component) {
  (0, _inherits3.default)(WeekReport, _React$Component);

  function WeekReport(props, context) {
    (0, _classCallCheck3.default)(this, WeekReport);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WeekReport.__proto__ || (0, _getPrototypeOf2.default)(WeekReport)).call(this, props, context));

    _this.curWeekTitle = weekSpan();
    _this.nextWeekTitle = weekSpan(1);

    _this.curWeek = [{
      id: '1',
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
      id: '2',
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

  (0, _createClass3.default)(WeekReport, [{
    key: 'title',
    value: function title() {
      return '';
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
          lineNumber: 58
        }
      }, _react2.default.createElement(_WeekTable2.default, { title: this.curWeekTitle, cols: this.props.columns, data: this.curWeek, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement(_WeekTable2.default, { title: this.nextWeekTitle, cols: this.props.columns, data: this.curWeek, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }));
    }
  }]);

  return WeekReport;
}(_react2.default.Component);

exports.default = WeekReport;

;