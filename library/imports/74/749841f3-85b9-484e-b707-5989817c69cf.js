"use strict";
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