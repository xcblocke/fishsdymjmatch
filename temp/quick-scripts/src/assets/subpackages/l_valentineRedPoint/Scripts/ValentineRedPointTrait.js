"use strict";
cc._RF.push(module, '5afa7x5KbVCqrLl/TPSglAp', 'ValentineRedPointTrait');
// subpackages/l_valentineRedPoint/Scripts/ValentineRedPointTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ValentineRedPointTrait = /** @class */ (function (_super) {
    __extends(ValentineRedPointTrait, _super);
    function ValentineRedPointTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValentineRedPointTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        e();
        var n = this.isCurrentGuide(), r = this.isShouldOpen(), i = this.isActualOpen();
        if (n) {
            this.dispatchEvent(GameEvent_1.EGameEvent.RedDot_clearNotify, GameTypeEnums_1.ERedDotType.Valentine);
        }
        else {
            if (r && !i) {
                this.dispatchEvent(GameEvent_1.EGameEvent.RedDot_addNotify, GameTypeEnums_1.ERedDotType.Valentine);
            }
            else {
                this.dispatchEvent(GameEvent_1.EGameEvent.RedDot_clearNotify, GameTypeEnums_1.ERedDotType.Valentine);
            }
        }
    };
    ValentineRedPointTrait.prototype.isCurrentGuide = function () {
        var t = UserModel_1.default.getInstance().normalData.getLevelId(), e = UserModel_1.default.getInstance().isGuideFinished();
        return 1 === t && !e;
    };
    ValentineRedPointTrait.prototype.isShouldOpen = function () {
        var t, e = mj.getClassByName("ValentineModel");
        return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.isActivityOpen();
    };
    ValentineRedPointTrait.prototype.isActualOpen = function () {
        var t, e = mj.getClassByName("ValentineModel");
        return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.isActualActivityOpen();
    };
    ValentineRedPointTrait.traitKey = "ValentineRedPoint";
    ValentineRedPointTrait = __decorate([
        mj.trait,
        mj.class("ValentineRedPointTrait")
    ], ValentineRedPointTrait);
    return ValentineRedPointTrait;
}(Trait_1.default));
exports.default = ValentineRedPointTrait;

cc._RF.pop();