const assert = require('assert');
const LRUCache = require('./index');


describe("Testing LRU Cache", () => {
    before(() => {
        console.log( "Starting all tests" );
    });
    
    after(() => {
        console.log( "Tests Over" );
    });

    describe("Test 1", () => {
        let Cache = new LRUCache(5);
        beforeEach(() => {
            Cache.put(1, "k1");
            Cache.put(2, "k2");
            Cache.put(3, "k3");
        })
        
        it("Cache.getAllValues() : Returns [k1, k2, k3]", () => {
            let correctRes = ['k1', 'k2', 'k3'];
            let actualRes = Cache.getAllValues();
            for(let i=0; i < 3; i++){
                assert.equal(correctRes[i], actualRes[i]);
            }
        })

        it("Cache.getAllKeys() : Returns [1, 2, 3]", () => {
            let correctRes = [1, 2, 3];
            let actualRes = Cache.getAllKeys();
            for(let i=0; i < 3; i++){
                assert.equal(correctRes[i], actualRes[i]);
            }
        })

        it("Cache.getCache() : Returns {1: k1, 2: k2, 3: k3}", () => {
            let correctRes = {1: "k1", 2: "k2", 3: "k3"};
            let actualRes = Cache.getCache();
            for(let i=0; i < 3; i++){
                assert.equal(correctRes[i], actualRes[i]);
            }
        })

        it("Cache.getAllValues() : Returns [k1, k2, k3]", () => {
            Cache.put(4, 'k4');
            let correctRes = ['k1', 'k2', 'k3', 'k4'];
            let actualRes = Cache.getAllValues();
            for(let i=0; i < 4; i++){
                assert.equal(correctRes[i], actualRes[i]);
            }
        })
        
    })
})