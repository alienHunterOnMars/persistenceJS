<p align="center" size="20">
    <span style="color:black;font-weight:700;font-size:30px">
    Persistence
    </span> 
    <img src="https://www.computerhope.com/jargon/j/javascript.png" alt="isolated" width="40"/>
</p>
<p align="center">
    <a href="https://opensource.org/licenses/Apache-2.0"><img alt="License" src="https://img.shields.io/badge/License-Apache_2.0-blue.svg"></a>
    <a href="https://www.npmjs.com/package/persistenceonejs"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@cosmjs/stargate.svg"> </a>
</p>

<p align="center">
    <a href="https://github.com/persistenceOne/persistenceCore">Core</a>
    ·
    <a href="https://cosmos.github.io/cosmjs/latest/stargate/index.html">Docs</a>
</p>
## Setup
```sh
npm install persistenceonejs
```

## Usage
```js
import {PersistenceClient} from 'persistenceonejs';

async function Demo(){
    const alice = await PersistenceClient.init(
        "obtain door word season wealth inspire tobacco shallow thumb tip walk forum someone verb pistol bright mutual nest fog valley tiny section sauce typical"
    )//persistence1ht0tun4u5uj4f4z83p9tncjerwu27ycsm52txm 

    const codes = await alice.query.cosmwasm.wasm.v1.codes({})
    console.log(codes)
}
```
## Example
- **Send Tokens:** Use persistenceClient.wasm to send contracts via CW20 contract, persistenceCLient.wasm is a SigningWasmClient so most of the functionalities are similar to @cosmjs/cosmwasm-stargate. The Signer for this example is a mnemonic wallet.
```js
import {PersistenceClient, Cw20Contract} from 'persistenceonejs';
import { coins } from "@cosmjs/stargate"

const alice = await PersistenceClient.init(
    "obtain door word season wealth inspire tobacco shallow thumb tip walk forum someone verb pistol bright mutual nest fog valley tiny section sauce typical"
) 
const [account] = await alice.wallet.getAccounts()
const aliceaddress = account.address //persistence1ht0tun4u5uj4f4z83p9tncjerwu27ycsm52txm
const pstake = "persistence14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sjvz4fk"//cw20 token address on chain 
const res = await alice.wasm.execute(
    aliceaddress, 
    pstake,
    { transfer: 
        {
            recipient: "persistence123em6jp7y96rtylp6tjk9r0dcescl0k4ccqvpu", //recipient address
            amount: "10" 
        } 
    },
    { amount: coins(2_000_000, "stake"), gas: "200000" })
console.log(res)
```
```js
{
  logs: [ { msg_index: 0, log: '', events: [Array] } ],
  height: 1354,
  transactionHash: 'B4789783E9FB89FC69AB38F38C3C670612041C7E1EFFB8DF22929681BD52FB4A',
  gasWanted: 200000,
  gasUsed: 75715
}
```
Query Balance
```js
const balance = await alice.wasm.queryContractSmart(pstake, { balance: {address:"persistence123em6jp7y96rtylp6tjk9r0dcescl0k4ccqvpu"}})
console.log(balance)
```
```js 
{ balance: '13010' }
```


- **Gov Proposal Scripts:** This [script](./tests/testContractProposals.ts) lets users upload a contract and initiate a contract via Gov proposals.