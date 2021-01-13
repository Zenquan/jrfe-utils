## Classes

<dl>
<dt><a href="#ArrayFn">ArrayFn</a></dt>
<dd></dd>
<dt><a href="#DanmuService">DanmuService</a></dt>
<dd></dd>
<dt><a href="#ImageService">ImageService</a></dt>
<dd></dd>
</dl>

<a name="ArrayFn"></a>

## ArrayFn
**Kind**: global class  
**Field**: 2021/01/13  
**Author**: Zenquan  

* [ArrayFn](#ArrayFn)
    * [new ArrayFn()](#new_ArrayFn_new)
    * [.each(数组, 回调函数)](#ArrayFn+each) ⇒ <code>undefined</code>
    * [.map(数组, 回调函数, this指向)](#ArrayFn+map) ⇒ <code>Array</code>
    * [.sort(数组, 1：从小到大)](#ArrayFn+sort) ⇒ <code>Array</code>

<a name="new_ArrayFn_new"></a>

### new ArrayFn()
作用：数组扩展方法

<a name="ArrayFn+each"></a>

### arrayFn.each(数组, 回调函数) ⇒ <code>undefined</code>
**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type |
| --- | --- |
| 数组 | <code>arr</code> | 
| 回调函数 | <code>fn</code> | 

<a name="ArrayFn+map"></a>

### arrayFn.map(数组, 回调函数, this指向) ⇒ <code>Array</code>
**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type |
| --- | --- |
| 数组 | <code>arr</code> | 
| 回调函数 | <code>fn</code> | 
| this指向 | <code>thisObj</code> | 

<a name="ArrayFn+sort"></a>

### arrayFn.sort(数组, 1：从小到大) ⇒ <code>Array</code>
**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type | Description |
| --- | --- | --- |
| 数组 | <code>arr</code> |  |
| 1：从小到大 | <code>type</code> | 2：从大到小   3：随机 |

<a name="DanmuService"></a>

## DanmuService
**Kind**: global class  
**Date**: 2021/01/13  
**Author**: Zenquan  

* [DanmuService](#DanmuService)
    * [new DanmuService()](#new_DanmuService_new)
    * [.on(envet, fn)](#DanmuService+on)
    * [.appendData(newdatas)](#DanmuService+appendData)

<a name="new_DanmuService_new"></a>

### new DanmuService()
作用：弹幕/走马灯服务

<a name="DanmuService+on"></a>

### danmuService.on(envet, fn)
作用：监听事件

**Kind**: instance method of [<code>DanmuService</code>](#DanmuService)  

| Param | Description |
| --- | --- |
| envet | 事件 |
| fn | 函数 |

<a name="DanmuService+appendData"></a>

### danmuService.appendData(newdatas)
作用：往后推入弹幕数据

**Kind**: instance method of [<code>DanmuService</code>](#DanmuService)  

| Param | Description |
| --- | --- |
| newdatas | 弹幕数据 |

<a name="ImageService"></a>

## ImageService
**Kind**: global class  
**Field**: 2021/01/13  
**Author**: Zenquan  

* [ImageService](#ImageService)
    * [new ImageService()](#new_ImageService_new)
    * [.getRemotePic(url, imgClass, type)](#ImageService+getRemotePic) ⇒

<a name="new_ImageService_new"></a>

### new ImageService()
作用：图片处理服务

<a name="ImageService+getRemotePic"></a>

### imageService.getRemotePic(url, imgClass, type) ⇒
作用：获取远程图片，解决例如html2canvas中跨域的问题

**Kind**: instance method of [<code>ImageService</code>](#ImageService)  
**Returns**: Promise<string>  

| Param | Description |
| --- | --- |
| url | 远程图片的链接 |
| imgClass | 获取到图片展示的样式 |
| type | 'base64' | 'img' 决定返回值是url还是base64 |

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
