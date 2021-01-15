/**
 * @author Zenquan
 * @description 作用：数组扩展方法
 * @field 2021/01/13
 */
class ArrayFn {
    /**
   * @description 作用：数组排序方法
   * @param  arr {Array} 数组
   * @param  type {number} 1：从小到大   2：从大到小   3：随机
   * @return {Array}
   */
    sort(arr, type = 1) {
        return arr.sort((a, b) => {
            switch (type) {
            case 1:
                return a - b;
            case 2:
                return b - a;
            case 3:
                return Math.random() - 0.5;
            default:
                return arr;
            }
        });
    }

    /**
   * @description 作用：数组去重方法
   * @param  arr {Array} 数组
   * @return {Array}
   */
    unique(arr) {
        if (Array.hasOwnProperty('from')) {
            return Array.from(new Set(arr));
        } else {
            var n = {},
                r = [];
            for (var i = 0; i < arr.length; i++) {
                if (!n[arr[i]]) {
                    n[arr[i]] = true;
                    r.push(arr[i]);
                }
            }
            return r;
        }
        // 注：上面 else 里面的排重并不能区分 2 和 '2'，但能减少用indexOf带来的性能
    /* 正确排重
    if ( Array.hasOwnProperty('from') ) {
        return Array.from(new Set(arr))
    }else{
        var r = [], NaNBol = true
        for(var i=0; i < arr.length; i++) {
            if (arr[i] !== arr[i]) {
                if (NaNBol && r.indexOf(arr[i]) === -1) {
                    r.push(arr[i])
                    NaNBol = false
                }
            }else{
                if(r.indexOf(arr[i]) === -1) r.push(arr[i])
            }
        }
        return r
    }

     */
    }

    /**
   * @description 作用：求两个集合的并集
   * @param  a {Array} 数组
   * @param  b {Array} 数组
   * @return {Array}
   */
    union(a, b) {
        var newArr = a.concat(b);
        return this.unique(newArr);
    }

    /**
   * @description 作用：求两个集合的交集
   * @param  a {Array} 数组
   * @param  b {Array} 数组
   * @return {Array}
   */
    intersect(a, b) {
        var _this = this;
        a = this.unique(a);
        return this.map(a, function (o) {
            return _this.contains(b, o) ? o : null;
        });
    }

    /**
   * @description 作用：删除其中一个元素
   * @param  arr {Array} 数组
   * @param  ele {number} 删除的元素索引
   * @return {Array}
   */
    remove(arr, ele) {
        var index = arr.indexOf(ele);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }

    /**
   * @description 作用：将类数组转换为数组的方法
   * @param  ary {Array} 数组
   * @return {Array}
   */
    formArray(ary) {
        var arr = [];
        if (Array.isArray(ary)) {
            arr = ary;
        } else {
            arr = Array.prototype.slice.call(ary);
        }
        return arr;
    }

    /**
   * @description 作用：求数组最大值，仅适合数字数组
   * @param  ary {Array} 数组
   * @return {number} 
   */
    max(arr) {
        return Math.max.apply(null, arr);
    }

    /**
   * @description 作用：求数组最小值，仅适合数字数组, 否则返回NaN
   * @param  ary {Array} 数组
   * @return {number} 
   */
    min(arr) {
        return Math.min.apply(null, arr);
    }

    /**
   * @description 作用：求数组和，仅适合数字数组, 否则返回NaN
   * @param  ary {Array} 数组
   * @return {number} 
   */
    sum(arr) {
        return arr.reduce((pre, cur) => {
            return pre + cur;
        });
    }
    /**
   * @description 作用：求数组平均值，仅适合数字数组, 否则返回NaN
   * @param  ary {Array} 数组
   * @return {number} 
   */
    average(arr) {
        return this.sum(arr) / arr.length;
    }
}

export default ArrayFn;
