
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/context/GameContext.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnRleHQvR2FtZUNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMkQ7QUFDM0QsbUVBQWtFO0FBQ2xFLCtEQUE4RDtBQUM5RCxxREFBb0Q7QUFDcEQsZ0ZBQTJFO0FBQzNFLDREQUEyRDtBQUMzRCxvRUFBbUU7QUFDbkUsc0VBQXFFO0FBQ3JFLG9FQUFtRTtBQUNuRSxzRUFBcUU7QUFDckUsb0ZBQW1GO0FBQ25GLDhFQUE2RTtBQUM3RSxvRkFBbUY7QUFDbkYsOEVBQTZFO0FBQzdFLGdGQUErRTtBQUMvRSxpRkFBZ0Y7QUFDaEYsbUZBQWtGO0FBQ2xGLG1GQUFrRjtBQUNsRixxRkFBb0Y7QUFDcEYsbUVBQWtFO0FBQ2xFLHlFQUF3RTtBQUN4RSx3R0FBdUc7QUFDdkcsdUVBQXNFO0FBQ3RFLHNGQUFxRjtBQUNyRiw2RUFBNEU7QUFDNUUsK0VBQThFO0FBQzlFLG1FQUFrRTtBQUNsRSxzRUFBcUU7QUFDckUsNEVBQTJFO0FBQzNFLGlFQUFnRTtBQUNoRSxtRUFBa0U7QUFDbEUsa0ZBQWlGO0FBQ2pGLDhFQUF5RTtBQUN6RSxvRkFBbUY7QUFDbkYsZ0ZBQStFO0FBQy9FLGdGQUErRTtBQUMvRSxrRkFBaUY7QUFDakYsb0ZBQW1GO0FBQ25GLGtGQUFpRjtBQUNqRixvRkFBbUY7QUFDbkYsd0ZBQW1GO0FBQ25GLDBFQUFxRTtBQUNyRSw0RUFBdUU7QUFDdkUsNEVBQXVFO0FBQ3ZFLDhFQUF5RTtBQUN6RSxzRUFBcUU7QUFDckUsMEVBQXFFO0FBQ3JFLHNFQUFxRTtBQUNyRSw0RUFBMkU7QUFDM0UsNkNBQTRDO0FBQzVDLDBGQUF5RjtBQUN6RixpRkFBZ0Y7QUFDaEYsb0ZBQStFO0FBQy9FLHNGQUFpRjtBQUNqRixrRkFBNkU7QUFDN0UsMEZBQXFGO0FBQ3JGO0lBQWlDLCtCQUFXO0lBQTVDO1FBQUEscUVBNFZDO1FBM1ZDLG9CQUFjLEdBQUcs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QUFvQixHQUFwQixVQUFxQixDQUFDO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELHdDQUFrQixHQUFsQixVQUFtQixDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCx3Q0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0E1VkEsQUE0VkMsQ0E1VmdDLHlCQUFXLEdBNFYzQztBQTVWWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVUaWxlMlNsb3RUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBUaWxlMlNsb3RCYXJEYXRhIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS9UaWxlMlNsb3RCYXJEYXRhJztcbmltcG9ydCB7IFRpbGUyVG91Y2hEYXRhIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS9UaWxlMlRvdWNoRGF0YSc7XG5pbXBvcnQgeyBUb3VjaERhdGEgfSBmcm9tICcuLi8uLi8uLi9kYXRhL1RvdWNoRGF0YSc7XG5pbXBvcnQgSW5wdXRUaWxlMlRvdWNoUnVuTG9jayBmcm9tICcuLi8uLi8uLi9pbnB1dC9JbnB1dFRpbGUyVG91Y2hSdW5Mb2NrJztcbmltcG9ydCB7IEVuZFN0cmF0ZWd5IH0gZnJvbSAnLi4vLi4vLi4vb2JqZWN0cy9FbmRTdHJhdGVneSc7XG5pbXBvcnQgeyBDbGVhckNoZWNrZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL2NsZWFyL0NsZWFyQ2hlY2tlcic7XG5pbXBvcnQgeyBDbGVhck1vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9jbGVhci9DbGVhck1vZGlmaWVyJztcbmltcG9ydCB7IENvbWJvQ2hlY2tlciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvY29tYm8vQ29tYm9DaGVja2VyJztcbmltcG9ydCB7IENvbWJvTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL2NvbWJvL0NvbWJvTW9kaWZpZXInO1xuaW1wb3J0IHsgVGlsZTJEaWFuWmFuQ2hlY2tlciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvZGlhbnphbi9UaWxlMkRpYW5aYW5DaGVja2VyJztcbmltcG9ydCB7IFRpbGUyQ2hlZXJDaGVja2VyIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9jaGVlci9UaWxlMkNoZWVyQ2hlY2tlcic7XG5pbXBvcnQgeyBUaWxlMlBlcmZlY3RDaGVja2VyIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9wZXJmZWN0L1RpbGUyUGVyZmVjdENoZWNrZXInO1xuaW1wb3J0IHsgVGlsZTJDb21ib0NoZWNrZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL2NvbWJvL1RpbGUyQ29tYm9DaGVja2VyJztcbmltcG9ydCB7IEZ1bGxDb21ib0NoZWNrZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL2Z1bGxjb21iby9GdWxsQ29tYm9DaGVja2VyJztcbmltcG9ydCB7IENsYXNzaWNMZXZlbENoZWNrZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL2dhbWUvQ2xhc3NpY0xldmVsQ2hlY2tlcic7XG5pbXBvcnQgeyBDbGFzc2ljTGV2ZWxNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvZ2FtZS9DbGFzc2ljTGV2ZWxNb2RpZmllcic7XG5pbXBvcnQgeyBDbGFzc2ljUmV2aXZlQ2hlY2tlciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvZ2FtZS9DbGFzc2ljUmV2aXZlQ2hlY2tlcic7XG5pbXBvcnQgeyBDbGFzc2ljUmV2aXZlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL2dhbWUvQ2xhc3NpY1Jldml2ZU1vZGlmaWVyJztcbmltcG9ydCB7IEdhbWVNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvZ2FtZS9HYW1lTW9kaWZpZXInO1xuaW1wb3J0IHsgTGF5b3V0U2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL2xheW91dC9MYXlvdXRTZWxlY3Rvcic7XG5pbXBvcnQgeyBNb3RpdmF0aW9uYWxXb3Jkc0NoZWNrZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL21vdGl2YXRpb25hbFdvcmRzL01vdGl2YXRpb25hbFdvcmRzQ2hlY2tlcic7XG5pbXBvcnQgeyBSZXN1bHRDaGVja2VyIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9yZXN1bHQvUmVzdWx0Q2hlY2tlcic7XG5pbXBvcnQgeyBSZXdhcmRDb21ib0NoZWNrZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3Jld2FyZENvbWJvL1Jld2FyZENvbWJvQ2hlY2tlcic7XG5pbXBvcnQgeyBBbGxDbGVhckNoZWNrZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL2FsbENsZWFyL0FsbENsZWFyQ2hlY2tlcic7XG5pbXBvcnQgeyBBbGxDbGVhck1vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9hbGxDbGVhci9BbGxDbGVhck1vZGlmaWVyJztcbmltcG9ydCB7IFNhdmVNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc2F2ZS9TYXZlTW9kaWZpZXInO1xuaW1wb3J0IHsgU2NvcmVNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc2NvcmUvU2NvcmVNb2RpZmllcic7XG5pbXBvcnQgeyBTaHVmZmxlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3NodWZmbGUvU2h1ZmZsZU1vZGlmaWVyJztcbmltcG9ydCB7IFRpbGVDaGVja2VyIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy90aWxlL1RpbGVDaGVja2VyJztcbmltcG9ydCB7IFRpbGVTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvdGlsZS9UaWxlU2VsZWN0b3InO1xuaW1wb3J0IHsgVGlsZTJIaXRUaXBzQ2hlY2tlciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvdGlsZTIvVGlsZTJIaXRUaXBzQ2hlY2tlcic7XG5pbXBvcnQgVGlsZTJCb21iTW9kaWZpZXIgZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy90aWxlMi9UaWxlMkJvbWJNb2RpZmllcic7XG5pbXBvcnQgeyBUaWxlMkhpdFRpcHNNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvdGlsZTIvVGlsZTJIaXRUaXBzTW9kaWZpZXInO1xuaW1wb3J0IHsgVGlsZTJSZXN1bHRDaGVja2VyIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy90aWxlMi9UaWxlMlJlc3VsdENoZWNrZXInO1xuaW1wb3J0IHsgVGlsZTJSZXZpdmVDaGVja2VyIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy90aWxlMi9UaWxlMlJldml2ZUNoZWNrZXInO1xuaW1wb3J0IHsgVGlsZTJSZXZpdmVNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvdGlsZTIvVGlsZTJSZXZpdmVNb2RpZmllcic7XG5pbXBvcnQgeyBUaWxlMlNodWZmbGVNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvdGlsZTIvVGlsZTJTaHVmZmxlTW9kaWZpZXInO1xuaW1wb3J0IHsgVGlsZTJTbG90QmFyQ2hlY2tlciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvdGlsZTIvVGlsZTJTbG90QmFyQ2hlY2tlcic7XG5pbXBvcnQgeyBUaWxlMlNsb3RCYXJNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvdGlsZTIvVGlsZTJTbG90QmFyTW9kaWZpZXInO1xuaW1wb3J0IFRpbGUyVGlsZVR5cGVzTW9kaWZpZXIgZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy90aWxlMi9UaWxlMlRpbGVUeXBlc01vZGlmaWVyJztcbmltcG9ydCBEYXhpYW9DaGVja2VyIGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvdGlsZVR5cGVzL0RheGlhb0NoZWNrZXInO1xuaW1wb3J0IERheGlhb01vZGlmaWVyIGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvdGlsZVR5cGVzL0RheGlhb01vZGlmaWVyJztcbmltcG9ydCBEdW94aWFvQ2hlY2tlciBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3RpbGVUeXBlcy9EdW94aWFvQ2hlY2tlcic7XG5pbXBvcnQgRHVveGlhb01vZGlmaWVyIGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvdGlsZVR5cGVzL0R1b3hpYW9Nb2RpZmllcic7XG5pbXBvcnQgeyBUaWxlVHlwZUNoZWNrZXIgfSBmcm9tICcuLi8uLi8uLi90aWxlVHlwZXMvVGlsZVR5cGVDaGVja2VyJztcbmltcG9ydCBUaWxlVHlwZXNNb2RpZmllciBmcm9tICcuLi8uLi8uLi90aWxlVHlwZXMvVGlsZVR5cGVzTW9kaWZpZXInO1xuaW1wb3J0IHsgVG91Y2hNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvdG91Y2gvVG91Y2hNb2RpZmllcic7XG5pbXBvcnQgeyBUcmFja2VyTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3RyYWNrZXIvVHJhY2tlck1vZGlmaWVyJztcbmltcG9ydCB7IEJhc2VDb250ZXh0IH0gZnJvbSAnLi9CYXNlQ29udGV4dCc7XG5pbXBvcnQgeyBUaWxlMkRvdFRyYWNrZXJNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3MvdGlsZTIvVGlsZTJEb3RUcmFja2VyTW9kaWZpZXInO1xuaW1wb3J0IHsgVGlsZTJNYWduZXRDaGVja2VyIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9tYWduZXQvVGlsZTJNYWduZXRDaGVja2VyJztcbmltcG9ydCBUaWxlMlJvbGxDYXJkQ2hlY2tlciBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3RpbGUyL1RpbGUyUm9sbENhcmRDaGVja2VyJztcbmltcG9ydCBUaWxlMlJvbGxDYXJkTW9kaWZpZXIgZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy90aWxlMi9UaWxlMlJvbGxDYXJkTW9kaWZpZXInO1xuaW1wb3J0IFRpbGUyRGF4aWFvTW9kaWZpZXIgZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy90aWxlMi9UaWxlMkRheGlhb01vZGlmaWVyJztcbmltcG9ydCBUaWxlMk5vcm1hbEJhY2tNb2RpZmllciBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3RpbGUyL1RpbGUyTm9ybWFsQmFja01vZGlmaWVyJztcbmV4cG9ydCBjbGFzcyBHYW1lQ29udGV4dCBleHRlbmRzIEJhc2VDb250ZXh0IHtcbiAgX3RpbGUyU2xvdFR5cGUgPSBFVGlsZTJTbG90VHlwZS5TbG90MztcbiAgX29mZnNldFkgPSAwO1xuICBfY2FyZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgX2xheW91dFNjYWxlID0gMTtcbiAgX2NhbkhpdFRpcElkcyA9IFtdO1xuICBfaXNOZXdHYW1lID0gZmFsc2U7XG4gIF9pc1Jlc3RhcnQgPSBmYWxzZTtcbiAgX3RvdWNoRGF0YSA9IG5ldyBUb3VjaERhdGEoKTtcbiAgX2NvbnRlbnRTaXplID0gbmV3IGNjLlNpemUoMCwgMCk7XG4gIF9kdW94aWFvQ2xlYXJDb3VudCA9IDA7XG4gIF9vcGVuR2VuZXJhdGVTdGF0ZSA9IGZhbHNlO1xuICBnZXQgZ2FtZVNpbXVsYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FtZVNpbXVsYXRvcjtcbiAgfVxuICBnZXQgZ2FtZVRpbWVEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lVGltZURhdGE7XG4gIH1cbiAgZ2V0IGdhbWVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lVHlwZTtcbiAgfVxuICBnZXQgcmFuZG9tR2VuZXJhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9yYW5kb21HZW5lcmF0b3I7XG4gIH1cbiAgZ2V0IHRvdWNoRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG91Y2hEYXRhO1xuICB9XG4gIGdldCBjb21ib01vZGlmaWVyKCkge1xuICAgIHRoaXMuX2NvbWJvTW9kaWZpZXIgfHwgKHRoaXMuX2NvbWJvTW9kaWZpZXIgPSBuZXcgQ29tYm9Nb2RpZmllcih0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuX2NvbWJvTW9kaWZpZXI7XG4gIH1cbiAgZ2V0IGNvbWJvQ2hlY2tlcigpIHtcbiAgICB0aGlzLl9jb21ib0NoZWNrZXIgfHwgKHRoaXMuX2NvbWJvQ2hlY2tlciA9IG5ldyBDb21ib0NoZWNrZXIodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl9jb21ib0NoZWNrZXI7XG4gIH1cbiAgZ2V0IHRpbGUyQ29tYm9DaGVja2VyKCkge1xuICAgIHRoaXMuX3RpbGUyQ29tYm9DaGVja2VyIHx8ICh0aGlzLl90aWxlMkNvbWJvQ2hlY2tlciA9IG5ldyBUaWxlMkNvbWJvQ2hlY2tlcih0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuX3RpbGUyQ29tYm9DaGVja2VyO1xuICB9XG4gIGdldCBzY29yZU1vZGlmaWVyKCkge1xuICAgIHRoaXMuX3Njb3JlTW9kaWZpZXIgfHwgKHRoaXMuX3Njb3JlTW9kaWZpZXIgPSBuZXcgU2NvcmVNb2RpZmllcih0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuX3Njb3JlTW9kaWZpZXI7XG4gIH1cbiAgZ2V0IGNsZWFyQ2hlY2tlcigpIHtcbiAgICB0aGlzLl9jbGVhckNoZWNrZXIgfHwgKHRoaXMuX2NsZWFyQ2hlY2tlciA9IG5ldyBDbGVhckNoZWNrZXIodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl9jbGVhckNoZWNrZXI7XG4gIH1cbiAgZ2V0IGNsZWFyTW9kaWZpZXIoKSB7XG4gICAgdGhpcy5fY2xlYXJNb2RpZmllciB8fCAodGhpcy5fY2xlYXJNb2RpZmllciA9IG5ldyBDbGVhck1vZGlmaWVyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fY2xlYXJNb2RpZmllcjtcbiAgfVxuICBnZXQgc2F2ZU1vZGlmaWVyKCkge1xuICAgIHRoaXMuX3NhdmVNb2RpZmllciB8fCAodGhpcy5fc2F2ZU1vZGlmaWVyID0gbmV3IFNhdmVNb2RpZmllcih0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuX3NhdmVNb2RpZmllcjtcbiAgfVxuICBnZXQgdG91Y2hNb2RpZmllcigpIHtcbiAgICB0aGlzLl90b3VjaE1vZGlmaWVyIHx8ICh0aGlzLl90b3VjaE1vZGlmaWVyID0gbmV3IFRvdWNoTW9kaWZpZXIodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl90b3VjaE1vZGlmaWVyO1xuICB9XG4gIGdldCB0aWxlU2VsZWN0b3IoKSB7XG4gICAgdGhpcy5fdGlsZVNlbGVjdG9yIHx8ICh0aGlzLl90aWxlU2VsZWN0b3IgPSBuZXcgVGlsZVNlbGVjdG9yKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fdGlsZVNlbGVjdG9yO1xuICB9XG4gIGdldCB0aWxlQ2hlY2tlcigpIHtcbiAgICB0aGlzLl90aWxlQ2hlY2tlciB8fCAodGhpcy5fdGlsZUNoZWNrZXIgPSBuZXcgVGlsZUNoZWNrZXIodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl90aWxlQ2hlY2tlcjtcbiAgfVxuICBnZXQgbGF5b3V0U2VsZWN0b3IoKSB7XG4gICAgdGhpcy5fbGF5b3V0U2VsZWN0b3IgfHwgKHRoaXMuX2xheW91dFNlbGVjdG9yID0gbmV3IExheW91dFNlbGVjdG9yKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0U2VsZWN0b3I7XG4gIH1cbiAgZ2V0IGZ1bGxDb21ib0NoZWNrZXIoKSB7XG4gICAgdGhpcy5fZnVsbENvbWJvQ2hlY2tlciB8fCAodGhpcy5fZnVsbENvbWJvQ2hlY2tlciA9IG5ldyBGdWxsQ29tYm9DaGVja2VyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fZnVsbENvbWJvQ2hlY2tlcjtcbiAgfVxuICBnZXQgcmV3YXJkQ29tYm9DaGVja2VyKCkge1xuICAgIHRoaXMuX3Jld2FyZENvbWJvQ2hlY2tlciB8fCAodGhpcy5fcmV3YXJkQ29tYm9DaGVja2VyID0gbmV3IFJld2FyZENvbWJvQ2hlY2tlcih0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuX3Jld2FyZENvbWJvQ2hlY2tlcjtcbiAgfVxuICBnZXQgYWxsQ2xlYXJDaGVja2VyKCkge1xuICAgIHRoaXMuX2FsbENsZWFyQ2hlY2tlciB8fCAodGhpcy5fYWxsQ2xlYXJDaGVja2VyID0gbmV3IEFsbENsZWFyQ2hlY2tlcih0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuX2FsbENsZWFyQ2hlY2tlcjtcbiAgfVxuICBnZXQgYWxsQ2xlYXJNb2RpZmllcigpIHtcbiAgICB0aGlzLl9hbGxDbGVhck1vZGlmaWVyIHx8ICh0aGlzLl9hbGxDbGVhck1vZGlmaWVyID0gbmV3IEFsbENsZWFyTW9kaWZpZXIodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl9hbGxDbGVhck1vZGlmaWVyO1xuICB9XG4gIGdldCBnYW1lTW9kaWZpZXIoKSB7XG4gICAgdGhpcy5fZ2FtZU1vZGlmaWVyIHx8ICh0aGlzLl9nYW1lTW9kaWZpZXIgPSBuZXcgR2FtZU1vZGlmaWVyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fZ2FtZU1vZGlmaWVyO1xuICB9XG4gIGdldCBzaHVmZmxlTW9kaWZpZXIoKSB7XG4gICAgdGhpcy5fc2h1ZmZsZU1vZGlmaWVyIHx8ICh0aGlzLl9zaHVmZmxlTW9kaWZpZXIgPSBuZXcgU2h1ZmZsZU1vZGlmaWVyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fc2h1ZmZsZU1vZGlmaWVyO1xuICB9XG4gIGdldCBtb3RpdmF0aW9uYWxXb3Jkc0NoZWNrZXIoKSB7XG4gICAgdGhpcy5fbW90aXZhdGlvbmFsV29yZHNDaGVja2VyIHx8ICh0aGlzLl9tb3RpdmF0aW9uYWxXb3Jkc0NoZWNrZXIgPSBuZXcgTW90aXZhdGlvbmFsV29yZHNDaGVja2VyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fbW90aXZhdGlvbmFsV29yZHNDaGVja2VyO1xuICB9XG4gIGdldCB0aWxlVHlwZXNNb2RpZmllcigpIHtcbiAgICB0aGlzLl90aWxlVHlwZXNNb2RpZmllciB8fCAodGhpcy5fdGlsZVR5cGVzTW9kaWZpZXIgPSBuZXcgVGlsZVR5cGVzTW9kaWZpZXIodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl90aWxlVHlwZXNNb2RpZmllcjtcbiAgfVxuICBnZXQgZHVveGlhb01vZGlmaWVyKCkge1xuICAgIHRoaXMuX2R1b3hpYW9Nb2RpZmllciB8fCAodGhpcy5fZHVveGlhb01vZGlmaWVyID0gbmV3IER1b3hpYW9Nb2RpZmllcih0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuX2R1b3hpYW9Nb2RpZmllcjtcbiAgfVxuICBnZXQgZHVveGlhb0NoZWNrZXIoKSB7XG4gICAgdGhpcy5fZHVveGlhb0NoZWNrZXIgfHwgKHRoaXMuX2R1b3hpYW9DaGVja2VyID0gbmV3IER1b3hpYW9DaGVja2VyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fZHVveGlhb0NoZWNrZXI7XG4gIH1cbiAgZ2V0IHRpbGVUeXBlQ2hlY2tlcigpIHtcbiAgICB0aGlzLl90aWxlVHlwZUNoZWNrZXIgfHwgKHRoaXMuX3RpbGVUeXBlQ2hlY2tlciA9IG5ldyBUaWxlVHlwZUNoZWNrZXIodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl90aWxlVHlwZUNoZWNrZXI7XG4gIH1cbiAgZ2V0IHJlc3VsdENoZWNrZXIoKSB7XG4gICAgdGhpcy5fcmVzdWx0Q2hlY2tlciB8fCAodGhpcy5fcmVzdWx0Q2hlY2tlciA9IG5ldyBSZXN1bHRDaGVja2VyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0Q2hlY2tlcjtcbiAgfVxuICBnZXQgdHJhY2tlck1vZGlmaWVyKCkge1xuICAgIHRoaXMuX3RyYWNrZXJNb2RpZmllciB8fCAodGhpcy5fdHJhY2tlck1vZGlmaWVyID0gbmV3IFRyYWNrZXJNb2RpZmllcih0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuX3RyYWNrZXJNb2RpZmllcjtcbiAgfVxuICBnZXQgY29sbGVjdFN5c3RlbSgpIHtcbiAgICB2YXIgZTtcbiAgICByZXR1cm4gbnVsbCA9PT0gKGUgPSB0aGlzLmdldFRpbGVNYXBPYmplY3QoKSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5jb2xsZWN0U3lzdGVtO1xuICB9XG4gIGdldCBlbmRTdHJhdGVneSgpIHtcbiAgICB0aGlzLl9lbmRTdHJhdGVneSB8fCAodGhpcy5fZW5kU3RyYXRlZ3kgPSBuZXcgRW5kU3RyYXRlZ3kodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl9lbmRTdHJhdGVneTtcbiAgfVxuICBnZXQgZGF4aWFvQ2hlY2tlcigpIHtcbiAgICB0aGlzLl9kYXhpYW9DaGVja2VyIHx8ICh0aGlzLl9kYXhpYW9DaGVja2VyID0gbmV3IERheGlhb0NoZWNrZXIodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl9kYXhpYW9DaGVja2VyO1xuICB9XG4gIGdldCBkYXhpYW9Nb2RpZmllcigpIHtcbiAgICB0aGlzLl9kYXhpYW9Nb2RpZmllciB8fCAodGhpcy5fZGF4aWFvTW9kaWZpZXIgPSBuZXcgRGF4aWFvTW9kaWZpZXIodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl9kYXhpYW9Nb2RpZmllcjtcbiAgfVxuICBnZXQgY2xhc3NpY0xldmVsTW9kaWZpZXIoKSB7XG4gICAgdGhpcy5fY2xhc3NpY0xldmVsTW9kaWZpZXIgfHwgKHRoaXMuX2NsYXNzaWNMZXZlbE1vZGlmaWVyID0gbmV3IENsYXNzaWNMZXZlbE1vZGlmaWVyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NpY0xldmVsTW9kaWZpZXI7XG4gIH1cbiAgZ2V0IGNsYXNzaWNMZXZlbENoZWNrZXIoKSB7XG4gICAgdGhpcy5fY2xhc3NpY0xldmVsQ2hlY2tlciB8fCAodGhpcy5fY2xhc3NpY0xldmVsQ2hlY2tlciA9IG5ldyBDbGFzc2ljTGV2ZWxDaGVja2VyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NpY0xldmVsQ2hlY2tlcjtcbiAgfVxuICBnZXQgY2xhc3NpY1Jldml2ZUNoZWNrZXIoKSB7XG4gICAgdGhpcy5fY2xhc3NpY1Jldml2ZUNoZWNrZXIgfHwgKHRoaXMuX2NsYXNzaWNSZXZpdmVDaGVja2VyID0gbmV3IENsYXNzaWNSZXZpdmVDaGVja2VyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NpY1Jldml2ZUNoZWNrZXI7XG4gIH1cbiAgZ2V0IGNsYXNzaWNSZXZpdmVNb2RpZmllcigpIHtcbiAgICB0aGlzLl9jbGFzc2ljUmV2aXZlTW9kaWZpZXIgfHwgKHRoaXMuX2NsYXNzaWNSZXZpdmVNb2RpZmllciA9IG5ldyBDbGFzc2ljUmV2aXZlTW9kaWZpZXIodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl9jbGFzc2ljUmV2aXZlTW9kaWZpZXI7XG4gIH1cbiAgZ2V0IHRpbGUyU2xvdEJhckRhdGEoKSB7XG4gICAgdGhpcy5fdGlsZTJTbG90QmFyRGF0YSB8fCAodGhpcy5fdGlsZTJTbG90QmFyRGF0YSA9IG5ldyBUaWxlMlNsb3RCYXJEYXRhKCkpO1xuICAgIHJldHVybiB0aGlzLl90aWxlMlNsb3RCYXJEYXRhO1xuICB9XG4gIGdldCB0aWxlMlRvdWNoRGF0YSgpIHtcbiAgICB0aGlzLl90aWxlMlRvdWNoRGF0YSB8fCAodGhpcy5fdGlsZTJUb3VjaERhdGEgPSBuZXcgVGlsZTJUb3VjaERhdGEoKSk7XG4gICAgcmV0dXJuIHRoaXMuX3RpbGUyVG91Y2hEYXRhO1xuICB9XG4gIGdldCB0aWxlMlNsb3RCYXJDaGVja2VyKCkge1xuICAgIHRoaXMuX3RpbGUyU2xvdEJhckNoZWNrZXIgfHwgKHRoaXMuX3RpbGUyU2xvdEJhckNoZWNrZXIgPSBuZXcgVGlsZTJTbG90QmFyQ2hlY2tlcih0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuX3RpbGUyU2xvdEJhckNoZWNrZXI7XG4gIH1cbiAgZ2V0IHRpbGUyU2xvdEJhck1vZGlmaWVyKCkge1xuICAgIHRoaXMuX3RpbGUyU2xvdEJhck1vZGlmaWVyIHx8ICh0aGlzLl90aWxlMlNsb3RCYXJNb2RpZmllciA9IG5ldyBUaWxlMlNsb3RCYXJNb2RpZmllcih0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuX3RpbGUyU2xvdEJhck1vZGlmaWVyO1xuICB9XG4gIGdldCBpbnB1dFRpbGUyVG91Y2hSdW5Mb2NrKCkge1xuICAgIHRoaXMuX2lucHV0VGlsZTJUb3VjaFJ1bkxvY2sgfHwgKHRoaXMuX2lucHV0VGlsZTJUb3VjaFJ1bkxvY2sgPSBuZXcgSW5wdXRUaWxlMlRvdWNoUnVuTG9jayh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0VGlsZTJUb3VjaFJ1bkxvY2s7XG4gIH1cbiAgZ2V0IHRpbGUyUmVzdWx0Q2hlY2tlcigpIHtcbiAgICB0aGlzLl90aWxlMlJlc3VsdENoZWNrZXIgfHwgKHRoaXMuX3RpbGUyUmVzdWx0Q2hlY2tlciA9IG5ldyBUaWxlMlJlc3VsdENoZWNrZXIodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl90aWxlMlJlc3VsdENoZWNrZXI7XG4gIH1cbiAgZ2V0IHRpbGUyUmV2aXZlQ2hlY2tlcigpIHtcbiAgICB0aGlzLl90aWxlMlJldml2ZUNoZWNrZXIgfHwgKHRoaXMuX3RpbGUyUmV2aXZlQ2hlY2tlciA9IG5ldyBUaWxlMlJldml2ZUNoZWNrZXIodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl90aWxlMlJldml2ZUNoZWNrZXI7XG4gIH1cbiAgZ2V0IHRpbGUyUmV2aXZlTW9kaWZpZXIoKSB7XG4gICAgdGhpcy5fdGlsZTJSZXZpdmVNb2RpZmllciB8fCAodGhpcy5fdGlsZTJSZXZpdmVNb2RpZmllciA9IG5ldyBUaWxlMlJldml2ZU1vZGlmaWVyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fdGlsZTJSZXZpdmVNb2RpZmllcjtcbiAgfVxuICBnZXQgdGlsZTJTaHVmZmxlTW9kaWZpZXIoKSB7XG4gICAgdGhpcy5fdGlsZTJTaHVmZmxlTW9kaWZpZXIgfHwgKHRoaXMuX3RpbGUyU2h1ZmZsZU1vZGlmaWVyID0gbmV3IFRpbGUyU2h1ZmZsZU1vZGlmaWVyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fdGlsZTJTaHVmZmxlTW9kaWZpZXI7XG4gIH1cbiAgZ2V0IHRpbGUyRGlhblphbkNoZWNrZXIoKSB7XG4gICAgdGhpcy5fdGlsZTJEaWFuWmFuQ2hlY2tlciB8fCAodGhpcy5fdGlsZTJEaWFuWmFuQ2hlY2tlciA9IG5ldyBUaWxlMkRpYW5aYW5DaGVja2VyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fdGlsZTJEaWFuWmFuQ2hlY2tlcjtcbiAgfVxuICBnZXQgdGlsZTJDaGVlckNoZWNrZXIoKSB7XG4gICAgdGhpcy5fdGlsZTJDaGVlckNoZWNrZXIgfHwgKHRoaXMuX3RpbGUyQ2hlZXJDaGVja2VyID0gbmV3IFRpbGUyQ2hlZXJDaGVja2VyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fdGlsZTJDaGVlckNoZWNrZXI7XG4gIH1cbiAgZ2V0IHRpbGUyUGVyZmVjdENoZWNrZXIoKSB7XG4gICAgdGhpcy5fdGlsZTJQZXJmZWN0Q2hlY2tlciB8fCAodGhpcy5fdGlsZTJQZXJmZWN0Q2hlY2tlciA9IG5ldyBUaWxlMlBlcmZlY3RDaGVja2VyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fdGlsZTJQZXJmZWN0Q2hlY2tlcjtcbiAgfVxuICBnZXQgdGlsZTJIaXRUaXBzTW9kaWZpZXIoKSB7XG4gICAgdGhpcy5fdGlsZTJIaXRUaXBzTW9kaWZpZXIgfHwgKHRoaXMuX3RpbGUySGl0VGlwc01vZGlmaWVyID0gbmV3IFRpbGUySGl0VGlwc01vZGlmaWVyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fdGlsZTJIaXRUaXBzTW9kaWZpZXI7XG4gIH1cbiAgZ2V0IHRpbGUySGl0VGlwc0NoZWNrZXIoKSB7XG4gICAgdGhpcy5fdGlsZTJIaXRUaXBzQ2hlY2tlciB8fCAodGhpcy5fdGlsZTJIaXRUaXBzQ2hlY2tlciA9IG5ldyBUaWxlMkhpdFRpcHNDaGVja2VyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fdGlsZTJIaXRUaXBzQ2hlY2tlcjtcbiAgfVxuICBnZXQgdGlsZTJUaWxlVHlwZXNNb2RpZmllcigpIHtcbiAgICB0aGlzLl90aWxlMlRpbGVUeXBlc01vZGlmaWVyIHx8ICh0aGlzLl90aWxlMlRpbGVUeXBlc01vZGlmaWVyID0gbmV3IFRpbGUyVGlsZVR5cGVzTW9kaWZpZXIodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl90aWxlMlRpbGVUeXBlc01vZGlmaWVyO1xuICB9XG4gIGdldCB0aWxlMkJvbWJNb2RpZmllcigpIHtcbiAgICB0aGlzLl90aWxlMkJvbWJNb2RpZmllciB8fCAodGhpcy5fdGlsZTJCb21iTW9kaWZpZXIgPSBuZXcgVGlsZTJCb21iTW9kaWZpZXIodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl90aWxlMkJvbWJNb2RpZmllcjtcbiAgfVxuICBnZXQgdGlsZTJEb3RUcmFja2VyTW9kaWZpZXIoKSB7XG4gICAgdGhpcy5fdGlsZTJEb3RUcmFja2VyTW9kaWZpZXIgfHwgKHRoaXMuX3RpbGUyRG90VHJhY2tlck1vZGlmaWVyID0gbmV3IFRpbGUyRG90VHJhY2tlck1vZGlmaWVyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fdGlsZTJEb3RUcmFja2VyTW9kaWZpZXI7XG4gIH1cbiAgZ2V0IHRpbGUyTWFnbmV0Q2hlY2tlcigpIHtcbiAgICB0aGlzLl90aWxlMk1hZ25ldENoZWNrZXIgfHwgKHRoaXMuX3RpbGUyTWFnbmV0Q2hlY2tlciA9IG5ldyBUaWxlMk1hZ25ldENoZWNrZXIodGhpcykpO1xuICAgIHJldHVybiB0aGlzLl90aWxlMk1hZ25ldENoZWNrZXI7XG4gIH1cbiAgZ2V0IHRpbGUyUm9sbENhcmRDaGVja2VyKCkge1xuICAgIHRoaXMuX3RpbGUyUm9sbENhcmRDaGVja2VyIHx8ICh0aGlzLl90aWxlMlJvbGxDYXJkQ2hlY2tlciA9IG5ldyBUaWxlMlJvbGxDYXJkQ2hlY2tlcih0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuX3RpbGUyUm9sbENhcmRDaGVja2VyO1xuICB9XG4gIGdldCB0aWxlMlJvbGxDYXJkTW9kaWZpZXIoKSB7XG4gICAgdGhpcy5fdGlsZTJSb2xsQ2FyZE1vZGlmaWVyIHx8ICh0aGlzLl90aWxlMlJvbGxDYXJkTW9kaWZpZXIgPSBuZXcgVGlsZTJSb2xsQ2FyZE1vZGlmaWVyKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5fdGlsZTJSb2xsQ2FyZE1vZGlmaWVyO1xuICB9XG4gIGdldCB0aWxlMkRheGlhb01vZGlmaWVyKCkge1xuICAgIHRoaXMuX3RpbGUyRGF4aWFvTW9kaWZpZXIgfHwgKHRoaXMuX3RpbGUyRGF4aWFvTW9kaWZpZXIgPSBuZXcgVGlsZTJEYXhpYW9Nb2RpZmllcih0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuX3RpbGUyRGF4aWFvTW9kaWZpZXI7XG4gIH1cbiAgZ2V0IHRpbGUyTm9ybWFsQmFja01vZGlmaWVyKCkge1xuICAgIHRoaXMuX3RpbGUyTm9ybWFsQmFja01vZGlmaWVyIHx8ICh0aGlzLl90aWxlMk5vcm1hbEJhY2tNb2RpZmllciA9IG5ldyBUaWxlMk5vcm1hbEJhY2tNb2RpZmllcih0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuX3RpbGUyTm9ybWFsQmFja01vZGlmaWVyO1xuICB9XG4gIHNldEdhbWVEYXRhKGUpIHtcbiAgICB0aGlzLl9nYW1lRGF0YSA9IGU7XG4gIH1cbiAgZ2V0R2FtZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVEYXRhO1xuICB9XG4gIGdldFRpbGUyU2xvdFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbGUyU2xvdFR5cGU7XG4gIH1cbiAgc2V0VGlsZTJTbG90VHlwZShlKSB7XG4gICAgdGhpcy5fdGlsZTJTbG90VHlwZSA9IGU7XG4gIH1cbiAgZ2V0T2Zmc2V0WSgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0WTtcbiAgfVxuICBzZXRPZmZzZXRZKGUpIHtcbiAgICB0aGlzLl9vZmZzZXRZID0gZTtcbiAgfVxuICBzZXRHYW1lVHlwZShlKSB7XG4gICAgdGhpcy5fZ2FtZVR5cGUgPSBlO1xuICB9XG4gIHNldFVzZXJEYXRhKGUpIHtcbiAgICB0aGlzLl91c2VyRGF0YSA9IGU7XG4gIH1cbiAgZ2V0VXNlckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJEYXRhO1xuICB9XG4gIHNldFJhbmRvbUdlbmVyYXRvcihlKSB7XG4gICAgdGhpcy5fcmFuZG9tR2VuZXJhdG9yID0gZTtcbiAgfVxuICBnZXRDYXJkQ29uZmlnTWFwKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXJkQ29uZmlnTWFwO1xuICB9XG4gIHNldENhcmRDb25maWdNYXAoZSkge1xuICAgIHRoaXMuX2NhcmRDb25maWdNYXAgPSBlO1xuICB9XG4gIGdldENhcmRMYXlvdXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRMYXlvdXRDb25maWc7XG4gIH1cbiAgc2V0Q2FyZExheW91dENvbmZpZyhlKSB7XG4gICAgdGhpcy5fY2FyZExheW91dENvbmZpZyA9IGU7XG4gIH1cbiAgZ2V0TGF5b3V0U2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dFNjYWxlO1xuICB9XG4gIHNldExheW91dFNjYWxlKGUpIHtcbiAgICB0aGlzLl9sYXlvdXRTY2FsZSA9IGU7XG4gIH1cbiAgc2V0VGlsZU1hcE9iamVjdChlKSB7XG4gICAgdGhpcy5fdGlsZU1hcE9iamVjdCA9IGU7XG4gIH1cbiAgZ2V0VGlsZU1hcE9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGlsZU1hcE9iamVjdDtcbiAgfVxuICBnZXRDYW5IaXRUaXBzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYW5IaXRUaXBJZHM7XG4gIH1cbiAgc2V0Q2FuSGl0VGlwcyhlID0gW10pIHtcbiAgICB0aGlzLl9jYW5IaXRUaXBJZHMgPSBlO1xuICB9XG4gIGdldElzTmV3R2FtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNOZXdHYW1lO1xuICB9XG4gIHNldElzTmV3R2FtZShlKSB7XG4gICAgdGhpcy5faXNOZXdHYW1lID0gZTtcbiAgfVxuICBnZXRJc1Jlc3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUmVzdGFydDtcbiAgfVxuICBzZXRJc1Jlc3RhcnQoZSkge1xuICAgIHRoaXMuX2lzUmVzdGFydCA9IGU7XG4gIH1cbiAgY2xlYXJBbGxEYXRhKCkge1xuICAgIHRoaXMuc2V0Q2FuSGl0VGlwcygpO1xuICB9XG4gIGdldEdhbWVUcmFja2VyKCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lVHJhY2tlcjtcbiAgfVxuICBzZXRHYW1lVHJhY2tlcihlKSB7XG4gICAgdGhpcy5fZ2FtZVRyYWNrZXIgPSBlO1xuICB9XG4gIGdldENvbnRlbnRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50U2l6ZTtcbiAgfVxuICBzZXRDb250ZW50U2l6ZShlKSB7XG4gICAgdGhpcy5fY29udGVudFNpemUgPSBlO1xuICB9XG4gIGdldER1b3hpYW9DbGVhckNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9kdW94aWFvQ2xlYXJDb3VudDtcbiAgfVxuICBzZXREdW94aWFvQ2xlYXJDb3VudChlKSB7XG4gICAgdGhpcy5fZHVveGlhb0NsZWFyQ291bnQgPSBlO1xuICB9XG4gIGdldE9wZW5HZW5lcmF0ZVN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuR2VuZXJhdGVTdGF0ZTtcbiAgfVxuICBzZXRPcGVuR2VuZXJhdGVTdGF0ZShlKSB7XG4gICAgdGhpcy5fb3BlbkdlbmVyYXRlU3RhdGUgPSBlO1xuICB9XG4gIHNldFRpbGUyRG90VHJhY2tlcihlKSB7XG4gICAgdGhpcy5fZG90VHJhY2tlciA9IGU7XG4gIH1cbiAgZ2V0VGlsZTJEb3RUcmFja2VyKCkge1xuICAgIHJldHVybiB0aGlzLl9kb3RUcmFja2VyO1xuICB9XG59Il19