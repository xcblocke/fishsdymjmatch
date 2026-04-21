"use strict";
cc._RF.push(module, 'f569b6iDxpK4ZFy4YYodHIJ', 'LevelBoxModel');
// subpackages/l_levelBox/Scripts/LevelBoxModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../../../Scripts/framework/data/Model");
var LevelBoxTypes_1 = require("./LevelBoxTypes");
var LevelBoxModel = /** @class */ (function (_super) {
    __extends(LevelBoxModel, _super);
    function LevelBoxModel() {
        var _this = _super.call(this) || this;
        _this.isLocalEmpty(_this.localData.curType) && (_this.localData.curType = LevelBoxTypes_1.ELevelBoxCondType.None);
        _this.isLocalEmpty(_this.localData.progress) && (_this.localData.progress = 0);
        _this.isLocalEmpty(_this.localData.rewardCount) && (_this.localData.rewardCount = 0);
        _this.isLocalEmpty(_this.localData.curBoxLimits) && (_this.localData.curBoxLimits = []);
        return _this;
    }
    LevelBoxModel.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    LevelBoxModel.prototype.setNewBox = function (t) {
        this.localData.curType = t;
        this.localData.progress = 0;
        this.localData.rewardCount++;
    };
    LevelBoxModel.prototype.setProgress = function (t) {
        this.localData.progress = t;
    };
    LevelBoxModel.prototype.addProgress = function () {
        this.localData.progress++;
    };
    LevelBoxModel.prototype.getCurBox = function () {
        return this.localData.curType;
    };
    LevelBoxModel.prototype.getProgress = function () {
        return this.localData.progress;
    };
    LevelBoxModel.prototype.getRewardCount = function () {
        return this.localData.rewardCount;
    };
    LevelBoxModel.prototype.getCurBoxLimits = function (t) {
        t && t.length > 0 && this.localData.curBoxLimits.length !== t.length && (this.localData.curBoxLimits = t);
        return this.localData.curBoxLimits;
    };
    LevelBoxModel.prototype.setCurBoxLimits = function (t) {
        this.localData.curBoxLimits = t;
    };
    __decorate([
        mj.traitEvent("LevelBoxMdl_setNewBox")
    ], LevelBoxModel.prototype, "setNewBox", null);
    LevelBoxModel = __decorate([
        mj.class("LevelBoxModel")
    ], LevelBoxModel);
    return LevelBoxModel;
}(Model_1.default));
exports.default = LevelBoxModel;

cc._RF.pop();