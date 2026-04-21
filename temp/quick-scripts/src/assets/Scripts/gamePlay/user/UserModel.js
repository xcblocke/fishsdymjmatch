"use strict";
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