"use strict";
cc._RF.push(module, '5df097GDQFKlbfGVhE810Yt', 'GameObjectPool');
// Scripts/core/view/pool/GameObjectPool.ts

Object.defineProperty(exports, "__esModule", { value: true });
var enumRes_1 = require("../../../constant/enumRes");
var GameObjectPool = /** @class */ (function () {
    function GameObjectPool() {
        this.prefabs = new Map();
        this.objectPools = new Map();
    }
    GameObjectPool.prototype.createObjectPool = function (e, t, o) {
        if (!this.objectPools.has(e)) {
            var n = new cc.NodePool();
            this.objectPools.set(e, n);
            this.prefabs.set(e, t);
            for (var i = 0; i < o; i++) {
                var r = cc.instantiate(t);
                n.put(r);
            }
        }
    };
    GameObjectPool.prototype.isHasPool = function (e) {
        return this.objectPools.has(e);
    };
    GameObjectPool.prototype.get = function (e) {
        var t = this.objectPools.get(e);
        if (null != t) {
            if (0 == t.size())
                return e == enumRes_1.PoolName.EmptyNode ? new cc.Node() : cc.instantiate(this.prefabs.get(e));
            var o = t.get();
            this.resetNode(o);
            return o;
        }
        return null;
    };
    GameObjectPool.prototype.push = function (e, t) {
        if (this.objectPools.has(e)) {
            t.active = false;
            this.objectPools.get(e).put(t);
        }
    };
    GameObjectPool.prototype.clearPool = function (e) {
        this.objectPools.has(e) && this.objectPools.get(e).clear();
    };
    GameObjectPool.prototype.initEmptyNode = function (e, t) {
        if (e === void 0) { e = enumRes_1.PoolName.EmptyNode; }
        if (t === void 0) { t = 20; }
        var o = new cc.NodePool();
        this.objectPools.set(e, o);
        for (var i = 0; i < t; i++) {
            var r = new cc.Node();
            o.put(r);
        }
    };
    GameObjectPool.prototype.resetNode = function (e) {
        e.active = true;
        e.scale = 1;
        e.opacity = 255;
    };
    GameObjectPool.prototype.clearAllPools = function (e) {
        if (e === void 0) { e = true; }
        this.objectPools.forEach(function (e) {
            e.clear();
        });
        this.objectPools.clear();
        e && this.prefabs.clear();
    };
    return GameObjectPool;
}());
exports.default = GameObjectPool;

cc._RF.pop();