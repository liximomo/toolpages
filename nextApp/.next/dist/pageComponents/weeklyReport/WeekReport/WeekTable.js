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

var _date = require('../../../utils/date');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LENGTH_RATE = 12;
var CELL_MAX_WIDTH = 500;

var tableStyle = {
  borderCollapse: 'collapse'
};

var colDefinition = function colDefinition(columns) {
  return _react2.default.createElement('thead', null, _react2.default.createElement('tr', {
    style: {
      backgroundColor: 'silver'
    }
  }, columns.map(function (column) {
    return _react2.default.createElement('td', {
      key: column.name,
      style: {
        border: '1px solid',
        padding: '10px 12px',
        textAlign: 'center',
        verticalAlign: 'middle'
      }
    }, column.text);
  })));
};

var WeekTable = function (_React$Component) {
  (0, _inherits3.default)(WeekTable, _React$Component);

  function WeekTable(props, context) {
    (0, _classCallCheck3.default)(this, WeekTable);

    // this.props.widthMatrix = props.cols.map(col => col.style.minWidth * 16);
    var _this = (0, _possibleConstructorReturn3.default)(this, (WeekTable.__proto__ || (0, _getPrototypeOf2.default)(WeekTable)).call(this, props, context));

    _this.updateColumnLength = function (index, length) {
      var width = Math.min(CELL_MAX_WIDTH, length * LENGTH_RATE + 40);
      if (width > _this.props.widthMatrix[index]) {
        _this.props.widthMatrix[index] = width;
      }
    };

    return _this;
  }

  (0, _createClass3.default)(WeekTable, [{
    key: 'componentDidMount',
    value: function componentDidMount(prevProps, prevState) {
      var tableElem = this.refs.table;
      var headers = tableElem.querySelectorAll('thead td');
      this.props.widthMatrix.forEach(function (width, index) {
        if (width < 0) return;
        headers[index].style.minWidth = width + 'px';
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      return _react2.default.createElement('div', null, _react2.default.createElement('h4', null, props.title), _react2.default.createElement('table', {
        ref: 'table',
        style: tableStyle
      }, colDefinition(props.cols), _react2.default.createElement('tbody', null, props.data.map(function (eventEntry) {
        return _react2.default.createElement(_Row2.default, (0, _extends3.default)({
          key: eventEntry.id
        }, (0, _extends3.default)({}, eventEntry, {
          expectDate: eventEntry.expectDate ? (0, _date.format)(eventEntry.expectDate, 'YYYY-MM-DD') : ''
        }), {
          onRenderCell: _this2.updateColumnLength
        }));
      }))));
    }
  }]);

  return WeekTable;
}(_react2.default.Component);

exports.default = WeekTable;