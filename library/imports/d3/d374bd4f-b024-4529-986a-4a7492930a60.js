"use strict";
cc._RF.push(module, 'd374b1PsCRFKZhqSnSSkwpg', 'PoolManager');
// Scripts/framework/manager/PoolManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.poolManager = exports.PoolNodeName = void 0;
var LogManager_1 = require("./LogManager");
exports.PoolNodeName = {
    SETUP: "Setup"
};
var r = /** @class */ (function () {
    function r() {
        this._poolMap = new Map();
        this._prefabMap = new Map();
    }
    r.prototype.preInitNode = function (e, t) {
        if (e) {
            if (t && cc.isValid(t)) {
                if (Object.values(exports.PoolNodeName).includes(e))
                    if (this._prefabMap.has(e))
                        LogManager_1.logManager.logError("该同名节点已经缓存");
                    else {
                        this._prefabMap.set(e, t);
                        var o = this.getPool(e);
                        if (o) {
                            var r = cc.instantiate(t);
                            r.poolName = e;
                            o.put(r);
                        }
                    }
            }
            else
                LogManager_1.logManager.logError("prefab 不能为空");
        }
        else
            LogManager_1.logManager.logError("nodeName 不能为空");
    };
    r.prototype.getNode = function (e) {
        if (!e) {
            LogManager_1.logManager.logError("nodeName 不能为空");
            return null;
        }
        if (!Object.values(exports.PoolNodeName).includes(e))
            return null;
        var t = this.getPool(e);
        if (!t)
            return null;
        var o = t.get();
        if (o)
            return o;
        var r = this._prefabMap.get(e);
        if (r) {
            (o = cc.instantiate(r)).poolName = e;
            return o;
        }
        return null;
    };
    r.prototype.putNode = function (e) {
        if (e && cc.isValid(e)) {
            var t = e.poolName;
            if (t) {
                var o = this.getPool(t);
                o && o.put(e);
            }
        }
    };
    r.prototype.getPool = function (e) {
        if (!e) {
            console.error("节点名称不能为空");
            return null;
        }
        if (!Object.values(exports.PoolNodeName).includes(e))
            return null;
        if (this._poolMap.has(e))
            return this._poolMap.get(e);
        var t = new cc.NodePool(e);
        this._poolMap.set(e, t);
        return t;
    };
    r.prototype.clearPool = function (e, t) {
        if (t === void 0) { t = false; }
        if (e) {
            if (Object.values(exports.PoolNodeName).includes(e)) {
                var o = this._poolMap.get(e);
                o && o.clear();
                if (t) {
                    this._poolMap.delete(e);
                    this._prefabMap.delete(e);
                }
            }
        }
        else
            console.error("节点名称不能为空");
    };
    return r;
}());
exports.poolManager = new r();

cc._RF.pop();