
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_normalNewRecord/Scripts/NormalNewRecordTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74984HzhblITrcHWYmBfGnP', 'NormalNewRecordTrait');
// subpackages/r_normalNewRecord/Scripts/NormalNewRecordTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var NormalNewRecordBehavior_1 = require("./NormalNewRecordBehavior");
var NormalNewRecordEffect_1 = require("./NormalNewRecordEffect");
var NormalNewRecordUI_1 = require("./NormalNewRecordUI");
var NormalNewRecordTrait = /** @class */ (function (_super) {
    __extends(NormalNewRecordTrait, _super);
    function NormalNewRecordTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NormalNewRecordTrait.prototype, "limitLevel", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.limitLevel) && void 0 !== t ? t : 3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NormalNewRecordTrait.prototype, "scoreRoll", {
        get: function () {
            var e, t;
            return null === (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.scoreRoll) || void 0 === t || t;
        },
        enumerable: false,
        configurable: true
    });
    NormalNewRecordTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.NormalNewRecord, NormalNewRecordBehavior_1.default);
    };
    NormalNewRecordTrait.prototype.isBreakBestTriggered = function () {
        return !(NormalGameData_1.default.getInstance().getLevelId() - 1 < this.limitLevel) && NormalGameData_1.default.getInstance().isBreakBest();
    };
    NormalNewRecordTrait.prototype.canShowBreakBest = function (e) {
        var t, r;
        if (!(e && e._baseInput && e._baseInput._behaviorBuilder && e._options))
            return false;
        if (NormalGameData_1.default.getInstance().getLevelId() < this.limitLevel)
            return false;
        var o = e._options;
        if (!o.isBreakBest)
            return false;
        if (o.isShowFullCombo || o.isShowRewardCombo)
            return false;
        var i = [BehaviorsMapping_1.BehaviorsMapping.NormalNewRecord, BehaviorsMapping_1.BehaviorsMapping.Fail, BehaviorsMapping_1.BehaviorsMapping.End];
        try {
            for (var n = __values(i), s = n.next(); !s.done; s = n.next()) {
                var p = s.value;
                if (e._baseInput._behaviorBuilder.findNodeByName(p))
                    return false;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (r = n.return) && r.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return true;
    };
    NormalNewRecordTrait.prototype.onClrNormHlp_tryShwMotWrd = function (e, t) {
        if (this.canShowBreakBest(e.ins)) {
            t({
                returnType: TraitCallbackReturnType.jump
            });
        }
        else {
            t();
        }
    };
    NormalNewRecordTrait.prototype.onClrNormHlp_pushClrFinish = function (e, t) {
        if (this.canShowBreakBest(e.ins)) {
            var r = new NormalNewRecordEffect_1.NormalNewRecordEffect({});
            e.ins._baseInput.pushEffect(r, BehaviorsEnum_1.EInsertType.Root);
        }
        t();
    };
    NormalNewRecordTrait.prototype.onWinCtrl_initRes = function (e, t) {
        if (this.isBreakBestTriggered()) {
            var r = e.ins;
            null == r || r.addPreloadRes("Prefab", "prefabs/ui/WinFullComboView");
        }
        t();
    };
    NormalNewRecordTrait.prototype.onWinFCombo_isTriggered = function (e, t) {
        if (this.isBreakBestTriggered()) {
            t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: false
            });
        }
        else {
            t();
        }
    };
    NormalNewRecordTrait.prototype.onLevelBox_pbDelay = function (e, t) {
        this.isBreakBestTriggered() && (e.args[0].delayTime += 0.33);
        t();
    };
    NormalNewRecordTrait.prototype.onWinVw_showWinVw = function (e, t) {
        var r = e.ins;
        if (cc.isValid(r) && this.isBreakBestTriggered()) {
            var o = r.getContentNode();
            if (cc.isValid(o)) {
                var i = r.createUISync(NormalNewRecordUI_1.default);
                cc.isValid(i) && o.addChild(i);
            }
        }
        t();
    };
    NormalNewRecordTrait.prototype.onNorNewRrdUI_canRoll = function (e, t) {
        t({
            returnType: TraitCallbackReturnType.return,
            returnVal: this.scoreRoll
        });
    };
    NormalNewRecordTrait.traitKey = "NormalNewRecord";
    NormalNewRecordTrait = __decorate([
        mj.trait,
        mj.class("NormalNewRecordTrait")
    ], NormalNewRecordTrait);
    return NormalNewRecordTrait;
}(Trait_1.default));
exports.default = NormalNewRecordTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX25vcm1hbE5ld1JlY29yZC9TY3JpcHRzL05vcm1hbE5ld1JlY29yZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RUFBc0U7QUFDdEUsc0ZBQWlGO0FBQ2pGLDhFQUE2RTtBQUM3RSxvRUFBbUU7QUFDbkUsZ0VBQTJEO0FBQzNELHFFQUFnRTtBQUNoRSxpRUFBZ0U7QUFDaEUseURBQW9EO0FBR3BEO0lBQWtELHdDQUFLO0lBQXZEOztJQWtHQSxDQUFDO0lBaEdDLHNCQUFJLDRDQUFVO2FBQWQ7WUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RILENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksMkNBQVM7YUFBYjtZQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEgsQ0FBQzs7O09BQUE7SUFDRCxxQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FB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QUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLDJCQUFpQixDQUFDLENBQUM7Z0JBQzFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQztTQUNGO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsb0RBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQzFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBaEdNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQWtHeEM7SUFBRCwyQkFBQztDQWxHRCxBQWtHQyxDQWxHaUQsZUFBSyxHQWtHdEQ7a0JBbEdvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgTm9ybWFsR2FtZURhdGEgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9kYXRhL05vcm1hbEdhbWVEYXRhJztcbmltcG9ydCB7IEJlaGF2aW9yc01hcHBpbmcgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL21hcHBpbmcvQmVoYXZpb3JzTWFwcGluZyc7XG5pbXBvcnQgeyBCZWhhdmlvckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0JlaGF2aW9yRmFjdG9yeSc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IE5vcm1hbE5ld1JlY29yZEJlaGF2aW9yIGZyb20gJy4vTm9ybWFsTmV3UmVjb3JkQmVoYXZpb3InO1xuaW1wb3J0IHsgTm9ybWFsTmV3UmVjb3JkRWZmZWN0IH0gZnJvbSAnLi9Ob3JtYWxOZXdSZWNvcmRFZmZlY3QnO1xuaW1wb3J0IE5vcm1hbE5ld1JlY29yZFVJIGZyb20gJy4vTm9ybWFsTmV3UmVjb3JkVUknO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJOb3JtYWxOZXdSZWNvcmRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9ybWFsTmV3UmVjb3JkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTm9ybWFsTmV3UmVjb3JkXCI7XG4gIGdldCBsaW1pdExldmVsKCkge1xuICAgIHZhciBlLCB0O1xuICAgIHJldHVybiBudWxsICE9PSAodCA9IG51bGwgPT09IChlID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubGltaXRMZXZlbCkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDM7XG4gIH1cbiAgZ2V0IHNjb3JlUm9sbCgpIHtcbiAgICB2YXIgZSwgdDtcbiAgICByZXR1cm4gbnVsbCA9PT0gKHQgPSBudWxsID09PSAoZSA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnNjb3JlUm9sbCkgfHwgdm9pZCAwID09PSB0IHx8IHQ7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIEJlaGF2aW9yRmFjdG9yeS5yZWdpc3RlckJlaGF2aW9yKEJlaGF2aW9yc01hcHBpbmcuTm9ybWFsTmV3UmVjb3JkLCBOb3JtYWxOZXdSZWNvcmRCZWhhdmlvcik7XG4gIH1cbiAgaXNCcmVha0Jlc3RUcmlnZ2VyZWQoKSB7XG4gICAgcmV0dXJuICEoTm9ybWFsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbElkKCkgLSAxIDwgdGhpcy5saW1pdExldmVsKSAmJiBOb3JtYWxHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLmlzQnJlYWtCZXN0KCk7XG4gIH1cbiAgY2FuU2hvd0JyZWFrQmVzdChlKSB7XG4gICAgdmFyIHQsIHI7XG4gICAgaWYgKCEoZSAmJiBlLl9iYXNlSW5wdXQgJiYgZS5fYmFzZUlucHV0Ll9iZWhhdmlvckJ1aWxkZXIgJiYgZS5fb3B0aW9ucykpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoTm9ybWFsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbElkKCkgPCB0aGlzLmxpbWl0TGV2ZWwpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbyA9IGUuX29wdGlvbnM7XG4gICAgaWYgKCFvLmlzQnJlYWtCZXN0KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG8uaXNTaG93RnVsbENvbWJvIHx8IG8uaXNTaG93UmV3YXJkQ29tYm8pIHJldHVybiBmYWxzZTtcbiAgICB2YXIgaSA9IFtCZWhhdmlvcnNNYXBwaW5nLk5vcm1hbE5ld1JlY29yZCwgQmVoYXZpb3JzTWFwcGluZy5GYWlsLCBCZWhhdmlvcnNNYXBwaW5nLkVuZF07XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyhpKSwgcyA9IG4ubmV4dCgpOyAhcy5kb25lOyBzID0gbi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHAgPSBzLnZhbHVlO1xuICAgICAgICBpZiAoZS5fYmFzZUlucHV0Ll9iZWhhdmlvckJ1aWxkZXIuZmluZE5vZGVCeU5hbWUocCkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyAmJiAhcy5kb25lICYmIChyID0gbi5yZXR1cm4pICYmIHIuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBvbkNsck5vcm1IbHBfdHJ5U2h3TW90V3JkKGUsIHQpIHtcbiAgICBpZiAodGhpcy5jYW5TaG93QnJlYWtCZXN0KGUuaW5zKSkge1xuICAgICAgdCh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIG9uQ2xyTm9ybUhscF9wdXNoQ2xyRmluaXNoKGUsIHQpIHtcbiAgICBpZiAodGhpcy5jYW5TaG93QnJlYWtCZXN0KGUuaW5zKSkge1xuICAgICAgdmFyIHIgPSBuZXcgTm9ybWFsTmV3UmVjb3JkRWZmZWN0KHt9KTtcbiAgICAgIGUuaW5zLl9iYXNlSW5wdXQucHVzaEVmZmVjdChyLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgICB9XG4gICAgdCgpO1xuICB9XG4gIG9uV2luQ3RybF9pbml0UmVzKGUsIHQpIHtcbiAgICBpZiAodGhpcy5pc0JyZWFrQmVzdFRyaWdnZXJlZCgpKSB7XG4gICAgICB2YXIgciA9IGUuaW5zO1xuICAgICAgbnVsbCA9PSByIHx8IHIuYWRkUHJlbG9hZFJlcyhcIlByZWZhYlwiLCBcInByZWZhYnMvdWkvV2luRnVsbENvbWJvVmlld1wiKTtcbiAgICB9XG4gICAgdCgpO1xuICB9XG4gIG9uV2luRkNvbWJvX2lzVHJpZ2dlcmVkKGUsIHQpIHtcbiAgICBpZiAodGhpcy5pc0JyZWFrQmVzdFRyaWdnZXJlZCgpKSB7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBvbkxldmVsQm94X3BiRGVsYXkoZSwgdCkge1xuICAgIHRoaXMuaXNCcmVha0Jlc3RUcmlnZ2VyZWQoKSAmJiAoZS5hcmdzWzBdLmRlbGF5VGltZSArPSAwLjMzKTtcbiAgICB0KCk7XG4gIH1cbiAgb25XaW5Wd19zaG93V2luVncoZSwgdCkge1xuICAgIHZhciByID0gZS5pbnM7XG4gICAgaWYgKGNjLmlzVmFsaWQocikgJiYgdGhpcy5pc0JyZWFrQmVzdFRyaWdnZXJlZCgpKSB7XG4gICAgICB2YXIgbyA9IHIuZ2V0Q29udGVudE5vZGUoKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgIHZhciBpID0gci5jcmVhdGVVSVN5bmMoTm9ybWFsTmV3UmVjb3JkVUkpO1xuICAgICAgICBjYy5pc1ZhbGlkKGkpICYmIG8uYWRkQ2hpbGQoaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHQoKTtcbiAgfVxuICBvbk5vck5ld1JyZFVJX2NhblJvbGwoZSwgdCkge1xuICAgIHQoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLnNjb3JlUm9sbFxuICAgIH0pO1xuICB9XG59Il19