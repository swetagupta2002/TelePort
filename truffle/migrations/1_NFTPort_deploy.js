const NFTPort = artifacts.require("NFTPort");

module.exports = function (deployer) {
  deployer.deploy(NFTPort);
};
