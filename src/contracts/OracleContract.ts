/**
 * This file was automatically generated by cosmwasm-typescript-gen@0.3.6.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the cosmwasm-typescript-gen generate command to regenerate this file.
 */

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export interface ConfigResponse {
  base_asset: string;
  owner: string;
  [k: string]: unknown;
}
export type ExecuteMsg =
  | {
      update_config: {
        owner?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      register_feeder: {
        asset: string;
        feeder: string;
        [k: string]: unknown;
      };
    }
  | {
      feed_price: {
        assets: string[];
        prices: Decimal256[];
        [k: string]: unknown;
      };
    };
export type Decimal256 = string;
export interface FeederResponse {
  asset: string;
  feeder: string;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  base_asset: string;
  owner: string;
  [k: string]: unknown;
}
export interface PriceResponse {
  last_updated_base: number;
  last_updated_quote: number;
  rate: Decimal256;
  [k: string]: unknown;
}
export interface PricesResponse {
  prices: PricesResponseElem[];
  [k: string]: unknown;
}
export interface PricesResponseElem {
  asset: string;
  last_updated_time: number;
  price: Decimal256;
  [k: string]: unknown;
}
export type QueryMsg =
  | {
      config: {
        [k: string]: unknown;
      };
    }
  | {
      feeder: {
        asset: string;
        [k: string]: unknown;
      };
    }
  | {
      price: {
        base: string;
        quote: string;
        [k: string]: unknown;
      };
    }
  | {
      prices: {
        limit?: number | null;
        start_after?: string | null;
        [k: string]: unknown;
      };
    };
export interface OracleReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  feeder: ({ asset }: { asset: string }) => Promise<FeederResponse>;
  price: ({ base, quote }: { base: string; quote: string }) => Promise<PriceResponse>;
  prices: ({ limit, startAfter }: { limit?: number; startAfter?: string }) => Promise<PricesResponse>;
}
export class OracleQueryClient implements OracleReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.feeder = this.feeder.bind(this);
    this.price = this.price.bind(this);
    this.prices = this.prices.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {},
    });
  };
  feeder = async ({ asset }: { asset: string }): Promise<FeederResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      feeder: {
        asset,
      },
    });
  };
  price = async ({ base, quote }: { base: string; quote: string }): Promise<PriceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      price: {
        base,
        quote,
      },
    });
  };
  prices = async ({
    limit,
    startAfter,
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<PricesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      prices: {
        limit,
        start_after: startAfter,
      },
    });
  };
}
export interface OracleInterface extends OracleReadOnlyInterface {
  contractAddress: string;
  sender: string;
  updateConfig: (
    {
      owner,
    }: {
      owner?: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  registerFeeder: (
    {
      asset,
      feeder,
    }: {
      asset: string;
      feeder: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  feedPrice: (
    {
      assets,
      prices,
    }: {
      assets: string[];
      prices: Decimal256[];
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
}
export class OracleClient extends OracleQueryClient implements OracleInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateConfig = this.updateConfig.bind(this);
    this.registerFeeder = this.registerFeeder.bind(this);
    this.feedPrice = this.feedPrice.bind(this);
  }

  updateConfig = async (
    {
      owner,
    }: {
      owner?: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_config: {
          owner,
        },
      },
      fee,
      memo,
      funds
    );
  };
  registerFeeder = async (
    {
      asset,
      feeder,
    }: {
      asset: string;
      feeder: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        register_feeder: {
          asset,
          feeder,
        },
      },
      fee,
      memo,
      funds
    );
  };
  feedPrice = async (
    {
      assets,
      prices,
    }: {
      assets: string[];
      prices: Decimal256[];
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        feed_price: {
          assets,
          prices,
        },
      },
      fee,
      memo,
      funds
    );
  };
}
