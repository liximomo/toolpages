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

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _lib = require('formsy-material-ui/lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEPARTMENTS = ['总经办', '人事', '财务', '营销中心', '策划中心', '运营部', '直播部', '新媒体', '福州公司', '合规部'];

var CONTACTS = ['陈彬', '钟姚洁', '杨海斌', '伍远强', '庞小龙', '范旭', '魏海龙', '孙建国', '付信军', '吴奇东', '徐琰璋', '黄波', '胡日猛', '刘欢', '涂凤朝', '李玺', '徐阳红', '季娜', '丁薛', '岳颂杰', '赵丽忠', '殷逸伦', '黄宇微', '李凯华', '李腾', '徐鑫', '黄毓鸣'];

var styles = {
  paperStyle: {
    width: 300,
    margin: 'auto',
    padding: 20
  },
  row: {
    display: 'block',
    margin: '0.8em 0'
  },
  formControll: {
    margin: '0 1.2em'
  },
  formControllInline: {
    display: 'inline-block',
    margin: '0 1.2em'
  }
};

var Row = function Row(props) {
  return _react2.default.createElement('div', { style: styles.row }, props.children);
};

var FormControll = function FormControll(props) {
  return _react2.default.createElement('div', { style: styles.formControll }, props.children);
};

var FormControllInline = function FormControllInline(props) {
  return _react2.default.createElement('div', { style: styles.formControllInline }, props.children);
};

var EventForm = function (_React$Component) {
  (0, _inherits3.default)(EventForm, _React$Component);

  function EventForm(props, context) {
    (0, _classCallCheck3.default)(this, EventForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EventForm.__proto__ || (0, _getPrototypeOf2.default)(EventForm)).call(this, props, context));

    _this.showMore = function () {
      _this.setState({
        more: true
      });
    };

    _this.handleValid = function () {
      _this.props.onValid();
    };

    _this.handleInValid = function () {
      _this.props.onInValid();
    };

    _this.handleWeekChange = function (event, isNext) {
      _this.isNext = isNext;
    };

    _this.isNext = false;

    _this.state = {
      more: false
    };
    return _this;
  }

  (0, _createClass3.default)(EventForm, [{
    key: 'submit',
    value: function submit() {
      this.props.onSubmit((0, _extends3.default)({}, this.refs.form.getModel(), {
        isNext: this.isNext
      }));
    }
  }, {
    key: 'more',
    value: function more() {
      return _react2.default.createElement(_Paper2.default, { style: { padding: '2em 0' }, zDepth: 1 }, _react2.default.createElement('p', {
        style: {
          margin: '-0.8em 1.4em 0',
          color: this.context.muiTheme.palette.accent1Color
        } }, '\u8865\u5145\u5185\u5BB9'), _react2.default.createElement(Row, null, _react2.default.createElement(FormControllInline, null, _react2.default.createElement(_lib.FormsyDate, {
        name: 'expectDate',
        floatingLabelText: '\u76EE\u6807\u65F6\u95F4',
        hintText: '\u4E8B\u9879\u7684\u76EE\u6807\u7EC8\u6B62\u65F6\u95F4',
        defaultDate: null
      })), _react2.default.createElement(FormControllInline, null, _react2.default.createElement(_lib.FormsyText, {
        name: 'relation',
        floatingLabelText: '\u7B2C\u4E09\u65B9/\u534F\u52A9\u65B9',
        hintText: '\u4E8B\u9879\u76F8\u5173\u534F\u65B9\uFF08\u4EBA\uFF0C\u90E8\u95E8\uFF09'
      }))), _react2.default.createElement(Row, null, _react2.default.createElement(FormControll, null, _react2.default.createElement(_lib.FormsyText, {
        name: 'descripe',
        floatingLabelFixed: true,
        multiLine: true,
        floatingLabelText: '\u4E8B\u9879\u63CF\u8FF0',
        hintText: '\u8BE6\u7EC6\u63CF\u8FF0\u4E8B\u9879\u5185\u5BB9',
        style: {
          width: '100%'
        }
      }))), _react2.default.createElement(Row, null, _react2.default.createElement(FormControll, null, _react2.default.createElement(_lib.FormsyText, {
        name: 'currentState',
        floatingLabelFixed: true,
        multiLine: true,
        floatingLabelText: '\u5F53\u524D\u72B6\u6001',
        hintText: '\u63CF\u8FF0\u4E8B\u9879\u5F53\u524D\u7684\u8FDB\u5C55\uFF0C\u5904\u4E8E\u4EC0\u4E48\u72B6\u6001',
        style: {
          width: '100%'
        }
      }))), _react2.default.createElement(Row, null, _react2.default.createElement(FormControll, null, _react2.default.createElement(_lib.FormsyText, {
        name: 'nextState',
        floatingLabelFixed: true,
        multiLine: true,
        floatingLabelText: '\u4E0B\u4E00\u6B65\u6253\u7B97',
        hintText: '\u63CF\u8FF0\u4E8B\u9879\u63A5\u4E0B\u6765\u7684\u8FDB\u5C55\uFF0C\u8981\u5B8C\u6210\u7684\u76EE\u6807',
        style: {
          width: '100%'
        }
      }))), _react2.default.createElement(Row, null, _react2.default.createElement(FormControll, null, _react2.default.createElement(_lib.FormsyText, {
        name: 'expectState',
        floatingLabelFixed: true,
        multiLine: true,
        floatingLabelText: '\u76EE\u6807\u72B6\u6001',
        hintText: '\u63CF\u8FF0\u4E8B\u9879\u5B8C\u6210\u65F6\u5E94\u8FBE\u5230\u7684\u72B6\u6001',
        style: {
          width: '100%'
        }
      }))), _react2.default.createElement(Row, null, _react2.default.createElement(FormControll, null, _react2.default.createElement(_lib.FormsyText, {
        name: 'obstacle',
        floatingLabelFixed: true,
        multiLine: true,
        floatingLabelText: '\u963B\u788D',
        hintText: '\u63CF\u8FF0\u4E8B\u9879\u8981\u8FBE\u5230\u76EE\u6807\u72B6\u6001\u4F1A\u9047\u5230\u6216\u53EF\u80FD\u5B58\u5728\u7684\u7591\u95EE\u3001\u96BE\u70B9\u3001\u5173\u952E\u70B9',
        style: {
          width: '100%'
        }
      }))));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_formsyReact2.default.Form, {
        ref: 'form',
        onValid: this.handleValid,
        onInvalid: this.handleInValid
      }, _react2.default.createElement(Row, null, _react2.default.createElement(FormControll, null, _react2.default.createElement(_Toggle2.default, {
        onToggle: this.handleWeekChange,
        label: '\u4E0B\u5468\u4E8B\u9879\uFF1F',
        name: 'isNext',
        labelStyle: {
          color: 'red'
        },
        thumbStyle: {
          backgroundColor: '#ffcccc'
        }
      }))), _react2.default.createElement(Row, null, _react2.default.createElement(FormControll, null, _react2.default.createElement(_lib.FormsyText, {
        name: 'event',
        required: true,
        floatingLabelText: '\u4E8B\u9879',
        hintText: '\u4E8B\u9879\u7B80\u8FF0'
      }))), _react2.default.createElement(Row, null, _react2.default.createElement(FormControll, null, _react2.default.createElement(_lib.FormsySelect, {
        name: 'priority',
        floatingLabelText: '\u4F18\u5148\u7EA7\u8C61\u9650',
        value: 'p3'
      }, _react2.default.createElement(_MenuItem2.default, { value: 'p0', primaryText: '\u7D27\u6025\u4E14\u91CD\u8981' }), _react2.default.createElement(_MenuItem2.default, { value: 'p1', primaryText: '\u91CD\u8981\u4F46\u4E0D\u7D27\u6025' }), _react2.default.createElement(_MenuItem2.default, { value: 'p2', primaryText: '\u7D27\u6025\u4F46\u4E0D\u91CD\u8981' }), _react2.default.createElement(_MenuItem2.default, { value: 'p3', primaryText: '\u4E0D\u91CD\u8981\u4E0D\u7D27\u6025' })))), _react2.default.createElement(Row, null, _react2.default.createElement(FormControllInline, null, _react2.default.createElement(_lib.FormsyText, {
        name: 'department',
        required: true,
        floatingLabelText: '\u8D23\u4EFB\u90E8\u95E8',
        defaultValue: '\u65B0\u5A92\u4F53'
      })), _react2.default.createElement(FormControllInline, null, _react2.default.createElement(_lib.FormsyText, {
        name: 'person',
        required: true,
        floatingLabelText: '\u8D23\u4EFB\u4EBA',
        hintText: '\u4E8B\u9879\u8D1F\u8D23\u4EBA'
      }))), !this.state.more ? _react2.default.createElement(_FlatButton2.default, {
        style: {
          left: -8,
          top: 10
        },
        label: '\u66F4\u591A',
        secondary: true,
        onClick: this.showMore
      }) : this.more());
    }
  }]);

  return EventForm;
}(_react2.default.Component);

exports.default = EventForm;


EventForm.contextTypes = {
  muiTheme: _react2.default.PropTypes.object
};