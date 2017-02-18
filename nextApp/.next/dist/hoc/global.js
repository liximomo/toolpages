'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = injectGlobal;

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _normal = require('../theme/normal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mymomo/workspace/github/backend-present/nextApp/hoc/global.js';
function injectGlobal(WrappedComponent, getInitProps) {
  var withRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  return function (_React$Component) {
    (0, _inherits3.default)(GlobalComponent, _React$Component);

    function GlobalComponent() {
      (0, _classCallCheck3.default)(this, GlobalComponent);

      return (0, _possibleConstructorReturn3.default)(this, (GlobalComponent.__proto__ || (0, _getPrototypeOf2.default)(GlobalComponent)).apply(this, arguments));
    }

    (0, _createClass3.default)(GlobalComponent, [{
      key: 'render',
      value: function render() {
        var renderElement = void 0;
        if (withRef) {
          renderElement = _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, this.props, {
            ref: 'wrappedInstance'
          }));
        } else {
          renderElement = _react2.default.createElement(WrappedComponent, this.props);
        }
        return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: (0, _getMuiTheme2.default)(this.props.theme), __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, renderElement);
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
          var req, isServer, userAgent, props;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  req = ctx.req;
                  isServer = !!req;
                  userAgent = isServer ? req.headers['user-agent'] : navigator.userAgent;
                  props = {};

                  if (!getInitProps) {
                    _context.next = 8;
                    break;
                  }

                  _context.next = 7;
                  return getInitProps(ctx);

                case 7:
                  props = _context.sent;

                case 8:
                  return _context.abrupt('return', (0, _extends3.default)({}, props, {
                    theme: (0, _normal.createTheme)(userAgent)
                  }));

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x2) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return GlobalComponent;
  }(_react2.default.Component);
}