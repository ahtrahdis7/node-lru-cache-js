# LRU Cache

## Data Structures Used
1. Queue which is implemented using a doubly linked list. The maximum size of the queue will be equal to the total number of frames available (cache size). The most recently used pages will be near front end and least recently pages will be near the rear end. 
2. A Hash with page number as key and address of the corresponding queue node as value.

## Methods

1. `LRUCache.put(key, value)` : Add a key-value pair using this method.
2. `LRUCache.get(key)`  : Returns the value for the key if present or returns `-1` if not.
3. `LRUCache.remove(key)` : Removes a key value pair, if present

## Implementation
```
npm i lru-cache-js-map
```

```
const LRUCache = require('lru-cache-js-map');

var cache = new LRU(100);

for(var i=0; i < 100; i++){
    cache.put(Math.floor(Math.random()*10), Math.random()*10000);
}

console.log(cache)
```