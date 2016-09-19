# inconsequence
Tools for making sequences.

Currently supported:
- linear
- fibonacci

PR's welcome for more sequences.

# Usage
```javascript
import { linear, fibonacci } from' inconsequence;

linear('my-key'); //1
linear('my-key'); //2
linear('different-key'); //1

fibonacci('my-key'); //1
fibonacci('my-key'); //1
fibonacci('my-key'); //2
fibonacci('my-key'); //3
fibonacci('my-key'); //5
fibonacci('my-key'); //8
fibonacci('different-key'); //1
```