
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/framework/manager/PoolManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL1Bvb2xNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBDO0FBQy9CLFFBQUEsWUFBWSxHQUFHO0lBQ3hCLEtBQUssRUFBRSxPQUFPO0NBQ2YsQ0FBQztBQUNGO0lBQUE7UUFDRSxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNyQixlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQWlFekIsQ0FBQztJQWhFQyx1QkFBVyxHQUFYLFVBQVksQ0FBQyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFBRSx1QkFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzt5QkFBSzt3QkFDN0csSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixJQUFJLENBQUMsRUFBRTs0QkFDTCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMxQixDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs0QkFDZixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNWO3FCQUNGO2FBQ0Y7O2dCQUFNLHVCQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzNDOztZQUFNLHVCQUFVLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCxtQkFBTyxHQUFQLFVBQVEsQ0FBQztRQUNQLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDTix1QkFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNyQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsb0JBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUMxRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxFQUFFO1lBQ0wsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDckMsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELG1CQUFPLEdBQVAsVUFBUSxDQUFDO1FBQ1AsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ25CLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2Y7U0FDRjtJQUNILENBQUM7SUFDRCxtQkFBTyxHQUFQLFVBQVEsQ0FBQztRQUNQLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQzFELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELHFCQUFTLEdBQVQsVUFBVSxDQUFDLEVBQUUsQ0FBUztRQUFULGtCQUFBLEVBQUEsU0FBUztRQUNwQixJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZixJQUFJLENBQUMsRUFBRTtvQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNCO2FBQ0Y7U0FDRjs7WUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDSCxRQUFDO0FBQUQsQ0FuRUEsQUFtRUMsSUFBQTtBQUNVLFFBQUEsV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2dNYW5hZ2VyIH0gZnJvbSAnLi9Mb2dNYW5hZ2VyJztcbmV4cG9ydCB2YXIgUG9vbE5vZGVOYW1lID0ge1xuICBTRVRVUDogXCJTZXR1cFwiXG59O1xuY2xhc3MgciB7XG4gIF9wb29sTWFwID0gbmV3IE1hcCgpO1xuICBfcHJlZmFiTWFwID0gbmV3IE1hcCgpO1xuICBwcmVJbml0Tm9kZShlLCB0KSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGlmICh0ICYmIGNjLmlzVmFsaWQodCkpIHtcbiAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoUG9vbE5vZGVOYW1lKS5pbmNsdWRlcyhlKSkgaWYgKHRoaXMuX3ByZWZhYk1hcC5oYXMoZSkpIGxvZ01hbmFnZXIubG9nRXJyb3IoXCLor6XlkIzlkI3oioLngrnlt7Lnu4/nvJPlrZhcIik7ZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcHJlZmFiTWFwLnNldChlLCB0KTtcbiAgICAgICAgICB2YXIgbyA9IHRoaXMuZ2V0UG9vbChlKTtcbiAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgdmFyIHIgPSBjYy5pbnN0YW50aWF0ZSh0KTtcbiAgICAgICAgICAgIHIucG9vbE5hbWUgPSBlO1xuICAgICAgICAgICAgby5wdXQocik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgbG9nTWFuYWdlci5sb2dFcnJvcihcInByZWZhYiDkuI3og73kuLrnqbpcIik7XG4gICAgfSBlbHNlIGxvZ01hbmFnZXIubG9nRXJyb3IoXCJub2RlTmFtZSDkuI3og73kuLrnqbpcIik7XG4gIH1cbiAgZ2V0Tm9kZShlKSB7XG4gICAgaWYgKCFlKSB7XG4gICAgICBsb2dNYW5hZ2VyLmxvZ0Vycm9yKFwibm9kZU5hbWUg5LiN6IO95Li656m6XCIpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICghT2JqZWN0LnZhbHVlcyhQb29sTm9kZU5hbWUpLmluY2x1ZGVzKGUpKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0UG9vbChlKTtcbiAgICBpZiAoIXQpIHJldHVybiBudWxsO1xuICAgIHZhciBvID0gdC5nZXQoKTtcbiAgICBpZiAobykgcmV0dXJuIG87XG4gICAgdmFyIHIgPSB0aGlzLl9wcmVmYWJNYXAuZ2V0KGUpO1xuICAgIGlmIChyKSB7XG4gICAgICAobyA9IGNjLmluc3RhbnRpYXRlKHIpKS5wb29sTmFtZSA9IGU7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcHV0Tm9kZShlKSB7XG4gICAgaWYgKGUgJiYgY2MuaXNWYWxpZChlKSkge1xuICAgICAgdmFyIHQgPSBlLnBvb2xOYW1lO1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmdldFBvb2wodCk7XG4gICAgICAgIG8gJiYgby5wdXQoZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldFBvb2woZSkge1xuICAgIGlmICghZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIuiKgueCueWQjeensOS4jeiDveS4uuepulwiKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoIU9iamVjdC52YWx1ZXMoUG9vbE5vZGVOYW1lKS5pbmNsdWRlcyhlKSkgcmV0dXJuIG51bGw7XG4gICAgaWYgKHRoaXMuX3Bvb2xNYXAuaGFzKGUpKSByZXR1cm4gdGhpcy5fcG9vbE1hcC5nZXQoZSk7XG4gICAgdmFyIHQgPSBuZXcgY2MuTm9kZVBvb2woZSk7XG4gICAgdGhpcy5fcG9vbE1hcC5zZXQoZSwgdCk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgY2xlYXJQb29sKGUsIHQgPSBmYWxzZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBpZiAoT2JqZWN0LnZhbHVlcyhQb29sTm9kZU5hbWUpLmluY2x1ZGVzKGUpKSB7XG4gICAgICAgIHZhciBvID0gdGhpcy5fcG9vbE1hcC5nZXQoZSk7XG4gICAgICAgIG8gJiYgby5jbGVhcigpO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgIHRoaXMuX3Bvb2xNYXAuZGVsZXRlKGUpO1xuICAgICAgICAgIHRoaXMuX3ByZWZhYk1hcC5kZWxldGUoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgY29uc29sZS5lcnJvcihcIuiKgueCueWQjeensOS4jeiDveS4uuepulwiKTtcbiAgfVxufVxuZXhwb3J0IHZhciBwb29sTWFuYWdlciA9IG5ldyByKCk7Il19