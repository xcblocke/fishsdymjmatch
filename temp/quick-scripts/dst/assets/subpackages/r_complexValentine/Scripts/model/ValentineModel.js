
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_complexValentine/Scripts/model/ValentineModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3b254ysEJO44Wm9nz6vXlq', 'ValentineModel');
// subpackages/r_complexValentine/Scripts/model/ValentineModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ValentineEvents = exports.ValentineActState = void 0;
var Model_1 = require("../../../../Scripts/framework/data/Model");
var Config_1 = require("../../../../Scripts/Config");
var DGameValentine_1 = require("../../../../Scripts/DGameValentine");
var ValentineActState;
(function (ValentineActState) {
    ValentineActState[ValentineActState["NotStarted"] = 0] = "NotStarted";
    ValentineActState[ValentineActState["InProgress"] = 1] = "InProgress";
    ValentineActState[ValentineActState["Activated"] = 2] = "Activated";
    ValentineActState[ValentineActState["Ended"] = 3] = "Ended";
})(ValentineActState = exports.ValentineActState || (exports.ValentineActState = {}));
exports.ValentineEvents = {
    CLOSE_VALENTINE_ACTIVATE_VIEW: "closeValentineActivateView",
    UPDATE_ACTIVITY_STATE: "updateActivityState",
    UPDATE_ACTIVITY_REMAIN_TIME: "updateActivityRemainTime",
    VALENTINE_GAME_SHOW: "valentineGameShow",
    VALENTINE_GAME_HIDE: "valentineGameHide",
    VALENTINE_CLOSE_INTRO_POPUP: "valentineCloseIntroPopup",
    VALENTINE_CLOSE_ACTIVATE_POPUP: "valentineCloseActivatePopup",
    VALENTINE_CLOSE_END_POPUP: "valentineCloseEndPopup"
};
var ValentineModel = /** @class */ (function (_super) {
    __extends(ValentineModel, _super);
    function ValentineModel() {
        var _this = _super.call(this) || this;
        _this._config = {
            startDate: "2026-02-06 00:00:00",
            endDate: "2026-02-22 23:59:59",
            phase1Duration: 168,
            phase2Duration: 360,
            requiredLevels: 10
        };
        _this._passTime = 0;
        _this._cdHandler = -1;
        _this.initDefaultData();
        return _this;
    }
    Object.defineProperty(ValentineModel.prototype, "actLeftTime", {
        get: function () {
            return this._actLeftTime;
        },
        set: function (t) {
            if (this._actLeftTime !== t) {
                this._actLeftTime = t;
                this.dispatchEvent(exports.ValentineEvents.UPDATE_ACTIVITY_REMAIN_TIME, this._actLeftTime);
            }
        },
        enumerable: false,
        configurable: true
    });
    ValentineModel.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
        _t[Config_1.EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
        return _t;
    };
    ValentineModel.prototype.onGameShow = function () {
        this.updateLeftTime();
        this.dispatchEvent(exports.ValentineEvents.VALENTINE_GAME_SHOW);
    };
    ValentineModel.prototype.onGameHide = function () {
        this.dispatchEvent(exports.ValentineEvents.VALENTINE_GAME_HIDE);
    };
    ValentineModel.prototype.initDefaultData = function () {
        this.isLocalEmpty(this.localData.progress) && (this.localData.progress = 0);
        this.isLocalEmpty(this.localData.state) && (this.localData.state = ValentineActState.NotStarted);
        this.isLocalEmpty(this.localData.startTime) && (this.localData.startTime = -1);
        this.isLocalEmpty(this.localData.activatedTime) && (this.localData.activatedTime = -1);
        this.isLocalEmpty(this.localData.hasShownIntroPopup) && (this.localData.hasShownIntroPopup = false);
        this.isLocalEmpty(this.localData.hasShownActivatePopup) && (this.localData.hasShownActivatePopup = false);
        this.isLocalEmpty(this.localData.hasShownEndPopup) && (this.localData.hasShownEndPopup = false);
        this.isLocalEmpty(this.localData.effectEnabled) && (this.localData.effectEnabled = true);
        this.isLocalEmpty(this.localData.hasActivated) && (this.localData.hasActivated = false);
        this.updateLeftTime();
    };
    ValentineModel.prototype.updateLeftTime = function () {
        switch (this.localData.state) {
            case ValentineActState.NotStarted:
                break;
            case ValentineActState.InProgress:
                this.actLeftTime = this.localData.startTime + 3600000 * this._config.phase1Duration - Date.now();
                this.actLeftTime = Math.max(0, this.actLeftTime);
                this.startCountDown();
                break;
            case ValentineActState.Activated:
                this.actLeftTime = this.localData.activatedTime + 3600000 * this._config.phase2Duration - Date.now();
                this.actLeftTime = Math.max(0, this.actLeftTime);
                this.startCountDown();
                break;
            default:
                this.actLeftTime = 0;
        }
    };
    ValentineModel.prototype.startCountDown = function () {
        var t = this;
        if (-1 !== this._cdHandler) {
            clearInterval(this._cdHandler);
            this._cdHandler = -1;
        }
        if (this.actLeftTime <= 0) {
            this.changeActivityState(ValentineActState.Ended);
        }
        else {
            this._cdHandler = setInterval(function () {
                t.actLeftTime -= 1000;
                if (t.actLeftTime <= 0) {
                    clearInterval(t._cdHandler);
                    t._cdHandler = -1;
                    t.changeActivityState(ValentineActState.Ended);
                }
                if (t._passTime >= 300000) {
                    t.correctTime();
                    t._passTime = 0;
                }
                else
                    t._passTime += 1000;
            }, 1000);
        }
    };
    ValentineModel.prototype.correctTime = function () {
        this.updateLeftTime();
    };
    ValentineModel.prototype.getActLeftTime = function () {
        return this._actLeftTime;
    };
    ValentineModel.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    ValentineModel.prototype.setConfig = function (t) {
        this._config = Object.assign(Object.assign({}, this._config), t);
    };
    ValentineModel.prototype.getConfig = function () {
        return this._config;
    };
    ValentineModel.prototype.parseDateString = function (t) {
        var e = t.split(/[- :]/), n = parseInt(e[0]), o = parseInt(e[1]) - 1, i = parseInt(e[2]), a = parseInt(e[3]) || 0, r = parseInt(e[4]) || 0, l = parseInt(e[5]) || 0;
        return new Date(n, o, i, a, r, l).getTime();
    };
    ValentineModel.prototype.getActivityStartTime = function () {
        return this.parseDateString(this._config.startDate);
    };
    ValentineModel.prototype.getActivityEndTime = function () {
        return this.parseDateString(this._config.endDate);
    };
    ValentineModel.prototype.isInActivityTime = function () {
        var t = Date.now(), e = this.getActivityStartTime(), n = this.getActivityEndTime();
        return t >= e && t <= n;
    };
    ValentineModel.prototype.isActivityOpen = function () {
        return this.isInActivityTime();
    };
    ValentineModel.prototype.isActualActivityOpen = function () {
        return this.localData.startTime > 0;
    };
    ValentineModel.prototype.getActivityState = function () {
        return this.localData.state;
    };
    ValentineModel.prototype.changeActivityState = function (t) {
        if (this.localData.state !== t) {
            this.localData.state = t;
            ValentineActState.Ended != t && this.updateLeftTime();
            this.dispatchEvent(exports.ValentineEvents.UPDATE_ACTIVITY_STATE, t);
        }
    };
    ValentineModel.prototype.initActivity = function () {
        if (this.localData.startTime < 0 && this.isActivityOpen()) {
            this.localData.startTime = Date.now();
            this.changeActivityState(ValentineActState.InProgress);
        }
    };
    ValentineModel.prototype.checkInitAct = function () {
        this.isActivityOpen() && ValentineActState.NotStarted == this.getActivityState() && this.initActivity();
    };
    ValentineModel.prototype.addProgress = function (t) {
        if (t === void 0) { t = 1; }
        this.localData.progress = Math.min(this.localData.progress + t, this._config.requiredLevels);
        this.isProgressComplete() && this.localData.activatedTime < 0 && this.activateEffect();
    };
    ValentineModel.prototype.isProgressComplete = function () {
        return this.localData.progress >= this._config.requiredLevels;
    };
    ValentineModel.prototype.getProgress = function () {
        if (0 == this._config.requiredLevels)
            return 0;
        var t = this.localData.progress / this._config.requiredLevels;
        return parseFloat(t.toFixed(1));
    };
    ValentineModel.prototype.getCurrentStage = function () {
        return this.localData.state === ValentineActState.NotStarted ? DGameValentine_1.EValentineStage.Stage1 : this.localData.state === ValentineActState.InProgress ? DGameValentine_1.EValentineStage.Stage1 : this.localData.state === ValentineActState.Activated ? DGameValentine_1.EValentineStage.Stage2 : DGameValentine_1.EValentineStage.Stage3;
    };
    ValentineModel.prototype.activateEffect = function () {
        var t = Date.now();
        this.localData.activatedTime = t;
        this._config.phase2Duration;
        this.changeActivityState(ValentineActState.Activated);
        this.markActivated();
    };
    ValentineModel.prototype.isEffectActive = function () {
        return ValentineActState.Activated === this.localData.state && this.localData.effectEnabled;
    };
    ValentineModel.prototype.setEffectEnabled = function (t) {
        this.localData.effectEnabled = t;
    };
    ValentineModel.prototype.toggleEffectEnabled = function () {
        this.setEffectEnabled(!this.localData.effectEnabled);
    };
    ValentineModel.prototype.getEffectEnabled = function () {
        return this.localData.effectEnabled;
    };
    ValentineModel.prototype.markIntroPopupShown = function () {
        this.localData.hasShownIntroPopup = true;
    };
    ValentineModel.prototype.markActivatePopupShown = function () {
        this.localData.hasShownActivatePopup = true;
    };
    ValentineModel.prototype.markEndPopupShown = function () {
        this.localData.hasShownEndPopup = true;
    };
    ValentineModel.prototype.markActivated = function () {
        this.localData.hasActivated = true;
    };
    ValentineModel.prototype.shouldShowIntroPopup = function () {
        return !this.localData.hasShownIntroPopup && this.isActivityOpen() && this.getActivityState() === ValentineActState.InProgress;
    };
    ValentineModel.prototype.shouldShowActivatePopup = function () {
        return !this.localData.hasShownActivatePopup && this.isProgressComplete() && this.localData.activatedTime > 0;
    };
    ValentineModel.prototype.shouldShowEndPopup = function () {
        var t = this.getActivityState();
        return !this.localData.hasShownEndPopup && t === ValentineActState.Ended && this.localData.activatedTime > 0;
    };
    ValentineModel.prototype.resetActivity = function () {
        this.localData.progress = 0;
        this.localData.state = ValentineActState.NotStarted;
        this.localData.startTime = -1;
        this.localData.activatedTime = -1;
        this.localData.hasShownIntroPopup = false;
        this.localData.hasShownActivatePopup = false;
        this.localData.hasShownEndPopup = false;
        this.localData.effectEnabled = true;
    };
    ValentineModel.prototype.getPhase1RemainingTime = function () {
        if (this.localData.startTime < 0)
            return 0;
        var t = this.localData.startTime + 3600000 * this._config.phase1Duration - Date.now();
        return Math.max(0, t);
    };
    ValentineModel.prototype.getPhase2RemainingTime = function () {
        if (this.localData.activatedTime < 0)
            return 0;
        var t = this.localData.activatedTime + 3600000 * this._config.phase2Duration - Date.now();
        return Math.max(0, t);
    };
    __decorate([
        mj.traitEvent("ValModel_isActOpen")
    ], ValentineModel.prototype, "isActivityOpen", null);
    ValentineModel = __decorate([
        mj.class("ValentineModel")
    ], ValentineModel);
    return ValentineModel;
}(Model_1.default));
exports.default = ValentineModel;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NvbXBsZXhWYWxlbnRpbmUvU2NyaXB0cy9tb2RlbC9WYWxlbnRpbmVNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCxxREFBNEY7QUFDNUYscUVBQXFFO0FBQ3JFLElBQVksaUJBS1g7QUFMRCxXQUFZLGlCQUFpQjtJQUMzQixxRUFBYyxDQUFBO0lBQ2QscUVBQWMsQ0FBQTtJQUNkLG1FQUFhLENBQUE7SUFDYiwyREFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUxXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBSzVCO0FBQ1UsUUFBQSxlQUFlLEdBQUc7SUFDM0IsNkJBQTZCLEVBQUUsNEJBQTRCO0lBQzNELHFCQUFxQixFQUFFLHFCQUFxQjtJQUM1QywyQkFBMkIsRUFBRSwwQkFBMEI7SUFDdkQsbUJBQW1CLEVBQUUsbUJBQW1CO0lBQ3hDLG1CQUFtQixFQUFFLG1CQUFtQjtJQUN4QywyQkFBMkIsRUFBRSwwQkFBMEI7SUFDdkQsOEJBQThCLEVBQUUsNkJBQTZCO0lBQzdELHlCQUF5QixFQUFFLHdCQUF3QjtDQUNwRCxDQUFDO0FBRUY7SUFBNEMsa0NBQUs7SUFtQi9DO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBckJELGFBQU8sR0FBRztZQUNSLFNBQVMsRUFBRSxxQkFBcUI7WUFDaEMsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixjQUFjLEVBQUUsR0FBRztZQUNuQixjQUFjLEVBQUUsR0FBRztZQUNuQixjQUFjLEVBQUUsRUFBRTtTQUNuQixDQUFDO1FBQ0YsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGdCQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFZZCxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7O0lBQ3pCLENBQUM7SUFaRCxzQkFBSSx1Q0FBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7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SUFDdEMsQ0FBQztJQUNELCtDQUFzQixHQUF0QjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdEYsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsK0NBQXNCLEdBQXRCO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMxRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFwR0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO3dEQUduQztJQWpJa0IsY0FBYztRQURsQyxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO09BQ04sY0FBYyxDQW9PbEM7SUFBRCxxQkFBQztDQXBPRCxBQW9PQyxDQXBPMkMsZUFBSyxHQW9PaEQ7a0JBcE9vQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvTW9kZWwnO1xuaW1wb3J0IHsgRVZUX01TR19LRVlfRVZFTlRfU0hPVywgRVZUX01TR19LRVlfRVZFTlRfSElERSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvQ29uZmlnJztcbmltcG9ydCB7IEVWYWxlbnRpbmVTdGFnZSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvREdhbWVWYWxlbnRpbmUnO1xuZXhwb3J0IGVudW0gVmFsZW50aW5lQWN0U3RhdGUge1xuICBOb3RTdGFydGVkID0gMCxcbiAgSW5Qcm9ncmVzcyA9IDEsXG4gIEFjdGl2YXRlZCA9IDIsXG4gIEVuZGVkID0gMyxcbn1cbmV4cG9ydCB2YXIgVmFsZW50aW5lRXZlbnRzID0ge1xuICBDTE9TRV9WQUxFTlRJTkVfQUNUSVZBVEVfVklFVzogXCJjbG9zZVZhbGVudGluZUFjdGl2YXRlVmlld1wiLFxuICBVUERBVEVfQUNUSVZJVFlfU1RBVEU6IFwidXBkYXRlQWN0aXZpdHlTdGF0ZVwiLFxuICBVUERBVEVfQUNUSVZJVFlfUkVNQUlOX1RJTUU6IFwidXBkYXRlQWN0aXZpdHlSZW1haW5UaW1lXCIsXG4gIFZBTEVOVElORV9HQU1FX1NIT1c6IFwidmFsZW50aW5lR2FtZVNob3dcIixcbiAgVkFMRU5USU5FX0dBTUVfSElERTogXCJ2YWxlbnRpbmVHYW1lSGlkZVwiLFxuICBWQUxFTlRJTkVfQ0xPU0VfSU5UUk9fUE9QVVA6IFwidmFsZW50aW5lQ2xvc2VJbnRyb1BvcHVwXCIsXG4gIFZBTEVOVElORV9DTE9TRV9BQ1RJVkFURV9QT1BVUDogXCJ2YWxlbnRpbmVDbG9zZUFjdGl2YXRlUG9wdXBcIixcbiAgVkFMRU5USU5FX0NMT1NFX0VORF9QT1BVUDogXCJ2YWxlbnRpbmVDbG9zZUVuZFBvcHVwXCJcbn07XG5AbWouY2xhc3MoXCJWYWxlbnRpbmVNb2RlbFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsZW50aW5lTW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gIF9jb25maWcgPSB7XG4gICAgc3RhcnREYXRlOiBcIjIwMjYtMDItMDYgMDA6MDA6MDBcIixcbiAgICBlbmREYXRlOiBcIjIwMjYtMDItMjIgMjM6NTk6NTlcIixcbiAgICBwaGFzZTFEdXJhdGlvbjogMTY4LFxuICAgIHBoYXNlMkR1cmF0aW9uOiAzNjAsXG4gICAgcmVxdWlyZWRMZXZlbHM6IDEwXG4gIH07XG4gIF9wYXNzVGltZSA9IDA7XG4gIF9jZEhhbmRsZXIgPSAtMTtcbiAgZ2V0IGFjdExlZnRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RMZWZ0VGltZTtcbiAgfVxuICBzZXQgYWN0TGVmdFRpbWUodCkge1xuICAgIGlmICh0aGlzLl9hY3RMZWZ0VGltZSAhPT0gdCkge1xuICAgICAgdGhpcy5fYWN0TGVmdFRpbWUgPSB0O1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KFZhbGVudGluZUV2ZW50cy5VUERBVEVfQUNUSVZJVFlfUkVNQUlOX1RJTUUsIHRoaXMuX2FjdExlZnRUaW1lKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmluaXREZWZhdWx0RGF0YSgpO1xuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF90ID0ge307XG4gICAgX3RbRVZUX01TR19LRVlfRVZFTlRfU0hPV10gPSB0aGlzLm9uR2FtZVNob3cuYmluZCh0aGlzKTtcbiAgICBfdFtFVlRfTVNHX0tFWV9FVkVOVF9ISURFXSA9IHRoaXMub25HYW1lSGlkZS5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfdDtcbiAgfVxuICBvbkdhbWVTaG93KCkge1xuICAgIHRoaXMudXBkYXRlTGVmdFRpbWUoKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoVmFsZW50aW5lRXZlbnRzLlZBTEVOVElORV9HQU1FX1NIT1cpO1xuICB9XG4gIG9uR2FtZUhpZGUoKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KFZhbGVudGluZUV2ZW50cy5WQUxFTlRJTkVfR0FNRV9ISURFKTtcbiAgfVxuICBpbml0RGVmYXVsdERhdGEoKSB7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEucHJvZ3Jlc3MpICYmICh0aGlzLmxvY2FsRGF0YS5wcm9ncmVzcyA9IDApO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnN0YXRlKSAmJiAodGhpcy5sb2NhbERhdGEuc3RhdGUgPSBWYWxlbnRpbmVBY3RTdGF0ZS5Ob3RTdGFydGVkKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5zdGFydFRpbWUpICYmICh0aGlzLmxvY2FsRGF0YS5zdGFydFRpbWUgPSAtMSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuYWN0aXZhdGVkVGltZSkgJiYgKHRoaXMubG9jYWxEYXRhLmFjdGl2YXRlZFRpbWUgPSAtMSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuaGFzU2hvd25JbnRyb1BvcHVwKSAmJiAodGhpcy5sb2NhbERhdGEuaGFzU2hvd25JbnRyb1BvcHVwID0gZmFsc2UpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmhhc1Nob3duQWN0aXZhdGVQb3B1cCkgJiYgKHRoaXMubG9jYWxEYXRhLmhhc1Nob3duQWN0aXZhdGVQb3B1cCA9IGZhbHNlKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5oYXNTaG93bkVuZFBvcHVwKSAmJiAodGhpcy5sb2NhbERhdGEuaGFzU2hvd25FbmRQb3B1cCA9IGZhbHNlKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5lZmZlY3RFbmFibGVkKSAmJiAodGhpcy5sb2NhbERhdGEuZWZmZWN0RW5hYmxlZCA9IHRydWUpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmhhc0FjdGl2YXRlZCkgJiYgKHRoaXMubG9jYWxEYXRhLmhhc0FjdGl2YXRlZCA9IGZhbHNlKTtcbiAgICB0aGlzLnVwZGF0ZUxlZnRUaW1lKCk7XG4gIH1cbiAgdXBkYXRlTGVmdFRpbWUoKSB7XG4gICAgc3dpdGNoICh0aGlzLmxvY2FsRGF0YS5zdGF0ZSkge1xuICAgICAgY2FzZSBWYWxlbnRpbmVBY3RTdGF0ZS5Ob3RTdGFydGVkOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVmFsZW50aW5lQWN0U3RhdGUuSW5Qcm9ncmVzczpcbiAgICAgICAgdGhpcy5hY3RMZWZ0VGltZSA9IHRoaXMubG9jYWxEYXRhLnN0YXJ0VGltZSArIDM2MDAwMDAgKiB0aGlzLl9jb25maWcucGhhc2UxRHVyYXRpb24gLSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmFjdExlZnRUaW1lID0gTWF0aC5tYXgoMCwgdGhpcy5hY3RMZWZ0VGltZSk7XG4gICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFZhbGVudGluZUFjdFN0YXRlLkFjdGl2YXRlZDpcbiAgICAgICAgdGhpcy5hY3RMZWZ0VGltZSA9IHRoaXMubG9jYWxEYXRhLmFjdGl2YXRlZFRpbWUgKyAzNjAwMDAwICogdGhpcy5fY29uZmlnLnBoYXNlMkR1cmF0aW9uIC0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hY3RMZWZ0VGltZSA9IE1hdGgubWF4KDAsIHRoaXMuYWN0TGVmdFRpbWUpO1xuICAgICAgICB0aGlzLnN0YXJ0Q291bnREb3duKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5hY3RMZWZ0VGltZSA9IDA7XG4gICAgfVxuICB9XG4gIHN0YXJ0Q291bnREb3duKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoLTEgIT09IHRoaXMuX2NkSGFuZGxlcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9jZEhhbmRsZXIpO1xuICAgICAgdGhpcy5fY2RIYW5kbGVyID0gLTE7XG4gICAgfVxuICAgIGlmICh0aGlzLmFjdExlZnRUaW1lIDw9IDApIHtcbiAgICAgIHRoaXMuY2hhbmdlQWN0aXZpdHlTdGF0ZShWYWxlbnRpbmVBY3RTdGF0ZS5FbmRlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NkSGFuZGxlciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5hY3RMZWZ0VGltZSAtPSAxMDAwO1xuICAgICAgICBpZiAodC5hY3RMZWZ0VGltZSA8PSAwKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0Ll9jZEhhbmRsZXIpO1xuICAgICAgICAgIHQuX2NkSGFuZGxlciA9IC0xO1xuICAgICAgICAgIHQuY2hhbmdlQWN0aXZpdHlTdGF0ZShWYWxlbnRpbmVBY3RTdGF0ZS5FbmRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQuX3Bhc3NUaW1lID49IDMwMDAwMCkge1xuICAgICAgICAgIHQuY29ycmVjdFRpbWUoKTtcbiAgICAgICAgICB0Ll9wYXNzVGltZSA9IDA7XG4gICAgICAgIH0gZWxzZSB0Ll9wYXNzVGltZSArPSAxMDAwO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG4gIGNvcnJlY3RUaW1lKCkge1xuICAgIHRoaXMudXBkYXRlTGVmdFRpbWUoKTtcbiAgfVxuICBnZXRBY3RMZWZ0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0TGVmdFRpbWU7XG4gIH1cbiAgaXNMb2NhbEVtcHR5KHQpIHtcbiAgICByZXR1cm4gbnVsbCA9PSB0IHx8IFwiXCIgPT09IHQ7XG4gIH1cbiAgc2V0Q29uZmlnKHQpIHtcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZyksIHQpO1xuICB9XG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIHBhcnNlRGF0ZVN0cmluZyh0KSB7XG4gICAgdmFyIGUgPSB0LnNwbGl0KC9bLSA6XS8pLFxuICAgICAgbiA9IHBhcnNlSW50KGVbMF0pLFxuICAgICAgbyA9IHBhcnNlSW50KGVbMV0pIC0gMSxcbiAgICAgIGkgPSBwYXJzZUludChlWzJdKSxcbiAgICAgIGEgPSBwYXJzZUludChlWzNdKSB8fCAwLFxuICAgICAgciA9IHBhcnNlSW50KGVbNF0pIHx8IDAsXG4gICAgICBsID0gcGFyc2VJbnQoZVs1XSkgfHwgMDtcbiAgICByZXR1cm4gbmV3IERhdGUobiwgbywgaSwgYSwgciwgbCkuZ2V0VGltZSgpO1xuICB9XG4gIGdldEFjdGl2aXR5U3RhcnRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlRGF0ZVN0cmluZyh0aGlzLl9jb25maWcuc3RhcnREYXRlKTtcbiAgfVxuICBnZXRBY3Rpdml0eUVuZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VEYXRlU3RyaW5nKHRoaXMuX2NvbmZpZy5lbmREYXRlKTtcbiAgfVxuICBpc0luQWN0aXZpdHlUaW1lKCkge1xuICAgIHZhciB0ID0gRGF0ZS5ub3coKSxcbiAgICAgIGUgPSB0aGlzLmdldEFjdGl2aXR5U3RhcnRUaW1lKCksXG4gICAgICBuID0gdGhpcy5nZXRBY3Rpdml0eUVuZFRpbWUoKTtcbiAgICByZXR1cm4gdCA+PSBlICYmIHQgPD0gbjtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlZhbE1vZGVsX2lzQWN0T3BlblwiKVxuICBpc0FjdGl2aXR5T3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5pc0luQWN0aXZpdHlUaW1lKCk7XG4gIH1cbiAgaXNBY3R1YWxBY3Rpdml0eU9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnN0YXJ0VGltZSA+IDA7XG4gIH1cbiAgZ2V0QWN0aXZpdHlTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuc3RhdGU7XG4gIH1cbiAgY2hhbmdlQWN0aXZpdHlTdGF0ZSh0KSB7XG4gICAgaWYgKHRoaXMubG9jYWxEYXRhLnN0YXRlICE9PSB0KSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5zdGF0ZSA9IHQ7XG4gICAgICBWYWxlbnRpbmVBY3RTdGF0ZS5FbmRlZCAhPSB0ICYmIHRoaXMudXBkYXRlTGVmdFRpbWUoKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChWYWxlbnRpbmVFdmVudHMuVVBEQVRFX0FDVElWSVRZX1NUQVRFLCB0KTtcbiAgICB9XG4gIH1cbiAgaW5pdEFjdGl2aXR5KCkge1xuICAgIGlmICh0aGlzLmxvY2FsRGF0YS5zdGFydFRpbWUgPCAwICYmIHRoaXMuaXNBY3Rpdml0eU9wZW4oKSkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMuY2hhbmdlQWN0aXZpdHlTdGF0ZShWYWxlbnRpbmVBY3RTdGF0ZS5JblByb2dyZXNzKTtcbiAgICB9XG4gIH1cbiAgY2hlY2tJbml0QWN0KCkge1xuICAgIHRoaXMuaXNBY3Rpdml0eU9wZW4oKSAmJiBWYWxlbnRpbmVBY3RTdGF0ZS5Ob3RTdGFydGVkID09IHRoaXMuZ2V0QWN0aXZpdHlTdGF0ZSgpICYmIHRoaXMuaW5pdEFjdGl2aXR5KCk7XG4gIH1cbiAgYWRkUHJvZ3Jlc3ModCA9IDEpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5wcm9ncmVzcyA9IE1hdGgubWluKHRoaXMubG9jYWxEYXRhLnByb2dyZXNzICsgdCwgdGhpcy5fY29uZmlnLnJlcXVpcmVkTGV2ZWxzKTtcbiAgICB0aGlzLmlzUHJvZ3Jlc3NDb21wbGV0ZSgpICYmIHRoaXMubG9jYWxEYXRhLmFjdGl2YXRlZFRpbWUgPCAwICYmIHRoaXMuYWN0aXZhdGVFZmZlY3QoKTtcbiAgfVxuICBpc1Byb2dyZXNzQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnByb2dyZXNzID49IHRoaXMuX2NvbmZpZy5yZXF1aXJlZExldmVscztcbiAgfVxuICBnZXRQcm9ncmVzcygpIHtcbiAgICBpZiAoMCA9PSB0aGlzLl9jb25maWcucmVxdWlyZWRMZXZlbHMpIHJldHVybiAwO1xuICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEucHJvZ3Jlc3MgLyB0aGlzLl9jb25maWcucmVxdWlyZWRMZXZlbHM7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodC50b0ZpeGVkKDEpKTtcbiAgfVxuICBnZXRDdXJyZW50U3RhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnN0YXRlID09PSBWYWxlbnRpbmVBY3RTdGF0ZS5Ob3RTdGFydGVkID8gRVZhbGVudGluZVN0YWdlLlN0YWdlMSA6IHRoaXMubG9jYWxEYXRhLnN0YXRlID09PSBWYWxlbnRpbmVBY3RTdGF0ZS5JblByb2dyZXNzID8gRVZhbGVudGluZVN0YWdlLlN0YWdlMSA6IHRoaXMubG9jYWxEYXRhLnN0YXRlID09PSBWYWxlbnRpbmVBY3RTdGF0ZS5BY3RpdmF0ZWQgPyBFVmFsZW50aW5lU3RhZ2UuU3RhZ2UyIDogRVZhbGVudGluZVN0YWdlLlN0YWdlMztcbiAgfVxuICBhY3RpdmF0ZUVmZmVjdCgpIHtcbiAgICB2YXIgdCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5sb2NhbERhdGEuYWN0aXZhdGVkVGltZSA9IHQ7XG4gICAgdGhpcy5fY29uZmlnLnBoYXNlMkR1cmF0aW9uO1xuICAgIHRoaXMuY2hhbmdlQWN0aXZpdHlTdGF0ZShWYWxlbnRpbmVBY3RTdGF0ZS5BY3RpdmF0ZWQpO1xuICAgIHRoaXMubWFya0FjdGl2YXRlZCgpO1xuICB9XG4gIGlzRWZmZWN0QWN0aXZlKCkge1xuICAgIHJldHVybiBWYWxlbnRpbmVBY3RTdGF0ZS5BY3RpdmF0ZWQgPT09IHRoaXMubG9jYWxEYXRhLnN0YXRlICYmIHRoaXMubG9jYWxEYXRhLmVmZmVjdEVuYWJsZWQ7XG4gIH1cbiAgc2V0RWZmZWN0RW5hYmxlZCh0KSB7XG4gICAgdGhpcy5sb2NhbERhdGEuZWZmZWN0RW5hYmxlZCA9IHQ7XG4gIH1cbiAgdG9nZ2xlRWZmZWN0RW5hYmxlZCgpIHtcbiAgICB0aGlzLnNldEVmZmVjdEVuYWJsZWQoIXRoaXMubG9jYWxEYXRhLmVmZmVjdEVuYWJsZWQpO1xuICB9XG4gIGdldEVmZmVjdEVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmVmZmVjdEVuYWJsZWQ7XG4gIH1cbiAgbWFya0ludHJvUG9wdXBTaG93bigpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5oYXNTaG93bkludHJvUG9wdXAgPSB0cnVlO1xuICB9XG4gIG1hcmtBY3RpdmF0ZVBvcHVwU2hvd24oKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuaGFzU2hvd25BY3RpdmF0ZVBvcHVwID0gdHJ1ZTtcbiAgfVxuICBtYXJrRW5kUG9wdXBTaG93bigpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5oYXNTaG93bkVuZFBvcHVwID0gdHJ1ZTtcbiAgfVxuICBtYXJrQWN0aXZhdGVkKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmhhc0FjdGl2YXRlZCA9IHRydWU7XG4gIH1cbiAgc2hvdWxkU2hvd0ludHJvUG9wdXAoKSB7XG4gICAgcmV0dXJuICF0aGlzLmxvY2FsRGF0YS5oYXNTaG93bkludHJvUG9wdXAgJiYgdGhpcy5pc0FjdGl2aXR5T3BlbigpICYmIHRoaXMuZ2V0QWN0aXZpdHlTdGF0ZSgpID09PSBWYWxlbnRpbmVBY3RTdGF0ZS5JblByb2dyZXNzO1xuICB9XG4gIHNob3VsZFNob3dBY3RpdmF0ZVBvcHVwKCkge1xuICAgIHJldHVybiAhdGhpcy5sb2NhbERhdGEuaGFzU2hvd25BY3RpdmF0ZVBvcHVwICYmIHRoaXMuaXNQcm9ncmVzc0NvbXBsZXRlKCkgJiYgdGhpcy5sb2NhbERhdGEuYWN0aXZhdGVkVGltZSA+IDA7XG4gIH1cbiAgc2hvdWxkU2hvd0VuZFBvcHVwKCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRBY3Rpdml0eVN0YXRlKCk7XG4gICAgcmV0dXJuICF0aGlzLmxvY2FsRGF0YS5oYXNTaG93bkVuZFBvcHVwICYmIHQgPT09IFZhbGVudGluZUFjdFN0YXRlLkVuZGVkICYmIHRoaXMubG9jYWxEYXRhLmFjdGl2YXRlZFRpbWUgPiAwO1xuICB9XG4gIHJlc2V0QWN0aXZpdHkoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEucHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMubG9jYWxEYXRhLnN0YXRlID0gVmFsZW50aW5lQWN0U3RhdGUuTm90U3RhcnRlZDtcbiAgICB0aGlzLmxvY2FsRGF0YS5zdGFydFRpbWUgPSAtMTtcbiAgICB0aGlzLmxvY2FsRGF0YS5hY3RpdmF0ZWRUaW1lID0gLTE7XG4gICAgdGhpcy5sb2NhbERhdGEuaGFzU2hvd25JbnRyb1BvcHVwID0gZmFsc2U7XG4gICAgdGhpcy5sb2NhbERhdGEuaGFzU2hvd25BY3RpdmF0ZVBvcHVwID0gZmFsc2U7XG4gICAgdGhpcy5sb2NhbERhdGEuaGFzU2hvd25FbmRQb3B1cCA9IGZhbHNlO1xuICAgIHRoaXMubG9jYWxEYXRhLmVmZmVjdEVuYWJsZWQgPSB0cnVlO1xuICB9XG4gIGdldFBoYXNlMVJlbWFpbmluZ1RpbWUoKSB7XG4gICAgaWYgKHRoaXMubG9jYWxEYXRhLnN0YXJ0VGltZSA8IDApIHJldHVybiAwO1xuICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEuc3RhcnRUaW1lICsgMzYwMDAwMCAqIHRoaXMuX2NvbmZpZy5waGFzZTFEdXJhdGlvbiAtIERhdGUubm93KCk7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIHQpO1xuICB9XG4gIGdldFBoYXNlMlJlbWFpbmluZ1RpbWUoKSB7XG4gICAgaWYgKHRoaXMubG9jYWxEYXRhLmFjdGl2YXRlZFRpbWUgPCAwKSByZXR1cm4gMDtcbiAgICB2YXIgdCA9IHRoaXMubG9jYWxEYXRhLmFjdGl2YXRlZFRpbWUgKyAzNjAwMDAwICogdGhpcy5fY29uZmlnLnBoYXNlMkR1cmF0aW9uIC0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgdCk7XG4gIH1cbn0iXX0=