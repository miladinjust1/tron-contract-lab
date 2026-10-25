
const TetherToken = artifacts.require("TetherToken");

module.exports = function (deployer) {
  const initialSupply = "1000000000000"; // 1,000,000 tokens with 6 decimals
  const name = "Test Tether";
  const symbol = "TUSDT";
  const decimals = 6;

  deployer.deploy(
    TetherToken,
    initialSupply,
    name,
    symbol,
    decimals
  );
};
