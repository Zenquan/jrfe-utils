/**
 *  @author Zenquan
  * @description 作用：一些关于系统的处理
  * @field 2021/01/15
**/
import mime from 'mime-types';

class Os {
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
    checkAppV1AndV2(v1, v2) {
        let _v1 = v1.split('.'),
            _v2 = v2.split('.'),
            _r = +_v1[0] - (+_v2[0]),
            flag = _r == 0 
            && v1 != v2 
                ? this.checkAppV1AndV2(
                    _v1.splice(1).join('.'), 
                    _v2.splice(1).join('.')
                ) 
                : _r;
  
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
    checkAppVersionIsOK (basic, target) {
        return !(this.checkAppV1AndV2(basic, target) > 0);
    }
    isSamsung(sUserAgent) {
        return sUserAgent.match(/sm-/i) == 'sm-';
    }
    isIPhone(sUserAgent) {
        return sUserAgent.match(/iphone/i) == 'iphone';
    }
    /**
      * @description 作用：根据不同机型进行软件更新跳转
      * @return {string} 
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
    softwareUpdate (uaStr) {
        let ua = navigator 
            ? navigator.userAgent.toLowerCase()
            : uaStr;
        const samsung = this.isSamsung(ua),
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
      * @description 作用：判断是否支持webp格式
      * @return {type}
    **/
    isSupportWebp() {
        const supportWebp = !![].map &&
        document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
    
        return supportWebp;
    }
    /**
      * @description 作用：将又拍云图片改成webp格式
      * @param url {type} 图片又拍云地址
      * @param config {type} 配置 详情见 https://help.upyun.com/knowledge-base/image/
      * @return {string} 
      *
      * @example
      * ```js
      * getWebpImage(url, {
      *   fw: 600
      * }) 
      * ```
    **/
    getWebpImage (url, config) {
        let mimeType = mime.lookup(url);
        url += '!';
    
        if (this.isSupportWebp()) {
    
            if (mimeType === 'image/jpeg') {
                url += '/format/webp';
    
            } else {
                url += '/format/webp/lossless/true';
            }
        }
    
        for (let [key, value] of Object.entries(config)) {
            url += `/${key}/${value}`;
        }
    
        return url;
    }
}

export default Os;
