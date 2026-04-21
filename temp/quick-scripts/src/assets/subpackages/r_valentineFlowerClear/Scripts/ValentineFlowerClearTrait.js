"use strict";
cc._RF.push(module, '65ba2LQpvFIu5/p+2Q3EkmX', 'ValentineFlowerClearTrait');
// subpackages/r_valentineFlowerClear/Scripts/ValentineFlowerClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ValentineFlowerClearTrait = /** @class */ (function (_super) {
    __extends(ValentineFlowerClearTrait, _super);
    function ValentineFlowerClearTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        return _this;
    }
    ValentineFlowerClearTrait.prototype.getAniCfg = function () {
        return {
            bundleName: "r_valentineFlowerClear",
            spinePath: "spine/gameplay_special_elimination"
        };
    };
    ValentineFlowerClearTrait.prototype.loadSpine = function (t) {
        var e, r = this, n = this.getAniCfg(), i = n.bundleName, a = n.spinePath;
        this._currSkData = null;
        null === (e = null == t ? void 0 : t.gameCtr) || void 0 === e || e.loadRes(a, sp.SkeletonData, i).then(function (t) {
            var e = Array.isArray(t) ? t[0] : t;
            r._currSkData = e || null;
        }).catch(function () {
            r._currSkData = null;
        });
    };
    ValentineFlowerClearTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        if (this.isFlowerClearEffectActive()) {
            this.loadSpine(t.ins.context);
            e();
        }
        else
            e();
    };
    ValentineFlowerClearTrait.prototype.onClearEffBhv_changeSpSkd = function (t, e) {
        if (this.isFlowerClearEffectActive()) {
            var r = t.args[0], n = this._currSkData;
            n && cc.isValid(n) && r && r.skeletonData !== n && (r.skeletonData = n);
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    ValentineFlowerClearTrait.prototype.isFlowerClearEffectActive = function () {
        if (null != this._traitData.flowerClearEffect)
            return this._traitData.flowerClearEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    ValentineFlowerClearTrait.traitKey = "ValentineFlowerClear";
    ValentineFlowerClearTrait = __decorate([
        mj.trait,
        mj.class("ValentineFlowerClearTrait")
    ], ValentineFlowerClearTrait);
    return ValentineFlowerClearTrait;
}(Trait_1.default));
exports.default = ValentineFlowerClearTrait;

cc._RF.pop();