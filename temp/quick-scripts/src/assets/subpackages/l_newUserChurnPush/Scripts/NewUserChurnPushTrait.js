"use strict";
cc._RF.push(module, '905d9Y64lNC8oEo/Wo4ePyd', 'NewUserChurnPushTrait');
// subpackages/l_newUserChurnPush/Scripts/NewUserChurnPushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var p = {
    pushHour: 12,
    maxLifecycleDays: 7,
    triggerStartDay: 3,
    opewaynum: "mjcdqzh1",
    taskType: "mjcdqzh01"
};
var NewUserChurnPushTrait = /** @class */ (function (_super) {
    __extends(NewUserChurnPushTrait, _super);
    function NewUserChurnPushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = p;
        return _this;
    }
    NewUserChurnPushTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    NewUserChurnPushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.isLocalEmpty(this.localData.visitRecord) && (this.localData.visitRecord = {});
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
            void 0 !== this._traitData.maxLifecycleDays && (this._config.maxLifecycleDays = this._traitData.maxLifecycleDays);
            void 0 !== this._traitData.triggerStartDay && (this._config.triggerStartDay = this._traitData.triggerStartDay);
        }
    };
    NewUserChurnPushTrait.prototype.getConfig = function () {
        return this._config;
    };
    NewUserChurnPushTrait.prototype.getUserModel = function () {
        return UserModel_1.default.getInstance();
    };
    NewUserChurnPushTrait.prototype.getActiveDays = function () {
        return this.getUserModel().getGameActiveDays() || 1;
    };
    NewUserChurnPushTrait.prototype.recordTodayVisit = function () {
        var t = this.getActiveDays();
        if (!this.localData.visitRecord[t]) {
            this.localData.visitRecord[t] = true;
            this.localData.visitRecord = this.localData.visitRecord;
        }
    };
    NewUserChurnPushTrait.prototype.checkFirstDayVisitSecondDayMissed = function () {
        var t = this.localData.visitRecord, e = true === t[1], i = true !== t[2];
        return e && i;
    };
    NewUserChurnPushTrait.prototype.isWithinLifecycle = function () {
        return this.getActiveDays() <= this._config.maxLifecycleDays;
    };
    NewUserChurnPushTrait.prototype.isBeforePushTime = function () {
        return new Date().getHours() < this._config.pushHour;
    };
    NewUserChurnPushTrait.prototype.canTriggerPush = function () {
        var t = this.getActiveDays();
        return !(!this.isWithinLifecycle() || t < this._config.triggerStartDay || !this.checkFirstDayVisitSecondDayMissed() || !this.isBeforePushTime());
    };
    NewUserChurnPushTrait.prototype.onPushMgr_init = function (t, e) {
        this.recordTodayVisit();
        this.checkAndTriggerPush();
        e();
    };
    NewUserChurnPushTrait.prototype.onLoginM_enterGame = function (t, e) {
        var i = PushManager_1.default.getInstance().getOpenAppOpeway();
        if (i && i.opewaynum === this._config.opewaynum) {
            JumpManager_1.default.getInstance().jumpToGame();
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    NewUserChurnPushTrait.prototype.checkAndTriggerPush = function () {
        if (this.canTriggerPush()) {
            this.sendPush();
        }
        else {
            this.cancelPush();
        }
    };
    NewUserChurnPushTrait.prototype.sendPush = function () {
        var t = this.getConfig(), e = PushManager_1.default.getInstance().getPushTimestamp(t.pushHour);
        this.getActiveDays();
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: t.opewaynum,
            taskType: t.taskType,
            sendTime: e
        });
    };
    NewUserChurnPushTrait.prototype.cancelPush = function () {
        PushManager_1.default.getInstance().sendGamePushRemoved(this._config.opewaynum);
    };
    NewUserChurnPushTrait.traitKey = "NewUserChurnPush";
    NewUserChurnPushTrait = __decorate([
        mj.trait,
        mj.class("NewUserChurnPushTrait")
    ], NewUserChurnPushTrait);
    return NewUserChurnPushTrait;
}(Trait_1.default));
exports.default = NewUserChurnPushTrait;

cc._RF.pop();