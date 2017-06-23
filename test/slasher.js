import assert from 'assert';
import { slasher } from '../src/task/slasher';

//тут пишем тесты
describe('slasher', function () {
    it('should return ["c", "d"]', function () {
        assert.deepEqual(slasher(["a", "b", "c", "d"], 2), ['c', 'd']);
    });

    it('should return [0, 1, 2, 3, 4, 5]', function () {
        assert.deepEqual(slasher([0, 1, 2, 3, 4, 5], 0), [0, 1, 2, 3, 4, 5])
    });
    it('should return []', function () {
        assert.deepEqual(slasher([0, 1, 2, 3, 4, 5], 10), [])
    });
    it('should return [4, 5, 6, 7, 8]', function () {
        assert.deepEqual(slasher([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [4, 5, 6, 7, 8])
    });
});