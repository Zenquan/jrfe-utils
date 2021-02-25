/**
  * @description 作用：本地缓存（localStorage和sessionStorage）
  * @field 2021/02/08
**/
class Storage {
    constructor(window) {
        this.ls = window.localStorage;
        this.ss = window.sessionStorage;
    }

    /**
    * @description 作用: 设置localStorage
    * @param key {any} 当key为对象时，不需要传val值
    * @param val {any} 非必须，缓存的值
    *
    * @example
    * ```js 
    * let storage = new Storage()
    * storage.setLocal({a: '111', b: '3333'})
    * storage.setLocal(1, 2)
    * ```
  **/
    setLocal(key, val) {
        var setting = arguments[0];
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (var i in setting) {
                this.ls.setItem(i, JSON.stringify(setting[i]));
            }
        } else {
            this.ls.setItem(key, JSON.stringify(val));
        }

    }

    /**
    * @description 作用：获取某个key的localStorage
    * @param key {any} 键
    *
    * @example
    * ```js 
    * storage.getLocal(1) // 2
    * ```
  **/
    getLocal(key) {
        if (key) return JSON.parse(this.ls.getItem(key));
        return null;

    }

    /**
    * @description 作用：删除某个key的localStorage
    * @param key {any} 键
    *
    * @example
    * ```js 
    * storage.removeLocal(2) 
    * ```
  **/
    removeLocal(key) {
        this.ls.removeItem(key);
    }

    /**
    * @description 作用：移除所有localStorage
    *
    * @example
    * ```js 
    * storage.clearLocal() 
    * ```
  **/
    clearLocal() {
        this.ls.clear();
    }

    /**
    * @description 作用: sessionStorage
    * @param key {any} 当key为对象时，不需要传val值
    * @param val {any} 非必须，缓存的值
    *
    * @example
    * ```js 
    * let storage = new Storage()
    * storage.setSession({a: '111', b: '3333'})
    * storage.setSession(1, 2)
    * ```
  **/
    setSession(key, val) {
        var setting = arguments[0];
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (var i in setting) {
                this.ss.setItem(i, JSON.stringify(setting[i]));
            }
        } else {
            this.ss.setItem(key, JSON.stringify(val));
        }

    }

    /**
    * @description 作用：获取某个key的sessionStorage
    * @param key {any} 键
    *
    * @example
    * ```js 
    * storage.getSession(1) // 2
    * ```
  **/
    getSession(key) {
        if (key) return JSON.parse(this.ss.getItem(key));
        return null;

    }

    /**
    * @description 作用：删除某个key的sessionStorage
    * @param key {any} 键
    *
    * @example
    * ```js 
    * storage.removeSession(2) 
    * ```
  **/  
    removeSession(key) {
        this.ss.removeItem(key);
    }
    /**
    * @description 作用：移除所有sessionStorage
    *
    * @example
    * ```js 
    * storage.clearSession() 
    * ```
  **/
    clearSession() {
        this.ss.clear();
    }

}

export default Storage;
