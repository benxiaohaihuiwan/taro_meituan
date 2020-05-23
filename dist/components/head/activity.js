(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/head/activity"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/head/activity.js?taro&type=script&parse=COMPONENT&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/head/activity.js?taro&type=script&parse=COMPONENT& ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.3@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./activity.less */ "./src/components/head/activity.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Activity = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Activity, _BaseComponent);

  function Activity() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Activity);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Activity.__proto__ || Object.getPrototypeOf(Activity)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "activity"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Activity, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Activity.prototype.__proto__ || Object.getPrototypeOf(Activity.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        activity: [{ type: "cut",
          info: [{ total: 48, cut: 10 }, { total: 58, cut: 20 }, { total: 100, cut: 30 }]
        }]
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "getTextByType",
    value: function getTextByType(type) {
      switch (type) {
        case "cut":
          return "减";
          break;
        default:
          return "减";
          break;
      }
    }
  }, {
    key: "getLine",
    value: function getLine(arr) {
      return arr.map(function (item, index) {
        return "\u6EE1" + item.total + "\u51CF" + item.cut;
      }).join(';');
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state$activity = _slicedToArray(this.__state.activity, 1),
          firstItem = _state$activity[0];

      var anonymousState__temp = this.getTextByType(firstItem.type);
      var anonymousState__temp2 = this.getLine(firstItem.info);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2
      });
      return this.__state;
    }
  }]);

  return Activity;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "components/head/activity", _temp2);
exports.default = Activity;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.3@@tarojs/taro-weapp/index.js").default.createComponent(Activity));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/head/activity.js?taro&type=template&parse=COMPONENT&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/head/activity.js?taro&type=template&parse=COMPONENT& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/head/activity.wxml";

/***/ }),

/***/ "./src/components/head/activity.js":
/*!*****************************************!*\
  !*** ./src/components/head/activity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activity_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity.js?taro&type=template&parse=COMPONENT& */ "./src/components/head/activity.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _activity_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity.js?taro&type=script&parse=COMPONENT& */ "./src/components/head/activity.js?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _activity_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _activity_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/head/activity.js?taro&type=script&parse=COMPONENT&":
/*!***************************************************************************!*\
  !*** ./src/components/head/activity.js?taro&type=script&parse=COMPONENT& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_activity_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./activity.js?taro&type=script&parse=COMPONENT& */ "./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/head/activity.js?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_activity_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_activity_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_activity_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_activity_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_activity_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/head/activity.js?taro&type=template&parse=COMPONENT&":
/*!*****************************************************************************!*\
  !*** ./src/components/head/activity.js?taro&type=template&parse=COMPONENT& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_activity_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!../../../node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./activity.js?taro&type=template&parse=COMPONENT& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/head/activity.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_activity_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_activity_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_activity_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_activity_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/head/activity.less":
/*!*******************************************!*\
  !*** ./src/components/head/activity.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/head/activity.js","runtime","taro","vendors"]]]);