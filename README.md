# taro-import-plugin


## Setup

1. `npm install babel-plugin-taro-ui-import`

2. `/config/index.js`

```js
const config = {
  // ...
  plugins: {
    babel: {
      plugins: [
        'taro-ui-import'
        // or
        // 'babel-plugin-taro-ui-import'
      ]
    }
  },
```

3. `/pages/index.js`

```js
import { AtButton } from 'taro-ui'

// same as
import { AtButton } from 'taro-ui'
import "taro-ui/dist/style/components/modal.scss";
```

4. `npm run build`

## Roadmap

1. 边界处理
