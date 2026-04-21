"use strict";
cc._RF.push(module, 'f40de1cUIlEJ6MytFHOsIwy', 'PropLeftTipRtShufTrait');
// subpackages/l_propLeftTipRtShuf/Scripts/PropLeftTipRtShufTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var PropLeftTipRtShufTrait = /** @class */ (function (_super) {
    __extends(PropLeftTipRtShufTrait, _super);
    function PropLeftTipRtShufTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropLeftTipRtShufTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PropLeftTipRtShufTrait.prototype.onGameUI_onLoad = function (t, r) {
        var e = t.ins;
        if (e && cc.isValid(e.node)) {
            var o = e.btnHitTips, i = e.btnShuffle;
            if (cc.isValid(o) && cc.isValid(i)) {
                var n = o.x, f = i.x;
                o.x = f;
                i.x = n;
                r();
            }
            else
                r();
        }
        else
            r();
    };
    PropLeftTipRtShufTrait.traitKey = "PropLeftTipRtShuf";
    PropLeftTipRtShufTrait = __decorate([
        mj.trait,
        mj.class("PropLeftTipRtShufTrait")
    ], PropLeftTipRtShufTrait);
    return PropLeftTipRtShufTrait;
}(Trait_1.default));
exports.default = PropLeftTipRtShufTrait;

cc._RF.pop();