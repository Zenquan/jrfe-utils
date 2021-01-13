## API

- ImageService
  作用：图片处理服务

  - getRemotePic(url, imgClass, type)
   * @description 作用：获取远程图片，解决例如html2canvas中跨域的问题
   * @param url 远程图片的链接
   * @param imgClass 获取到图片展示的样式
   * @param type 'base64' | 'img' 决定返回值是url还是base64
   * @return Promise
   
   * @example 
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

- DanmuService
  作用：弹幕/走马灯服务

  * @param maxSpeed 弹幕最大速度
  * @param minSpeed 弹幕最小速度
  * @param spaceRatio 弹幕行走的曲率半径
  * @param danmakuLength 一次性经过弹幕数量

  - on(event, fn)
    * @description 作用：监听事件
    * @param envet 事件
    * @param fn 函数

  - appendData(newdatas)
    * @description 作用：往后推入弹幕数据
    * @param newdatas 弹幕数据

  * @example 
  ```html
      <!-- html -->
      <section ref="danmaku" class="Danmaku"></section>
  ```
  ```js
    // 初始化一下 this.danmakuData
    // 挂载 
    setTimeout(() => {
      this.$nextTick(() => {
        this.danmaku = new Danmaku(this.$refs.danmaku, this.danmakuData, {
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
  ```