"use strict";
cc._RF.push(module, '67ee1EYfUJOgqfPHNFGrsyr', 'AvatarCollectModel');
// subpackages/r_avatarCollection/Scripts/AvatarCollectModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Level2MaxString = exports.ID_BASE = void 0;
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Model_1 = require("../../../Scripts/framework/data/Model");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var n;
exports.ID_BASE = 100000000;
(n = {})["mainRes######gameplay_special_flower"] = exports.ID_BASE + 1;
n["mainRes######gameplay_special_knitting"] = exports.ID_BASE + 2;
n["mainRes######gameplay_special_snow"] = exports.ID_BASE + 3;
n["mainRes######gameplay_special_teacup"] = exports.ID_BASE + 4;
n["mainRes######gameplay_special_violin"] = exports.ID_BASE + 5;
n["r_newRankCard######gameplay_special_flower"] = exports.ID_BASE + 6;
n["r_newRankCard######gameplay_special_knitting"] = exports.ID_BASE + 7;
n["r_newRankCard######gameplay_special_snow"] = exports.ID_BASE + 8;
n["r_newRankCard######gameplay_special_teacup"] = exports.ID_BASE + 9;
n["r_newRankCard######gameplay_special_violin"] = exports.ID_BASE + 10;
var u = n;
exports.Level2MaxString = "10,12;15,20;20,24;25,30;30,36;40,48;50,54";
var AvatarCollectModel = /** @class */ (function (_super) {
    __extends(AvatarCollectModel, _super);
    function AvatarCollectModel() {
        var _this = _super.call(this) || this;
        _this._isAvatarCollectionOpen = false;
        _this._isAvatarDisplayOpen = false;
        _this.loadFromCache();
        return _this;
    }
    AvatarCollectModel.prototype.setIsAvatarCollectionOpen = function (t) {
        this._isAvatarCollectionOpen = t;
    };
    AvatarCollectModel.prototype.isAvatarCollectionOpen = function () {
        return this._isAvatarCollectionOpen;
    };
    AvatarCollectModel.prototype.setIsAvatarDisplayOpen = function (t) {
        this._isAvatarDisplayOpen = t;
    };
    AvatarCollectModel.prototype.isAvatarDisplayOpen = function () {
        return this._isAvatarDisplayOpen;
    };
    AvatarCollectModel.prototype.getData = function () {
        return this.localData;
    };
    AvatarCollectModel.prototype.clearLocalData = function () {
        this.localData.collectedCardMap = {};
    };
    AvatarCollectModel.prototype.loadFromCache = function () {
        this.localData.collectedCardMap = null == (t = this.localData.collectedCardMap) || "string" == typeof t && 0 == t.length ? {} : this.localData.collectedCardMap;
        var t;
    };
    AvatarCollectModel.prototype.isRankUnlock = function () {
        var t, e, a = mj.getClassByName("RankTrait");
        if (a && a.getInstance()) {
            var r = null === (e = null === (t = a.getInstance().traitData) || void 0 === t ? void 0 : t.config) || void 0 === e ? void 0 : e.unLockLevel, n = this.getCurrentNormalLevel();
            if ("number" == typeof r)
                return n > r;
        }
        return false;
    };
    AvatarCollectModel.prototype.getCurrentNormalLevel = function () {
        return UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId();
    };
    AvatarCollectModel.prototype.getRankModel = function () {
        var t = mj.getClassByName("RankModel");
        return null == t ? void 0 : t.getInstance();
    };
    AvatarCollectModel.prototype.getAvatarCollectionTrait = function () {
        var t = mj.getClassByName("AvatarCollectionTrait");
        return null == t ? void 0 : t.getInstance();
    };
    AvatarCollectModel.prototype.getFinishedAvatarList = function () {
        return Object.values(this.localData.collectedCardMap).filter(function (t) {
            return t.curCount >= t.maxCount && t.headId > exports.ID_BASE;
        }).map(function (t) {
            return t.headId;
        });
    };
    AvatarCollectModel.prototype.getDefaultAvatarList = function () {
        var t = DataReader_1.DataReader.getList("headConfig");
        return t && 0 !== t.length ? t.map(function (t) {
            return t.ID;
        }) : [1];
    };
    AvatarCollectModel.prototype.getColMapRelation = function () {
        return u;
    };
    AvatarCollectModel.prototype.getHeadId = function (t, e) {
        if (e === void 0) { e = "mainRes"; }
        return u[e + "######" + t] || -1;
    };
    AvatarCollectModel.prototype.getHeadInfo = function (t) {
        for (var e in this.localData.collectedCardMap) {
            var a = this.localData.collectedCardMap[e];
            if (a.headId == t)
                return a;
        }
        return null;
    };
    AvatarCollectModel = __decorate([
        mj.class("AvatarCollectModel")
    ], AvatarCollectModel);
    return AvatarCollectModel;
}(Model_1.default));
exports.default = AvatarCollectModel;

cc._RF.pop();