const TetherToken = artifacts.require("TetherToken");

module.exports = async function (deployer) {
  const initialSupply = "1000000000000";
  const name = "Tether Token";
  const symbol = "USDT";
  const decimals = 6;

  const accounts = await deployer.provider.request({
    method: "eth_accounts",
    params: []
  });

  console.log("Deployment account:", accounts[0]);

  await deployer.deploy(
    TetherToken,
    initialSupply,
    name,
    symbol,
    decimals
  );
};
