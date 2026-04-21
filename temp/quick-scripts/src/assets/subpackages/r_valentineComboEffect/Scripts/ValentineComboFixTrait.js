"use strict";
cc._RF.push(module, 'dd82aVTR/JDqb6MlrR8TEwf', 'ValentineComboFixTrait');
// subpackages/r_valentineComboEffect/Scripts/ValentineComboFixTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ValentineComboFixTrait = /** @class */ (function (_super) {
    __extends(ValentineComboFixTrait, _super);
    function ValentineComboFixTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._valComboEff = null;
        return _this;
    }
    ValentineComboFixTrait.prototype.onValComboEff_enter = function (t, e) {
        e();
        this._valComboEff = t.ins;
    };
    ValentineComboFixTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var o, r;
        e();
        cc.isValid(this._valComboEff) && (null === (r = (o = this._valComboEff).loadResPools) || void 0 === r || r.call(o));
    };
    ValentineComboFixTrait.traitKey = "ValentineComboFix";
    ValentineComboFixTrait = __decorate([
        mj.trait,
        mj.class("ValentineComboFixTrait")
    ], ValentineComboFixTrait);
    return ValentineComboFixTrait;
}(Trait_1.default));
exports.default = ValentineComboFixTrait;

cc._RF.pop();