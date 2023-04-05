# Skymate - On TRON Blockchain.

## Usage

### Pre Requisites

Before running any command, you need to create a `.env` file and set environment
variable. Follow the example in `.env.example`.

Then, proceed with installing dependencies:

```sh
$ npm install
```

Compiler

``` bash
$ npx hardhat compile
```

Run test

``` bash
$ npx hardhat test
```

Deploy

``` bash
$ npx hardhat run scripts/deploy.js --network goerli
$ npx hardhat run scripts/deploy_upgrade.js --network goerli
```


1. Owner deploy contract and mint NFT tickets 
2. Owner listing NFT tickets on market for sell
3. User 1 buy NFT tickets on market


## Deploys using TronBox.

Install tronbox

```sh
npm install -g tronbox
```

Create .env file and change `PRIVATE_KEY_SHASTA` and `PRIVATE_KEY_NILE`

### Compile

```sh
tronbox compile --compile-all
```

### Deploy


Shasta testnet

```sh
tronbox migrate --reset --network shasta
```

Nile testnet

```sh
tronbox migrate --reset --network nile
```