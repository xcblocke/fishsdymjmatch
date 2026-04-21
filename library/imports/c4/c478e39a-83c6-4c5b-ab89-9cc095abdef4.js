"use strict";
cc._RF.push(module, 'c478eOag8ZMW6uJnMCVq970', 'OutOfMatchesUI');
// subpackages/r_outOfMatches/Scripts/OutOfMatchesUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var OutOfMatchesUI = /** @class */ (function (_super) {
    __extends(OutOfMatchesUI, _super);
    function OutOfMatchesUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bottomBg = null;
        _this.tipSpr = null;
        return _this;
    }
    OutOfMatchesUI.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    OutOfMatchesUI.prototype.playAnimation = function (t) {
        if (this.bottomBg && this.tipSpr) {
            this.bottomBg.opacity = 0;
            this.tipSpr.scale = 0;
            this.tipSpr.opacity = 0;
            cc.tween(this.bottomBg).to(0.4, {
                opacity: 178
            }, {
                easing: "sineInOut"
            }).start();
            cc.tween(this.tipSpr).parallel(cc.tween().to(0.4, {
                scale: 1
            }, {
                easing: "backOut"
            }), cc.tween().to(0.4, {
                opacity: 255
            }, {
                easing: "sineInOut"
            })).delay(0.5).call(function () {
                null == t || t();
            }).start();
        }
        else
            null == t || t();
    };
    OutOfMatchesUI.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    OutOfMatchesUI.prefabUrl = "prefabs/OutOfMatches";
    OutOfMatchesUI.bundleName = "r_outOfMatches";
    __decorate([
        mj.node("bottom_bg")
    ], OutOfMatchesUI.prototype, "bottomBg", void 0);
    __decorate([
        mj.node("bottom_bg/tip_spr")
    ], OutOfMatchesUI.prototype, "tipSpr", void 0);
    OutOfMatchesUI = __decorate([
        mj.class
    ], OutOfMatchesUI);
    return OutOfMatchesUI;
}(BaseUI_1.default));
exports.default = OutOfMatchesUI;

cc._RF.pop();