/**
  * @description 作用：时间处理
  * @field 2021/01/15
**/
class TimeFn {
    /**
   * @description 作用：获取年龄
   * @param date {string} 1990/01/01 or 1990-01-01
   * @return {number}
   * 
   * @example
   * ```js
   * const timeFnInstance = new TimeFn(); 
   * timeFnInstance.getAge('1991-01-01') // 30
   * ```
   */
    getAge(date) {
        var birthday = new Date(date);
        var d = new Date();

        var age =
      d.getFullYear() - birthday.getFullYear() -
      (
          d.getMonth() < birthday.getMonth() ||
        (d.getMonth() == birthday.getMonth() && d.getDate() < birthday.getDate())
              ? 1
              : 0);

        return age;
    }
}

export default TimeFn;
