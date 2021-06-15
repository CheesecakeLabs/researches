## NFT


### Project description


________

### Project development steps

install solidity

```bash
...
```

start project with yarn
```bash
yarn init
```

install hardhat (https://hardhat.org/getting-started/)
```bash
yarn --dev add hardhat
```

create sample project with hardhat
```bash
npx hardhat
```
1. choose sample project
1. choose root folder
1. with git ignore
1. along with dependencies



install openzepellin
```bash
yarn add @openzeppelin/contracts
```



replace the greeter file by the erc721 preset (node_modules/@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol), and update the preset imports from relative to the absolute package path


update solidity version on hardhat.config.js if needed 


```bash
npx hardhat compile
```


replace the sample script with the deploy one and execute it with hardhat
```bash
npx hardhat run scripts/deploy.js
```



### Todo

1. create tests
1. connect to ipfs
1. script generate artifacts and make a copy to src folder
1. create frontend
1. deploy to a testnet
1. write blogpost