import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

/**
* This file was automatically generated by cosmwasm-typescript-gen@0.3.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
export class BlMarketQueryClient {
  constructor(client, contractAddress) {
    _defineProperty(this, "client", void 0);

    _defineProperty(this, "contractAddress", void 0);

    _defineProperty(this, "config", async () => {
      return this.client.queryContractSmart(this.contractAddress, {
        config: {}
      });
    });

    _defineProperty(this, "market", async ({
      asset
    }) => {
      return this.client.queryContractSmart(this.contractAddress, {
        market: {
          asset
        }
      });
    });

    _defineProperty(this, "marketsList", async () => {
      return this.client.queryContractSmart(this.contractAddress, {
        markets_list: {}
      });
    });

    _defineProperty(this, "userCollateral", async ({
      userAddress
    }) => {
      return this.client.queryContractSmart(this.contractAddress, {
        user_collateral: {
          user_address: userAddress
        }
      });
    });

    _defineProperty(this, "userPosition", async ({
      userAddress
    }) => {
      return this.client.queryContractSmart(this.contractAddress, {
        user_position: {
          user_address: userAddress
        }
      });
    });

    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.market = this.market.bind(this);
    this.marketsList = this.marketsList.bind(this);
    this.userCollateral = this.userCollateral.bind(this);
    this.userPosition = this.userPosition.bind(this);
  }

}
export class BlMarketClient extends BlMarketQueryClient {
  constructor(client, _sender, contractAddress) {
    super(client, contractAddress);

    _defineProperty(this, "client", void 0);

    _defineProperty(this, "sender", void 0);

    _defineProperty(this, "contractAddress", void 0);

    _defineProperty(this, "receive", async ({
      amount,
      msg,
      sender
    }, fee = "auto", memo, funds) => {
      return await this.client.execute(this.sender, this.contractAddress, {
        receive: {
          amount,
          msg,
          sender
        }
      }, fee, memo, funds);
    });

    _defineProperty(this, "updateConfig", async ({
      config
    }, fee = "auto", memo, funds) => {
      return await this.client.execute(this.sender, this.contractAddress, {
        update_config: {
          config
        }
      }, fee, memo, funds);
    });

    _defineProperty(this, "initAsset", async ({
      asset,
      assetParams,
      assetSymbol
    }, fee = "auto", memo, funds) => {
      return await this.client.execute(this.sender, this.contractAddress, {
        init_asset: {
          asset,
          asset_params: assetParams,
          asset_symbol: assetSymbol
        }
      }, fee, memo, funds);
    });

    _defineProperty(this, "initAssetTokenCallback", async ({
      reference
    }, fee = "auto", memo, funds) => {
      return await this.client.execute(this.sender, this.contractAddress, {
        __init_asset_token_callback: {
          reference
        }
      }, fee, memo, funds);
    });

    _defineProperty(this, "updateAsset", async ({
      asset,
      assetParams
    }, fee = "auto", memo, funds) => {
      return await this.client.execute(this.sender, this.contractAddress, {
        update_asset: {
          asset,
          asset_params: assetParams
        }
      }, fee, memo, funds);
    });

    _defineProperty(this, "depositNative", async ({
      denom,
      onBehalfOf
    }, fee = "auto", memo, funds) => {
      return await this.client.execute(this.sender, this.contractAddress, {
        deposit_native: {
          denom,
          on_behalf_of: onBehalfOf
        }
      }, fee, memo, funds);
    });

    _defineProperty(this, "withdraw", async ({
      amount,
      asset
    }, fee = "auto", memo, funds) => {
      return await this.client.execute(this.sender, this.contractAddress, {
        withdraw: {
          amount,
          asset
        }
      }, fee, memo, funds);
    });

    _defineProperty(this, "borrow", async ({
      amount,
      asset,
      recipient
    }, fee = "auto", memo, funds) => {
      return await this.client.execute(this.sender, this.contractAddress, {
        borrow: {
          amount,
          asset,
          recipient
        }
      }, fee, memo, funds);
    });

    _defineProperty(this, "repayNative", async ({
      denom,
      onBehalfOf
    }, fee = "auto", memo, funds) => {
      return await this.client.execute(this.sender, this.contractAddress, {
        repay_native: {
          denom,
          on_behalf_of: onBehalfOf
        }
      }, fee, memo, funds);
    });

    this.client = client;
    this.sender = _sender;
    this.contractAddress = contractAddress;
    this.receive = this.receive.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.initAsset = this.initAsset.bind(this);
    this.initAssetTokenCallback = this.initAssetTokenCallback.bind(this);
    this.updateAsset = this.updateAsset.bind(this);
    this.depositNative = this.depositNative.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.borrow = this.borrow.bind(this);
    this.repayNative = this.repayNative.bind(this);
  }

}