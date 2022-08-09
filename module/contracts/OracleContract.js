import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

/**
 * This file was automatically generated by cosmwasm-typescript-gen@0.3.6.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the cosmwasm-typescript-gen generate command to regenerate this file.
 */
export class OracleQueryClient {
  constructor(client, contractAddress) {
    _defineProperty(this, "client", void 0);

    _defineProperty(this, "contractAddress", void 0);

    _defineProperty(this, "config", async () => {
      return this.client.queryContractSmart(this.contractAddress, {
        config: {}
      });
    });

    _defineProperty(this, "feeder", async ({
      asset
    }) => {
      return this.client.queryContractSmart(this.contractAddress, {
        feeder: {
          asset
        }
      });
    });

    _defineProperty(this, "price", async ({
      base,
      quote
    }) => {
      return this.client.queryContractSmart(this.contractAddress, {
        price: {
          base,
          quote
        }
      });
    });

    _defineProperty(this, "prices", async ({
      limit,
      startAfter
    }) => {
      return this.client.queryContractSmart(this.contractAddress, {
        prices: {
          limit,
          start_after: startAfter
        }
      });
    });

    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.feeder = this.feeder.bind(this);
    this.price = this.price.bind(this);
    this.prices = this.prices.bind(this);
  }

}
export class OracleClient extends OracleQueryClient {
  constructor(client, sender, contractAddress) {
    super(client, contractAddress);

    _defineProperty(this, "client", void 0);

    _defineProperty(this, "sender", void 0);

    _defineProperty(this, "contractAddress", void 0);

    _defineProperty(this, "updateConfig", async ({
      owner
    }, fee = "auto", memo, funds) => {
      return await this.client.execute(this.sender, this.contractAddress, {
        update_config: {
          owner
        }
      }, fee, memo, funds);
    });

    _defineProperty(this, "registerFeeder", async ({
      asset,
      feeder
    }, fee = "auto", memo, funds) => {
      return await this.client.execute(this.sender, this.contractAddress, {
        register_feeder: {
          asset,
          feeder
        }
      }, fee, memo, funds);
    });

    _defineProperty(this, "feedPrice", async ({
      assets,
      prices
    }, fee = "auto", memo, funds) => {
      return await this.client.execute(this.sender, this.contractAddress, {
        feed_price: {
          assets,
          prices
        }
      }, fee, memo, funds);
    });

    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateConfig = this.updateConfig.bind(this);
    this.registerFeeder = this.registerFeeder.bind(this);
    this.feedPrice = this.feedPrice.bind(this);
  }

}