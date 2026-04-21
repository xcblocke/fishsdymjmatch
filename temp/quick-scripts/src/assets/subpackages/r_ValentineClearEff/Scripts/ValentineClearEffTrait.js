"use strict";
cc._RF.push(module, '47762EuvLVHTIg13kfrYoBH', 'ValentineClearEffTrait');
// subpackages/r_ValentineClearEff/Scripts/ValentineClearEffTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ValentineClearEffTrait = /** @class */ (function (_super) {
    __extends(ValentineClearEffTrait, _super);
    function ValentineClearEffTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        _this._isBaseClear = true;
        return _this;
    }
    ValentineClearEffTrait_1 = ValentineClearEffTrait;
    ValentineClearEffTrait.prototype.onChangeCEffTrait_bundle = function (e, t) {
        if (this.isClearEffActive()) {
            var r = e.args[0];
            if (r < 1 || r > 4) {
                t();
            }
            else {
                t({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return,
                    returnVal: this.getBundleName(r)
                });
            }
        }
        else
            t();
    };
    ValentineClearEffTrait.prototype.getBundleName = function (e) {
        this._isBaseClear = false;
        return "r_resValentineClear" + e;
    };
    ValentineClearEffTrait.prototype.getAniCfg = function () {
        return {
            bundleName: "" + ValentineClearEffTrait_1.BundleName,
            spinePath: "spine/gameplay_elimination_a"
        };
    };
    ValentineClearEffTrait.prototype.loadSpine = function (e) {
        var t, r = this, n = this.getAniCfg(), a = n.bundleName, i = n.spinePath;
        this._currSkData = null;
        null === (t = null == e ? void 0 : e.gameCtr) || void 0 === t || t.loadRes(i, sp.SkeletonData, a).then(function (e) {
            var t = Array.isArray(e) ? e[0] : e;
            r._currSkData = t || null;
        }).catch(function () {
            r._currSkData = null;
        });
    };
    ValentineClearEffTrait.prototype.onInitViewBhv_crtTls = function (e, t) {
        if (this.isClearEffActive()) {
            this.loadSpine(e.ins.context);
            t();
        }
        else
            t();
    };
    ValentineClearEffTrait.prototype.onClearEffBhv_changeSkd = function (e, t) {
        var r = e.args[0];
        cc.isValid(r.skeletonData) || (r.skeletonData = null);
        if (this._isBaseClear) {
            if (this.isClearEffActive()) {
                if (cc.isValid(this._currSkData)) {
                    var n = this._currSkData;
                    r.skeletonData !== n && (r.skeletonData = n);
                    t({
                        isBreak: true,
                        returnType: TraitCallbackReturnType.return
                    });
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    ValentineClearEffTrait.prototype.onChangeCEffTrait_isGTOpen = function (e, t) {
        if (this.isClearEffActive()) {
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
    ValentineClearEffTrait.prototype.isClearEffActive = function () {
        if (null != this._traitData.clearEffect)
            return this._traitData.clearEffect;
        var e = mj.getClassByName("ValentineModel");
        return null != e && e.getInstance().isEffectActive();
    };
    var ValentineClearEffTrait_1;
    ValentineClearEffTrait.traitKey = "ValentineClearEff";
    ValentineClearEffTrait.BundleName = "r_ValentineClearEff";
    ValentineClearEffTrait = ValentineClearEffTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineClearEffTrait")
    ], ValentineClearEffTrait);
    return ValentineClearEffTrait;
}(Trait_1.default));
exports.default = ValentineClearEffTrait;

cc._RF.pop();