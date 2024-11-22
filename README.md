### Necessary Packages 📦

```js
    npm install @nomicfoundation/hardhat-toolbox
    npm install @nomiclabs/hardhat-ethers
    npm install @nomiclabs/hardhat-waffle
    npm install ethereum-waffle
    npm install ethers
    npm install hardhat
```

And Dont Forget to Add Below Lines in hardhat.config.js

```js
require("@nomiclabs/hardhat-waffle");
```

### Procedure 🧪

```js
npm init -y
npm i hardhat
npx hardhat
```

Open Terminal and Run

`npx hardhat node` to Run Hardhat Local Blockchain

Now Deploy Our Contarc to Localhost

```js
npx hardhat run Scripts/DeployOld.js --network localhost`
```


### MetaMask Setup 🔑
1. Add Localhost Network
   
Open MetaMask and go to the Network dropdown → Add a network manually.
Enter the following details:

## Network Name: Localhost
## RPC URL: http://127.0.0.1:8545
## Chain ID: 31337 (Hardhat default)
## Currency Symbol: ETH
Click Save.

2. Import Test Accounts
   
Copy a private key from the output of npx hardhat node.
Open MetaMask, go to Account Options → Import Account.
Paste the private key and click Import.


Now Copy The Address of This Deployed Smart Contract. This Will Help Us When We Be Deploying out Contarct

Now Run Vite App. Do Configuration in Your React App to Connect With Metamask With Ethers JS 

### App Look Like ⚡

![Upload File](./Important%20Images%20For%20Readme/A.jpg)

![Your Asset](./Important%20Images%20For%20Readme/B.jpg)

![Get Asset](./Important%20Images%20For%20Readme/C.jpg)

![Share Access](./Important%20Images%20For%20Readme/D.jpg)

Good Luck 👋. And Don't Forget To Like and Fork This Repository
