'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('next/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('next/node_modules/babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _dom = require('../utils/dom');

var _WeekReport = require('../pageComponents/weeklyReport/WeekReport');

var _WeekReport2 = _interopRequireDefault(_WeekReport);

var _EventForm = require('../pageComponents/weeklyReport/EventForm');

var _EventForm2 = _interopRequireDefault(_EventForm);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

var _done = require('material-ui/svg-icons/action/done');

var _done2 = _interopRequireDefault(_done);

var _help = require('material-ui/svg-icons/action/help');

var _help2 = _interopRequireDefault(_help);

var _normal = require('../theme/normal');

var _normal2 = _interopRequireDefault(_normal);

require('../components/tab_events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mymomo/workspace/github/backend-present/nextApp/pages/weeklyReport.js?entry';


var styles = {
  headStyle: {
    position: 'relative',
    height: _normal2.default.titleHeight,
    backgroundColor: _normal2.default.palette.accent1Color
  },
  titleStyle: {
    fontSize: '3.5em',
    color: 'white',
    fontWeight: 500,
    margin: 0,
    paddingTop: '1.5em',
    textAlign: 'center'
  },
  fabStyle: {
    position: 'absolute',
    top: 228,
    right: '10%'
  },
  content: {
    margin: '0 auto',
    padding: '2em',
    width: '80%',
    maxWidth: 900
  }
};

var view = {
  INIT: 0,
  ADD: 1
};

var weekTableColumns = [{
  name: 'department',
  text: '责任部门',
  style: {
    minWidth: '5em'
  }
}, {
  name: 'event',
  text: '涉及事项',
  style: {
    minWidth: '5em'
  }
}, {
  name: 'priority',
  text: '象限',
  style: {
    minWidth: '3em'
  }
}, {
  name: 'person',
  text: '责任人',
  style: {
    minWidth: '3em'
  }
}, {
  name: 'relation',
  text: '第三方/协助方',
  style: {
    minWidth: '7em'
  }
}, {
  name: 'expectDate',
  text: '目标时间',
  style: {
    minWidth: '5em'
  }
}, {
  name: 'expectState',
  text: '目标状态',
  style: {
    minWidth: '5em'
  }
}, {
  name: 'obstacle',
  text: '疑问/难点/关键点',
  style: {
    minWidth: '10em'
  }
}, {
  name: 'descripe',
  text: '描述',
  style: {
    minWidth: '3em'
  }
}, {
  name: 'currentState',
  text: '当前状态',
  style: {
    minWidth: '5em'
  }
}, {
  name: 'nextState',
  text: '跟进事项/状态',
  style: {
    minWidth: '8em'
  }
}];

var WeeklyReport = function (_React$Component) {
  (0, _inherits3.default)(WeeklyReport, _React$Component);

  function WeeklyReport(props, context) {
    (0, _classCallCheck3.default)(this, WeeklyReport);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WeeklyReport.__proto__ || (0, _getPrototypeOf2.default)(WeeklyReport)).call(this, props, context));

    _this.formValid = function () {
      _this.setState({
        fabEnable: true
      });
    };

    _this.formInValid = function () {
      _this.setState({
        fabEnable: false
      });
    };

    _this.submitForm = function () {
      _this.refs.eventForm.submit();
    };

    _this.handleFormSubmit = function (value) {
      var isNext = value.isNext,
          eventEntry = (0, _objectWithoutProperties3.default)(value, ['isNext']);

      var key = isNext ? 'nextWeek' : 'curWeek';
      var events = _this.state[key];
      _this.setState((0, _defineProperty3.default)({}, key, events.concat((0, _extends3.default)({
        id: (0, _v2.default)()
      }, eventEntry))));
    };

    _this.handleFabClick = function () {
      if (_this.state.curView === view.INIT) {
        _this.setState({
          fabEnable: false,
          curView: view.ADD
        });
      } else {
        _this.submitForm();
        _this.setState({
          fabEnable: true,
          curView: view.INIT
        });
      }
    };

    _this.notify = function (msg) {
      _this.setState({
        snackBar: {
          open: true,
          message: msg
        }
      });
    };

    _this.handleRequestClose = function () {
      _this.setState({
        snackBar: {
          open: false
        }
      });
    };

    _this.copyTable = function () {
      (0, _dom.copyElement)(document.querySelector('[name="WeekReportRable"]'));
      _this.notify('复制成功！');
    };

    _this.state = {
      snackBar: {
        open: false,
        message: null
      },
      fabEnable: true,
      curView: view.INIT,
      curWeek: [],
      nextWeek: []
    };

    return _this;
  }

  (0, _createClass3.default)(WeeklyReport, [{
    key: 'tablePreview',
    value: function tablePreview() {
      var _state = this.state,
          curWeek = _state.curWeek,
          nextWeek = _state.nextWeek;

      return _react2.default.createElement('div', {
        style: {
          overflowX: 'scroll',
          paddingBottom: '1.5em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, _react2.default.createElement(_WeekReport2.default, {
        name: 'WeekReportRable',
        title: '\u672C\u5468',
        columns: weekTableColumns,
        curWeek: curWeek,
        nextWeek: nextWeek,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          curView = _state2.curView,
          fabEnable = _state2.fabEnable,
          curWeek = _state2.curWeek,
          nextWeek = _state2.nextWeek,
          snackBar = _state2.snackBar;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, _react2.default.createElement('div', { style: styles.headStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, _react2.default.createElement('h1', { style: styles.titleStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, '\u5468\u62A5\u751F\u6210\u5668'), _react2.default.createElement(_FloatingActionButton2.default, {
        disabled: !fabEnable,
        style: styles.fabStyle,
        onClick: this.handleFabClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, curView === view.INIT ? _react2.default.createElement(_add2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }) : _react2.default.createElement(_done2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }))), _react2.default.createElement('div', { style: styles.content, __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, curView === view.INIT ? this.tablePreview() : _react2.default.createElement(_EventForm2.default, {
        ref: 'eventForm',
        onValid: this.formValid,
        onInValid: this.formInValid,
        onSubmit: this.handleFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }), _react2.default.createElement('div', {
        style: {
          display: curView === view.INIT ? 'block' : 'none',
          margin: '1.2em 0',
          textAlign: 'right'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, _react2.default.createElement(_IconButton2.default, {
        disableTouchRipple: true,
        tooltip: '\u590D\u5236\u540E\u76F4\u63A5\u5728\u90AE\u7BB1\u7F16\u8F91\u6846\u5185\u6267\u884C\u7C98\u8D34\u64CD\u4F5C\u5373\u53EF\u5C06\u8868\u683C\u5B8C\u6574\u8F93\u51FA',
        tooltipPosition: 'top-center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, _react2.default.createElement(_help2.default, { color: this.context.muiTheme.palette.accent3Color, __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      })), _react2.default.createElement(_RaisedButton2.default, {
        secondary: true,
        label: '\u590D\u5236',
        onClick: this.copyTable,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }))), _react2.default.createElement(_Snackbar2.default, {
        open: snackBar.open,
        message: snackBar.message || 'null',
        autoHideDuration: 2000,
        onRequestClose: this.handleRequestClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }));
    }
  }]);

  return WeeklyReport;
}(_react2.default.Component);

WeeklyReport.contextTypes = {
  muiTheme: _react2.default.PropTypes.object
};

exports.default = (0, _global2.default)(WeeklyReport);