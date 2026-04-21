
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/JsonManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34588v41gBJAoUsbaeBwOSs', 'JsonManager');
// Scripts/JsonManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResManager_1 = require("./framework/manager/ResManager");
var JsonManager = /** @class */ (function () {
    function JsonManager() {
        this.dataCache = new Map();
        this.loadingPromises = new Map();
    }
    JsonManager_1 = JsonManager;
    JsonManager.getInstance = function () {
        this.instance || (this.instance = new JsonManager_1());
        return this.instance;
    };
    JsonManager.prototype.clear = function () {
        this.dataCache.clear();
        this.loadingPromises.clear();
    };
    JsonManager.prototype.getCacheData = function (e) {
        return this.dataCache.get(e);
    };
    JsonManager.prototype.setCacheData = function (e, t) {
        this.dataCache.set(e, t);
    };
    JsonManager.prototype.clearCacheData = function (e) {
        this.dataCache.delete(e);
    };
    JsonManager.prototype.loadJson = function (e, t, o) {
        if (o === void 0) { o = -1; }
        var n = this;
        return new Promise(function (i) {
            var r = t + ":" + e, a = n.getCacheData(r);
            if (a) {
                var l = n.cloneData(a);
                return i(l);
            }
            var s = n.loadRawData(r, e, t);
            (s = n.raceTimeout(s, o, e, t)).then(function (e) {
                i(e ? n.cloneData(e) : null);
            }).catch(function () {
                i(null);
            });
        });
    };
    JsonManager.prototype.loadRawData = function (e, t, o) {
        var n = this, r = this.loadingPromises.get(e);
        if (r)
            return r;
        var a = ResManager_1.resManager.loadRes(t, cc.JsonAsset, o).then(function (t) {
            if (!(t && t instanceof cc.JsonAsset))
                return null;
            var o = JSON.parse(JSON.stringify(t.json));
            n.getCacheData(e) || n.setCacheData(e, o);
            t.decRef();
            return o;
        }).catch(function () {
            return null;
        }).then(function (t) {
            n.loadingPromises.delete(e);
            return t;
        });
        this.loadingPromises.set(e, a);
        return a;
    };
    JsonManager.prototype.raceTimeout = function (e, t) {
        return new Promise(function (o) {
            var n = false, i = -1;
            t > 0 && (i = setTimeout(function () {
                if (!n) {
                    n = true;
                    o(null);
                }
            }, t));
            e.then(function (e) {
                if (!n) {
                    n = true;
                    t > 0 && clearTimeout(i);
                    o(e);
                }
            });
        });
    };
    JsonManager.prototype.cloneData = function (e) {
        try {
            return JSON.parse(JSON.stringify(e));
        }
        catch (e) {
            return null;
        }
    };
    var JsonManager_1;
    JsonManager.instance = null;
    JsonManager = JsonManager_1 = __decorate([
        mj.class("JsonManager")
    ], JsonManager);
    return JsonManager;
}());
exports.default = JsonManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0pzb25NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBNEQ7QUFFNUQ7SUFBQTtRQUNFLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQWlGOUIsQ0FBQztvQkFuRm9CLFdBQVc7SUFJdkIsdUJBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQVcsRUFBRSxDQUFDLENBQUM7UUFDckQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCwyQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDRCxrQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELGtDQUFZLEdBQVosVUFBYSxDQUFDLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0NBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0QsOEJBQVEsR0FBUixVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBTTtRQUFOLGtCQUFBLEVBQUEsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQzVCLElBQUksQ0FBQyxH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LENBQUMsQ0FBQyxFQUFFO29CQUNOLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ1QsQ0FBQyxHQUFHLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDTjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsK0JBQVMsR0FBVCxVQUFVLENBQUM7UUFDVCxJQUFJO1lBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7O0lBL0VNLG9CQUFRLEdBQUcsSUFBSSxDQUFDO0lBSEosV0FBVztRQUQvQixFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztPQUNILFdBQVcsQ0FtRi9CO0lBQUQsa0JBQUM7Q0FuRkQsQUFtRkMsSUFBQTtrQkFuRm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXNNYW5hZ2VyIH0gZnJvbSAnLi9mcmFtZXdvcmsvbWFuYWdlci9SZXNNYW5hZ2VyJztcbkBtai5jbGFzcyhcIkpzb25NYW5hZ2VyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uTWFuYWdlciB7XG4gIGRhdGFDYWNoZSA9IG5ldyBNYXAoKTtcbiAgbG9hZGluZ1Byb21pc2VzID0gbmV3IE1hcCgpO1xuICBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSB8fCAodGhpcy5pbnN0YW5jZSA9IG5ldyBKc29uTWFuYWdlcigpKTtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuICBjbGVhcigpIHtcbiAgICB0aGlzLmRhdGFDYWNoZS5jbGVhcigpO1xuICAgIHRoaXMubG9hZGluZ1Byb21pc2VzLmNsZWFyKCk7XG4gIH1cbiAgZ2V0Q2FjaGVEYXRhKGUpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhQ2FjaGUuZ2V0KGUpO1xuICB9XG4gIHNldENhY2hlRGF0YShlLCB0KSB7XG4gICAgdGhpcy5kYXRhQ2FjaGUuc2V0KGUsIHQpO1xuICB9XG4gIGNsZWFyQ2FjaGVEYXRhKGUpIHtcbiAgICB0aGlzLmRhdGFDYWNoZS5kZWxldGUoZSk7XG4gIH1cbiAgbG9hZEpzb24oZSwgdCwgbyA9IC0xKSB7XG4gICAgdmFyIG4gPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoaSkge1xuICAgICAgdmFyIHIgPSB0ICsgXCI6XCIgKyBlLFxuICAgICAgICBhID0gbi5nZXRDYWNoZURhdGEocik7XG4gICAgICBpZiAoYSkge1xuICAgICAgICB2YXIgbCA9IG4uY2xvbmVEYXRhKGEpO1xuICAgICAgICByZXR1cm4gaShsKTtcbiAgICAgIH1cbiAgICAgIHZhciBzID0gbi5sb2FkUmF3RGF0YShyLCBlLCB0KTtcbiAgICAgIChzID0gbi5yYWNlVGltZW91dChzLCBvLCBlLCB0KSkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICBpKGUgPyBuLmNsb25lRGF0YShlKSA6IG51bGwpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpKG51bGwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgbG9hZFJhd0RhdGEoZSwgdCwgbykge1xuICAgIHZhciBuID0gdGhpcyxcbiAgICAgIHIgPSB0aGlzLmxvYWRpbmdQcm9taXNlcy5nZXQoZSk7XG4gICAgaWYgKHIpIHJldHVybiByO1xuICAgIHZhciBhID0gcmVzTWFuYWdlci5sb2FkUmVzKHQsIGNjLkpzb25Bc3NldCwgbykudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgaWYgKCEodCAmJiB0IGluc3RhbmNlb2YgY2MuSnNvbkFzc2V0KSkgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgbyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodC5qc29uKSk7XG4gICAgICBuLmdldENhY2hlRGF0YShlKSB8fCBuLnNldENhY2hlRGF0YShlLCBvKTtcbiAgICAgIHQuZGVjUmVmKCk7XG4gICAgICByZXR1cm4gbztcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICBuLmxvYWRpbmdQcm9taXNlcy5kZWxldGUoZSk7XG4gICAgICByZXR1cm4gdDtcbiAgICB9KTtcbiAgICB0aGlzLmxvYWRpbmdQcm9taXNlcy5zZXQoZSwgYSk7XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgcmFjZVRpbWVvdXQoZSwgdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAobykge1xuICAgICAgdmFyIG4gPSBmYWxzZSxcbiAgICAgICAgaSA9IC0xO1xuICAgICAgdCA+IDAgJiYgKGkgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFuKSB7XG4gICAgICAgICAgbiA9IHRydWU7XG4gICAgICAgICAgbyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSwgdCkpO1xuICAgICAgZS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghbikge1xuICAgICAgICAgIG4gPSB0cnVlO1xuICAgICAgICAgIHQgPiAwICYmIGNsZWFyVGltZW91dChpKTtcbiAgICAgICAgICBvKGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBjbG9uZURhdGEoZSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59Il19