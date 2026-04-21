"use strict";
cc._RF.push(module, '93cfeh8e9hCqJRZI9KxjRKx', 'CloseMultiTouchTrait');
// subpackages/l_multitouch/Scripts/CloseMultiTouchTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var CloseMultiTouchTrait = /** @class */ (function (_super) {
    __extends(CloseMultiTouchTrait, _super);
    function CloseMultiTouchTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloseMultiTouchTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CloseMultiTouchTrait.prototype.onLoginM_showLoad = function (t, r) {
        cc.macro.ENABLE_MULTI_TOUCH && (cc.macro.ENABLE_MULTI_TOUCH = false);
        r();
    };
    CloseMultiTouchTrait.traitKey = "CloseMultiTouch";
    CloseMultiTouchTrait = __decorate([
        mj.trait,
        mj.class("CloseMultiTouchTrait")
    ], CloseMultiTouchTrait);
    return CloseMultiTouchTrait;
}(Trait_1.default));
exports.default = CloseMultiTouchTrait;

cc._RF.pop();