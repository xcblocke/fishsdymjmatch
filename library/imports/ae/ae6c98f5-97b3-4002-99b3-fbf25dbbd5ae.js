"use strict";
cc._RF.push(module, 'ae6c9j1l7NAApmz+/Jdu9Wu', 'DailyChallengeGameData');
// Scripts/core/simulator/data/DailyChallengeGameData.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var GameData_1 = require("./GameData");
var DailyChallengeGameData = /** @class */ (function (_super) {
    __extends(DailyChallengeGameData, _super);
    function DailyChallengeGameData() {
        var _this = _super.call(this) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.DailyChallenge;
        _this.isLocalEmpty(_this.localData.dailyChallengeTimestamp) && (_this.localData.dailyChallengeTimestamp = "");
        return _this;
    }
    DailyChallengeGameData.prototype.getDailyChallengeTimestamp = function () {
        return this.localData.dailyChallengeTimestamp;
    };
    DailyChallengeGameData.prototype.setDailyChallengeTimestamp = function (e) {
        this.localData.dailyChallengeTimestamp = e;
        this.localData.lastUpdateTime = Date.now();
    };
    DailyChallengeGameData.prototype.resetGameData = function () {
        _super.prototype.resetGameData.call(this);
        this.localData.originalLevelData = "";
        this.localData.originalLevelDataWithSpecialCards = "";
    };
    DailyChallengeGameData = __decorate([
        mj.class("DailyChallengeGameData")
    ], DailyChallengeGameData);
    return DailyChallengeGameData;
}(GameData_1.default));
exports.default = DailyChallengeGameData;

cc._RF.pop();