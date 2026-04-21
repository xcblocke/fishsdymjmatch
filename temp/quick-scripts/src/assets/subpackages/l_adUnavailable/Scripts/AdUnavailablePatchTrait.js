"use strict";
cc._RF.push(module, '5260aO6iRlGQ7o7zTe7Ufym', 'AdUnavailablePatchTrait');
// subpackages/l_adUnavailable/Scripts/AdUnavailablePatchTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var AdUnavailablePatchTrait = /** @class */ (function (_super) {
    __extends(AdUnavailablePatchTrait, _super);
    function AdUnavailablePatchTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.retryTime = 9;
        return _this;
    }
    AdUnavailablePatchTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.retryTime = this._traitData.retryTime;
    };
    AdUnavailablePatchTrait.prototype.onAdMgr_videoFailed = function (t, e) {
        if (t.ins) {
            var o = t.ins._videoAdPosition;
            if (![DGameAdShow_1.EAdPosition.InGameMotivation_Reshuffle, DGameAdShow_1.EAdPosition.InGameMotivation_Hint, DGameAdShow_1.EAdPosition.InGameMotivation_Revive].includes(o)) {
                e({
                    isBreak: true
                });
                return;
            }
        }
        e();
    };
    AdUnavailablePatchTrait.traitKey = "AdUnavailablePatch";
    AdUnavailablePatchTrait = __decorate([
        mj.trait,
        mj.class("AdUnavailablePatchTrait")
    ], AdUnavailablePatchTrait);
    return AdUnavailablePatchTrait;
}(Trait_1.default));
exports.default = AdUnavailablePatchTrait;

cc._RF.pop();