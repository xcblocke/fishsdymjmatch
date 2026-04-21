
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_dailySignSimple/Scripts/DailySignTipTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RhaWx5U2lnblNpbXBsZS9TY3JpcHRzL0RhaWx5U2lnblRpcFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsa0RBQTRFO0FBRzVFO0lBQStDLHFDQUFLO0lBQXBEOztJQVVBLENBQUM7SUFSQywrQ0FBbUIsR0FBbkI7UUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsMENBQWlDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCwyQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFSTSwwQkFBUSxHQUFHLGNBQWMsQ0FBQztJQURkLGlCQUFpQjtRQUZyQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7T0FDVCxpQkFBaUIsQ0FVckM7SUFBRCx3QkFBQztDQVZELEFBVUMsQ0FWOEMsZUFBSyxHQVVuRDtrQkFWb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IEVWVF9NU0dfS0VZX0VWRU5UX1RPUF9UT1VDSF9TVEFSVCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQ29uZmlnJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRGFpbHlTaWduVGlwVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5U2lnblRpcFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkRhaWx5U2lnblRpcFwiO1xuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W0VWVF9NU0dfS0VZX0VWRU5UX1RPUF9UT1VDSF9TVEFSVF0gPSB0aGlzLm9uVG9wVG91Y2hTdGFydC5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfdDtcbiAgfVxuICBvblRvcFRvdWNoU3RhcnQoKSB7XG4gICAgdGhpcy5fdHJhaXREYXRhLmNsaWNrQ2xvc2UgJiYgdGhpcy5kaXNwYXRjaEV2ZW50KFwicmVtb3ZlRGFpbHlTaWduVGlwXCIpO1xuICB9XG59Il19