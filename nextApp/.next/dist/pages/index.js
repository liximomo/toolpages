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

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mymomo/workspace/github/backend-present/nextApp/pages/index.js?entry';


// async function getInitialProps() {
//   // eslint-disable-next-line no-undef
//   const res = await fetch('https://api.github.com/repos/zeit/next.js');
//   const json = await res.json();
//   return { stars: json.stargazers_count };
// }

var MyPage = function (_React$Component) {
  (0, _inherits3.default)(MyPage, _React$Component);

  function MyPage() {
    (0, _classCallCheck3.default)(this, MyPage);

    return (0, _possibleConstructorReturn3.default)(this, (MyPage.__proto__ || (0, _getPrototypeOf2.default)(MyPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, '\u6DFB\u52A0\u4E8B\u9879'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_TextField2.default, {
        hintText: 'Message Field',
        floatingLabelText: 'MultiLine and FloatingLabel',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })));
    }
  }]);

  return MyPage;
}(_react2.default.Component);

exports.default = (0, _global2.default)(MyPage);
// export default MyPage;