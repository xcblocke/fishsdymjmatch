
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2FixedRandomStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8bf9dXQh/VMaKcmo+O/fiq8', 'Tile2FixedRandomStrategy');
// Scripts/Tile2FixedRandomStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResManager_1 = require("./framework/manager/ResManager");
var Tile2BaseStrategy_1 = require("./Tile2BaseStrategy");
var Tile2FixedRandomStrategy = /** @class */ (function (_super) {
    __extends(Tile2FixedRandomStrategy, _super);
    function Tile2FixedRandomStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Tile2FixedRandom";
        _this.priority = 90;
        _this._initConfig = null;
        return _this;
    }
    Tile2FixedRandomStrategy.prototype.getPriority = function () {
        return 90;
    };
    Tile2FixedRandomStrategy.prototype.getConfig = function () {
        return null;
    };
    Tile2FixedRandomStrategy.prototype.init = function () {
        this.priority = this.getPriority();
        this._initConfig = this.getConfig();
        if (!this._initConfig || !this._initConfig.strategy)
            return Promise.resolve();
        for (var e = this._initConfig, t = e.minLevel, o = e.maxLevel, n = [], i = t; i <= o; i++)
            n.push(i.toString().padStart(2, "0"));
        this.notifyDataLoaded(n);
        return Promise.resolve();
    };
    Tile2FixedRandomStrategy.prototype.notifyDataLoaded = function () { };
    Tile2FixedRandomStrategy.prototype.canHandle = function (e) {
        if (!this._initConfig)
            return false;
        var t = e.gameData.getLevelId();
        return !!t && t >= this._initConfig.minLevel && t <= this._initConfig.maxLevel;
    };
    Tile2FixedRandomStrategy.prototype.extract = function (e) {
        var t = this, o = e.gameData.getLevelId().toString().padStart(2, "0"), n = this.getConfig();
        if (!n || !n.strategy)
            return Promise.resolve(null);
        var i = "" + n.path + o;
        return ResManager_1.resManager.loadRes(i, cc.JsonAsset, n.bundle).then(function (e) {
            var n = Array.isArray(e) ? e[0] : e;
            if (!n || !n.json)
                return null;
            var i = n.json;
            n.decRef();
            if (!i || 0 === i.length)
                return null;
            var r = i[Math.floor(Math.random() * i.length)];
            return t.buildResult(r, o);
        }).catch(function () {
            return null;
        });
    };
    Tile2FixedRandomStrategy.prototype.buildResult = function (e, t) {
        return {
            content: e.content,
            index: String(e.index),
            slover: e.solver,
            tileNum: e.tile_num,
            libName: "fixRandom_" + t
        };
    };
    __decorate([
        mj.traitEvent("T2FxRnd_priority")
    ], Tile2FixedRandomStrategy.prototype, "getPriority", null);
    __decorate([
        mj.traitEvent("T2FxRnd_config")
    ], Tile2FixedRandomStrategy.prototype, "getConfig", null);
    __decorate([
        mj.traitEvent("T2FxRnd_onLoaded")
    ], Tile2FixedRandomStrategy.prototype, "notifyDataLoaded", null);
    Tile2FixedRandomStrategy = __decorate([
        mj.class("Tile2FixedRandomStrategy")
    ], Tile2FixedRandomStrategy);
    return Tile2FixedRandomStrategy;
}(Tile2BaseStrategy_1.default));
exports.default = Tile2FixedRandomStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyRml4ZWRSYW5kb21TdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTREO0FBQzVELHlEQUFvRDtBQUVwRDtJQUFzRCw0Q0FBaUI7SUFBdkU7UUFBQSxxRUFzREM7UUFyREMsVUFBSSxHQUFHLGtCQUFrQixDQUFDO1FBQzFCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxpQkFBVyxHQUFHLElBQUksQ0FBQzs7SUFtRHJCLENBQUM7SUFqREMsOENBQVcsR0FBWDtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELDRDQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCx1Q0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVE7WUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5RSxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsbURBQWdCLEdBQWhCLGNBQW9CLENBQUM7SUFDckIsNENBQVMsR0FBVCxVQUFVLENBQUM7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ2pGLENBQUM7SUFDRCwwQ0FBTyxHQUFQLFVBQVEsQ0FBQztRQUNQLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUN2RCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUTtZQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDeEIsT0FBTyx1QkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuRSxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNmLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoRCxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsOENBQVcsR0FBWCxVQUFZLENBQUMsRUFBRSxDQUFDO1FBQ2QsT0FBTztZQUNMLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztZQUNsQixLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNO1lBQ2hCLE9BQU8sRUFBRSxDQUFDLENBQUMsUUFBUTtZQUNuQixPQUFPLEVBQUUsWUFBWSxHQUFHLENBQUM7U0FDMUIsQ0FBQztJQUNKLENBQUM7SUFoREQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDOytEQUdqQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQzs2REFHL0I7SUFVRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7b0VBQ2I7SUFyQkYsd0JBQXdCO1FBRDVDLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBc0Q1QztJQUFELCtCQUFDO0NBdERELEFBc0RDLENBdERxRCwyQkFBaUIsR0FzRHRFO2tCQXREb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzTWFuYWdlciB9IGZyb20gJy4vZnJhbWV3b3JrL21hbmFnZXIvUmVzTWFuYWdlcic7XG5pbXBvcnQgVGlsZTJCYXNlU3RyYXRlZ3kgZnJvbSAnLi9UaWxlMkJhc2VTdHJhdGVneSc7XG5AbWouY2xhc3MoXCJUaWxlMkZpeGVkUmFuZG9tU3RyYXRlZ3lcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyRml4ZWRSYW5kb21TdHJhdGVneSBleHRlbmRzIFRpbGUyQmFzZVN0cmF0ZWd5IHtcbiAgbmFtZSA9IFwiVGlsZTJGaXhlZFJhbmRvbVwiO1xuICBwcmlvcml0eSA9IDkwO1xuICBfaW5pdENvbmZpZyA9IG51bGw7XG4gIEBtai50cmFpdEV2ZW50KFwiVDJGeFJuZF9wcmlvcml0eVwiKVxuICBnZXRQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gOTA7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMkZ4Um5kX2NvbmZpZ1wiKVxuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gdGhpcy5nZXRQcmlvcml0eSgpO1xuICAgIHRoaXMuX2luaXRDb25maWcgPSB0aGlzLmdldENvbmZpZygpO1xuICAgIGlmICghdGhpcy5faW5pdENvbmZpZyB8fCAhdGhpcy5faW5pdENvbmZpZy5zdHJhdGVneSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGZvciAodmFyIGUgPSB0aGlzLl9pbml0Q29uZmlnLCB0ID0gZS5taW5MZXZlbCwgbyA9IGUubWF4TGV2ZWwsIG4gPSBbXSwgaSA9IHQ7IGkgPD0gbzsgaSsrKSBuLnB1c2goaS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XG4gICAgdGhpcy5ub3RpZnlEYXRhTG9hZGVkKG4pO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyRnhSbmRfb25Mb2FkZWRcIilcbiAgbm90aWZ5RGF0YUxvYWRlZCgpIHt9XG4gIGNhbkhhbmRsZShlKSB7XG4gICAgaWYgKCF0aGlzLl9pbml0Q29uZmlnKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHQgPSBlLmdhbWVEYXRhLmdldExldmVsSWQoKTtcbiAgICByZXR1cm4gISF0ICYmIHQgPj0gdGhpcy5faW5pdENvbmZpZy5taW5MZXZlbCAmJiB0IDw9IHRoaXMuX2luaXRDb25maWcubWF4TGV2ZWw7XG4gIH1cbiAgZXh0cmFjdChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgbyA9IGUuZ2FtZURhdGEuZ2V0TGV2ZWxJZCgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgbiA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgaWYgKCFuIHx8ICFuLnN0cmF0ZWd5KSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIHZhciBpID0gXCJcIiArIG4ucGF0aCArIG87XG4gICAgcmV0dXJuIHJlc01hbmFnZXIubG9hZFJlcyhpLCBjYy5Kc29uQXNzZXQsIG4uYnVuZGxlKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgbiA9IEFycmF5LmlzQXJyYXkoZSkgPyBlWzBdIDogZTtcbiAgICAgIGlmICghbiB8fCAhbi5qc29uKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBpID0gbi5qc29uO1xuICAgICAgbi5kZWNSZWYoKTtcbiAgICAgIGlmICghaSB8fCAwID09PSBpLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgciA9IGlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaS5sZW5ndGgpXTtcbiAgICAgIHJldHVybiB0LmJ1aWxkUmVzdWx0KHIsIG8pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICB9XG4gIGJ1aWxkUmVzdWx0KGUsIHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGVudDogZS5jb250ZW50LFxuICAgICAgaW5kZXg6IFN0cmluZyhlLmluZGV4KSxcbiAgICAgIHNsb3ZlcjogZS5zb2x2ZXIsXG4gICAgICB0aWxlTnVtOiBlLnRpbGVfbnVtLFxuICAgICAgbGliTmFtZTogXCJmaXhSYW5kb21fXCIgKyB0XG4gICAgfTtcbiAgfVxufSJdfQ==