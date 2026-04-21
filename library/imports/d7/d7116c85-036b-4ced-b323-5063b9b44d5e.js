"use strict";
cc._RF.push(module, 'd7116yFA2tM7bMjUGO5tE1e', 'NormalGameData');
// Scripts/core/simulator/data/NormalGameData.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var GameData_1 = require("./GameData");
var NormalGameData = /** @class */ (function (_super) {
    __extends(NormalGameData, _super);
    function NormalGameData() {
        var _this = _super.call(this) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Normal;
        _this.isLocalEmpty(_this.localData.rankCardCount) && (_this.localData.rankCardCount = 0);
        _this.isLocalEmpty(_this.localData.isBreakBest) && (_this.localData.isBreakBest = false);
        _this.isLocalEmpty(_this.localData.preBestScore) && (_this.localData.preBestScore = 0);
        return _this;
    }
    NormalGameData.prototype.resetGameData = function () {
        _super.prototype.resetGameData.call(this);
        this.localData.isBreakBest = false;
        this.localData.preBestScore = this.localData.maxScore;
    };
    NormalGameData.prototype.setRankCardCount = function (e) {
        this.localData.rankCardCount = e;
    };
    NormalGameData.prototype.getRankCardCount = function () {
        return this.localData.rankCardCount;
    };
    NormalGameData.prototype.updateMaxScore = function (t) {
        _super.prototype.updateMaxScore.call(this, t);
        t > this.localData.preBestScore && !this.localData.isBreakBest && (this.localData.isBreakBest = true);
    };
    NormalGameData.prototype.getPreBestScore = function () {
        return this.localData.preBestScore;
    };
    NormalGameData.prototype.isBreakBest = function () {
        return this.localData.isBreakBest;
    };
    NormalGameData = __decorate([
        mj.class("NormalGameData")
    ], NormalGameData);
    return NormalGameData;
}(GameData_1.default));
exports.default = NormalGameData;

cc._RF.pop();