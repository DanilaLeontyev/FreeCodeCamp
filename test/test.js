/**
 * Created by Donsh on 6/14/2017.
 */
import assert from 'assert';
import {palindrome} from '../src/index';


//тут пишем тесты
describe('checkPalindrom', function () {
    it('should return true', function () {
        assert.equal(palindrome("eye"), true)
    });
    it('should return true', function () {
        assert.equal(palindrome("_eye"), true)
    });
    it('should return true', function () {
        assert.equal(palindrome("Race car"), true)
    });
    it('should return true', function () {
        assert.equal(palindrome("A man, a plan, a canal. Panama"), true)
    });
    it('should return false', function () {
        assert.equal(palindrome("not a palindrome"), false);
    });
    it('should return false', function () {
        assert.equal(palindrome("five|\_/|four"), false)
    });
    it('should return false', function () {
        assert.equal(palindrome("not-a p-alindrome"), false)
    });
    it('should return false', function () {
        assert.equal(palindrome("0_0 (: /-\ :) 0-0"), true)
    });
});
