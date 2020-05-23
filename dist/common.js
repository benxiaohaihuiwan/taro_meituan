(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //获取菜品数量  通过传入的信息 来统计当前有多少个菜品 
//缓存数据  H5 小程序  
//{food.id:{菜品信息 Num},   }


exports.getFoodCount = getFoodCount;
exports.setFoodCount = setFoodCount;
exports.getEvent = getEvent;
exports.getAllFoodInfo = getAllFoodInfo;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.3@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _events = __webpack_require__(/*! ./events */ "./src/utils/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var foodKey = "taro_meituan";
var myEvent = new _events2.default(); //实例化一个事件管理器 
function getFoodCount(food) {
  var store = _taroWeapp2.default.getStorageSync(foodKey);
  if (store && store[food.id]) {
    return store[food.id].Num;
  } else {
    return 0;
  }
}
//设置菜品数量 当加菜或者减菜时触发   Num是由加减菜组件自身的state存储的   加、减
//当减的数量等于0时   要删除菜品的数据结构 
//当加菜时 发现数据结构中没有该菜品  新增菜品数据结构
function setFoodCount(food, Num, type, callBack) {
  if (food) {
    var store = _taroWeapp2.default.getStorageSync(foodKey);
    if (!store) store = {};
    if (type == "cut") {
      //减菜逻辑
      if (Num == 1) {
        //菜品数据被删除 
        if (store[food.id]) {
          delete store[food.id]; //删除菜品数据结构
        }
      } else {
        if (store[food.id]) {
          store[food.id].Num = Num - 1; //数量减1  结构不变
        }
      }
      _taroWeapp2.default.setStorageSync(foodKey, store); //进行缓存数据更新
      callBack && callBack();
    }
    if (type == "add") {
      //加菜逻辑
      if (store[food.id]) {
        //说明已经加过了
        store[food.id].Num = Num + 1;
      } else {
        //说明没有加过
        store[food.id] = _extends({ Num: 1 }, food);
      }
      _taroWeapp2.default.setStorageSync(foodKey, store); //进行缓存数据更新
      callBack && callBack();
    }
  }
}
function getEvent() {
  return myEvent;
}
//获取所有的菜品数量 及价格 
function getAllFoodInfo() {
  var allPrice = 0; //总价格
  var allNum = 0;
  var store = _taroWeapp2.default.getStorageSync(foodKey); //取菜品信息
  if (store) {
    //对store进行遍历
    Object.keys(store).map(function (key) {
      if (store[key]) {
        allPrice += store[key].price * store[key].Num;
        allNum += store[key].Num;
      }
    });
  }
  return { allPrice: allPrice, allNum: allNum };
}

/***/ }),

/***/ "./src/utils/events.js":
/*!*****************************!*\
  !*** ./src/utils/events.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function () {
  function Event() {
    _classCallCheck(this, Event);

    this.events = {};
  }
  //监听


  _createClass(Event, [{
    key: "on",
    value: function on(eventName, callBack) {
      if (this.events[eventName]) {
        //存在事件
        this.events[eventName].push(callBack);
      } else {
        //不存在事件
        this.events[eventName] = [callBack];
      }
    }
    //触发

  }, {
    key: "emit",
    value: function emit(eventName, params) {
      if (this.events[eventName]) {
        this.events[eventName].map(function (callBack) {
          callBack(params);
        });
      }
    }
  }]);

  return Event;
}();

exports.default = Event;

/***/ })

}]);