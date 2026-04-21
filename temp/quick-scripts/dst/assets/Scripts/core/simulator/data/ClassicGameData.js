
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/data/ClassicGameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef4e8OH+kJE/auTgVOEPOLB', 'ClassicGameData');
// Scripts/core/simulator/data/ClassicGameData.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var GameData_1 = require("./GameData");
var GameUtils_1 = require("../util/GameUtils");
var ClassicGameData = /** @class */ (function (_super) {
    __extends(ClassicGameData, _super);
    function ClassicGameData() {
        var _this = _super.call(this) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Classic;
        _this._swimlaneStartTime = Date.now();
        _this.isLocalEmpty(_this.localData.currentBatchId) && (_this.localData.currentBatchId = 0);
        _this.isLocalEmpty(_this.localData.waitExcuteDrop) && (_this.localData.waitExcuteDrop = 0);
        _this.isLocalEmpty(_this.localData.batchInfosMap) && (_this.localData.batchInfosMap = {});
        _this.isLocalEmpty(_this.localData.tileBatchInfos) && (_this.localData.tileBatchInfos = []);
        _this.isLocalEmpty(_this.localData.reviveCount) && (_this.localData.reviveCount = 0);
        _this.isLocalEmpty(_this.localData.scoreCombo) && (_this.localData.scoreCombo = 0);
        _this.isLocalEmpty(_this.localData.preBestScore) && (_this.localData.preBestScore = 0);
        _this.isLocalEmpty(_this.localData.preTodayScore) && (_this.localData.preTodayScore = [0, -1]);
        _this.isLocalEmpty(_this.localData.preWeekScore) && (_this.localData.preWeekScore = [0, -1]);
        _this.isLocalEmpty(_this.localData.todayScore) && (_this.localData.todayScore = [0, -1]);
        _this.isLocalEmpty(_this.localData.weekScore) && (_this.localData.weekScore = [0, -1]);
        _this.isLocalEmpty(_this.localData.swimlaneRotationCount) && (_this.localData.swimlaneRotationCount = 0);
        _this.isLocalEmpty(_this.localData.isBreakBest) && (_this.localData.isBreakBest = false);
        _this.isLocalEmpty(_this.localData.isBreakToday) && (_this.localData.isBreakToday = false);
        _this.isLocalEmpty(_this.localData.isBreakWeek) && (_this.localData.isBreakWeek = false);
        return _this;
    }
    ClassicGameData.prototype.setWaitExcuteDrop = function (e) {
        this.localData.waitExcuteDrop = e;
    };
    ClassicGameData.prototype.getWaitExcuteDrop = function () {
        return this.localData.waitExcuteDrop;
    };
    ClassicGameData.prototype.resetWaitExcuteDrop = function () {
        this.localData.waitExcuteDrop = 0;
    };
    ClassicGameData.prototype.getGameId = function () {
        return this.localData.levelIndex + ":1";
    };
    ClassicGameData.prototype.getSwimlaneTimeSeconds = function () {
        return Math.floor((Date.now() - this._swimlaneStartTime) / 1000);
    };
    ClassicGameData.prototype.resetSwimlaneTime = function () {
        this._swimlaneStartTime = Date.now();
    };
    ClassicGameData.prototype.getSwimlaneRotationCount = function () {
        return this.localData.swimlaneRotationCount || 0;
    };
    ClassicGameData.prototype.incrementSwimlaneRotationCount = function () {
        var e = this.localData.swimlaneRotationCount || 0;
        this.localData.swimlaneRotationCount = e + 1;
    };
    ClassicGameData.prototype.setCurrentBatchId = function (e) {
        this.localData.currentBatchId = e;
    };
    ClassicGameData.prototype.getCurrentBatchId = function () {
        return this.localData.currentBatchId;
    };
    ClassicGameData.prototype.getNextBatchId = function () {
        return this.getCurrentBatchId() + 1;
    };
    ClassicGameData.prototype.generateNewBatchId = function () {
        var e = Object.keys(this.localData.batchInfosMap).map(Number), t = this.getCurrentBatchId(), o = e.length > 0 ? Math.max.apply(Math, __spreadArrays(e)) : t;
        return Math.max(t, o) + 1;
    };
    ClassicGameData.prototype.addBatchInfo = function (e, t) {
        this.localData.batchInfosMap[e] = t;
        this.localData.batchInfosMap = this.localData.batchInfosMap;
    };
    ClassicGameData.prototype.getLevelStrByBatchId = function (e) {
        return this.localData.batchInfosMap[e];
    };
    ClassicGameData.prototype.removeNextLevelStr = function (e) {
        if (this.localData.batchInfosMap[e]) {
            delete this.localData.batchInfosMap[e];
            this.localData.batchInfosMap = this.localData.batchInfosMap;
        }
    };
    ClassicGameData.prototype.saveTileBatchInfos = function (e) {
        this.localData.tileBatchInfos = e;
    };
    ClassicGameData.prototype.getBatchIdByXyz = function (e, t, o) {
        var n = e + "-" + t + "-" + o, i = this.localData.tileBatchInfos.find(function (e) {
            return e.key === n;
        });
        return i ? i.batchId : 0;
    };
    ClassicGameData.prototype.getNextBatchInfo = function () {
        var e = this.getCurrentBatchId();
        return {
            batchId: e + 1,
            levelStr: this.localData.batchInfosMap[e + 1]
        };
    };
    ClassicGameData.prototype.resetGameData = function () {
        _super.prototype.resetGameData.call(this);
        this.localData.waitExcuteDrop = 0;
        this.localData.batchInfosMap = {};
        this.localData.currentBatchId = 0;
        this.localData.swimlaneRotationCount = 0;
        this.localData.tileBatchInfos = [];
        this.localData.reviveCount = 0;
        this.localData.scoreCombo = 0;
        this.localData.preBestScore = this.localData.maxScore;
        this.localData.preTodayScore = this.localData.todayScore;
        this.localData.preWeekScore = this.localData.weekScore;
        this.localData.isBreakBest = false;
        this.localData.isBreakToday = false;
        this.localData.isBreakWeek = false;
        this.localData.tileTypes = "";
        this.localData.tileId2Type = "";
        this.localData.cardId2Type = "";
        this.localData.tileTypesExtra = "";
        this.localData.replaceInfo = "";
    };
    ClassicGameData.prototype.addScore = function (t, o) {
        if (o === void 0) { o = true; }
        _super.prototype.addScore.call(this, t, o);
        var n = this.localData.score, i = this.localData.preBestScore;
        i > 0 && n > i && !this.localData.isBreakBest && (this.localData.isBreakBest = true);
        var r = Date.now(), l = __read(this.localData.preTodayScore, 2), s = l[0], c = l[1], p = __read(this.localData.preWeekScore, 2), f = p[0], d = p[1];
        if (GameUtils_1.default.isSameDay(r, c)) {
            n > s && !this.localData.isBreakToday && (this.localData.isBreakToday = true);
            n > this.localData.todayScore[0] && (this.localData.todayScore = [n, r]);
        }
        else
            this.localData.todayScore = [n, r];
        if (GameUtils_1.default.isSameWeek(r, d)) {
            n > f && !this.localData.isBreakWeek && (this.localData.isBreakWeek = true);
            n > this.localData.weekScore[0] && (this.localData.weekScore = [n, r]);
        }
        else
            this.localData.weekScore = [n, r];
    };
    ClassicGameData.prototype.getReviveCount = function () {
        return this.localData.reviveCount;
    };
    ClassicGameData.prototype.addReviveCount = function () {
        this.localData.reviveCount += 1;
    };
    ClassicGameData.prototype.getScoreCombo = function () {
        return this.localData.scoreCombo || 0;
    };
    ClassicGameData.prototype.addScoreCombo = function (e) {
        if (e === void 0) { e = 1; }
        this.localData.scoreCombo = (this.localData.scoreCombo || 0) + e;
    };
    ClassicGameData.prototype.resetScoreCombo = function () {
        this.localData.scoreCombo = 0;
    };
    ClassicGameData.prototype.addComboNum = function (t, o) {
        if (o === void 0) { o = true; }
        _super.prototype.addComboNum.call(this, t, o);
        this.addScoreCombo(t);
    };
    ClassicGameData.prototype.resetComboNum = function () {
        _super.prototype.resetComboNum.call(this);
        this.resetScoreCombo();
    };
    ClassicGameData.prototype.isBreakBest = function () {
        return this.localData.isBreakBest;
    };
    ClassicGameData.prototype.isBreakToday = function () {
        return this.localData.isBreakToday;
    };
    ClassicGameData.prototype.isBreakWeek = function () {
        return this.localData.isBreakWeek;
    };
    ClassicGameData.prototype.getPreBestScore = function () {
        return this.localData.preBestScore;
    };
    ClassicGameData.prototype.getPreTodayScore = function () {
        return this.localData.preTodayScore;
    };
    ClassicGameData.prototype.getPreWeekScore = function () {
        return this.localData.preWeekScore;
    };
    ClassicGameData.prototype.getTodayScore = function () {
        return this.localData.todayScore;
    };
    ClassicGameData.prototype.getWeekScore = function () {
        return this.localData.weekScore;
    };
    ClassicGameData = __decorate([
        mj.class("ClassicGameData")
    ], ClassicGameData);
    return ClassicGameData;
}(GameData_1.default));
exports.default = ClassicGameData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvQ2xhc3NpY0dhbWVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBdUQ7QUFDdkQsdUNBQWtDO0FBQ2xDLCtDQUEwQztBQUUxQztJQUE2QyxtQ0FBUTtJQUduRDtRQUFBLFlBQ0UsaUJBQU8sU0FnQlI7UUFuQkQsZUFBUyxHQUFHLDBCQUFVLENBQUMsT0FBTyxDQUFDO1FBQy9CLHdCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUc5QixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2RixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6RixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwRixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFT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QUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQW5Ma0IsZUFBZTtRQURuQyxFQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO09BQ1AsZUFBZSxDQW9MbkM7SUFBRCxzQkFBQztDQXBMRCxBQW9MQyxDQXBMNEMsa0JBQVEsR0FvTHBEO2tCQXBMb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBHYW1lRGF0YSBmcm9tICcuL0dhbWVEYXRhJztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vdXRpbC9HYW1lVXRpbHMnO1xuQG1qLmNsYXNzKFwiQ2xhc3NpY0dhbWVEYXRhXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc2ljR2FtZURhdGEgZXh0ZW5kcyBHYW1lRGF0YSB7XG4gIF9nYW1lVHlwZSA9IE1qR2FtZVR5cGUuQ2xhc3NpYztcbiAgX3N3aW1sYW5lU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5jdXJyZW50QmF0Y2hJZCkgJiYgKHRoaXMubG9jYWxEYXRhLmN1cnJlbnRCYXRjaElkID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEud2FpdEV4Y3V0ZURyb3ApICYmICh0aGlzLmxvY2FsRGF0YS53YWl0RXhjdXRlRHJvcCA9IDApO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmJhdGNoSW5mb3NNYXApICYmICh0aGlzLmxvY2FsRGF0YS5iYXRjaEluZm9zTWFwID0ge30pO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnRpbGVCYXRjaEluZm9zKSAmJiAodGhpcy5sb2NhbERhdGEudGlsZUJhdGNoSW5mb3MgPSBbXSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEucmV2aXZlQ291bnQpICYmICh0aGlzLmxvY2FsRGF0YS5yZXZpdmVDb3VudCA9IDApO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnNjb3JlQ29tYm8pICYmICh0aGlzLmxvY2FsRGF0YS5zY29yZUNvbWJvID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEucHJlQmVzdFNjb3JlKSAmJiAodGhpcy5sb2NhbERhdGEucHJlQmVzdFNjb3JlID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEucHJlVG9kYXlTY29yZSkgJiYgKHRoaXMubG9jYWxEYXRhLnByZVRvZGF5U2NvcmUgPSBbMCwgLTFdKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5wcmVXZWVrU2NvcmUpICYmICh0aGlzLmxvY2FsRGF0YS5wcmVXZWVrU2NvcmUgPSBbMCwgLTFdKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS50b2RheVNjb3JlKSAmJiAodGhpcy5sb2NhbERhdGEudG9kYXlTY29yZSA9IFswLCAtMV0pO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLndlZWtTY29yZSkgJiYgKHRoaXMubG9jYWxEYXRhLndlZWtTY29yZSA9IFswLCAtMV0pO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnN3aW1sYW5lUm90YXRpb25Db3VudCkgJiYgKHRoaXMubG9jYWxEYXRhLnN3aW1sYW5lUm90YXRpb25Db3VudCA9IDApO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmlzQnJlYWtCZXN0KSAmJiAodGhpcy5sb2NhbERhdGEuaXNCcmVha0Jlc3QgPSBmYWxzZSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuaXNCcmVha1RvZGF5KSAmJiAodGhpcy5sb2NhbERhdGEuaXNCcmVha1RvZGF5ID0gZmFsc2UpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmlzQnJlYWtXZWVrKSAmJiAodGhpcy5sb2NhbERhdGEuaXNCcmVha1dlZWsgPSBmYWxzZSk7XG4gIH1cbiAgc2V0V2FpdEV4Y3V0ZURyb3AoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLndhaXRFeGN1dGVEcm9wID0gZTtcbiAgfVxuICBnZXRXYWl0RXhjdXRlRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEud2FpdEV4Y3V0ZURyb3A7XG4gIH1cbiAgcmVzZXRXYWl0RXhjdXRlRHJvcCgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS53YWl0RXhjdXRlRHJvcCA9IDA7XG4gIH1cbiAgZ2V0R2FtZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sZXZlbEluZGV4ICsgXCI6MVwiO1xuICB9XG4gIGdldFN3aW1sYW5lVGltZVNlY29uZHMoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKERhdGUubm93KCkgLSB0aGlzLl9zd2ltbGFuZVN0YXJ0VGltZSkgLyAxMDAwKTtcbiAgfVxuICByZXNldFN3aW1sYW5lVGltZSgpIHtcbiAgICB0aGlzLl9zd2ltbGFuZVN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gIH1cbiAgZ2V0U3dpbWxhbmVSb3RhdGlvbkNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5zd2ltbGFuZVJvdGF0aW9uQ291bnQgfHwgMDtcbiAgfVxuICBpbmNyZW1lbnRTd2ltbGFuZVJvdGF0aW9uQ291bnQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmxvY2FsRGF0YS5zd2ltbGFuZVJvdGF0aW9uQ291bnQgfHwgMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5zd2ltbGFuZVJvdGF0aW9uQ291bnQgPSBlICsgMTtcbiAgfVxuICBzZXRDdXJyZW50QmF0Y2hJZChlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuY3VycmVudEJhdGNoSWQgPSBlO1xuICB9XG4gIGdldEN1cnJlbnRCYXRjaElkKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5jdXJyZW50QmF0Y2hJZDtcbiAgfVxuICBnZXROZXh0QmF0Y2hJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50QmF0Y2hJZCgpICsgMTtcbiAgfVxuICBnZW5lcmF0ZU5ld0JhdGNoSWQoKSB7XG4gICAgdmFyIGUgPSBPYmplY3Qua2V5cyh0aGlzLmxvY2FsRGF0YS5iYXRjaEluZm9zTWFwKS5tYXAoTnVtYmVyKSxcbiAgICAgIHQgPSB0aGlzLmdldEN1cnJlbnRCYXRjaElkKCksXG4gICAgICBvID0gZS5sZW5ndGggPiAwID8gTWF0aC5tYXguYXBwbHkoTWF0aCwgWy4uLmVdKSA6IHQ7XG4gICAgcmV0dXJuIE1hdGgubWF4KHQsIG8pICsgMTtcbiAgfVxuICBhZGRCYXRjaEluZm8oZSwgdCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmJhdGNoSW5mb3NNYXBbZV0gPSB0O1xuICAgIHRoaXMubG9jYWxEYXRhLmJhdGNoSW5mb3NNYXAgPSB0aGlzLmxvY2FsRGF0YS5iYXRjaEluZm9zTWFwO1xuICB9XG4gIGdldExldmVsU3RyQnlCYXRjaElkKGUpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuYmF0Y2hJbmZvc01hcFtlXTtcbiAgfVxuICByZW1vdmVOZXh0TGV2ZWxTdHIoZSkge1xuICAgIGlmICh0aGlzLmxvY2FsRGF0YS5iYXRjaEluZm9zTWFwW2VdKSB7XG4gICAgICBkZWxldGUgdGhpcy5sb2NhbERhdGEuYmF0Y2hJbmZvc01hcFtlXTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmJhdGNoSW5mb3NNYXAgPSB0aGlzLmxvY2FsRGF0YS5iYXRjaEluZm9zTWFwO1xuICAgIH1cbiAgfVxuICBzYXZlVGlsZUJhdGNoSW5mb3MoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLnRpbGVCYXRjaEluZm9zID0gZTtcbiAgfVxuICBnZXRCYXRjaElkQnlYeXooZSwgdCwgbykge1xuICAgIHZhciBuID0gZSArIFwiLVwiICsgdCArIFwiLVwiICsgbyxcbiAgICAgIGkgPSB0aGlzLmxvY2FsRGF0YS50aWxlQmF0Y2hJbmZvcy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmtleSA9PT0gbjtcbiAgICAgIH0pO1xuICAgIHJldHVybiBpID8gaS5iYXRjaElkIDogMDtcbiAgfVxuICBnZXROZXh0QmF0Y2hJbmZvKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRDdXJyZW50QmF0Y2hJZCgpO1xuICAgIHJldHVybiB7XG4gICAgICBiYXRjaElkOiBlICsgMSxcbiAgICAgIGxldmVsU3RyOiB0aGlzLmxvY2FsRGF0YS5iYXRjaEluZm9zTWFwW2UgKyAxXVxuICAgIH07XG4gIH1cbiAgcmVzZXRHYW1lRGF0YSgpIHtcbiAgICBzdXBlci5yZXNldEdhbWVEYXRhLmNhbGwodGhpcyk7XG4gICAgdGhpcy5sb2NhbERhdGEud2FpdEV4Y3V0ZURyb3AgPSAwO1xuICAgIHRoaXMubG9jYWxEYXRhLmJhdGNoSW5mb3NNYXAgPSB7fTtcbiAgICB0aGlzLmxvY2FsRGF0YS5jdXJyZW50QmF0Y2hJZCA9IDA7XG4gICAgdGhpcy5sb2NhbERhdGEuc3dpbWxhbmVSb3RhdGlvbkNvdW50ID0gMDtcbiAgICB0aGlzLmxvY2FsRGF0YS50aWxlQmF0Y2hJbmZvcyA9IFtdO1xuICAgIHRoaXMubG9jYWxEYXRhLnJldml2ZUNvdW50ID0gMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5zY29yZUNvbWJvID0gMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5wcmVCZXN0U2NvcmUgPSB0aGlzLmxvY2FsRGF0YS5tYXhTY29yZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5wcmVUb2RheVNjb3JlID0gdGhpcy5sb2NhbERhdGEudG9kYXlTY29yZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5wcmVXZWVrU2NvcmUgPSB0aGlzLmxvY2FsRGF0YS53ZWVrU2NvcmU7XG4gICAgdGhpcy5sb2NhbERhdGEuaXNCcmVha0Jlc3QgPSBmYWxzZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5pc0JyZWFrVG9kYXkgPSBmYWxzZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5pc0JyZWFrV2VlayA9IGZhbHNlO1xuICAgIHRoaXMubG9jYWxEYXRhLnRpbGVUeXBlcyA9IFwiXCI7XG4gICAgdGhpcy5sb2NhbERhdGEudGlsZUlkMlR5cGUgPSBcIlwiO1xuICAgIHRoaXMubG9jYWxEYXRhLmNhcmRJZDJUeXBlID0gXCJcIjtcbiAgICB0aGlzLmxvY2FsRGF0YS50aWxlVHlwZXNFeHRyYSA9IFwiXCI7XG4gICAgdGhpcy5sb2NhbERhdGEucmVwbGFjZUluZm8gPSBcIlwiO1xuICB9XG4gIGFkZFNjb3JlKHQsIG8gPSB0cnVlKSB7XG4gICAgc3VwZXIuYWRkU2NvcmUuY2FsbCh0aGlzLCB0LCBvKTtcbiAgICB2YXIgbiA9IHRoaXMubG9jYWxEYXRhLnNjb3JlLFxuICAgICAgaSA9IHRoaXMubG9jYWxEYXRhLnByZUJlc3RTY29yZTtcbiAgICBpID4gMCAmJiBuID4gaSAmJiAhdGhpcy5sb2NhbERhdGEuaXNCcmVha0Jlc3QgJiYgKHRoaXMubG9jYWxEYXRhLmlzQnJlYWtCZXN0ID0gdHJ1ZSk7XG4gICAgdmFyIHIgPSBEYXRlLm5vdygpLFxuICAgICAgbCA9IF9fcmVhZCh0aGlzLmxvY2FsRGF0YS5wcmVUb2RheVNjb3JlLCAyKSxcbiAgICAgIHMgPSBsWzBdLFxuICAgICAgYyA9IGxbMV0sXG4gICAgICBwID0gX19yZWFkKHRoaXMubG9jYWxEYXRhLnByZVdlZWtTY29yZSwgMiksXG4gICAgICBmID0gcFswXSxcbiAgICAgIGQgPSBwWzFdO1xuICAgIGlmIChHYW1lVXRpbHMuaXNTYW1lRGF5KHIsIGMpKSB7XG4gICAgICBuID4gcyAmJiAhdGhpcy5sb2NhbERhdGEuaXNCcmVha1RvZGF5ICYmICh0aGlzLmxvY2FsRGF0YS5pc0JyZWFrVG9kYXkgPSB0cnVlKTtcbiAgICAgIG4gPiB0aGlzLmxvY2FsRGF0YS50b2RheVNjb3JlWzBdICYmICh0aGlzLmxvY2FsRGF0YS50b2RheVNjb3JlID0gW24sIHJdKTtcbiAgICB9IGVsc2UgdGhpcy5sb2NhbERhdGEudG9kYXlTY29yZSA9IFtuLCByXTtcbiAgICBpZiAoR2FtZVV0aWxzLmlzU2FtZVdlZWsociwgZCkpIHtcbiAgICAgIG4gPiBmICYmICF0aGlzLmxvY2FsRGF0YS5pc0JyZWFrV2VlayAmJiAodGhpcy5sb2NhbERhdGEuaXNCcmVha1dlZWsgPSB0cnVlKTtcbiAgICAgIG4gPiB0aGlzLmxvY2FsRGF0YS53ZWVrU2NvcmVbMF0gJiYgKHRoaXMubG9jYWxEYXRhLndlZWtTY29yZSA9IFtuLCByXSk7XG4gICAgfSBlbHNlIHRoaXMubG9jYWxEYXRhLndlZWtTY29yZSA9IFtuLCByXTtcbiAgfVxuICBnZXRSZXZpdmVDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEucmV2aXZlQ291bnQ7XG4gIH1cbiAgYWRkUmV2aXZlQ291bnQoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEucmV2aXZlQ291bnQgKz0gMTtcbiAgfVxuICBnZXRTY29yZUNvbWJvKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5zY29yZUNvbWJvIHx8IDA7XG4gIH1cbiAgYWRkU2NvcmVDb21ibyhlID0gMSkge1xuICAgIHRoaXMubG9jYWxEYXRhLnNjb3JlQ29tYm8gPSAodGhpcy5sb2NhbERhdGEuc2NvcmVDb21ibyB8fCAwKSArIGU7XG4gIH1cbiAgcmVzZXRTY29yZUNvbWJvKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLnNjb3JlQ29tYm8gPSAwO1xuICB9XG4gIGFkZENvbWJvTnVtKHQsIG8gPSB0cnVlKSB7XG4gICAgc3VwZXIuYWRkQ29tYm9OdW0uY2FsbCh0aGlzLCB0LCBvKTtcbiAgICB0aGlzLmFkZFNjb3JlQ29tYm8odCk7XG4gIH1cbiAgcmVzZXRDb21ib051bSgpIHtcbiAgICBzdXBlci5yZXNldENvbWJvTnVtLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZXNldFNjb3JlQ29tYm8oKTtcbiAgfVxuICBpc0JyZWFrQmVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuaXNCcmVha0Jlc3Q7XG4gIH1cbiAgaXNCcmVha1RvZGF5KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5pc0JyZWFrVG9kYXk7XG4gIH1cbiAgaXNCcmVha1dlZWsoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmlzQnJlYWtXZWVrO1xuICB9XG4gIGdldFByZUJlc3RTY29yZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEucHJlQmVzdFNjb3JlO1xuICB9XG4gIGdldFByZVRvZGF5U2NvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnByZVRvZGF5U2NvcmU7XG4gIH1cbiAgZ2V0UHJlV2Vla1Njb3JlKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5wcmVXZWVrU2NvcmU7XG4gIH1cbiAgZ2V0VG9kYXlTY29yZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEudG9kYXlTY29yZTtcbiAgfVxuICBnZXRXZWVrU2NvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLndlZWtTY29yZTtcbiAgfVxufSJdfQ==