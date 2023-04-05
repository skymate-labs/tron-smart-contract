var SkymateNft = artifacts.require("./SkymateNft.sol");

module.exports = function (deployer) {
  deployer.deploy(SkymateNft);
};