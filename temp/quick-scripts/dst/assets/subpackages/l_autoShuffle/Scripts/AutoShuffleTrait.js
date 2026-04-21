
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_autoShuffle/Scripts/AutoShuffleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '756fbxF5O1P1pDRr+nTCkzX', 'AutoShuffleTrait');
// subpackages/l_autoShuffle/Scripts/AutoShuffleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var AutoShuffleTrait = /** @class */ (function (_super) {
    __extends(AutoShuffleTrait, _super);
    function AutoShuffleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mode = 1;
        _this._gamesCount = 5;
        _this._minShuffleCount = 2;
        _this._isBoth = false;
        _this._failReplayCount = 0;
        _this._isFailAutoShuffleConditionMet = false;
        _this._isDeadlockWithAllConditions = false;
        return _this;
    }
    AutoShuffleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._mode = this._traitData.mode || 1;
        this._gamesCount = this._traitData.gamesCount || 5;
        this._minShuffleCount = this._traitData.minShuffleCount || 2;
        this._isBoth = this._traitData.isBoth || false;
        if (1 === this._mode) {
            this.localData.failReplayCount || (this.localData.failReplayCount = 0);
            this._failReplayCount = this.localData.failReplayCount;
        }
        3 === this._mode && mj.EventManager.on("OutOfMatches_AnimationComplete", this.onOutOfMatchesComplete, this);
    };
    AutoShuffleTrait.prototype.onFailBhv_start = function (t, e) {
        var i, o, a, n = t.ins, r = null === (o = null === (i = t.args[0]) || void 0 === i ? void 0 : i.data) || void 0 === o ? void 0 : o.isGM;
        if (!n || !n.context || r || n.context.getTileMapObject().checkIsDead([])) {
            var l = UserModel_1.default.getInstance().getGameDataByGameType(null === (a = null == n ? void 0 : n.context) || void 0 === a ? void 0 : a.gameType);
            if (l) {
                if (l.getShuffleNums() < this._minShuffleCount) {
                    this._isBoth && (this._isDeadlockWithAllConditions = false);
                    e();
                }
                else if (1 !== this._mode) {
                    var u = false;
                    switch (this._mode) {
                        case 2:
                            u = this.checkMode2(l);
                            break;
                        case 3:
                            u = true;
                    }
                    if (u) {
                        if (2 !== this._mode) {
                            if (3 !== this._mode)
                                e();
                            else {
                                var f = mj.getClassByName("OutOfMatchesTrait");
                                if (!f || !f.getInstance() || true !== f.getInstance().eventEnabled) {
                                    e();
                                    return;
                                }
                                e({
                                    isBreak: true
                                });
                            }
                        }
                        else {
                            this.triggerAutoShuffle();
                            e({
                                isBreak: true
                            });
                        }
                    }
                    else
                        e();
                }
                else {
                    var c = l.getUsedShuffle() > 0;
                    this._isFailAutoShuffleConditionMet = !c;
                    this._isDeadlockWithAllConditions = !c;
                    if (this._isFailAutoShuffleConditionMet && this._failReplayCount >= this._gamesCount - 1) {
                        this.triggerAutoShuffle();
                        this._failReplayCount = 0;
                        this.localData.failReplayCount = 0;
                        e({
                            isBreak: true
                        });
                        return;
                    }
                    e();
                }
            }
            else
                e();
        }
        else {
            this._isBoth && (this._isDeadlockWithAllConditions = false);
            e();
        }
    };
    AutoShuffleTrait.prototype.onFailVw_replay = function (t, e) {
        if (1 === this._mode && (this._isBoth ? this._isDeadlockWithAllConditions : this._isFailAutoShuffleConditionMet)) {
            this._failReplayCount++;
            this.localData.failReplayCount = this._failReplayCount;
        }
        e();
    };
    AutoShuffleTrait.prototype.checkMode2 = function (t) {
        return t.getUsedShuffle() > 0;
    };
    AutoShuffleTrait.prototype.triggerAutoShuffle = function () {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Shuffle,
            from: GameInputEnum_1.EShuffleFrom.Normal
        });
    };
    AutoShuffleTrait.prototype.playInterstitialAndRestart = function () {
        var t = this;
        AdManager_1.default.getInstance().playInterAd(DGameAdShow_1.EAdPosition.RearInsertScreen_Failure, {
            onSuccess: function () {
                t.restartCurrentLevel();
            },
            onFailed: function () {
                t.restartCurrentLevel();
            }
        }, "fail_show");
    };
    AutoShuffleTrait.prototype.restartCurrentLevel = function () {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Restart,
            callFrom: "fail"
        });
    };
    AutoShuffleTrait.prototype.onOutOfMatchesComplete = function () {
        var t = UserModel_1.default.getInstance(), e = t.getGameDataByGameType(t.getCurrentGameType());
        if (e) {
            e.getShuffleNums() < this._minShuffleCount || this.playInterstitialAndRestart();
        }
    };
    AutoShuffleTrait.traitKey = "AutoShuffle";
    AutoShuffleTrait = __decorate([
        mj.trait,
        mj.class("AutoShuffleTrait")
    ], AutoShuffleTrait);
    return AutoShuffleTrait;
}(Trait_1.default));
exports.default = AutoShuffleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2F1dG9TaHVmZmxlL1NjcmlwdHMvQXV0b1NodWZmbGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUNqRSxtRkFBaUc7QUFDakcsb0ZBQW1GO0FBQ25GLGdFQUEyRDtBQUMzRCx5RUFBd0U7QUFHeEU7SUFBOEMsb0NBQUs7SUFBbkQ7UUFBQSxxRUEwSEM7UUF6SEMsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLHNCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLHNCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQixvQ0FBOEIsR0FBRyxLQUFLLENBQUM7UUFDdkMsa0NBQTRCLEdBQUcsS0FBSyxDQUFDOztJQW1IdkMsQ0FBQztJQWpIQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUM7U0FDeEQ7UUFDRCxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUcsQ0FBQztJQUNELDBDQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDVCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbEgsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDekUsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENB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QUNILENBQUM7SUFqSE0seUJBQVEsR0FBRyxhQUFhLENBQUM7SUFSYixnQkFBZ0I7UUFGcEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBMEhwQztJQUFELHVCQUFDO0NBMUhELEFBMEhDLENBMUg2QyxlQUFLLEdBMEhsRDtrQkExSG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0sIEVTaHVmZmxlRnJvbSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9HYW1lSW50ZXJhY3Rpb24vR2FtZUludGVyYWN0aW9uJztcbmltcG9ydCBBZE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2FkL0FkTWFuYWdlcic7XG5pbXBvcnQgeyBFQWRQb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RHYW1lQWRTaG93JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQXV0b1NodWZmbGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b1NodWZmbGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX21vZGUgPSAxO1xuICBfZ2FtZXNDb3VudCA9IDU7XG4gIF9taW5TaHVmZmxlQ291bnQgPSAyO1xuICBfaXNCb3RoID0gZmFsc2U7XG4gIF9mYWlsUmVwbGF5Q291bnQgPSAwO1xuICBfaXNGYWlsQXV0b1NodWZmbGVDb25kaXRpb25NZXQgPSBmYWxzZTtcbiAgX2lzRGVhZGxvY2tXaXRoQWxsQ29uZGl0aW9ucyA9IGZhbHNlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkF1dG9TaHVmZmxlXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9tb2RlID0gdGhpcy5fdHJhaXREYXRhLm1vZGUgfHwgMTtcbiAgICB0aGlzLl9nYW1lc0NvdW50ID0gdGhpcy5fdHJhaXREYXRhLmdhbWVzQ291bnQgfHwgNTtcbiAgICB0aGlzLl9taW5TaHVmZmxlQ291bnQgPSB0aGlzLl90cmFpdERhdGEubWluU2h1ZmZsZUNvdW50IHx8IDI7XG4gICAgdGhpcy5faXNCb3RoID0gdGhpcy5fdHJhaXREYXRhLmlzQm90aCB8fCBmYWxzZTtcbiAgICBpZiAoMSA9PT0gdGhpcy5fbW9kZSkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuZmFpbFJlcGxheUNvdW50IHx8ICh0aGlzLmxvY2FsRGF0YS5mYWlsUmVwbGF5Q291bnQgPSAwKTtcbiAgICAgIHRoaXMuX2ZhaWxSZXBsYXlDb3VudCA9IHRoaXMubG9jYWxEYXRhLmZhaWxSZXBsYXlDb3VudDtcbiAgICB9XG4gICAgMyA9PT0gdGhpcy5fbW9kZSAmJiBtai5FdmVudE1hbmFnZXIub24oXCJPdXRPZk1hdGNoZXNfQW5pbWF0aW9uQ29tcGxldGVcIiwgdGhpcy5vbk91dE9mTWF0Y2hlc0NvbXBsZXRlLCB0aGlzKTtcbiAgfVxuICBvbkZhaWxCaHZfc3RhcnQodCwgZSkge1xuICAgIHZhciBpLFxuICAgICAgbyxcbiAgICAgIGEsXG4gICAgICBuID0gdC5pbnMsXG4gICAgICByID0gbnVsbCA9PT0gKG8gPSBudWxsID09PSAoaSA9IHQuYXJnc1swXSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5kYXRhKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmlzR007XG4gICAgaWYgKCFuIHx8ICFuLmNvbnRleHQgfHwgciB8fCBuLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmNoZWNrSXNEZWFkKFtdKSkge1xuICAgICAgdmFyIGwgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUobnVsbCA9PT0gKGEgPSBudWxsID09IG4gPyB2b2lkIDAgOiBuLmNvbnRleHQpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuZ2FtZVR5cGUpO1xuICAgICAgaWYgKGwpIHtcbiAgICAgICAgaWYgKGwuZ2V0U2h1ZmZsZU51bXMoKSA8IHRoaXMuX21pblNodWZmbGVDb3VudCkge1xuICAgICAgICAgIHRoaXMuX2lzQm90aCAmJiAodGhpcy5faXNEZWFkbG9ja1dpdGhBbGxDb25kaXRpb25zID0gZmFsc2UpO1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfSBlbHNlIGlmICgxICE9PSB0aGlzLl9tb2RlKSB7XG4gICAgICAgICAgdmFyIHUgPSBmYWxzZTtcbiAgICAgICAgICBzd2l0Y2ggKHRoaXMuX21vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgdSA9IHRoaXMuY2hlY2tNb2RlMihsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIHUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodSkge1xuICAgICAgICAgICAgaWYgKDIgIT09IHRoaXMuX21vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKDMgIT09IHRoaXMuX21vZGUpIGUoKTtlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZiA9IG1qLmdldENsYXNzQnlOYW1lKFwiT3V0T2ZNYXRjaGVzVHJhaXRcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFmIHx8ICFmLmdldEluc3RhbmNlKCkgfHwgdHJ1ZSAhPT0gZi5nZXRJbnN0YW5jZSgpLmV2ZW50RW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgZSgpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlKHtcbiAgICAgICAgICAgICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyQXV0b1NodWZmbGUoKTtcbiAgICAgICAgICAgICAgZSh7XG4gICAgICAgICAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBjID0gbC5nZXRVc2VkU2h1ZmZsZSgpID4gMDtcbiAgICAgICAgICB0aGlzLl9pc0ZhaWxBdXRvU2h1ZmZsZUNvbmRpdGlvbk1ldCA9ICFjO1xuICAgICAgICAgIHRoaXMuX2lzRGVhZGxvY2tXaXRoQWxsQ29uZGl0aW9ucyA9ICFjO1xuICAgICAgICAgIGlmICh0aGlzLl9pc0ZhaWxBdXRvU2h1ZmZsZUNvbmRpdGlvbk1ldCAmJiB0aGlzLl9mYWlsUmVwbGF5Q291bnQgPj0gdGhpcy5fZ2FtZXNDb3VudCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckF1dG9TaHVmZmxlKCk7XG4gICAgICAgICAgICB0aGlzLl9mYWlsUmVwbGF5Q291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEuZmFpbFJlcGxheUNvdW50ID0gMDtcbiAgICAgICAgICAgIGUoe1xuICAgICAgICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pc0JvdGggJiYgKHRoaXMuX2lzRGVhZGxvY2tXaXRoQWxsQ29uZGl0aW9ucyA9IGZhbHNlKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25GYWlsVndfcmVwbGF5KHQsIGUpIHtcbiAgICBpZiAoMSA9PT0gdGhpcy5fbW9kZSAmJiAodGhpcy5faXNCb3RoID8gdGhpcy5faXNEZWFkbG9ja1dpdGhBbGxDb25kaXRpb25zIDogdGhpcy5faXNGYWlsQXV0b1NodWZmbGVDb25kaXRpb25NZXQpKSB7XG4gICAgICB0aGlzLl9mYWlsUmVwbGF5Q291bnQrKztcbiAgICAgIHRoaXMubG9jYWxEYXRhLmZhaWxSZXBsYXlDb3VudCA9IHRoaXMuX2ZhaWxSZXBsYXlDb3VudDtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIGNoZWNrTW9kZTIodCkge1xuICAgIHJldHVybiB0LmdldFVzZWRTaHVmZmxlKCkgPiAwO1xuICB9XG4gIHRyaWdnZXJBdXRvU2h1ZmZsZSgpIHtcbiAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5TaHVmZmxlLFxuICAgICAgZnJvbTogRVNodWZmbGVGcm9tLk5vcm1hbFxuICAgIH0pO1xuICB9XG4gIHBsYXlJbnRlcnN0aXRpYWxBbmRSZXN0YXJ0KCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5SW50ZXJBZChFQWRQb3NpdGlvbi5SZWFySW5zZXJ0U2NyZWVuX0ZhaWx1cmUsIHtcbiAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0LnJlc3RhcnRDdXJyZW50TGV2ZWwoKTtcbiAgICAgIH0sXG4gICAgICBvbkZhaWxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0LnJlc3RhcnRDdXJyZW50TGV2ZWwoKTtcbiAgICAgIH1cbiAgICB9LCBcImZhaWxfc2hvd1wiKTtcbiAgfVxuICByZXN0YXJ0Q3VycmVudExldmVsKCkge1xuICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlJlc3RhcnQsXG4gICAgICBjYWxsRnJvbTogXCJmYWlsXCJcbiAgICB9KTtcbiAgfVxuICBvbk91dE9mTWF0Y2hlc0NvbXBsZXRlKCkge1xuICAgIHZhciB0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICBlID0gdC5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUodC5nZXRDdXJyZW50R2FtZVR5cGUoKSk7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUuZ2V0U2h1ZmZsZU51bXMoKSA8IHRoaXMuX21pblNodWZmbGVDb3VudCB8fCB0aGlzLnBsYXlJbnRlcnN0aXRpYWxBbmRSZXN0YXJ0KCk7XG4gICAgfVxuICB9XG59Il19