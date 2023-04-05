var SkymateNft = artifacts.require("./SkymateNft.sol");
var MarketPlaceSkymate = artifacts.require("./MarketPlaceSkymate.sol");
var SKMToken = artifacts.require("./SKMToken.sol");

module.exports = function (deployer) {
  deployer.deploy(SkymateNft);
  deployer.deploy(MarketPlaceSkymate);
};