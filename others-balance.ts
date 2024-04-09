import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = "6CSoZQ2jq5aTQHmJJVrcbseCRRS1AvZBR6FdrxS33zpi"

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const publicKey = new PublicKey(suppliedPublicKey);

// @ts-ignore
const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
    `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);