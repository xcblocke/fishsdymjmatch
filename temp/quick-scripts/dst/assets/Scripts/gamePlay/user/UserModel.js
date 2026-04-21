
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/user/UserModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8581aomlwRKA4qVvMtWKnEU', 'UserModel');
// Scripts/gamePlay/user/UserModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var ClassicGameData_1 = require("../../core/simulator/data/ClassicGameData");
var DailyChallengeGameData_1 = require("../../core/simulator/data/DailyChallengeGameData");
var NormalGameData_1 = require("../../core/simulator/data/NormalGameData");
var Tile2NormalGameData_1 = require("../../core/simulator/data/Tile2NormalGameData");
var TravelGameData_1 = require("../../core/simulator/data/TravelGameData");
var ClassicTracker_1 = require("../../core/simulator/tracker/ClassicTracker");
var DailyChallengeTracker_1 = require("../../core/simulator/tracker/DailyChallengeTracker");
var NormalTracker_1 = require("../../tracker/NormalTracker");
var TravelTracker_1 = require("../../tracker/TravelTracker");
var DateManager_1 = require("../../core/simulator/util/DateManager");
var Model_1 = require("../../framework/data/Model");
var ControllerManager_1 = require("../../framework/manager/ControllerManager");
var LoginModel_1 = require("../login/model/LoginModel");
var CardUtil_1 = require("./CardUtil");
var Tile2NormalTracker_1 = require("../../dotTracker/Tile2NormalTracker");
var UserModel = /** @class */ (function (_super) {
    __extends(UserModel, _super);
    function UserModel() {
        var _this = _super.call(this) || this;
        _this._isFirstOpen = false;
        _this._tempLastGameType = GameTypeEnums_1.MjGameType.Normal;
        _this._autoClearEnabled = true;
        _this._manGameTypes = [];
        if (_this.localData.is_first_open)
            _this._isFirstOpen = false;
        else {
            _this.localData.is_first_open = true;
            _this.localData.shuffle = 2;
            _this.localData.hitTips = 2;
            _this.localData.revertItem = 2;
            _this._isFirstOpen = true;
        }
        _this.localData.game_id || (_this.localData.game_id = 0);
        _this.localData.totalGames || (_this.localData.totalGames = 0);
        _this.localData.totalWinGames || (_this.localData.totalWinGames = 0);
        _this.localData.totalRewardAdCount || (_this.localData.totalRewardAdCount = 0);
        _this.localData.maxScore || (_this.localData.maxScore = 0);
        _this.isLocalEmpty(_this.localData.firstVibration) && (_this.localData.firstVibration = false);
        _this.isLocalEmpty(_this.localData.unlockFunctionList) && (_this.localData.unlockFunctionList = []);
        _this.isLocalEmpty(_this.localData.installTime) && (_this.localData.installTime = Date.now());
        _this.isLocalEmpty(_this.localData.isGuideFinished) && (_this.localData.isGuideFinished = true);
        _this.isLocalEmpty(_this.localData.lastGameType) && (_this.localData.lastGameType = GameTypeEnums_1.MjGameType.None);
        _this.localData.appUseSecondsTime || (_this.localData.appUseSecondsTime = 0);
        _this.setAppStartTime(Date.now());
        _this.updateGameActiveDays();
        _this.syncMainGameProgress();
        return _this;
    }
    Object.defineProperty(UserModel.prototype, "isFirstOpen", {
        get: function () {
            return this._isFirstOpen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "normalData", {
        get: function () {
            return NormalGameData_1.default.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "travelData", {
        get: function () {
            return TravelGameData_1.default.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "dailyChallengeData", {
        get: function () {
            return DailyChallengeGameData_1.default.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "classicData", {
        get: function () {
            return ClassicGameData_1.default.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "tile2NormalData", {
        get: function () {
            return Tile2NormalGameData_1.default.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "normalTracker", {
        get: function () {
            return NormalTracker_1.NormalTracker.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "travelTracker", {
        get: function () {
            return TravelTracker_1.TravelTracker.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "dailyChallengeTracker", {
        get: function () {
            return DailyChallengeTracker_1.DailyChallengeTracker.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "classicTracker", {
        get: function () {
            return ClassicTracker_1.ClassicTracker.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "distinct_id", {
        get: function () {
            var e;
            return (null === (e = LoginModel_1.default.getInstance().deviceInfo) || void 0 === e ? void 0 : e.distinct_id) || "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "game_id", {
        get: function () {
            return this.localData.game_id;
        },
        enumerable: false,
        configurable: true
    });
    UserModel.prototype.syncMainGameProgress = function () {
        var e = this.normalData.getLevelId(), t = this.tile2NormalData.getLevelId();
        if (e > t) {
            this.tile2NormalData.setLevelInfo(e, "", "", "");
        }
        else {
            t > e && this.normalData.setLevelInfo(t, "", "", "");
        }
    };
    UserModel.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    UserModel.prototype.getGameDataByGameType = function (e) {
        e == GameTypeEnums_1.MjGameType.None && (e = this._tempLastGameType);
        return e == GameTypeEnums_1.MjGameType.Normal ? this.normalData : e == GameTypeEnums_1.MjGameType.Travel ? this.travelData : e == GameTypeEnums_1.MjGameType.DailyChallenge ? this.dailyChallengeData : e == GameTypeEnums_1.MjGameType.Classic ? this.classicData : e == GameTypeEnums_1.MjGameType.Tile2Normal ? this.tile2NormalData : this.normalData;
    };
    UserModel.prototype.getCurrentGameData = function () {
        return this.getGameDataByGameType(this.getCurrentGameType());
    };
    UserModel.prototype.getGameTrackerByGameType = function (e) {
        return e == GameTypeEnums_1.MjGameType.Normal ? this.normalTracker : e == GameTypeEnums_1.MjGameType.Travel ? this.travelTracker : e == GameTypeEnums_1.MjGameType.DailyChallenge ? this.dailyChallengeTracker : e == GameTypeEnums_1.MjGameType.Classic ? this.classicTracker : this.normalTracker;
    };
    UserModel.prototype.getCurrentGameTracker = function () {
        return this.getGameTrackerByGameType(this.getCurrentGameType());
    };
    UserModel.prototype.getCurrentDotTracker = function () {
        return this.getDotTrackerByGameType(this.getCurrentGameType());
    };
    UserModel.prototype.getDotTrackerByGameType = function (e) {
        return e == GameTypeEnums_1.MjGameType.Tile2Normal ? Tile2NormalTracker_1.Tile2NormalTracker.getInstance() : null;
    };
    UserModel.prototype.getCurrentGameType = function () {
        var e = ControllerManager_1.default.getInstance().getTopSceneController();
        if (!e)
            return GameTypeEnums_1.MjGameType.None;
        var t = GameTypeEnums_1.MjGameType.None;
        e.gameType && (t = e.gameType);
        if (t == GameTypeEnums_1.MjGameType.Normal || t == GameTypeEnums_1.MjGameType.Travel || t == GameTypeEnums_1.MjGameType.DailyChallenge || t == GameTypeEnums_1.MjGameType.Classic || t == GameTypeEnums_1.MjGameType.Tile2Normal) {
            this.localData.lastGameType = t;
            this._tempLastGameType = t;
        }
        return t;
    };
    UserModel.prototype.isInGameView = function () {
        var e = this.getCurrentGameType();
        if ([GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge, GameTypeEnums_1.MjGameType.Classic, GameTypeEnums_1.MjGameType.Tile2Normal].includes(e)) {
            var t = ControllerManager_1.default.getInstance().getTopSceneController();
            if (null == t ? void 0 : t._gameSimulator)
                return true;
        }
        return false;
    };
    UserModel.prototype.updateGameId = function () {
        this.localData.game_id = this.localData.game_id + 1;
    };
    UserModel.prototype.isMusicEnabled = function () {
        return this.localData.musicEnabled;
    };
    UserModel.prototype.setMusicEnabled = function (e) {
        this.localData.musicEnabled = e;
        mj.sdk.setGameBGMStatus(e ? "1" : "0");
    };
    UserModel.prototype.isSoundEnabled = function () {
        return this.localData.soundEnabled;
    };
    UserModel.prototype.setSoundEnabled = function (e) {
        this.localData.soundEnabled = e;
        mj.sdk.setGameSoundStatus(e ? "1" : "0");
    };
    UserModel.prototype.isVibrationEnabled = function () {
        return this.localData.vibrationEnabled;
    };
    UserModel.prototype.setVibrationEnabled = function (e) {
        this.localData.vibrationEnabled = e;
    };
    UserModel.prototype.isLockHighlightEnabled = function () {
        return this.localData.lockHighlightEnabled;
    };
    UserModel.prototype.setLockHighlightEnabled = function (e) {
        this.localData.lockHighlightEnabled = e;
    };
    UserModel.prototype.isAutoClearEnabled = function () {
        return this._autoClearEnabled;
    };
    UserModel.prototype.setAutoClearEnabled = function (e) {
        this._autoClearEnabled = e;
    };
    UserModel.prototype.isGuideFinished = function () {
        return this.localData.isGuideFinished;
    };
    UserModel.prototype.setGuideFinished = function (e) {
        this.localData.isGuideFinished = e;
    };
    UserModel.prototype.getTotalGames = function () {
        return this.localData.totalGames;
    };
    UserModel.prototype.getTotalWinGames = function () {
        return this.localData.totalWinGames;
    };
    UserModel.prototype.addTotalGames = function () {
        this.localData.totalGames += 1;
    };
    UserModel.prototype.addTotalWinGames = function () {
        this.localData.totalWinGames += 1;
    };
    UserModel.prototype.getAppStartTime = function () {
        return this.localData.appStartTime;
    };
    UserModel.prototype.setAppStartTime = function (e) {
        this.localData.appStartTime = e;
    };
    UserModel.prototype.setTotalRewardAdCount = function (e) {
        this.localData.totalRewardAdCount = e;
    };
    UserModel.prototype.getTotalRewardAdCount = function () {
        return this.localData.totalRewardAdCount;
    };
    UserModel.prototype.setTierGroup = function (e) {
        this.localData.tierGroup = e;
    };
    UserModel.prototype.getTierGroup = function () {
        return this.localData.tierGroup;
    };
    UserModel.prototype.setMaxScore = function (e) {
        this.localData.maxScore = e;
    };
    UserModel.prototype.getMaxScore = function () {
        return this.localData.maxScore;
    };
    UserModel.prototype.setFirstVibration = function (e) {
        this.localData.firstVibration = e;
    };
    UserModel.prototype.isFirstVibration = function () {
        return this.localData.firstVibration;
    };
    UserModel.prototype.isFunctionUnlocked = function (e) {
        return this.localData.unlockFunctionList.includes(e);
    };
    UserModel.prototype.addFunctionUnlocked = function (e) {
        var t = this.localData.unlockFunctionList;
        if (!t.includes(e)) {
            t.push(e);
            this.localData.unlockFunctionList = t;
        }
    };
    UserModel.prototype.setAvatarId = function (e) {
        this.localData.avatarId = e;
    };
    UserModel.prototype.setFrameId = function (e) {
        this.localData.frameId = e;
    };
    UserModel.prototype.getAvatarId = function () {
        return this.localData.avatarId;
    };
    UserModel.prototype.getFrameId = function () {
        return this.localData.frameId;
    };
    UserModel.prototype.setUserName = function (e) {
        this.localData.userName = e;
    };
    UserModel.prototype.getUserName = function () {
        return this.localData.userName;
    };
    UserModel.prototype.getRankCardResName = function () {
        return CardUtil_1.default.getByKey(GameTypeEnums_1.ResId.emRankId).resName;
    };
    UserModel.prototype.getInstallTime = function () {
        return this.localData.installTime;
    };
    UserModel.prototype.updateGameActiveDays = function () {
        var e = Date.now(), t = this.localData.lastActiveDate;
        if (DateManager_1.default.getInstance().isNewDay(t, e)) {
            this.localData.activeDays++;
            this.localData.lastActiveDate = e;
        }
    };
    UserModel.prototype.getGameActiveDays = function () {
        return this.localData.activeDays;
    };
    UserModel.prototype.getLastGameActiveDate = function () {
        return this.localData.lastActiveDate;
    };
    UserModel.prototype.getCardBackColor = function () {
        return this.localData.cardBackColor || "default";
    };
    UserModel.prototype.setCardBackColor = function (e) {
        this.localData.cardBackColor = e;
    };
    UserModel.prototype.getAppUseSecondsTime = function () {
        return this.localData.appUseSecondsTime;
    };
    UserModel.prototype.setAppUseSecondsTime = function (e) {
        this.localData.appUseSecondsTime = e;
    };
    UserModel.prototype.addAppUseSecondsTime = function (e) {
        this.localData.appUseSecondsTime += e;
    };
    UserModel.prototype.setManGameTypes = function (e) {
        this._manGameTypes = e;
    };
    UserModel.prototype.getManGameTypes = function () {
        return this._manGameTypes;
    };
    UserModel.prototype.getMainGameData = function () {
        return this.getGameDataByGameType(this.getMainGameType());
    };
    UserModel.prototype.getMainGameType = function () {
        return GameTypeEnums_1.MjGameType.Normal;
    };
    __decorate([
        mj.traitEvent("UserModel_updateGameId")
    ], UserModel.prototype, "updateGameId", null);
    __decorate([
        mj.traitEvent("UserModel_setGuideFin")
    ], UserModel.prototype, "setGuideFinished", null);
    __decorate([
        mj.traitEvent("UserModel_getRankCardRes")
    ], UserModel.prototype, "getRankCardResName", null);
    __decorate([
        mj.traitEvent("UserModel_cardBackColor")
    ], UserModel.prototype, "getCardBackColor", null);
    __decorate([
        mj.traitEvent("UserModel_getMainGameType")
    ], UserModel.prototype, "getMainGameType", null);
    UserModel = __decorate([
        mj.class("UserModel")
    ], UserModel);
    return UserModel;
}(Model_1.default));
exports.default = UserModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBZ0Y7QUFDaEYsNkVBQXdFO0FBQ3hFLDJGQUFzRjtBQUN0RiwyRUFBc0U7QUFDdEUscUZBQWdGO0FBQ2hGLDJFQUFzRTtBQUN0RSw4RUFBNkU7QUFDN0UsNEZBQTJGO0FBQzNGLDZEQUE0RDtBQUM1RCw2REFBNEQ7QUFDNUQscUVBQWdFO0FBQ2hFLG9EQUErQztBQUMvQywrRUFBMEU7QUFDMUUsd0RBQW1EO0FBQ25ELHVDQUFrQztBQUNsQywwRUFBeUU7QUFFekU7SUFBdUMsNkJBQUs7SUEwQzFDO1FBQUEsWUFDRSxpQkFBTyxTQXNCUjtRQWhFRCxrQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQix1QkFBaUIsR0FBRywwQkFBVSxDQUFDLE1BQU0sQ0FBQztRQUN0Qyx1QkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsbUJBQWEsR0FBRyxFQUFFLENBQUM7UUF3Q2pCLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhO1lBQUUsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFBSztZQUMvRCxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDcEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7UUFDRCxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELEtBQUksQ0FBQyxTQUFTLENBQUMsVUFB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RSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUNELG1DQUFlLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsbUNBQWUsR0FBZjtRQUNFLE9BQU8sMEJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQWpLRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7aURBR3ZDO0lBcUNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztxREFHdEM7SUF3RUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO3VEQUd6QztJQW1CRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7cURBR3hDO0lBdUJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQztvREFHMUM7SUF0UmtCLFNBQVM7UUFEN0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7T0FDRCxTQUFTLENBdVI3QjtJQUFELGdCQUFDO0NBdlJELEFBdVJDLENBdlJzQyxlQUFLLEdBdVIzQztrQkF2Um9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlLCBSZXNJZCB9IGZyb20gJy4uLy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IENsYXNzaWNHYW1lRGF0YSBmcm9tICcuLi8uLi9jb3JlL3NpbXVsYXRvci9kYXRhL0NsYXNzaWNHYW1lRGF0YSc7XG5pbXBvcnQgRGFpbHlDaGFsbGVuZ2VHYW1lRGF0YSBmcm9tICcuLi8uLi9jb3JlL3NpbXVsYXRvci9kYXRhL0RhaWx5Q2hhbGxlbmdlR2FtZURhdGEnO1xuaW1wb3J0IE5vcm1hbEdhbWVEYXRhIGZyb20gJy4uLy4uL2NvcmUvc2ltdWxhdG9yL2RhdGEvTm9ybWFsR2FtZURhdGEnO1xuaW1wb3J0IFRpbGUyTm9ybWFsR2FtZURhdGEgZnJvbSAnLi4vLi4vY29yZS9zaW11bGF0b3IvZGF0YS9UaWxlMk5vcm1hbEdhbWVEYXRhJztcbmltcG9ydCBUcmF2ZWxHYW1lRGF0YSBmcm9tICcuLi8uLi9jb3JlL3NpbXVsYXRvci9kYXRhL1RyYXZlbEdhbWVEYXRhJztcbmltcG9ydCB7IENsYXNzaWNUcmFja2VyIH0gZnJvbSAnLi4vLi4vY29yZS9zaW11bGF0b3IvdHJhY2tlci9DbGFzc2ljVHJhY2tlcic7XG5pbXBvcnQgeyBEYWlseUNoYWxsZW5nZVRyYWNrZXIgfSBmcm9tICcuLi8uLi9jb3JlL3NpbXVsYXRvci90cmFja2VyL0RhaWx5Q2hhbGxlbmdlVHJhY2tlcic7XG5pbXBvcnQgeyBOb3JtYWxUcmFja2VyIH0gZnJvbSAnLi4vLi4vdHJhY2tlci9Ob3JtYWxUcmFja2VyJztcbmltcG9ydCB7IFRyYXZlbFRyYWNrZXIgfSBmcm9tICcuLi8uLi90cmFja2VyL1RyYXZlbFRyYWNrZXInO1xuaW1wb3J0IERhdGVNYW5hZ2VyIGZyb20gJy4uLy4uL2NvcmUvc2ltdWxhdG9yL3V0aWwvRGF0ZU1hbmFnZXInO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uL2ZyYW1ld29yay9kYXRhL01vZGVsJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgTG9naW5Nb2RlbCBmcm9tICcuLi9sb2dpbi9tb2RlbC9Mb2dpbk1vZGVsJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuL0NhcmRVdGlsJztcbmltcG9ydCB7IFRpbGUyTm9ybWFsVHJhY2tlciB9IGZyb20gJy4uLy4uL2RvdFRyYWNrZXIvVGlsZTJOb3JtYWxUcmFja2VyJztcbkBtai5jbGFzcyhcIlVzZXJNb2RlbFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlck1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICBfaXNGaXJzdE9wZW4gPSBmYWxzZTtcbiAgX3RlbXBMYXN0R2FtZVR5cGUgPSBNakdhbWVUeXBlLk5vcm1hbDtcbiAgX2F1dG9DbGVhckVuYWJsZWQgPSB0cnVlO1xuICBfbWFuR2FtZVR5cGVzID0gW107XG4gIGdldCBpc0ZpcnN0T3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNGaXJzdE9wZW47XG4gIH1cbiAgZ2V0IG5vcm1hbERhdGEoKSB7XG4gICAgcmV0dXJuIE5vcm1hbEdhbWVEYXRhLmdldEluc3RhbmNlKCk7XG4gIH1cbiAgZ2V0IHRyYXZlbERhdGEoKSB7XG4gICAgcmV0dXJuIFRyYXZlbEdhbWVEYXRhLmdldEluc3RhbmNlKCk7XG4gIH1cbiAgZ2V0IGRhaWx5Q2hhbGxlbmdlRGF0YSgpIHtcbiAgICByZXR1cm4gRGFpbHlDaGFsbGVuZ2VHYW1lRGF0YS5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIGdldCBjbGFzc2ljRGF0YSgpIHtcbiAgICByZXR1cm4gQ2xhc3NpY0dhbWVEYXRhLmdldEluc3RhbmNlKCk7XG4gIH1cbiAgZ2V0IHRpbGUyTm9ybWFsRGF0YSgpIHtcbiAgICByZXR1cm4gVGlsZTJOb3JtYWxHYW1lRGF0YS5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIGdldCBub3JtYWxUcmFja2VyKCkge1xuICAgIHJldHVybiBOb3JtYWxUcmFja2VyLmdldEluc3RhbmNlKCk7XG4gIH1cbiAgZ2V0IHRyYXZlbFRyYWNrZXIoKSB7XG4gICAgcmV0dXJuIFRyYXZlbFRyYWNrZXIuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuICBnZXQgZGFpbHlDaGFsbGVuZ2VUcmFja2VyKCkge1xuICAgIHJldHVybiBEYWlseUNoYWxsZW5nZVRyYWNrZXIuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuICBnZXQgY2xhc3NpY1RyYWNrZXIoKSB7XG4gICAgcmV0dXJuIENsYXNzaWNUcmFja2VyLmdldEluc3RhbmNlKCk7XG4gIH1cbiAgZ2V0IGRpc3RpbmN0X2lkKCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiAobnVsbCA9PT0gKGUgPSBMb2dpbk1vZGVsLmdldEluc3RhbmNlKCkuZGV2aWNlSW5mbykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5kaXN0aW5jdF9pZCkgfHwgXCJcIjtcbiAgfVxuICBnZXQgZ2FtZV9pZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuZ2FtZV9pZDtcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICh0aGlzLmxvY2FsRGF0YS5pc19maXJzdF9vcGVuKSB0aGlzLl9pc0ZpcnN0T3BlbiA9IGZhbHNlO2Vsc2Uge1xuICAgICAgdGhpcy5sb2NhbERhdGEuaXNfZmlyc3Rfb3BlbiA9IHRydWU7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5zaHVmZmxlID0gMjtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmhpdFRpcHMgPSAyO1xuICAgICAgdGhpcy5sb2NhbERhdGEucmV2ZXJ0SXRlbSA9IDI7XG4gICAgICB0aGlzLl9pc0ZpcnN0T3BlbiA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubG9jYWxEYXRhLmdhbWVfaWQgfHwgKHRoaXMubG9jYWxEYXRhLmdhbWVfaWQgPSAwKTtcbiAgICB0aGlzLmxvY2FsRGF0YS50b3RhbEdhbWVzIHx8ICh0aGlzLmxvY2FsRGF0YS50b3RhbEdhbWVzID0gMCk7XG4gICAgdGhpcy5sb2NhbERhdGEudG90YWxXaW5HYW1lcyB8fCAodGhpcy5sb2NhbERhdGEudG90YWxXaW5HYW1lcyA9IDApO1xuICAgIHRoaXMubG9jYWxEYXRhLnRvdGFsUmV3YXJkQWRDb3VudCB8fCAodGhpcy5sb2NhbERhdGEudG90YWxSZXdhcmRBZENvdW50ID0gMCk7XG4gICAgdGhpcy5sb2NhbERhdGEubWF4U2NvcmUgfHwgKHRoaXMubG9jYWxEYXRhLm1heFNjb3JlID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuZmlyc3RWaWJyYXRpb24pICYmICh0aGlzLmxvY2FsRGF0YS5maXJzdFZpYnJhdGlvbiA9IGZhbHNlKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS51bmxvY2tGdW5jdGlvbkxpc3QpICYmICh0aGlzLmxvY2FsRGF0YS51bmxvY2tGdW5jdGlvbkxpc3QgPSBbXSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuaW5zdGFsbFRpbWUpICYmICh0aGlzLmxvY2FsRGF0YS5pbnN0YWxsVGltZSA9IERhdGUubm93KCkpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmlzR3VpZGVGaW5pc2hlZCkgJiYgKHRoaXMubG9jYWxEYXRhLmlzR3VpZGVGaW5pc2hlZCA9IHRydWUpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxhc3RHYW1lVHlwZSkgJiYgKHRoaXMubG9jYWxEYXRhLmxhc3RHYW1lVHlwZSA9IE1qR2FtZVR5cGUuTm9uZSk7XG4gICAgdGhpcy5sb2NhbERhdGEuYXBwVXNlU2Vjb25kc1RpbWUgfHwgKHRoaXMubG9jYWxEYXRhLmFwcFVzZVNlY29uZHNUaW1lID0gMCk7XG4gICAgdGhpcy5zZXRBcHBTdGFydFRpbWUoRGF0ZS5ub3coKSk7XG4gICAgdGhpcy51cGRhdGVHYW1lQWN0aXZlRGF5cygpO1xuICAgIHRoaXMuc3luY01haW5HYW1lUHJvZ3Jlc3MoKTtcbiAgfVxuICBzeW5jTWFpbkdhbWVQcm9ncmVzcygpIHtcbiAgICB2YXIgZSA9IHRoaXMubm9ybWFsRGF0YS5nZXRMZXZlbElkKCksXG4gICAgICB0ID0gdGhpcy50aWxlMk5vcm1hbERhdGEuZ2V0TGV2ZWxJZCgpO1xuICAgIGlmIChlID4gdCkge1xuICAgICAgdGhpcy50aWxlMk5vcm1hbERhdGEuc2V0TGV2ZWxJbmZvKGUsIFwiXCIsIFwiXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ID4gZSAmJiB0aGlzLm5vcm1hbERhdGEuc2V0TGV2ZWxJbmZvKHQsIFwiXCIsIFwiXCIsIFwiXCIpO1xuICAgIH1cbiAgfVxuICBpc0xvY2FsRW1wdHkoZSkge1xuICAgIHJldHVybiBudWxsID09IGUgfHwgXCJcIiA9PT0gZTtcbiAgfVxuICBnZXRHYW1lRGF0YUJ5R2FtZVR5cGUoZSkge1xuICAgIGUgPT0gTWpHYW1lVHlwZS5Ob25lICYmIChlID0gdGhpcy5fdGVtcExhc3RHYW1lVHlwZSk7XG4gICAgcmV0dXJuIGUgPT0gTWpHYW1lVHlwZS5Ob3JtYWwgPyB0aGlzLm5vcm1hbERhdGEgOiBlID09IE1qR2FtZVR5cGUuVHJhdmVsID8gdGhpcy50cmF2ZWxEYXRhIDogZSA9PSBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlID8gdGhpcy5kYWlseUNoYWxsZW5nZURhdGEgOiBlID09IE1qR2FtZVR5cGUuQ2xhc3NpYyA/IHRoaXMuY2xhc3NpY0RhdGEgOiBlID09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwgPyB0aGlzLnRpbGUyTm9ybWFsRGF0YSA6IHRoaXMubm9ybWFsRGF0YTtcbiAgfVxuICBnZXRDdXJyZW50R2FtZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCkpO1xuICB9XG4gIGdldEdhbWVUcmFja2VyQnlHYW1lVHlwZShlKSB7XG4gICAgcmV0dXJuIGUgPT0gTWpHYW1lVHlwZS5Ob3JtYWwgPyB0aGlzLm5vcm1hbFRyYWNrZXIgOiBlID09IE1qR2FtZVR5cGUuVHJhdmVsID8gdGhpcy50cmF2ZWxUcmFja2VyIDogZSA9PSBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlID8gdGhpcy5kYWlseUNoYWxsZW5nZVRyYWNrZXIgOiBlID09IE1qR2FtZVR5cGUuQ2xhc3NpYyA/IHRoaXMuY2xhc3NpY1RyYWNrZXIgOiB0aGlzLm5vcm1hbFRyYWNrZXI7XG4gIH1cbiAgZ2V0Q3VycmVudEdhbWVUcmFja2VyKCkge1xuICAgIHJldHVybiB0aGlzLmdldEdhbWVUcmFja2VyQnlHYW1lVHlwZSh0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpKTtcbiAgfVxuICBnZXRDdXJyZW50RG90VHJhY2tlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREb3RUcmFja2VyQnlHYW1lVHlwZSh0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpKTtcbiAgfVxuICBnZXREb3RUcmFja2VyQnlHYW1lVHlwZShlKSB7XG4gICAgcmV0dXJuIGUgPT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCA/IFRpbGUyTm9ybWFsVHJhY2tlci5nZXRJbnN0YW5jZSgpIDogbnVsbDtcbiAgfVxuICBnZXRDdXJyZW50R2FtZVR5cGUoKSB7XG4gICAgdmFyIGUgPSBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFRvcFNjZW5lQ29udHJvbGxlcigpO1xuICAgIGlmICghZSkgcmV0dXJuIE1qR2FtZVR5cGUuTm9uZTtcbiAgICB2YXIgdCA9IE1qR2FtZVR5cGUuTm9uZTtcbiAgICBlLmdhbWVUeXBlICYmICh0ID0gZS5nYW1lVHlwZSk7XG4gICAgaWYgKHQgPT0gTWpHYW1lVHlwZS5Ob3JtYWwgfHwgdCA9PSBNakdhbWVUeXBlLlRyYXZlbCB8fCB0ID09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UgfHwgdCA9PSBNakdhbWVUeXBlLkNsYXNzaWMgfHwgdCA9PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0R2FtZVR5cGUgPSB0O1xuICAgICAgdGhpcy5fdGVtcExhc3RHYW1lVHlwZSA9IHQ7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG4gIGlzSW5HYW1lVmlldygpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgaWYgKFtNakdhbWVUeXBlLk5vcm1hbCwgTWpHYW1lVHlwZS5UcmF2ZWwsIE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UsIE1qR2FtZVR5cGUuQ2xhc3NpYywgTWpHYW1lVHlwZS5UaWxlMk5vcm1hbF0uaW5jbHVkZXMoZSkpIHtcbiAgICAgIHZhciB0ID0gQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRUb3BTY2VuZUNvbnRyb2xsZXIoKTtcbiAgICAgIGlmIChudWxsID09IHQgPyB2b2lkIDAgOiB0Ll9nYW1lU2ltdWxhdG9yKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVXNlck1vZGVsX3VwZGF0ZUdhbWVJZFwiKVxuICB1cGRhdGVHYW1lSWQoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuZ2FtZV9pZCA9IHRoaXMubG9jYWxEYXRhLmdhbWVfaWQgKyAxO1xuICB9XG4gIGlzTXVzaWNFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5tdXNpY0VuYWJsZWQ7XG4gIH1cbiAgc2V0TXVzaWNFbmFibGVkKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5tdXNpY0VuYWJsZWQgPSBlO1xuICAgIG1qLnNkay5zZXRHYW1lQkdNU3RhdHVzKGUgPyBcIjFcIiA6IFwiMFwiKTtcbiAgfVxuICBpc1NvdW5kRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuc291bmRFbmFibGVkO1xuICB9XG4gIHNldFNvdW5kRW5hYmxlZChlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuc291bmRFbmFibGVkID0gZTtcbiAgICBtai5zZGsuc2V0R2FtZVNvdW5kU3RhdHVzKGUgPyBcIjFcIiA6IFwiMFwiKTtcbiAgfVxuICBpc1ZpYnJhdGlvbkVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnZpYnJhdGlvbkVuYWJsZWQ7XG4gIH1cbiAgc2V0VmlicmF0aW9uRW5hYmxlZChlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEudmlicmF0aW9uRW5hYmxlZCA9IGU7XG4gIH1cbiAgaXNMb2NrSGlnaGxpZ2h0RW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubG9ja0hpZ2hsaWdodEVuYWJsZWQ7XG4gIH1cbiAgc2V0TG9ja0hpZ2hsaWdodEVuYWJsZWQoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLmxvY2tIaWdobGlnaHRFbmFibGVkID0gZTtcbiAgfVxuICBpc0F1dG9DbGVhckVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9DbGVhckVuYWJsZWQ7XG4gIH1cbiAgc2V0QXV0b0NsZWFyRW5hYmxlZChlKSB7XG4gICAgdGhpcy5fYXV0b0NsZWFyRW5hYmxlZCA9IGU7XG4gIH1cbiAgaXNHdWlkZUZpbmlzaGVkKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5pc0d1aWRlRmluaXNoZWQ7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJVc2VyTW9kZWxfc2V0R3VpZGVGaW5cIilcbiAgc2V0R3VpZGVGaW5pc2hlZChlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuaXNHdWlkZUZpbmlzaGVkID0gZTtcbiAgfVxuICBnZXRUb3RhbEdhbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS50b3RhbEdhbWVzO1xuICB9XG4gIGdldFRvdGFsV2luR2FtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnRvdGFsV2luR2FtZXM7XG4gIH1cbiAgYWRkVG90YWxHYW1lcygpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS50b3RhbEdhbWVzICs9IDE7XG4gIH1cbiAgYWRkVG90YWxXaW5HYW1lcygpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS50b3RhbFdpbkdhbWVzICs9IDE7XG4gIH1cbiAgZ2V0QXBwU3RhcnRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5hcHBTdGFydFRpbWU7XG4gIH1cbiAgc2V0QXBwU3RhcnRUaW1lKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5hcHBTdGFydFRpbWUgPSBlO1xuICB9XG4gIHNldFRvdGFsUmV3YXJkQWRDb3VudChlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEudG90YWxSZXdhcmRBZENvdW50ID0gZTtcbiAgfVxuICBnZXRUb3RhbFJld2FyZEFkQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnRvdGFsUmV3YXJkQWRDb3VudDtcbiAgfVxuICBzZXRUaWVyR3JvdXAoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLnRpZXJHcm91cCA9IGU7XG4gIH1cbiAgZ2V0VGllckdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS50aWVyR3JvdXA7XG4gIH1cbiAgc2V0TWF4U2NvcmUoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLm1heFNjb3JlID0gZTtcbiAgfVxuICBnZXRNYXhTY29yZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubWF4U2NvcmU7XG4gIH1cbiAgc2V0Rmlyc3RWaWJyYXRpb24oZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLmZpcnN0VmlicmF0aW9uID0gZTtcbiAgfVxuICBpc0ZpcnN0VmlicmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5maXJzdFZpYnJhdGlvbjtcbiAgfVxuICBpc0Z1bmN0aW9uVW5sb2NrZWQoZSkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS51bmxvY2tGdW5jdGlvbkxpc3QuaW5jbHVkZXMoZSk7XG4gIH1cbiAgYWRkRnVuY3Rpb25VbmxvY2tlZChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmxvY2FsRGF0YS51bmxvY2tGdW5jdGlvbkxpc3Q7XG4gICAgaWYgKCF0LmluY2x1ZGVzKGUpKSB7XG4gICAgICB0LnB1c2goZSk7XG4gICAgICB0aGlzLmxvY2FsRGF0YS51bmxvY2tGdW5jdGlvbkxpc3QgPSB0O1xuICAgIH1cbiAgfVxuICBzZXRBdmF0YXJJZChlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuYXZhdGFySWQgPSBlO1xuICB9XG4gIHNldEZyYW1lSWQoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLmZyYW1lSWQgPSBlO1xuICB9XG4gIGdldEF2YXRhcklkKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5hdmF0YXJJZDtcbiAgfVxuICBnZXRGcmFtZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5mcmFtZUlkO1xuICB9XG4gIHNldFVzZXJOYW1lKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS51c2VyTmFtZSA9IGU7XG4gIH1cbiAgZ2V0VXNlck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnVzZXJOYW1lO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVXNlck1vZGVsX2dldFJhbmtDYXJkUmVzXCIpXG4gIGdldFJhbmtDYXJkUmVzTmFtZSgpIHtcbiAgICByZXR1cm4gQ2FyZFV0aWwuZ2V0QnlLZXkoUmVzSWQuZW1SYW5rSWQpLnJlc05hbWU7XG4gIH1cbiAgZ2V0SW5zdGFsbFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmluc3RhbGxUaW1lO1xuICB9XG4gIHVwZGF0ZUdhbWVBY3RpdmVEYXlzKCkge1xuICAgIHZhciBlID0gRGF0ZS5ub3coKSxcbiAgICAgIHQgPSB0aGlzLmxvY2FsRGF0YS5sYXN0QWN0aXZlRGF0ZTtcbiAgICBpZiAoRGF0ZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5pc05ld0RheSh0LCBlKSkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuYWN0aXZlRGF5cysrO1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdEFjdGl2ZURhdGUgPSBlO1xuICAgIH1cbiAgfVxuICBnZXRHYW1lQWN0aXZlRGF5cygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuYWN0aXZlRGF5cztcbiAgfVxuICBnZXRMYXN0R2FtZUFjdGl2ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxhc3RBY3RpdmVEYXRlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVXNlck1vZGVsX2NhcmRCYWNrQ29sb3JcIilcbiAgZ2V0Q2FyZEJhY2tDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuY2FyZEJhY2tDb2xvciB8fCBcImRlZmF1bHRcIjtcbiAgfVxuICBzZXRDYXJkQmFja0NvbG9yKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5jYXJkQmFja0NvbG9yID0gZTtcbiAgfVxuICBnZXRBcHBVc2VTZWNvbmRzVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuYXBwVXNlU2Vjb25kc1RpbWU7XG4gIH1cbiAgc2V0QXBwVXNlU2Vjb25kc1RpbWUoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLmFwcFVzZVNlY29uZHNUaW1lID0gZTtcbiAgfVxuICBhZGRBcHBVc2VTZWNvbmRzVGltZShlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuYXBwVXNlU2Vjb25kc1RpbWUgKz0gZTtcbiAgfVxuICBzZXRNYW5HYW1lVHlwZXMoZSkge1xuICAgIHRoaXMuX21hbkdhbWVUeXBlcyA9IGU7XG4gIH1cbiAgZ2V0TWFuR2FtZVR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9tYW5HYW1lVHlwZXM7XG4gIH1cbiAgZ2V0TWFpbkdhbWVEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0aGlzLmdldE1haW5HYW1lVHlwZSgpKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlVzZXJNb2RlbF9nZXRNYWluR2FtZVR5cGVcIilcbiAgZ2V0TWFpbkdhbWVUeXBlKCkge1xuICAgIHJldHVybiBNakdhbWVUeXBlLk5vcm1hbDtcbiAgfVxufSJdfQ==