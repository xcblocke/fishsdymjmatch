"use strict";
cc._RF.push(module, 'fb9d5sIIJtLxLsD0Ru9EWJU', 'FailToolTipTrait');
// subpackages/l_failToolTip/Scripts/FailToolTipTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FailToolTipTrait = /** @class */ (function (_super) {
    __extends(FailToolTipTrait, _super);
    function FailToolTipTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FailToolTipTrait.prototype, "randomRange", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.randomRange) && void 0 !== e ? e : [10, 49];
        },
        enumerable: false,
        configurable: true
    });
    FailToolTipTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FailToolTipTrait.prototype.onFailVw_show = function (t, e) {
        var r = t.ins;
        if (cc.isValid(r) && cc.isValid(r.node)) {
            var o = cc.find("content_node/desc", r.node);
            if (cc.isValid(o)) {
                o.getComponent(cc.Label).lineHeight = 60;
                o.width = 720;
                var i = I18NStrings_1.default.get("keyXiPai_Tips_01", "{0}% of people used shuffle to pass this level"), n = [this.getPercent()], a = I18NStrings_1.default.stringFormat(i, n);
                I18NStrings_1.default.setText(o, a, "keyXiPai_Tips_01", n);
                e();
            }
            else
                e();
        }
        else
            e();
    };
    FailToolTipTrait.prototype.getPercent = function () {
        var t = __read(this.randomRange, 2), e = t[0], r = t[1], o = GameUtils_1.default.randomFloat(e, r), i = UserModel_1.default.getInstance().getCurrentGameData(), n = i.getTotalTileCount();
        return (o + 50 * i.getClearTileCount() / n).toFixed(1);
    };
    FailToolTipTrait.traitKey = "FailToolTip";
    FailToolTipTrait = __decorate([
        mj.trait,
        mj.class("FailToolTipTrait")
    ], FailToolTipTrait);
    return FailToolTipTrait;
}(Trait_1.default));
exports.default = FailToolTipTrait;

cc._RF.pop();