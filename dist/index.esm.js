/*!
 * @jomsou/utils 0.1.1 (https://github.com/zenquan/jrfe-utils)
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
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

/**
 * @author Zenquan
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
 * @author Zenquan
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
 * @author Zenquan
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
      var _this = this;

      a = this.unique(a);
      return this.map(a, function (o) {
        return _this.contains(b, o) ? o : null;
      });
    }
    /**
    * @description 作用：删除其中一个元素
    * @param  arr {Array} 数组
    * @param  ele {number} 删除的元素索引
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
    * @description 作用：求数组平均值，仅适合数字数组, 否则返回NaN
    * @param  ary {Array} 数组
    * @return {number} 
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
 *  @author Zenquan
  * @description 作用：时间处理
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

var index = {
  ImageService: ImageService,
  DanmuService: DanmuService,
  ArrayFn: ArrayFn,
  TimeFn: TimeFn
};

export default index;
export { ImageService, DanmuService, ArrayFn, TimeFn };
