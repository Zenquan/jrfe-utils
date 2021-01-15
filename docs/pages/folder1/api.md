## Classes

<dl>
<dt><a href="#ArrayFn">ArrayFn</a></dt>
<dd></dd>
<dt><a href="#DanmuService">DanmuService</a></dt>
<dd></dd>
<dt><a href="#ImageService">ImageService</a></dt>
<dd></dd>
<dt><a href="#TimeFn">TimeFn</a></dt>
<dd></dd>
</dl>

<a name="ArrayFn"></a>

## ArrayFn
**Kind**: global class  
**Field**: 2021/01/13  
**Author**: Zenquan  

* [ArrayFn](#ArrayFn)
    * [new ArrayFn()](#new_ArrayFn_new)
    * [.sort(arr, type)](#ArrayFn+sort) ⇒ <code>Array</code>
    * [.unique(arr)](#ArrayFn+unique) ⇒ <code>Array</code>
    * [.union(a, b)](#ArrayFn+union) ⇒ <code>Array</code>
    * [.intersect(a, b)](#ArrayFn+intersect) ⇒ <code>Array</code>
    * [.remove(arr, ele)](#ArrayFn+remove) ⇒ <code>Array</code>
    * [.formArray(ary)](#ArrayFn+formArray) ⇒ <code>Array</code>
    * [.max(ary)](#ArrayFn+max) ⇒ <code>number</code>
    * [.min(ary)](#ArrayFn+min) ⇒ <code>number</code>
    * [.sum(ary)](#ArrayFn+sum) ⇒ <code>number</code>
    * [.average(ary)](#ArrayFn+average) ⇒ <code>number</code>

<a name="new_ArrayFn_new"></a>

### new ArrayFn()
作用：数组扩展方法

<a name="ArrayFn+sort"></a>

### arrayFn.sort(arr, type) ⇒ <code>Array</code>
作用：数组排序方法

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| arr | <code>Array</code> |  | 数组 |
| type | <code>number</code> | <code>1</code> | 1：从小到大   2：从大到小   3：随机 |

<a name="ArrayFn+unique"></a>

### arrayFn.unique(arr) ⇒ <code>Array</code>
作用：数组去重方法

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | 数组 |

<a name="ArrayFn+union"></a>

### arrayFn.union(a, b) ⇒ <code>Array</code>
作用：求两个集合的并集

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array</code> | 数组 |
| b | <code>Array</code> | 数组 |

<a name="ArrayFn+intersect"></a>

### arrayFn.intersect(a, b) ⇒ <code>Array</code>
作用：求两个集合的交集

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array</code> | 数组 |
| b | <code>Array</code> | 数组 |

<a name="ArrayFn+remove"></a>

### arrayFn.remove(arr, ele) ⇒ <code>Array</code>
作用：删除其中一个元素

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | 数组 |
| ele | <code>number</code> | 删除的元素索引 |

<a name="ArrayFn+formArray"></a>

### arrayFn.formArray(ary) ⇒ <code>Array</code>
作用：将类数组转换为数组的方法

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type | Description |
| --- | --- | --- |
| ary | <code>Array</code> | 数组 |

<a name="ArrayFn+max"></a>

### arrayFn.max(ary) ⇒ <code>number</code>
作用：求数组最大值，仅适合数字数组

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type | Description |
| --- | --- | --- |
| ary | <code>Array</code> | 数组 |

<a name="ArrayFn+min"></a>

### arrayFn.min(ary) ⇒ <code>number</code>
作用：求数组最小值，仅适合数字数组, 否则返回NaN

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type | Description |
| --- | --- | --- |
| ary | <code>Array</code> | 数组 |

<a name="ArrayFn+sum"></a>

### arrayFn.sum(ary) ⇒ <code>number</code>
作用：求数组和，仅适合数字数组, 否则返回NaN

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type | Description |
| --- | --- | --- |
| ary | <code>Array</code> | 数组 |

<a name="ArrayFn+average"></a>

### arrayFn.average(ary) ⇒ <code>number</code>
作用：求数组平均值，仅适合数字数组, 否则返回NaN

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type | Description |
| --- | --- | --- |
| ary | <code>Array</code> | 数组 |

<a name="DanmuService"></a>

## DanmuService
**Kind**: global class  
**Field**: 2021/01/13  
**Author**: Zenquan  

* [DanmuService](#DanmuService)
    * [new DanmuService(el, data, option)](#new_DanmuService_new)
    * [.on(envet, fn)](#DanmuService+on)
    * [.appendData(newdatas)](#DanmuService+appendData)

<a name="new_DanmuService_new"></a>

### new DanmuService(el, data, option)
作用：弹幕/走马灯服务


| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | 元素节点 |
| data | <code>Array</code> | 弹幕数据 |
| option | <code>object</code> | maxSpeed {number} 最大速度, minSpeed {number} 最小速度, spaceRatio {number} 弹幕行走曲率半径, danmakuLength {number} 同时行走的弹幕数量 |

**Example**  
```js
<section ref="danmaku" class="Danmaku"></section>

mounted() {
 setTimeout(() => {
   this.$nextTick(() => {
    let danmakuData = [].concat(this.danmakuData);
   console.log('danmakuData>>>', danmakuData);
     this.danmaku = new Danmaku(this.$refs.danmaku, danmakuData, {
        maxSpeed: 10,
        minSpeed: 5,
        spaceRatio: 0,
        danmakuLength: 1
      });
      this.danmaku.on("nodata", () => {
        this.danmaku.appendData([].concat(this.danmakuData));
      });
    })
  }, 3000)
}
```
<a name="DanmuService+on"></a>

### danmuService.on(envet, fn)
作用：监听事件

**Kind**: instance method of [<code>DanmuService</code>](#DanmuService)  

| Param | Type | Description |
| --- | --- | --- |
| envet | <code>string</code> | 事件 |
| fn | <code>function</code> | 函数 |

<a name="DanmuService+appendData"></a>

### danmuService.appendData(newdatas)
作用：往后推入弹幕数据

**Kind**: instance method of [<code>DanmuService</code>](#DanmuService)  

| Param | Type | Description |
| --- | --- | --- |
| newdatas | <code>Array</code> | 弹幕数据 |

<a name="ImageService"></a>

## ImageService
**Kind**: global class  
**Field**: 2021/01/13  
**Author**: Zenquan  

* [ImageService](#ImageService)
    * [new ImageService()](#new_ImageService_new)
    * [.getRemotePic(url, imgClass, type)](#ImageService+getRemotePic) ⇒ <code>Promise</code>

<a name="new_ImageService_new"></a>

### new ImageService()
作用：图片处理服务

<a name="ImageService+getRemotePic"></a>

### imageService.getRemotePic(url, imgClass, type) ⇒ <code>Promise</code>
作用：获取远程图片，解决例如html2canvas中跨域的问题

**Kind**: instance method of [<code>ImageService</code>](#ImageService)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 远程图片的链接 |
| imgClass | <code>string</code> | 获取到图片展示的样式 |
| type | <code>&#x27;base64&#x27;</code> \| <code>&#x27;img&#x27;</code> | 决定返回值是url还是base64 |

**Example**  
```js
const { ImageService } = window['jrfe-utils'];
const imageService = new ImageService();
const getAvatar = async () => {
 const avatarUrl =
 'https://joyrun-activity-upyun.thejoyrun.com/huodong/2020/09/run-challenge/assets/img/share.jpg',
  res1 = await imageService.getRemotePic(avatarUrl, 'avatar', 'base64'),
  res2 = await imageService.getRemotePic(avatarUrl, 'avatar', 'img')
  console.log('avatar>>>', res1, res2); 
  document.body.appendChild(res2)
}
```
<a name="TimeFn"></a>

## TimeFn
**Kind**: global class  
**Author**: Zenquan  

* [TimeFn](#TimeFn)
    * [new TimeFn()](#new_TimeFn_new)
    * [.getAge(date)](#TimeFn+getAge) ⇒ <code>number</code>

<a name="new_TimeFn_new"></a>

### new TimeFn()
作用：时间处理

<a name="TimeFn+getAge"></a>

### timeFn.getAge(date) ⇒ <code>number</code>
作用：获取年龄

**Kind**: instance method of [<code>TimeFn</code>](#TimeFn)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | 1990/01/01 or 1990-01-01 |

