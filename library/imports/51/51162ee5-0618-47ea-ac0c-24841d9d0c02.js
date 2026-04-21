"use strict";
cc._RF.push(module, '511627lBhhH6qwMJIQdnQwC', 'Tile2SlotBarData');
// Scripts/data/Tile2SlotBarData.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2SlotBarData = void 0;
var Tile2SlotBarData = /** @class */ (function () {
    function Tile2SlotBarData() {
        this._canDianZanTileIds = null;
        this._slotBarTileSteps = {};
        this._slotBarTileClearSteps = {};
        this._rollCardLockTileIds = {};
    }
    Object.defineProperty(Tile2SlotBarData.prototype, "slotBarTileSteps", {
        get: function () {
            return this._slotBarTileSteps;
        },
        set: function (e) {
            this._slotBarTileSteps = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2SlotBarData.prototype, "canDianZanTileIds", {
        get: function () {
            return this._canDianZanTileIds;
        },
        set: function (e) {
            this._canDianZanTileIds = e || [];
        },
        enumerable: false,
        configurable: true
    });
    Tile2SlotBarData.prototype.addTileStep = function (e) {
        if (this._slotBarTileSteps[e]) {
            this._slotBarTileSteps[e]++;
        }
        else {
            this._slotBarTileSteps[e] = 1;
        }
    };
    Tile2SlotBarData.prototype.resetTileStep = function (e) {
        this._slotBarTileSteps[e] && delete this._slotBarTileSteps[e];
    };
    Tile2SlotBarData.prototype.getTileStep = function (e) {
        return this._slotBarTileSteps[e] || 0;
    };
    Tile2SlotBarData.prototype.clearTileStep = function (e) {
        if (e && 0 !== e.length)
            for (var t = Object.keys(this._slotBarTileSteps), o = 0; o < t.length; o++) {
                var n = t[o];
                e.includes(n) || this.resetTileStep(n);
            }
    };
    Tile2SlotBarData.prototype.addTileClearStep = function (e) {
        if (this._slotBarTileClearSteps[e]) {
            this._slotBarTileClearSteps[e]++;
        }
        else {
            this._slotBarTileClearSteps[e] = 1;
        }
    };
    Tile2SlotBarData.prototype.getTileClearStep = function (e) {
        return this._slotBarTileClearSteps[e] || 0;
    };
    Tile2SlotBarData.prototype.resetTileClearStep = function (e) {
        this._slotBarTileClearSteps[e] && delete this._slotBarTileClearSteps[e];
    };
    Tile2SlotBarData.prototype.clearTileClearSteps = function (e) {
        var t, o;
        if (e && 0 !== e.length) {
            var i = Object.keys(this._slotBarTileClearSteps);
            try {
                for (var r = __values(i), a = r.next(); !a.done; a = r.next()) {
                    var l = a.value;
                    e.includes(l) || this.resetTileClearStep(l);
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
        }
    };
    Tile2SlotBarData.prototype.addRollCardLockTileId = function (e, t) {
        this._rollCardLockTileIds || (this._rollCardLockTileIds = {});
        this._rollCardLockTileIds[e] = t;
    };
    Tile2SlotBarData.prototype.getRollCardLockTileIds = function () {
        return this._rollCardLockTileIds ? Object.keys(this._rollCardLockTileIds) : [];
    };
    Tile2SlotBarData.prototype.removeRollCardLockTileId = function (e) {
        this._rollCardLockTileIds && this._rollCardLockTileIds[e] && delete this._rollCardLockTileIds[e];
    };
    Tile2SlotBarData.prototype.clearCardLockData = function () {
        this._rollCardLockTileIds && (this._rollCardLockTileIds = null);
    };
    Tile2SlotBarData.prototype.clearCanDianZanTileIds = function () {
        this._canDianZanTileIds && (this._canDianZanTileIds = null);
    };
    return Tile2SlotBarData;
}());
exports.Tile2SlotBarData = Tile2SlotBarData;

cc._RF.pop();