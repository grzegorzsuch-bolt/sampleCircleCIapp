var expect = require('chai').expect;
const sum = require ('../circleApp').sum;
var assert = require('assert');

// test('adds 2 + 3 to expected result 5', sumTest);

// function sumTest(){
//     expect(sum(2,3)).to.be(5);    
// }

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Sum func test', function(){
    var sumReturnVal = 5;
    it('should return '+sumReturnVal+' for a=2 and b=3', function(){
        // assert.equal(sum(2,3), sumReturnVal);
        expect(sum(2,3)).equal(sumReturnVal);
    });
});

describe('Sum func test 2', function(){
  var sumReturnVal = 4;
  it('should return '+sumReturnVal+' for a=1 and b=3', function(){
      // assert.equal(sum(2,3), sumReturnVal);
      expect(sum(2,3)).equal(sumReturnVal);
  });
});