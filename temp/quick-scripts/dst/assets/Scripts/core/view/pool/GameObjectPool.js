
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/view/pool/GameObjectPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvdmlldy9wb29sL0dhbWVPYmplY3RQb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBcUQ7QUFDckQ7SUFBQTtRQUNFLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQXNEMUIsQ0FBQztJQXJEQyx5Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDVjtTQUNGO0lBQ0gsQ0FBQztJQUNELGtDQUFTLEdBQVQsVUFBVSxDQUFDO1FBQ1QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsNEJBQUcsR0FBSCxVQUFJLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUFFLE9BQU8sQ0FBQyxJQUFJLGtCQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCw2QkFBSSxHQUFKLFVBQUssQ0FBQyxFQUFFLENBQUM7UUFDUCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzNCLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFDRCxrQ0FBUyxHQUFULFVBQVUsQ0FBQztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdELENBQUM7SUFDRCxzQ0FBYSxHQUFiLFVBQWMsQ0FBc0IsRUFBRSxDQUFNO1FBQTlCLGtCQUFBLEVBQUEsSUFBSSxrQkFBUSxDQUFDLFNBQVM7UUFBRSxrQkFBQSxFQUFBLE1BQU07UUFDMUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNWO0lBQ0gsQ0FBQztJQUNELGtDQUFTLEdBQVQsVUFBVSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDWixDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBQ0Qsc0NBQWEsR0FBYixVQUFjLENBQVE7UUFBUixrQkFBQSxFQUFBLFFBQVE7UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQXhEQSxBQXdEQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9vbE5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9lbnVtUmVzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmplY3RQb29sIHtcbiAgcHJlZmFicyA9IG5ldyBNYXAoKTtcbiAgb2JqZWN0UG9vbHMgPSBuZXcgTWFwKCk7XG4gIGNyZWF0ZU9iamVjdFBvb2woZSwgdCwgbykge1xuICAgIGlmICghdGhpcy5vYmplY3RQb29scy5oYXMoZSkpIHtcbiAgICAgIHZhciBuID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gICAgICB0aGlzLm9iamVjdFBvb2xzLnNldChlLCBuKTtcbiAgICAgIHRoaXMucHJlZmFicy5zZXQoZSwgdCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG87IGkrKykge1xuICAgICAgICB2YXIgciA9IGNjLmluc3RhbnRpYXRlKHQpO1xuICAgICAgICBuLnB1dChyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaXNIYXNQb29sKGUpIHtcbiAgICByZXR1cm4gdGhpcy5vYmplY3RQb29scy5oYXMoZSk7XG4gIH1cbiAgZ2V0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMub2JqZWN0UG9vbHMuZ2V0KGUpO1xuICAgIGlmIChudWxsICE9IHQpIHtcbiAgICAgIGlmICgwID09IHQuc2l6ZSgpKSByZXR1cm4gZSA9PSBQb29sTmFtZS5FbXB0eU5vZGUgPyBuZXcgY2MuTm9kZSgpIDogY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJzLmdldChlKSk7XG4gICAgICB2YXIgbyA9IHQuZ2V0KCk7XG4gICAgICB0aGlzLnJlc2V0Tm9kZShvKTtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBwdXNoKGUsIHQpIHtcbiAgICBpZiAodGhpcy5vYmplY3RQb29scy5oYXMoZSkpIHtcbiAgICAgIHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLm9iamVjdFBvb2xzLmdldChlKS5wdXQodCk7XG4gICAgfVxuICB9XG4gIGNsZWFyUG9vbChlKSB7XG4gICAgdGhpcy5vYmplY3RQb29scy5oYXMoZSkgJiYgdGhpcy5vYmplY3RQb29scy5nZXQoZSkuY2xlYXIoKTtcbiAgfVxuICBpbml0RW1wdHlOb2RlKGUgPSBQb29sTmFtZS5FbXB0eU5vZGUsIHQgPSAyMCkge1xuICAgIHZhciBvID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gICAgdGhpcy5vYmplY3RQb29scy5zZXQoZSwgbyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0OyBpKyspIHtcbiAgICAgIHZhciByID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgIG8ucHV0KHIpO1xuICAgIH1cbiAgfVxuICByZXNldE5vZGUoZSkge1xuICAgIGUuYWN0aXZlID0gdHJ1ZTtcbiAgICBlLnNjYWxlID0gMTtcbiAgICBlLm9wYWNpdHkgPSAyNTU7XG4gIH1cbiAgY2xlYXJBbGxQb29scyhlID0gdHJ1ZSkge1xuICAgIHRoaXMub2JqZWN0UG9vbHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZS5jbGVhcigpO1xuICAgIH0pO1xuICAgIHRoaXMub2JqZWN0UG9vbHMuY2xlYXIoKTtcbiAgICBlICYmIHRoaXMucHJlZmFicy5jbGVhcigpO1xuICB9XG59Il19