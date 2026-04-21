"use strict";
cc._RF.push(module, '2139cXgtqtJ/L6pSi0qUqdh', 'DailyChallengeMedalPushTrait');
// subpackages/l_dailyChallengeMedalPush/Scripts/DailyChallengeMedalPushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var DailyChallengeMedalPushTrait = /** @class */ (function (_super) {
    __extends(DailyChallengeMedalPushTrait, _super);
    function DailyChallengeMedalPushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {
            progressThreshold: 0.5,
            maxConsecutiveDays: 7,
            minTriggerIntervalDays: 3,
            pushHour: 21,
            opewaynum: "mbtzmedal1",
            taskType: "mbtzmedal01"
        };
        return _this;
    }
    DailyChallengeMedalPushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
            void 0 !== this._traitData.progressThreshold && (this._config.progressThreshold = this._traitData.progressThreshold);
            void 0 !== this._traitData.maxConsecutiveDays && (this._config.maxConsecutiveDays = this._traitData.maxConsecutiveDays);
            void 0 !== this._traitData.minTriggerIntervalDays && (this._config.minTriggerIntervalDays = this._traitData.minTriggerIntervalDays);
        }
    };
    DailyChallengeMedalPushTrait.prototype.getDailyModel = function () {
        var t = mj.getClassByName("DailyModel");
        return null == t ? void 0 : t.getInstance();
    };
    DailyChallengeMedalPushTrait.prototype.getCurrentDailyId = function () {
        var t = this.getDailyModel();
        if (!t)
            return 0;
        var e = t.getToday();
        return (null == e ? void 0 : e.id) || 0;
    };
    DailyChallengeMedalPushTrait.prototype.getMonthTotalDays = function () {
        var t = new Date();
        return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
    };
    DailyChallengeMedalPushTrait.prototype.getCompletedDays = function () {
        var t, e, r = this.getDailyModel();
        if (!r)
            return 0;
        var a = this.getCurrentDailyId();
        if (0 === a)
            return 0;
        var o = r.getMonthData(a);
        if (!o || 0 === o.length)
            return 0;
        var i = 0;
        try {
            for (var s = __values(o), l = s.next(); !l.done; l = s.next())
                3 === l.value.status && i++;
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (e = s.return) && e.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return i;
    };
    DailyChallengeMedalPushTrait.prototype.hasMonthMedal = function () {
        var t = this.getDailyModel();
        if (!t)
            return false;
        var e = this.getCurrentDailyId();
        return 0 !== e && t.isMonthCompleted(e);
    };
    DailyChallengeMedalPushTrait.prototype.onPushMgr_init = function (t, e) {
        this.checkAndTriggerPush();
        e();
    };
    DailyChallengeMedalPushTrait.prototype.onDCWinCtrl_viewShow = function (t, e) {
        this.checkAndTriggerPush();
        e();
    };
    DailyChallengeMedalPushTrait.prototype.onBadgeMode_addBadge = function (t, e) {
        var r, a = null === (r = t.args) || void 0 === r ? void 0 : r[0];
        if (a) {
            var o = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, a);
            if (5 === (o ? o.Type : 0)) {
                this.hasMonthMedal() && this.cancelPush();
                e();
            }
            else
                e();
        }
        else
            e();
    };
    DailyChallengeMedalPushTrait.prototype.getPushTimestamp = function () {
        var t = new Date(), e = new Date(t.getFullYear(), t.getMonth(), t.getDate(), this._config.pushHour, 0, 0, 0);
        t.getTime() > e.getTime() && e.setDate(e.getDate() + 1);
        return e.getTime();
    };
    DailyChallengeMedalPushTrait.prototype.checkProgressThreshold = function (t, e) {
        return !(e <= 0) && t >= Math.floor(e * this._config.progressThreshold);
    };
    DailyChallengeMedalPushTrait.prototype.sendPush = function () {
        var t = this.getPushTimestamp();
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: this._config.opewaynum,
            taskType: this._config.taskType,
            sendTime: t
        }, {
            keyNum: "progress_" + Math.floor(100 * this._config.progressThreshold)
        });
    };
    DailyChallengeMedalPushTrait.prototype.cancelPush = function () {
        PushManager_1.default.getInstance().sendGamePushRemoved(this._config.opewaynum);
    };
    DailyChallengeMedalPushTrait.prototype.checkAndTriggerPush = function () {
        if (this.hasMonthMedal())
            this.cancelPush();
        else {
            var t = this.getCompletedDays(), e = this.getMonthTotalDays();
            this.checkProgressThreshold(t, e) && this.sendPush();
        }
    };
    DailyChallengeMedalPushTrait.prototype.onLoginM_enterGame = function (t, e) {
        var r = PushManager_1.default.getInstance().getOpenAppOpeway();
        if (r && r.opewaynum === this._config.opewaynum) {
            this.showPopView(function (t) {
                e({
                    isBreak: t
                });
            });
        }
        else {
            e();
        }
    };
    DailyChallengeMedalPushTrait.prototype.showPopView = function (t) {
        JumpManager_1.default.getInstance().jumpToDailyChallenge();
        null == t || t(true);
    };
    DailyChallengeMedalPushTrait.traitKey = "DailyChallengeMedalPush";
    __decorate([
        mj.traitEvent("DCMedalPush_showPopVw")
    ], DailyChallengeMedalPushTrait.prototype, "showPopView", null);
    DailyChallengeMedalPushTrait = __decorate([
        mj.trait,
        mj.class("DailyChallengeMedalPushTrait")
    ], DailyChallengeMedalPushTrait);
    return DailyChallengeMedalPushTrait;
}(Trait_1.default));
exports.default = DailyChallengeMedalPushTrait;

cc._RF.pop();