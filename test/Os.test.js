const expect = require('expect.js');

// js 测试源文件
const Os = require('../src/Os.js');

describe('os的单元测试', function () {
  this.timeout(1000);
  const osInstance = new Os.default();

  describe('checkAppV1AndV2', function () {
    it('v1 < v2', function () {
      expect(osInstance.checkAppV1AndV2('5.14.3', '5.15.0')).to.equal(-1);
    });
    it('v1 > v2', function () {
      expect(osInstance.checkAppV1AndV2('5.15.0', '5.14.3')).to.equal(1);
    });
    it('v1 === v2', function () {
      expect(osInstance.checkAppV1AndV2('5.14.3', '5.14.3')).to.equal(0);
    });
  });

  describe('checkAppVersionIsOK', function () {
    it('is true', () => {
      expect(osInstance.checkAppVersionIsOK('5.14.3', '5.15.0')).to.equal(true);
    });
  })
  describe('softwareUpdate', () => {
    it('is false', () => {
      const ua = "mozilla/5.0 (iphone; cpu iphone os 13_2_3 like mac os x) applewebkit/605.1.15 (khtml, like gecko) version/13.0.3 mobile/15e148 safari/604.1";
      expect(osInstance.softwareUpdate(ua)).to.equal(true);
    });
  })
});
