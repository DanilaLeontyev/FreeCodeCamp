import assert from 'assert';
import {returnLargest} from '../src/task/returnLargest';

//тут пишем тесты
describe('returnLargest', function () {
    it("should return [27,5,39,1001]", function () {
        assert.deepEqual(returnLargest([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]), [27,5,39,1001]);
    });
    it('should return [9, 35, 97, 1000000]', function () {
        assert.deepEqual(returnLargest([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]), [9, 35, 97, 1000000])
    });
    
});