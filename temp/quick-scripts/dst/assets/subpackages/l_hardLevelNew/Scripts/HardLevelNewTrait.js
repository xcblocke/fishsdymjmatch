
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hardLevelNew/Scripts/HardLevelNewTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f23d3d9UVLFoGCVB2nsysi', 'HardLevelNewTrait');
// subpackages/l_hardLevelNew/Scripts/HardLevelNewTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HardLevelNewTrait = /** @class */ (function (_super) {
    __extends(HardLevelNewTrait, _super);
    function HardLevelNewTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HardLevelNewTrait_1 = HardLevelNewTrait;
    HardLevelNewTrait.prototype.onLoad = function () {
        var t, r, a, i, o, l;
        _super.prototype.onLoad.call(this);
        var n = null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.firstHardLevel) && void 0 !== r ? r : 10;
        this._config = {
            firstHardLevel: n,
            cooldown: null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.cooldown) && void 0 !== i ? i : 4,
            hardDeathRate: 4,
            initDeathRate: 1,
            maxNotDieLevel: n - 1,
            useFixedLevel: null !== (l = null === (o = this._traitData) || void 0 === o ? void 0 : o.useFixedLevel) && void 0 !== l && l
        };
    };
    HardLevelNewTrait.prototype.onExtNormLv_getDeathLv = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.beforReturnVal, a = e.args[4], i = r;
            if (a === this._config.firstHardLevel) {
                r = "0" + this._config.hardDeathRate;
            }
            else {
                a <= this._config.maxNotDieLevel && (r = "0" + this._config.initDeathRate);
            }
            if (r !== i) {
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: r
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    HardLevelNewTrait.prototype.onExtractTool_isHardUI = function (e, t) {
        if (this.checkGameMode()) {
            this.handleLabel(e, t, true);
        }
        else {
            t();
        }
    };
    HardLevelNewTrait.prototype.onExtractTool_isExpertUI = function (e, t) {
        if (this.checkGameMode()) {
            this.handleLabel(e, t, false);
        }
        else {
            t();
        }
    };
    HardLevelNewTrait.prototype.onExtractTool_isHardUseFix = function (e, t) {
        if (this.checkGameMode()) {
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._config.useFixedLevel
            });
        }
        else {
            t();
        }
    };
    HardLevelNewTrait.prototype.handleLabel = function (e, t, r) {
        var a = e.args[0];
        this.ensureCacheStructure();
        var i = this.getLevelCache(a);
        if (i && void 0 !== i.hardResult && void 0 !== i.expertResult) {
            var o = r ? i.hardResult : i.expertResult;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else {
            var l = UserModel_1.default.getInstance().getCurrentGameData().getDieResult(), s = this.calcShow(a, l, true), u = this.calcShow(a, l, false);
            this.setLevelCache(a, s, u);
            if (s) {
                this.localData.lastHardLevelID = a;
                this.localData.lastShowType = 1;
            }
            else if (u) {
                this.localData.lastHardLevelID = a;
                this.localData.lastShowType = 2;
            }
            var h = r ? s : u;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: h
            });
        }
    };
    HardLevelNewTrait.prototype.getLastHardLevelID = function () {
        return this.toNumber(this.localData.lastHardLevelID);
    };
    HardLevelNewTrait.prototype.calcShow = function (e, t, r) {
        if (e === this._config.firstHardLevel)
            return r;
        if (e <= this._config.maxNotDieLevel)
            return false;
        var a = this.getLastHardLevelID();
        if (1 !== t)
            return false;
        if (e > a && a > 0 && e - a <= this._config.cooldown)
            return false;
        if (e === a) {
            var i = this.toNumber(this.localData.lastShowType);
            if (1 === i)
                return r;
            if (2 === i)
                return !r;
        }
        var o = this.toNumber(this.localData.lastShowType);
        return !(0 !== o && 2 !== o || !r) || 1 === o && !r;
    };
    HardLevelNewTrait.prototype.ensureCacheStructure = function () {
        this.localData.levelCacheMap || (this.localData.levelCacheMap = {});
        this.localData.levelCacheOrder && Array.isArray(this.localData.levelCacheOrder) || (this.localData.levelCacheOrder = []);
    };
    HardLevelNewTrait.prototype.getLevelCache = function (e) {
        var t, r = String(e);
        return null !== (t = this.localData.levelCacheMap[r]) && void 0 !== t ? t : null;
    };
    HardLevelNewTrait.prototype.setLevelCache = function (e, t, a) {
        var i = String(e), o = this.localData.levelCacheOrder, l = o.indexOf(e);
        -1 !== l && o.splice(l, 1);
        for (; o.length >= HardLevelNewTrait_1.MAX_CACHE_SIZE;) {
            var n = o.shift();
            void 0 !== n && delete this.localData.levelCacheMap[String(n)];
        }
        this.localData.levelCacheMap[i] = {
            levelID: e,
            hardResult: t,
            expertResult: a
        };
        o.push(e);
        this.localData.levelCacheMap = this.localData.levelCacheMap;
        this.localData.levelCacheOrder = this.localData.levelCacheOrder;
    };
    HardLevelNewTrait.prototype.toNumber = function (e, t) {
        if (t === void 0) { t = 0; }
        if ("number" == typeof e && !isNaN(e))
            return e;
        if ("string" == typeof e && "" !== e) {
            var r = Number(e);
            return isNaN(r) ? t : r;
        }
        return t;
    };
    var HardLevelNewTrait_1;
    HardLevelNewTrait.traitKey = "HardLevelNew";
    HardLevelNewTrait.MAX_CACHE_SIZE = 10;
    __decorate([
        mj.traitEvent("HardLvNew_getLastId")
    ], HardLevelNewTrait.prototype, "getLastHardLevelID", null);
    HardLevelNewTrait = HardLevelNewTrait_1 = __decorate([
        mj.trait,
        mj.class("HardLevelNewTrait")
    ], HardLevelNewTrait);
    return HardLevelNewTrait;
}(ExtractTrait_1.default));
exports.default = HardLevelNewTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhcmRMZXZlbE5ldy9TY3JpcHRzL0hhcmRMZXZlbE5ld1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUdqRTtJQUErQyxxQ0FBWTtJQUEzRDs7SUFrSkEsQ0FBQzswQkFsSm9CLGlCQUFpQjtJQUdwQyxrQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzNILElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixjQUFjLEVBQUUsQ0FBQztZQUNqQixRQUFRLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JILGFBQWEsRUFBRSxDQUFDO1lBQ2hCLGFBQWEsRUFBRSxDQUFDO1lBQ2hCLGNBQWMsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNyQixhQUFhLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQzdILENBQUM7SUFDSixDQUFDO0lBQ0Qsa0RBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQ3RCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNiLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDUixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRTtnQkFDckMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQzthQUN0QztpQkFBTTtnQkFDTCxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDNUU7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ1gsQ0FBQyxDQUFDO29CQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO29CQUMxQyxPQUFPLEVBQUUsSUFBSTtvQkFDYixTQUFTLEVBQUUsQ0FBQztpQkFDYixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxDQUFDLEVBQUUsQ0FBQzthQUNMO1NBQ0Y7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0Qsa0RBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCxvREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELHNEQUEwQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWE7YUFDdEMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsdUNBQVcsR0FBWCxVQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUMxQyxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxZQUFZLEVBQUUsRUFDakUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFDN0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7YUFDakM7aUJBQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7YUFDakM7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCw4Q0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0Qsb0NBQVEsR0FBUixVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ25ELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxnREFBb0IsR0FBcEI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNILENBQUM7SUFDRCx5Q0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ25GLENBQUM7SUFDRCx5Q0FBYSxHQUFiLFVBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFDZixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQ2xDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksbUJBQWlCLENBQUMsY0FBYyxHQUFHO1lBQ3BELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ2hDLE9BQU8sRUFBRSxDQUFDO1lBQ1YsVUFBVSxFQUFFLENBQUM7WUFDYixZQUFZLEVBQUUsQ0FBQztTQUNoQixDQUFDO1FBQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO0lBQ2xFLENBQUM7SUFDRCxvQ0FBUSxHQUFSLFVBQVMsQ0FBQyxFQUFFLENBQUs7UUFBTCxrQkFBQSxFQUFBLEtBQUs7UUFDZixJQUFJLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7O0lBaEpNLDBCQUFRLEdBQUcsY0FBYyxDQUFDO0lBQzFCLGdDQUFjLEdBQUcsRUFBRSxDQUFDO0lBNEYzQjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7K0RBR3BDO0lBaEdrQixpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBa0pyQztJQUFELHdCQUFDO0NBbEpELEFBa0pDLENBbEo4QyxzQkFBWSxHQWtKMUQ7a0JBbEpvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRXh0cmFjdFRyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkhhcmRMZXZlbE5ld1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXJkTGV2ZWxOZXdUcmFpdCBleHRlbmRzIEV4dHJhY3RUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiSGFyZExldmVsTmV3XCI7XG4gIHN0YXRpYyBNQVhfQ0FDSEVfU0laRSA9IDEwO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHQsIHIsIGEsIGksIG8sIGw7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdmFyIG4gPSBudWxsICE9PSAociA9IG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmZpcnN0SGFyZExldmVsKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMTA7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgZmlyc3RIYXJkTGV2ZWw6IG4sXG4gICAgICBjb29sZG93bjogbnVsbCAhPT0gKGkgPSBudWxsID09PSAoYSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5jb29sZG93bikgJiYgdm9pZCAwICE9PSBpID8gaSA6IDQsXG4gICAgICBoYXJkRGVhdGhSYXRlOiA0LFxuICAgICAgaW5pdERlYXRoUmF0ZTogMSxcbiAgICAgIG1heE5vdERpZUxldmVsOiBuIC0gMSxcbiAgICAgIHVzZUZpeGVkTGV2ZWw6IG51bGwgIT09IChsID0gbnVsbCA9PT0gKG8gPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8udXNlRml4ZWRMZXZlbCkgJiYgdm9pZCAwICE9PSBsICYmIGxcbiAgICB9O1xuICB9XG4gIG9uRXh0Tm9ybUx2X2dldERlYXRoTHYoZSwgdCkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIHIgPSBlLmJlZm9yUmV0dXJuVmFsLFxuICAgICAgICBhID0gZS5hcmdzWzRdLFxuICAgICAgICBpID0gcjtcbiAgICAgIGlmIChhID09PSB0aGlzLl9jb25maWcuZmlyc3RIYXJkTGV2ZWwpIHtcbiAgICAgICAgciA9IFwiMFwiICsgdGhpcy5fY29uZmlnLmhhcmREZWF0aFJhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhIDw9IHRoaXMuX2NvbmZpZy5tYXhOb3REaWVMZXZlbCAmJiAociA9IFwiMFwiICsgdGhpcy5fY29uZmlnLmluaXREZWF0aFJhdGUpO1xuICAgICAgfVxuICAgICAgaWYgKHIgIT09IGkpIHtcbiAgICAgICAgdCh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiByXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25FeHRyYWN0VG9vbF9pc0hhcmRVSShlLCB0KSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB0aGlzLmhhbmRsZUxhYmVsKGUsIHQsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIG9uRXh0cmFjdFRvb2xfaXNFeHBlcnRVSShlLCB0KSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB0aGlzLmhhbmRsZUxhYmVsKGUsIHQsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBvbkV4dHJhY3RUb29sX2lzSGFyZFVzZUZpeChlLCB0KSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMuX2NvbmZpZy51c2VGaXhlZExldmVsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVMYWJlbChlLCB0LCByKSB7XG4gICAgdmFyIGEgPSBlLmFyZ3NbMF07XG4gICAgdGhpcy5lbnN1cmVDYWNoZVN0cnVjdHVyZSgpO1xuICAgIHZhciBpID0gdGhpcy5nZXRMZXZlbENhY2hlKGEpO1xuICAgIGlmIChpICYmIHZvaWQgMCAhPT0gaS5oYXJkUmVzdWx0ICYmIHZvaWQgMCAhPT0gaS5leHBlcnRSZXN1bHQpIHtcbiAgICAgIHZhciBvID0gciA/IGkuaGFyZFJlc3VsdCA6IGkuZXhwZXJ0UmVzdWx0O1xuICAgICAgdCh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBvXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGwgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZURhdGEoKS5nZXREaWVSZXN1bHQoKSxcbiAgICAgICAgcyA9IHRoaXMuY2FsY1Nob3coYSwgbCwgdHJ1ZSksXG4gICAgICAgIHUgPSB0aGlzLmNhbGNTaG93KGEsIGwsIGZhbHNlKTtcbiAgICAgIHRoaXMuc2V0TGV2ZWxDYWNoZShhLCBzLCB1KTtcbiAgICAgIGlmIChzKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RIYXJkTGV2ZWxJRCA9IGE7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RTaG93VHlwZSA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdEhhcmRMZXZlbElEID0gYTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFNob3dUeXBlID0gMjtcbiAgICAgIH1cbiAgICAgIHZhciBoID0gciA/IHMgOiB1O1xuICAgICAgdCh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBoXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJIYXJkTHZOZXdfZ2V0TGFzdElkXCIpXG4gIGdldExhc3RIYXJkTGV2ZWxJRCgpIHtcbiAgICByZXR1cm4gdGhpcy50b051bWJlcih0aGlzLmxvY2FsRGF0YS5sYXN0SGFyZExldmVsSUQpO1xuICB9XG4gIGNhbGNTaG93KGUsIHQsIHIpIHtcbiAgICBpZiAoZSA9PT0gdGhpcy5fY29uZmlnLmZpcnN0SGFyZExldmVsKSByZXR1cm4gcjtcbiAgICBpZiAoZSA8PSB0aGlzLl9jb25maWcubWF4Tm90RGllTGV2ZWwpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgYSA9IHRoaXMuZ2V0TGFzdEhhcmRMZXZlbElEKCk7XG4gICAgaWYgKDEgIT09IHQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZSA+IGEgJiYgYSA+IDAgJiYgZSAtIGEgPD0gdGhpcy5fY29uZmlnLmNvb2xkb3duKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGUgPT09IGEpIHtcbiAgICAgIHZhciBpID0gdGhpcy50b051bWJlcih0aGlzLmxvY2FsRGF0YS5sYXN0U2hvd1R5cGUpO1xuICAgICAgaWYgKDEgPT09IGkpIHJldHVybiByO1xuICAgICAgaWYgKDIgPT09IGkpIHJldHVybiAhcjtcbiAgICB9XG4gICAgdmFyIG8gPSB0aGlzLnRvTnVtYmVyKHRoaXMubG9jYWxEYXRhLmxhc3RTaG93VHlwZSk7XG4gICAgcmV0dXJuICEoMCAhPT0gbyAmJiAyICE9PSBvIHx8ICFyKSB8fCAxID09PSBvICYmICFyO1xuICB9XG4gIGVuc3VyZUNhY2hlU3RydWN0dXJlKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmxldmVsQ2FjaGVNYXAgfHwgKHRoaXMubG9jYWxEYXRhLmxldmVsQ2FjaGVNYXAgPSB7fSk7XG4gICAgdGhpcy5sb2NhbERhdGEubGV2ZWxDYWNoZU9yZGVyICYmIEFycmF5LmlzQXJyYXkodGhpcy5sb2NhbERhdGEubGV2ZWxDYWNoZU9yZGVyKSB8fCAodGhpcy5sb2NhbERhdGEubGV2ZWxDYWNoZU9yZGVyID0gW10pO1xuICB9XG4gIGdldExldmVsQ2FjaGUoZSkge1xuICAgIHZhciB0LFxuICAgICAgciA9IFN0cmluZyhlKTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLmxvY2FsRGF0YS5sZXZlbENhY2hlTWFwW3JdKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogbnVsbDtcbiAgfVxuICBzZXRMZXZlbENhY2hlKGUsIHQsIGEpIHtcbiAgICB2YXIgaSA9IFN0cmluZyhlKSxcbiAgICAgIG8gPSB0aGlzLmxvY2FsRGF0YS5sZXZlbENhY2hlT3JkZXIsXG4gICAgICBsID0gby5pbmRleE9mKGUpO1xuICAgIC0xICE9PSBsICYmIG8uc3BsaWNlKGwsIDEpO1xuICAgIGZvciAoOyBvLmxlbmd0aCA+PSBIYXJkTGV2ZWxOZXdUcmFpdC5NQVhfQ0FDSEVfU0laRTspIHtcbiAgICAgIHZhciBuID0gby5zaGlmdCgpO1xuICAgICAgdm9pZCAwICE9PSBuICYmIGRlbGV0ZSB0aGlzLmxvY2FsRGF0YS5sZXZlbENhY2hlTWFwW1N0cmluZyhuKV07XG4gICAgfVxuICAgIHRoaXMubG9jYWxEYXRhLmxldmVsQ2FjaGVNYXBbaV0gPSB7XG4gICAgICBsZXZlbElEOiBlLFxuICAgICAgaGFyZFJlc3VsdDogdCxcbiAgICAgIGV4cGVydFJlc3VsdDogYVxuICAgIH07XG4gICAgby5wdXNoKGUpO1xuICAgIHRoaXMubG9jYWxEYXRhLmxldmVsQ2FjaGVNYXAgPSB0aGlzLmxvY2FsRGF0YS5sZXZlbENhY2hlTWFwO1xuICAgIHRoaXMubG9jYWxEYXRhLmxldmVsQ2FjaGVPcmRlciA9IHRoaXMubG9jYWxEYXRhLmxldmVsQ2FjaGVPcmRlcjtcbiAgfVxuICB0b051bWJlcihlLCB0ID0gMCkge1xuICAgIGlmIChcIm51bWJlclwiID09IHR5cGVvZiBlICYmICFpc05hTihlKSkgcmV0dXJuIGU7XG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgJiYgXCJcIiAhPT0gZSkge1xuICAgICAgdmFyIHIgPSBOdW1iZXIoZSk7XG4gICAgICByZXR1cm4gaXNOYU4ocikgPyB0IDogcjtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG4gIH1cbn0iXX0=