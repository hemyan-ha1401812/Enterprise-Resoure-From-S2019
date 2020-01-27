const unitConverter = require('./UnitConverter');
const expect = require("chai").expect;


describe("Unit Convertor Class Test Cases",()=>{
    it('1 kgToOunce should return 35.274', ()=> {
        expect(unitConverter.kgToOunce(1)).to.be.equal(35.274);
    });
    it('2 kgToPound should return 4.4092', ()=> {
        expect(unitConverter.kgToPound(2)).to.be.equal(4.4092);
    });
    it('1 meterToInch should return 39.3701', ()=> {
        expect(unitConverter.meterToInch(1)).to.be.equal(39.3701);
    });
    it('2 meterToFoot should return 6.5617', ()=> {
        expect(unitConverter.meterToFoot(2)).to.be.equal(6.5617);
    });

})









