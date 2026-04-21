"use strict";
cc._RF.push(module, '18e0bsYMoFAPq9JM2qIa9tp', 'JourneyUnlockTrait');
// subpackages/l_journey/Scripts/JourneyUnlockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var JourneyUnlockTrait = /** @class */ (function (_super) {
    __extends(JourneyUnlockTrait, _super);
    function JourneyUnlockTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JourneyUnlockTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "Tile2BfWinBhv_doOthLgc",
                priority: 20
            }]);
    };
    JourneyUnlockTrait.prototype.onJourney_getLimitDay = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this.traitData.installDay
        });
    };
    JourneyUnlockTrait.prototype.onJourney_getLimitLevel = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this.traitData.levelLimit
        });
    };
    JourneyUnlockTrait.prototype.onJourney_IsLevelValid = function (t, e) {
        var r = UserModel_1.default.getInstance().getMainGameData().getLevelId();
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: r >= t.ins.getLimitLevel()
        });
    };
    JourneyUnlockTrait.prototype.onBeforeWinBhv_doOthLgc = function (t, e) {
        this.checkRedPoint();
        e();
    };
    JourneyUnlockTrait.prototype.onTile2BfWinBhv_doOthLgc = function (t, e) {
        this.checkRedPoint();
        e();
    };
    JourneyUnlockTrait.prototype.checkRedPoint = function () {
        var t = UserModel_1.default.getInstance().getMainGameData().getLevelId(), e = TravelGameModel_1.default.getInstance().isUnlocked(), r = TravelGameModel_1.default.getInstance().getRedPointState();
        if (!e && r === TravelGameModel_1.ETravelRedPointState.None && t >= this.traitData.levelLimit) {
            TravelGameModel_1.default.getInstance().setRedPointState(TravelGameModel_1.ETravelRedPointState.Show);
            mj.EventManager.emit(GameEvent_1.EGameEvent.RedDot_addNotify, "journey");
        }
    };
    JourneyUnlockTrait.traitKey = "JourneyUnlock";
    JourneyUnlockTrait = __decorate([
        mj.trait,
        mj.class("JourneyUnlockTrait")
    ], JourneyUnlockTrait);
    return JourneyUnlockTrait;
}(Trait_1.default));
exports.default = JourneyUnlockTrait;

cc._RF.pop();