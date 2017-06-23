import assert from 'assert';
import {chunkArrayInGroups} from '../src/task/chunkArrayInGroups';

//тут пишем тесты
describe('chunkArrayInGroups', function () {
    it('should return  [["a", "b"], ["c", "d"]]', function () {
        assert.deepEqual(chunkArrayInGroups(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]]);
    });
    
    it('should return [[0, 1, 2], [3, 4, 5]]', function () {
        assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]] )
    });
    it('should return [[0, 1], [2, 3], [4, 5]]', function () {
        assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]] )
    });
    it('should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]', function () {
        assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [[0, 1], [2, 3], [4, 5], [6, 7], [8]])
    }); 
});