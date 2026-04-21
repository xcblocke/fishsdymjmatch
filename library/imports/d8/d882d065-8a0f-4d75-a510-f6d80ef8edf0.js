"use strict";
cc._RF.push(module, 'd882dBlig9NdaUQ9tgO+O3w', 'Tile2DotTracker');
// Scripts/dotTracker/Tile2DotTracker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2DotTracker = exports.EErrorClickType = void 0;
var Model_1 = require("../framework/data/Model");
var DGameClick_1 = require("../gamePlay/dot/DGameClick");
var DotUtil_1 = require("../gamePlay/dot/DotUtil");
var TileMapSimulator_1 = require("../objects/TileMapSimulator");
var EErrorClickType;
(function (EErrorClickType) {
    EErrorClickType[EErrorClickType["Flip"] = 0] = "Flip";
    EErrorClickType[EErrorClickType["Drag"] = 1] = "Drag";
    EErrorClickType[EErrorClickType["Lock"] = 2] = "Lock";
})(EErrorClickType = exports.EErrorClickType || (exports.EErrorClickType = {}));
var u;
(function (u) {
    u[u["None"] = -1] = "None";
    u[u["Shuffle"] = 0] = "Shuffle";
    u[u["Hint"] = 1] = "Hint";
    u[u["Revert"] = 2] = "Revert";
    u[u["Magnet"] = 3] = "Magnet";
})(u || (u = {}));
var Tile2DotTracker = /** @class */ (function (_super) {
    __extends(Tile2DotTracker, _super);
    function Tile2DotTracker() {
        var _this = _super.call(this) || this;
        _this.isLocalEmpty(_this.localData.stepId) && (_this.localData.stepId = 0);
        _this.isLocalEmpty(_this.localData.lastStepTime) && (_this.localData.lastStepTime = 0);
        _this.isLocalEmpty(_this.localData.clickFlipCount) && (_this.localData.clickFlipCount = 0);
        _this.isLocalEmpty(_this.localData.lastClickFlipCount) && (_this.localData.lastClickFlipCount = 0);
        _this.isLocalEmpty(_this.localData.dragTileCount) && (_this.localData.dragTileCount = 0);
        _this.isLocalEmpty(_this.localData.lastDragTileCount) && (_this.localData.lastDragTileCount = 0);
        _this.isLocalEmpty(_this.localData.lockTileCount) && (_this.localData.lockTileCount = 0);
        _this.isLocalEmpty(_this.localData.lastLockTileCount) && (_this.localData.lastLockTileCount = 0);
        _this.isLocalEmpty(_this.localData.lastShuffleCount) && (_this.localData.lastShuffleCount = 0);
        _this.isLocalEmpty(_this.localData.lastMagnetCount) && (_this.localData.lastMagnetCount = 0);
        _this.isLocalEmpty(_this.localData.lastRevertCount) && (_this.localData.lastRevertCount = 0);
        _this.isLocalEmpty(_this.localData.lastHintCount) && (_this.localData.lastHintCount = 0);
        _this.isLocalEmpty(_this.localData.lastToolType) && (_this.localData.lastToolType = u.None);
        _this.isLocalEmpty(_this.localData.rearrangedBoard) && (_this.localData.rearrangedBoard = "");
        _this.isLocalEmpty(_this.localData.revertedBoard) && (_this.localData.revertedBoard = "");
        _this.isLocalEmpty(_this.localData.errorClicksList) && (_this.localData.errorClicksList = []);
        _this.isLocalEmpty(_this.localData.lastHintTiles) && (_this.localData.lastHintTiles = []);
        _this.isLocalEmpty(_this.localData.lastMagnetTiles) && (_this.localData.lastMagnetTiles = []);
        _this.isLocalEmpty(_this.localData.magnetBoard) && (_this.localData.magnetBoard = "");
        _this.isLocalEmpty(_this.localData.magnetHolder) && (_this.localData.magnetHolder = "");
        _this.isLocalEmpty(_this.localData.holderUsageRates) && (_this.localData.holderUsageRates = []);
        _this.isLocalEmpty(_this.localData.stepDurationList) && (_this.localData.stepDurationList = []);
        return _this;
    }
    Object.defineProperty(Tile2DotTracker.prototype, "lastStepTime", {
        get: function () {
            return this.localData.lastStepTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DotTracker.prototype, "lastClickFlipCount", {
        get: function () {
            return this.localData.lastClickFlipCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DotTracker.prototype, "lastDragTileCount", {
        get: function () {
            return this.localData.lastDragTileCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DotTracker.prototype, "lastShuffleCount", {
        get: function () {
            return this.localData.lastShuffleCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DotTracker.prototype, "lastRevertCount", {
        get: function () {
            return this.localData.lastRevertCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DotTracker.prototype, "lastHintCount", {
        get: function () {
            return this.localData.lastHintCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DotTracker.prototype, "lastToolType", {
        get: function () {
            return this.localData.lastToolType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DotTracker.prototype, "rearrangedBoard", {
        get: function () {
            return this.localData.rearrangedBoard;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DotTracker.prototype, "revertedBoard", {
        get: function () {
            return this.localData.revertedBoard;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DotTracker.prototype, "lastHintTiles", {
        get: function () {
            return this.localData.lastHintTiles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DotTracker.prototype, "errorClicksList", {
        get: function () {
            return this.localData.errorClicksList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DotTracker.prototype, "stepId", {
        get: function () {
            return this.localData.stepId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DotTracker.prototype, "lastMagnetCount", {
        get: function () {
            return this.localData.lastMagnetCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DotTracker.prototype, "magnetBoard", {
        get: function () {
            return this.localData.magnetBoard;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DotTracker.prototype, "magnetHolder", {
        get: function () {
            return this.localData.magnetHolder;
        },
        enumerable: false,
        configurable: true
    });
    Tile2DotTracker.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    Tile2DotTracker.prototype.recordErrorClick = function (e, t, o) {
        if (!(this.localData.errorClicksList.length >= 15)) {
            var n = e.getTileMapObject().getTileObject(t);
            if (n) {
                if (o === EErrorClickType.Flip) {
                    this.recordClickFlip();
                }
                else {
                    if (o === EErrorClickType.Drag) {
                        this.recordDragTile();
                    }
                    else {
                        o === EErrorClickType.Lock && this.recordLockTile();
                    }
                }
                var i = e.getGameData().getRealPlayTime(), r = DotUtil_1.DotUtil.getVitaPos(n), a = this.localData.errorClicksList, l = i - (a.map(function (e) {
                    return e[1];
                }).reduce(function (e, t) {
                    return e + t;
                }, 0) + this.lastStepTime);
                a.push([r, l]);
                this.localData.errorClicksList = a;
            }
        }
    };
    Tile2DotTracker.prototype.recordClickFlip = function () {
        this.localData.clickFlipCount++;
        this.localData.lastClickFlipCount++;
    };
    Tile2DotTracker.prototype.recordDragTile = function () {
        this.localData.dragTileCount++;
        this.localData.lastDragTileCount++;
    };
    Tile2DotTracker.prototype.recordLockTile = function () {
        this.localData.lockTileCount++;
        this.localData.lastLockTileCount++;
    };
    Tile2DotTracker.prototype.recordShuffle = function (e) {
        this.localData.lastShuffleCount++;
        this.localData.lastToolType = u.Shuffle;
        this.localData.rearrangedBoard = DotUtil_1.DotUtil.getLevelDataAsCardId(e.getTileMapObject(), true);
    };
    Tile2DotTracker.prototype.recordRevert = function (e) {
        this.localData.lastRevertCount++;
        this.localData.lastToolType = u.Revert;
        this.localData.revertedBoard = DotUtil_1.DotUtil.getLevelDataAsCardId(e.getTileMapObject(), true);
    };
    Tile2DotTracker.prototype.recordHint = function (e, t) {
        this.localData.lastHintCount++;
        var o = e.getTileMapObject(), n = t.map(function (e) {
            return o.getTileObject(e);
        });
        this.localData.lastHintTiles = n.map(function (e) {
            return DotUtil_1.DotUtil.getVitaPos(e);
        });
    };
    Tile2DotTracker.prototype.recordMagnet = function (e, t) {
        var o, n;
        this.localData.lastMagnetCount++;
        this.localData.lastToolType = u.Magnet;
        var i = TileMapSimulator_1.TileMapSimulator.createSim(e), r = t.map(function (e) {
            return i.getTileObject(e);
        });
        this.localData.lastMagnetTiles = r.map(function (e) {
            return DotUtil_1.DotUtil.getVitaPos(e);
        });
        var a = e.getGameData().slotBarIds, c = [], p = a.map(function (e) {
            return i.getTileObjectByPosId(e);
        }), f = function f(e) {
            var t = i.getTileObject(e);
            if (!t)
                return "continue";
            var o = p.findIndex(function (e) {
                return e.cardId === t.cardId;
            });
            if (-1 !== o) {
                var n = p.splice(o, 1);
                c.push.apply(c, __spreadArrays(n));
            }
            c.push(t);
        };
        try {
            for (var y = __values(t), m = y.next(); !m.done; m = y.next())
                f(m.value);
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                m && !m.done && (n = y.return) && n.call(y);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        c.forEach(function (e) {
            e.isValid = false;
        });
        this.localData.magnetBoard = DotUtil_1.DotUtil.getLevelDataAsCardId(i, true);
        this.localData.magnetHolder = p.map(function (e) {
            return e.cardId;
        }).join(",");
        c.forEach(function (e) {
            e.isValid = true;
        });
    };
    Tile2DotTracker.prototype.resetAfterDot = function (e) {
        var t = e.getGameData().getRealPlayTime(), o = this.localData.lastStepTime, n = this.localData.stepDurationList;
        n.push(Math.floor(t - o));
        this.localData.stepDurationList = n;
        this.localData.lastStepTime = t;
        this.localData.lastClickFlipCount = 0;
        this.localData.lastDragTileCount = 0;
        this.localData.lastLockTileCount = 0;
        this.localData.lastShuffleCount = 0;
        this.localData.lastRevertCount = 0;
        this.localData.lastHintCount = 0;
        this.localData.lastMagnetCount = 0;
        this.localData.lastToolType = -1;
        this.localData.rearrangedBoard = "";
        this.localData.revertedBoard = "";
        this.localData.lastHintTiles = [];
        this.localData.lastMagnetTiles = [];
        this.localData.magnetBoard = "";
        this.localData.magnetHolder = "";
        this.localData.errorClicksList = [];
    };
    Tile2DotTracker.prototype.recordAddSlot = function (e, t) {
        try {
            var o = TileMapSimulator_1.TileMapSimulator.createSim(e), n = o.getTileObject(t);
            if (!n)
                return;
            this.localData.stepId++;
            this.recordHolderUsageRate(e, o, n);
            DGameClick_1.DotGameClick.dot(e, o, n);
            this.resetAfterDot(e);
        }
        catch (e) {
            console.error("[DotTracker] recordAddSlot error: " + (null == e ? void 0 : e.message));
        }
    };
    Tile2DotTracker.prototype.recordHolderUsageRate = function (e, t, o) {
        var n = e.getGameData(), i = n.slotBarIds, r = n.slotBarCount, a = new Set(i.map(function (e) {
            var o;
            return null === (o = t.getTileObjectByPosId(e)) || void 0 === o ? void 0 : o.cardId;
        }));
        if (a.has(o.cardId)) {
            a.delete(o.cardId);
        }
        else {
            a.add(o.cardId);
        }
        var l = a.size / r, s = this.localData.holderUsageRates;
        s.push(l);
        this.localData.holderUsageRates = s;
    };
    Tile2DotTracker.prototype.getHolderUsageRates = function () {
        return this.localData.holderUsageRates;
    };
    Tile2DotTracker.prototype.getAvgHolderUsageRate = function () {
        return 0 === this.localData.holderUsageRates.length ? 0 : this.localData.holderUsageRates.reduce(function (e, t) {
            return e + t;
        }, 0) / this.localData.holderUsageRates.length;
    };
    Tile2DotTracker.prototype.getStepDurationList = function () {
        return this.localData.stepDurationList;
    };
    Tile2DotTracker.prototype.resetGameData = function () {
        this.localData.stepId = 0;
        this.localData.lastStepTime = 0;
        this.localData.clickFlipCount = 0;
        this.localData.lastClickFlipCount = 0;
        this.localData.dragTileCount = 0;
        this.localData.lastDragTileCount = 0;
        this.localData.lockTileCount = 0;
        this.localData.lastLockTileCount = 0;
        this.localData.lastShuffleCount = 0;
        this.localData.lastRevertCount = 0;
        this.localData.lastHintCount = 0;
        this.localData.lastMagnetCount = 0;
        this.localData.lastToolType = u.None;
        this.localData.rearrangedBoard = "";
        this.localData.revertedBoard = "";
        this.localData.lastHintTiles = [];
        this.localData.lastMagnetTiles = [];
        this.localData.magnetBoard = "";
        this.localData.magnetHolder = "";
        this.localData.errorClicksList = [];
        this.localData.holderUsageRates = [];
        this.localData.stepDurationList = [];
    };
    Tile2DotTracker.prototype.getStepCount = function () {
        return this.localData.stepId;
    };
    Tile2DotTracker.prototype.getForwardStepCount = function () {
        return this.localData.stepId;
    };
    Tile2DotTracker = __decorate([
        mj.class("Tile2DotTracker")
    ], Tile2DotTracker);
    return Tile2DotTracker;
}(Model_1.default));
exports.Tile2DotTracker = Tile2DotTracker;

cc._RF.pop();