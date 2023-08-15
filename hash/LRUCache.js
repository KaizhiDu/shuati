// leetcode 146

const Node = function (key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.insert = function (node){
    const nextHead = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = nextHead;
    nextHead.prev = node;
}

LRUCache.prototype.remove = function (node){
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        const node = this.map.get(key);
        this.remove(node);
        this.insert(node);
        return node.value;
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        this.remove(this.map.get(key));
    }
    const newNode = new Node(key, value);
    this.map.set(key, newNode);
    this.insert(newNode);

    if (this.map.size > this.capacity) {
        const prevTail = this.tail.prev;
        this.remove(prevTail);
        this.map.delete(prevTail.key);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */



const lRUCache = new LRUCache(2);
console.log(lRUCache.put(1, 1)); // cache is {1=1}
console.log(lRUCache.put(2, 2)); // cache is {1=1, 2=2}
console.log(lRUCache.get(1));    // return 1
console.log(lRUCache.put(3, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2));    // returns -1 (not found)
console.log(lRUCache.put(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1));    // return -1 (not found)
console.log(lRUCache.get(3));    // return 3
console.log(lRUCache.get(4));    // return 4


// const lRUCache = new LRUCache(2);
// console.log(lRUCache.put(2, 1)); // cache is {2=1}
// console.log(lRUCache.put(2, 2)); // cache is {2=2}
// console.log(lRUCache.get(2));    // return 2
// console.log(lRUCache.put(1, 1)); // LRU key was 2, evicts key 2, cache is {2=2, 1=1}
// console.log(lRUCache.put(4, 1)); // LRU key was 1, evicts key 1, cache is {1=1, 4=1}
// console.log(lRUCache.get(2));    // returns -1 (not found)

