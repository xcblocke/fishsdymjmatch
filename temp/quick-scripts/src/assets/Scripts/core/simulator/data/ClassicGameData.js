"use strict";
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