require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet release rural solid heavy civil army general'; 
let testAccounts = [
"0xdd8a559c744b2baa6bda9652af8bbcdebc31d28404480431caf5e0de96c7c1a2",
"0xac2b6b29a8e2ed46c8d62acb7727a234d3e11d91a5666fe8cb3a13221eb69282",
"0xd74f036d440c5e99aa18453b5fa0a8ab200c2c16d1d0d072d25245ce92dc7881",
"0xd6903d3d166674a985ae29c215161f1d475b366f41bc56fb8ac7c71445d288bf",
"0x58c41eba1f65d33b9e158831540e6a7b4cc98a89de474090398ff5d69aef36bb",
"0x4536917c00e5b710b659e8f36f7935123fbc511721ebc74d805c51f29808bccd",
"0x1b54a4b4cbf9fe4e48141dd77119f86d147cfad19b0d5079d572be0ce8ea6a3d",
"0x98fc265948d1088ac9017fb106a51b7b4a47b821d2a07adebbdac462f9fbdf3f",
"0xfec020daf06a11ef3138712b5bb4d74c794ea8c6da40d3796d306ffcff23a351",
"0xd0f990b6743e135ed474ea17e78e7147791d3bcde3982db0135eccc41d24f9b4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


