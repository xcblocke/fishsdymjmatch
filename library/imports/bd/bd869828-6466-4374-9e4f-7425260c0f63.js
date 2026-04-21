"use strict";
cc._RF.push(module, 'bd869goZGZDdJ5PdCUmDA9j', 'HardLevelTipsTrait');
// subpackages/l_hardLevelTips/Scripts/HardLevelTipsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var UpdateLevelEffect_1 = require("../../../Scripts/UpdateLevelEffect");
var UpdateScoreEffect_1 = require("../../../Scripts/UpdateScoreEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var HardLevelTipsBehavior_1 = require("./HardLevelTipsBehavior");
var HardLevelTipsEffect_1 = require("./HardLevelTipsEffect");
var HardLevelTipsTrait = /** @class */ (function (_super) {
    __extends(HardLevelTipsTrait, _super);
    function HardLevelTipsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HardLevelTipsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerBehaviors();
    };
    HardLevelTipsTrait.prototype.registerBehaviors = function () {
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.HardLevelTips, HardLevelTipsBehavior_1.HardLevelTipsBehavior);
    };
    HardLevelTipsTrait.prototype.onIptInitView_exec = function (e, t) {
        var r, o;
        if (this.checkGameMode()) {
            var i = e.ins.gameContext, a = i.getIsNewGame(), n = i.getGameData().getLevelId(), c = ExtractTool_1.default.getInstance().isHardLevel(n), p = null !== (o = null === (r = this._traitData) || void 0 === r ? void 0 : r.showOnResume) && void 0 !== o && o;
            c && (a || p) && this.pushHardLevelTipsEffect(e, n);
            t();
        }
        else
            t();
    };
    HardLevelTipsTrait.prototype.pushHardLevelTipsEffect = function (e, t) {
        var r = this.getAniName(t), o = new HardLevelTipsEffect_1.HardLevelTipsEffect({
            aniName: r
        });
        e.ins.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
        this.pushUpdateLevelEffect(e.ins);
        this.pushUpdateScoreEffect(e.ins);
    };
    HardLevelTipsTrait.prototype.pushUpdateLevelEffect = function (e) {
        var t = new UpdateLevelEffect_1.UpdateLevelEffect({
            level: e.gameContext.getGameData().getLevelId()
        });
        e.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    HardLevelTipsTrait.prototype.pushUpdateScoreEffect = function (e) {
        var t = e.gameContext.getGameData(), r = new UpdateScoreEffect_1.UpdateScoreEffect({
            addScore: 0,
            targetScore: t.getScore(),
            isShowCombo: false
        });
        e.pushEffect(r, BehaviorsEnum_1.EInsertType.Parallel);
    };
    HardLevelTipsTrait.prototype.getAniName = function (e) {
        return ExtractTool_1.default.getInstance().isExpertUI(e) ? "in_2" : "in_1";
    };
    HardLevelTipsTrait.traitKey = "HardLevelTips";
    HardLevelTipsTrait = __decorate([
        mj.trait,
        mj.class("HardLevelTipsTrait")
    ], HardLevelTipsTrait);
    return HardLevelTipsTrait;
}(ExtractTrait_1.default));
exports.default = HardLevelTipsTrait;

cc._RF.pop();