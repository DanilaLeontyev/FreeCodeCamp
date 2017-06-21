import assert from 'assert';
import {truncateString} from '../src/task/truncateString';

//тут пишем тесты
describe('truncateString', function () {
    it("should return  'A-tisket...'", function () {
        assert.equal(truncateString("A-tisket a-tasket A green and yellow basket", 11), "A-tisket..." );
    });
    
    it('should return "A-tisket a-tasket A green and yellow basket"', function () {
        assert.equal(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2), "A-tisket a-tasket A green and yellow basket" )
    });
    it('should return "A..."', function () {
        assert.equal(truncateString("A-", 1), "A..." )
    });
    it('should return "Ab..."', function () {
        assert.equal(truncateString("Absolutely Longer", 2  ), "Ab..." )
    }); 
});