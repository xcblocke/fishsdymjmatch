"use strict";
cc._RF.push(module, '0c37duV6wtBJZTHSjEbFfBP', 'CloseTouchMoveTrait');
// subpackages/l_touchmove/Scripts/CloseTouchMoveTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var CloseTouchMoveTrait = /** @class */ (function (_super) {
    __extends(CloseTouchMoveTrait, _super);
    function CloseTouchMoveTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloseTouchMoveTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CloseTouchMoveTrait.prototype.isIgnoreTile2 = function () {
        return false;
    };
    CloseTouchMoveTrait.prototype.onGtc_isOpenTouchMove = function (t, e) {
        if (t.ins.getGameType() == GameTypeEnums_1.MjGameType.Tile2Normal && this.isIgnoreTile2()) {
            e();
        }
        else {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: false
            });
        }
    };
    CloseTouchMoveTrait.prototype.onIptBTchEnd_checkIsSame = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: true
        });
    };
    CloseTouchMoveTrait.traitKey = "CloseTouchMove";
    __decorate([
        mj.traitEvent("Cltm_IsIgnoreTile2")
    ], CloseTouchMoveTrait.prototype, "isIgnoreTile2", null);
    CloseTouchMoveTrait = __decorate([
        mj.trait,
        mj.class("CloseTouchMoveTrait")
    ], CloseTouchMoveTrait);
    return CloseTouchMoveTrait;
}(Trait_1.default));
exports.default = CloseTouchMoveTrait;

cc._RF.pop();