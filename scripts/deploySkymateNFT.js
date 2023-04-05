const hre = require('hardhat');


const TokenBuildName = "SkymateNft";

const decimals = 10**18;

async function main() {
    const[deployer] = await hre.ethers.getSigners();

    console.log("=====================\n\r");
    console.log("Deploy contract with the account: ", deployer.address);
    console.log("Account balance: ", ((await deployer.getBalance()) / decimals).toString());
    console.log("=======================\n\r");

    const TokenFactory = await hre.ethers.getContractFactory(TokenBuildName);
    const TokenArtifact = await hre.artifacts.readArtifact(TokenBuildName);
    const TokenDeploy = await TokenFactory.deploy();

    await TokenDeploy.deployed();

    console.log(`${TokenArtifact.contractName} contract address: ${TokenDeploy.address}`);

    console.log("====================");

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });