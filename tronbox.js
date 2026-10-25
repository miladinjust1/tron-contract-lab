
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
  },

  networks: {
    shasta: {
      fullHost: 'https://api.shasta.trongrid.io',
      privateKey: process.env.SHASTA_PRIVATE_KEY,
      network_id: '2'
    }
  }
};
