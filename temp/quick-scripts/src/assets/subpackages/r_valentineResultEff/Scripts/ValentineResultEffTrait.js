"use strict";
cc._RF.push(module, '47fa4u+/PJP3ILhosfEYQT1', 'ValentineResultEffTrait');
// subpackages/r_valentineResultEff/Scripts/ValentineResultEffTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Adapter_1 = require("../../../Scripts/component/Adapter");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ValentineResultEffTrait = /** @class */ (function (_super) {
    __extends(ValentineResultEffTrait, _super);
    function ValentineResultEffTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValentineResultEffTrait_1 = ValentineResultEffTrait;
    ValentineResultEffTrait.prototype.onWinVw_onLoad = function (t, e) {
        e();
        if (this.isValentineResultEffActive()) {
            var n = t.ins;
            this.addResultEff(n);
        }
    };
    ValentineResultEffTrait.prototype.onTLWinVw_onLoad = function (t, e) {
        e();
        if (this.isValentineResultEffActive()) {
            var n = t.ins;
            this.addResultEff(n);
        }
    };
    ValentineResultEffTrait.prototype.onDCWinVw_onLoad = function (t, e) {
        e();
        if (this.isValentineResultEffActive()) {
            var n = t.ins;
            this.addResultEff(n);
        }
    };
    ValentineResultEffTrait.prototype.createNode = function () {
        var t = new cc.Node();
        t.name = "ValentineResultEff";
        var e = t.addComponent(cc.Widget);
        e.isAlignTop = true;
        e.isAlignBottom = false;
        e.isAlignLeft = false;
        e.isAlignRight = false;
        e.top = 0;
        return t;
    };
    ValentineResultEffTrait.prototype.addResultEff = function (t) {
        var e = cc.find("content", t.node), i = this.createNode();
        i.parent = e;
        i.setSiblingIndex(0);
        var r = BaseSpine_1.default.create("spine/result_boxBar_qrj", "in", 1, null, true, ValentineResultEffTrait_1.BundleName);
        r.node.parent = i;
        cc.sys.getSafeAreaRect();
        var o = Adapter_1.default.getSafeY();
        r.node.setPosition(0, o);
    };
    ValentineResultEffTrait.prototype.isValentineResultEffActive = function () {
        if (null != this._traitData.valentineResultEff)
            return this._traitData.valentineResultEff;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    var ValentineResultEffTrait_1;
    ValentineResultEffTrait.traitKey = "ValentineResultEff";
    ValentineResultEffTrait.BundleName = "r_valentineResultEff";
    ValentineResultEffTrait = ValentineResultEffTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineResultEffTrait")
    ], ValentineResultEffTrait);
    return ValentineResultEffTrait;
}(Trait_1.default));
exports.default = ValentineResultEffTrait;

cc._RF.pop();