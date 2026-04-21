
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowerCardSeries/Scripts/FlowerCardStarTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f3ee8JdItVMbaelatnhwCtH', 'FlowerCardStarTrait');
// subpackages/l_flowerCardSeries/Scripts/FlowerCardStarTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var FlowerStarConfigUtil_1 = require("../../../Scripts/gamePlay/base/data/FlowerStarConfigUtil");
var FlowerCardStarTrait = /** @class */ (function (_super) {
    __extends(FlowerCardStarTrait, _super);
    function FlowerCardStarTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._exchangeNames = {
            H_lan: "H_mei",
            H_zhu: "H_mei",
            H_ju: "H_mei",
            J_xia: "J_chun",
            J_qiu: "J_chun",
            J_dong: "J_chun"
        };
        _this._config = {};
        _this._gameType = GameTypeEnums_1.MjGameType.None;
        return _this;
    }
    Object.defineProperty(FlowerCardStarTrait.prototype, "_flowerSeriesList", {
        get: function () {
            return FlowerStarConfigUtil_1.FlowerStarConfigUtil.getFullList();
        },
        enumerable: false,
        configurable: true
    });
    FlowerCardStarTrait.prototype.onLoad = function () {
        var t, r, a, o, i, n;
        _super.prototype.onLoad.call(this);
        this._config = {
            Normal: null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.Normal) && void 0 !== r ? r : 0,
            DailyChallenge: null !== (o = null === (a = this._traitData) || void 0 === a ? void 0 : a.DailyChallenge) && void 0 !== o ? o : 0,
            Travel: null !== (n = null === (i = this._traitData) || void 0 === i ? void 0 : i.Travel) && void 0 !== n ? n : 0,
            priority: LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai
        };
    };
    FlowerCardStarTrait.prototype.onFlowerCS_shouldLimit = function (e, t) {
        var r, a = null === (r = e.ins) || void 0 === r ? void 0 : r._currentGameType;
        if (this.isGameTypeOpen(a) || this.isAllStar()) {
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            t();
        }
    };
    FlowerCardStarTrait.prototype.onFlowerCS_preloadAll = function (e, t) {
        var r, a = null === (r = e.ins) || void 0 === r ? void 0 : r._currentGameType;
        if (this.isGameTypeOpen(a) || this.isAllStar()) {
            t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else {
            t();
        }
    };
    FlowerCardStarTrait.prototype.onFlowerCS_getAllModeData = function (e, t) {
        var r = e.beforReturnVal;
        if (r)
            for (var a = 0; a < r.length; a++)
                if ((o = r[a]).currentSeries) {
                    if (o.currentSeries.isLocal || "mainRes" === o.currentSeries.bundle)
                        continue;
                    LowPriorityBundleLoader_1.default.getInstance().addTask(o.currentSeries.bundle, this._config.priority);
                }
        for (a = 0; a < this._flowerSeriesList.length; a++) {
            var o;
            (o = this._flowerSeriesList[a]).isLocal || "mainRes" === o.bundle || LowPriorityBundleLoader_1.default.getInstance().addTask(o.bundle, this._config.priority);
        }
        t({
            returnVal: r
        });
    };
    FlowerCardStarTrait.prototype.onFlowerCS_isBundleReady = function (e, t) {
        var r, a = e.args[0], o = null === (r = e.ins) || void 0 === r ? void 0 : r._currentGameType;
        if (this.isGameTypeOpen(o) || this.isAllStar()) {
            var i = LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(a);
            t({
                returnType: TraitCallbackReturnType.jump,
                returnVal: i
            });
        }
        else
            t();
    };
    FlowerCardStarTrait.prototype.onFlowerCS_getResName = function (e, t) {
        var r, a = e.args[0];
        this._exchangeNames[a] && (a = this._exchangeNames[a]);
        var o = null === (r = e.ins) || void 0 === r ? void 0 : r._currentGameType;
        if (this.isGameTypeOpen(o) || this.isAllStar()) {
            t({
                returnType: TraitCallbackReturnType.jump,
                returnVal: a
            });
        }
        else {
            t();
        }
    };
    FlowerCardStarTrait.prototype.onInitViewBhv_crtTls = function (e, t) {
        var r, a;
        this._gameType = null === (a = null === (r = e.ins) || void 0 === r ? void 0 : r._context) || void 0 === a ? void 0 : a.gameType;
        t();
    };
    FlowerCardStarTrait.prototype.isGameTypeOpen = function (e) {
        return 1 == this._config[e];
    };
    FlowerCardStarTrait.prototype.isAllStar = function () {
        return 1 == this._config.Travel && 1 == this._config.DailyChallenge && 1 == this._config.Normal;
    };
    FlowerCardStarTrait.prototype.onFlowerCS_getFlowerSeries = function (e, t) {
        if (this.isGameTypeOpen(this._gameType) || this.isAllStar()) {
            t({
                returnType: TraitCallbackReturnType.jump,
                returnVal: this._flowerSeriesList
            });
        }
        else {
            t();
        }
    };
    FlowerCardStarTrait.prototype.onFlowerCS_setLastSeriesId = function (e, t) {
        if (this.isGameTypeOpen(this._gameType)) {
            this.localData.lastSeriesId = e.args[0];
            this.localData = this.localData;
            t({
                returnType: TraitCallbackReturnType.jump
            });
        }
        else
            t();
    };
    FlowerCardStarTrait.prototype.onFlowerCS_getLastSeriesId = function (e, t) {
        if (this.isGameTypeOpen(this._gameType)) {
            t({
                returnType: TraitCallbackReturnType.return,
                returnVal: this.localData.lastSeriesId > 0 ? this.localData.lastSeriesId : 1
            });
        }
        else {
            t();
        }
    };
    FlowerCardStarTrait.prototype.onFlowerCS_setSeqId = function (e, t) {
        if (this.isGameTypeOpen(this._gameType)) {
            this.localData.sequenceSeriesId = e.args[0];
            this.localData = this.localData;
            t({
                returnType: TraitCallbackReturnType.jump
            });
        }
        else
            t();
    };
    FlowerCardStarTrait.prototype.onFlowerCS_getSeqId = function (e, t) {
        if (this.isGameTypeOpen(this._gameType)) {
            t({
                returnType: TraitCallbackReturnType.jump,
                returnVal: this.localData.sequenceSeriesId > 0 ? this.localData.sequenceSeriesId : 1
            });
        }
        else {
            t();
        }
    };
    FlowerCardStarTrait.prototype.onClearEffBhv_isSpCard = function (e, t) {
        if (this.isGameTypeOpen(this._gameType)) {
            t({
                returnVal: false
            });
        }
        else {
            t();
        }
    };
    FlowerCardStarTrait.traitKey = "FlowerCardStar";
    FlowerCardStarTrait = __decorate([
        mj.trait,
        mj.class("FlowerCardStarTrait")
    ], FlowerCardStarTrait);
    return FlowerCardStarTrait;
}(Trait_1.default));
exports.default = FlowerCardStarTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dlckNhcmRTZXJpZXMvU2NyaXB0cy9GbG93ZXJDYXJkU3RhclRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBQzNELHFHQUFnSTtBQUNoSSxpR0FBZ0c7QUFHaEc7SUFBaUQsdUNBQUs7SUFBdEQ7UUFBQSxxRUE4SkM7UUE3SkMsb0JBQWMsR0FBRztZQUNmLEtBQUssRUFBRSxPQUFPO1lBQ2QsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxRQUFRO1lBQ2YsS0FBSyxFQUFFLFFBQVE7WUFDZixNQUFNLEVBQUUsUUFBUTtTQUNqQixDQUFDO1FBQ0YsYUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGVBQVMsR0FBRywwQkFBVSxDQUFDLElBQUksQ0FBQzs7SUFvSjlCLENBQUM7SUFsSkMsc0JBQUksa0RBQWlCO2FBQXJCO1lBQ0UsT0FBTywyQ0FBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQUNELG9DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLE1BQU0sRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENB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O0lBQ0Qsb0RBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkMsQ0FBQyxDQUFDO2dCQUNBLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQWxKTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBWGhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0E4SnZDO0lBQUQsMEJBQUM7Q0E5SkQsQUE4SkMsQ0E5SmdELGVBQUssR0E4SnJEO2tCQTlKb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLCB7IEVMb3dQcmlvcml0eUJ1bmRsZVByaW9yaXR5IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0xvd1ByaW9yaXR5QnVuZGxlTG9hZGVyJztcbmltcG9ydCB7IEZsb3dlclN0YXJDb25maWdVdGlsIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL2RhdGEvRmxvd2VyU3RhckNvbmZpZ1V0aWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJGbG93ZXJDYXJkU3RhclRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG93ZXJDYXJkU3RhclRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfZXhjaGFuZ2VOYW1lcyA9IHtcbiAgICBIX2xhbjogXCJIX21laVwiLFxuICAgIEhfemh1OiBcIkhfbWVpXCIsXG4gICAgSF9qdTogXCJIX21laVwiLFxuICAgIEpfeGlhOiBcIkpfY2h1blwiLFxuICAgIEpfcWl1OiBcIkpfY2h1blwiLFxuICAgIEpfZG9uZzogXCJKX2NodW5cIlxuICB9O1xuICBfY29uZmlnID0ge307XG4gIF9nYW1lVHlwZSA9IE1qR2FtZVR5cGUuTm9uZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGbG93ZXJDYXJkU3RhclwiO1xuICBnZXQgX2Zsb3dlclNlcmllc0xpc3QoKSB7XG4gICAgcmV0dXJuIEZsb3dlclN0YXJDb25maWdVdGlsLmdldEZ1bGxMaXN0KCk7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHZhciB0LCByLCBhLCBvLCBpLCBuO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIE5vcm1hbDogbnVsbCAhPT0gKHIgPSBudWxsID09PSAodCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5Ob3JtYWwpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAwLFxuICAgICAgRGFpbHlDaGFsbGVuZ2U6IG51bGwgIT09IChvID0gbnVsbCA9PT0gKGEgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuRGFpbHlDaGFsbGVuZ2UpICYmIHZvaWQgMCAhPT0gbyA/IG8gOiAwLFxuICAgICAgVHJhdmVsOiBudWxsICE9PSAobiA9IG51bGwgPT09IChpID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLlRyYXZlbCkgJiYgdm9pZCAwICE9PSBuID8gbiA6IDAsXG4gICAgICBwcmlvcml0eTogRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkuRGVmYXVsdENhcmRYaW5neXVuSHVhUGFpXG4gICAgfTtcbiAgfVxuICBvbkZsb3dlckNTX3Nob3VsZExpbWl0KGUsIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIGEgPSBudWxsID09PSAociA9IGUuaW5zKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLl9jdXJyZW50R2FtZVR5cGU7XG4gICAgaWYgKHRoaXMuaXNHYW1lVHlwZU9wZW4oYSkgfHwgdGhpcy5pc0FsbFN0YXIoKSkge1xuICAgICAgdCh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBvbkZsb3dlckNTX3ByZWxvYWRBbGwoZSwgdCkge1xuICAgIHZhciByLFxuICAgICAgYSA9IG51bGwgPT09IChyID0gZS5pbnMpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuX2N1cnJlbnRHYW1lVHlwZTtcbiAgICBpZiAodGhpcy5pc0dhbWVUeXBlT3BlbihhKSB8fCB0aGlzLmlzQWxsU3RhcigpKSB7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBvbkZsb3dlckNTX2dldEFsbE1vZGVEYXRhKGUsIHQpIHtcbiAgICB2YXIgciA9IGUuYmVmb3JSZXR1cm5WYWw7XG4gICAgaWYgKHIpIGZvciAodmFyIGEgPSAwOyBhIDwgci5sZW5ndGg7IGErKykgaWYgKChvID0gclthXSkuY3VycmVudFNlcmllcykge1xuICAgICAgaWYgKG8uY3VycmVudFNlcmllcy5pc0xvY2FsIHx8IFwibWFpblJlc1wiID09PSBvLmN1cnJlbnRTZXJpZXMuYnVuZGxlKSBjb250aW51ZTtcbiAgICAgIExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuYWRkVGFzayhvLmN1cnJlbnRTZXJpZXMuYnVuZGxlLCB0aGlzLl9jb25maWcucHJpb3JpdHkpO1xuICAgIH1cbiAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5fZmxvd2VyU2VyaWVzTGlzdC5sZW5ndGg7IGErKykge1xuICAgICAgdmFyIG87XG4gICAgICAobyA9IHRoaXMuX2Zsb3dlclNlcmllc0xpc3RbYV0pLmlzTG9jYWwgfHwgXCJtYWluUmVzXCIgPT09IG8uYnVuZGxlIHx8IExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuYWRkVGFzayhvLmJ1bmRsZSwgdGhpcy5fY29uZmlnLnByaW9yaXR5KTtcbiAgICB9XG4gICAgdCh7XG4gICAgICByZXR1cm5WYWw6IHJcbiAgICB9KTtcbiAgfVxuICBvbkZsb3dlckNTX2lzQnVuZGxlUmVhZHkoZSwgdCkge1xuICAgIHZhciByLFxuICAgICAgYSA9IGUuYXJnc1swXSxcbiAgICAgIG8gPSBudWxsID09PSAociA9IGUuaW5zKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLl9jdXJyZW50R2FtZVR5cGU7XG4gICAgaWYgKHRoaXMuaXNHYW1lVHlwZU9wZW4obykgfHwgdGhpcy5pc0FsbFN0YXIoKSkge1xuICAgICAgdmFyIGkgPSBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlci5nZXRJbnN0YW5jZSgpLmlzQnVuZGxlUHJlTG9hZGVkKGEpO1xuICAgICAgdCh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICAgIHJldHVyblZhbDogaVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkZsb3dlckNTX2dldFJlc05hbWUoZSwgdCkge1xuICAgIHZhciByLFxuICAgICAgYSA9IGUuYXJnc1swXTtcbiAgICB0aGlzLl9leGNoYW5nZU5hbWVzW2FdICYmIChhID0gdGhpcy5fZXhjaGFuZ2VOYW1lc1thXSk7XG4gICAgdmFyIG8gPSBudWxsID09PSAociA9IGUuaW5zKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLl9jdXJyZW50R2FtZVR5cGU7XG4gICAgaWYgKHRoaXMuaXNHYW1lVHlwZU9wZW4obykgfHwgdGhpcy5pc0FsbFN0YXIoKSkge1xuICAgICAgdCh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICAgIHJldHVyblZhbDogYVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25Jbml0Vmlld0Jodl9jcnRUbHMoZSwgdCkge1xuICAgIHZhciByLCBhO1xuICAgIHRoaXMuX2dhbWVUeXBlID0gbnVsbCA9PT0gKGEgPSBudWxsID09PSAociA9IGUuaW5zKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLl9jb250ZXh0KSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmdhbWVUeXBlO1xuICAgIHQoKTtcbiAgfVxuICBpc0dhbWVUeXBlT3BlbihlKSB7XG4gICAgcmV0dXJuIDEgPT0gdGhpcy5fY29uZmlnW2VdO1xuICB9XG4gIGlzQWxsU3RhcigpIHtcbiAgICByZXR1cm4gMSA9PSB0aGlzLl9jb25maWcuVHJhdmVsICYmIDEgPT0gdGhpcy5fY29uZmlnLkRhaWx5Q2hhbGxlbmdlICYmIDEgPT0gdGhpcy5fY29uZmlnLk5vcm1hbDtcbiAgfVxuICBvbkZsb3dlckNTX2dldEZsb3dlclNlcmllcyhlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNHYW1lVHlwZU9wZW4odGhpcy5fZ2FtZVR5cGUpIHx8IHRoaXMuaXNBbGxTdGFyKCkpIHtcbiAgICAgIHQoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMuX2Zsb3dlclNlcmllc0xpc3RcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIG9uRmxvd2VyQ1Nfc2V0TGFzdFNlcmllc0lkKGUsIHQpIHtcbiAgICBpZiAodGhpcy5pc0dhbWVUeXBlT3Blbih0aGlzLl9nYW1lVHlwZSkpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RTZXJpZXNJZCA9IGUuYXJnc1swXTtcbiAgICAgIHRoaXMubG9jYWxEYXRhID0gdGhpcy5sb2NhbERhdGE7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkZsb3dlckNTX2dldExhc3RTZXJpZXNJZChlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNHYW1lVHlwZU9wZW4odGhpcy5fZ2FtZVR5cGUpKSB7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMubG9jYWxEYXRhLmxhc3RTZXJpZXNJZCA+IDAgPyB0aGlzLmxvY2FsRGF0YS5sYXN0U2VyaWVzSWQgOiAxXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBvbkZsb3dlckNTX3NldFNlcUlkKGUsIHQpIHtcbiAgICBpZiAodGhpcy5pc0dhbWVUeXBlT3Blbih0aGlzLl9nYW1lVHlwZSkpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnNlcXVlbmNlU2VyaWVzSWQgPSBlLmFyZ3NbMF07XG4gICAgICB0aGlzLmxvY2FsRGF0YSA9IHRoaXMubG9jYWxEYXRhO1xuICAgICAgdCh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25GbG93ZXJDU19nZXRTZXFJZChlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNHYW1lVHlwZU9wZW4odGhpcy5fZ2FtZVR5cGUpKSB7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLmxvY2FsRGF0YS5zZXF1ZW5jZVNlcmllc0lkID4gMCA/IHRoaXMubG9jYWxEYXRhLnNlcXVlbmNlU2VyaWVzSWQgOiAxXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBvbkNsZWFyRWZmQmh2X2lzU3BDYXJkKGUsIHQpIHtcbiAgICBpZiAodGhpcy5pc0dhbWVUeXBlT3Blbih0aGlzLl9nYW1lVHlwZSkpIHtcbiAgICAgIHQoe1xuICAgICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxufSJdfQ==