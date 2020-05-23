(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/food/cata"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/food/cata.js?taro&type=script&parse=COMPONENT&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/food/cata.js?taro&type=script&parse=COMPONENT& ***!
  \***********************************************************************************************************************************************************************************/
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

var _common = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.js");

__webpack_require__(/*! ./cata.less */ "./src/components/food/cata.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var event = (0, _common.getEvent)();
var Cata = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Cata, _BaseComponent);

  function Cata() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cata);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cata.__proto__ || Object.getPrototypeOf(Cata)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["selectCata", "cata"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cata, [{
    key: '_constructor',
    value: function _constructor() {
      _get(Cata.prototype.__proto__ || Object.getPrototypeOf(Cata.prototype), '_constructor', this).apply(this, arguments);
      this.state = {
        selectCata: null,
        cata: [{ name: "专场", id: 1 }, { name: "热销", id: 2 }, { name: "折扣", id: 3 }, { name: "主食", id: 4 }, { name: "热炒", id: 5 }, { name: "凉菜", id: 6 }, { name: "特色乱炖", id: 7 }]
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'clickHandle',
    value: function clickHandle(item) {
      var _this2 = this;

      if (this.state.selectCata && this.state.selectCata.id != item.id) {
        this.setState({ selectCata: item }, function () {
          _this2.props.onChangeCata && _this2.props.onChangeCata(_this2.state.selectCata);
        });
        event.emit("changeCata");
      } else if (!this.state.selectCata) {
        this.setState({ selectCata: item }, function () {
          _this2.props.onChangeCata && _this2.props.onChangeCata(_this2.state.selectCata);
        });
        event.emit("changeCata");
      }
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          cata = _state.cata,
          selectCata = _state.selectCata;

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Cata;
}(_taroWeapp.Component), _class.$$events = ["clickHandle"], _class.$$componentPath = "components/food/cata", _temp2);
exports.default = Cata;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.3@@tarojs/taro-weapp/index.js").default.createComponent(Cata));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/food/cata.js?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/food/cata.js?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/food/cata.wxml";

/***/ }),

/***/ "./src/components/food/cata.js":
/*!*************************************!*\
  !*** ./src/components/food/cata.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cata_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cata.js?taro&type=template&parse=COMPONENT& */ "./src/components/food/cata.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _cata_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cata.js?taro&type=script&parse=COMPONENT& */ "./src/components/food/cata.js?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cata_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cata_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/food/cata.js?taro&type=script&parse=COMPONENT&":
/*!***********************************************************************!*\
  !*** ./src/components/food/cata.js?taro&type=script&parse=COMPONENT& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_cata_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./cata.js?taro&type=script&parse=COMPONENT& */ "./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/food/cata.js?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_cata_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_cata_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_cata_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_cata_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_cata_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/food/cata.js?taro&type=template&parse=COMPONENT&":
/*!*************************************************************************!*\
  !*** ./src/components/food/cata.js?taro&type=template&parse=COMPONENT& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_cata_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!../../../node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./cata.js?taro&type=template&parse=COMPONENT& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/food/cata.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_cata_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_cata_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_cata_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_cata_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/food/cata.less":
/*!***************************************!*\
  !*** ./src/components/food/cata.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/food/cata.js","runtime","taro","vendors","common"]]]);