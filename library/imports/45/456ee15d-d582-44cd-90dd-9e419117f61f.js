"use strict";
cc._RF.push(module, '456eeFd1YJEzZDdnkGRF/Yf', 'WiderDeepShadowTrait');
// subpackages/l_widerDeepShadow/Scripts/WiderDeepShadowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var WiderDeepShadowTrait = /** @class */ (function (_super) {
    __extends(WiderDeepShadowTrait, _super);
    function WiderDeepShadowTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WiderDeepShadowTrait_1 = WiderDeepShadowTrait;
    WiderDeepShadowTrait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var a;
        try {
            var i = null === (a = t.args) || void 0 === a ? void 0 : a[0];
            if ("gameplay_img_shadow_dn" === i || "gameplay_img_shadow_up" === i) {
                r({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: "texture/" + i,
                        bundleName: WiderDeepShadowTrait_1.BUNDLE_NAME,
                        fromAtlas: false
                    }
                });
                return;
            }
            r();
        }
        catch (t) {
            r();
        }
    };
    WiderDeepShadowTrait.prototype.onMainGameCtrl_crtCardLyt = function (t, r) {
        try {
            var e = t.beforReturnVal;
            if (e) {
                e.shadowSize = [this.traitData.shadowWith || 219, this.traitData.shadowHeight || 263];
                e.shadowSizeUp = [this.traitData.shadowWith || 219, this.traitData.shadowHeight || 263];
            }
        }
        catch (t) { }
        r();
    };
    var WiderDeepShadowTrait_1;
    WiderDeepShadowTrait.traitKey = "WiderDeepShadow";
    WiderDeepShadowTrait.BUNDLE_NAME = "l_widerDeepShadow";
    WiderDeepShadowTrait = WiderDeepShadowTrait_1 = __decorate([
        mj.trait,
        mj.class("WiderDeepShadowTrait")
    ], WiderDeepShadowTrait);
    return WiderDeepShadowTrait;
}(Trait_1.default));
exports.default = WiderDeepShadowTrait;

cc._RF.pop();