"use strict";
cc._RF.push(module, '27d30BUhopJspvaVWSciIuR', 'UnfinishedGamePushTrait');
// subpackages/l_unfinishedGamePush/Scripts/UnfinishedGamePushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var f = {
    pushHour: 18,
    noVisitMinutes: 30,
    opewaynum: "mjunfinished1",
    taskType: "mjunfinished01"
};
var UnfinishedGamePushTrait = /** @class */ (function (_super) {
    __extends(UnfinishedGamePushTrait, _super);
    function UnfinishedGamePushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = f;
        return _this;
    }
    UnfinishedGamePushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
            void 0 !== this._traitData.noVisitMinutes && (this._config.noVisitMinutes = this._traitData.noVisitMinutes);
        }
    };
    UnfinishedGamePushTrait.prototype.getConfig = function () {
        return this._config;
    };
    UnfinishedGamePushTrait.prototype.getUserModel = function () {
        return UserModel_1.default.getInstance();
    };
    UnfinishedGamePushTrait.prototype.isToday = function (e) {
        if (!e || e <= 0)
            return false;
        var t = new Date(), r = new Date(e);
        return t.getFullYear() === r.getFullYear() && t.getMonth() === r.getMonth() && t.getDate() === r.getDate();
    };
    UnfinishedGamePushTrait.prototype.hasNormalUnfinishedGame = function () {
        var e = this.getUserModel().normalData, t = e.getLevelData();
        if (!t || "" === t)
            return false;
        var r = e.getStartGameTime();
        return this.isToday(r);
    };
    UnfinishedGamePushTrait.prototype.hasTravelUnfinishedGame = function () {
        var e = this.getUserModel().travelData, t = e.getLevelData();
        if (!t || "" === t)
            return false;
        var r = e.getStartGameTime();
        return this.isToday(r);
    };
    UnfinishedGamePushTrait.prototype.checkTodayUnfinishedGame = function (e) {
        var t = e !== GameTypeEnums_1.MjGameType.Normal && this.hasNormalUnfinishedGame(), r = e !== GameTypeEnums_1.MjGameType.Travel && this.hasTravelUnfinishedGame();
        return {
            hasUnfinished: t || r,
            priorityNormal: t
        };
    };
    UnfinishedGamePushTrait.prototype.isBeforePushTime = function () {
        return new Date().getHours() < this._config.pushHour;
    };
    UnfinishedGamePushTrait.prototype.hasVisitedWithinNoVisitWindow = function () {
        var e = this.getUserModel().getAppStartTime();
        if (!e || e <= 0)
            return false;
        var t = new Date(), r = new Date(t.getFullYear(), t.getMonth(), t.getDate(), this._config.pushHour, 0, 0, 0);
        return e >= r.getTime() - 60000 * this._config.noVisitMinutes && e <= r.getTime();
    };
    UnfinishedGamePushTrait.prototype.canSendPush = function () {
        if (!this.isBeforePushTime())
            return {
                canSend: false,
                priorityNormal: false
            };
        var e = this.checkTodayUnfinishedGame();
        return e.hasUnfinished ? this.hasVisitedWithinNoVisitWindow() ? {
            canSend: false,
            priorityNormal: false
        } : {
            canSend: true,
            priorityNormal: e.priorityNormal
        } : {
            canSend: false,
            priorityNormal: false
        };
    };
    UnfinishedGamePushTrait.prototype.onIptSetLv_selEnterAnim = function (e, t) {
        var r = this.getUserModel().getCurrentGameType();
        if (r === GameTypeEnums_1.MjGameType.Normal || r === GameTypeEnums_1.MjGameType.Travel) {
            var i = __read(e.args, 2);
            i[0], i[1];
            this.checkAndTriggerPush();
            t();
        }
        else
            t();
    };
    UnfinishedGamePushTrait.prototype.onGsListener_onGameEnd = function (e, t) {
        var r = this.getUserModel().getCurrentGameType();
        if (r === GameTypeEnums_1.MjGameType.Normal || r === GameTypeEnums_1.MjGameType.Travel) {
            if (this.checkTodayUnfinishedGame(r).hasUnfinished) {
                this.checkAndTriggerPush();
            }
            else {
                this.cancelPush();
            }
            t();
        }
        else
            t();
    };
    UnfinishedGamePushTrait.prototype.onLoginM_enterGame = function (e, t) {
        var r = PushManager_1.default.getInstance().getOpenAppOpeway();
        if (r && r.opewaynum === this._config.opewaynum) {
            var i = this.checkTodayUnfinishedGame();
            if (i.hasUnfinished) {
                if (i.priorityNormal) {
                    JumpManager_1.default.getInstance().jumpToGame();
                }
                else {
                    JumpManager_1.default.getInstance().jumpToTravelGame();
                }
                t({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return
                });
                return;
            }
        }
        t();
    };
    UnfinishedGamePushTrait.prototype.checkAndTriggerPush = function () {
        this.canSendPush().canSend && this.sendPush();
    };
    UnfinishedGamePushTrait.prototype.sendPush = function () {
        var e = this.getConfig(), t = PushManager_1.default.getInstance().getPushTimestamp(e.pushHour);
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: e.opewaynum,
            taskType: e.taskType,
            sendTime: t
        }, {
            keyNum: "unfinished"
        });
    };
    UnfinishedGamePushTrait.prototype.cancelPush = function () {
        PushManager_1.default.getInstance().sendGamePushRemoved(this._config.opewaynum);
    };
    UnfinishedGamePushTrait.traitKey = "UnfinishedGamePush";
    UnfinishedGamePushTrait = __decorate([
        mj.trait,
        mj.class("UnfinishedGamePushTrait")
    ], UnfinishedGamePushTrait);
    return UnfinishedGamePushTrait;
}(Trait_1.default));
exports.default = UnfinishedGamePushTrait;

cc._RF.pop();