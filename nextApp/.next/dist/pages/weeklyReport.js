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

var _global = require('../hoc/global');

var _global2 = _interopRequireDefault(_global);

var _WeekReport = require('../pageComponents/weeklyReport/WeekReport');

var _WeekReport2 = _interopRequireDefault(_WeekReport);

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

var _done = require('material-ui/svg-icons/action/done');

var _done2 = _interopRequireDefault(_done);

var _normal = require('../theme/normal');

var _normal2 = _interopRequireDefault(_normal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mymomo/workspace/github/backend-present/nextApp/pages/weeklyReport.js?entry';


var columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var headStyle = {
  height: _normal2.default.titleHeight,
  backgroundColor: _normal2.default.palette.accent1Color
};

var titleStyle = {
  fontSize: '3.5em',
  color: 'white',
  fontWeight: 500,
  margin: 0,
  paddingTop: '1.5em',
  textAlign: 'center'
};

var fabStyle = {
  position: 'fixed',
  top: 228,
  right: '10%'
};

var view = {
  INIT: 0,
  ADD: 1
};

var WeeklyReport = function (_React$Component) {
  (0, _inherits3.default)(WeeklyReport, _React$Component);

  function WeeklyReport(props, context) {
    (0, _classCallCheck3.default)(this, WeeklyReport);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WeeklyReport.__proto__ || (0, _getPrototypeOf2.default)(WeeklyReport)).call(this, props, context));

    _this.addEvent = function () {
      console.log('add event');
    };

    _this.state = {
      curView: view.INIT
    };
    return _this;
  }

  (0, _createClass3.default)(WeeklyReport, [{
    key: 'render',
    value: function render() {
      var curView = this.state.curView;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('div', { style: headStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('h1', { style: titleStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, '\u5468\u62A5\u751F\u6210\u5668')), _react2.default.createElement(_WeekReport2.default, {
        title: '\u672C\u5468',
        columns: columns,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), _react2.default.createElement(_FloatingActionButton2.default, {
        style: fabStyle,
        onClick: this.addEvent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, curView === view.INIT ? _react2.default.createElement(_add2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }) : _react2.default.createElement(_done2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })));
    }
  }]);

  return WeeklyReport;
}(_react2.default.Component);

exports.default = (0, _global2.default)(WeeklyReport);