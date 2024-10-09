import { Utils } from "./utils";

describe('Utils', () => {
    
    const utils: Utils = new Utils();

    describe('range', () => {
        it('return correct range from 1 to 5', () => {
            expect(utils.range(1, 5)).toEqual([1,2,3,4]);
        });
        it('return correct range from 30, 35', () => {
            expect(utils.range(30, 35)).toEqual([30, 31,32,33,34]);
        });
    });

    describe('pluck', () => {
        it('return correct results', () => {
            const data = [
                {id: 1, name: 'foo'},
                {id: 2, name: 'bar'},
                {id: 3, name: 'baz'}
            ];
            expect(utils.pluck(data, 'id')).toEqual([1,2,3]);
        });
    });

})