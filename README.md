# Persistence  <img src="https://www.computerhope.com/jargon/j/javascript.png" alt="isolated" width="40"/>

## Setup
```sh
npm install {/Persistence_directory}
```

## usage
```sh
import {PersistenceClient, BlMarketContract} from 'persistenceonejs';

async function Demo(){
    const test1 = await PersistenceClient.init(
        "obtain door word season wealth inspire tobacco shallow thumb tip walk forum someone verb pistol bright mutual nest fog valley tiny section sauce typical"
    )//persistence1ht0tun4u5uj4f4z83p9tncjerwu27ycsm52txm 

    const codes = await test1.query.cosmwasm.wasm.v1.codes({})
    console.log(codes)
}
```

## Example
- **Send Tokens:** Use persistenceClient.wasm to send contracts via CW20 contract
```sh


```

- **Gov Proposal Scripts:** This [script](./tests/testContractProposals.ts) lets users upload a contract and initiate a contract via Gov proposals.