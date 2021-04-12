/*!
 * @jomsou/utils 0.1.2 (https://github.com/zenquan/jrfe-utils)
 * API https://github.com/zenquan/jrfe-utils/blob/master/doc/api.md
 * Copyright 2017-2021 zenquan. All Rights Reserved
 * Licensed under MIT (https://github.com/zenquan/jrfe-utils/blob/master/LICENSE)
 */

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var mimes = {
  'css': 'text/css',
  'less': 'text/css',
  'gif': 'image/gif',
  'html': 'text/html',
  'ico': 'image/x-icon',
  'jpeg': 'image/jpeg',
  'jpg': 'image/jpg',
  'js': 'text/javascript',
  'json': 'application/json',
  'pdf': 'application/pdf',
  'png': 'image/png',
  'svg': 'image/svg',
  'swf': 'application/x-shockwave-flash',
  'tiff': 'image/tiff',
  'txt': 'text/plain',
  'wav': 'audio/x-wav',
  'wmv': 'video/x-ms-wmv',
  'wma': 'video/x-ms-wma',
  'xml': 'text/xml'
};
/** 
 * @description 作用：媒体类型的处理
 * @field 2021/01/16
**/

var Mime = /*#__PURE__*/function () {
  function Mime() {
    _classCallCheck(this, Mime);
  }

  _createClass(Mime, [{
    key: "lookup",

    /** 
    * @description 作用：媒体类型的判断 
    * @param url {string} 图片的链接
    * 
    * @example
    * ```js
    * const shareUrl = 'https://joyrun-activity-upyun.thejoyrun.com/huodong/2020/09/run-challenge/assets/img/share.jpg'
    * const mimeInstance = new Mime();
    * mimeInstance.lookup(shareUrl) // 'image/jpg'
    * ```
    **/
    value: function lookup(url) {
      var urlArr = url.split('/'),
          len = urlArr.length,
          mineType = urlArr[len - 1].match(/\.\S+/)[0].match(/[^.]+/)[0];
      return mimes[mineType];
    }
  }]);

  return Mime;
}();

/**
 * @description 作用：图片处理服务
 * @field 2021/01/13
 */

var ImageService = /*#__PURE__*/function () {
  function ImageService() {
    _classCallCheck(this, ImageService);
  }

  _createClass(ImageService, [{
    key: "getRemotePic",

    /**
    * @description 作用：获取远程图片，解决例如html2canvas中跨域的问题
    * @param url {string} 远程图片的链接
    * @param imgClass {string} 获取到图片展示的样式
    * @param type {'base64' | 'img'} 决定返回值是url还是base64
    * @return {Promise}
    * 
    * @example 
    * ```js
    * const { ImageService } = window['jrfe-utils'];
    * const imageService = new ImageService();
    * const getAvatar = async () => {
    *  const avatarUrl =
    *  'https://joyrun-activity-upyun.thejoyrun.com/huodong/2020/09/run-challenge/assets/img/share.jpg',
    *   res1 = await imageService.getRemotePic(avatarUrl, 'avatar', 'base64'),
    *   res2 = await imageService.getRemotePic(avatarUrl, 'avatar', 'img')
    *   console.log('avatar>>>', res1, res2); 
    *   document.body.appendChild(res2)
    * }
    * ```
    */
    value: function getRemotePic(url, imgClass, type) {
      return new Promise(function (resolve, reject) {
        window.URL = window.URL || window.webkitURL; // Take care of vendor prefixes.

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.send();

        xhr.onload = function (e) {
          var target = e.target;
          var status = target.status,
              response = target.response,
              readyState = target.readyState;

          if (readyState === 4 && status === 200) {
            var blob = response;
            var img = document.createElement('img');
            img.classList.add(imgClass);
            var reader = new FileReader();
            reader.readAsDataURL(blob);

            reader.onloadend = function () {
              var base64data = reader.result;

              if (type === 'base64') {
                resolve(base64data);
              } else {
                img.src = base64data;
                resolve(img);
              }
            };
          } else {
            reject(status);
          }
        };
      })["catch"](function (error) {
        console.log('error>>>', error);
      });
    }
    /**
      * @description 作用：判断是否支持webp格式
      * @return {boolean}
      * 
      * @example
      * ```js
      * const supportWebp = imageService.isSupportWebp(); // true or false
      * ```
    **/

  }, {
    key: "isSupportWebp",
    value: function isSupportWebp() {
      var supportWebp = !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
      return supportWebp;
    }
    /**
      * @description 作用：将又拍云图片改成webp格式
      * @param url {string} 图片又拍云地址
      * @param config {object} 配置 详情见 https://help.upyun.com/knowledge-base/image/
      * @return {string} 
      *
      * @example
      * ```js
      * getWebpImage(url, {
      *   fw: 600
      * }) 
      * ```
    **/

  }, {
    key: "getWebpImage",
    value: function getWebpImage(url, config) {
      var mime = new Mime();
      var mimeType = mime.lookup(url);
      url += '!';

      if (this.isSupportWebp()) {
        if (mimeType === 'image/jpeg') {
          url += '/format/webp';
        } else {
          url += '/format/webp/lossless/true';
        }
      }

      for (var _i = 0, _Object$entries = Object.entries(config); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        url += "/".concat(key, "/").concat(value);
      }

      return url;
    }
  }]);

  return ImageService;
}();

var defaultOption = {
  maxSpeed: 10,
  minSpeed: 3,
  spaceRatio: 20,
  danmakuLength: 5
};
var dep = {};
/**
 * @description 作用：弹幕/走马灯服务
 * @field 2021/01/13
 * @param el {HTMLElement} 元素节点
 * @param data {Array} 弹幕数据
 * @param option {object} maxSpeed {number} 最大速度, minSpeed {number} 最小速度, spaceRatio {number} 弹幕行走曲率半径, danmakuLength {number} 同时行走的弹幕数量 
 * 
 * @example
 * ```js
 * <section ref="danmaku" class="Danmaku"></section>
 * 
 * mounted() {
 *  setTimeout(() => {
 *    this.$nextTick(() => {
 *     let danmakuData = [].concat(this.danmakuData);
 *    console.log('danmakuData>>>', danmakuData);
 *      this.danmaku = new Danmaku(this.$refs.danmaku, danmakuData, {
 *         maxSpeed: 10,
 *         minSpeed: 5,
 *         spaceRatio: 0,
 *         danmakuLength: 1
 *       });
 *       this.danmaku.on("nodata", () => {
 *         this.danmaku.appendData([].concat(this.danmakuData));
 *       });
 *     })
 *   }, 3000)
 * }
 * ```
 */

var DanmuService = /*#__PURE__*/function () {
  function DanmuService(el) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, DanmuService);

    if (_typeof(el) !== 'object') throw new Error('传入非法el');
    if (!data.length) return console.log('没有需要滚动的弹幕');
    this.option = Object.assign(defaultOption, option);
    var danmakuLength = this.option.danmakuLength;
    var elSize = el.getBoundingClientRect();
    this.$el = el;
    this.elWidth = elSize.width;
    this.elHeight = elSize.height;
    this.data = data;
    this.danmaku = data.splice(0, danmakuLength);
    this.aliveItems = [];
    this.deatdItems = [];
    this.init();
  }

  _createClass(DanmuService, [{
    key: "init",
    value: function init() {
      while (this.danmaku.length) {
        var danmakuData = this.danmaku.shift();
        var dom = this.createDom(danmakuData);
        this.aliveItems.push(dom);
        this.$el.appendChild(dom);
        this.setDomPosition(dom);
        this.setDomSpeed(dom);
      }

      this.animationTimer();
    }
  }, {
    key: "createDom",
    value: function createDom(danmakuData) {
      var wrap = document.createElement('div');
      var dom = document.createElement('div');
      var img = document.createElement('img');
      img.src = danmakuData.faceUrl;
      dom.innerHTML = danmakuData.title;
      wrap.appendChild(img);
      wrap.appendChild(dom);
      return wrap;
    }
  }, {
    key: "setDomPosition",
    value: function setDomPosition(dom) {
      Math.random() > 0.5 ? dom.setAttribute('class', 'danmaku-item one') : dom.setAttribute('class', 'danmaku-item two');
      var domSize = dom.getBoundingClientRect(); // let domWidth = domSize.width;

      var domHeight = domSize.height;
      var spaceRatio = this.option.spaceRatio;
      var danmakuSpace = parseInt(Math.random() * ((this.elHeight - domHeight) / spaceRatio));
      var domTop = danmakuSpace * spaceRatio; // if(this.checkOverlap(domTop)) return this.setDomPosition(dom)

      dom.style = "top: ".concat(domTop, "px;transform: translateX(").concat(this.elWidth + 50, "px)");
    }
  }, {
    key: "setDomSpeed",
    value: function setDomSpeed(dom) {
      var _this$option = this.option,
          maxSpeed = _this$option.maxSpeed,
          minSpeed = _this$option.minSpeed;
      var second = parseInt(Math.random() * (maxSpeed - minSpeed) + minSpeed);
      var speed = (this.elWidth / (second * 60)).toFixed(3); // console.log('speed>>>', speed, this.elWidth)

      dom.setAttribute('data-speed', speed);
    }
  }, {
    key: "animationTimer",
    value: function animationTimer() {
      var _this = this;

      window.requestAnimationFrame(function () {
        for (var i = 0; i < _this.aliveItems.length; i++) {
          var dom = _this.aliveItems[i];
          var domSpeed = dom.getAttribute('data-speed');
          var domLeft = dom.getBoundingClientRect().left;
          var domWidth = dom.getBoundingClientRect().width;
          dom.style.transform = "translateX(".concat(domLeft - domSpeed, "px)");

          if (domLeft < -domWidth) {
            var _this$deatdItems;

            (_this$deatdItems = _this.deatdItems).push.apply(_this$deatdItems, _toConsumableArray(_this.aliveItems.splice(i, 1)));

            _this.notifyAddDom();

            i--;
          }
        }

        _this.animationTimer();
      });
    }
  }, {
    key: "checkOverlap",
    value: function checkOverlap(domTop) {
      var _iterator = _createForOfIteratorHelper(this.aliveItems),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var itemSize = item.getBoundingClientRect();
          var top = itemSize.top;
          var height = itemSize.height;
          console.log(Math.abs(domTop - top) < height);
          if (Math.abs(domTop - top) < height) return true;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
  }, {
    key: "notifyAddDom",
    value: function notifyAddDom() {
      if (!this.data.length) {
        return this.emit('nodata');
      }

      var danmakuData = this.data.shift();
      var dom = this.deatdItems.shift();
      var container = dom.querySelector('div');
      var imgDom = dom.querySelector('img');
      container.innerHTML = danmakuData.title;
      imgDom.src = danmakuData.faceUrl;
      this.aliveItems.push(dom);
      this.setDomPosition(dom);
      this.setDomSpeed(dom);
    }
    /**
    * @description 作用：监听事件
    * @param envet {string} 事件
    * @param fn {Function} 函数
    */

  }, {
    key: "on",
    value: function on(event, fn) {
      dep[event] = fn;
    }
  }, {
    key: "emit",
    value: function emit(event) {
      dep[event]();
    }
    /**
    * @description 作用：往后推入弹幕数据
    * @param newdatas {Array} 弹幕数据
    */

  }, {
    key: "appendData",
    value: function appendData(newdatas) {
      this.data = newdatas;
      this.notifyAddDom();
    }
  }]);

  return DanmuService;
}();

/**
 * @description 作用：数组扩展方法
 * @field 2021/01/13
 */
var ArrayFn = /*#__PURE__*/function () {
  function ArrayFn() {
    _classCallCheck(this, ArrayFn);
  }

  _createClass(ArrayFn, [{
    key: "sort",

    /**
    * @description 作用：数组排序方法
    * @param  arr {Array} 数组
    * @param  type {number} 1：从小到大   2：从大到小   3：随机
    * @return {Array}
    */
    value: function sort(arr) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return arr.sort(function (a, b) {
        switch (type) {
          case 1:
            return a - b;

          case 2:
            return b - a;

          case 3:
            return Math.random() - 0.5;

          default:
            return arr;
        }
      });
    }
    /**
    * @description 作用：数组去重方法
    * @param  arr {Array} 数组
    * @return {Array}
    */

  }, {
    key: "unique",
    value: function unique(arr) {
      if (Array.hasOwnProperty('from')) {
        return Array.from(new Set(arr));
      } else {
        var n = {},
            r = [];

        for (var i = 0; i < arr.length; i++) {
          if (!n[arr[i]]) {
            n[arr[i]] = true;
            r.push(arr[i]);
          }
        }

        return r;
      } // 注：上面 else 里面的排重并不能区分 2 和 '2'，但能减少用indexOf带来的性能

      /* 正确排重
      if ( Array.hasOwnProperty('from') ) {
          return Array.from(new Set(arr))
      }else{
          var r = [], NaNBol = true
          for(var i=0; i < arr.length; i++) {
              if (arr[i] !== arr[i]) {
                  if (NaNBol && r.indexOf(arr[i]) === -1) {
                      r.push(arr[i])
                      NaNBol = false
                  }
              }else{
                  if(r.indexOf(arr[i]) === -1) r.push(arr[i])
              }
          }
          return r
      }
        */

    }
    /**
    * @description 作用：求两个集合的并集
    * @param  a {Array} 数组
    * @param  b {Array} 数组
    * @return {Array}
    */

  }, {
    key: "union",
    value: function union(a, b) {
      var newArr = a.concat(b);
      return this.unique(newArr);
    }
    /**
    * @description 作用：求两个集合的交集
    * @param  a {Array} 数组
    * @param  b {Array} 数组
    * @return {Array}
    */

  }, {
    key: "intersect",
    value: function intersect(a, b) {
      a = this.unique(a);
      return a.map(function (o) {
        return b.includes(o) ? o : null;
      });
    }
    /**
    * @description 作用：删除其元素的第一个
    * @param  arr {Array} 数组
    * @param  ele {any} 删除的元素
    * @return {Array}
    */

  }, {
    key: "remove",
    value: function remove(arr, ele) {
      var index = arr.indexOf(ele);

      if (index > -1) {
        arr.splice(index, 1);
      }

      return arr;
    }
    /**
    * @description 作用：将类数组转换为数组的方法
    * @param  ary {Array} 数组
    * @return {Array}
    */

  }, {
    key: "formArray",
    value: function formArray(ary) {
      var arr = [];

      if (Array.isArray(ary)) {
        arr = ary;
      } else {
        arr = Array.prototype.slice.call(ary);
      }

      return arr;
    }
    /**
    * @description 作用：求数组最大值，仅适合数字数组
    * @param  ary {Array} 数组
    * @return {number} 
    */

  }, {
    key: "max",
    value: function max(arr) {
      return Math.max.apply(null, arr);
    }
    /**
    * @description 作用：求数组最小值，仅适合数字数组, 否则返回NaN
    * @param  ary {Array} 数组
    * @return {number} 
    */

  }, {
    key: "min",
    value: function min(arr) {
      return Math.min.apply(null, arr);
    }
    /**
    * @description 作用：求数组和，仅适合数字数组, 否则返回NaN
    * @param  ary {Array} 数组
    * @return {number} 
    */

  }, {
    key: "sum",
    value: function sum(arr) {
      return arr.reduce(function (pre, cur) {
        return pre + cur;
      });
    }
    /**
    * @description 作用：求数组和平均值，仅适合数字数组, 否则返回NaN
    * @param  ary {Array} 数组
    * @return {Array} 
    */

  }, {
    key: "average",
    value: function average(arr) {
      return this.sum(arr) / arr.length;
    }
  }]);

  return ArrayFn;
}();

/**
  * @description 作用：时间处理
  * @field 2021/01/15
**/
var TimeFn = /*#__PURE__*/function () {
  function TimeFn() {
    _classCallCheck(this, TimeFn);
  }

  _createClass(TimeFn, [{
    key: "getAge",

    /**
    * @description 作用：获取年龄
    * @param date {string} 1990/01/01 or 1990-01-01
    * @return {number}
    * 
    * @example
    * ```js
    * const timeFnInstance = new TimeFn(); 
    * timeFnInstance.getAge('1991-01-01') // 30
    * ```
    */
    value: function getAge(date) {
      var birthday = new Date(date);
      var d = new Date();
      var age = d.getFullYear() - birthday.getFullYear() - (d.getMonth() < birthday.getMonth() || d.getMonth() == birthday.getMonth() && d.getDate() < birthday.getDate() ? 1 : 0);
      return age;
    }
  }]);

  return TimeFn;
}();

/**
  * @description 作用：一些关于系统的处理
  * @field 2021/01/15
**/
var Os = /*#__PURE__*/function () {
  function Os() {
    _classCallCheck(this, Os);
  }

  _createClass(Os, [{
    key: "checkAppV1AndV2",

    /**
    * @description 作用：版本大小的判断
    * @param v1 {number} 
    * @param v2 {number}
    * @return {number} -1 v1小于v2 | 1 v1大于v2 | 0 v1等于v2
    *
    * @example
    * ```js
    * checkAppV1AndV2('5.14.3', '5.15.0')
    * ```
    **/
    value: function checkAppV1AndV2(v1, v2) {
      var _v1 = v1.split('.'),
          _v2 = v2.split('.'),
          _r = +_v1[0] - +_v2[0],
          flag = _r == 0 && v1 != v2 ? this.checkAppV1AndV2(_v1.splice(1).join('.'), _v2.splice(1).join('.')) : _r;

      return flag;
    }
    /**
      * @description 作用：是否大于目标版本
      * @param basic {string} 目标版本
      * @param target {string} 拿来比较的版本
      * @return {boolean} 
      *
      * @example
      * ```js
      * checkAppVersionIsOK('5.14.3', '5.15.0') 
      * ```
    **/

  }, {
    key: "checkAppVersionIsOK",
    value: function checkAppVersionIsOK(basic, target) {
      return !(this.checkAppV1AndV2(basic, target) > 0);
    }
    /**
      * @description 作用：判断是否是三星手机
      * @param sUserAgent {string} 
      * @return {boolean} user agent
      *
      * @example
      * ```js
      * isSamsung(sUserAgent)
      * ```
    **/

  }, {
    key: "isSamsung",
    value: function isSamsung(sUserAgent) {
      return sUserAgent.match(/sm-/i) == 'sm-';
    }
    /**
      * @description 作用：判断是否是苹果手机
      * @param sUserAgent {string} 
      * @return {boolean} user agent
      *
      * @example
      * ```js
      * isIPhone(sUserAgent)
      * ```
    **/

  }, {
    key: "isIPhone",
    value: function isIPhone(sUserAgent) {
      return sUserAgent.match(/iphone/i) == 'iphone';
    }
    /**
      * @description 作用：根据不同机型进行软件更新跳转
      * @param uaStr {string} user agent
      * @param window {window} window对象
      * @return {boolean} 
      *
      * @example
      * ```js 
      * if (softwareUpdate()) {
      *  softwareUpdate()
      * } else {
      *  Toast('当前手机不支持，请至应用市场更新');
      * }
      * ```
    **/

  }, {
    key: "softwareUpdate",
    value: function softwareUpdate(uaStr, window) {
      var ua = window.navigator ? window.navigator.userAgent.toLowerCase() : uaStr;
      var samsung = this.isSamsung(ua),
          iPhone = this.isIPhone(ua);

      if (samsung) {
        window.location.href = 'http://www.samsungapps.com/appquery/appDetail.as?appId=co.runner.app';
        return true;
      } else if (iPhone) {
        window.location.href = 'https://apps.apple.com/cn/app/yue-pao-quan-yue-pao-yue-xiang/id881766160?l=zh&ls=1&mt=8';
        return true;
      } else {
        window.location.href = 'https://frontend-app.thejoyrun.com/release/joyrun.apk';
        return true;
      }
    }
    /**
      * @description 作用：获取当前链接的域名
      * @param url {string} 链接
      * @return {string}
      *
      * @example
      * ```js
      * const imgUrl = 'https://joyrun-activity-upyun.thejoyrun.com/huodong/2020/09/run-challenge/assets/img/share.jpg';
      * getUrlHost(imgUrl) // https://joyrun-activity-upyun.thejoyrun.com/
      * ```
    **/

  }, {
    key: "getUrlHost",
    value: function getUrlHost(url) {
      var regx = /^http(s)?:\/\/(.*?)\//,
          urlHost = url.match(regx)[0];
      return urlHost;
    }
    /**
      * @description 作用：判断当前资源是否跨域
      * @param url {string} 资源的链接
      * @param baseUrl {string} 带本页面域名的链接
      * @return {boolean}
      *
      * @example
      * ```js
      * const imgUrl = 'https://joyrun-activity-upyun.thejoyrun.com/huodong/2020/09/run-challenge/assets/img/share.jpg';
      const baseUrl = 'https://joyrun-activity-upyun.thejoyrun.com/1111';
      * isCrossDomain(imgUrl, baseUrl) 
      * ```
    **/

  }, {
    key: "isCrossDomain",
    value: function isCrossDomain(url, baseUrl) {
      var urlHost = this.getUrlHost(url),
          baseUrlHost = this.getUrlHost(baseUrl);
      return urlHost === baseUrlHost;
    }
  }]);

  return Os;
}();

/**
  * @description 作用：本地缓存（localStorage和sessionStorage）
  * @field 2021/02/08
**/
var Storage = /*#__PURE__*/function () {
  function Storage(window) {
    _classCallCheck(this, Storage);

    this.ls = window.localStorage;
    this.ss = window.sessionStorage;
  }
  /**
  * @description 作用: 设置localStorage
  * @param key {any} 当key为对象时，不需要传val值
  * @param val {any} 非必须，缓存的值
  *
  * @example
  * ```js 
  * let storage = new Storage()
  * storage.setLocal({a: '111', b: '3333'})
  * storage.setLocal(1, 2)
  * ```
  **/


  _createClass(Storage, [{
    key: "setLocal",
    value: function setLocal(key, val) {
      var setting = arguments[0];

      if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
        for (var i in setting) {
          this.ls.setItem(i, JSON.stringify(setting[i]));
        }
      } else {
        this.ls.setItem(key, JSON.stringify(val));
      }
    }
    /**
    * @description 作用：获取某个key的localStorage
    * @param key {any} 键
    *
    * @example
    * ```js 
    * storage.getLocal(1) // 2
    * ```
    **/

  }, {
    key: "getLocal",
    value: function getLocal(key) {
      if (key) return JSON.parse(this.ls.getItem(key));
      return null;
    }
    /**
    * @description 作用：删除某个key的localStorage
    * @param key {any} 键
    *
    * @example
    * ```js 
    * storage.removeLocal(2) 
    * ```
    **/

  }, {
    key: "removeLocal",
    value: function removeLocal(key) {
      this.ls.removeItem(key);
    }
    /**
    * @description 作用：移除所有localStorage
    *
    * @example
    * ```js 
    * storage.clearLocal() 
    * ```
    **/

  }, {
    key: "clearLocal",
    value: function clearLocal() {
      this.ls.clear();
    }
    /**
    * @description 作用: sessionStorage
    * @param key {any} 当key为对象时，不需要传val值
    * @param val {any} 非必须，缓存的值
    *
    * @example
    * ```js 
    * let storage = new Storage()
    * storage.setSession({a: '111', b: '3333'})
    * storage.setSession(1, 2)
    * ```
    **/

  }, {
    key: "setSession",
    value: function setSession(key, val) {
      var setting = arguments[0];

      if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
        for (var i in setting) {
          this.ss.setItem(i, JSON.stringify(setting[i]));
        }
      } else {
        this.ss.setItem(key, JSON.stringify(val));
      }
    }
    /**
    * @description 作用：获取某个key的sessionStorage
    * @param key {any} 键
    *
    * @example
    * ```js 
    * storage.getSession(1) // 2
    * ```
    **/

  }, {
    key: "getSession",
    value: function getSession(key) {
      if (key) return JSON.parse(this.ss.getItem(key));
      return null;
    }
    /**
    * @description 作用：删除某个key的sessionStorage
    * @param key {any} 键
    *
    * @example
    * ```js 
    * storage.removeSession(2) 
    * ```
    **/

  }, {
    key: "removeSession",
    value: function removeSession(key) {
      this.ss.removeItem(key);
    }
    /**
    * @description 作用：移除所有sessionStorage
    *
    * @example
    * ```js 
    * storage.clearSession() 
    * ```
    **/

  }, {
    key: "clearSession",
    value: function clearSession() {
      this.ss.clear();
    }
  }]);

  return Storage;
}();

/**
  * @description 作用：一些关于业务的处理
  * @field 2021/01/15
**/
var Service = /*#__PURE__*/function () {
  function Service() {
    _classCallCheck(this, Service);
  }

  _createClass(Service, [{
    key: "getUid",

    /**
    * @description 作用：获取用户uid
    * @param ypcookie {string} 用户的ypcookie
    * @return {string}
    *
    * @example
    * ```js 
    * import Cookies from 'js-cookie'
    * or <script src="//joyrun-activity-upyun.thejoyrun.com/common/js/js.cookie.js"></script>
    * 
    * const uid = getUid(Cookies.get('ypcookie'))
    * ```
    **/
    value: function getUid(ypcookie) {
      if (ypcookie) {
        return decodeURIComponent(ypcookie).match(/uid=\d+/)[0].split('=')[1];
      }

      throw new TypeError('请传入ypcookie');
    }
  }]);

  return Service;
}();

/**
 * @description 作用：注入库的链接
 * @param url {string} 库的链接
 * @param fn {function} 回调函数
 *
 * @example
 * ```js
 * utils.injectScript(
 *    "https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/vConsole/3.4.0/vconsole.min.js",
 *   () => new VConsole()
 * )
 * ```
 * 
 **/
var injectScript = function injectScript(url, fn) {
  var script = document.createElement('script');
  script.src = url;
  script.async = true;

  script.onload = function () {
    fn && fn();
  };

  document.body.appendChild(script);
};

var utils = {
  injectScript: injectScript
};

var index = {
  ImageService: ImageService,
  DanmuService: DanmuService,
  ArrayFn: ArrayFn,
  TimeFn: TimeFn,
  Os: Os,
  Mime: Mime,
  Storage: Storage,
  Service: Service,
  utils: utils
};

export default index;
export { ImageService, DanmuService, ArrayFn, TimeFn, Os, Mime, Storage, Service, utils };
