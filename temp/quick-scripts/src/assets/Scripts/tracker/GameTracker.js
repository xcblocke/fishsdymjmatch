"use strict";
cc._RF.push(module, '5bfe8JHkrdLvaEFqMtGW8NS', 'GameTracker');
// Scripts/tracker/GameTracker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameTracker = void 0;
var Model_1 = require("../framework/data/Model");
var LevelUtil_1 = require("../core/simulator/config/LevelUtil");
var TileMapSimulator_1 = require("../objects/TileMapSimulator");
var TrackerInterface_1 = require("./TrackerInterface");
var TrackerUtils_1 = require("./TrackerUtils");
var GameTracker = /** @class */ (function (_super) {
    __extends(GameTracker, _super);
    function GameTracker() {
        var _this = _super.call(this) || this;
        _this._cmdStepTime = 0;
        _this.isLocalEmpty(_this.localData.stepId) && (_this.localData.stepId = 0);
        _this.isLocalEmpty(_this.localData.cmds) && (_this.localData.cmds = []);
        _this.isLocalEmpty(_this.localData.gameStartTime) && (_this.localData.gameStartTime = Date.now());
        _this.isLocalEmpty(_this.localData.gameSteps) && (_this.localData.gameSteps = []);
        _this.isLocalEmpty(_this.localData.eliminatedPairs) && (_this.localData.eliminatedPairs = []);
        _this.isLocalEmpty(_this.localData.halfExposedSteps) && (_this.localData.halfExposedSteps = {});
        _this.isLocalEmpty(_this.localData.initialHalfExposedPositions) && (_this.localData.initialHalfExposedPositions = {});
        _this.isLocalEmpty(_this.localData.initTilesCount) && (_this.localData.initTilesCount = 0);
        _this.isLocalEmpty(_this.localData.tileMovableStep) && (_this.localData.tileMovableStep = {});
        _this.isLocalEmpty(_this.localData.pairsCrushRecords) && (_this.localData.pairsCrushRecords = []);
        _this.isLocalEmpty(_this.localData.pairsOpRecords) && (_this.localData.pairsOpRecords = []);
        _this.isLocalEmpty(_this.localData.recordedOpPairs) && (_this.localData.recordedOpPairs = []);
        _this.isLocalEmpty(_this.localData.stepAnalytics) && (_this.localData.stepAnalytics = []);
        _this.isLocalEmpty(_this.localData.lastStepTime) && (_this.localData.lastStepTime = 0);
        _this.isLocalEmpty(_this.localData.prevStepTiles) && (_this.localData.prevStepTiles = []);
        _this.isLocalEmpty(_this.localData.prevReleasedPosition) && (_this.localData.prevReleasedPosition = []);
        _this.resetStepTime();
        return _this;
    }
    Object.defineProperty(GameTracker.prototype, "stepId", {
        get: function () {
            return this.localData.stepId;
        },
        set: function (e) {
            this.localData.stepId = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "cmds", {
        get: function () {
            return this.localData.cmds;
        },
        set: function (e) {
            this.localData.cmds = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "cmdsOpString", {
        get: function () {
            return this.cmds.map(function (e) {
                return e.opString;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "gameStartTime", {
        get: function () {
            return this.localData.gameStartTime;
        },
        set: function (e) {
            this.localData.gameStartTime = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "gameSteps", {
        get: function () {
            return this.localData.gameSteps;
        },
        set: function (e) {
            this.localData.gameSteps = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "eliminatedPairs", {
        get: function () {
            return this.localData.eliminatedPairs;
        },
        set: function (e) {
            this.localData.eliminatedPairs = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "initHalfExposedTiles", {
        get: function () {
            return this.localData.initHalfExposedTiles;
        },
        set: function (e) {
            this.localData.initHalfExposedTiles = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "initialHalfExposedPositions", {
        get: function () {
            return this.localData.initialHalfExposedPositions;
        },
        set: function (e) {
            this.localData.initialHalfExposedPositions = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "halfExposedSteps", {
        get: function () {
            return this.localData.halfExposedSteps;
        },
        set: function (e) {
            this.localData.halfExposedSteps = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "initTilesCount", {
        get: function () {
            return this.localData.initTilesCount;
        },
        set: function (e) {
            this.localData.initTilesCount = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "tileMovableStep", {
        get: function () {
            return this.localData.tileMovableStep;
        },
        set: function (e) {
            this.localData.tileMovableStep = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "pairsCrushRecords", {
        get: function () {
            return this.localData.pairsCrushRecords.map(this.decompressCrushRecord);
        },
        set: function (e) {
            this.localData.pairsCrushRecords = e.map(this.compressCrushRecord);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "pairsOpRecords", {
        get: function () {
            return this.localData.pairsOpRecords.map(this.decompressCrushRecord);
        },
        set: function (e) {
            this.localData.pairsOpRecords = e.map(this.compressCrushRecord);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "recordedOpPairs", {
        get: function () {
            return this.localData.recordedOpPairs;
        },
        set: function (e) {
            this.localData.recordedOpPairs = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "stepAnalytics", {
        get: function () {
            return this.localData.stepAnalytics;
        },
        set: function (e) {
            this.localData.stepAnalytics = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "lastStepTime", {
        get: function () {
            return this.localData.lastStepTime;
        },
        set: function (e) {
            this.localData.lastStepTime = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "prevStepTiles", {
        get: function () {
            return this.localData.prevStepTiles;
        },
        set: function (e) {
            this.localData.prevStepTiles = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTracker.prototype, "prevReleasedPosition", {
        get: function () {
            return this.localData.prevReleasedPosition;
        },
        set: function (e) {
            this.localData.prevReleasedPosition = e;
        },
        enumerable: false,
        configurable: true
    });
    GameTracker.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    GameTracker.prototype.startGameTracking = function (e) {
        this.resetStepTime();
        this.localData.stepId = 0;
        this.localData.cmds = [];
        this.localData.gameStartTime = Date.now();
        this.localData.gameSteps = [];
        this.localData.eliminatedPairs = [];
        this.localData.halfExposedSteps = {};
        this.localData.initialHalfExposedPositions = {};
        this.localData.initTilesCount = 0;
        this.localData.tileMovableStep = {};
        this.localData.pairsCrushRecords = [];
        this.localData.pairsOpRecords = [];
        this.localData.recordedOpPairs = [];
        this.localData.stepAnalytics = [];
        this.localData.lastStepTime = 0;
        this.localData.prevStepTiles = [];
        this.localData.prevReleasedPosition = [];
        TrackerUtils_1.default.startGameTracking(e, e.getTileMapObject());
    };
    GameTracker.prototype.pushStep = function (e, t) {
        try {
            var o = TileMapSimulator_1.TileMapSimulator.createSim(e), n = t.cmd === TrackerInterface_1.EGameStepCmd.KillPair || t.cmd === TrackerInterface_1.EGameStepCmd.AutoMerge ? this.stepId + 1 : this.stepId;
            this.pushCmd(t, n, o);
            this.recordStep(e, o, t);
        }
        catch (e) { }
    };
    GameTracker.prototype.pushCmd = function (e, t, o) {
        var n, i, a, s, c = this.localData.cmds, p = Object.assign(Object.assign({
            _id: c.length + 1
        }, e), {
            stepId: t,
            time: Date.now()
        }), d = "";
        if (e.cmd === TrackerInterface_1.EGameStepCmd.ReviveShuffle || e.cmd === TrackerInterface_1.EGameStepCmd.Shuffle)
            d = e.cmd + "-" + e.boardAfter;
        else if (e.cmd === TrackerInterface_1.EGameStepCmd.Invalid) {
            var h = o.getTileObject(e.tileId);
            if (h) {
                var y = __read([h.gridPosX, h.gridPosY, h.layer], 3), m = y[0], v = y[1], g = y[2];
                d = e.cmd + "-" + g + LevelUtil_1.LevelUtil.translatePosToChar(m) + LevelUtil_1.LevelUtil.translatePosToChar(v);
            }
        }
        else if (e.cmd === TrackerInterface_1.EGameStepCmd.KillPair || e.cmd === TrackerInterface_1.EGameStepCmd.AutoMerge) {
            var _ = o.getTileObject(null === (n = e) || void 0 === n ? void 0 : n.tileId1), T = o.getTileObject(null === (i = e) || void 0 === i ? void 0 : i.tileId2);
            if (_ && T) {
                var C = __read([_.gridPosX, _.gridPosY, _.layer], 3), b = C[0], E = C[1], S = C[2], I = __read([T.gridPosX, T.gridPosY, T.layer], 3), w = I[0], B = I[1], x = I[2];
                d = e.cmd + "-";
                d += "" + S + LevelUtil_1.LevelUtil.translatePosToChar(b) + LevelUtil_1.LevelUtil.translatePosToChar(E) + "-";
                d += "" + x + LevelUtil_1.LevelUtil.translatePosToChar(w) + LevelUtil_1.LevelUtil.translatePosToChar(B) + "-";
                d += this._cmdStepTime + "-";
                d += "" + e.clear;
                p.stepTime = this._cmdStepTime;
                this.resetStepTime();
            }
        }
        else {
            _ = o.getTileObject(null === (a = e) || void 0 === a ? void 0 : a.tileId1), T = o.getTileObject(null === (s = e) || void 0 === s ? void 0 : s.tileId2);
            if (_ && T) {
                var M = __read([_.gridPosX, _.gridPosY, _.layer], 3), O = (b = M[0], E = M[1], S = M[2], __read([T.gridPosX, T.gridPosY, T.layer], 3));
                w = O[0], B = O[1], x = O[2];
                d = e.cmd + "-";
                d += "" + S + LevelUtil_1.LevelUtil.translatePosToChar(b) + LevelUtil_1.LevelUtil.translatePosToChar(E) + "-";
                d += "" + x + LevelUtil_1.LevelUtil.translatePosToChar(w) + LevelUtil_1.LevelUtil.translatePosToChar(B) + "-";
                d += "" + this._cmdStepTime;
                p.stepTime = this._cmdStepTime;
                this.resetStepTime();
            }
        }
        p.opString = d;
        c.push(p);
        this.localData.cmds = c;
    };
    GameTracker.prototype.cacheValidTileIds = function (e) {
        var t, o, n = {}, i = e.getTileMapObject().tileObjectMap();
        try {
            for (var r = __values(i), a = r.next(); !a.done; a = r.next()) {
                var c = __read(a.value, 2), u = (c[0], c[1]);
                n[u.id] = u.isValid;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (o = r.return) && o.call(r);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return n;
    };
    GameTracker.prototype.revertValidTileIds = function (e, t) {
        var o = e.getTileMapObject();
        for (var n in t) {
            var i = o.getTileObject(n);
            i && (i.isValid = t[n]);
        }
    };
    GameTracker.prototype.recordStep = function (e, t, o) {
        o.cmd != TrackerInterface_1.EGameStepCmd.KillPair && o.cmd != TrackerInterface_1.EGameStepCmd.AutoMerge || TrackerUtils_1.default.recordStep(e, t, o);
    };
    GameTracker.prototype.advanceStepTime = function (e) {
        this._cmdStepTime += e;
    };
    GameTracker.prototype.resetStepTime = function () {
        this._cmdStepTime = 0;
    };
    GameTracker.prototype.getStepCount = function () {
        return this.cmds.length;
    };
    GameTracker.prototype.getForwardStepCount = function () {
        return this.cmds.filter(function (e) {
            return e.cmd !== TrackerInterface_1.EGameStepCmd.Invalid;
        }).length;
    };
    GameTracker.prototype.compressCrushRecord = function (e) {
        return {
            p1: e.position1,
            p2: e.position2,
            e: e.element_id,
            s: e.steps
        };
    };
    GameTracker.prototype.decompressCrushRecord = function (e) {
        var t, o, n, i;
        return {
            position1: null !== (t = e.p1) && void 0 !== t ? t : e.position1,
            position2: null !== (o = e.p2) && void 0 !== o ? o : e.position2,
            element_id: null !== (n = e.e) && void 0 !== n ? n : e.element_id,
            steps: null !== (i = e.s) && void 0 !== i ? i : e.steps
        };
    };
    GameTracker.prototype.getStepDurationList = function () {
        return this.cmds.filter(function (e) {
            return e.cmd !== TrackerInterface_1.EGameStepCmd.Invalid;
        }).map(function (e) {
            return Math.floor(e.stepTime);
        });
    };
    __decorate([
        mj.traitEvent("GameTracker_recordStep")
    ], GameTracker.prototype, "recordStep", null);
    GameTracker = __decorate([
        mj.class("GameTracker")
    ], GameTracker);
    return GameTracker;
}(Model_1.default));
exports.GameTracker = GameTracker;

cc._RF.pop();