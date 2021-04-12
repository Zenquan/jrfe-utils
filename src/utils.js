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
const injectScript = (url, fn) => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.onload = function () {
        fn && fn();
    };
    document.body.appendChild(script);
};

export default {
    injectScript
};
