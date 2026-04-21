"use strict";
cc._RF.push(module, '0dd56dtw3FLdIQIb/kRK0Ey', 'GameContext');
// Scripts/core/simulator/context/GameContext.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameContext = void 0;
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var Tile2SlotBarData_1 = require("../../../data/Tile2SlotBarData");
var Tile2TouchData_1 = require("../../../data/Tile2TouchData");
var TouchData_1 = require("../../../data/TouchData");
var InputTile2TouchRunLock_1 = require("../../../input/InputTile2TouchRunLock");
var EndStrategy_1 = require("../../../objects/EndStrategy");
var ClearChecker_1 = require("../../../process/clear/ClearChecker");
var ClearModifier_1 = require("../../../process/clear/ClearModifier");
var ComboChecker_1 = require("../../../process/combo/ComboChecker");
var ComboModifier_1 = require("../../../process/combo/ComboModifier");
var Tile2DianZanChecker_1 = require("../../../process/dianzan/Tile2DianZanChecker");
var Tile2CheerChecker_1 = require("../../../process/cheer/Tile2CheerChecker");
var Tile2PerfectChecker_1 = require("../../../process/perfect/Tile2PerfectChecker");
var Tile2ComboChecker_1 = require("../../../process/combo/Tile2ComboChecker");
var FullComboChecker_1 = require("../../../process/fullcombo/FullComboChecker");
var ClassicLevelChecker_1 = require("../../../process/game/ClassicLevelChecker");
var ClassicLevelModifier_1 = require("../../../process/game/ClassicLevelModifier");
var ClassicReviveChecker_1 = require("../../../process/game/ClassicReviveChecker");
var ClassicReviveModifier_1 = require("../../../process/game/ClassicReviveModifier");
var GameModifier_1 = require("../../../process/game/GameModifier");
var LayoutSelector_1 = require("../../../process/layout/LayoutSelector");
var MotivationalWordsChecker_1 = require("../../../process/motivationalWords/MotivationalWordsChecker");
var ResultChecker_1 = require("../../../process/result/ResultChecker");
var RewardComboChecker_1 = require("../../../process/rewardCombo/RewardComboChecker");
var AllClearChecker_1 = require("../../../process/allClear/AllClearChecker");
var AllClearModifier_1 = require("../../../process/allClear/AllClearModifier");
var SaveModifier_1 = require("../../../process/save/SaveModifier");
var ScoreModifier_1 = require("../../../process/score/ScoreModifier");
var ShuffleModifier_1 = require("../../../process/shuffle/ShuffleModifier");
var TileChecker_1 = require("../../../process/tile/TileChecker");
var TileSelector_1 = require("../../../process/tile/TileSelector");
var Tile2HitTipsChecker_1 = require("../../../process/tile2/Tile2HitTipsChecker");
var Tile2BombModifier_1 = require("../../../process/tile2/Tile2BombModifier");
var Tile2HitTipsModifier_1 = require("../../../process/tile2/Tile2HitTipsModifier");
var Tile2ResultChecker_1 = require("../../../process/tile2/Tile2ResultChecker");
var Tile2ReviveChecker_1 = require("../../../process/tile2/Tile2ReviveChecker");
var Tile2ReviveModifier_1 = require("../../../process/tile2/Tile2ReviveModifier");
var Tile2ShuffleModifier_1 = require("../../../process/tile2/Tile2ShuffleModifier");
var Tile2SlotBarChecker_1 = require("../../../process/tile2/Tile2SlotBarChecker");
var Tile2SlotBarModifier_1 = require("../../../process/tile2/Tile2SlotBarModifier");
var Tile2TileTypesModifier_1 = require("../../../process/tile2/Tile2TileTypesModifier");
var DaxiaoChecker_1 = require("../../../process/tileTypes/DaxiaoChecker");
var DaxiaoModifier_1 = require("../../../process/tileTypes/DaxiaoModifier");
var DuoxiaoChecker_1 = require("../../../process/tileTypes/DuoxiaoChecker");
var DuoxiaoModifier_1 = require("../../../process/tileTypes/DuoxiaoModifier");
var TileTypeChecker_1 = require("../../../tileTypes/TileTypeChecker");
var TileTypesModifier_1 = require("../../../tileTypes/TileTypesModifier");
var TouchModifier_1 = require("../../../process/touch/TouchModifier");
var TrackerModifier_1 = require("../../../process/tracker/TrackerModifier");
var BaseContext_1 = require("./BaseContext");
var Tile2DotTrackerModifier_1 = require("../../../process/tile2/Tile2DotTrackerModifier");
var Tile2MagnetChecker_1 = require("../../../process/magnet/Tile2MagnetChecker");
var Tile2RollCardChecker_1 = require("../../../process/tile2/Tile2RollCardChecker");
var Tile2RollCardModifier_1 = require("../../../process/tile2/Tile2RollCardModifier");
var Tile2DaxiaoModifier_1 = require("../../../process/tile2/Tile2DaxiaoModifier");
var Tile2NormalBackModifier_1 = require("../../../process/tile2/Tile2NormalBackModifier");
var GameContext = /** @class */ (function (_super) {
    __extends(GameContext, _super);
    function GameContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._tile2SlotType = GameTypeEnums_1.ETile2SlotType.Slot3;
        _this._offsetY = 0;
        _this._cardConfigMap = new Map();
        _this._layoutScale = 1;
        _this._canHitTipIds = [];
        _this._isNewGame = false;
        _this._isRestart = false;
        _this._touchData = new TouchData_1.TouchData();
        _this._contentSize = new cc.Size(0, 0);
        _this._duoxiaoClearCount = 0;
        _this._openGenerateState = false;
        return _this;
    }
    Object.defineProperty(GameContext.prototype, "gameSimulator", {
        get: function () {
            return this._gameSimulator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "gameTimeData", {
        get: function () {
            return this._gameTimeData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "gameType", {
        get: function () {
            return this._gameType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "randomGenerator", {
        get: function () {
            return this._randomGenerator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "touchData", {
        get: function () {
            return this._touchData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "comboModifier", {
        get: function () {
            this._comboModifier || (this._comboModifier = new ComboModifier_1.ComboModifier(this));
            return this._comboModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "comboChecker", {
        get: function () {
            this._comboChecker || (this._comboChecker = new ComboChecker_1.ComboChecker(this));
            return this._comboChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2ComboChecker", {
        get: function () {
            this._tile2ComboChecker || (this._tile2ComboChecker = new Tile2ComboChecker_1.Tile2ComboChecker(this));
            return this._tile2ComboChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "scoreModifier", {
        get: function () {
            this._scoreModifier || (this._scoreModifier = new ScoreModifier_1.ScoreModifier(this));
            return this._scoreModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "clearChecker", {
        get: function () {
            this._clearChecker || (this._clearChecker = new ClearChecker_1.ClearChecker(this));
            return this._clearChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "clearModifier", {
        get: function () {
            this._clearModifier || (this._clearModifier = new ClearModifier_1.ClearModifier(this));
            return this._clearModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "saveModifier", {
        get: function () {
            this._saveModifier || (this._saveModifier = new SaveModifier_1.SaveModifier(this));
            return this._saveModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "touchModifier", {
        get: function () {
            this._touchModifier || (this._touchModifier = new TouchModifier_1.TouchModifier(this));
            return this._touchModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tileSelector", {
        get: function () {
            this._tileSelector || (this._tileSelector = new TileSelector_1.TileSelector(this));
            return this._tileSelector;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tileChecker", {
        get: function () {
            this._tileChecker || (this._tileChecker = new TileChecker_1.TileChecker(this));
            return this._tileChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "layoutSelector", {
        get: function () {
            this._layoutSelector || (this._layoutSelector = new LayoutSelector_1.LayoutSelector(this));
            return this._layoutSelector;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "fullComboChecker", {
        get: function () {
            this._fullComboChecker || (this._fullComboChecker = new FullComboChecker_1.FullComboChecker(this));
            return this._fullComboChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "rewardComboChecker", {
        get: function () {
            this._rewardComboChecker || (this._rewardComboChecker = new RewardComboChecker_1.RewardComboChecker(this));
            return this._rewardComboChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "allClearChecker", {
        get: function () {
            this._allClearChecker || (this._allClearChecker = new AllClearChecker_1.AllClearChecker(this));
            return this._allClearChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "allClearModifier", {
        get: function () {
            this._allClearModifier || (this._allClearModifier = new AllClearModifier_1.AllClearModifier(this));
            return this._allClearModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "gameModifier", {
        get: function () {
            this._gameModifier || (this._gameModifier = new GameModifier_1.GameModifier(this));
            return this._gameModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "shuffleModifier", {
        get: function () {
            this._shuffleModifier || (this._shuffleModifier = new ShuffleModifier_1.ShuffleModifier(this));
            return this._shuffleModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "motivationalWordsChecker", {
        get: function () {
            this._motivationalWordsChecker || (this._motivationalWordsChecker = new MotivationalWordsChecker_1.MotivationalWordsChecker(this));
            return this._motivationalWordsChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tileTypesModifier", {
        get: function () {
            this._tileTypesModifier || (this._tileTypesModifier = new TileTypesModifier_1.default(this));
            return this._tileTypesModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "duoxiaoModifier", {
        get: function () {
            this._duoxiaoModifier || (this._duoxiaoModifier = new DuoxiaoModifier_1.default(this));
            return this._duoxiaoModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "duoxiaoChecker", {
        get: function () {
            this._duoxiaoChecker || (this._duoxiaoChecker = new DuoxiaoChecker_1.default(this));
            return this._duoxiaoChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tileTypeChecker", {
        get: function () {
            this._tileTypeChecker || (this._tileTypeChecker = new TileTypeChecker_1.TileTypeChecker(this));
            return this._tileTypeChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "resultChecker", {
        get: function () {
            this._resultChecker || (this._resultChecker = new ResultChecker_1.ResultChecker(this));
            return this._resultChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "trackerModifier", {
        get: function () {
            this._trackerModifier || (this._trackerModifier = new TrackerModifier_1.TrackerModifier(this));
            return this._trackerModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "collectSystem", {
        get: function () {
            var e;
            return null === (e = this.getTileMapObject()) || void 0 === e ? void 0 : e.collectSystem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "endStrategy", {
        get: function () {
            this._endStrategy || (this._endStrategy = new EndStrategy_1.EndStrategy(this));
            return this._endStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "daxiaoChecker", {
        get: function () {
            this._daxiaoChecker || (this._daxiaoChecker = new DaxiaoChecker_1.default(this));
            return this._daxiaoChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "daxiaoModifier", {
        get: function () {
            this._daxiaoModifier || (this._daxiaoModifier = new DaxiaoModifier_1.default(this));
            return this._daxiaoModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "classicLevelModifier", {
        get: function () {
            this._classicLevelModifier || (this._classicLevelModifier = new ClassicLevelModifier_1.ClassicLevelModifier(this));
            return this._classicLevelModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "classicLevelChecker", {
        get: function () {
            this._classicLevelChecker || (this._classicLevelChecker = new ClassicLevelChecker_1.ClassicLevelChecker(this));
            return this._classicLevelChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "classicReviveChecker", {
        get: function () {
            this._classicReviveChecker || (this._classicReviveChecker = new ClassicReviveChecker_1.ClassicReviveChecker(this));
            return this._classicReviveChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "classicReviveModifier", {
        get: function () {
            this._classicReviveModifier || (this._classicReviveModifier = new ClassicReviveModifier_1.ClassicReviveModifier(this));
            return this._classicReviveModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2SlotBarData", {
        get: function () {
            this._tile2SlotBarData || (this._tile2SlotBarData = new Tile2SlotBarData_1.Tile2SlotBarData());
            return this._tile2SlotBarData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2TouchData", {
        get: function () {
            this._tile2TouchData || (this._tile2TouchData = new Tile2TouchData_1.Tile2TouchData());
            return this._tile2TouchData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2SlotBarChecker", {
        get: function () {
            this._tile2SlotBarChecker || (this._tile2SlotBarChecker = new Tile2SlotBarChecker_1.Tile2SlotBarChecker(this));
            return this._tile2SlotBarChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2SlotBarModifier", {
        get: function () {
            this._tile2SlotBarModifier || (this._tile2SlotBarModifier = new Tile2SlotBarModifier_1.Tile2SlotBarModifier(this));
            return this._tile2SlotBarModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "inputTile2TouchRunLock", {
        get: function () {
            this._inputTile2TouchRunLock || (this._inputTile2TouchRunLock = new InputTile2TouchRunLock_1.default(this));
            return this._inputTile2TouchRunLock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2ResultChecker", {
        get: function () {
            this._tile2ResultChecker || (this._tile2ResultChecker = new Tile2ResultChecker_1.Tile2ResultChecker(this));
            return this._tile2ResultChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2ReviveChecker", {
        get: function () {
            this._tile2ReviveChecker || (this._tile2ReviveChecker = new Tile2ReviveChecker_1.Tile2ReviveChecker(this));
            return this._tile2ReviveChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2ReviveModifier", {
        get: function () {
            this._tile2ReviveModifier || (this._tile2ReviveModifier = new Tile2ReviveModifier_1.Tile2ReviveModifier(this));
            return this._tile2ReviveModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2ShuffleModifier", {
        get: function () {
            this._tile2ShuffleModifier || (this._tile2ShuffleModifier = new Tile2ShuffleModifier_1.Tile2ShuffleModifier(this));
            return this._tile2ShuffleModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2DianZanChecker", {
        get: function () {
            this._tile2DianZanChecker || (this._tile2DianZanChecker = new Tile2DianZanChecker_1.Tile2DianZanChecker(this));
            return this._tile2DianZanChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2CheerChecker", {
        get: function () {
            this._tile2CheerChecker || (this._tile2CheerChecker = new Tile2CheerChecker_1.Tile2CheerChecker(this));
            return this._tile2CheerChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2PerfectChecker", {
        get: function () {
            this._tile2PerfectChecker || (this._tile2PerfectChecker = new Tile2PerfectChecker_1.Tile2PerfectChecker(this));
            return this._tile2PerfectChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2HitTipsModifier", {
        get: function () {
            this._tile2HitTipsModifier || (this._tile2HitTipsModifier = new Tile2HitTipsModifier_1.Tile2HitTipsModifier(this));
            return this._tile2HitTipsModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2HitTipsChecker", {
        get: function () {
            this._tile2HitTipsChecker || (this._tile2HitTipsChecker = new Tile2HitTipsChecker_1.Tile2HitTipsChecker(this));
            return this._tile2HitTipsChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2TileTypesModifier", {
        get: function () {
            this._tile2TileTypesModifier || (this._tile2TileTypesModifier = new Tile2TileTypesModifier_1.default(this));
            return this._tile2TileTypesModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2BombModifier", {
        get: function () {
            this._tile2BombModifier || (this._tile2BombModifier = new Tile2BombModifier_1.default(this));
            return this._tile2BombModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2DotTrackerModifier", {
        get: function () {
            this._tile2DotTrackerModifier || (this._tile2DotTrackerModifier = new Tile2DotTrackerModifier_1.Tile2DotTrackerModifier(this));
            return this._tile2DotTrackerModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2MagnetChecker", {
        get: function () {
            this._tile2MagnetChecker || (this._tile2MagnetChecker = new Tile2MagnetChecker_1.Tile2MagnetChecker(this));
            return this._tile2MagnetChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2RollCardChecker", {
        get: function () {
            this._tile2RollCardChecker || (this._tile2RollCardChecker = new Tile2RollCardChecker_1.default(this));
            return this._tile2RollCardChecker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2RollCardModifier", {
        get: function () {
            this._tile2RollCardModifier || (this._tile2RollCardModifier = new Tile2RollCardModifier_1.default(this));
            return this._tile2RollCardModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2DaxiaoModifier", {
        get: function () {
            this._tile2DaxiaoModifier || (this._tile2DaxiaoModifier = new Tile2DaxiaoModifier_1.default(this));
            return this._tile2DaxiaoModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameContext.prototype, "tile2NormalBackModifier", {
        get: function () {
            this._tile2NormalBackModifier || (this._tile2NormalBackModifier = new Tile2NormalBackModifier_1.default(this));
            return this._tile2NormalBackModifier;
        },
        enumerable: false,
        configurable: true
    });
    GameContext.prototype.setGameData = function (e) {
        this._gameData = e;
    };
    GameContext.prototype.getGameData = function () {
        return this._gameData;
    };
    GameContext.prototype.getTile2SlotType = function () {
        return this._tile2SlotType;
    };
    GameContext.prototype.setTile2SlotType = function (e) {
        this._tile2SlotType = e;
    };
    GameContext.prototype.getOffsetY = function () {
        return this._offsetY;
    };
    GameContext.prototype.setOffsetY = function (e) {
        this._offsetY = e;
    };
    GameContext.prototype.setGameType = function (e) {
        this._gameType = e;
    };
    GameContext.prototype.setUserData = function (e) {
        this._userData = e;
    };
    GameContext.prototype.getUserData = function () {
        return this._userData;
    };
    GameContext.prototype.setRandomGenerator = function (e) {
        this._randomGenerator = e;
    };
    GameContext.prototype.getCardConfigMap = function () {
        return this._cardConfigMap;
    };
    GameContext.prototype.setCardConfigMap = function (e) {
        this._cardConfigMap = e;
    };
    GameContext.prototype.getCardLayoutConfig = function () {
        return this._cardLayoutConfig;
    };
    GameContext.prototype.setCardLayoutConfig = function (e) {
        this._cardLayoutConfig = e;
    };
    GameContext.prototype.getLayoutScale = function () {
        return this._layoutScale;
    };
    GameContext.prototype.setLayoutScale = function (e) {
        this._layoutScale = e;
    };
    GameContext.prototype.setTileMapObject = function (e) {
        this._tileMapObject = e;
    };
    GameContext.prototype.getTileMapObject = function () {
        return this._tileMapObject;
    };
    GameContext.prototype.getCanHitTips = function () {
        return this._canHitTipIds;
    };
    GameContext.prototype.setCanHitTips = function (e) {
        if (e === void 0) { e = []; }
        this._canHitTipIds = e;
    };
    GameContext.prototype.getIsNewGame = function () {
        return this._isNewGame;
    };
    GameContext.prototype.setIsNewGame = function (e) {
        this._isNewGame = e;
    };
    GameContext.prototype.getIsRestart = function () {
        return this._isRestart;
    };
    GameContext.prototype.setIsRestart = function (e) {
        this._isRestart = e;
    };
    GameContext.prototype.clearAllData = function () {
        this.setCanHitTips();
    };
    GameContext.prototype.getGameTracker = function () {
        return this._gameTracker;
    };
    GameContext.prototype.setGameTracker = function (e) {
        this._gameTracker = e;
    };
    GameContext.prototype.getContentSize = function () {
        return this._contentSize;
    };
    GameContext.prototype.setContentSize = function (e) {
        this._contentSize = e;
    };
    GameContext.prototype.getDuoxiaoClearCount = function () {
        return this._duoxiaoClearCount;
    };
    GameContext.prototype.setDuoxiaoClearCount = function (e) {
        this._duoxiaoClearCount = e;
    };
    GameContext.prototype.getOpenGenerateState = function () {
        return this._openGenerateState;
    };
    GameContext.prototype.setOpenGenerateState = function (e) {
        this._openGenerateState = e;
    };
    GameContext.prototype.setTile2DotTracker = function (e) {
        this._dotTracker = e;
    };
    GameContext.prototype.getTile2DotTracker = function () {
        return this._dotTracker;
    };
    return GameContext;
}(BaseContext_1.BaseContext));
exports.GameContext = GameContext;

cc._RF.pop();