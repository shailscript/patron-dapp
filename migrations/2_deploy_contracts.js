// eslint-disable-next-line no-undef
var Patron = artifacts.require("./Patron.sol");

module.exports = function(deployer) {
  deployer.deploy(Patron);
};
