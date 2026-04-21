"use strict";
cc._RF.push(module, 'b9b3fD2TMZNjqBTUbdG01Pb', 'DianZanTrait');
// subpackages/l_dianzan/Scripts/DianZanTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DianZanBehavior_1 = require("./DianZanBehavior");
var DianZanEffect_1 = require("./DianZanEffect");
var DianZanTrait = /** @class */ (function (_super) {
    __extends(DianZanTrait, _super);
    function DianZanTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._beforeClearMatchNum = 0;
        _this._afterClearMatchNum = 0;
        return _this;
    }
    DianZanTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._registerBehaviors();
    };
    DianZanTrait.prototype._registerBehaviors = function () {
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.ShowDianZan, DianZanBehavior_1.DianZanBehavior);
    };
    DianZanTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.Effect_ClearAfter] = this.onEffectClearAfterCB.bind(this);
        _t[GameEvent_1.EGameEvent.Effect_InitView] = this.onEffectInitViewCB.bind(this);
        return _t;
    };
    DianZanTrait.prototype.onEffectInitViewCB = function (t) {
        this._beforeClearMatchNum = t.gameContext.getTileMapObject().getCanMatchCardPairNum();
    };
    DianZanTrait.prototype.onEffectClearAfterCB = function (t, e) {
        Date.now(), Math.random().toString(36).substr(2, 9);
        e.options.input.inputType !== GameInputEnum_1.EGameInputEnum.AutoMerge && this._handlePushClearEffect(t, e);
    };
    DianZanTrait.prototype._checkDianZan = function () {
        return this._afterClearMatchNum >= this._beforeClearMatchNum;
    };
    DianZanTrait.prototype.checkDianZanSpecial = function () {
        return true;
    };
    DianZanTrait.prototype._handlePushClearEffect = function (t, e) {
        this._afterClearMatchNum = t.gameContext.getTileMapObject().getCanMatchCardPairNum();
        if (this._checkDianZan()) {
            if (!UserModel_1.default.getInstance().isGuideFinished() || !this.checkDianZanSpecial(e.tileId, e.lastTileId))
                return;
            var n = new DianZanEffect_1.DianZanEffect({
                tileId: e.tileId,
                lastTileId: e.lastTileId
            });
            t.pushEffect(n, BehaviorsEnum_1.EInsertType.Parallel);
        }
        this._beforeClearMatchNum = this._afterClearMatchNum;
    };
    DianZanTrait.traitKey = "DianZan";
    __decorate([
        mj.traitEvent("DianZanTt_checkDZ")
    ], DianZanTrait.prototype, "_checkDianZan", null);
    __decorate([
        mj.traitEvent("DianZanTt_checkDZSpecial")
    ], DianZanTrait.prototype, "checkDianZanSpecial", null);
    DianZanTrait = __decorate([
        mj.trait,
        mj.class("DianZanTrait")
    ], DianZanTrait);
    return DianZanTrait;
}(Trait_1.default));
exports.default = DianZanTrait;

cc._RF.pop();