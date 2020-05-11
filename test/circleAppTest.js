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

var sumReturnVal = 5;
describe('Sum func test', function(){
    it('should return '+sumReturnVal+' for a=2 and b=3', function(){
        // assert.equal(sum(2,3), sumReturnVal);
        expect(sum(2,3)).equal(sumReturnVal+1);
    });
});