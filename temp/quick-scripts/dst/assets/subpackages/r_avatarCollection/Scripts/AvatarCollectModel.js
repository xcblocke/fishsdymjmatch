
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_avatarCollection/Scripts/AvatarCollectModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2F2YXRhckNvbGxlY3Rpb24vU2NyaXB0cy9BdmF0YXJDb2xsZWN0TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYseUVBQXdFO0FBQ3hFLCtEQUEwRDtBQUMxRCxzRUFBaUU7QUFDakUsSUFBSSxDQUFDLENBQUM7QUFDSyxRQUFBLE9BQU8sR0FBRyxTQUFTLENBQUM7QUFDL0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsc0NBQXNDLENBQUMsR0FBRyxlQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQy9ELENBQUMsQ0FBQyx3Q0FBd0MsQ0FBQyxHQUFHLGVBQU8sR0FBRyxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFDLG9DQUFvQyxDQUFDLEdBQUcsZUFBTyxHQUFHLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQUMsc0NBQXNDLENBQUMsR0FBRyxlQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLGVBQU8sR0FBRyxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFDLDRDQUE0QyxDQUFDLEdBQUcsZUFBTyxHQUFHLENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQUMsOENBQThDLENBQUMsR0FBRyxlQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQywwQ0FBMEMsQ0FBQyxHQUFHLGVBQU8sR0FBRyxDQUFDLENBQUM7QUFDNUQsQ0FBQyxDQUFDLDRDQUE0QyxDQUFDLEdBQUcsZUFBTyxHQUFHLENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQUMsNENBQTRDLENBQUMsR0FBRyxlQUFPLEdBQUcsRUFBRSxDQUFDO0FBQy9ELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNDLFFBQUEsZUFBZSxHQUFHLDJDQUEyQyxDQUFDO0FBRXpFO0lBQWdELHNDQUFLO0lBR25EO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBTEQs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O2dCQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBNUVrQixrQkFBa0I7UUFEdEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztPQUNWLGtCQUFrQixDQTZFdEM7SUFBRCx5QkFBQztDQTdFRCxBQTZFQyxDQTdFK0MsZUFBSyxHQTZFcEQ7a0JBN0VvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0RhdGFSZWFkZXInO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvTW9kZWwnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbnZhciBuO1xuZXhwb3J0IHZhciBJRF9CQVNFID0gMTAwMDAwMDAwO1xuKG4gPSB7fSlbXCJtYWluUmVzIyMjIyMjZ2FtZXBsYXlfc3BlY2lhbF9mbG93ZXJcIl0gPSBJRF9CQVNFICsgMTtcbm5bXCJtYWluUmVzIyMjIyMjZ2FtZXBsYXlfc3BlY2lhbF9rbml0dGluZ1wiXSA9IElEX0JBU0UgKyAyO1xubltcIm1haW5SZXMjIyMjIyNnYW1lcGxheV9zcGVjaWFsX3Nub3dcIl0gPSBJRF9CQVNFICsgMztcbm5bXCJtYWluUmVzIyMjIyMjZ2FtZXBsYXlfc3BlY2lhbF90ZWFjdXBcIl0gPSBJRF9CQVNFICsgNDtcbm5bXCJtYWluUmVzIyMjIyMjZ2FtZXBsYXlfc3BlY2lhbF92aW9saW5cIl0gPSBJRF9CQVNFICsgNTtcbm5bXCJyX25ld1JhbmtDYXJkIyMjIyMjZ2FtZXBsYXlfc3BlY2lhbF9mbG93ZXJcIl0gPSBJRF9CQVNFICsgNjtcbm5bXCJyX25ld1JhbmtDYXJkIyMjIyMjZ2FtZXBsYXlfc3BlY2lhbF9rbml0dGluZ1wiXSA9IElEX0JBU0UgKyA3O1xubltcInJfbmV3UmFua0NhcmQjIyMjIyNnYW1lcGxheV9zcGVjaWFsX3Nub3dcIl0gPSBJRF9CQVNFICsgODtcbm5bXCJyX25ld1JhbmtDYXJkIyMjIyMjZ2FtZXBsYXlfc3BlY2lhbF90ZWFjdXBcIl0gPSBJRF9CQVNFICsgOTtcbm5bXCJyX25ld1JhbmtDYXJkIyMjIyMjZ2FtZXBsYXlfc3BlY2lhbF92aW9saW5cIl0gPSBJRF9CQVNFICsgMTA7XG52YXIgdSA9IG47XG5leHBvcnQgdmFyIExldmVsMk1heFN0cmluZyA9IFwiMTAsMTI7MTUsMjA7MjAsMjQ7MjUsMzA7MzAsMzY7NDAsNDg7NTAsNTRcIjtcbkBtai5jbGFzcyhcIkF2YXRhckNvbGxlY3RNb2RlbFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZhdGFyQ29sbGVjdE1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICBfaXNBdmF0YXJDb2xsZWN0aW9uT3BlbiA9IGZhbHNlO1xuICBfaXNBdmF0YXJEaXNwbGF5T3BlbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubG9hZEZyb21DYWNoZSgpO1xuICB9XG4gIHNldElzQXZhdGFyQ29sbGVjdGlvbk9wZW4odCkge1xuICAgIHRoaXMuX2lzQXZhdGFyQ29sbGVjdGlvbk9wZW4gPSB0O1xuICB9XG4gIGlzQXZhdGFyQ29sbGVjdGlvbk9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQXZhdGFyQ29sbGVjdGlvbk9wZW47XG4gIH1cbiAgc2V0SXNBdmF0YXJEaXNwbGF5T3Blbih0KSB7XG4gICAgdGhpcy5faXNBdmF0YXJEaXNwbGF5T3BlbiA9IHQ7XG4gIH1cbiAgaXNBdmF0YXJEaXNwbGF5T3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBdmF0YXJEaXNwbGF5T3BlbjtcbiAgfVxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YTtcbiAgfVxuICBjbGVhckxvY2FsRGF0YSgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5jb2xsZWN0ZWRDYXJkTWFwID0ge307XG4gIH1cbiAgbG9hZEZyb21DYWNoZSgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5jb2xsZWN0ZWRDYXJkTWFwID0gbnVsbCA9PSAodCA9IHRoaXMubG9jYWxEYXRhLmNvbGxlY3RlZENhcmRNYXApIHx8IFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgJiYgMCA9PSB0Lmxlbmd0aCA/IHt9IDogdGhpcy5sb2NhbERhdGEuY29sbGVjdGVkQ2FyZE1hcDtcbiAgICB2YXIgdDtcbiAgfVxuICBpc1JhbmtVbmxvY2soKSB7XG4gICAgdmFyIHQsXG4gICAgICBlLFxuICAgICAgYSA9IG1qLmdldENsYXNzQnlOYW1lKFwiUmFua1RyYWl0XCIpO1xuICAgIGlmIChhICYmIGEuZ2V0SW5zdGFuY2UoKSkge1xuICAgICAgdmFyIHIgPSBudWxsID09PSAoZSA9IG51bGwgPT09ICh0ID0gYS5nZXRJbnN0YW5jZSgpLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jb25maWcpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUudW5Mb2NrTGV2ZWwsXG4gICAgICAgIG4gPSB0aGlzLmdldEN1cnJlbnROb3JtYWxMZXZlbCgpO1xuICAgICAgaWYgKFwibnVtYmVyXCIgPT0gdHlwZW9mIHIpIHJldHVybiBuID4gcjtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGdldEN1cnJlbnROb3JtYWxMZXZlbCgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKE1qR2FtZVR5cGUuTm9ybWFsKS5nZXRMZXZlbElkKCk7XG4gIH1cbiAgZ2V0UmFua01vZGVsKCkge1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJSYW5rTW9kZWxcIik7XG4gICAgcmV0dXJuIG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuICBnZXRBdmF0YXJDb2xsZWN0aW9uVHJhaXQoKSB7XG4gICAgdmFyIHQgPSBtai5nZXRDbGFzc0J5TmFtZShcIkF2YXRhckNvbGxlY3Rpb25UcmFpdFwiKTtcbiAgICByZXR1cm4gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIGdldEZpbmlzaGVkQXZhdGFyTGlzdCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmxvY2FsRGF0YS5jb2xsZWN0ZWRDYXJkTWFwKS5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LmN1ckNvdW50ID49IHQubWF4Q291bnQgJiYgdC5oZWFkSWQgPiBJRF9CQVNFO1xuICAgIH0pLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQuaGVhZElkO1xuICAgIH0pO1xuICB9XG4gIGdldERlZmF1bHRBdmF0YXJMaXN0KCkge1xuICAgIHZhciB0ID0gRGF0YVJlYWRlci5nZXRMaXN0KFwiaGVhZENvbmZpZ1wiKTtcbiAgICByZXR1cm4gdCAmJiAwICE9PSB0Lmxlbmd0aCA/IHQubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5JRDtcbiAgICB9KSA6IFsxXTtcbiAgfVxuICBnZXRDb2xNYXBSZWxhdGlvbigpIHtcbiAgICByZXR1cm4gdTtcbiAgfVxuICBnZXRIZWFkSWQodCwgZSA9IFwibWFpblJlc1wiKSB7XG4gICAgcmV0dXJuIHVbZSArIFwiIyMjIyMjXCIgKyB0XSB8fCAtMTtcbiAgfVxuICBnZXRIZWFkSW5mbyh0KSB7XG4gICAgZm9yICh2YXIgZSBpbiB0aGlzLmxvY2FsRGF0YS5jb2xsZWN0ZWRDYXJkTWFwKSB7XG4gICAgICB2YXIgYSA9IHRoaXMubG9jYWxEYXRhLmNvbGxlY3RlZENhcmRNYXBbZV07XG4gICAgICBpZiAoYS5oZWFkSWQgPT0gdCkgcmV0dXJuIGE7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59Il19