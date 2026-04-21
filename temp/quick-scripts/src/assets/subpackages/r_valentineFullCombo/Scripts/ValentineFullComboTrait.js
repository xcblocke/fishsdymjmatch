"use strict";
cc._RF.push(module, '48f1fBOMq9OcIel6N/ig9If', 'ValentineFullComboTrait');
// subpackages/r_valentineFullCombo/Scripts/ValentineFullComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ValentineFullComboTrait = /** @class */ (function (_super) {
    __extends(ValentineFullComboTrait, _super);
    function ValentineFullComboTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        return _this;
    }
    ValentineFullComboTrait.prototype.getAniCfg = function () {
        return {
            bundleName: "r_valentineFullCombo",
            spinePath: "spine/gameplay_perfectCombo"
        };
    };
    ValentineFullComboTrait.prototype.loadSpine = function (t) {
        var e, n = this, r = this.getAniCfg(), o = r.bundleName, i = r.spinePath;
        this._currSkData = null;
        null === (e = null == t ? void 0 : t.gameCtr) || void 0 === e || e.loadRes(i, sp.SkeletonData, o).then(function (t) {
            var e = Array.isArray(t) ? t[0] : t;
            n._currSkData = e || null;
        }).catch(function () {
            n._currSkData = null;
        });
    };
    ValentineFullComboTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        if (this.isFullComboEffectActive()) {
            this.loadSpine(t.ins.context);
            e();
        }
        else
            e();
    };
    ValentineFullComboTrait.prototype.onFullComboItem_initSpine = function (t, e) {
        var n = t.ins, r = null == n ? void 0 : n._spineAnim;
        cc.isValid(r.skeletonData) || (r.skeletonData = null);
        if (this.isFullComboEffectActive()) {
            if (cc.isValid(this._currSkData)) {
                var o = this._currSkData;
                r.skeletonData !== o && (r.skeletonData = o);
                e();
            }
            else
                e();
        }
        else
            e();
    };
    ValentineFullComboTrait.prototype.isFullComboEffectActive = function () {
        if (null != this._traitData.fullComboEffect)
            return this._traitData.fullComboEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    ValentineFullComboTrait.traitKey = "ValentineFullCombo";
    ValentineFullComboTrait = __decorate([
        mj.trait,
        mj.class("ValentineFullComboTrait")
    ], ValentineFullComboTrait);
    return ValentineFullComboTrait;
}(Trait_1.default));
exports.default = ValentineFullComboTrait;

cc._RF.pop();