const LRUCache = require('./index');

var cache = new LRUCache(10);

for(var i=0; i < 100; i++){
    cache.put(Math.floor(Math.random()*100), Math.floor(Math.random()*10));
}

console.log(cache.getAllValues())
// cache.getKeysOfValue(4);