"use strict";
cc._RF.push(module, 'd3dbc6uc0FA7rhkEON5qXrG', 'WinOptimize1Trait');
// subpackages/r_winOptimize1/Scripts/WinOptimize1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WinOptimize1View_1 = require("./WinOptimize1View");
var WinOptimize1Trait = /** @class */ (function (_super) {
    __extends(WinOptimize1Trait, _super);
    function WinOptimize1Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["r_winOptimize1:prefabs/WinOptimize1"];
        return _this;
    }
    WinOptimize1Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinOptimize1Trait.prototype.onWinCtrl_initRes = function (t, i) {
        var e = t.ins;
        null == e || e.addPreloadRes("Prefab", this.requireRes);
        i();
    };
    WinOptimize1Trait.prototype.onWinVw_showWinVw = function (t, i) {
        var e, n = t.ins;
        t.args[0];
        if (cc.isValid(n)) {
            var o = n.getContentNode();
            if (cc.isValid(o)) {
                var r = o.getChildByName("WinOptimize1");
                if (!cc.isValid(r)) {
                    r = n.createUISync(WinOptimize1View_1.default);
                    cc.isValid(r) && o.addChild(r);
                }
                cc.isValid(r) && (null === (e = r.getComponent(WinOptimize1View_1.default)) || void 0 === e || e.showUI(o));
            }
        }
        i();
    };
    WinOptimize1Trait.traitKey = "WinOptimize1";
    WinOptimize1Trait = __decorate([
        mj.trait,
        mj.class("WinOptimize1Trait")
    ], WinOptimize1Trait);
    return WinOptimize1Trait;
}(Trait_1.default));
exports.default = WinOptimize1Trait;

cc._RF.pop();