const axios = require("axios");

const accounts = require("../Accounts.json");

const fundAccounts = async (accounts) =>
  await Promise.all(
    accounts.map(
      async (account) =>
        await axios.get("/friendbot", {
          baseUrl: "https://horizon-testnet.stellar.org",
          params: { addr: account.publicKey },
        })
    )
  );
fundAccounts(accounts)
  .then(() => console.log("Working !!"))
  .catch((error) => console.log(error));
