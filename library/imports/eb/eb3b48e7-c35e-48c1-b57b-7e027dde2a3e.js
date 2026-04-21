"use strict";
cc._RF.push(module, 'eb3b4jnw15IwbV7fgJ93io+', 'WinAnimSpeedTrait');
// subpackages/l_winAnimSpeed/Scripts/WinAnimSpeedTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WinAnimSpeedTrait = /** @class */ (function (_super) {
    __extends(WinAnimSpeedTrait, _super);
    function WinAnimSpeedTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinAnimSpeedTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinAnimSpeedTrait.prototype.onWinVw_onLoad = function (t, e) {
        this.setViewAnimSpeed(t, "WinView");
        e();
    };
    WinAnimSpeedTrait.prototype.onDCWinVw_onLoad = function (t, e) {
        this.setViewAnimSpeed(t, "DailyChallengeWinView");
        e();
    };
    WinAnimSpeedTrait.prototype.onTLWinVw_onLoad = function (t, e) {
        this.setViewAnimSpeed(t, "TravelWinView");
        e();
    };
    WinAnimSpeedTrait.prototype.setViewAnimSpeed = function (t) {
        var e, n = t.ins;
        if (n && cc.isValid(n.node)) {
            var i = 1 / ((null === (e = this._traitData) || void 0 === e ? void 0 : e.speedRate) || 1.5);
            "function" == typeof n.setAnimSpeedRate && n.setAnimSpeedRate(i);
        }
    };
    WinAnimSpeedTrait.traitKey = "WinAnimSpeed";
    WinAnimSpeedTrait = __decorate([
        mj.trait,
        mj.class("WinAnimSpeedTrait")
    ], WinAnimSpeedTrait);
    return WinAnimSpeedTrait;
}(Trait_1.default));
exports.default = WinAnimSpeedTrait;

cc._RF.pop();