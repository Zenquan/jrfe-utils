import Mime from './Mime';

/**
 * @description 作用：图片处理服务
 * @field 2021/01/13
 */
class ImageService {
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
    getRemotePic(url, imgClass, type) {
        return new Promise((resolve, reject) => {
            window.URL = window.URL || window.webkitURL; // Take care of vendor prefixes.
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'blob';
            xhr.send();
            xhr.onload = function (e) {
                const {
                    target
                } = e;
                const {
                    status,
                    response,
                    readyState
                } = target;
                if (readyState === 4 && status === 200) {
                    let blob = response;
                    let img = document.createElement('img');
                    img.classList.add(imgClass);
                    let reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = function () {
                        let base64data = reader.result;
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
        })
            .catch(error => {
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
    isSupportWebp () {
        const supportWebp = !![].map &&
      document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;

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
    getWebpImage (url, config) {
        const mime = new Mime();
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

export default ImageService;
