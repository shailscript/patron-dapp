var ContractName = artifacts.require("./ContractName.sol");

module.exports = function(deployer) {
  deployer.deploy(ContractName);
};
