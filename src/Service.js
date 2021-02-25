/**
  * @description 作用：一些关于业务的处理
  * @field 2021/01/15
**/

class Service {
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
    getUid (ypcookie) {
        if(ypcookie) {
            return decodeURIComponent(ypcookie).match(/uid=\d+/)[0].split('=')[1];
        } 

        throw new TypeError('请传入ypcookie');
    }
}

export default Service;
