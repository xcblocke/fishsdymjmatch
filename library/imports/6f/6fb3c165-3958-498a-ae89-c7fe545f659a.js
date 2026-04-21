"use strict";
cc._RF.push(module, '6fb3cFlOVhJiq6Jx/5UX2Wa', 'BannerHidePropBarHeightTrait');
// subpackages/l_bannerHidePropBarHeight/Scripts/BannerHidePropBarHeightTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BannerHidePropBarHeightTrait = /** @class */ (function (_super) {
    __extends(BannerHidePropBarHeightTrait, _super);
    function BannerHidePropBarHeightTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BannerHidePropBarHeightTrait.prototype.onAdMgr_showBanner = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    BannerHidePropBarHeightTrait.prototype.onGameUI_onLoad = function (t, r) {
        var e, i, o = t.ins;
        if (o && cc.isValid(o.node)) {
            var n = o.node.getChildByName("nodeBottom");
            if (n && cc.isValid(n)) {
                var a = n.getComponent(cc.Widget);
                if (a) {
                    void 0 !== (null === (e = this.traitData) || void 0 === e ? void 0 : e.propBarHeight) && (a.bottom = (null === (i = this.traitData) || void 0 === i ? void 0 : i.propBarHeight) - 85);
                    r();
                }
                else
                    r();
            }
            else
                r();
        }
        else
            r();
    };
    BannerHidePropBarHeightTrait.traitKey = "BannerHidePropBarHeight";
    BannerHidePropBarHeightTrait = __decorate([
        mj.trait,
        mj.class("BannerHidePropBarHeightTrait")
    ], BannerHidePropBarHeightTrait);
    return BannerHidePropBarHeightTrait;
}(Trait_1.default));
exports.default = BannerHidePropBarHeightTrait;

cc._RF.pop();