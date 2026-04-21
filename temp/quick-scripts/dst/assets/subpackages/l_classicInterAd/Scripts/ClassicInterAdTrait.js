
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicInterAd/Scripts/ClassicInterAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5f691AiDdJoaP21cUrmMGj', 'ClassicInterAdTrait');
// subpackages/l_classicInterAd/Scripts/ClassicInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var Config_1 = require("../../../Scripts/Config");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var ClassicInterAdTrait = /** @class */ (function (_super) {
    __extends(ClassicInterAdTrait, _super);
    function ClassicInterAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._playDuration = 300;
        _this._retryStartTime = 120;
        return _this;
    }
    ClassicInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this.traitData;
        this._playDuration = (null == e ? void 0 : e.playDuration) || 300;
        this._retryStartTime = (null == e ? void 0 : e.retryStartTime) || 120;
        mj.EventManager.on(Config_1.EVT_TIME_STAT_UPDATE, this.onTimeUpdate, this);
        this.localData.remainingTime = this._playDuration;
        this.localData.waitingForNextBatch = false;
    };
    ClassicInterAdTrait.prototype.isClassicMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic;
    };
    ClassicInterAdTrait.prototype.resetTimer = function (t) {
        this.localData.remainingTime = t;
        this.localData.waitingForNextBatch = false;
    };
    ClassicInterAdTrait.prototype.onTimeUpdate = function (t) {
        if (this.isClassicMode() && !this.localData.waitingForNextBatch) {
            this.localData.remainingTime -= t;
            if (this.localData.remainingTime <= 0) {
                this.localData.waitingForNextBatch = true;
                this.localData = this.localData;
            }
        }
    };
    ClassicInterAdTrait.prototype.playAd = function () {
        var t = this;
        this._playDuration, this.localData.remainingTime;
        DGameAdShowStage_1.DotGameAdShowStage.dot(true, "endlessInGame");
        AdManager_1.default.getInstance().playInterAd(DGameAdShow_1.EAdPosition.InGameInsertScreen_PauseContinue, {
            onSuccess: function () {
                t.resetTimer(t._playDuration);
            },
            onFailed: function () {
                t.resetTimer(t._playDuration);
            }
        }, "endless_in_game", {
            adTimeType: "endlessInGameAd"
        });
    };
    ClassicInterAdTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        e();
        this.isClassicMode();
    };
    ClassicInterAdTrait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        e();
        this.isClassicMode();
    };
    ClassicInterAdTrait.prototype.onGsListener_onNewGame = function (t, e) {
        e();
        this.isClassicMode() && this.resetTimer(this._playDuration);
    };
    ClassicInterAdTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        e();
        this.isClassicMode() && this.resetTimer(this._playDuration);
    };
    ClassicInterAdTrait.prototype.onChgBatchAnimBhv_finish = function (t, e) {
        if (this.isClassicMode()) {
            if (this.localData.waitingForNextBatch) {
                this.localData.waitingForNextBatch = false;
                this.localData = this.localData;
                var i = AdManager_1.default.getInstance().checkInterAdIsReady(), a = CommonUtils_1.isNetworkAvailable();
                if (!i && !a) {
                    this.resetTimer(this._retryStartTime);
                    e();
                    return;
                }
                this.playAd();
            }
            e();
        }
        else
            e();
    };
    ClassicInterAdTrait.traitKey = "ClassicInterAd";
    ClassicInterAdTrait = __decorate([
        mj.trait,
        mj.class("ClassicInterAdTrait")
    ], ClassicInterAdTrait);
    return ClassicInterAdTrait;
}(Trait_1.default));
exports.default = ClassicInterAdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNJbnRlckFkL1NjcmlwdHMvQ2xhc3NpY0ludGVyQWRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHdGQUFvRjtBQUNwRixzRUFBaUU7QUFDakUsZ0VBQTJEO0FBQzNELHlFQUF3RTtBQUN4RSxtRkFBb0Y7QUFDcEYsa0RBQStEO0FBQy9ELDRFQUFrRjtBQUdsRjtJQUFpRCx1Q0FBSztJQUF0RDtRQUFBLHFFQTZFQztRQTVFQyxtQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNwQixxQkFBZSxHQUFHLEdBQUcsQ0FBQzs7SUEyRXhCLENBQUM7SUF6RUMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ3RFLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLDZCQUFvQixFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBQ0QsMkNBQWEsR0FBYjtR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QUFDLENBQUMsRUFBRTtvQkFDWixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDdEMsQ0FBQyxFQUFFLENBQUM7b0JBQ0osT0FBTztpQkFDUjtnQkFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtZQUNELENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBekVNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFIaEIsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQTZFdkM7SUFBRCwwQkFBQztDQTdFRCxBQTZFQyxDQTdFZ0QsZUFBSyxHQTZFckQ7a0JBN0VvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbmltcG9ydCB7IEVBZFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3cnO1xuaW1wb3J0IHsgRG90R2FtZUFkU2hvd1N0YWdlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3dTdGFnZSc7XG5pbXBvcnQgeyBFVlRfVElNRV9TVEFUX1VQREFURSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQ29uZmlnJztcbmltcG9ydCB7IGlzTmV0d29ya0F2YWlsYWJsZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3V0aWxzL0NvbW1vblV0aWxzJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2xhc3NpY0ludGVyQWRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NpY0ludGVyQWRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3BsYXlEdXJhdGlvbiA9IDMwMDtcbiAgX3JldHJ5U3RhcnRUaW1lID0gMTIwO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNsYXNzaWNJbnRlckFkXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgZSA9IHRoaXMudHJhaXREYXRhO1xuICAgIHRoaXMuX3BsYXlEdXJhdGlvbiA9IChudWxsID09IGUgPyB2b2lkIDAgOiBlLnBsYXlEdXJhdGlvbikgfHwgMzAwO1xuICAgIHRoaXMuX3JldHJ5U3RhcnRUaW1lID0gKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUucmV0cnlTdGFydFRpbWUpIHx8IDEyMDtcbiAgICBtai5FdmVudE1hbmFnZXIub24oRVZUX1RJTUVfU1RBVF9VUERBVEUsIHRoaXMub25UaW1lVXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdUaW1lID0gdGhpcy5fcGxheUR1cmF0aW9uO1xuICAgIHRoaXMubG9jYWxEYXRhLndhaXRpbmdGb3JOZXh0QmF0Y2ggPSBmYWxzZTtcbiAgfVxuICBpc0NsYXNzaWNNb2RlKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5DbGFzc2ljO1xuICB9XG4gIHJlc2V0VGltZXIodCkge1xuICAgIHRoaXMubG9jYWxEYXRhLnJlbWFpbmluZ1RpbWUgPSB0O1xuICAgIHRoaXMubG9jYWxEYXRhLndhaXRpbmdGb3JOZXh0QmF0Y2ggPSBmYWxzZTtcbiAgfVxuICBvblRpbWVVcGRhdGUodCkge1xuICAgIGlmICh0aGlzLmlzQ2xhc3NpY01vZGUoKSAmJiAhdGhpcy5sb2NhbERhdGEud2FpdGluZ0Zvck5leHRCYXRjaCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEucmVtYWluaW5nVGltZSAtPSB0O1xuICAgICAgaWYgKHRoaXMubG9jYWxEYXRhLnJlbWFpbmluZ1RpbWUgPD0gMCkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS53YWl0aW5nRm9yTmV4dEJhdGNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEgPSB0aGlzLmxvY2FsRGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcGxheUFkKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLl9wbGF5RHVyYXRpb24sIHRoaXMubG9jYWxEYXRhLnJlbWFpbmluZ1RpbWU7XG4gICAgRG90R2FtZUFkU2hvd1N0YWdlLmRvdCh0cnVlLCBcImVuZGxlc3NJbkdhbWVcIik7XG4gICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUludGVyQWQoRUFkUG9zaXRpb24uSW5HYW1lSW5zZXJ0U2NyZWVuX1BhdXNlQ29udGludWUsIHtcbiAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0LnJlc2V0VGltZXIodC5fcGxheUR1cmF0aW9uKTtcbiAgICAgIH0sXG4gICAgICBvbkZhaWxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0LnJlc2V0VGltZXIodC5fcGxheUR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9LCBcImVuZGxlc3NfaW5fZ2FtZVwiLCB7XG4gICAgICBhZFRpbWVUeXBlOiBcImVuZGxlc3NJbkdhbWVBZFwiXG4gICAgfSk7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfdndMb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdGhpcy5pc0NsYXNzaWNNb2RlKCk7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfdWlEZXModCwgZSkge1xuICAgIGUoKTtcbiAgICB0aGlzLmlzQ2xhc3NpY01vZGUoKTtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25OZXdHYW1lKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdGhpcy5pc0NsYXNzaWNNb2RlKCkgJiYgdGhpcy5yZXNldFRpbWVyKHRoaXMuX3BsYXlEdXJhdGlvbik7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uUmVwbGF5R2FtZSh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHRoaXMuaXNDbGFzc2ljTW9kZSgpICYmIHRoaXMucmVzZXRUaW1lcih0aGlzLl9wbGF5RHVyYXRpb24pO1xuICB9XG4gIG9uQ2hnQmF0Y2hBbmltQmh2X2ZpbmlzaCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNDbGFzc2ljTW9kZSgpKSB7XG4gICAgICBpZiAodGhpcy5sb2NhbERhdGEud2FpdGluZ0Zvck5leHRCYXRjaCkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS53YWl0aW5nRm9yTmV4dEJhdGNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhID0gdGhpcy5sb2NhbERhdGE7XG4gICAgICAgIHZhciBpID0gQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2hlY2tJbnRlckFkSXNSZWFkeSgpLFxuICAgICAgICAgIGEgPSBpc05ldHdvcmtBdmFpbGFibGUoKTtcbiAgICAgICAgaWYgKCFpICYmICFhKSB7XG4gICAgICAgICAgdGhpcy5yZXNldFRpbWVyKHRoaXMuX3JldHJ5U3RhcnRUaW1lKTtcbiAgICAgICAgICBlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheUFkKCk7XG4gICAgICB9XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==