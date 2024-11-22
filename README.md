# Pre Requisites
- Node.js ( v20.17.0 or lastest version)
- IDE (VS Code Recommended)
- Metamask Extension
- Solidity (8.0.0 or above)
- Pinata API
  
# Description
A Decentralized File System typically refers to a cloud storage system that operates on a decentralized infrastructure rather than traditional, centralized servers like Google Drive. This kind of storage is often built on blockchain or peer-to-peer (P2P) networks. Here's a detailed description:

### Key Features:
Decentralized Storage Network: Instead of storing data in a centralized server, files are split into smaller pieces (shards) and distributed across multiple nodes in a network.

### Data Security and Privacy:

Data is often encrypted before being stored.
Only the user with the decryption key can access the data, ensuring strong privacy.
Redundancy and Fault Tolerance:

By replicating shards across multiple nodes, decentralized drives ensure that data remains accessible even if some nodes go offline.
Cost-Effective:

Decentralized systems often operate on a pay-as-you-use model, with reduced costs compared to centralized services, as they leverage unused storage space across a network.
Ownership and Control:

Users retain full ownership of their data since it’s not hosted on a single entity's servers.
No single point of failure or control enhances reliability.

# Steps to RUN
### Necessary Packages 📦

```js
    npm install @nomicfoundation/hardhat-toolbox
    npm install @nomiclabs/hardhat-ethers
    npm install @nomiclabs/hardhat-waffle
    npm install ethereum-waffle
    npm install ethers
    npm install hardhat
    npm i
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

Now Deploy Our Contract to Localhost

```js
npx hardhat run Scripts/DeployOld.js --network localhost`
```


## MetaMask Setup 🔑
1. Add Localhost Network
   
Open MetaMask and go to the Network dropdown → Add a network manually.
Enter the following details:

### Network Name: Localhost
### RPC URL: http://127.0.0.1:8545
### Chain ID: 31337 (Hardhat default)
### Currency Symbol: ETH
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
