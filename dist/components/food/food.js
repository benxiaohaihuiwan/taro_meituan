(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/food/food"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/food/food.js?taro&type=script&parse=PAGE&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/food/food.js?taro&type=script&parse=PAGE& ***!
  \******************************************************************************************************************************************************************************/
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

__webpack_require__(/*! ./food.less */ "./src/components/food/food.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Food = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Food, _BaseComponent);

  function Food() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Food);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Food.__proto__ || Object.getPrototypeOf(Food)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__4", "$compid__5", "$compid__6", "current", "tabList", "foodlist", "currentList", "selectCata"], _this.customComponents = ["AtTabs", "AtTabsPane", "Cata", "FoodList"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Food, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Food.prototype.__proto__ || Object.getPrototypeOf(Food.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        current: 0,
        tabList: [{ title: "点菜" }, { title: "评价" }, { title: "商家" }],
        foodlist: [],
        currentList: [],
        selectCata: null
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "changeTab",
    value: function changeTab(value) {
      this.setState({ current: value });
    }
    //切换分类

  }, {
    key: "changeCata",
    value: function changeCata(selectCata) {
      var _this2 = this;

      this.setState({ selectCata: selectCata });
      if (this.state.foodlist.some(function (item) {
        return item.pid == selectCata.id;
      })) {
        //不用加载数据
        this.setState({ currentList: this.state.foodlist.filter(function (item) {
            return item.pid == selectCata.id;
          }) });
      } else {
        //需要加载数据
        this.setState({ foodlist: this.state.foodlist.concat(this.getData(selectCata)) }, function () {
          _this2.setState({ currentList: _this2.state.foodlist.filter(function (item) {
              return item.pid == selectCata.id;
            }) });
        });
      }
    }
  }, {
    key: "getData",
    value: function getData(selectCata) {
      var count = Math.round(Math.random() * 2);
      return Array.from(Array(Math.round(Math.random() * 20)), function (v, k) {
        return { price: Math.round(Math.random() * 20), sole: Math.round(Math.random() * 50), img: count, pid: selectCata.id, id: selectCata.id + "_" + k, title: "分类" + selectCata.id + "菜品" + (k + 1) };
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__4"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__4 = _genCompid2[0],
          $compid__4 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__5"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__5 = _genCompid4[0],
          $compid__5 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__6"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__6 = _genCompid6[0],
          $compid__6 = _genCompid6[1];

      var _state = this.__state,
          current = _state.current,
          tabList = _state.tabList,
          currentList = _state.currentList,
          selectCata = _state.selectCata;

      _taroWeapp.propsManager.set({
        "current": current,
        "onClick": this.changeTab.bind(this),
        "tabList": tabList
      }, $compid__4, $prevCompid__4);
      _taroWeapp.propsManager.set({
        "onChangeCata": this.changeCata.bind(this)
      }, $compid__5, $prevCompid__5);
      _taroWeapp.propsManager.set({
        "style": "width:100%",
        "selectCata": selectCata,
        "currentList": currentList
      }, $compid__6, $prevCompid__6);
      Object.assign(this.__state, {
        $compid__4: $compid__4,
        $compid__5: $compid__5,
        $compid__6: $compid__6
      });
      return this.__state;
    }
  }]);

  return Food;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "components/food/food", _temp2);
exports.default = Food;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.3@@tarojs/taro-weapp/index.js").default.createComponent(Food, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/food/food.js?taro&type=template&parse=PAGE&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/food/food.js?taro&type=template&parse=PAGE& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/food/food.wxml";

/***/ }),

/***/ "./src/components/food/food.js":
/*!*************************************!*\
  !*** ./src/components/food/food.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _food_js_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food.js?taro&type=template&parse=PAGE& */ "./src/components/food/food.js?taro&type=template&parse=PAGE&");
/* harmony import */ var _food_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food.js?taro&type=script&parse=PAGE& */ "./src/components/food/food.js?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _food_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _food_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/food/food.js?taro&type=script&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/components/food/food.js?taro&type=script&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_food_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./food.js?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/food/food.js?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_food_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_food_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_food_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_food_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_food_js_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/food/food.js?taro&type=template&parse=PAGE&":
/*!********************************************************************!*\
  !*** ./src/components/food/food.js?taro&type=template&parse=PAGE& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_food_js_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!../../../node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./food.js?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yxuser/Desktop/taro_meituan/src!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.3@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/food/food.js?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_food_js_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_food_js_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_food_js_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_yxuser_Desktop_taro_meituan_src_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_3_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_food_js_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/food/food.less":
/*!***************************************!*\
  !*** ./src/components/food/food.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/food/food.js","runtime","taro","vendors"]]]);