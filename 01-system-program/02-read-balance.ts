import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('4RBsJ49GUcaJUud3AYckfzW82Xg3BA45rC14jqNpVCpesndogW8ngHRBjvhiGUV5VLo1YzHkjDN4dfCdrM7mri6P')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('AupgYP4vts8XsLahMhDbuCjsAXxME4LegRkhHF4tc4KV');
    const publicKeyTo = new Web3.PublicKey('AupgYP4vts8XsLahMhDbuCjsAXxME4LegRkhHF4tc4KV');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();