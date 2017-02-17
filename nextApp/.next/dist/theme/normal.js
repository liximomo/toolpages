'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTheme;

var _colors = require('material-ui/styles/colors');

var _colorManipulator = require('material-ui/utils/colorManipulator');

var _spacing = require('material-ui/styles/spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var red = {
  lighten2: '#ee6e73'
};

var teal = {
  lighten1: '#26a69a'
};

function createTheme(userAgent) {
  return {
    spacing: _spacing2.default,
    palette: {
      primary1Color: red.lighten2,
      primary2Color: (0, _colorManipulator.darken)(red.lighten2, 0.15),
      primary3Color: (0, _colorManipulator.lighten)(red.lighten2, 0.15),
      accent1Color: teal.lighten1,
      accent2Color: _colors.grey100,
      accent3Color: _colors.grey500,
      textColor: _colors.darkBlack,
      secondaryTextColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.54),
      alternateTextColor: _colors.white,
      canvasColor: _colors.white,
      borderColor: _colors.grey300,
      disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
      pickerHeaderColor: red.lighten2,
      clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
      shadowColor: _colors.fullBlack
    },
    userAgent: userAgent
  };
};