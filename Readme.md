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

## Example

Node.js:

```javascript
import { Client } from '@coinbarn/ergo-ts';

const client = new Client();
const sk = '8e6993a4999f009c03d9457ffcf8ff3d840ae78332c959c8e806a53fbafbbe';
const recipient = '9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv';

// send 0.019 ERG to the recipient
client.transfer(recipient, 0.019, sk);

// Issue 123456.789 Coinbarn tokens with 3 decimals each
client.tokenIssue('Coinbarn', 123456.789, 3, 'Description of this token', sk)

// Transfer 1.23 tokens with id 13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5 to the recipient
client.tokenTransfer(recipient, `13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5`, 1.23, sk)
```
