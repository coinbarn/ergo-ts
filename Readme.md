# Ergo-js

[![codecov](https://codecov.io/gh/catena2w/ergo-js2/branch/master/graph/badge.svg)](https://codecov.io/gh/catena2w/ergo-js2)
[![Build Status](https://travis-ci.org/catena2w/ergo-js2.svg?branch=master)](https://travis-ci.org/catena2w/ergo-js2)


## Installing

import in body

```html
<script src='path_to/dist/ergo.js'></script> 
```

With npm:

```sh
npm install @ergoplatform/ergo-js
```

Or yarn:
```sh
yarn add @ergoplatform/ergo-js
```

## Usage

### In body:

```html
<script src='path_to/ergo.js'></script>
<script>
  ergo.sendTransaction(...)
</script> 
```

### In Node.js:

```javascript
import { Client } from '@ergoplatform/ergo-js';

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

## Documentation

TODO
