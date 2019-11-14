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
const resp = client.sendErgs(recipient, 0.019, sk);
```

## Documentation

TODO
