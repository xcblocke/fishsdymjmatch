"use strict";
cc._RF.push(module, 'f26c7I/Ic1M7bHPmMxftDqS', 'ValentineComboBonusTrait');
// subpackages/r_valentineComboBonus/Scripts/ValentineComboBonusTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ValentineComboBonusTrait = /** @class */ (function (_super) {
    __extends(ValentineComboBonusTrait, _super);
    function ValentineComboBonusTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        return _this;
    }
    ValentineComboBonusTrait.prototype.getAniCfg = function () {
        return {
            bundleName: "r_valentineComboBonus",
            spinePath: "spine/gameplay_comboBonus"
        };
    };
    ValentineComboBonusTrait.prototype.loadSpine = function (t) {
        var e, n = this, o = this.getAniCfg(), r = o.bundleName, i = o.spinePath;
        this._currSkData = null;
        null === (e = null == t ? void 0 : t.gameCtr) || void 0 === e || e.loadRes(i, sp.SkeletonData, r).then(function (t) {
            var e = Array.isArray(t) ? t[0] : t;
            n._currSkData = e || null;
        }).catch(function () {
            n._currSkData = null;
        });
    };
    ValentineComboBonusTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        if (this.isComboBonusEffectActive()) {
            this.loadSpine(t.ins.context);
            e();
        }
        else
            e();
    };
    ValentineComboBonusTrait.prototype.onRwdComboItem_initComp = function (t, e) {
        var n = t.ins, o = null == n ? void 0 : n._spineAnim;
        cc.isValid(o.skeletonData) || (o.skeletonData = null);
        if (this.isComboBonusEffectActive()) {
            if (cc.isValid(this._currSkData)) {
                var r = this._currSkData;
                o.skeletonData !== r && (o.skeletonData = r);
                e();
            }
            else
                e();
        }
        else
            e();
    };
    ValentineComboBonusTrait.prototype.isComboBonusEffectActive = function () {
        if (null != this._traitData.comboBonusEffect)
            return this._traitData.comboBonusEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    ValentineComboBonusTrait.traitKey = "ValentineComboBonus";
    ValentineComboBonusTrait = __decorate([
        mj.trait,
        mj.class("ValentineComboBonusTrait")
    ], ValentineComboBonusTrait);
    return ValentineComboBonusTrait;
}(Trait_1.default));
exports.default = ValentineComboBonusTrait;

cc._RF.pop();