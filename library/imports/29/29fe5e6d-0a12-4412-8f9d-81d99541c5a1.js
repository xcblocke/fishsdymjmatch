"use strict";
cc._RF.push(module, '29fe55tChJEEo+dgdmVQcWh', 'FirstHardLevelTrait');
// subpackages/l_firstHardLevel/Scripts/FirstHardLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FirstHardLevelTrait = /** @class */ (function (_super) {
    __extends(FirstHardLevelTrait, _super);
    function FirstHardLevelTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._checkTime = 0;
        return _this;
    }
    FirstHardLevelTrait_1 = FirstHardLevelTrait;
    FirstHardLevelTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.isLocalEmpty(this.localData.lastCheckDate) && (this.localData.lastCheckDate = "");
        this.isLocalEmpty(this.localData.remainingDelayRounds) && (this.localData.remainingDelayRounds = 0);
        this.isLocalEmpty(this.localData.dailyChecked) && (this.localData.dailyChecked = false);
        this.isLocalEmpty(this.localData.lastHardLevelID) && (this.localData.lastHardLevelID = 0);
        this.isLocalEmpty(this.localData.pendingForceAfterLevel) && (this.localData.pendingForceAfterLevel = 0);
        this.isLocalEmpty(this.localData.lastLoginTime) && (this.localData.lastLoginTime = 0);
        this._checkTime = 3600000 * this._traitData.checkTime || FirstHardLevelTrait_1.HOURS_48_MS;
        this.checkDailyFirst();
    };
    FirstHardLevelTrait.prototype.getTodayDateString = function () {
        var t = new Date();
        return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
    };
    FirstHardLevelTrait.prototype.isHardLevelInternal = function (t) {
        return this.localData.lastHardLevelID === t;
    };
    FirstHardLevelTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    FirstHardLevelTrait.prototype.checkDailyFirst = function () {
        var t = UserModel_1.default.getInstance(), a = this.getTodayDateString();
        if (a !== this.localData.lastCheckDate) {
            this.localData.dailyChecked = false;
            this.localData.lastCheckDate = a;
            this.localData.lastCheckDate = this.localData.lastCheckDate;
        }
        if (!this.localData.dailyChecked) {
            this.localData.dailyChecked = true;
            this.localData.dailyChecked = this.localData.dailyChecked;
            var e = t.getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal), i = e.getLevelId(), l = Date.now(), r = this.localData.lastLoginTime || l, o = r > 0 ? l - r : 0;
            this.localData.lastLoginTime = l;
            this.localData.lastLoginTime = this.localData.lastLoginTime;
            if (o >= this._checkTime) {
                this.localData.remainingDelayRounds = 3;
                this.localData.remainingDelayRounds = this.localData.remainingDelayRounds;
            }
            else {
                if (1 !== e.getDieResult()) {
                    this.localData.remainingDelayRounds = 2;
                    this.localData.remainingDelayRounds = this.localData.remainingDelayRounds;
                }
                else {
                    this.localData.remainingDelayRounds = 0;
                    this.localData.remainingDelayRounds = this.localData.remainingDelayRounds;
                }
            }
            if (0 === this.localData.remainingDelayRounds) {
                var s = e.getLevelData(), h = e.getOriginalLevelData();
                if (s && h)
                    if (this.isHardLevelInternal(i))
                        ;
                    else {
                        this.localData.pendingForceAfterLevel = i;
                        this.localData.pendingForceAfterLevel = this.localData.pendingForceAfterLevel;
                    }
            }
        }
    };
    FirstHardLevelTrait.prototype.onExtractTool_isHardUI = function (t, a) {
        if (this.checkGameMode()) {
            var e = t.args[0];
            if (this.localData.remainingDelayRounds > 0)
                a({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: false
                });
            else {
                var i = this.localData.pendingForceAfterLevel || 0;
                if (i > 0 && e > i) {
                    this.localData.pendingForceAfterLevel = 0;
                    this.localData.pendingForceAfterLevel = this.localData.pendingForceAfterLevel;
                    this.localData.lastHardLevelID = e;
                    this.localData.lastHardLevelID = this.localData.lastHardLevelID;
                    a({
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        isBreak: true,
                        returnVal: true
                    });
                }
                else
                    a();
            }
        }
        else
            a();
    };
    FirstHardLevelTrait.prototype.onExtractTool_isExpertUI = function (t, a) {
        if (this.checkGameMode()) {
            t.args[0];
            if (this.localData.remainingDelayRounds > 0) {
                a({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: false
                });
            }
            else {
                a();
            }
        }
        else
            a();
    };
    FirstHardLevelTrait.prototype.onHardLvNew_getLastId = function (t, a) {
        if (this.checkGameMode()) {
            var e = t.beforReturnVal || 0, i = this.localData.lastHardLevelID || 0, l = Math.max(e, i);
            if (l > i) {
                this.localData.lastHardLevelID = l;
                this.localData.lastHardLevelID = this.localData.lastHardLevelID;
            }
            a({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: l
            });
        }
        else
            a();
    };
    FirstHardLevelTrait.prototype.onBeforeWinBhv_doOthLgc = function (t, a) {
        if (this.checkGameMode()) {
            if (this.localData.remainingDelayRounds > 0) {
                this.localData.remainingDelayRounds--;
                this.localData.remainingDelayRounds = this.localData.remainingDelayRounds;
            }
            a();
        }
        else
            a();
    };
    var FirstHardLevelTrait_1;
    FirstHardLevelTrait.traitKey = "FirstHardLevel";
    FirstHardLevelTrait.HOURS_48_MS = 172800000;
    FirstHardLevelTrait = FirstHardLevelTrait_1 = __decorate([
        mj.trait,
        mj.class("FirstHardLevelTrait")
    ], FirstHardLevelTrait);
    return FirstHardLevelTrait;
}(ExtractTrait_1.default));
exports.default = FirstHardLevelTrait;

cc._RF.pop();