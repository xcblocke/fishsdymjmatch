
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tracker/GameTracker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RyYWNrZXIvR2FtZVRyYWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDNUMsZ0VBQStEO0FBQy9ELGdFQUErRDtBQUMvRCx1REFBa0Q7QUFDbEQsK0NBQTBDO0FBRTFDO0lBQWlDLCtCQUFLO0lBNkdwQztRQUFBLFlBQ0UsaUJBQU8sU0FrQlI7UUEvSEQsa0JBQVksR0FBRyxDQUFDLENBQUM7UUE4R2YsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEUsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckUsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDL0YsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDL0UsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDM0YsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFD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eEQsQ0FBQztJQUNKLENBQUM7SUFDRCx5Q0FBbUIsR0FBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNqQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUssK0JBQVksQ0FBQyxPQUFPLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXhDRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7aURBR3ZDO0lBOVBVLFdBQVc7UUFEdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7T0FDWCxXQUFXLENBcVN2QjtJQUFELGtCQUFDO0NBclNELEFBcVNDLENBclNnQyxlQUFLLEdBcVNyQztBQXJTWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RlbCBmcm9tICcuLi9mcmFtZXdvcmsvZGF0YS9Nb2RlbCc7XG5pbXBvcnQgeyBMZXZlbFV0aWwgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25maWcvTGV2ZWxVdGlsJztcbmltcG9ydCB7IFRpbGVNYXBTaW11bGF0b3IgfSBmcm9tICcuLi9vYmplY3RzL1RpbGVNYXBTaW11bGF0b3InO1xuaW1wb3J0IHsgRUdhbWVTdGVwQ21kIH0gZnJvbSAnLi9UcmFja2VySW50ZXJmYWNlJztcbmltcG9ydCBUcmFja2VyVXRpbHMgZnJvbSAnLi9UcmFja2VyVXRpbHMnO1xuQG1qLmNsYXNzKFwiR2FtZVRyYWNrZXJcIilcbmV4cG9ydCBjbGFzcyBHYW1lVHJhY2tlciBleHRlbmRzIE1vZGVsIHtcbiAgX2NtZFN0ZXBUaW1lID0gMDtcbiAgZ2V0IHN0ZXBJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuc3RlcElkO1xuICB9XG4gIHNldCBzdGVwSWQoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLnN0ZXBJZCA9IGU7XG4gIH1cbiAgZ2V0IGNtZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmNtZHM7XG4gIH1cbiAgc2V0IGNtZHMoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLmNtZHMgPSBlO1xuICB9XG4gIGdldCBjbWRzT3BTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuY21kcy5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLm9wU3RyaW5nO1xuICAgIH0pO1xuICB9XG4gIGdldCBnYW1lU3RhcnRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5nYW1lU3RhcnRUaW1lO1xuICB9XG4gIHNldCBnYW1lU3RhcnRUaW1lKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5nYW1lU3RhcnRUaW1lID0gZTtcbiAgfVxuICBnZXQgZ2FtZVN0ZXBzKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5nYW1lU3RlcHM7XG4gIH1cbiAgc2V0IGdhbWVTdGVwcyhlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuZ2FtZVN0ZXBzID0gZTtcbiAgfVxuICBnZXQgZWxpbWluYXRlZFBhaXJzKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5lbGltaW5hdGVkUGFpcnM7XG4gIH1cbiAgc2V0IGVsaW1pbmF0ZWRQYWlycyhlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuZWxpbWluYXRlZFBhaXJzID0gZTtcbiAgfVxuICBnZXQgaW5pdEhhbGZFeHBvc2VkVGlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmluaXRIYWxmRXhwb3NlZFRpbGVzO1xuICB9XG4gIHNldCBpbml0SGFsZkV4cG9zZWRUaWxlcyhlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuaW5pdEhhbGZFeHBvc2VkVGlsZXMgPSBlO1xuICB9XG4gIGdldCBpbml0aWFsSGFsZkV4cG9zZWRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmluaXRpYWxIYWxmRXhwb3NlZFBvc2l0aW9ucztcbiAgfVxuICBzZXQgaW5pdGlhbEhhbGZFeHBvc2VkUG9zaXRpb25zKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5pbml0aWFsSGFsZkV4cG9zZWRQb3NpdGlvbnMgPSBlO1xuICB9XG4gIGdldCBoYWxmRXhwb3NlZFN0ZXBzKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5oYWxmRXhwb3NlZFN0ZXBzO1xuICB9XG4gIHNldCBoYWxmRXhwb3NlZFN0ZXBzKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5oYWxmRXhwb3NlZFN0ZXBzID0gZTtcbiAgfVxuICBnZXQgaW5pdFRpbGVzQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmluaXRUaWxlc0NvdW50O1xuICB9XG4gIHNldCBpbml0VGlsZXNDb3VudChlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuaW5pdFRpbGVzQ291bnQgPSBlO1xuICB9XG4gIGdldCB0aWxlTW92YWJsZVN0ZXAoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnRpbGVNb3ZhYmxlU3RlcDtcbiAgfVxuICBzZXQgdGlsZU1vdmFibGVTdGVwKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS50aWxlTW92YWJsZVN0ZXAgPSBlO1xuICB9XG4gIGdldCBwYWlyc0NydXNoUmVjb3JkcygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEucGFpcnNDcnVzaFJlY29yZHMubWFwKHRoaXMuZGVjb21wcmVzc0NydXNoUmVjb3JkKTtcbiAgfVxuICBzZXQgcGFpcnNDcnVzaFJlY29yZHMoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLnBhaXJzQ3J1c2hSZWNvcmRzID0gZS5tYXAodGhpcy5jb21wcmVzc0NydXNoUmVjb3JkKTtcbiAgfVxuICBnZXQgcGFpcnNPcFJlY29yZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnBhaXJzT3BSZWNvcmRzLm1hcCh0aGlzLmRlY29tcHJlc3NDcnVzaFJlY29yZCk7XG4gIH1cbiAgc2V0IHBhaXJzT3BSZWNvcmRzKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5wYWlyc09wUmVjb3JkcyA9IGUubWFwKHRoaXMuY29tcHJlc3NDcnVzaFJlY29yZCk7XG4gIH1cbiAgZ2V0IHJlY29yZGVkT3BQYWlycygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEucmVjb3JkZWRPcFBhaXJzO1xuICB9XG4gIHNldCByZWNvcmRlZE9wUGFpcnMoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLnJlY29yZGVkT3BQYWlycyA9IGU7XG4gIH1cbiAgZ2V0IHN0ZXBBbmFseXRpY3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnN0ZXBBbmFseXRpY3M7XG4gIH1cbiAgc2V0IHN0ZXBBbmFseXRpY3MoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLnN0ZXBBbmFseXRpY3MgPSBlO1xuICB9XG4gIGdldCBsYXN0U3RlcFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxhc3RTdGVwVGltZTtcbiAgfVxuICBzZXQgbGFzdFN0ZXBUaW1lKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0U3RlcFRpbWUgPSBlO1xuICB9XG4gIGdldCBwcmV2U3RlcFRpbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5wcmV2U3RlcFRpbGVzO1xuICB9XG4gIHNldCBwcmV2U3RlcFRpbGVzKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5wcmV2U3RlcFRpbGVzID0gZTtcbiAgfVxuICBnZXQgcHJldlJlbGVhc2VkUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnByZXZSZWxlYXNlZFBvc2l0aW9uO1xuICB9XG4gIHNldCBwcmV2UmVsZWFzZWRQb3NpdGlvbihlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEucHJldlJlbGVhc2VkUG9zaXRpb24gPSBlO1xuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuc3RlcElkKSAmJiAodGhpcy5sb2NhbERhdGEuc3RlcElkID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuY21kcykgJiYgKHRoaXMubG9jYWxEYXRhLmNtZHMgPSBbXSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuZ2FtZVN0YXJ0VGltZSkgJiYgKHRoaXMubG9jYWxEYXRhLmdhbWVTdGFydFRpbWUgPSBEYXRlLm5vdygpKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5nYW1lU3RlcHMpICYmICh0aGlzLmxvY2FsRGF0YS5nYW1lU3RlcHMgPSBbXSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuZWxpbWluYXRlZFBhaXJzKSAmJiAodGhpcy5sb2NhbERhdGEuZWxpbWluYXRlZFBhaXJzID0gW10pO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmhhbGZFeHBvc2VkU3RlcHMpICYmICh0aGlzLmxvY2FsRGF0YS5oYWxmRXhwb3NlZFN0ZXBzID0ge30pO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmluaXRpYWxIYWxmRXhwb3NlZFBvc2l0aW9ucykgJiYgKHRoaXMubG9jYWxEYXRhLmluaXRpYWxIYWxmRXhwb3NlZFBvc2l0aW9ucyA9IHt9KTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5pbml0VGlsZXNDb3VudCkgJiYgKHRoaXMubG9jYWxEYXRhLmluaXRUaWxlc0NvdW50ID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEudGlsZU1vdmFibGVTdGVwKSAmJiAodGhpcy5sb2NhbERhdGEudGlsZU1vdmFibGVTdGVwID0ge30pO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnBhaXJzQ3J1c2hSZWNvcmRzKSAmJiAodGhpcy5sb2NhbERhdGEucGFpcnNDcnVzaFJlY29yZHMgPSBbXSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEucGFpcnNPcFJlY29yZHMpICYmICh0aGlzLmxvY2FsRGF0YS5wYWlyc09wUmVjb3JkcyA9IFtdKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5yZWNvcmRlZE9wUGFpcnMpICYmICh0aGlzLmxvY2FsRGF0YS5yZWNvcmRlZE9wUGFpcnMgPSBbXSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuc3RlcEFuYWx5dGljcykgJiYgKHRoaXMubG9jYWxEYXRhLnN0ZXBBbmFseXRpY3MgPSBbXSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdFN0ZXBUaW1lKSAmJiAodGhpcy5sb2NhbERhdGEubGFzdFN0ZXBUaW1lID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEucHJldlN0ZXBUaWxlcykgJiYgKHRoaXMubG9jYWxEYXRhLnByZXZTdGVwVGlsZXMgPSBbXSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEucHJldlJlbGVhc2VkUG9zaXRpb24pICYmICh0aGlzLmxvY2FsRGF0YS5wcmV2UmVsZWFzZWRQb3NpdGlvbiA9IFtdKTtcbiAgICB0aGlzLnJlc2V0U3RlcFRpbWUoKTtcbiAgfVxuICBpc0xvY2FsRW1wdHkoZSkge1xuICAgIHJldHVybiBudWxsID09IGUgfHwgXCJcIiA9PT0gZTtcbiAgfVxuICBzdGFydEdhbWVUcmFja2luZyhlKSB7XG4gICAgdGhpcy5yZXNldFN0ZXBUaW1lKCk7XG4gICAgdGhpcy5sb2NhbERhdGEuc3RlcElkID0gMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5jbWRzID0gW107XG4gICAgdGhpcy5sb2NhbERhdGEuZ2FtZVN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgdGhpcy5sb2NhbERhdGEuZ2FtZVN0ZXBzID0gW107XG4gICAgdGhpcy5sb2NhbERhdGEuZWxpbWluYXRlZFBhaXJzID0gW107XG4gICAgdGhpcy5sb2NhbERhdGEuaGFsZkV4cG9zZWRTdGVwcyA9IHt9O1xuICAgIHRoaXMubG9jYWxEYXRhLmluaXRpYWxIYWxmRXhwb3NlZFBvc2l0aW9ucyA9IHt9O1xuICAgIHRoaXMubG9jYWxEYXRhLmluaXRUaWxlc0NvdW50ID0gMDtcbiAgICB0aGlzLmxvY2FsRGF0YS50aWxlTW92YWJsZVN0ZXAgPSB7fTtcbiAgICB0aGlzLmxvY2FsRGF0YS5wYWlyc0NydXNoUmVjb3JkcyA9IFtdO1xuICAgIHRoaXMubG9jYWxEYXRhLnBhaXJzT3BSZWNvcmRzID0gW107XG4gICAgdGhpcy5sb2NhbERhdGEucmVjb3JkZWRPcFBhaXJzID0gW107XG4gICAgdGhpcy5sb2NhbERhdGEuc3RlcEFuYWx5dGljcyA9IFtdO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RTdGVwVGltZSA9IDA7XG4gICAgdGhpcy5sb2NhbERhdGEucHJldlN0ZXBUaWxlcyA9IFtdO1xuICAgIHRoaXMubG9jYWxEYXRhLnByZXZSZWxlYXNlZFBvc2l0aW9uID0gW107XG4gICAgVHJhY2tlclV0aWxzLnN0YXJ0R2FtZVRyYWNraW5nKGUsIGUuZ2V0VGlsZU1hcE9iamVjdCgpKTtcbiAgfVxuICBwdXNoU3RlcChlLCB0KSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBvID0gVGlsZU1hcFNpbXVsYXRvci5jcmVhdGVTaW0oZSksXG4gICAgICAgIG4gPSB0LmNtZCA9PT0gRUdhbWVTdGVwQ21kLktpbGxQYWlyIHx8IHQuY21kID09PSBFR2FtZVN0ZXBDbWQuQXV0b01lcmdlID8gdGhpcy5zdGVwSWQgKyAxIDogdGhpcy5zdGVwSWQ7XG4gICAgICB0aGlzLnB1c2hDbWQodCwgbiwgbyk7XG4gICAgICB0aGlzLnJlY29yZFN0ZXAoZSwgbywgdCk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICBwdXNoQ21kKGUsIHQsIG8pIHtcbiAgICB2YXIgbixcbiAgICAgIGksXG4gICAgICBhLFxuICAgICAgcyxcbiAgICAgIGMgPSB0aGlzLmxvY2FsRGF0YS5jbWRzLFxuICAgICAgcCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIF9pZDogYy5sZW5ndGggKyAxXG4gICAgICB9LCBlKSwge1xuICAgICAgICBzdGVwSWQ6IHQsXG4gICAgICAgIHRpbWU6IERhdGUubm93KClcbiAgICAgIH0pLFxuICAgICAgZCA9IFwiXCI7XG4gICAgaWYgKGUuY21kID09PSBFR2FtZVN0ZXBDbWQuUmV2aXZlU2h1ZmZsZSB8fCBlLmNtZCA9PT0gRUdhbWVTdGVwQ21kLlNodWZmbGUpIGQgPSBlLmNtZCArIFwiLVwiICsgZS5ib2FyZEFmdGVyO2Vsc2UgaWYgKGUuY21kID09PSBFR2FtZVN0ZXBDbWQuSW52YWxpZCkge1xuICAgICAgdmFyIGggPSBvLmdldFRpbGVPYmplY3QoZS50aWxlSWQpO1xuICAgICAgaWYgKGgpIHtcbiAgICAgICAgdmFyIHkgPSBfX3JlYWQoW2guZ3JpZFBvc1gsIGguZ3JpZFBvc1ksIGgubGF5ZXJdLCAzKSxcbiAgICAgICAgICBtID0geVswXSxcbiAgICAgICAgICB2ID0geVsxXSxcbiAgICAgICAgICBnID0geVsyXTtcbiAgICAgICAgZCA9IGUuY21kICsgXCItXCIgKyBnICsgTGV2ZWxVdGlsLnRyYW5zbGF0ZVBvc1RvQ2hhcihtKSArIExldmVsVXRpbC50cmFuc2xhdGVQb3NUb0NoYXIodik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmNtZCA9PT0gRUdhbWVTdGVwQ21kLktpbGxQYWlyIHx8IGUuY21kID09PSBFR2FtZVN0ZXBDbWQuQXV0b01lcmdlKSB7XG4gICAgICB2YXIgXyA9IG8uZ2V0VGlsZU9iamVjdChudWxsID09PSAobiA9IGUpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4udGlsZUlkMSksXG4gICAgICAgIFQgPSBvLmdldFRpbGVPYmplY3QobnVsbCA9PT0gKGkgPSBlKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLnRpbGVJZDIpO1xuICAgICAgaWYgKF8gJiYgVCkge1xuICAgICAgICB2YXIgQyA9IF9fcmVhZChbXy5ncmlkUG9zWCwgXy5ncmlkUG9zWSwgXy5sYXllcl0sIDMpLFxuICAgICAgICAgIGIgPSBDWzBdLFxuICAgICAgICAgIEUgPSBDWzFdLFxuICAgICAgICAgIFMgPSBDWzJdLFxuICAgICAgICAgIEkgPSBfX3JlYWQoW1QuZ3JpZFBvc1gsIFQuZ3JpZFBvc1ksIFQubGF5ZXJdLCAzKSxcbiAgICAgICAgICB3ID0gSVswXSxcbiAgICAgICAgICBCID0gSVsxXSxcbiAgICAgICAgICB4ID0gSVsyXTtcbiAgICAgICAgZCA9IGUuY21kICsgXCItXCI7XG4gICAgICAgIGQgKz0gXCJcIiArIFMgKyBMZXZlbFV0aWwudHJhbnNsYXRlUG9zVG9DaGFyKGIpICsgTGV2ZWxVdGlsLnRyYW5zbGF0ZVBvc1RvQ2hhcihFKSArIFwiLVwiO1xuICAgICAgICBkICs9IFwiXCIgKyB4ICsgTGV2ZWxVdGlsLnRyYW5zbGF0ZVBvc1RvQ2hhcih3KSArIExldmVsVXRpbC50cmFuc2xhdGVQb3NUb0NoYXIoQikgKyBcIi1cIjtcbiAgICAgICAgZCArPSB0aGlzLl9jbWRTdGVwVGltZSArIFwiLVwiO1xuICAgICAgICBkICs9IFwiXCIgKyBlLmNsZWFyO1xuICAgICAgICBwLnN0ZXBUaW1lID0gdGhpcy5fY21kU3RlcFRpbWU7XG4gICAgICAgIHRoaXMucmVzZXRTdGVwVGltZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBfID0gby5nZXRUaWxlT2JqZWN0KG51bGwgPT09IChhID0gZSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS50aWxlSWQxKSwgVCA9IG8uZ2V0VGlsZU9iamVjdChudWxsID09PSAocyA9IGUpIHx8IHZvaWQgMCA9PT0gcyA/IHZvaWQgMCA6IHMudGlsZUlkMik7XG4gICAgICBpZiAoXyAmJiBUKSB7XG4gICAgICAgIHZhciBNID0gX19yZWFkKFtfLmdyaWRQb3NYLCBfLmdyaWRQb3NZLCBfLmxheWVyXSwgMyksXG4gICAgICAgICAgTyA9IChiID0gTVswXSwgRSA9IE1bMV0sIFMgPSBNWzJdLCBfX3JlYWQoW1QuZ3JpZFBvc1gsIFQuZ3JpZFBvc1ksIFQubGF5ZXJdLCAzKSk7XG4gICAgICAgIHcgPSBPWzBdLCBCID0gT1sxXSwgeCA9IE9bMl07XG4gICAgICAgIGQgPSBlLmNtZCArIFwiLVwiO1xuICAgICAgICBkICs9IFwiXCIgKyBTICsgTGV2ZWxVdGlsLnRyYW5zbGF0ZVBvc1RvQ2hhcihiKSArIExldmVsVXRpbC50cmFuc2xhdGVQb3NUb0NoYXIoRSkgKyBcIi1cIjtcbiAgICAgICAgZCArPSBcIlwiICsgeCArIExldmVsVXRpbC50cmFuc2xhdGVQb3NUb0NoYXIodykgKyBMZXZlbFV0aWwudHJhbnNsYXRlUG9zVG9DaGFyKEIpICsgXCItXCI7XG4gICAgICAgIGQgKz0gXCJcIiArIHRoaXMuX2NtZFN0ZXBUaW1lO1xuICAgICAgICBwLnN0ZXBUaW1lID0gdGhpcy5fY21kU3RlcFRpbWU7XG4gICAgICAgIHRoaXMucmVzZXRTdGVwVGltZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBwLm9wU3RyaW5nID0gZDtcbiAgICBjLnB1c2gocCk7XG4gICAgdGhpcy5sb2NhbERhdGEuY21kcyA9IGM7XG4gIH1cbiAgY2FjaGVWYWxpZFRpbGVJZHMoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSB7fSxcbiAgICAgIGkgPSBlLmdldFRpbGVNYXBPYmplY3QoKS50aWxlT2JqZWN0TWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHIgPSBfX3ZhbHVlcyhpKSwgYSA9IHIubmV4dCgpOyAhYS5kb25lOyBhID0gci5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGMgPSBfX3JlYWQoYS52YWx1ZSwgMiksXG4gICAgICAgICAgdSA9IChjWzBdLCBjWzFdKTtcbiAgICAgICAgblt1LmlkXSA9IHUuaXNWYWxpZDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYSAmJiAhYS5kb25lICYmIChvID0gci5yZXR1cm4pICYmIG8uY2FsbChyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfVxuICByZXZlcnRWYWxpZFRpbGVJZHMoZSwgdCkge1xuICAgIHZhciBvID0gZS5nZXRUaWxlTWFwT2JqZWN0KCk7XG4gICAgZm9yICh2YXIgbiBpbiB0KSB7XG4gICAgICB2YXIgaSA9IG8uZ2V0VGlsZU9iamVjdChuKTtcbiAgICAgIGkgJiYgKGkuaXNWYWxpZCA9IHRbbl0pO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkdhbWVUcmFja2VyX3JlY29yZFN0ZXBcIilcbiAgcmVjb3JkU3RlcChlLCB0LCBvKSB7XG4gICAgby5jbWQgIT0gRUdhbWVTdGVwQ21kLktpbGxQYWlyICYmIG8uY21kICE9IEVHYW1lU3RlcENtZC5BdXRvTWVyZ2UgfHwgVHJhY2tlclV0aWxzLnJlY29yZFN0ZXAoZSwgdCwgbyk7XG4gIH1cbiAgYWR2YW5jZVN0ZXBUaW1lKGUpIHtcbiAgICB0aGlzLl9jbWRTdGVwVGltZSArPSBlO1xuICB9XG4gIHJlc2V0U3RlcFRpbWUoKSB7XG4gICAgdGhpcy5fY21kU3RlcFRpbWUgPSAwO1xuICB9XG4gIGdldFN0ZXBDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jbWRzLmxlbmd0aDtcbiAgfVxuICBnZXRGb3J3YXJkU3RlcENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmNtZHMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5jbWQgIT09IEVHYW1lU3RlcENtZC5JbnZhbGlkO1xuICAgIH0pLmxlbmd0aDtcbiAgfVxuICBjb21wcmVzc0NydXNoUmVjb3JkKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcDE6IGUucG9zaXRpb24xLFxuICAgICAgcDI6IGUucG9zaXRpb24yLFxuICAgICAgZTogZS5lbGVtZW50X2lkLFxuICAgICAgczogZS5zdGVwc1xuICAgIH07XG4gIH1cbiAgZGVjb21wcmVzc0NydXNoUmVjb3JkKGUpIHtcbiAgICB2YXIgdCwgbywgbiwgaTtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb24xOiBudWxsICE9PSAodCA9IGUucDEpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBlLnBvc2l0aW9uMSxcbiAgICAgIHBvc2l0aW9uMjogbnVsbCAhPT0gKG8gPSBlLnAyKSAmJiB2b2lkIDAgIT09IG8gPyBvIDogZS5wb3NpdGlvbjIsXG4gICAgICBlbGVtZW50X2lkOiBudWxsICE9PSAobiA9IGUuZSkgJiYgdm9pZCAwICE9PSBuID8gbiA6IGUuZWxlbWVudF9pZCxcbiAgICAgIHN0ZXBzOiBudWxsICE9PSAoaSA9IGUucykgJiYgdm9pZCAwICE9PSBpID8gaSA6IGUuc3RlcHNcbiAgICB9O1xuICB9XG4gIGdldFN0ZXBEdXJhdGlvbkxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuY21kcy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLmNtZCAhPT0gRUdhbWVTdGVwQ21kLkludmFsaWQ7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihlLnN0ZXBUaW1lKTtcbiAgICB9KTtcbiAgfVxufSJdfQ==