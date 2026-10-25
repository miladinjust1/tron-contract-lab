
module.exports = {
  contracts_directory: './contracts',
  compilers: {
    solc: {
      version: '0.4.25',
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        }
      }
    }
  }
};
