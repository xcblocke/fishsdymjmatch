"use strict";
cc._RF.push(module, 'ace5bCbzwlLfoCO4+xDe92j', 'WinFullComboTrait');
// subpackages/l_winFullCombo/Scripts/WinFullComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var WinFullComboView_1 = require("./WinFullComboView");
var WinFullComboTrait = /** @class */ (function (_super) {
    __extends(WinFullComboTrait, _super);
    function WinFullComboTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["prefabs/ui/WinFullComboView"];
        return _this;
    }
    WinFullComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinFullComboTrait.prototype.isFullComboTriggered = function () {
        var t = NormalGameData_1.default.getInstance(), e = t.getHasTriggeredFullCombo(), o = t.getHasTriggeredRewardCombo();
        return e || o;
    };
    WinFullComboTrait.prototype.onWinCtrl_initRes = function (t, e) {
        if (this.isFullComboTriggered()) {
            var o = t.ins;
            null == o || o.addPreloadRes("Prefab", this.requireRes);
        }
        e();
    };
    WinFullComboTrait.prototype.onLevelBox_pbDelay = function (t, e) {
        this.isFullComboTriggered() && (t.args[0].delayTime += 0.33);
        e();
    };
    WinFullComboTrait.prototype.onWinVw_showWinVw = function (t, e) {
        var o = t.ins, i = t.args[0];
        if (cc.isValid(o) && this.isFullComboTriggered()) {
            var r = o.getContentNode();
            if (cc.isValid(r)) {
                var n = r.getChildByName("WinFullComboView");
                if (!cc.isValid(n)) {
                    n = o.createUISync(WinFullComboView_1.default);
                    cc.isValid(n) && r.addChild(n);
                }
                cc.isValid(n) && n.getComponent(WinFullComboView_1.default).showFullComboUI(i, r);
            }
        }
        e();
    };
    WinFullComboTrait.traitKey = "WinFullCombo";
    __decorate([
        mj.traitEvent("WinFCombo_isTriggered")
    ], WinFullComboTrait.prototype, "isFullComboTriggered", null);
    WinFullComboTrait = __decorate([
        mj.trait,
        mj.class("WinFullComboTrait")
    ], WinFullComboTrait);
    return WinFullComboTrait;
}(Trait_1.default));
exports.default = WinFullComboTrait;

cc._RF.pop();