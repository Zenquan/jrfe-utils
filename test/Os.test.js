const expect = require('expect.js');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// js 测试源文件
const Os = require('../src/Os.js');

describe('Os的单元测试', function () {
  this.timeout(1000);
  const osInstance = new Os.default();
  const { window } = new JSDOM(` `);

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
  describe('isIPhone', () => {
    it('isIPhone() return true', () => {
      const ua = "mozilla/5.0 (iphone; cpu iphone os 13_2_3 like mac os x) applewebkit/605.1.15 (khtml, like gecko) version/13.0.3 mobile/15e148 safari/604.1";
      expect(osInstance.isIPhone(ua, window)).to.equal(true);
    });
  })
  describe('isSamsung', () => {
    it('isSamsung() return false', () => {
      const ua = "mozilla/5.0 (linux; android 8.0; pixel 2 build/opd3.170816.012) applewebkit/537.36 (khtml, like gecko) chrome/87.0.4280.141 mobile safari/537.36";
      expect(osInstance.isSamsung(ua, window)).to.equal(false);
    });
  })
  describe('softwareUpdate', () => {
    it('softwareUpdate() return true', () => {
      const ua = "mozilla/5.0 (iphone; cpu iphone os 13_2_3 like mac os x) applewebkit/605.1.15 (khtml, like gecko) version/13.0.3 mobile/15e148 safari/604.1";
      expect(osInstance.softwareUpdate(ua, window)).to.equal(true);
    });
  })
});
