const expect = require('expect.js');

// js 测试源文件
const Service = require('../src/Service.js');

describe('Service的单元测试', function () {
  this.timeout(1000);
  const serviceInstance = new Service.default();

  describe('getUid', function () {
    it('获取用户uid 1', function () {
      expect(serviceInstance
        .getUid('uid=123481723&sid=01b8ab28de60f84295775c76f39f589d')
      ).to.equal('123481723');
    });
    it('获取用户uid 2', function () {
      expect(serviceInstance
        .getUid('uid%3D123481723%26sid%3D01b8ab28de60f84295775c76f39f589d')
      ).to.equal('123481723');
    });
  });
});
