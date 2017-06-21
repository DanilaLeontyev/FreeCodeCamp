import assert from 'assert';
import {repeatStringNumTimes} from '../src/task/repeatStringNumTimes';

//тут пишем тесты
describe('repeatStringNumTimes', function () {
    it("should return '***' ", function () {
        assert.equal(repeatStringNumTimes("*", 3), '***');
    });
    it('should return "" ', function () {
        assert.equal(repeatStringNumTimes("abc", -2), '')
    });
});