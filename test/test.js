const expect = require("expect.js"); // 断言库
const clone = require("../src/index.js").clone;

describe("单元测试", function () {
  describe("test hello", function () {
    it("hello", function () {
      expect(1).to.equal(3);
    });
  });
});

describe("function clone", function () {
  describe("param data", function () {
    it("正确的测试用例", function () {
      // 基本数据类型
      expect(clone("abc")).to.equal("abc");

      // 数组
      var arr = [1, 2];
      var cloneArr = clone(arr);
      expect(cloneArr).not.to.equal(arr);
      expect(cloneArr).to.eql(arr);

      // 对象
      var obj = { a: { b: 1 } };
      var cloneObj = clone(obj);
      expect(cloneObj).not.to.equal(obj); // 表示全等相当于 ===
      expect(cloneObj).to.eql(obj); // 表示值相等
    });

    it("边界值测试用例", function () {
      expect(clone()).to.equal(undefined);

      expect(clone(undefined)).to.equal(undefined);

      expect(clone(null)).to.equal(null);
    });
  });
});
