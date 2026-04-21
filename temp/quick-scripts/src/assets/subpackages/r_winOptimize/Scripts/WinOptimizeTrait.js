"use strict";
cc._RF.push(module, '066043azGtCObJgMfEUrw/i', 'WinOptimizeTrait');
// subpackages/r_winOptimize/Scripts/WinOptimizeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WinOptimizeView_1 = require("./WinOptimizeView");
var WinOptimizeTrait = /** @class */ (function (_super) {
    __extends(WinOptimizeTrait, _super);
    function WinOptimizeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["r_winOptimize:prefabs/WinOptimize"];
        return _this;
    }
    WinOptimizeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinOptimizeTrait.prototype.onWinCtrl_initRes = function (t, e) {
        var i = t.ins;
        null == i || i.addPreloadRes("Prefab", this.requireRes);
        e();
    };
    WinOptimizeTrait.prototype.onWinVw_showWinVw = function (t, e) {
        var i, o = t.ins;
        t.args[0];
        if (cc.isValid(o)) {
            var n = o.getContentNode();
            if (cc.isValid(n)) {
                var r = n.getChildByName("WinOptimize");
                if (!cc.isValid(r)) {
                    r = o.createUISync(WinOptimizeView_1.default);
                    cc.isValid(r) && n.addChild(r);
                }
                cc.isValid(r) && (null === (i = r.getComponent(WinOptimizeView_1.default)) || void 0 === i || i.showUI(n));
            }
        }
        e();
    };
    WinOptimizeTrait.traitKey = "WinOptimize";
    WinOptimizeTrait = __decorate([
        mj.trait,
        mj.class("WinOptimizeTrait")
    ], WinOptimizeTrait);
    return WinOptimizeTrait;
}(Trait_1.default));
exports.default = WinOptimizeTrait;

cc._RF.pop();