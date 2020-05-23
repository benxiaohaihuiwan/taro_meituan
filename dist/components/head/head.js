(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/head/head"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/head/head.js?taro&type=script&parse=PAGE&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/head/head.js?taro&type=script&parse=PAGE& ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.3@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./head.less */ "./src/components/head/head.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Head = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Head, _BaseComponent);

  function Head() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Head);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Head.__proto__ || Object.getPrototypeOf(Head)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "store"], _this.customComponents = ["Top", "Activity"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Head, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Head.prototype.__proto__ || Object.getPrototypeOf(Head.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        "store": {
          title: "川湘居",
          notice: "欢迎光临，很高兴为您服务~",
          tags: ["味道赞", "主食真好", "分量足"]
        }
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var store = this.__state.store;


      var anonymousState__temp = __webpack_require__(/*! ../../assets/img/back.jpg */ "./src/assets/img/back.jpg");

      var anonymousState__temp2 = __webpack_require__(/*! ../../assets/img/store.jpg */ "./src/assets/img/store.jpg");

      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        store: store
      });
      return this.__state;
    }
  }]);

  return Head;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "components/head/head", _temp2);
exports.default = Head;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.3@@tarojs/taro-weapp/index.js").default.createComponent(Head, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/head/head.js?taro&type=template&parse=PAGE&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/head/head.js?taro&type=template&parse=PAGE& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/head/head.wxml";

/***/ }),

/***/ "./src/assets/img/back.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/back.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/back.jpg";

/***/ }),

/***/ "./src/assets/img/store.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/store.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/store.jpg";

/***/ }),

/***/ "./src/components/head/head.js":
/*!*************************************!*\
  !*** ./src/components/head/head.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _head_js_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head.js?taro&type=template&parse=PAGE& */ "./src/components/head/head.js?taro&type=template&parse=PAGE&");
/* harmony import */ var _head_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./head.js?taro&type=script&parse=PAGE& */ "./src/components/head/head.js?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _head_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _head_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/head/head.js?taro&type=script&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/components/head/head.js?taro&type=script&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_head_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./head.js?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/head/head.js?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_head_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_head_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_head_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_head_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_head_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/head/head.js?taro&type=template&parse=PAGE&":
/*!********************************************************************!*\
  !*** ./src/components/head/head.js?taro&type=template&parse=PAGE& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_head_js_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!../../../node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./head.js?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/head/head.js?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_head_js_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_head_js_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_head_js_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_head_js_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/head/head.less":
/*!***************************************!*\
  !*** ./src/components/head/head.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/head/head.js","runtime","taro","vendors"]]]);