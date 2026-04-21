"use strict";
cc._RF.push(module, '1381eUK5KNC95n7f/kiibRN', 'HallBtnTip');
// subpackages/l_classic/Scripts/HallBtnTip.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ETipAnimType = void 0;
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var o;
exports.ETipAnimType = {
    NewModel: "newModel",
    Continue: "continue"
};
(o = {})[exports.ETipAnimType.NewModel] = {
    anim: ["newMod_in", "newMod_init"],
    tip: "New Mod!",
    i18nKey: "classic_newmod"
};
o[exports.ETipAnimType.Continue] = {
    anim: ["continue_in", "continue_init"],
    tip: "Continue!",
    i18nKey: "classic_Continue"
};
var u = o;
var HallBtnTip = /** @class */ (function (_super) {
    __extends(HallBtnTip, _super);
    function HallBtnTip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.spine = null;
        _this.baseSpine = null;
        _this.inited = false;
        return _this;
    }
    HallBtnTip.prototype.initComponent = function () {
        var t = this;
        if (!this.inited) {
            this.inited = true;
            this.label = this.node.getChildByName("Label");
            this.spine = this.node.getChildByName("Anim");
            this.baseSpine = this.spine.addComponent(BaseSpine_1.default);
            this.baseSpine.markReady("");
            this.baseSpine.attachNode("hook_txt", function () {
                return t.label;
            });
            this.label.setPosition(0, 30);
        }
    };
    HallBtnTip.prototype.playTipAnim = function (t) {
        var e = this;
        this.initComponent();
        var n = u[t];
        if (n) {
            I18NStrings_1.default.setText(this.label, n.tip, n.i18nKey);
            this.baseSpine.setAnimation(n.anim[0], 1, function () {
                e.baseSpine.setAnimation(n.anim[1], -1);
            }, false);
        }
    };
    HallBtnTip.prefabUrl = "prefabs/HallBtnTip";
    HallBtnTip.bundleName = "l_classic";
    HallBtnTip = __decorate([
        mj.class
    ], HallBtnTip);
    return HallBtnTip;
}(BaseUI_1.default));
exports.default = HallBtnTip;

cc._RF.pop();