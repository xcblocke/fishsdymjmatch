"use strict";
cc._RF.push(module, '69f32cFJN9LkJ8Dc57bdhwN', 'TravelGameData');
// Scripts/core/simulator/data/TravelGameData.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var GameData_1 = require("./GameData");
var TravelGameData = /** @class */ (function (_super) {
    __extends(TravelGameData, _super);
    function TravelGameData() {
        var _this = _super.call(this) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Travel;
        _this._isAutoMerging = false;
        _this.isLocalEmpty(_this.localData.collectData) && (_this.localData.collectData = "");
        return _this;
    }
    TravelGameData.prototype.setJourneyType = function (e) {
        this.localData.journeyType = e;
    };
    TravelGameData.prototype.getJourneyType = function () {
        return this.localData.journeyType;
    };
    TravelGameData.prototype.getCollectData = function () {
        return this.localData.collectData;
    };
    TravelGameData.prototype.setCollectData = function (e) {
        this.localData.collectData = e;
        this.localData.lastUpdateTime = Date.now();
    };
    TravelGameData.prototype.setAutoMerging = function (e) {
        this._isAutoMerging = e;
    };
    TravelGameData.prototype.isAutoMerging = function () {
        return this._isAutoMerging;
    };
    TravelGameData.prototype.resetGameData = function () {
        _super.prototype.resetGameData.call(this);
        this.localData.collectData = "";
        this._isAutoMerging = false;
    };
    TravelGameData.prototype.resetTravel = function () {
        this.resetGameData();
        this.localData.levelId = 1;
        this.localData.currentLevelId = 1;
        this.localData.levelData = "";
        this.localData.originalLevelData = "";
        this.localData.originalLevelDataWithSpecialCards = "";
    };
    TravelGameData = __decorate([
        mj.class("TravelGameData")
    ], TravelGameData);
    return TravelGameData;
}(GameData_1.default));
exports.default = TravelGameData;

cc._RF.pop();