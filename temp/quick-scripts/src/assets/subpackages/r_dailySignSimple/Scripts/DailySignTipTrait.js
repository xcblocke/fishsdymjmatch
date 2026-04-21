"use strict";
cc._RF.push(module, '846bdqTnWVFP4IWOu4qPKTz', 'DailySignTipTrait');
// subpackages/r_dailySignSimple/Scripts/DailySignTipTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Config_1 = require("../../../Scripts/Config");
var DailySignTipTrait = /** @class */ (function (_super) {
    __extends(DailySignTipTrait, _super);
    function DailySignTipTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailySignTipTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
        return _t;
    };
    DailySignTipTrait.prototype.onTopTouchStart = function () {
        this._traitData.clickClose && this.dispatchEvent("removeDailySignTip");
    };
    DailySignTipTrait.traitKey = "DailySignTip";
    DailySignTipTrait = __decorate([
        mj.trait,
        mj.class("DailySignTipTrait")
    ], DailySignTipTrait);
    return DailySignTipTrait;
}(Trait_1.default));
exports.default = DailySignTipTrait;

cc._RF.pop();