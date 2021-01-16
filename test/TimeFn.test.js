const expect = require('expect.js');

// js 测试源文件
const TimeFn = require('../src/TimeFn.js');

describe('TimeFn的单元测试', function () {
  this.timeout(1000);
  const timeFnInstance = new TimeFn.default();

  describe('getAge', function () {
    it('30岁', function () {
      expect(timeFnInstance.getAge('1991-01-01')).to.equal(30);
    });
  });
});
