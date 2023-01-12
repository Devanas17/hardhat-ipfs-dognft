const { network, ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  const randomIpfsNFT = await ethers.getContract("RandomIpfsNFT", deployer);
  // const mintFee = await randomIpfsNFT.getMintFee()
  const randomIpfsNftMintx = await randomIpfsNFT.requestDoggie();
  // ({value: mintFee.toString()})
  const randomIpfsNftTxReceipt = await randomIpfsNftMintx.wait(1);
};

module.exports.tags = ["all", "mint"];
