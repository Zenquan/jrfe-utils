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
    * [.sort(数组, 1：从小到大)](#ArrayFn+sort) ⇒ <code>Array</code>
    * [.unique(数组)](#ArrayFn+unique) ⇒ <code>Array</code>
    * [.union(数组, 数组)](#ArrayFn+union) ⇒ <code>Array</code>
    * [.intersect(数组, 数组)](#ArrayFn+intersect) ⇒ <code>Array</code>
    * [.remove(数组, 删除的元素索引)](#ArrayFn+remove) ⇒ <code>Array</code>
    * [.formArray(数组)](#ArrayFn+formArray) ⇒ <code>Array</code>
    * [.max(数组)](#ArrayFn+max) ⇒ <code>number</code>
    * [.min(数组)](#ArrayFn+min) ⇒ <code>number</code>
    * [.sum(数组)](#ArrayFn+sum) ⇒ <code>number</code>
    * [.average(数组)](#ArrayFn+average) ⇒ <code>number</code>

<a name="new_ArrayFn_new"></a>

### new ArrayFn()
作用：数组扩展方法

<a name="ArrayFn+sort"></a>

### arrayFn.sort(数组, 1：从小到大) ⇒ <code>Array</code>
作用：数组排序方法

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type | Description |
| --- | --- | --- |
| 数组 | <code>arr</code> |  |
| 1：从小到大 | <code>type</code> | 2：从大到小   3：随机 |

<a name="ArrayFn+unique"></a>

### arrayFn.unique(数组) ⇒ <code>Array</code>
作用：数组去重方法

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type |
| --- | --- |
| 数组 | <code>arr</code> | 

<a name="ArrayFn+union"></a>

### arrayFn.union(数组, 数组) ⇒ <code>Array</code>
作用：求两个集合的并集

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type |
| --- | --- |
| 数组 | <code>a</code> | 
| 数组 | <code>b</code> | 

<a name="ArrayFn+intersect"></a>

### arrayFn.intersect(数组, 数组) ⇒ <code>Array</code>
作用：求两个集合的交集

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type |
| --- | --- |
| 数组 | <code>a</code> | 
| 数组 | <code>b</code> | 

<a name="ArrayFn+remove"></a>

### arrayFn.remove(数组, 删除的元素索引) ⇒ <code>Array</code>
作用：删除其中一个元素

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type |
| --- | --- |
| 数组 | <code>arr</code> | 
| 删除的元素索引 | <code>ele</code> | 

<a name="ArrayFn+formArray"></a>

### arrayFn.formArray(数组) ⇒ <code>Array</code>
作用：将类数组转换为数组的方法

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type |
| --- | --- |
| 数组 | <code>ary</code> | 

<a name="ArrayFn+max"></a>

### arrayFn.max(数组) ⇒ <code>number</code>
作用：求数组最大值，仅适合数字数组

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type |
| --- | --- |
| 数组 | <code>ary</code> | 

<a name="ArrayFn+min"></a>

### arrayFn.min(数组) ⇒ <code>number</code>
作用：求数组最小值，仅适合数字数组, 否则返回NaN

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type |
| --- | --- |
| 数组 | <code>ary</code> | 

<a name="ArrayFn+sum"></a>

### arrayFn.sum(数组) ⇒ <code>number</code>
作用：求数组和，仅适合数字数组, 否则返回NaN

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type |
| --- | --- |
| 数组 | <code>ary</code> | 

<a name="ArrayFn+average"></a>

### arrayFn.average(数组) ⇒ <code>number</code>
作用：求数组平均值，仅适合数字数组, 否则返回NaN

**Kind**: instance method of [<code>ArrayFn</code>](#ArrayFn)  

| Param | Type |
| --- | --- |
| 数组 | <code>ary</code> | 

<a name="DanmuService"></a>

## DanmuService
**Kind**: global class  
**Date**: 2021/01/13  
**Author**: Zenquan  

* [DanmuService](#DanmuService)
    * [new DanmuService()](#new_DanmuService_new)
    * [.on(事件, 函数)](#DanmuService+on)
    * [.appendData(弹幕数据)](#DanmuService+appendData)

<a name="new_DanmuService_new"></a>

### new DanmuService()
作用：弹幕/走马灯服务

<a name="DanmuService+on"></a>

### danmuService.on(事件, 函数)
作用：监听事件

**Kind**: instance method of [<code>DanmuService</code>](#DanmuService)  

| Param | Type |
| --- | --- |
| 事件 | <code>envet</code> | 
| 函数 | <code>fn</code> | 

<a name="DanmuService+appendData"></a>

### danmuService.appendData(弹幕数据)
作用：往后推入弹幕数据

**Kind**: instance method of [<code>DanmuService</code>](#DanmuService)  

| Param | Type |
| --- | --- |
| 弹幕数据 | <code>newdatas</code> | 

<a name="ImageService"></a>

## ImageService
**Kind**: global class  
**Field**: 2021/01/13  
**Author**: Zenquan  

* [ImageService](#ImageService)
    * [new ImageService()](#new_ImageService_new)
    * [.getRemotePic(远程图片的链接, 获取到图片展示的样式, &#x27;base64&#x27;)](#ImageService+getRemotePic) ⇒ <code>Promise</code>

<a name="new_ImageService_new"></a>

### new ImageService()
作用：图片处理服务

<a name="ImageService+getRemotePic"></a>

### imageService.getRemotePic(远程图片的链接, 获取到图片展示的样式, &#x27;base64&#x27;) ⇒ <code>Promise</code>
作用：获取远程图片，解决例如html2canvas中跨域的问题

**Kind**: instance method of [<code>ImageService</code>](#ImageService)  

| Param | Type | Description |
| --- | --- | --- |
| 远程图片的链接 | <code>url</code> |  |
| 获取到图片展示的样式 | <code>imgClass</code> |  |
| 'base64' | <code>type</code> | | 'img' 决定返回值是url还是base64 |

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
