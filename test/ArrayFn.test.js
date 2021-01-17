const expect = require('expect.js');

// js 测试源文件
const ArrayFn = require('../src/ArrayFn.js');

describe('ArrayFn的单元测试', function () {
  this.timeout(1000);
  const arrayFnInstance = new ArrayFn.default();

  describe('sort', function () {
    it('从小到大', function () {
      expect(arrayFnInstance.sort([2, 3, 1, 50, 9, 6], 1).toString()).to.equal('1,2,3,6,9,50');
    });
    it('从大到小', function () {
      expect(arrayFnInstance.sort([2, 3, 1, 50, 9, 6], 2).toString()).to.equal('50,9,6,3,2,1');
    });
  });

  describe('unique', function () {
    it('去重', function () {
      expect(arrayFnInstance.unique([1, 2, 2, 1, 3]).toString()).to.equal('1,2,3');
    });
  });
});
