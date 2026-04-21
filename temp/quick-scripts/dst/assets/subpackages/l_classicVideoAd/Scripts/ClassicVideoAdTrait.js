
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicVideoAd/Scripts/ClassicVideoAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09c78S/xl5FyZKB9XCDR4f1', 'ClassicVideoAdTrait');
// subpackages/l_classicVideoAd/Scripts/ClassicVideoAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var Config_1 = require("../../../Scripts/Config");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var ClassicVideoAdTrait = /** @class */ (function (_super) {
    __extends(ClassicVideoAdTrait, _super);
    function ClassicVideoAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._playDuration = 300;
        _this._retryStartTime = 120;
        return _this;
    }
    ClassicVideoAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData;
        this._playDuration = (null == e ? void 0 : e.playDuration) || 300;
        this._retryStartTime = (null == e ? void 0 : e.retryStartTime) || 120;
        mj.EventManager.on(Config_1.EVT_TIME_STAT_UPDATE, this.onTimeUpdate, this);
        void 0 !== this.localData.remainingTime && null !== this.localData.remainingTime && "" !== this.localData.remainingTime || (this.localData.remainingTime = this._playDuration);
        void 0 !== this.localData.waitingForNextBatch && null !== this.localData.waitingForNextBatch && "" !== this.localData.waitingForNextBatch || (this.localData.waitingForNextBatch = false);
        void 0 !== this.localData.uiShownAndPending && null !== this.localData.uiShownAndPending && "" !== this.localData.uiShownAndPending || (this.localData.uiShownAndPending = false);
        this.localData.remainingTime = this._playDuration;
        this.localData.waitingForNextBatch = false;
    };
    ClassicVideoAdTrait.prototype.isClassicMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic;
    };
    ClassicVideoAdTrait.prototype.resetTimer = function (t) {
        this.localData.remainingTime = t;
        this.localData.waitingForNextBatch = false;
        this.localData = this.localData;
    };
    ClassicVideoAdTrait.prototype.onTimeUpdate = function (t) {
        if (this.isClassicMode() && !this.localData.waitingForNextBatch) {
            this.localData.remainingTime -= t;
            this.localData = this.localData;
            if (this.localData.remainingTime <= 0) {
                this.localData.waitingForNextBatch = true;
                this.localData = this.localData;
            }
        }
    };
    ClassicVideoAdTrait.prototype.showRewardButton = function () {
        this.localData.uiShownAndPending = true;
        ControllerManager_1.default.getInstance().pushViewByController("ClassicVideoAdController", {
            bgStyle: {
                blackOpacity: 200
            }
        });
    };
    ClassicVideoAdTrait.prototype.onClickWatch = function () {
        var t = this;
        this.localData.uiShownAndPending = false;
        DGameAdShowStage_1.DotGameAdShowStage.dot(true, "classicInGame");
        AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.InGameMotivation_GameContinue_Classic, {
            onSuccess: function () {
                t.resetTimer(t._playDuration);
            },
            onFailed: function () {
                t.resetTimer(t._playDuration);
            }
        }, "classic_in_game", {
            adTimeType: "classicInGameAd"
        });
    };
    ClassicVideoAdTrait.prototype.onClickRefuse = function () {
        this.localData.uiShownAndPending = false;
        this.resetTimer(this._playDuration);
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.ClassicFail,
            skipBeforeFailEffect: true
        });
    };
    ClassicVideoAdTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        e();
        this.isClassicMode();
    };
    ClassicVideoAdTrait.prototype.onEntAniFiBhv_start = function (t, e) {
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
    ClassicVideoAdTrait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        e();
        this.isClassicMode();
    };
    ClassicVideoAdTrait.prototype.onGsListener_onNewGame = function (t, e) {
        e();
        this.isClassicMode() && this.resetTimer(this._playDuration);
    };
    ClassicVideoAdTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        e();
        this.isClassicMode() && this.resetTimer(this._playDuration);
    };
    ClassicVideoAdTrait.prototype.onChgBatchAnimBhv_finish = function (t, e) {
        if (this.isClassicMode()) {
            if (this.localData.waitingForNextBatch) {
                this.localData.waitingForNextBatch = false;
                this.localData = this.localData;
                var i = AdManager_1.default.getInstance().checkVideoAdIsReady(), a = CommonUtils_1.isNetworkAvailable();
                if (!i && !a) {
                    this.resetTimer(this._retryStartTime);
                    e();
                    return;
                }
                this.showRewardButton();
            }
            e();
        }
        else
            e();
    };
    ClassicVideoAdTrait.traitKey = "ClassicVideoAd";
    ClassicVideoAdTrait = __decorate([
        mj.trait,
        mj.class("ClassicVideoAdTrait")
    ], ClassicVideoAdTrait);
    return ClassicVideoAdTrait;
}(Trait_1.default));
exports.default = ClassicVideoAdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNWaWRlb0FkL1NjcmlwdHMvQ2xhc3NpY1ZpZGVvQWRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHdGQUFvRjtBQUNwRixzRUFBaUU7QUFDakUsZ0VBQTJEO0FBQzNELHlFQUF3RTtBQUN4RSxtRkFBb0Y7QUFDcEYsa0RBQStEO0FBQy9ELDRFQUFrRjtBQUNsRiwwRkFBcUY7QUFDckYsb0ZBQW1GO0FBQ25GLG1GQUFtRjtBQUduRjtJQUFpRCx1Q0FBSztJQUF0RDtRQUFBLHFFQTZHQztRQTVHQyxtQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNwQixxQkFBZSxHQUFHLEdBQUcsQ0FBQzs7SUEyR3hCLENBQUM7SUF6R0Msb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ3RFLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLDZCQUFvQixFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxJQUFJLEVB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Iiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbmltcG9ydCB7IEVBZFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3cnO1xuaW1wb3J0IHsgRG90R2FtZUFkU2hvd1N0YWdlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3dTdGFnZSc7XG5pbXBvcnQgeyBFVlRfVElNRV9TVEFUX1VQREFURSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQ29uZmlnJztcbmltcG9ydCB7IGlzTmV0d29ya0F2YWlsYWJsZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3V0aWxzL0NvbW1vblV0aWxzJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBFR2FtZUlucHV0RW51bSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDbGFzc2ljVmlkZW9BZFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc2ljVmlkZW9BZFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfcGxheUR1cmF0aW9uID0gMzAwO1xuICBfcmV0cnlTdGFydFRpbWUgPSAxMjA7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2xhc3NpY1ZpZGVvQWRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciBlID0gdGhpcy5fdHJhaXREYXRhO1xuICAgIHRoaXMuX3BsYXlEdXJhdGlvbiA9IChudWxsID09IGUgPyB2b2lkIDAgOiBlLnBsYXlEdXJhdGlvbikgfHwgMzAwO1xuICAgIHRoaXMuX3JldHJ5U3RhcnRUaW1lID0gKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUucmV0cnlTdGFydFRpbWUpIHx8IDEyMDtcbiAgICBtai5FdmVudE1hbmFnZXIub24oRVZUX1RJTUVfU1RBVF9VUERBVEUsIHRoaXMub25UaW1lVXBkYXRlLCB0aGlzKTtcbiAgICB2b2lkIDAgIT09IHRoaXMubG9jYWxEYXRhLnJlbWFpbmluZ1RpbWUgJiYgbnVsbCAhPT0gdGhpcy5sb2NhbERhdGEucmVtYWluaW5nVGltZSAmJiBcIlwiICE9PSB0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdUaW1lIHx8ICh0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdUaW1lID0gdGhpcy5fcGxheUR1cmF0aW9uKTtcbiAgICB2b2lkIDAgIT09IHRoaXMubG9jYWxEYXRhLndhaXRpbmdGb3JOZXh0QmF0Y2ggJiYgbnVsbCAhPT0gdGhpcy5sb2NhbERhdGEud2FpdGluZ0Zvck5leHRCYXRjaCAmJiBcIlwiICE9PSB0aGlzLmxvY2FsRGF0YS53YWl0aW5nRm9yTmV4dEJhdGNoIHx8ICh0aGlzLmxvY2FsRGF0YS53YWl0aW5nRm9yTmV4dEJhdGNoID0gZmFsc2UpO1xuICAgIHZvaWQgMCAhPT0gdGhpcy5sb2NhbERhdGEudWlTaG93bkFuZFBlbmRpbmcgJiYgbnVsbCAhPT0gdGhpcy5sb2NhbERhdGEudWlTaG93bkFuZFBlbmRpbmcgJiYgXCJcIiAhPT0gdGhpcy5sb2NhbERhdGEudWlTaG93bkFuZFBlbmRpbmcgfHwgKHRoaXMubG9jYWxEYXRhLnVpU2hvd25BbmRQZW5kaW5nID0gZmFsc2UpO1xuICAgIHRoaXMubG9jYWxEYXRhLnJlbWFpbmluZ1RpbWUgPSB0aGlzLl9wbGF5RHVyYXRpb247XG4gICAgdGhpcy5sb2NhbERhdGEud2FpdGluZ0Zvck5leHRCYXRjaCA9IGZhbHNlO1xuICB9XG4gIGlzQ2xhc3NpY01vZGUoKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLkNsYXNzaWM7XG4gIH1cbiAgcmVzZXRUaW1lcih0KSB7XG4gICAgdGhpcy5sb2NhbERhdGEucmVtYWluaW5nVGltZSA9IHQ7XG4gICAgdGhpcy5sb2NhbERhdGEud2FpdGluZ0Zvck5leHRCYXRjaCA9IGZhbHNlO1xuICAgIHRoaXMubG9jYWxEYXRhID0gdGhpcy5sb2NhbERhdGE7XG4gIH1cbiAgb25UaW1lVXBkYXRlKHQpIHtcbiAgICBpZiAodGhpcy5pc0NsYXNzaWNNb2RlKCkgJiYgIXRoaXMubG9jYWxEYXRhLndhaXRpbmdGb3JOZXh0QmF0Y2gpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnJlbWFpbmluZ1RpbWUgLT0gdDtcbiAgICAgIHRoaXMubG9jYWxEYXRhID0gdGhpcy5sb2NhbERhdGE7XG4gICAgICBpZiAodGhpcy5sb2NhbERhdGEucmVtYWluaW5nVGltZSA8PSAwKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLndhaXRpbmdGb3JOZXh0QmF0Y2ggPSB0cnVlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YSA9IHRoaXMubG9jYWxEYXRhO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzaG93UmV3YXJkQnV0dG9uKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLnVpU2hvd25BbmRQZW5kaW5nID0gdHJ1ZTtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiQ2xhc3NpY1ZpZGVvQWRDb250cm9sbGVyXCIsIHtcbiAgICAgIGJnU3R5bGU6IHtcbiAgICAgICAgYmxhY2tPcGFjaXR5OiAyMDBcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBvbkNsaWNrV2F0Y2goKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMubG9jYWxEYXRhLnVpU2hvd25BbmRQZW5kaW5nID0gZmFsc2U7XG4gICAgRG90R2FtZUFkU2hvd1N0YWdlLmRvdCh0cnVlLCBcImNsYXNzaWNJbkdhbWVcIik7XG4gICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheVZpZGVvQWQoRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9HYW1lQ29udGludWVfQ2xhc3NpYywge1xuICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQucmVzZXRUaW1lcih0Ll9wbGF5RHVyYXRpb24pO1xuICAgICAgfSxcbiAgICAgIG9uRmFpbGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQucmVzZXRUaW1lcih0Ll9wbGF5RHVyYXRpb24pO1xuICAgICAgfVxuICAgIH0sIFwiY2xhc3NpY19pbl9nYW1lXCIsIHtcbiAgICAgIGFkVGltZVR5cGU6IFwiY2xhc3NpY0luR2FtZUFkXCJcbiAgICB9KTtcbiAgfVxuICBvbkNsaWNrUmVmdXNlKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLnVpU2hvd25BbmRQZW5kaW5nID0gZmFsc2U7XG4gICAgdGhpcy5yZXNldFRpbWVyKHRoaXMuX3BsYXlEdXJhdGlvbik7XG4gICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uQ2xhc3NpY0ZhaWwsXG4gICAgICBza2lwQmVmb3JlRmFpbEVmZmVjdDogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX3Z3TG9hZCh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHRoaXMuaXNDbGFzc2ljTW9kZSgpO1xuICB9XG4gIG9uRW50QW5pRmlCaHZfc3RhcnQodCwgZSkge1xuICAgIGlmICh0aGlzLmlzQ2xhc3NpY01vZGUoKSAmJiB0aGlzLmxvY2FsRGF0YS51aVNob3duQW5kUGVuZGluZykge1xuICAgICAgdGhpcy5sb2NhbERhdGEudWlTaG93bkFuZFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uQ2xhc3NpY0ZhaWwsXG4gICAgICAgIHNraXBCZWZvcmVGYWlsRWZmZWN0OiB0cnVlLFxuICAgICAgICBza2lwSW50ZXJBZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvbk1haW5HYW1lQ3RybF91aURlcyh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHRoaXMuaXNDbGFzc2ljTW9kZSgpO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgZSkge1xuICAgIGUoKTtcbiAgICB0aGlzLmlzQ2xhc3NpY01vZGUoKSAmJiB0aGlzLnJlc2V0VGltZXIodGhpcy5fcGxheUR1cmF0aW9uKTtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25SZXBsYXlHYW1lKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdGhpcy5pc0NsYXNzaWNNb2RlKCkgJiYgdGhpcy5yZXNldFRpbWVyKHRoaXMuX3BsYXlEdXJhdGlvbik7XG4gIH1cbiAgb25DaGdCYXRjaEFuaW1CaHZfZmluaXNoKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc0NsYXNzaWNNb2RlKCkpIHtcbiAgICAgIGlmICh0aGlzLmxvY2FsRGF0YS53YWl0aW5nRm9yTmV4dEJhdGNoKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLndhaXRpbmdGb3JOZXh0QmF0Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEgPSB0aGlzLmxvY2FsRGF0YTtcbiAgICAgICAgdmFyIGkgPSBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGVja1ZpZGVvQWRJc1JlYWR5KCksXG4gICAgICAgICAgYSA9IGlzTmV0d29ya0F2YWlsYWJsZSgpO1xuICAgICAgICBpZiAoIWkgJiYgIWEpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0VGltZXIodGhpcy5fcmV0cnlTdGFydFRpbWUpO1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93UmV3YXJkQnV0dG9uKCk7XG4gICAgICB9XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==