import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
/** Query defines the RPC service */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);

    this.rpc = rpc;
    this.clientState = this.clientState.bind(this);
    this.clientStates = this.clientStates.bind(this);
    this.consensusState = this.consensusState.bind(this);
    this.consensusStates = this.consensusStates.bind(this);
    this.clientStatus = this.clientStatus.bind(this);
    this.clientParams = this.clientParams.bind(this);
    this.upgradedClientState = this.upgradedClientState.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
  }

  clientState(request) {
    const data = QueryClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
    return promise.then(data => QueryClientStateResponse.decode(new _m0.Reader(data)));
  }

  clientStates(request) {
    const data = QueryClientStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
    return promise.then(data => QueryClientStatesResponse.decode(new _m0.Reader(data)));
  }

  consensusState(request) {
    const data = QueryConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
    return promise.then(data => QueryConsensusStateResponse.decode(new _m0.Reader(data)));
  }

  consensusStates(request) {
    const data = QueryConsensusStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
    return promise.then(data => QueryConsensusStatesResponse.decode(new _m0.Reader(data)));
  }

  clientStatus(request) {
    const data = QueryClientStatusRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
    return promise.then(data => QueryClientStatusResponse.decode(new _m0.Reader(data)));
  }

  clientParams(request) {
    const data = QueryClientParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
    return promise.then(data => QueryClientParamsResponse.decode(new _m0.Reader(data)));
  }

  upgradedClientState(request) {
    const data = QueryUpgradedClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
    return promise.then(data => QueryUpgradedClientStateResponse.decode(new _m0.Reader(data)));
  }

  upgradedConsensusState(request) {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
    return promise.then(data => QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data)));
  }

}