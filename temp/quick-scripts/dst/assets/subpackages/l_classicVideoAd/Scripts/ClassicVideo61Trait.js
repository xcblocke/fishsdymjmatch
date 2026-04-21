
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicVideoAd/Scripts/ClassicVideo61Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '206a3Rd8ilA1beMTW3YY8Pr', 'ClassicVideo61Trait');
// subpackages/l_classicVideoAd/Scripts/ClassicVideo61Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var Config_1 = require("../../../Scripts/Config");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var ClassicVideo61Trait = /** @class */ (function (_super) {
    __extends(ClassicVideo61Trait, _super);
    function ClassicVideo61Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._playDuration = 150;
        _this._retryStartTime = 60;
        _this._maxCloseCount = 1;
        _this._initialMultiplier = 1;
        _this._multiplierIncrement = 0.2;
        _this._maxMultiplier = 10;
        return _this;
    }
    ClassicVideo61Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData;
        this._playDuration = (null == e ? void 0 : e.playDuration) || 150;
        this._retryStartTime = (null == e ? void 0 : e.retryStartTime) || 60;
        this._maxCloseCount = (null == e ? void 0 : e.maxCloseCount) || 0;
        this._initialMultiplier = (null == e ? void 0 : e.initialMultiplier) || 1.2;
        this._multiplierIncrement = (null == e ? void 0 : e.multiplierIncrement) || 0.2;
        this._maxMultiplier = (null == e ? void 0 : e.maxMultiplier) || 10;
        mj.EventManager.on(Config_1.EVT_TIME_STAT_UPDATE, this.onTimeUpdate, this);
        this.initializeLocalData();
        this.localData.remainingTime = this._playDuration;
        this.localData.waitingForNextBatch = false;
    };
    ClassicVideo61Trait.prototype.initializeLocalData = function () {
        void 0 !== this.localData.remainingTime && null !== this.localData.remainingTime && "" !== this.localData.remainingTime || (this.localData.remainingTime = this._playDuration);
        void 0 !== this.localData.waitingForNextBatch && null !== this.localData.waitingForNextBatch && "" !== this.localData.waitingForNextBatch || (this.localData.waitingForNextBatch = false);
        void 0 !== this.localData.closeCountInGame && null !== this.localData.closeCountInGame && "" !== this.localData.closeCountInGame || (this.localData.closeCountInGame = this._maxCloseCount);
        void 0 !== this.localData.currentMultiplier && null !== this.localData.currentMultiplier && "" !== this.localData.currentMultiplier || (this.localData.currentMultiplier = this._initialMultiplier);
        void 0 !== this.localData.batchBreakComboCount && null !== this.localData.batchBreakComboCount && "" !== this.localData.batchBreakComboCount || (this.localData.batchBreakComboCount = 0);
        void 0 !== this.localData.uiShownAndPending && null !== this.localData.uiShownAndPending && "" !== this.localData.uiShownAndPending || (this.localData.uiShownAndPending = false);
    };
    ClassicVideo61Trait.prototype.isClassicMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic;
    };
    ClassicVideo61Trait.prototype.resetTimer = function (t) {
        this.localData.remainingTime = t;
        this.localData.waitingForNextBatch = false;
    };
    ClassicVideo61Trait.prototype.onTimeUpdate = function (t) {
        if (this.isClassicMode() && !this.localData.waitingForNextBatch) {
            this.localData.remainingTime -= t;
            this.localData.remainingTime <= 0 && (this.localData.waitingForNextBatch = true);
        }
    };
    ClassicVideo61Trait.prototype.showRewardButton = function () {
        this.localData.uiShownAndPending = true;
        ControllerManager_1.default.getInstance().pushViewByController("ClassicVideoAdController", {
            bgStyle: {
                blackOpacity: 200
            }
        });
    };
    ClassicVideo61Trait.prototype.onClickWatch = function () {
        var t = this;
        this.localData.uiShownAndPending = false;
        DGameAdShowStage_1.DotGameAdShowStage.dot(false, "classicInGame61");
        AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.InGameMotivation_GameContinue_Classic, {
            onSuccess: function () {
                t.onVideoAdSuccess();
                t.localData.batchBreakComboCount = 0;
            },
            onFailed: function () {
                t.resetTimer(t._playDuration);
                t.localData.batchBreakComboCount = 0;
            }
        }, "classic_in_game_61", {
            adTimeType: "classicInGameAd61"
        });
    };
    ClassicVideo61Trait.prototype.onVideoAdSuccess = function () {
        this.localData.batchBreakComboCount <= 1 && (this.localData.currentMultiplier = Math.min(this.localData.currentMultiplier + this._multiplierIncrement, this._maxMultiplier));
        this.resetTimer(this._playDuration);
    };
    ClassicVideo61Trait.prototype.onClickRefuse = function () {
        this.localData.uiShownAndPending = false;
        this.localData.batchBreakComboCount = 0;
        if (this.localData.closeCountInGame > 0) {
            this.localData.closeCountInGame--;
            this.resetTimer(this._playDuration);
        }
        else {
            this.resetTimer(this._playDuration);
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.ClassicFail,
                skipBeforeFailEffect: true
            });
        }
    };
    ClassicVideo61Trait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        e();
        this.isClassicMode();
    };
    ClassicVideo61Trait.prototype.onEntAniFiBhv_start = function (t, e) {
        if (this.isClassicMode() && this.localData.uiShownAndPending) {
            this.localData.uiShownAndPending = false;
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.ClassicFail,
                skipBeforeFailEffect: true,
                skipInterAd: true
            });
        }
        e();
    };
    ClassicVideo61Trait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        e();
        this.isClassicMode();
    };
    ClassicVideo61Trait.prototype.onGsListener_onNewGame = function (t, e) {
        e();
        if (this.isClassicMode()) {
            this.localData.remainingTime = this._playDuration;
            this.localData.waitingForNextBatch = false;
            this.localData.closeCountInGame = this._maxCloseCount;
            this.localData.currentMultiplier = this._initialMultiplier;
            this.localData.batchBreakComboCount = 0;
        }
    };
    ClassicVideo61Trait.prototype.onGsListener_onReplayGame = function (t, e) {
        if (this.isClassicMode()) {
            this.localData.remainingTime = this._playDuration;
            this.localData.waitingForNextBatch = false;
            this.localData.closeCountInGame = this._maxCloseCount;
            this.localData.currentMultiplier = this._initialMultiplier;
            this.localData.batchBreakComboCount = 0;
        }
        e();
    };
    ClassicVideo61Trait.prototype.onChgBatchAnimBhv_finish = function (t, e) {
        if (this.isClassicMode()) {
            if (this.localData.waitingForNextBatch) {
                this.localData.waitingForNextBatch = false;
                this.showRewardButton();
            }
            else
                this.localData.batchBreakComboCount = 0;
            e();
        }
        else
            e();
    };
    ClassicVideo61Trait.prototype.onComboMdf_breakCombo = function (t, e) {
        e();
        this.isClassicMode() && this.localData.batchBreakComboCount++;
    };
    ClassicVideo61Trait.prototype.onScoreMod_applyMultiplier = function (t, e) {
        var i;
        if (this.isClassicMode()) {
            if (this.localData.currentMultiplier > 1) {
                var a = (null === (i = t.args) || void 0 === i ? void 0 : i[0]) || 0;
                e({
                    returnVal: Math.floor(a * this.localData.currentMultiplier)
                });
            }
            else
                e();
        }
        else
            e();
    };
    ClassicVideo61Trait.prototype.onClcVideoAdVw_load = function (t, e) {
        e();
        if (this.isClassicMode()) {
            var i = t.ins;
            i && "function" == typeof i.updateDisplay && i.updateDisplay({
                hasCloseCount: this.localData.closeCountInGame > 0,
                currentMultiplier: this.localData.currentMultiplier + this._multiplierIncrement,
                showSpecialTitle: this.localData.batchBreakComboCount <= 1
            });
        }
    };
    ClassicVideo61Trait.prototype.onClcVideoAdVw_clickWatch = function (t, e) {
        if (this.isClassicMode()) {
            ControllerManager_1.default.getInstance().closeViewByName("ClassicVideoAdController");
            this.onClickWatch();
            e();
        }
        else
            e();
    };
    ClassicVideo61Trait.prototype.onClcVideoAdVw_clickRefuse = function (t, e) {
        if (this.isClassicMode()) {
            ControllerManager_1.default.getInstance().closeViewByName("ClassicVideoAdController");
            this.onClickRefuse();
            e();
        }
        else
            e();
    };
    ClassicVideo61Trait.traitKey = "ClassicVideo61";
    ClassicVideo61Trait = __decorate([
        mj.trait,
        mj.class("ClassicVideo61Trait")
    ], ClassicVideo61Trait);
    return ClassicVideo61Trait;
}(Trait_1.default));
exports.default = ClassicVideo61Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNWaWRlb0FkL1NjcmlwdHMvQ2xhc3NpY1ZpZGVvNjFUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHdGQUFvRjtBQUNwRixzRUFBaUU7QUFDakUsZ0VBQTJEO0FBQzNELHlFQUF3RTtBQUN4RSxtRkFBb0Y7QUFDcEYsa0RBQStEO0FBQy9ELDBGQUFxRjtBQUNyRixvRkFBbUY7QUFDbkYsbUZBQW1GO0FBR25GO0lBQWlELHVDQUFLO0lBQXREO1FBQUEscUVBOEtDO1FBN0tDLG1CQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLHFCQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLG9CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLHdCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2QiwwQkFBb0IsR0FBRyxHQUFHLENBQUM7UUFDM0Isb0JBQWMsR0FBRyxFQUFFLENBQUM7O0lBd0t0QixDQUFDO0lBdEtDLG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyRSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FB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QUFFLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLElBQUksQ0FBQzthQUMzRCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDRCx1REFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0Qsd0RBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXRLTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBUGhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0E4S3ZDO0lBQUQsMEJBQUM7Q0E5S0QsQUE4S0MsQ0E5S2dELGVBQUssR0E4S3JEO2tCQTlLb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBBZE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2FkL0FkTWFuYWdlcic7XG5pbXBvcnQgeyBFQWRQb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RHYW1lQWRTaG93JztcbmltcG9ydCB7IERvdEdhbWVBZFNob3dTdGFnZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RHYW1lQWRTaG93U3RhZ2UnO1xuaW1wb3J0IHsgRVZUX1RJTUVfU1RBVF9VUERBVEUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0NvbmZpZyc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgeyBHYW1lSW50ZXJhY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2xhc3NpY1ZpZGVvNjFUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NpY1ZpZGVvNjFUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3BsYXlEdXJhdGlvbiA9IDE1MDtcbiAgX3JldHJ5U3RhcnRUaW1lID0gNjA7XG4gIF9tYXhDbG9zZUNvdW50ID0gMTtcbiAgX2luaXRpYWxNdWx0aXBsaWVyID0gMTtcbiAgX211bHRpcGxpZXJJbmNyZW1lbnQgPSAwLjI7XG4gIF9tYXhNdWx0aXBsaWVyID0gMTA7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2xhc3NpY1ZpZGVvNjFcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciBlID0gdGhpcy5fdHJhaXREYXRhO1xuICAgIHRoaXMuX3BsYXlEdXJhdGlvbiA9IChudWxsID09IGUgPyB2b2lkIDAgOiBlLnBsYXlEdXJhdGlvbikgfHwgMTUwO1xuICAgIHRoaXMuX3JldHJ5U3RhcnRUaW1lID0gKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUucmV0cnlTdGFydFRpbWUpIHx8IDYwO1xuICAgIHRoaXMuX21heENsb3NlQ291bnQgPSAobnVsbCA9PSBlID8gdm9pZCAwIDogZS5tYXhDbG9zZUNvdW50KSB8fCAwO1xuICAgIHRoaXMuX2luaXRpYWxNdWx0aXBsaWVyID0gKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuaW5pdGlhbE11bHRpcGxpZXIpIHx8IDEuMjtcbiAgICB0aGlzLl9tdWx0aXBsaWVySW5jcmVtZW50ID0gKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUubXVsdGlwbGllckluY3JlbWVudCkgfHwgMC4yO1xuICAgIHRoaXMuX21heE11bHRpcGxpZXIgPSAobnVsbCA9PSBlID8gdm9pZCAwIDogZS5tYXhNdWx0aXBsaWVyKSB8fCAxMDtcbiAgICBtai5FdmVudE1hbmFnZXIub24oRVZUX1RJTUVfU1RBVF9VUERBVEUsIHRoaXMub25UaW1lVXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLmluaXRpYWxpemVMb2NhbERhdGEoKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdUaW1lID0gdGhpcy5fcGxheUR1cmF0aW9uO1xuICAgIHRoaXMubG9jYWxEYXRhLndhaXRpbmdGb3JOZXh0QmF0Y2ggPSBmYWxzZTtcbiAgfVxuICBpbml0aWFsaXplTG9jYWxEYXRhKCkge1xuICAgIHZvaWQgMCAhPT0gdGhpcy5sb2NhbERhdGEucmVtYWluaW5nVGltZSAmJiBudWxsICE9PSB0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdUaW1lICYmIFwiXCIgIT09IHRoaXMubG9jYWxEYXRhLnJlbWFpbmluZ1RpbWUgfHwgKHRoaXMubG9jYWxEYXRhLnJlbWFpbmluZ1RpbWUgPSB0aGlzLl9wbGF5RHVyYXRpb24pO1xuICAgIHZvaWQgMCAhPT0gdGhpcy5sb2NhbERhdGEud2FpdGluZ0Zvck5leHRCYXRjaCAmJiBudWxsICE9PSB0aGlzLmxvY2FsRGF0YS53YWl0aW5nRm9yTmV4dEJhdGNoICYmIFwiXCIgIT09IHRoaXMubG9jYWxEYXRhLndhaXRpbmdGb3JOZXh0QmF0Y2ggfHwgKHRoaXMubG9jYWxEYXRhLndhaXRpbmdGb3JOZXh0QmF0Y2ggPSBmYWxzZSk7XG4gICAgdm9pZCAwICE9PSB0aGlzLmxvY2FsRGF0YS5jbG9zZUNvdW50SW5HYW1lICYmIG51bGwgIT09IHRoaXMubG9jYWxEYXRhLmNsb3NlQ291bnRJbkdhbWUgJiYgXCJcIiAhPT0gdGhpcy5sb2NhbERhdGEuY2xvc2VDb3VudEluR2FtZSB8fCAodGhpcy5sb2NhbERhdGEuY2xvc2VDb3VudEluR2FtZSA9IHRoaXMuX21heENsb3NlQ291bnQpO1xuICAgIHZvaWQgMCAhPT0gdGhpcy5sb2NhbERhdGEuY3VycmVudE11bHRpcGxpZXIgJiYgbnVsbCAhPT0gdGhpcy5sb2NhbERhdGEuY3VycmVudE11bHRpcGxpZXIgJiYgXCJcIiAhPT0gdGhpcy5sb2NhbERhdGEuY3VycmVudE11bHRpcGxpZXIgfHwgKHRoaXMubG9jYWxEYXRhLmN1cnJlbnRNdWx0aXBsaWVyID0gdGhpcy5faW5pdGlhbE11bHRpcGxpZXIpO1xuICAgIHZvaWQgMCAhPT0gdGhpcy5sb2NhbERhdGEuYmF0Y2hCcmVha0NvbWJvQ291bnQgJiYgbnVsbCAhPT0gdGhpcy5sb2NhbERhdGEuYmF0Y2hCcmVha0NvbWJvQ291bnQgJiYgXCJcIiAhPT0gdGhpcy5sb2NhbERhdGEuYmF0Y2hCcmVha0NvbWJvQ291bnQgfHwgKHRoaXMubG9jYWxEYXRhLmJhdGNoQnJlYWtDb21ib0NvdW50ID0gMCk7XG4gICAgdm9pZCAwICE9PSB0aGlzLmxvY2FsRGF0YS51aVNob3duQW5kUGVuZGluZyAmJiBudWxsICE9PSB0aGlzLmxvY2FsRGF0YS51aVNob3duQW5kUGVuZGluZyAmJiBcIlwiICE9PSB0aGlzLmxvY2FsRGF0YS51aVNob3duQW5kUGVuZGluZyB8fCAodGhpcy5sb2NhbERhdGEudWlTaG93bkFuZFBlbmRpbmcgPSBmYWxzZSk7XG4gIH1cbiAgaXNDbGFzc2ljTW9kZSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuQ2xhc3NpYztcbiAgfVxuICByZXNldFRpbWVyKHQpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdUaW1lID0gdDtcbiAgICB0aGlzLmxvY2FsRGF0YS53YWl0aW5nRm9yTmV4dEJhdGNoID0gZmFsc2U7XG4gIH1cbiAgb25UaW1lVXBkYXRlKHQpIHtcbiAgICBpZiAodGhpcy5pc0NsYXNzaWNNb2RlKCkgJiYgIXRoaXMubG9jYWxEYXRhLndhaXRpbmdGb3JOZXh0QmF0Y2gpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnJlbWFpbmluZ1RpbWUgLT0gdDtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnJlbWFpbmluZ1RpbWUgPD0gMCAmJiAodGhpcy5sb2NhbERhdGEud2FpdGluZ0Zvck5leHRCYXRjaCA9IHRydWUpO1xuICAgIH1cbiAgfVxuICBzaG93UmV3YXJkQnV0dG9uKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLnVpU2hvd25BbmRQZW5kaW5nID0gdHJ1ZTtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiQ2xhc3NpY1ZpZGVvQWRDb250cm9sbGVyXCIsIHtcbiAgICAgIGJnU3R5bGU6IHtcbiAgICAgICAgYmxhY2tPcGFjaXR5OiAyMDBcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBvbkNsaWNrV2F0Y2goKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMubG9jYWxEYXRhLnVpU2hvd25BbmRQZW5kaW5nID0gZmFsc2U7XG4gICAgRG90R2FtZUFkU2hvd1N0YWdlLmRvdChmYWxzZSwgXCJjbGFzc2ljSW5HYW1lNjFcIik7XG4gICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheVZpZGVvQWQoRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9HYW1lQ29udGludWVfQ2xhc3NpYywge1xuICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQub25WaWRlb0FkU3VjY2VzcygpO1xuICAgICAgICB0LmxvY2FsRGF0YS5iYXRjaEJyZWFrQ29tYm9Db3VudCA9IDA7XG4gICAgICB9LFxuICAgICAgb25GYWlsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5yZXNldFRpbWVyKHQuX3BsYXlEdXJhdGlvbik7XG4gICAgICAgIHQubG9jYWxEYXRhLmJhdGNoQnJlYWtDb21ib0NvdW50ID0gMDtcbiAgICAgIH1cbiAgICB9LCBcImNsYXNzaWNfaW5fZ2FtZV82MVwiLCB7XG4gICAgICBhZFRpbWVUeXBlOiBcImNsYXNzaWNJbkdhbWVBZDYxXCJcbiAgICB9KTtcbiAgfVxuICBvblZpZGVvQWRTdWNjZXNzKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmJhdGNoQnJlYWtDb21ib0NvdW50IDw9IDEgJiYgKHRoaXMubG9jYWxEYXRhLmN1cnJlbnRNdWx0aXBsaWVyID0gTWF0aC5taW4odGhpcy5sb2NhbERhdGEuY3VycmVudE11bHRpcGxpZXIgKyB0aGlzLl9tdWx0aXBsaWVySW5jcmVtZW50LCB0aGlzLl9tYXhNdWx0aXBsaWVyKSk7XG4gICAgdGhpcy5yZXNldFRpbWVyKHRoaXMuX3BsYXlEdXJhdGlvbik7XG4gIH1cbiAgb25DbGlja1JlZnVzZSgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS51aVNob3duQW5kUGVuZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubG9jYWxEYXRhLmJhdGNoQnJlYWtDb21ib0NvdW50ID0gMDtcbiAgICBpZiAodGhpcy5sb2NhbERhdGEuY2xvc2VDb3VudEluR2FtZSA+IDApIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmNsb3NlQ291bnRJbkdhbWUtLTtcbiAgICAgIHRoaXMucmVzZXRUaW1lcih0aGlzLl9wbGF5RHVyYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc2V0VGltZXIodGhpcy5fcGxheUR1cmF0aW9uKTtcbiAgICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uQ2xhc3NpY0ZhaWwsXG4gICAgICAgIHNraXBCZWZvcmVGYWlsRWZmZWN0OiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfdndMb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdGhpcy5pc0NsYXNzaWNNb2RlKCk7XG4gIH1cbiAgb25FbnRBbmlGaUJodl9zdGFydCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNDbGFzc2ljTW9kZSgpICYmIHRoaXMubG9jYWxEYXRhLnVpU2hvd25BbmRQZW5kaW5nKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS51aVNob3duQW5kUGVuZGluZyA9IGZhbHNlO1xuICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5DbGFzc2ljRmFpbCxcbiAgICAgICAgc2tpcEJlZm9yZUZhaWxFZmZlY3Q6IHRydWUsXG4gICAgICAgIHNraXBJbnRlckFkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX3VpRGVzKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdGhpcy5pc0NsYXNzaWNNb2RlKCk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCBlKSB7XG4gICAgZSgpO1xuICAgIGlmICh0aGlzLmlzQ2xhc3NpY01vZGUoKSkge1xuICAgICAgdGhpcy5sb2NhbERhdGEucmVtYWluaW5nVGltZSA9IHRoaXMuX3BsYXlEdXJhdGlvbjtcbiAgICAgIHRoaXMubG9jYWxEYXRhLndhaXRpbmdGb3JOZXh0QmF0Y2ggPSBmYWxzZTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmNsb3NlQ291bnRJbkdhbWUgPSB0aGlzLl9tYXhDbG9zZUNvdW50O1xuICAgICAgdGhpcy5sb2NhbERhdGEuY3VycmVudE11bHRpcGxpZXIgPSB0aGlzLl9pbml0aWFsTXVsdGlwbGllcjtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmJhdGNoQnJlYWtDb21ib0NvdW50ID0gMDtcbiAgICB9XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uUmVwbGF5R2FtZSh0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNDbGFzc2ljTW9kZSgpKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdUaW1lID0gdGhpcy5fcGxheUR1cmF0aW9uO1xuICAgICAgdGhpcy5sb2NhbERhdGEud2FpdGluZ0Zvck5leHRCYXRjaCA9IGZhbHNlO1xuICAgICAgdGhpcy5sb2NhbERhdGEuY2xvc2VDb3VudEluR2FtZSA9IHRoaXMuX21heENsb3NlQ291bnQ7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5jdXJyZW50TXVsdGlwbGllciA9IHRoaXMuX2luaXRpYWxNdWx0aXBsaWVyO1xuICAgICAgdGhpcy5sb2NhbERhdGEuYmF0Y2hCcmVha0NvbWJvQ291bnQgPSAwO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25DaGdCYXRjaEFuaW1CaHZfZmluaXNoKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc0NsYXNzaWNNb2RlKCkpIHtcbiAgICAgIGlmICh0aGlzLmxvY2FsRGF0YS53YWl0aW5nRm9yTmV4dEJhdGNoKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLndhaXRpbmdGb3JOZXh0QmF0Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93UmV3YXJkQnV0dG9uKCk7XG4gICAgICB9IGVsc2UgdGhpcy5sb2NhbERhdGEuYmF0Y2hCcmVha0NvbWJvQ291bnQgPSAwO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25Db21ib01kZl9icmVha0NvbWJvKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdGhpcy5pc0NsYXNzaWNNb2RlKCkgJiYgdGhpcy5sb2NhbERhdGEuYmF0Y2hCcmVha0NvbWJvQ291bnQrKztcbiAgfVxuICBvblNjb3JlTW9kX2FwcGx5TXVsdGlwbGllcih0LCBlKSB7XG4gICAgdmFyIGk7XG4gICAgaWYgKHRoaXMuaXNDbGFzc2ljTW9kZSgpKSB7XG4gICAgICBpZiAodGhpcy5sb2NhbERhdGEuY3VycmVudE11bHRpcGxpZXIgPiAxKSB7XG4gICAgICAgIHZhciBhID0gKG51bGwgPT09IChpID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpWzBdKSB8fCAwO1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5WYWw6IE1hdGguZmxvb3IoYSAqIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRNdWx0aXBsaWVyKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkNsY1ZpZGVvQWRWd19sb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgaWYgKHRoaXMuaXNDbGFzc2ljTW9kZSgpKSB7XG4gICAgICB2YXIgaSA9IHQuaW5zO1xuICAgICAgaSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGkudXBkYXRlRGlzcGxheSAmJiBpLnVwZGF0ZURpc3BsYXkoe1xuICAgICAgICBoYXNDbG9zZUNvdW50OiB0aGlzLmxvY2FsRGF0YS5jbG9zZUNvdW50SW5HYW1lID4gMCxcbiAgICAgICAgY3VycmVudE11bHRpcGxpZXI6IHRoaXMubG9jYWxEYXRhLmN1cnJlbnRNdWx0aXBsaWVyICsgdGhpcy5fbXVsdGlwbGllckluY3JlbWVudCxcbiAgICAgICAgc2hvd1NwZWNpYWxUaXRsZTogdGhpcy5sb2NhbERhdGEuYmF0Y2hCcmVha0NvbWJvQ291bnQgPD0gMVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uQ2xjVmlkZW9BZFZ3X2NsaWNrV2F0Y2godCwgZSkge1xuICAgIGlmICh0aGlzLmlzQ2xhc3NpY01vZGUoKSkge1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jbG9zZVZpZXdCeU5hbWUoXCJDbGFzc2ljVmlkZW9BZENvbnRyb2xsZXJcIik7XG4gICAgICB0aGlzLm9uQ2xpY2tXYXRjaCgpO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25DbGNWaWRlb0FkVndfY2xpY2tSZWZ1c2UodCwgZSkge1xuICAgIGlmICh0aGlzLmlzQ2xhc3NpY01vZGUoKSkge1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jbG9zZVZpZXdCeU5hbWUoXCJDbGFzc2ljVmlkZW9BZENvbnRyb2xsZXJcIik7XG4gICAgICB0aGlzLm9uQ2xpY2tSZWZ1c2UoKTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19