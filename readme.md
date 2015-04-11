# sequence
Helps you manage a sequence. Starts with 1. Let's you track multiple sequences

# Usage
```javascript
require('distributedlife-sequence').next('my-key'); //1
require('distributedlife-sequence').next('my-key'); //2
require('distributedlife-sequence').next('different-key'); //1
```

You can check to see if a key is already in use. Can be useful for existing key clashes.

```javascript
require('distributedlife-sequence').exists('my-key'); //true
require('distributedlife-sequence').exists('saturday'); //false
```