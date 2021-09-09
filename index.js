/**
 * Doubly Linked List Implementation
 */
class Node {
    constructor(key, value, next = null, prev = null) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.size = 0;
    this.limit = capacity;
    this.cache = {};
    this.head = null;
    this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    
    if(this.cache[key]){
        const value = this.cache[key].value;

        // node removed from it's position and cache
        this.remove(key)

        // this.size--;
        // write node again to the head of LinkedList to make it most recently used
        this.put(key, value);

        return value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    if(!this.head){
        this.head = this.tail = new Node(key, value);
    }else{
        const node = new Node(key, value, this.head);
        this.head.prev = node;
        this.head = node;
    }

    //Update the cache map
    if(this.cache[key]){
        this.remove(key);
        this.cache[key] = this.head;
        this.size++;
    }else{
        this.ensureLimit();
        this.cache[key] = this.head;
        this.size++;
    }
    
};

LRUCache.prototype.ensureLimit = function() {
    if(this.size == this.limit){
        this.remove(this.tail.key);
    }
};

LRUCache.prototype.remove = function(key) {
    const node = this.cache[key];
    
    if(node == undefined) return;
    // console.log(node)
    
    if(node.prev !== null){
        node.prev.next = node.next;
    }else{
        this.head = node.next;
    }
    
    if(node.next !== null){
        node.next.prev = node.prev;
    }else{
        this.tail = node.prev
    }
    
    delete this.cache[key];
    this.size--;
};

LRUCache.prototype.getCache = function() {
    let contents = {};
    for(let i in this.cache){
        contents[i] = this.cache[i].value;
    }
    return contents; 
}


LRUCache.prototype.getKeysOfValue = function(val){
    let keys = [];
    for(let i in this.cache){
        if(this.cache[i].value === val)
            keys.push(this.cache[i].key)
    }
    return keys;
}

LRUCache.prototype.getAllValues = function(){
    let values = [];
    for(let i in this.cache){
        values.push(this.cache[i].value)
    }
    return values;
}

LRUCache.prototype.getAllKeys = function(){
    let keys = [];
    for(let i in this.cache){
        keys.push(this.cache[i].key)
    }
    return keys;
}

module.exports = LRUCache;

