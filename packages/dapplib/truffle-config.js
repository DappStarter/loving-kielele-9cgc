require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index remember pitch pulse grace glimpse equal gaze'; 
let testAccounts = [
"0xd4e553ba2be62c6c7c17b94a62e8d404eec7daa7b5b039399d30cf69c335053b",
"0x9494dc2dba7af97e1d9413bcfe5288e69492c5fa86ee61f23ccaaf8b1324b329",
"0x26243b57677c4b13ef8ec0e9436b3ddfc5b4d54af819eaf72a8bfd8ba8da5586",
"0x092e5c3605943c45563f9d97c29d86ee03b72bd2a104a1cf03037061821b8e5f",
"0x4cf0daffea0cf2ad724b9d6de134a6bfdae3f6f969ab9500d4a7f7d5c57f8782",
"0x5e78de0ef6e1255b5eef1e9fb7c168fca69d77605c7aec7f83d88aa5d9c00a67",
"0x2da9091d1720d1e7b1088c50386e32f05380834cc3a93a870e0bcbe2cc38edd4",
"0xafaf5de191d96ce3bf0c0cac8eebc8770bfd5240a0a5ffa2e4362e32faf4cfaa",
"0x124abaac80a19fb88f9a5baae4ad2aaffac34290f54d583d15ca4c23155e5598",
"0x8cb356542dd7d42e2c3d8a815a3b3a432d07d98019238628cd4adee891370641"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

