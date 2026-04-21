"use strict";
cc._RF.push(module, '14a1eHPjCBHCIiPgMJu/9tv', 'DailyRewardNotScrollTrait');
// subpackages/l_daily/Scripts/DailyRewardNotScrollTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DailyRewardNotScrollTrait = /** @class */ (function (_super) {
    __extends(DailyRewardNotScrollTrait, _super);
    function DailyRewardNotScrollTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyRewardNotScrollTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DailyRewardNotScrollTrait.prototype.onDailyRwdLVw_regScrollEvts = function (t, e) {
        this.setScrollEnabled(t.ins, false);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump
        });
    };
    DailyRewardNotScrollTrait.prototype.setScrollEnabled = function (t, e) {
        var i, o = (null == t ? void 0 : t._scrollView) || (null === (i = null == t ? void 0 : t.node) || void 0 === i ? void 0 : i.getComponent(cc.ScrollView)) || null;
        if (o) {
            o.enabled = e;
            e || o.stopAutoScroll();
        }
        var n = (null == t ? void 0 : t.dailyScrollView) || null;
        if (n) {
            n.enabled = false;
            n.stopAutoScroll();
        }
    };
    DailyRewardNotScrollTrait.traitKey = "DailyRewardNotScroll";
    DailyRewardNotScrollTrait = __decorate([
        mj.trait,
        mj.class("DailyRewardNotScrollTrait")
    ], DailyRewardNotScrollTrait);
    return DailyRewardNotScrollTrait;
}(Trait_1.default));
exports.default = DailyRewardNotScrollTrait;

cc._RF.pop();