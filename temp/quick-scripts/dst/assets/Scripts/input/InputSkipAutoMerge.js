
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputSkipAutoMerge.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '434a3QFhfpPfbM/B8cmcySi', 'InputSkipAutoMerge');
// Scripts/input/InputSkipAutoMerge.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var BeforeEndEffect_1 = require("../BeforeEndEffect");
var BeforeDailyChallengeEndEffect_1 = require("../BeforeDailyChallengeEndEffect");
var CleanViewEffect_1 = require("../CleanViewEffect");
var DailyChallengeEndEffect_1 = require("../DailyChallengeEndEffect");
var EndEffect_1 = require("../EndEffect");
var SkipAutoMergeEffect_1 = require("../SkipAutoMergeEffect");
var TravelEndEffect_1 = require("../TravelEndEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputSkipAutoMerge = /** @class */ (function (_super) {
    __extends(InputSkipAutoMerge, _super);
    function InputSkipAutoMerge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputSkipAutoMerge.prototype.excute = function (e) {
        var t = this, o = this.gameContext.getTileMapObject(), n = (this.gameContext.getGameData(), o.unselectAllTileIds());
        n && n.length > 0 && n.forEach(function (e) {
            t.pushSelectEffect(e, true);
        });
        var i = new SkipAutoMergeEffect_1.SkipAutoMergeEffect({
            type: e.type
        });
        this.pushEffect(i, BehaviorsEnum_1.EInsertType.Root);
        var l = o.getAllCardTiles(), s = l.length;
        if (0 !== s) {
            for (var c = Math.floor(s / 2), p = 0; p < c; p++) {
                this.gameContext.comboModifier.addCombo(1);
                this.gameContext.scoreModifier.calAddScore();
            }
            var f = [];
            l.forEach(function (e) {
                if (e.isValid) {
                    e.isValid = false;
                    f.push(e);
                }
            });
            o.onClear(f);
            var h = new CleanViewEffect_1.CleanViewEffect({});
            this.pushEffect(h, BehaviorsEnum_1.EInsertType.Parallel);
            o.updateCanMatchTiles();
            this.finishSkipAndWin(e);
            mj.EventManager.emit(GameEvent_1.EGameEvent.Effect_SkipAutoMerge, this);
        }
    };
    InputSkipAutoMerge.prototype.finishSkipAndWin = function () {
        var e = this.gameController.gameTimeData.time, t = this.gameContext.gameType;
        this.gameContext.getGameData().updateAvgClearIntervals();
        if (t === GameTypeEnums_1.MjGameType.DailyChallenge) {
            this.gameContext.gameModifier.modifyWinForDailyChallenge(e);
            var o = this.pushBeforeDailyChallengeEndEffect();
            this.pushDailyChallengeEndEffect(o);
        }
        else if (t === GameTypeEnums_1.MjGameType.Travel) {
            this.gameContext.gameModifier.modifyWinForTravel(e);
            this.pushTravelEndEffect();
        }
        else {
            this.gameContext.gameModifier.modifyWin(e);
            o = this.pushBeforeEndEffect();
            this.pushNormalEndEffect(o);
        }
    };
    InputSkipAutoMerge.prototype.pushBeforeEndEffect = function () {
        var e = new BeforeEndEffect_1.BeforeEndEffect({});
        return this.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputSkipAutoMerge.prototype.pushNormalEndEffect = function (e) {
        var t = this.gameContext.getGameData(), o = new EndEffect_1.EndEffect({
            score: t.getScore(),
            settlementScore: t.getSettlementScore(),
            perfectMaxScore: this.gameContext.scoreModifier.getPerfectMaxScore(),
            curLv: t.getLevelId()
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Serial, e.newEffectId, false);
    };
    InputSkipAutoMerge.prototype.pushBeforeDailyChallengeEndEffect = function () {
        var e = new BeforeDailyChallengeEndEffect_1.BeforeDailyChallengeEndEffect({});
        return this.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputSkipAutoMerge.prototype.pushDailyChallengeEndEffect = function (e) {
        var t = this.gameContext.getGameData(), o = new DailyChallengeEndEffect_1.DailyChallengeEndEffect({
            score: t.getScore(),
            settlementScore: t.getSettlementScore(),
            perfectMaxScore: this.gameContext.scoreModifier.getPerfectMaxScore(),
            challengeDate: t.getDailyChallengeTimestamp()
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Serial, e.newEffectId);
    };
    InputSkipAutoMerge.prototype.pushTravelEndEffect = function () {
        var e, t, o, n = this.gameContext.getGameData(), i = null !== (o = null === (t = null === (e = this.gameContext.getTileMapObject()) || void 0 === e ? void 0 : e.collectSystem) || void 0 === t ? void 0 : t.getAllCollectDetails()) && void 0 !== o ? o : [], a = new TravelEndEffect_1.TravelEndEffect({
            curLv: n.getLevelId(),
            collects: i
        });
        this.pushEffect(a, BehaviorsEnum_1.EInsertType.Parallel);
    };
    return InputSkipAutoMerge;
}(InputBase_1.InputBase));
exports.default = InputSkipAutoMerge;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0U2tpcEF1dG9NZXJnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXdEO0FBQ3hELDZEQUE2RDtBQUM3RCwwRUFBc0U7QUFDdEUsc0RBQXFEO0FBQ3JELGtGQUFpRjtBQUNqRixzREFBcUQ7QUFDckQsc0VBQXFFO0FBQ3JFLDBDQUF5QztBQUN6Qyw4REFBNkQ7QUFDN0Qsc0RBQXFEO0FBQ3JELG9EQUFtRDtBQUNuRDtJQUFnRCxzQ0FBUztJQUF6RDs7SUEyRkEsQ0FBQztJQTFGQyxtQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN2QyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxJQUFJLHlDQUFtQixDQUFDO1lBQzlCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtTQUNiLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUN6QixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcs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RyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUM1TSxDQUFDLEdBQUcsSUFBSSxpQ0FBZSxDQUFDO1lBQ3RCLEtBQUssRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFO1lBQ3JCLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQTNGQSxBQTJGQyxDQTNGK0MscUJBQVMsR0EyRnhEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUV2ZW50JztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEJlZm9yZUVuZEVmZmVjdCB9IGZyb20gJy4uL0JlZm9yZUVuZEVmZmVjdCc7XG5pbXBvcnQgeyBCZWZvcmVEYWlseUNoYWxsZW5nZUVuZEVmZmVjdCB9IGZyb20gJy4uL0JlZm9yZURhaWx5Q2hhbGxlbmdlRW5kRWZmZWN0JztcbmltcG9ydCB7IENsZWFuVmlld0VmZmVjdCB9IGZyb20gJy4uL0NsZWFuVmlld0VmZmVjdCc7XG5pbXBvcnQgeyBEYWlseUNoYWxsZW5nZUVuZEVmZmVjdCB9IGZyb20gJy4uL0RhaWx5Q2hhbGxlbmdlRW5kRWZmZWN0JztcbmltcG9ydCB7IEVuZEVmZmVjdCB9IGZyb20gJy4uL0VuZEVmZmVjdCc7XG5pbXBvcnQgeyBTa2lwQXV0b01lcmdlRWZmZWN0IH0gZnJvbSAnLi4vU2tpcEF1dG9NZXJnZUVmZmVjdCc7XG5pbXBvcnQgeyBUcmF2ZWxFbmRFZmZlY3QgfSBmcm9tICcuLi9UcmF2ZWxFbmRFZmZlY3QnO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFNraXBBdXRvTWVyZ2UgZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBleGN1dGUoZSkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIG8gPSB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIG4gPSAodGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLCBvLnVuc2VsZWN0QWxsVGlsZUlkcygpKTtcbiAgICBuICYmIG4ubGVuZ3RoID4gMCAmJiBuLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHQucHVzaFNlbGVjdEVmZmVjdChlLCB0cnVlKTtcbiAgICB9KTtcbiAgICB2YXIgaSA9IG5ldyBTa2lwQXV0b01lcmdlRWZmZWN0KHtcbiAgICAgIHR5cGU6IGUudHlwZVxuICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdChpLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgICB2YXIgbCA9IG8uZ2V0QWxsQ2FyZFRpbGVzKCksXG4gICAgICBzID0gbC5sZW5ndGg7XG4gICAgaWYgKDAgIT09IHMpIHtcbiAgICAgIGZvciAodmFyIGMgPSBNYXRoLmZsb29yKHMgLyAyKSwgcCA9IDA7IHAgPCBjOyBwKyspIHtcbiAgICAgICAgdGhpcy5nYW1lQ29udGV4dC5jb21ib01vZGlmaWVyLmFkZENvbWJvKDEpO1xuICAgICAgICB0aGlzLmdhbWVDb250ZXh0LnNjb3JlTW9kaWZpZXIuY2FsQWRkU2NvcmUoKTtcbiAgICAgIH1cbiAgICAgIHZhciBmID0gW107XG4gICAgICBsLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUuaXNWYWxpZCkge1xuICAgICAgICAgIGUuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgIGYucHVzaChlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBvLm9uQ2xlYXIoZik7XG4gICAgICB2YXIgaCA9IG5ldyBDbGVhblZpZXdFZmZlY3Qoe30pO1xuICAgICAgdGhpcy5wdXNoRWZmZWN0KGgsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgICAgIG8udXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICAgICAgdGhpcy5maW5pc2hTa2lwQW5kV2luKGUpO1xuICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5FZmZlY3RfU2tpcEF1dG9NZXJnZSwgdGhpcyk7XG4gICAgfVxuICB9XG4gIGZpbmlzaFNraXBBbmRXaW4oKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdhbWVDb250cm9sbGVyLmdhbWVUaW1lRGF0YS50aW1lLFxuICAgICAgdCA9IHRoaXMuZ2FtZUNvbnRleHQuZ2FtZVR5cGU7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLnVwZGF0ZUF2Z0NsZWFySW50ZXJ2YWxzKCk7XG4gICAgaWYgKHQgPT09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UpIHtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2FtZU1vZGlmaWVyLm1vZGlmeVdpbkZvckRhaWx5Q2hhbGxlbmdlKGUpO1xuICAgICAgdmFyIG8gPSB0aGlzLnB1c2hCZWZvcmVEYWlseUNoYWxsZW5nZUVuZEVmZmVjdCgpO1xuICAgICAgdGhpcy5wdXNoRGFpbHlDaGFsbGVuZ2VFbmRFZmZlY3Qobyk7XG4gICAgfSBlbHNlIGlmICh0ID09PSBNakdhbWVUeXBlLlRyYXZlbCkge1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC5nYW1lTW9kaWZpZXIubW9kaWZ5V2luRm9yVHJhdmVsKGUpO1xuICAgICAgdGhpcy5wdXNoVHJhdmVsRW5kRWZmZWN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2FtZU1vZGlmaWVyLm1vZGlmeVdpbihlKTtcbiAgICAgIG8gPSB0aGlzLnB1c2hCZWZvcmVFbmRFZmZlY3QoKTtcbiAgICAgIHRoaXMucHVzaE5vcm1hbEVuZEVmZmVjdChvKTtcbiAgICB9XG4gIH1cbiAgcHVzaEJlZm9yZUVuZEVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBCZWZvcmVFbmRFZmZlY3Qoe30pO1xuICAgIHJldHVybiB0aGlzLnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIHB1c2hOb3JtYWxFbmRFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgbyA9IG5ldyBFbmRFZmZlY3Qoe1xuICAgICAgICBzY29yZTogdC5nZXRTY29yZSgpLFxuICAgICAgICBzZXR0bGVtZW50U2NvcmU6IHQuZ2V0U2V0dGxlbWVudFNjb3JlKCksXG4gICAgICAgIHBlcmZlY3RNYXhTY29yZTogdGhpcy5nYW1lQ29udGV4dC5zY29yZU1vZGlmaWVyLmdldFBlcmZlY3RNYXhTY29yZSgpLFxuICAgICAgICBjdXJMdjogdC5nZXRMZXZlbElkKClcbiAgICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdChvLCBFSW5zZXJ0VHlwZS5TZXJpYWwsIGUubmV3RWZmZWN0SWQsIGZhbHNlKTtcbiAgfVxuICBwdXNoQmVmb3JlRGFpbHlDaGFsbGVuZ2VFbmRFZmZlY3QoKSB7XG4gICAgdmFyIGUgPSBuZXcgQmVmb3JlRGFpbHlDaGFsbGVuZ2VFbmRFZmZlY3Qoe30pO1xuICAgIHJldHVybiB0aGlzLnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIHB1c2hEYWlseUNoYWxsZW5nZUVuZEVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCksXG4gICAgICBvID0gbmV3IERhaWx5Q2hhbGxlbmdlRW5kRWZmZWN0KHtcbiAgICAgICAgc2NvcmU6IHQuZ2V0U2NvcmUoKSxcbiAgICAgICAgc2V0dGxlbWVudFNjb3JlOiB0LmdldFNldHRsZW1lbnRTY29yZSgpLFxuICAgICAgICBwZXJmZWN0TWF4U2NvcmU6IHRoaXMuZ2FtZUNvbnRleHQuc2NvcmVNb2RpZmllci5nZXRQZXJmZWN0TWF4U2NvcmUoKSxcbiAgICAgICAgY2hhbGxlbmdlRGF0ZTogdC5nZXREYWlseUNoYWxsZW5nZVRpbWVzdGFtcCgpXG4gICAgICB9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QobywgRUluc2VydFR5cGUuU2VyaWFsLCBlLm5ld0VmZmVjdElkKTtcbiAgfVxuICBwdXNoVHJhdmVsRW5kRWZmZWN0KCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8sXG4gICAgICBuID0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgaSA9IG51bGwgIT09IChvID0gbnVsbCA9PT0gKHQgPSBudWxsID09PSAoZSA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNvbGxlY3RTeXN0ZW0pIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0QWxsQ29sbGVjdERldGFpbHMoKSkgJiYgdm9pZCAwICE9PSBvID8gbyA6IFtdLFxuICAgICAgYSA9IG5ldyBUcmF2ZWxFbmRFZmZlY3Qoe1xuICAgICAgICBjdXJMdjogbi5nZXRMZXZlbElkKCksXG4gICAgICAgIGNvbGxlY3RzOiBpXG4gICAgICB9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QoYSwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG59Il19