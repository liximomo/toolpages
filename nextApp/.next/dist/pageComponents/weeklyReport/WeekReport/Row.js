'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    })
  }, '' + props.content);
};

exports.default = function (props) {
  var keys = ['department', // 责任部门
  'event', // 涉及事项
  'priority', // 象限
  'person', // 责任人
  'relation', // 第三方/协助方
  'expectDate', // 目标时间
  'expectState', // 目标状态
  'obstacle', // 疑问/难点/关键点
  'descripe', // 描述
  'currentState', // 当前状态
  'nextState'];
  return _react2.default.createElement('tr', null, keys.map(function (key, index) {
    var cellContent = props[key] || ' ';
    props.onRenderCell(index, cellContent.length);
    return _react2.default.createElement(Cell, { key: index, content: cellContent });
  }));
};