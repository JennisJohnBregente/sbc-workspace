import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("H1pPA52Avo2qRr49NWoLx62JJVvTZaHpCp5N1hVRU9Zw") // PUBKEY of person you want to create the token account

const decoded = base58.decode('4RBsJ49GUcaJUud3AYckfzW82Xg3BA45rC14jqNpVCpesndogW8ngHRBjvhiGUV5VLo1YzHkjDN4dfCdrM7mri6P')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "8BSKekuCuCf1VGsEGR71rJPiqoAei4azAUAA7DpuXWVS"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();