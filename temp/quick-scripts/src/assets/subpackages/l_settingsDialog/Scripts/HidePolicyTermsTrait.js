"use strict";
cc._RF.push(module, '0fa54aAxmJO7YYOR7PDJSBJ', 'HidePolicyTermsTrait');
// subpackages/l_settingsDialog/Scripts/HidePolicyTermsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var HidePolicyTermsTrait = /** @class */ (function (_super) {
    __extends(HidePolicyTermsTrait, _super);
    function HidePolicyTermsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HEIGHT_REDUCE = 65;
        return _this;
    }
    HidePolicyTermsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    HidePolicyTermsTrait.prototype.onUISetDlg_adjustPH = function (t, e) {
        var i = t.ins;
        if (cc.isValid(i) && cc.isValid(i.node)) {
            var o = i.node.getChildByName("content");
            if (cc.isValid(o)) {
                var n = o.getChildByName("bottom_node");
                if (cc.isValid(n)) {
                    var a = n.getChildByName("privacy_policy");
                    cc.isValid(a) && (a.active = false);
                    var r = n.getChildByName("terms");
                    cc.isValid(r) && (r.active = false);
                    this.adjustBottomWidgets(o);
                }
            }
        }
        e();
    };
    HidePolicyTermsTrait.prototype.adjustBottomWidgets = function (t) {
        var e = t.getChildByName("bottom_layout");
        if (cc.isValid(e)) {
            var i = e.getComponent(cc.Widget);
            if (cc.isValid(i) && i.isAlignBottom) {
                i.bottom -= this.HEIGHT_REDUCE;
                i.updateAlignment();
            }
        }
    };
    HidePolicyTermsTrait.prototype.onUISetDlg_getDch = function (t, e) {
        var i = (t.beforReturnVal || 1100) - this.HEIGHT_REDUCE;
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: i
        });
    };
    HidePolicyTermsTrait.traitKey = "HidePolicyTerms";
    HidePolicyTermsTrait = __decorate([
        mj.trait,
        mj.class("HidePolicyTermsTrait")
    ], HidePolicyTermsTrait);
    return HidePolicyTermsTrait;
}(Trait_1.default));
exports.default = HidePolicyTermsTrait;

cc._RF.pop();