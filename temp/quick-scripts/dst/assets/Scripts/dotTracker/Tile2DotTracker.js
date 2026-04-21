
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/dotTracker/Tile2DotTracker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2RvdFRyYWNrZXIvVGlsZTJEb3RUcmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLHlEQUEwRDtBQUMxRCxtREFBa0Q7QUFDbEQsZ0VBQStEO0FBQy9ELElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6QixxREFBUSxDQUFBO0lBQ1IscURBQVEsQ0FBQTtJQUNSLHFEQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFJMUI7QUFDRCxJQUFLLENBTUo7QUFORCxXQUFLLENBQUM7SUFDSiwwQkFBUyxDQUFBO0lBQ1QsK0JBQVcsQ0FBQTtJQUNYLHlCQUFRLENBQUE7SUFDUiw2QkFBVSxDQUFBO0lBQ1YsNkJBQVUsQ0FBQTtBQUNaLENBQUMsRUFOSSxDQUFDLEtBQUQsQ0FBQyxRQU1MO0FBRUQ7SUFBcUMsbUNBQUs7SUE4Q3hDO1FBQUEsWUFDRSxpQkFBTyxTQXVCUjtRQXRCQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwRixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEcsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5RixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzNGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzNGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzNGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENB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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4uL2ZyYW1ld29yay9kYXRhL01vZGVsJztcbmltcG9ydCB7IERvdEdhbWVDbGljayB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9ER2FtZUNsaWNrJztcbmltcG9ydCB7IERvdFV0aWwgfSBmcm9tICcuLi9nYW1lUGxheS9kb3QvRG90VXRpbCc7XG5pbXBvcnQgeyBUaWxlTWFwU2ltdWxhdG9yIH0gZnJvbSAnLi4vb2JqZWN0cy9UaWxlTWFwU2ltdWxhdG9yJztcbmV4cG9ydCBlbnVtIEVFcnJvckNsaWNrVHlwZSB7XG4gIEZsaXAgPSAwLFxuICBEcmFnID0gMSxcbiAgTG9jayA9IDIsXG59XG5lbnVtIHUge1xuICBOb25lID0gLTEsXG4gIFNodWZmbGUgPSAwLFxuICBIaW50ID0gMSxcbiAgUmV2ZXJ0ID0gMixcbiAgTWFnbmV0ID0gMyxcbn1cbkBtai5jbGFzcyhcIlRpbGUyRG90VHJhY2tlclwiKVxuZXhwb3J0IGNsYXNzIFRpbGUyRG90VHJhY2tlciBleHRlbmRzIE1vZGVsIHtcbiAgZ2V0IGxhc3RTdGVwVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubGFzdFN0ZXBUaW1lO1xuICB9XG4gIGdldCBsYXN0Q2xpY2tGbGlwQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxhc3RDbGlja0ZsaXBDb3VudDtcbiAgfVxuICBnZXQgbGFzdERyYWdUaWxlQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxhc3REcmFnVGlsZUNvdW50O1xuICB9XG4gIGdldCBsYXN0U2h1ZmZsZUNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0U2h1ZmZsZUNvdW50O1xuICB9XG4gIGdldCBsYXN0UmV2ZXJ0Q291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxhc3RSZXZlcnRDb3VudDtcbiAgfVxuICBnZXQgbGFzdEhpbnRDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubGFzdEhpbnRDb3VudDtcbiAgfVxuICBnZXQgbGFzdFRvb2xUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0VG9vbFR5cGU7XG4gIH1cbiAgZ2V0IHJlYXJyYW5nZWRCb2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEucmVhcnJhbmdlZEJvYXJkO1xuICB9XG4gIGdldCByZXZlcnRlZEJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5yZXZlcnRlZEJvYXJkO1xuICB9XG4gIGdldCBsYXN0SGludFRpbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0SGludFRpbGVzO1xuICB9XG4gIGdldCBlcnJvckNsaWNrc0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmVycm9yQ2xpY2tzTGlzdDtcbiAgfVxuICBnZXQgc3RlcElkKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5zdGVwSWQ7XG4gIH1cbiAgZ2V0IGxhc3RNYWduZXRDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubGFzdE1hZ25ldENvdW50O1xuICB9XG4gIGdldCBtYWduZXRCb2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubWFnbmV0Qm9hcmQ7XG4gIH1cbiAgZ2V0IG1hZ25ldEhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubWFnbmV0SG9sZGVyO1xuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuc3RlcElkKSAmJiAodGhpcy5sb2NhbERhdGEuc3RlcElkID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdFN0ZXBUaW1lKSAmJiAodGhpcy5sb2NhbERhdGEubGFzdFN0ZXBUaW1lID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuY2xpY2tGbGlwQ291bnQpICYmICh0aGlzLmxvY2FsRGF0YS5jbGlja0ZsaXBDb3VudCA9IDApO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxhc3RDbGlja0ZsaXBDb3VudCkgJiYgKHRoaXMubG9jYWxEYXRhLmxhc3RDbGlja0ZsaXBDb3VudCA9IDApO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmRyYWdUaWxlQ291bnQpICYmICh0aGlzLmxvY2FsRGF0YS5kcmFnVGlsZUNvdW50ID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdERyYWdUaWxlQ291bnQpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0RHJhZ1RpbGVDb3VudCA9IDApO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxvY2tUaWxlQ291bnQpICYmICh0aGlzLmxvY2FsRGF0YS5sb2NrVGlsZUNvdW50ID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdExvY2tUaWxlQ291bnQpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0TG9ja1RpbGVDb3VudCA9IDApO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxhc3RTaHVmZmxlQ291bnQpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0U2h1ZmZsZUNvdW50ID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdE1hZ25ldENvdW50KSAmJiAodGhpcy5sb2NhbERhdGEubGFzdE1hZ25ldENvdW50ID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdFJldmVydENvdW50KSAmJiAodGhpcy5sb2NhbERhdGEubGFzdFJldmVydENvdW50ID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdEhpbnRDb3VudCkgJiYgKHRoaXMubG9jYWxEYXRhLmxhc3RIaW50Q291bnQgPSAwKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5sYXN0VG9vbFR5cGUpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0VG9vbFR5cGUgPSB1Lk5vbmUpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnJlYXJyYW5nZWRCb2FyZCkgJiYgKHRoaXMubG9jYWxEYXRhLnJlYXJyYW5nZWRCb2FyZCA9IFwiXCIpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnJldmVydGVkQm9hcmQpICYmICh0aGlzLmxvY2FsRGF0YS5yZXZlcnRlZEJvYXJkID0gXCJcIik7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuZXJyb3JDbGlja3NMaXN0KSAmJiAodGhpcy5sb2NhbERhdGEuZXJyb3JDbGlja3NMaXN0ID0gW10pO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxhc3RIaW50VGlsZXMpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0SGludFRpbGVzID0gW10pO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxhc3RNYWduZXRUaWxlcykgJiYgKHRoaXMubG9jYWxEYXRhLmxhc3RNYWduZXRUaWxlcyA9IFtdKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5tYWduZXRCb2FyZCkgJiYgKHRoaXMubG9jYWxEYXRhLm1hZ25ldEJvYXJkID0gXCJcIik7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubWFnbmV0SG9sZGVyKSAmJiAodGhpcy5sb2NhbERhdGEubWFnbmV0SG9sZGVyID0gXCJcIik7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuaG9sZGVyVXNhZ2VSYXRlcykgJiYgKHRoaXMubG9jYWxEYXRhLmhvbGRlclVzYWdlUmF0ZXMgPSBbXSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuc3RlcER1cmF0aW9uTGlzdCkgJiYgKHRoaXMubG9jYWxEYXRhLnN0ZXBEdXJhdGlvbkxpc3QgPSBbXSk7XG4gIH1cbiAgaXNMb2NhbEVtcHR5KGUpIHtcbiAgICByZXR1cm4gbnVsbCA9PSBlIHx8IFwiXCIgPT09IGU7XG4gIH1cbiAgcmVjb3JkRXJyb3JDbGljayhlLCB0LCBvKSB7XG4gICAgaWYgKCEodGhpcy5sb2NhbERhdGEuZXJyb3JDbGlja3NMaXN0Lmxlbmd0aCA+PSAxNSkpIHtcbiAgICAgIHZhciBuID0gZS5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdCh0KTtcbiAgICAgIGlmIChuKSB7XG4gICAgICAgIGlmIChvID09PSBFRXJyb3JDbGlja1R5cGUuRmxpcCkge1xuICAgICAgICAgIHRoaXMucmVjb3JkQ2xpY2tGbGlwKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG8gPT09IEVFcnJvckNsaWNrVHlwZS5EcmFnKSB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZERyYWdUaWxlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG8gPT09IEVFcnJvckNsaWNrVHlwZS5Mb2NrICYmIHRoaXMucmVjb3JkTG9ja1RpbGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSBlLmdldEdhbWVEYXRhKCkuZ2V0UmVhbFBsYXlUaW1lKCksXG4gICAgICAgICAgciA9IERvdFV0aWwuZ2V0Vml0YVBvcyhuKSxcbiAgICAgICAgICBhID0gdGhpcy5sb2NhbERhdGEuZXJyb3JDbGlja3NMaXN0LFxuICAgICAgICAgIGwgPSBpIC0gKGEubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZVsxXTtcbiAgICAgICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIHJldHVybiBlICsgdDtcbiAgICAgICAgICB9LCAwKSArIHRoaXMubGFzdFN0ZXBUaW1lKTtcbiAgICAgICAgYS5wdXNoKFtyLCBsXSk7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmVycm9yQ2xpY2tzTGlzdCA9IGE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlY29yZENsaWNrRmxpcCgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5jbGlja0ZsaXBDb3VudCsrO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RDbGlja0ZsaXBDb3VudCsrO1xuICB9XG4gIHJlY29yZERyYWdUaWxlKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmRyYWdUaWxlQ291bnQrKztcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0RHJhZ1RpbGVDb3VudCsrO1xuICB9XG4gIHJlY29yZExvY2tUaWxlKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmxvY2tUaWxlQ291bnQrKztcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0TG9ja1RpbGVDb3VudCsrO1xuICB9XG4gIHJlY29yZFNodWZmbGUoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RTaHVmZmxlQ291bnQrKztcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VG9vbFR5cGUgPSB1LlNodWZmbGU7XG4gICAgdGhpcy5sb2NhbERhdGEucmVhcnJhbmdlZEJvYXJkID0gRG90VXRpbC5nZXRMZXZlbERhdGFBc0NhcmRJZChlLmdldFRpbGVNYXBPYmplY3QoKSwgdHJ1ZSk7XG4gIH1cbiAgcmVjb3JkUmV2ZXJ0KGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0UmV2ZXJ0Q291bnQrKztcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VG9vbFR5cGUgPSB1LlJldmVydDtcbiAgICB0aGlzLmxvY2FsRGF0YS5yZXZlcnRlZEJvYXJkID0gRG90VXRpbC5nZXRMZXZlbERhdGFBc0NhcmRJZChlLmdldFRpbGVNYXBPYmplY3QoKSwgdHJ1ZSk7XG4gIH1cbiAgcmVjb3JkSGludChlLCB0KSB7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdEhpbnRDb3VudCsrO1xuICAgIHZhciBvID0gZS5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICBuID0gdC5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIG8uZ2V0VGlsZU9iamVjdChlKTtcbiAgICAgIH0pO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RIaW50VGlsZXMgPSBuLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIERvdFV0aWwuZ2V0Vml0YVBvcyhlKTtcbiAgICB9KTtcbiAgfVxuICByZWNvcmRNYWduZXQoZSwgdCkge1xuICAgIHZhciBvLCBuO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RNYWduZXRDb3VudCsrO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RUb29sVHlwZSA9IHUuTWFnbmV0O1xuICAgIHZhciBpID0gVGlsZU1hcFNpbXVsYXRvci5jcmVhdGVTaW0oZSksXG4gICAgICByID0gdC5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGkuZ2V0VGlsZU9iamVjdChlKTtcbiAgICAgIH0pO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RNYWduZXRUaWxlcyA9IHIubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gRG90VXRpbC5nZXRWaXRhUG9zKGUpO1xuICAgIH0pO1xuICAgIHZhciBhID0gZS5nZXRHYW1lRGF0YSgpLnNsb3RCYXJJZHMsXG4gICAgICBjID0gW10sXG4gICAgICBwID0gYS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGkuZ2V0VGlsZU9iamVjdEJ5UG9zSWQoZSk7XG4gICAgICB9KSxcbiAgICAgIGYgPSBmdW5jdGlvbiBmKGUpIHtcbiAgICAgICAgdmFyIHQgPSBpLmdldFRpbGVPYmplY3QoZSk7XG4gICAgICAgIGlmICghdCkgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgdmFyIG8gPSBwLmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlLmNhcmRJZCA9PT0gdC5jYXJkSWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoLTEgIT09IG8pIHtcbiAgICAgICAgICB2YXIgbiA9IHAuc3BsaWNlKG8sIDEpO1xuICAgICAgICAgIGMucHVzaC5hcHBseShjLCBbLi4ubl0pO1xuICAgICAgICB9XG4gICAgICAgIGMucHVzaCh0KTtcbiAgICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHkgPSBfX3ZhbHVlcyh0KSwgbSA9IHkubmV4dCgpOyAhbS5kb25lOyBtID0geS5uZXh0KCkpIGYobS52YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG0gJiYgIW0uZG9uZSAmJiAobiA9IHkucmV0dXJuKSAmJiBuLmNhbGwoeSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgYy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLmlzVmFsaWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLmxvY2FsRGF0YS5tYWduZXRCb2FyZCA9IERvdFV0aWwuZ2V0TGV2ZWxEYXRhQXNDYXJkSWQoaSwgdHJ1ZSk7XG4gICAgdGhpcy5sb2NhbERhdGEubWFnbmV0SG9sZGVyID0gcC5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLmNhcmRJZDtcbiAgICB9KS5qb2luKFwiLFwiKTtcbiAgICBjLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuaXNWYWxpZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgcmVzZXRBZnRlckRvdChlKSB7XG4gICAgdmFyIHQgPSBlLmdldEdhbWVEYXRhKCkuZ2V0UmVhbFBsYXlUaW1lKCksXG4gICAgICBvID0gdGhpcy5sb2NhbERhdGEubGFzdFN0ZXBUaW1lLFxuICAgICAgbiA9IHRoaXMubG9jYWxEYXRhLnN0ZXBEdXJhdGlvbkxpc3Q7XG4gICAgbi5wdXNoKE1hdGguZmxvb3IodCAtIG8pKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5zdGVwRHVyYXRpb25MaXN0ID0gbjtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0U3RlcFRpbWUgPSB0O1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RDbGlja0ZsaXBDb3VudCA9IDA7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdERyYWdUaWxlQ291bnQgPSAwO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RMb2NrVGlsZUNvdW50ID0gMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0U2h1ZmZsZUNvdW50ID0gMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0UmV2ZXJ0Q291bnQgPSAwO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RIaW50Q291bnQgPSAwO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RNYWduZXRDb3VudCA9IDA7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdFRvb2xUeXBlID0gLTE7XG4gICAgdGhpcy5sb2NhbERhdGEucmVhcnJhbmdlZEJvYXJkID0gXCJcIjtcbiAgICB0aGlzLmxvY2FsRGF0YS5yZXZlcnRlZEJvYXJkID0gXCJcIjtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0SGludFRpbGVzID0gW107XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdE1hZ25ldFRpbGVzID0gW107XG4gICAgdGhpcy5sb2NhbERhdGEubWFnbmV0Qm9hcmQgPSBcIlwiO1xuICAgIHRoaXMubG9jYWxEYXRhLm1hZ25ldEhvbGRlciA9IFwiXCI7XG4gICAgdGhpcy5sb2NhbERhdGEuZXJyb3JDbGlja3NMaXN0ID0gW107XG4gIH1cbiAgcmVjb3JkQWRkU2xvdChlLCB0KSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBvID0gVGlsZU1hcFNpbXVsYXRvci5jcmVhdGVTaW0oZSksXG4gICAgICAgIG4gPSBvLmdldFRpbGVPYmplY3QodCk7XG4gICAgICBpZiAoIW4pIHJldHVybjtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnN0ZXBJZCsrO1xuICAgICAgdGhpcy5yZWNvcmRIb2xkZXJVc2FnZVJhdGUoZSwgbywgbik7XG4gICAgICBEb3RHYW1lQ2xpY2suZG90KGUsIG8sIG4pO1xuICAgICAgdGhpcy5yZXNldEFmdGVyRG90KGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbRG90VHJhY2tlcl0gcmVjb3JkQWRkU2xvdCBlcnJvcjogXCIgKyAobnVsbCA9PSBlID8gdm9pZCAwIDogZS5tZXNzYWdlKSk7XG4gICAgfVxuICB9XG4gIHJlY29yZEhvbGRlclVzYWdlUmF0ZShlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSBlLmdldEdhbWVEYXRhKCksXG4gICAgICBpID0gbi5zbG90QmFySWRzLFxuICAgICAgciA9IG4uc2xvdEJhckNvdW50LFxuICAgICAgYSA9IG5ldyBTZXQoaS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIG87XG4gICAgICAgIHJldHVybiBudWxsID09PSAobyA9IHQuZ2V0VGlsZU9iamVjdEJ5UG9zSWQoZSkpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uY2FyZElkO1xuICAgICAgfSkpO1xuICAgIGlmIChhLmhhcyhvLmNhcmRJZCkpIHtcbiAgICAgIGEuZGVsZXRlKG8uY2FyZElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYS5hZGQoby5jYXJkSWQpO1xuICAgIH1cbiAgICB2YXIgbCA9IGEuc2l6ZSAvIHIsXG4gICAgICBzID0gdGhpcy5sb2NhbERhdGEuaG9sZGVyVXNhZ2VSYXRlcztcbiAgICBzLnB1c2gobCk7XG4gICAgdGhpcy5sb2NhbERhdGEuaG9sZGVyVXNhZ2VSYXRlcyA9IHM7XG4gIH1cbiAgZ2V0SG9sZGVyVXNhZ2VSYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuaG9sZGVyVXNhZ2VSYXRlcztcbiAgfVxuICBnZXRBdmdIb2xkZXJVc2FnZVJhdGUoKSB7XG4gICAgcmV0dXJuIDAgPT09IHRoaXMubG9jYWxEYXRhLmhvbGRlclVzYWdlUmF0ZXMubGVuZ3RoID8gMCA6IHRoaXMubG9jYWxEYXRhLmhvbGRlclVzYWdlUmF0ZXMucmVkdWNlKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gZSArIHQ7XG4gICAgfSwgMCkgLyB0aGlzLmxvY2FsRGF0YS5ob2xkZXJVc2FnZVJhdGVzLmxlbmd0aDtcbiAgfVxuICBnZXRTdGVwRHVyYXRpb25MaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5zdGVwRHVyYXRpb25MaXN0O1xuICB9XG4gIHJlc2V0R2FtZURhdGEoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuc3RlcElkID0gMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0U3RlcFRpbWUgPSAwO1xuICAgIHRoaXMubG9jYWxEYXRhLmNsaWNrRmxpcENvdW50ID0gMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0Q2xpY2tGbGlwQ291bnQgPSAwO1xuICAgIHRoaXMubG9jYWxEYXRhLmRyYWdUaWxlQ291bnQgPSAwO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3REcmFnVGlsZUNvdW50ID0gMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5sb2NrVGlsZUNvdW50ID0gMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0TG9ja1RpbGVDb3VudCA9IDA7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdFNodWZmbGVDb3VudCA9IDA7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdFJldmVydENvdW50ID0gMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0SGludENvdW50ID0gMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0TWFnbmV0Q291bnQgPSAwO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RUb29sVHlwZSA9IHUuTm9uZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5yZWFycmFuZ2VkQm9hcmQgPSBcIlwiO1xuICAgIHRoaXMubG9jYWxEYXRhLnJldmVydGVkQm9hcmQgPSBcIlwiO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RIaW50VGlsZXMgPSBbXTtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0TWFnbmV0VGlsZXMgPSBbXTtcbiAgICB0aGlzLmxvY2FsRGF0YS5tYWduZXRCb2FyZCA9IFwiXCI7XG4gICAgdGhpcy5sb2NhbERhdGEubWFnbmV0SG9sZGVyID0gXCJcIjtcbiAgICB0aGlzLmxvY2FsRGF0YS5lcnJvckNsaWNrc0xpc3QgPSBbXTtcbiAgICB0aGlzLmxvY2FsRGF0YS5ob2xkZXJVc2FnZVJhdGVzID0gW107XG4gICAgdGhpcy5sb2NhbERhdGEuc3RlcER1cmF0aW9uTGlzdCA9IFtdO1xuICB9XG4gIGdldFN0ZXBDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuc3RlcElkO1xuICB9XG4gIGdldEZvcndhcmRTdGVwQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnN0ZXBJZDtcbiAgfVxufSJdfQ==