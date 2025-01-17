import { Rpc } from "@osmonauts/helpers";
import {
  QueryAllowanceRequest,
  QueryAllowanceResponse,
  QueryAllowancesRequest,
  QueryAllowancesResponse,
} from "./query";
/** Query defines the RPC service */
export interface Query {
  allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
  allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
}
export declare class QueryClientImpl implements Query {
  private readonly rpc;
  constructor(rpc: Rpc);
  allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
  allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
}
