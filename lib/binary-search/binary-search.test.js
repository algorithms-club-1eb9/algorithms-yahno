const should = require('should');
const algo = require('../index.js');

// test

describe('Binary search', () => {
    it('should return searched number', () => {
        const indexOfElement = algo.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6);

        should(indexOfElement).be.eql(5);
    });

});
