import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("A6uoEFoXZWhjzGu4KC9YSc4YSKjibhTzWfk7U4F5Qt6e");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// @ts-ignore
const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);