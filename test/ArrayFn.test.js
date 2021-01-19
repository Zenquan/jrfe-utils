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
      expect(arrayFnInstance.unique([1, 2, 2, 1, 3]).toString()).to.equal([1,2,3].toString());
    });
  });

  describe('union', function () {
    it('并集', function () {
      expect(arrayFnInstance.union([1, 2, 2, 1, 3], [3, 4, 5]).toString()).to.equal([1, 2, 3, 4, 5].toString());
    });
  });

  describe('intersect', function () {
    it('交集', function () {
      expect(arrayFnInstance.intersect([1, 2, 2, 1, 3], [3, 4, 5]).toString()).to.equal([null, null, 3].toString());
    });
  });

  describe('remove', function () {
    it('删除其中一个元素', function () {
      expect(arrayFnInstance.remove([1, 2, 2, 1, 3], 2).toString()).to.equal([1, 2, 1, 3].toString());
    });
  });
  // describe('formArray', function () {
  //   it('将类数组转换为数组的方法', function () {
  //     expect(arrayFnInstance.formArray([1, 2, 2, 1, 3]).toString()).to.equal('1,2,3');
  //   });
  // });
  describe('max', function () {
    it('最大值', function () {
      expect(arrayFnInstance.max([1, 2, 2, 1, 3])).to.equal(3);
    });
  });
  describe('min', function () {
    it('最小值', function () {
      expect(arrayFnInstance.min([1, 2, 2, 1, 3])).to.equal(1);
    });
  });
  describe('sum', function () {
    it('求和', function () {
      expect(arrayFnInstance.sum([1, 2, 2, 1, 3])).to.equal(9);
    });
  });
  describe('average', function () {
    it('求平均', function () {
      expect(arrayFnInstance.average([1, 2, 2, 1, 3])).to.equal(1.8);
    });
  });
});
