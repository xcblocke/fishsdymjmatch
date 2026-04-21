
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_rollShuffleEffect/Scripts/ChangeRollShuffleEffectTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18506r6cMJA96X3gLHhjtXo', 'ChangeRollShuffleEffectTrait');
// subpackages/r_rollShuffleEffect/Scripts/ChangeRollShuffleEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var SpiralShuffleEffect_1 = require("../../../Scripts/SpiralShuffleEffect");
var ChangeRollShuffleEffectTrait = /** @class */ (function (_super) {
    __extends(ChangeRollShuffleEffectTrait, _super);
    function ChangeRollShuffleEffectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._effectLevel = 3;
        _this._efxDelay = 0.5;
        return _this;
    }
    ChangeRollShuffleEffectTrait_1 = ChangeRollShuffleEffectTrait;
    ChangeRollShuffleEffectTrait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        this._effectLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.effectLevel) && void 0 !== r ? r : 3;
        this._efxDelay = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.efxDelay) && void 0 !== i ? i : 0.5;
    };
    ChangeRollShuffleEffectTrait.prototype.playMainAnimation = function (t) {
        var e = BaseSpine_1.default.create(ChangeRollShuffleEffectTrait_1.SPINE_MAIN, "in", 1, null, true, ChangeRollShuffleEffectTrait_1.BUNDLE_NAME);
        e.node.parent = t;
        e.node.position = cc.v3(0, 0, 0);
    };
    ChangeRollShuffleEffectTrait.prototype.playEfxAnimation = function (t) {
        var e = BaseSpine_1.default.create(ChangeRollShuffleEffectTrait_1.SPINE_EFX, "in", 1, null, true, ChangeRollShuffleEffectTrait_1.BUNDLE_NAME);
        e.node.parent = t;
        e.node.position = cc.v3(0, 0, 0);
    };
    ChangeRollShuffleEffectTrait.prototype.onSpiralShfStgy_gaDur = function (t, e) {
        var r;
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: null !== (r = this._traitData.gatherDuration) && void 0 !== r ? r : 0.9
        });
    };
    ChangeRollShuffleEffectTrait.prototype.onSpiralShfStgy_stayDur = function (t, e) {
        var r;
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: null !== (r = this._traitData.stayDuration) && void 0 !== r ? r : 0.43
        });
    };
    ChangeRollShuffleEffectTrait.prototype.onSpiralShfStgy_expDur = function (t, e) {
        var r;
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: null !== (r = this._traitData.expandDuration) && void 0 !== r ? r : 0.96
        });
    };
    ChangeRollShuffleEffectTrait.prototype.onIptShuffle_getEffect = function (t, e) {
        var r = new SpiralShuffleEffect_1.SpiralShuffleEffect({});
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    ChangeRollShuffleEffectTrait.prototype.onShuffUts_getPreTime = function (t, e) {
        var r, a, i = this, n = null === (r = t.args) || void 0 === r ? void 0 : r[0], o = null === (a = null == n ? void 0 : n.gameView) || void 0 === a ? void 0 : a.nodeTopEffectRoot;
        if (cc.isValid(o)) {
            var f = 0;
            switch (this._effectLevel) {
                case 1:
                    f = 0;
                    break;
                case 2:
                    this.playEfxAnimation(o);
                    f = 0;
                    break;
                case 3:
                default:
                    f = this._traitData.efxDelay;
                    this.playMainAnimation(o);
                    cc.tween({}).delay(this._efxDelay).call(function () {
                        cc.isValid(o) && i.playEfxAnimation(o);
                    }).start();
            }
            e({
                returnVal: f,
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else
            e();
    };
    ChangeRollShuffleEffectTrait.prototype.onShuffUts_playRAnim = function (t, e) {
        if (1 != this._effectLevel) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else {
            e();
        }
    };
    var ChangeRollShuffleEffectTrait_1;
    ChangeRollShuffleEffectTrait.traitKey = "ChangeRollShuffleEffect";
    ChangeRollShuffleEffectTrait.BUNDLE_NAME = "r_rollShuffleEffect";
    ChangeRollShuffleEffectTrait.SPINE_MAIN = "spine/gameplay_autoShuffle";
    ChangeRollShuffleEffectTrait.SPINE_EFX = "spine/gameplay_autoShuffle_efx";
    ChangeRollShuffleEffectTrait = ChangeRollShuffleEffectTrait_1 = __decorate([
        mj.trait,
        mj.class("ChangeRollShuffleEffectTrait")
    ], ChangeRollShuffleEffectTrait);
    return ChangeRollShuffleEffectTrait;
}(Trait_1.default));
exports.default = ChangeRollShuffleEffectTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3JvbGxTaHVmZmxlRWZmZWN0L1NjcmlwdHMvQ2hhbmdlUm9sbFNodWZmbGVFZmZlY3RUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQW9FO0FBQ3BFLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsNEVBQTJFO0FBRzNFO0lBQTBELGdEQUFLO0lBQS9EO1FBQUEscUVBNEZDO1FBM0ZDLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVMsR0FBRyxHQUFHLENBQUM7O0lBMEZsQixDQUFDO3FDQTVGb0IsNEJBQTRCO0lBTy9DLDZDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENB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QkFDQSxTQUFTLEVBQUUsQ0FBQztnQkFDWixVQUFVLEVBQUUsc0NBQXVCLENBQUMsSUFBSTthQUN6QyxDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCwyREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMxQixDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDOztJQXhGTSxxQ0FBUSxHQUFHLHlCQUF5QixDQUFDO0lBQ3JDLHdDQUFXLEdBQUcscUJBQXFCLENBQUM7SUFDcEMsdUNBQVUsR0FBRyw0QkFBNEIsQ0FBQztJQUMxQyxzQ0FBUyxHQUFHLGdDQUFnQyxDQUFDO0lBTmpDLDRCQUE0QjtRQUZoRCxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUM7T0FDcEIsNEJBQTRCLENBNEZoRDtJQUFELG1DQUFDO0NBNUZELEFBNEZDLENBNUZ5RCxlQUFLLEdBNEY5RDtrQkE1Rm9CLDRCQUE0QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IHsgU3BpcmFsU2h1ZmZsZUVmZmVjdCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvU3BpcmFsU2h1ZmZsZUVmZmVjdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNoYW5nZVJvbGxTaHVmZmxlRWZmZWN0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZVJvbGxTaHVmZmxlRWZmZWN0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9lZmZlY3RMZXZlbCA9IDM7XG4gIF9lZnhEZWxheSA9IDAuNTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDaGFuZ2VSb2xsU2h1ZmZsZUVmZmVjdFwiO1xuICBzdGF0aWMgQlVORExFX05BTUUgPSBcInJfcm9sbFNodWZmbGVFZmZlY3RcIjtcbiAgc3RhdGljIFNQSU5FX01BSU4gPSBcInNwaW5lL2dhbWVwbGF5X2F1dG9TaHVmZmxlXCI7XG4gIHN0YXRpYyBTUElORV9FRlggPSBcInNwaW5lL2dhbWVwbGF5X2F1dG9TaHVmZmxlX2VmeFwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIHIsIGEsIGk7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fZWZmZWN0TGV2ZWwgPSBudWxsICE9PSAociA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmVmZmVjdExldmVsKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMztcbiAgICB0aGlzLl9lZnhEZWxheSA9IG51bGwgIT09IChpID0gbnVsbCA9PT0gKGEgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuZWZ4RGVsYXkpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiAwLjU7XG4gIH1cbiAgcGxheU1haW5BbmltYXRpb24odCkge1xuICAgIHZhciBlID0gQmFzZVNwaW5lLmNyZWF0ZShDaGFuZ2VSb2xsU2h1ZmZsZUVmZmVjdFRyYWl0LlNQSU5FX01BSU4sIFwiaW5cIiwgMSwgbnVsbCwgdHJ1ZSwgQ2hhbmdlUm9sbFNodWZmbGVFZmZlY3RUcmFpdC5CVU5ETEVfTkFNRSk7XG4gICAgZS5ub2RlLnBhcmVudCA9IHQ7XG4gICAgZS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gIH1cbiAgcGxheUVmeEFuaW1hdGlvbih0KSB7XG4gICAgdmFyIGUgPSBCYXNlU3BpbmUuY3JlYXRlKENoYW5nZVJvbGxTaHVmZmxlRWZmZWN0VHJhaXQuU1BJTkVfRUZYLCBcImluXCIsIDEsIG51bGwsIHRydWUsIENoYW5nZVJvbGxTaHVmZmxlRWZmZWN0VHJhaXQuQlVORExFX05BTUUpO1xuICAgIGUubm9kZS5wYXJlbnQgPSB0O1xuICAgIGUubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICB9XG4gIG9uU3BpcmFsU2hmU3RneV9nYUR1cih0LCBlKSB7XG4gICAgdmFyIHI7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgcmV0dXJuVmFsOiBudWxsICE9PSAociA9IHRoaXMuX3RyYWl0RGF0YS5nYXRoZXJEdXJhdGlvbikgJiYgdm9pZCAwICE9PSByID8gciA6IDAuOVxuICAgIH0pO1xuICB9XG4gIG9uU3BpcmFsU2hmU3RneV9zdGF5RHVyKHQsIGUpIHtcbiAgICB2YXIgcjtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICByZXR1cm5WYWw6IG51bGwgIT09IChyID0gdGhpcy5fdHJhaXREYXRhLnN0YXlEdXJhdGlvbikgJiYgdm9pZCAwICE9PSByID8gciA6IDAuNDNcbiAgICB9KTtcbiAgfVxuICBvblNwaXJhbFNoZlN0Z3lfZXhwRHVyKHQsIGUpIHtcbiAgICB2YXIgcjtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICByZXR1cm5WYWw6IG51bGwgIT09IChyID0gdGhpcy5fdHJhaXREYXRhLmV4cGFuZER1cmF0aW9uKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMC45NlxuICAgIH0pO1xuICB9XG4gIG9uSXB0U2h1ZmZsZV9nZXRFZmZlY3QodCwgZSkge1xuICAgIHZhciByID0gbmV3IFNwaXJhbFNodWZmbGVFZmZlY3Qoe30pO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogclxuICAgIH0pO1xuICB9XG4gIG9uU2h1ZmZVdHNfZ2V0UHJlVGltZSh0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBhLFxuICAgICAgaSA9IHRoaXMsXG4gICAgICBuID0gbnVsbCA9PT0gKHIgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHJbMF0sXG4gICAgICBvID0gbnVsbCA9PT0gKGEgPSBudWxsID09IG4gPyB2b2lkIDAgOiBuLmdhbWVWaWV3KSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLm5vZGVUb3BFZmZlY3RSb290O1xuICAgIGlmIChjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICB2YXIgZiA9IDA7XG4gICAgICBzd2l0Y2ggKHRoaXMuX2VmZmVjdExldmVsKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBmID0gMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMucGxheUVmeEFuaW1hdGlvbihvKTtcbiAgICAgICAgICBmID0gMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGYgPSB0aGlzLl90cmFpdERhdGEuZWZ4RGVsYXk7XG4gICAgICAgICAgdGhpcy5wbGF5TWFpbkFuaW1hdGlvbihvKTtcbiAgICAgICAgICBjYy50d2Vlbih7fSkuZGVsYXkodGhpcy5fZWZ4RGVsYXkpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MuaXNWYWxpZChvKSAmJiBpLnBsYXlFZnhBbmltYXRpb24obyk7XG4gICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5WYWw6IGYsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25TaHVmZlV0c19wbGF5UkFuaW0odCwgZSkge1xuICAgIGlmICgxICE9IHRoaXMuX2VmZmVjdExldmVsKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==