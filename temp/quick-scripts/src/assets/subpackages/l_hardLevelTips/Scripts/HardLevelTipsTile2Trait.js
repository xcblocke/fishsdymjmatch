"use strict";
cc._RF.push(module, 'f918dODmilOJ7jBS/TayLl+', 'HardLevelTipsTile2Trait');
// subpackages/l_hardLevelTips/Scripts/HardLevelTipsTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HardLevelTipsBehavior_1 = require("./HardLevelTipsBehavior");
var HardLevelTipsEffect_1 = require("./HardLevelTipsEffect");
var HardLevelTipsTile2Trait = /** @class */ (function (_super) {
    __extends(HardLevelTipsTile2Trait, _super);
    function HardLevelTipsTile2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HardLevelTipsTile2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerBehaviors();
    };
    HardLevelTipsTile2Trait.prototype.registerBehaviors = function () {
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.HardLevelTips, HardLevelTipsBehavior_1.HardLevelTipsBehavior);
    };
    HardLevelTipsTile2Trait.prototype.isTile2Mode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    HardLevelTipsTile2Trait.prototype.onIptTile2InitVw_pushEff = function (e, t) {
        var r, o;
        if (this.isTile2Mode()) {
            var i = e.ins.gameContext, a = i.getIsNewGame(), s = i.getGameData().getLevelId(), n = ExtractTool_1.default.getInstance().isHardLevel(s), c = null !== (o = null === (r = this._traitData) || void 0 === r ? void 0 : r.showOnResume) && void 0 !== o && o;
            n && (a || c) && this.pushHardLevelTipsEffect(e, s);
            t();
        }
        else
            t();
    };
    HardLevelTipsTile2Trait.prototype.pushHardLevelTipsEffect = function (e, t) {
        var r = ExtractTool_1.default.getInstance().isExpertUI(t) ? "in_2" : "in_1", o = new HardLevelTipsEffect_1.HardLevelTipsEffect({
            aniName: r
        });
        e.ins.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    HardLevelTipsTile2Trait.traitKey = "HardLevelTipsTile2";
    HardLevelTipsTile2Trait = __decorate([
        mj.trait,
        mj.class("HardLevelTipsTile2Trait")
    ], HardLevelTipsTile2Trait);
    return HardLevelTipsTile2Trait;
}(Trait_1.default));
exports.default = HardLevelTipsTile2Trait;

cc._RF.pop();