const bitcoin = require('bitcoinjs-lib');
const { createPayJoinTransaction } = require('./payjoin-library');

// Private key (replace with your own)
const privateKeyWIF = 'cVZfFk7i2NqwWqJ51mFssdxh3EXvRQ8NMAuV4Sf89KziSSnJ7Wje';

// UTXOs (replace with your own)
const utxos = [
  {
    txid: 'c4c343e8c6ae986e78948cc3497b836b95f277b03b76f1d7d5f7927c7ed93d4a',
    vout: 0,
    value: 5000000
  },
  {
    txid: '6ce1e2152efb176b014d46f556e9fd9b8d5e4ee127845090ecbb7992e8ab2de9',
    vout: 0,
    value: 3000000
  }
];

// PayJoin endpoint (replace with the actual PayJoin server URL)
const payjoinEndpoint = 'https://payjoin.example.com/payjoin';

// Convert private key from WIF format to a BitcoinJS object
const privateKey = bitcoin.ECPair.fromWIF(privateKeyWIF);

// Create the PayJoin transaction
createPayJoinTransaction(privateKey, utxos, payjoinEndpoint)
  .then(hexTransaction => {
    console.log('PayJoin transaction:', hexTransaction);
  })
  .catch(error => {
    console.error('Failed to create PayJoin transaction:', error);
  });
