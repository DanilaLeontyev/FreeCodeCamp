import assert from 'assert';
import {longestWord} from '../src/task/longestWord';

//тут пишем тесты
describe('longestWord', function () {
    it('should return 6', function () {
        assert.equal(longestWord("The quick brown fox jumped over the lazy dog"), 6)
    });
    it('should return 5', function () {
        assert.equal(longestWord("May the force be with you"), 5)
    });
    it('should return 6', function () {
        assert.equal(longestWord("Google do a barrel roll"), 6)
    });
    it('should return 8', function () {
        assert.equal(longestWord("What is the average airspeed velocity of an unladen swallow"), 8)
    });
    
    it('should return 19', function () {
        assert.equal(longestWord("What if we try a super-long word such as otorhinolaryngology"), 19)
    });
});
