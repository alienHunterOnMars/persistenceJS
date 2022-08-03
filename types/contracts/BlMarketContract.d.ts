/**
* This file was automatically generated by cosmwasm-typescript-gen@0.3.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export declare type Addr = string;
export interface ConfigResponse {
    market_count: number;
    owner: Addr;
    ptoken_code_id: number;
    [k: string]: unknown;
}
export interface Config {
    owner: Addr;
    protocol_admin: Addr;
    protocol_rewards_collector_address: Addr;
    ptoken_code_id: number;
    [k: string]: unknown;
}
export declare type ExecuteMsg = {
    receive: Cw20ReceiveMsg;
} | {
    update_config: {
        config: ConfigParams;
        [k: string]: unknown;
    };
} | {
    init_asset: {
        asset: Asset;
        asset_params: AssetParams;
        asset_symbol?: string | null;
        [k: string]: unknown;
    };
} | {
    __init_asset_token_callback: {
        reference: number[];
        [k: string]: unknown;
    };
} | {
    update_asset: {
        asset: Asset;
        asset_params: AssetParams;
        [k: string]: unknown;
    };
} | {
    deposit_native: {
        denom: string;
        on_behalf_of?: string | null;
        [k: string]: unknown;
    };
} | {
    withdraw: {
        amount?: Uint128 | null;
        asset: Asset;
        [k: string]: unknown;
    };
} | {
    borrow: {
        amount: Uint128;
        asset: Asset;
        recipient?: string | null;
        [k: string]: unknown;
    };
} | {
    repay_native: {
        denom: string;
        on_behalf_of?: string | null;
        [k: string]: unknown;
    };
};
export declare type Uint128 = string;
export declare type Binary = string;
export declare type Asset = {
    cw20: {
        contract_addr: string;
        [k: string]: unknown;
    };
} | {
    native: {
        denom: string;
        [k: string]: unknown;
    };
};
export declare type Decimal = string;
export declare type InterestRateModelParams = {
    linear: LinearInterestRateModelParams;
};
export interface Cw20ReceiveMsg {
    amount: Uint128;
    msg: Binary;
    sender: string;
    [k: string]: unknown;
}
export interface ConfigParams {
    owner?: string | null;
    protocol_admin?: string | null;
    protocol_rewards_collector_address?: string | null;
    ptoken_code_id?: number | null;
    [k: string]: unknown;
}
export interface AssetParams {
    active?: boolean | null;
    borrow_enabled?: boolean | null;
    deposit_enabled?: boolean | null;
    initial_borrow_rate?: Decimal | null;
    interest_rate_model_params?: InterestRateModelParams | null;
    liquidation_bonus?: Decimal | null;
    liquidation_threshold?: Decimal | null;
    max_loan_to_value?: Decimal | null;
    reserve_factor?: Decimal | null;
    [k: string]: unknown;
}
export interface LinearInterestRateModelParams {
    base: Decimal;
    optimal_utilization_rate: Decimal;
    slope_1: Decimal;
    slope_2: Decimal;
    [k: string]: unknown;
}
export interface InstantiateMsg {
    config: ConfigParams;
    [k: string]: unknown;
}
export declare type AssetType = "cw20" | "native";
export interface MarketInfo {
    asset_label: string;
    asset_reference: number[];
    asset_type: AssetType;
    cw20_token_address: Addr;
    denom: string;
    [k: string]: unknown;
}
export declare type InterestRateModel = {
    linear: {
        params: LinearInterestRateModelParams;
        [k: string]: unknown;
    };
};
export interface MarketResponse {
    active: boolean;
    asset_type: AssetType;
    borrow_enabled: boolean;
    borrow_index: Decimal;
    borrow_rate: Decimal;
    debt_total_scaled: Uint128;
    deposit_enabled: boolean;
    index: number;
    indexes_last_updated: number;
    interest_rate_model: InterestRateModel;
    liquidation_bonus: Decimal;
    liquidation_threshold: Decimal;
    liquidity_index: Decimal;
    liquidity_rate: Decimal;
    max_loan_to_value: Decimal;
    ptoken_address: Addr;
    reserve_factor: Decimal;
    [k: string]: unknown;
}
export interface Market {
    active: boolean;
    asset_type: AssetType;
    borrow_enabled: boolean;
    borrow_index: Decimal;
    borrow_rate: Decimal;
    debt_total_scaled: Uint128;
    deposit_enabled: boolean;
    index: number;
    indexes_last_updated: number;
    interest_rate_model: InterestRateModel;
    liquidation_bonus: Decimal;
    liquidation_threshold: Decimal;
    liquidity_index: Decimal;
    liquidity_rate: Decimal;
    max_loan_to_value: Decimal;
    ptoken_address: Addr;
    reserve_factor: Decimal;
    [k: string]: unknown;
}
export interface MarketsListResponse {
    markets_list: MarketInfo[];
    [k: string]: unknown;
}
export declare type QueryMsg = {
    config: {
        [k: string]: unknown;
    };
} | {
    market: {
        asset: Asset;
        [k: string]: unknown;
    };
} | {
    markets_list: {
        [k: string]: unknown;
    };
} | {
    user_collateral: {
        user_address: string;
        [k: string]: unknown;
    };
} | {
    user_position: {
        user_address: string;
        [k: string]: unknown;
    };
};
export interface UserCollateralResponse {
    collateral: UserAssetCollateralResponse[];
    [k: string]: unknown;
}
export interface UserAssetCollateralResponse {
    asset_label: string;
    asset_reference: number[];
    asset_type: AssetType;
    denom: string;
    enabled: boolean;
    [k: string]: unknown;
}
export declare type UserHealthStatus = "not_borrowing" | {
    borrowing: Decimal;
};
export interface UserPositionResponse {
    health_status: UserHealthStatus;
    max_debt_in_usd: Uint128;
    total_collateral_in_usd: Uint128;
    total_collateralized_debt_in_usd: Uint128;
    total_debt_in_usd: Uint128;
    weighted_liquidation_threshold_in_usd: Uint128;
    [k: string]: unknown;
}
export interface BlMarketReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<ConfigResponse>;
    market: ({ asset }: {
        asset: object;
    }) => Promise<MarketResponse>;
    marketsList: () => Promise<MarketsListResponse>;
    userCollateral: ({ userAddress }: {
        userAddress: string;
    }) => Promise<UserCollateralResponse>;
    userPosition: ({ userAddress }: {
        userAddress: string;
    }) => Promise<UserPositionResponse>;
}
export declare class BlMarketQueryClient implements BlMarketReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<ConfigResponse>;
    market: ({ asset }: {
        asset: object;
    }) => Promise<MarketResponse>;
    marketsList: () => Promise<MarketsListResponse>;
    userCollateral: ({ userAddress }: {
        userAddress: string;
    }) => Promise<UserCollateralResponse>;
    userPosition: ({ userAddress }: {
        userAddress: string;
    }) => Promise<UserPositionResponse>;
}
export interface BlMarketInterface extends BlMarketReadOnlyInterface {
    contractAddress: string;
    sender: string;
    receive: ({ amount, msg, sender }: {
        amount: string;
        msg: string;
        sender: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ config }: {
        config: ConfigParams;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    initAsset: ({ asset, assetParams, assetSymbol }: {
        asset: Asset;
        assetParams: AssetParams;
        assetSymbol?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    initAssetTokenCallback: ({ reference }: {
        reference: number[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateAsset: ({ asset, assetParams }: {
        asset: Asset;
        assetParams: AssetParams;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    depositNative: ({ denom, onBehalfOf }: {
        denom: string;
        onBehalfOf?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    withdraw: ({ amount, asset }: {
        amount?: Uint128;
        asset: Asset;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    borrow: ({ amount, asset, recipient }: {
        amount: Uint128;
        asset: Asset;
        recipient?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    repayNative: ({ denom, onBehalfOf }: {
        denom: string;
        onBehalfOf?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export declare class BlMarketClient extends BlMarketQueryClient implements BlMarketInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    receive: ({ amount, msg, sender }: {
        amount: string;
        msg: string;
        sender: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ config }: {
        config: ConfigParams;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    initAsset: ({ asset, assetParams, assetSymbol }: {
        asset: Asset;
        assetParams: AssetParams;
        assetSymbol?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    initAssetTokenCallback: ({ reference }: {
        reference: number[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateAsset: ({ asset, assetParams }: {
        asset: Asset;
        assetParams: AssetParams;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    depositNative: ({ denom, onBehalfOf }: {
        denom: string;
        onBehalfOf?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    withdraw: ({ amount, asset }: {
        amount?: Uint128;
        asset: Asset;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    borrow: ({ amount, asset, recipient }: {
        amount: Uint128;
        asset: Asset;
        recipient?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    repayNative: ({ denom, onBehalfOf }: {
        denom: string;
        onBehalfOf?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
