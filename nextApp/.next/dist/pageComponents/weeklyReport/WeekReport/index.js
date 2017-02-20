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

var demo = [{
  id: '@demo',
  department: '示例', // 责任部门1
  event: '示例', // 涉及事项1
  priority: '示例', // 象限1
  descripe: '示例', // 描述
  currentState: '示例', // 当前状态
  nextState: '示例', // 下一个目标
  expectState: '示例', // 目标状态
  expectDate: new Date(2017, 0, 8), // 目标时间1
  person: '示例', // 责任人1
  relation: '示例', // 第三方/协助方1
  obstacle: '示例' }];

var WeekReport = function (_React$Component) {
  (0, _inherits3.default)(WeekReport, _React$Component);

  function WeekReport(props, context) {
    (0, _classCallCheck3.default)(this, WeekReport);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WeekReport.__proto__ || (0, _getPrototypeOf2.default)(WeekReport)).call(this, props, context));

    _this.curWeekTitle = '\u672C\u5468\uFF1A' + weekSpan();
    _this.nextWeekTitle = '\u4E0B\u5468\uFF1A' + weekSpan(1);
    return _this;
  }

  (0, _createClass3.default)(WeekReport, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          columns = _props.columns,
          curWeek = _props.curWeek,
          nextWeek = _props.nextWeek,
          name = _props.name;

      return _react2.default.createElement('div', { name: name, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_WeekTable2.default, { title: this.curWeekTitle, cols: this.props.columns, data: curWeek.length ? curWeek : demo, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_WeekTable2.default, { title: this.nextWeekTitle, cols: this.props.columns, data: nextWeek, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }));
    }
  }]);

  return WeekReport;
}(_react2.default.Component);

exports.default = WeekReport;

;