import assert from 'assert';
import {caseSentenceFix} from '../src/task/caseSentenceFix';

//тут пишем тесты
describe('caseSentenceFix', function () {
    it("should return I'm A Little Tea Pot", function () {
        assert.equal(caseSentenceFix("I'm a little tea pot"), "I'm A Little Tea Pot");
    });
    it('should return Short And Stout', function () {
        assert.equal(caseSentenceFix("sHoRt AnD sToUt"), 'Short And Stout')
    });
    it('should return Here Is My Handle Here Is My Spout', function () {
        assert.equal(caseSentenceFix("Here Is My Handle Here Is My Spout"), 'Here Is My Handle Here Is My Spout')
    });
    
});