const expect = require('chai').expect;

const { isItUp } = require('../lib/wait-for-it');


describe('Test wait-for-it', () => {
    it('should return return status 0 for valid host', () => {
        const result = isItUp('www.google.com', 80, 5);
        
        expect(result).to.be.an('object');
        expect(result).to.have.property('status', 0);
    });

    it('should return return status 127 for invalid port', () => {
        const result = isItUp('www.google.com', 88, 5);
        
        expect(result).to.be.an('object');
        expect(result).to.have.property('status', 127);
    })
});