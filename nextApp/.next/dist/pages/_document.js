'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', null, _react2.default.createElement(_document.Head, null, _react2.default.createElement('style', null, 'html, body {\n              margin: 0;\n              padding: 0;\n            }\n            *, *:before, *:after {\n              box-sizing: inherit;\n            }\n            ::-webkit-scrollbar {\n              height: 10px;\n              width: 10px;\n              overflow: visible; }\n\n            ::-webkit-scrollbar-button {\n              height: 0;\n              width: 0; }\n\n            ::-webkit-scrollbar-track {\n              background-clip: padding-box;\n              border: solid transparent;\n              border-width: 0; }\n\n            ::-webkit-scrollbar-track:horizontal {\n              border-width: 0; }\n\n            ::-webkit-scrollbar-thumb {\n              border-radius: 10px;\n              background-color: rgba(0, 0, 0, 0.2);\n              min-height: 28px;\n              padding: 20px 0 0;\n              box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.07); }\n\n            ::-webkit-scrollbar-thumb:hover {\n              background-color: rgba(0, 0, 0, 0.4);\n              box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.25); }\n\n            ::-webkit-scrollbar-thumb:horizontal {\n              border-width: 6px 1px 1px;\n              padding: 0 0 0 100px;\n              box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1), inset -1px 0 0 rgba(0, 0, 0, 0.07); }\n\n            ::-webkit-scrollbar-corner {\n              background: transparent; }\n            ')), _react2.default.createElement('body', null, _react2.default.createElement(_document.Main, null), _react2.default.createElement(_document.NextScript, null)));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
        var props;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _document2.default.getInitialProps(ctx);

              case 2:
                props = _context.sent;
                return _context.abrupt('return', (0, _extends3.default)({}, props));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;

;