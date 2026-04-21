"use strict";
cc._RF.push(module, 'ded59jOqxlP07EblST8fpOO', 'BadgeHideTabTrait');
// subpackages/l_daily/Scripts/BadgeHideTabTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BadgeHideTabTrait = /** @class */ (function (_super) {
    __extends(BadgeHideTabTrait, _super);
    function BadgeHideTabTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BadgeHideTabTrait.prototype.onDailyCollVw_onLoad = function (t, e) {
        var i = t.ins.node;
        if (cc.isValid(i)) {
            var o = cc.find("btn_change", i);
            o && (o.active = false);
        }
        e();
    };
    BadgeHideTabTrait.traitKey = "BadgeHideTab";
    BadgeHideTabTrait = __decorate([
        mj.trait,
        mj.class("BadgeHideTabTrait")
    ], BadgeHideTabTrait);
    return BadgeHideTabTrait;
}(Trait_1.default));
exports.default = BadgeHideTabTrait;

cc._RF.pop();