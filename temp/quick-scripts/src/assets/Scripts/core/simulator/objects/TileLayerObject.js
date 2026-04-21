"use strict";
cc._RF.push(module, '8765aB9d8dLgZg/V2FMzBYO', 'TileLayerObject');
// Scripts/core/simulator/objects/TileLayerObject.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameConstant_1 = require("../constant/GameConstant");
var TileLayerObject = /** @class */ (function () {
    function TileLayerObject(e) {
        this._grids = [];
        this._allCards = [];
        this._layerIndex = null;
        this._layerIndex = e;
        this._grids = new Array(GameConstant_1.default.MaxTileCountX * GameConstant_1.default.MaxTileCountY * 4).fill(null);
    }
    Object.defineProperty(TileLayerObject.prototype, "allCards", {
        get: function () {
            return this._allCards;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileLayerObject.prototype, "layerIndex", {
        get: function () {
            return this._layerIndex;
        },
        enumerable: false,
        configurable: true
    });
    TileLayerObject.prototype.updateLayerIndex = function (e) {
        var t, o;
        this._layerIndex = e;
        try {
            for (var i = __values(this._allCards), r = i.next(); !r.done; r = i.next())
                r.value.setLayer(e);
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    TileLayerObject.prototype.addCard = function (e) {
        for (var t = 0, o = this.allCards.length - 1, n = -1; t <= o;) {
            var i = Math.floor((t + o) / 2), r = this.compare(e, this.allCards[i]);
            if (0 === r) {
                n = i;
                break;
            }
            if (r < 0) {
                o = i - 1;
            }
            else {
                t = i + 1;
            }
        }
        n < 0 && (n = t);
        this._allCards.splice(n, 0, e);
        this.addToOwner(e);
    };
    TileLayerObject.prototype.hasValidCard = function () {
        for (var e = 0; e < this._allCards.length; e++)
            if (this._allCards[e].isValid)
                return true;
        return false;
    };
    TileLayerObject.prototype.removeCard = function (e) {
        var t = this._allCards.indexOf(e);
        if (!(t < 0)) {
            this._allCards.splice(t, 1);
            this.refreshGridState_Remove(e);
        }
    };
    TileLayerObject.prototype.compare = function (e, t) {
        var o = e.gridPosX + 2 * e.gridPosY, n = t.gridPosX + 2 * t.gridPosY;
        return e.layer !== t.layer ? e.layer - t.layer : o === n ? e.gridPosX - t.gridPosX : o - n;
    };
    TileLayerObject.prototype.addToOwner = function (e) {
        for (var t = 0; t < e.ownerGridIds.length; t++) {
            var o = e.ownerGridIds[t];
            o < 0 || o >= this._grids.length || (this._grids[o] = e);
        }
    };
    TileLayerObject.prototype.isHasCard = function (e) {
        var t = this.getGridCard(e);
        return null != t && t.isValid && !t.getIsInSlotBar();
    };
    TileLayerObject.prototype.getGridCard = function (e) {
        return e < 0 || e >= this._grids.length ? null : this._grids[e];
    };
    TileLayerObject.prototype.refreshGridState_Remove = function (e) {
        for (var t = 0; t < e.ownerGridIds.length; t++)
            this._grids[e.ownerGridIds[t]] = null;
    };
    TileLayerObject.prototype.refreshGridState_Add = function (e) {
        for (var t = 0; t < e.ownerGridIds.length; ++t) {
            var o = e.ownerGridIds[t];
            o < 0 || o >= this._grids.length || (this._grids[o] = e);
        }
    };
    return TileLayerObject;
}());
exports.default = TileLayerObject;

cc._RF.pop();