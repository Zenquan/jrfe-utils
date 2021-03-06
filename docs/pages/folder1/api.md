## Classes

<dl>
<dt><a href="#ArrayFn">ArrayFn</a></dt>
<dd></dd>
<dt><a href="#DanmuService">DanmuService</a></dt>
<dd></dd>
<dt><a href="#ImageService">ImageService</a></dt>
<dd></dd>
<dt><a href="#Mime">Mime</a></dt>
<dd></dd>
<dt><a href="#Os">Os</a></dt>
<dd></dd>
<dt><a href="#Service">Service</a></dt>
<dd></dd>
<dt><a href="#Storage">Storage</a></dt>
<dd></dd>
<dt><a href="#TimeFn">TimeFn</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#injectScript">injectScript(url, fn)</a></dt>
<dd><p>作用：注入库的链接</p>
</dd>
</dl>

<a name="ArrayFn"></a>

## ArrayFn
**Kind**: global class  
**Field**: 2021/01/13  

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
    * [.average(ary)](#ArrayFn+average) ⇒ <code>Array</code>

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
作用：删除其元素的第一个

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | 数组 |
| ele | <code>any</code> | 删除的元素 |

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

### arrayFn.average(ary) ⇒ <code>Array</code>
作用：求数组和平均值，仅适合数字数组, 否则返回NaN

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type | Description |
| --- | --- | --- |
| ary | <code>Array</code> | 数组 |

<a name="DanmuService"></a>

## DanmuService
**Kind**: global class  
**Field**: 2021/01/13  

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

* [ImageService](#ImageService)
    * [new ImageService()](#new_ImageService_new)
    * [.getRemotePic(url, imgClass, type)](#ImageService+getRemotePic) ⇒ <code>Promise</code>
    * [.isSupportWebp()](#ImageService+isSupportWebp) ⇒ <code>boolean</code>
    * [.getWebpImage(url, config)](#ImageService+getWebpImage) ⇒ <code>string</code>

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
<a name="ImageService+isSupportWebp"></a>

### imageService.isSupportWebp() ⇒ <code>boolean</code>
作用：判断是否支持webp格式

**Kind**: instance method of [<code>ImageService</code>](#ImageService)  
**Example**  
```js
const supportWebp = imageService.isSupportWebp(); // true or false
```
<a name="ImageService+getWebpImage"></a>

### imageService.getWebpImage(url, config) ⇒ <code>string</code>
作用：将又拍云图片改成webp格式

**Kind**: instance method of [<code>ImageService</code>](#ImageService)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 图片又拍云地址 |
| config | <code>object</code> | 配置 详情见 https://help.upyun.com/knowledge-base/image/ |

**Example**  
```js
getWebpImage(url, {
  fw: 600
}) 
```
<a name="Mime"></a>

## Mime
**Kind**: global class  
**Field**: 2021/01/16  

* [Mime](#Mime)
    * [new Mime()](#new_Mime_new)
    * [.lookup(url)](#Mime+lookup)

<a name="new_Mime_new"></a>

### new Mime()
作用：媒体类型的处理

<a name="Mime+lookup"></a>

### mime.lookup(url)
作用：媒体类型的判断

**Kind**: instance method of [<code>Mime</code>](#Mime)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 图片的链接 |

**Example**  
```js
const shareUrl = 'https://joyrun-activity-upyun.thejoyrun.com/huodong/2020/09/run-challenge/assets/img/share.jpg'
const mimeInstance = new Mime();
mimeInstance.lookup(shareUrl) // 'image/jpg'
```
<a name="Os"></a>

## Os
**Kind**: global class  
**Field**: 2021/01/15  

* [Os](#Os)
    * [new Os()](#new_Os_new)
    * [.checkAppV1AndV2(v1, v2)](#Os+checkAppV1AndV2) ⇒ <code>number</code>
    * [.checkAppVersionIsOK(basic, target)](#Os+checkAppVersionIsOK) ⇒ <code>boolean</code>
    * [.isSamsung(sUserAgent)](#Os+isSamsung) ⇒ <code>boolean</code>
    * [.isIPhone(sUserAgent)](#Os+isIPhone) ⇒ <code>boolean</code>
    * [.softwareUpdate(uaStr, window)](#Os+softwareUpdate) ⇒ <code>boolean</code>
    * [.getUrlHost(url)](#Os+getUrlHost) ⇒ <code>string</code>
    * [.isCrossDomain(url, baseUrl)](#Os+isCrossDomain) ⇒ <code>boolean</code>

<a name="new_Os_new"></a>

### new Os()
作用：一些关于系统的处理

<a name="Os+checkAppV1AndV2"></a>

### os.checkAppV1AndV2(v1, v2) ⇒ <code>number</code>
作用：版本大小的判断

**Kind**: instance method of [<code>Os</code>](#Os)  
**Returns**: <code>number</code> - -1 v1小于v2 | 1 v1大于v2 | 0 v1等于v2  

| Param | Type |
| --- | --- |
| v1 | <code>number</code> | 
| v2 | <code>number</code> | 

**Example**  
```js
checkAppV1AndV2('5.14.3', '5.15.0')
```
<a name="Os+checkAppVersionIsOK"></a>

### os.checkAppVersionIsOK(basic, target) ⇒ <code>boolean</code>
作用：是否大于目标版本

**Kind**: instance method of [<code>Os</code>](#Os)  

| Param | Type | Description |
| --- | --- | --- |
| basic | <code>string</code> | 目标版本 |
| target | <code>string</code> | 拿来比较的版本 |

**Example**  
```js
checkAppVersionIsOK('5.14.3', '5.15.0') 
```
<a name="Os+isSamsung"></a>

### os.isSamsung(sUserAgent) ⇒ <code>boolean</code>
作用：判断是否是三星手机

**Kind**: instance method of [<code>Os</code>](#Os)  
**Returns**: <code>boolean</code> - user agent  

| Param | Type |
| --- | --- |
| sUserAgent | <code>string</code> | 

**Example**  
```js
isSamsung(sUserAgent)
```
<a name="Os+isIPhone"></a>

### os.isIPhone(sUserAgent) ⇒ <code>boolean</code>
作用：判断是否是苹果手机

**Kind**: instance method of [<code>Os</code>](#Os)  
**Returns**: <code>boolean</code> - user agent  

| Param | Type |
| --- | --- |
| sUserAgent | <code>string</code> | 

**Example**  
```js
isIPhone(sUserAgent)
```
<a name="Os+softwareUpdate"></a>

### os.softwareUpdate(uaStr, window) ⇒ <code>boolean</code>
作用：根据不同机型进行软件更新跳转

**Kind**: instance method of [<code>Os</code>](#Os)  

| Param | Type | Description |
| --- | --- | --- |
| uaStr | <code>string</code> | user agent |
| window | <code>window</code> | window对象 |

**Example**  
```js 
if (softwareUpdate()) {
 softwareUpdate()
} else {
 Toast('当前手机不支持，请至应用市场更新');
}
```
<a name="Os+getUrlHost"></a>

### os.getUrlHost(url) ⇒ <code>string</code>
作用：获取当前链接的域名

**Kind**: instance method of [<code>Os</code>](#Os)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 链接 |

**Example**  
```js
const imgUrl = 'https://joyrun-activity-upyun.thejoyrun.com/huodong/2020/09/run-challenge/assets/img/share.jpg';
getUrlHost(imgUrl) // https://joyrun-activity-upyun.thejoyrun.com/
```
<a name="Os+isCrossDomain"></a>

### os.isCrossDomain(url, baseUrl) ⇒ <code>boolean</code>
作用：判断当前资源是否跨域

**Kind**: instance method of [<code>Os</code>](#Os)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 资源的链接 |
| baseUrl | <code>string</code> | 带本页面域名的链接 |

**Example**  
```js
const imgUrl = 'https://joyrun-activity-upyun.thejoyrun.com/huodong/2020/09/run-challenge/assets/img/share.jpg';
      const baseUrl = 'https://joyrun-activity-upyun.thejoyrun.com/1111';
isCrossDomain(imgUrl, baseUrl) 
```
<a name="Service"></a>

## Service
**Kind**: global class  
**Field**: 2021/01/15  

* [Service](#Service)
    * [new Service()](#new_Service_new)
    * [.getUid(ypcookie)](#Service+getUid) ⇒ <code>string</code>

<a name="new_Service_new"></a>

### new Service()
作用：一些关于业务的处理

<a name="Service+getUid"></a>

### service.getUid(ypcookie) ⇒ <code>string</code>
作用：获取用户uid

**Kind**: instance method of [<code>Service</code>](#Service)  

| Param | Type | Description |
| --- | --- | --- |
| ypcookie | <code>string</code> | 用户的ypcookie |

**Example**  
```js 
import Cookies from 'js-cookie'
or <script src="//joyrun-activity-upyun.thejoyrun.com/common/js/js.cookie.js"></script>

const uid = getUid(Cookies.get('ypcookie'))
```
<a name="Storage"></a>

## Storage
**Kind**: global class  
**Field**: 2021/02/08  

* [Storage](#Storage)
    * [new Storage()](#new_Storage_new)
    * [.setLocal(key, val)](#Storage+setLocal)
    * [.getLocal(key)](#Storage+getLocal)
    * [.removeLocal(key)](#Storage+removeLocal)
    * [.clearLocal()](#Storage+clearLocal)
    * [.setSession(key, val)](#Storage+setSession)
    * [.getSession(key)](#Storage+getSession)
    * [.removeSession(key)](#Storage+removeSession)
    * [.clearSession()](#Storage+clearSession)

<a name="new_Storage_new"></a>

### new Storage()
作用：本地缓存（localStorage和sessionStorage）

<a name="Storage+setLocal"></a>

### storage.setLocal(key, val)
作用: 设置localStorage

**Kind**: instance method of [<code>Storage</code>](#Storage)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>any</code> | 当key为对象时，不需要传val值 |
| val | <code>any</code> | 非必须，缓存的值 |

**Example**  
```js 
let storage = new Storage()
storage.setLocal({a: '111', b: '3333'})
storage.setLocal(1, 2)
```
<a name="Storage+getLocal"></a>

### storage.getLocal(key)
作用：获取某个key的localStorage

**Kind**: instance method of [<code>Storage</code>](#Storage)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>any</code> | 键 |

**Example**  
```js 
storage.getLocal(1) // 2
```
<a name="Storage+removeLocal"></a>

### storage.removeLocal(key)
作用：删除某个key的localStorage

**Kind**: instance method of [<code>Storage</code>](#Storage)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>any</code> | 键 |

**Example**  
```js 
storage.removeLocal(2) 
```
<a name="Storage+clearLocal"></a>

### storage.clearLocal()
作用：移除所有localStorage

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Example**  
```js 
storage.clearLocal() 
```
<a name="Storage+setSession"></a>

### storage.setSession(key, val)
作用: sessionStorage

**Kind**: instance method of [<code>Storage</code>](#Storage)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>any</code> | 当key为对象时，不需要传val值 |
| val | <code>any</code> | 非必须，缓存的值 |

**Example**  
```js 
let storage = new Storage()
storage.setSession({a: '111', b: '3333'})
storage.setSession(1, 2)
```
<a name="Storage+getSession"></a>

### storage.getSession(key)
作用：获取某个key的sessionStorage

**Kind**: instance method of [<code>Storage</code>](#Storage)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>any</code> | 键 |

**Example**  
```js 
storage.getSession(1) // 2
```
<a name="Storage+removeSession"></a>

### storage.removeSession(key)
作用：删除某个key的sessionStorage

**Kind**: instance method of [<code>Storage</code>](#Storage)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>any</code> | 键 |

**Example**  
```js 
storage.removeSession(2) 
```
<a name="Storage+clearSession"></a>

### storage.clearSession()
作用：移除所有sessionStorage

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Example**  
```js 
storage.clearSession() 
```
<a name="TimeFn"></a>

## TimeFn
**Kind**: global class  
**Field**: 2021/01/15  

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

**Example**  
```js
const timeFnInstance = new TimeFn(); 
timeFnInstance.getAge('1991-01-01') // 30
```
<a name="injectScript"></a>

## injectScript(url, fn)
作用：注入库的链接

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 库的链接 |
| fn | <code>function</code> | 回调函数 |

**Example**  
```js
utils.injectScript(
   "https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/vConsole/3.4.0/vconsole.min.js",
  () => new VConsole()
)
```
