/**
 * @author Zenquan
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
}

export default ImageService;
