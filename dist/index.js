'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _android = require('./android');

var _android2 = _interopRequireDefault(_android);

var _ios = require('./ios');

var _ios2 = _interopRequireDefault(_ios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://stackoverflow.com/a/9039885
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

exports.default = iOS ? _ios2.default : _android2.default;


if (console.warn) {
  console.warn("Warning: <WakeLock> will abort any HTTP requests every 15" + " seconds on iOS - see https://github.com/jampy/react-wakelock/issues/1");
}