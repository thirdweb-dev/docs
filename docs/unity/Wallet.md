---
slug: /Wallet
title: Wallet
hide_title: true
displayed_sidebar: unity
---

# class `Wallet` {#class_thirdweb_1_1_wallet}

```
class Wallet
  : public Thirdweb.Routable
```

Connect and Interact with a [Wallet](#class_thirdweb_1_1_wallet).

# Summary

| Members            | Type     | Descriptions                                                                                                                                                     |
| ------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wallet             | function |                                                                                                                                                                  |
| Connect            | function | Connect a user's wallet via a given wallet provider                                                                                                              |
| Disconnect         | function | Disconnect the user's wallet                                                                                                                                     |
| Authenticate       | function | Authenticate the user by signing a payload that can be used to securely identify users. See [https://portal.thirdweb.com/auth](https://portal.thirdweb.com/auth) |
| GetBalance         | function | Get the balance of the connected wallet                                                                                                                          |
| GetAddress         | function | Get the connected wallet address                                                                                                                                 |
| IsConnected        | function | Check if a wallet is connected                                                                                                                                   |
| GetChainId         | function | Get the connected chainId                                                                                                                                        |
| SwitchNetwork      | function | Prompt the connected wallet to switch to the giiven chainId                                                                                                      |
| Transfer           | function | Transfer currency to a given address                                                                                                                             |
| Sign               | function | Prompt the connected wallet to sign the given message                                                                                                            |
| RecoverAddress     | function | Recover the original wallet address that signed a message                                                                                                        |
| SendRawTransaction | function | Send a raw transaction from the connected wallet                                                                                                                 |
| FundWallet         | function | Prompt the user to fund their wallet using one of the thirdweb pay providers (defaults to Coinbase Pay).                                                         |

# Members

**`public inline `[`Wallet`](#class_thirdweb_1_1_wallet_1ab74001ead1e4a01b8f8d368af03d9eac)`()`**

---

**`public inline Task< string > `[`Connect`](#class_thirdweb_1_1_wallet_1a2fd7972b8fee16b35ee0b8befd695541)`(`[`WalletConnection`](docs/unity/WalletConnection.md#struct_thirdweb_1_1_wallet_connection)`? walletConnection)`**

Connect a user's wallet via a given wallet provider

# Parameters

- `walletConnection` The wallet provider and chainId to connect to. Defaults to the injected browser extension.

---

**`public inline Task `[`Disconnect`](#class_thirdweb_1_1_wallet_1a3d94f8cf96e059a2e8c507db2d623ee0)`()`**

Disconnect the user's wallet

---

**`public inline async Task< `[`LoginPayload`](docs/unity/LoginPayload.md#struct_thirdweb_1_1_login_payload)`>`[`Authenticate`](#class_thirdweb_1_1_wallet_1a1cc544c1534f18293e62f45abce48614)`(string domain)`**

Authenticate the user by signing a payload that can be used to securely identify users. See [https://portal.thirdweb.com/auth](https://portal.thirdweb.com/auth)

# Parameters

- `domain` The domain to authenticate to

---

**`public inline async Task< `[`CurrencyValue`](docs/unity/CurrencyValue.md#struct_thirdweb_1_1_currency_value)`>`[`GetBalance`](#class_thirdweb_1_1_wallet_1a99b76a0f8e7a24a65727764410f47529)`(string currencyAddress)`**

Get the balance of the connected wallet

### Parameters

- `currencyAddress` Optional address of the currency to check balance of

---

**`public inline async Task< string > `[`GetAddress`](#class_thirdweb_1_1_wallet_1ac24b5b5ecd5bb101611b71b5d888c460)`()`**

Get the connected wallet address

---

**`public inline async Task< bool > `[`IsConnected`](#class_thirdweb_1_1_wallet_1a9f9c518b167f552a79c3d09b81cba5fc)`()`**

Check if a wallet is connected

---

**`public inline async Task< int > `[`GetChainId`](#class_thirdweb_1_1_wallet_1a684c9b3105bd283e7daad19883b2df5e)`()`**

Get the connected chainId

---

**`public inline async Task `[`SwitchNetwork`](#class_thirdweb_1_1_wallet_1ae24ff218c074babc0e9e2a01d6f55464)`(int chainId)`**

Prompt the connected wallet to switch to the giiven chainId

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`Transfer`](#class_thirdweb_1_1_wallet_1a57a7987ecf205bad97463cdc891ebf42)`(string to,string amount,string currencyAddress)`**

Transfer currency to a given address

---

**`public inline async Task< string > `[`Sign`](#class_thirdweb_1_1_wallet_1aae03a47e68e738f4843709c65eea091a)`(string message)`**

Prompt the connected wallet to sign the given message

---

**`public inline async Task< string > `[`RecoverAddress`](#class_thirdweb_1_1_wallet_1a4fe3fec8df1d0a324a5f8f0e8f4a2153)`(string message,string signature)`**

Recover the original wallet address that signed a message

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`SendRawTransaction`](#class_thirdweb_1_1_wallet_1a40ad08c6ab43cbcc14fbe3bdc5d26482)`(`[`TransactionRequest`](docs/unity/TransactionRequest.md#struct_thirdweb_1_1_transaction_request)` transactionRequest)`**

Send a raw transaction from the connected wallet

---

**`public inline async Task `[`FundWallet`](#class_thirdweb_1_1_wallet_1ae2221b36a9b5a2746474fd7f76619cc6)`(`[`FundWalletOptions`](docs/unity/FundWalletOptions.md#struct_thirdweb_1_1_fund_wallet_options)` options)`**

Prompt the user to fund their wallet using one of the thirdweb pay providers (defaults to Coinbase Pay).

#### Parameters

- `options` The options like wallet address to fund, on which chain, etc

---
