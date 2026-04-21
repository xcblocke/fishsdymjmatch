"use strict";
cc._RF.push(module, '724fb4bUfdHv7Kgd3JZZyC2', 'AdUnavailableTrait');
// subpackages/l_adUnavailable/Scripts/AdUnavailableTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var AdUnavailableTrait = /** @class */ (function (_super) {
    __extends(AdUnavailableTrait, _super);
    function AdUnavailableTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.retryTime = 9;
        return _this;
    }
    AdUnavailableTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.retryTime = this._traitData.retryTime;
    };
    AdUnavailableTrait.prototype.onAdMgr_videoFailed = function (t, e) {
        if (!t.args[0]) {
            ControllerManager_1.default.getInstance().pushViewByController("AdUnavailableController", {
                isShowAction: true
            });
            t.args[1] = true;
        }
        e();
    };
    AdUnavailableTrait.prototype.onAdMgr_videoSuccess = function (t, e) {
        ControllerManager_1.default.getInstance().closeViewByName("AdUnavailableController");
        e();
    };
    AdUnavailableTrait.traitKey = "AdUnavailable";
    AdUnavailableTrait = __decorate([
        mj.trait,
        mj.class("AdUnavailableTrait")
    ], AdUnavailableTrait);
    return AdUnavailableTrait;
}(Trait_1.default));
exports.default = AdUnavailableTrait;

cc._RF.pop();