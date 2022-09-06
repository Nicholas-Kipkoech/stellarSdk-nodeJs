const fs = require("fs");
const stellar = require("stellar-sdk");

const filename = "Accounts.json";

fs.writeFileSync(
  filename,
  JSON.stringify(
    ["Nicholas", "Brian"].map((name) => {
      const pair = stellar.Keypair.random();
      return {
        name,
        secret: pair.secret(),
        publicKey: pair.publicKey(),
      };
    })
  )
);
