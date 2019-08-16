/*
 * This template has been created by Shailendra Shukla
 * To know more, visit:
 * https://shailendrashukla.com
 * https://github.com/shailshukla96
 *
 */

 /* eslint-disable no-undef */
const patron = artifacts.require('./Patron.sol');

contract('Patron', ([deployer, seller, buyer]) => {
    let patron;

    before(async() => {
        patron = await patron.deployed();
    });

    describe('Deployment', async() => {
        it('Should deploy successfully', async() => {
            const address = await patron.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, null);
            assert.notEqual(address, '');
            assert.notEqual(address, undefined);
        });
    });

});
