# Ergo-ts

[![codecov](https://codecov.io/gh/coinbarn/ergo-ts/branch/master/graph/badge.svg)](https://codecov.io/gh/coinbarn/ergo-ts)
[![Build Status](https://travis-ci.org/coinbarn/ergo-ts.svg?branch=master)](https://travis-ci.org/coinbarn/ergo-ts)

## About

The library for Ergo platform, written in TypeScript, and compiled to JavaScript.
It uses block explorer as the backend and allows you to transfer crypto tokens without long full node synchronization. Besides native token transfer, it supports custom tokens and more complicated features like additional registers in outputs.

## Installing

Import in body

```html
<script src='path_to/dist/ergo-ts.js'></script> 
```

With npm:

```sh
npm install @coinbarn/ergo-ts
```

Or yarn:
```sh
yarn add @coinbarn/ergo-ts
```

## Examples


Explore current blockchain status:

```typescript
import {Address, Explorer, Transaction, ErgoBox} from "@coinbarn/ergo-ts";

const explorer = Explorer.mainnet;
const address = new Address('9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv');
const tokenId = '13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5';

// Current blockchain height
const height: Promise<number> = explorer.getCurrentHeight();

// All unconfirmed transactions
const mempoolTxs: Promise<Transaction[]> = explorer.getUnconfirmed();

// Unconfirmed transactions by address
const myMempoolTxs: Promise<Transaction[]> = explorer.getUnconfirmed(address);

// Confirmed transactions by address
const myTxs: Promise<Transaction[]> = explorer.getTransactions(address);

// Unspent outputs by address
const myBoxes: Promise<ErgoBox[]> = explorer.getUnspentOutputs(address);

// The box where the token was issued
const tokenInfo: Promise<ErgoBox> = explorer.getTokenInfo(tokenId);

```


Sending transactions :

```typescript
import {Client} from "@coinbarn/ergo-ts";

const client = new Client('https://new-explorer.ergoplatform.com');
const sk = '8e6993a4999f009c03d9457ffcf8ff3d840ae78332c959c8e806a53fbafbbee1';
const recipient = '9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv';

// send 0.019 ERG to the recipient
client.transfer(sk, recipient, 0.019);

// Issue 123456.789 Coinbarn tokens with 3 decimals each
client.tokenIssue(sk, 'Coinbarn', 123456.789, 3, 'Description of this token');

// Transfer 1.23 tokens with id 13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5 to the recipient
client.transfer(sk, recipient, 1.23, '13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5');
```
