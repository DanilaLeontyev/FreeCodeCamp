import assert from 'assert';
import {confirmEnd} from '../src/task/confirmEnd';

//тут пишем тесты

describe('confirmEnd', function () {
    it("should return true", function () {
        assert.equal(confirmEnd('Bastian', 'n'), true);
    });
    it('should return true', function () {
        assert.equal(confirmEnd('He has to give me a new name', 'name'), true)
    });
    it('should return false', function () {
        assert.equal(confirmEnd('Open sesame', 'pen'), false)
    });
    it('should return true', function () {
        assert.equal(confirmEnd('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'nothing'), true)
    });
});