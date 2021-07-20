const LRUCache = require('./index');

var cache = new LRUCache(100);

for(var i=0; i < 100; i++){
    cache.put(Math.floor(Math.random()*10), Math.floor(Math.random()*1000));
}

console.log(cache.getCache())