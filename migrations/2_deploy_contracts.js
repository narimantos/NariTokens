var naritoken = artifacts.require("./contracts/NariToken.sol");

module.exports = function(deployer) {
    deployer.deploy(naritoken);
}