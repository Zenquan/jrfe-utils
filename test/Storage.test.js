const expect = require('expect.js');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// js 测试源文件
const Storage = require('../src/Storage.js');

describe('Storage的单元测试', function () {
  this.timeout(1000);
  const { window } = new JSDOM(` `);
  const storage = new Storage.default(window);

  describe('setLocal', function () {
    it('setLocal getLocal', function () {
      storage.setLocal({a: '111', b: '3333'});
      storage.setLocal(1, 2);
      expect(storage.getLocal('a')).to.equal('111');
      expect(storage.getLocal('b')).to.equal('3333');
      expect(storage.getLocal('1')).to.equal(2);
    });
  });
});
