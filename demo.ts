import {PersistenceClient, Cw20Contract} from 'persistenceonejs';

async function Demo(){
    const alice = await PersistenceClient.init(
        "obtain door word season wealth inspire tobacco shallow thumb tip walk forum someone verb pistol bright mutual nest fog valley tiny section sauce typical"
    )//persistence1ht0tun4u5uj4f4z83p9tncjerwu27ycsm52txm 

    const codes = await alice.query.cosmwasm.wasm.v1.codes({})
    console.log(codes)

    
}
Demo()    
    .then(r => console.log("returned", r))
    .catch(e => console.log("error", e))