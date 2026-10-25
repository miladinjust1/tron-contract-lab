
const TetherToken = artifacts.require("TetherToken");

module.exports = function (deployer) {
  const initialSupply = "1000000000000";
  const name = "Tether Token";
  const symbol = "USDT";
  const decimals = 6;

  deployer.deploy(
    TetherToken,
    initialSupply,
    name,
    symbol,
    decimals
  );
};
