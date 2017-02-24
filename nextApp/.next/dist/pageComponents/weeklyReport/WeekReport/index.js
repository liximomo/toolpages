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

var _reactCopyToClipboard = require('react-copy-to-clipboard');

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _WeekTable = require('./WeekTable');

var _WeekTable2 = _interopRequireDefault(_WeekTable);

var _date = require('../../../utils/date');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LENGTH_RATE = 12;
var CELL_MAX_WIDTH = 500;

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

var style = {
  btn: {
    height: 24,
    minWidth: 60,
    width: 60
  },
  btnLabel: {
    fontSize: 12
  }
};

var WeekReport = function (_React$Component) {
  (0, _inherits3.default)(WeekReport, _React$Component);

  function WeekReport(props, context) {
    (0, _classCallCheck3.default)(this, WeekReport);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WeekReport.__proto__ || (0, _getPrototypeOf2.default)(WeekReport)).call(this, props, context));

    _this.curWeekTitle = '\u672C\u5468\uFF1A' + weekSpan();
    _this.nextWeekTitle = '\u4E0B\u5468\uFF1A' + weekSpan(1);

    _this.columnMaxLength = props.columns.map(function (col) {
      return col.style.minWidth * 16;
    });
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

      return _react2.default.createElement('div', null, _react2.default.createElement('div', null, _react2.default.createElement('div', { style: {
          position: 'relative',
          right: 0
        } }, _react2.default.createElement('h4', { style: { textAlign: 'center', marginRight: 10 } }, '\u4E3B\u9898\uFF1A xx-', weekSpan(), '\u5DE5\u4F5C\u5468\u62A5'), _react2.default.createElement(_reactCopyToClipboard2.default, { text: 'xx-' + weekSpan() + '\u5DE5\u4F5C\u5468\u62A5' }, _react2.default.createElement(_RaisedButton2.default, {
        labelStyle: style.btnLabel,
        style: (0, _extends3.default)({}, style.btn, {
          position: 'absolute',
          right: 30,
          top: 0
        }),
        secondary: true,
        label: '\u590D\u5236'
      }))), _react2.default.createElement('div', {
        style: {
          fontSize: 12
        }
      }, _react2.default.createElement('div', {
        style: {
          marginBottom: 12
        }
      }, _react2.default.createElement('span', { style: { marginRight: 10 } }, '\u6536\u4EF6\u4EBA\uFF1Alanyi-tech-list@mufengcm.com'), _react2.default.createElement(_reactCopyToClipboard2.default, { text: 'lanyi-tech-list@mufengcm.com' }, _react2.default.createElement(_RaisedButton2.default, {
        labelStyle: style.btnLabel,
        style: (0, _extends3.default)({}, style.btn),
        secondary: true,
        label: '\u590D\u5236'
      }))), _react2.default.createElement('div', null, _react2.default.createElement('span', { style: { marginRight: 10 } }, '\u6284\u9001\uFF1Achenbin@mufengcm.com'), _react2.default.createElement(_reactCopyToClipboard2.default, { text: 'chenbin@mufengcm.com' }, _react2.default.createElement(_RaisedButton2.default, {
        labelStyle: style.btnLabel,
        style: (0, _extends3.default)({}, style.btn),
        secondary: true,
        label: '\u590D\u5236'
      }))))), _react2.default.createElement('div', { name: name }, _react2.default.createElement(_WeekTable2.default, { widthMatrix: this.columnMaxLength, title: this.curWeekTitle, cols: this.props.columns, data: curWeek.length ? curWeek : demo }), _react2.default.createElement(_WeekTable2.default, { widthMatrix: this.columnMaxLength, title: this.nextWeekTitle, cols: this.props.columns, data: nextWeek })));
    }
  }]);

  return WeekReport;
}(_react2.default.Component);

exports.default = WeekReport;

;