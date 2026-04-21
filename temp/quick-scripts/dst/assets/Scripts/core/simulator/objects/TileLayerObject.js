
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/objects/TileLayerObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL29iamVjdHMvVGlsZUxheWVyT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFDcEQ7SUFVRSx5QkFBWSxDQUFDO1FBVGIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixnQkFBVyxHQUFHLElBQUksQ0FBQztRQVFqQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLHNCQUFZLENBQUMsYUFBYSxHQUFHLHNCQUFZLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBVEQsc0JBQUkscUNBQVE7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHVDQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFLRCwwQ0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pHO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FB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QUFFLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBdkZBLEFBdUZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUNvbnN0YW50IGZyb20gJy4uL2NvbnN0YW50L0dhbWVDb25zdGFudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlTGF5ZXJPYmplY3Qge1xuICBfZ3JpZHMgPSBbXTtcbiAgX2FsbENhcmRzID0gW107XG4gIF9sYXllckluZGV4ID0gbnVsbDtcbiAgZ2V0IGFsbENhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxDYXJkcztcbiAgfVxuICBnZXQgbGF5ZXJJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF5ZXJJbmRleDtcbiAgfVxuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgdGhpcy5fbGF5ZXJJbmRleCA9IGU7XG4gICAgdGhpcy5fZ3JpZHMgPSBuZXcgQXJyYXkoR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFggKiBHYW1lQ29uc3RhbnQuTWF4VGlsZUNvdW50WSAqIDQpLmZpbGwobnVsbCk7XG4gIH1cbiAgdXBkYXRlTGF5ZXJJbmRleChlKSB7XG4gICAgdmFyIHQsIG87XG4gICAgdGhpcy5fbGF5ZXJJbmRleCA9IGU7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyh0aGlzLl9hbGxDYXJkcyksIHIgPSBpLm5leHQoKTsgIXIuZG9uZTsgciA9IGkubmV4dCgpKSByLnZhbHVlLnNldExheWVyKGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICByICYmICFyLmRvbmUgJiYgKG8gPSBpLnJldHVybikgJiYgby5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFkZENhcmQoZSkge1xuICAgIGZvciAodmFyIHQgPSAwLCBvID0gdGhpcy5hbGxDYXJkcy5sZW5ndGggLSAxLCBuID0gLTE7IHQgPD0gbzspIHtcbiAgICAgIHZhciBpID0gTWF0aC5mbG9vcigodCArIG8pIC8gMiksXG4gICAgICAgIHIgPSB0aGlzLmNvbXBhcmUoZSwgdGhpcy5hbGxDYXJkc1tpXSk7XG4gICAgICBpZiAoMCA9PT0gcikge1xuICAgICAgICBuID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAociA8IDApIHtcbiAgICAgICAgbyA9IGkgLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdCA9IGkgKyAxO1xuICAgICAgfVxuICAgIH1cbiAgICBuIDwgMCAmJiAobiA9IHQpO1xuICAgIHRoaXMuX2FsbENhcmRzLnNwbGljZShuLCAwLCBlKTtcbiAgICB0aGlzLmFkZFRvT3duZXIoZSk7XG4gIH1cbiAgaGFzVmFsaWRDYXJkKCkge1xuICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5fYWxsQ2FyZHMubGVuZ3RoOyBlKyspIGlmICh0aGlzLl9hbGxDYXJkc1tlXS5pc1ZhbGlkKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmVtb3ZlQ2FyZChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9hbGxDYXJkcy5pbmRleE9mKGUpO1xuICAgIGlmICghKHQgPCAwKSkge1xuICAgICAgdGhpcy5fYWxsQ2FyZHMuc3BsaWNlKHQsIDEpO1xuICAgICAgdGhpcy5yZWZyZXNoR3JpZFN0YXRlX1JlbW92ZShlKTtcbiAgICB9XG4gIH1cbiAgY29tcGFyZShlLCB0KSB7XG4gICAgdmFyIG8gPSBlLmdyaWRQb3NYICsgMiAqIGUuZ3JpZFBvc1ksXG4gICAgICBuID0gdC5ncmlkUG9zWCArIDIgKiB0LmdyaWRQb3NZO1xuICAgIHJldHVybiBlLmxheWVyICE9PSB0LmxheWVyID8gZS5sYXllciAtIHQubGF5ZXIgOiBvID09PSBuID8gZS5ncmlkUG9zWCAtIHQuZ3JpZFBvc1ggOiBvIC0gbjtcbiAgfVxuICBhZGRUb093bmVyKGUpIHtcbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IGUub3duZXJHcmlkSWRzLmxlbmd0aDsgdCsrKSB7XG4gICAgICB2YXIgbyA9IGUub3duZXJHcmlkSWRzW3RdO1xuICAgICAgbyA8IDAgfHwgbyA+PSB0aGlzLl9ncmlkcy5sZW5ndGggfHwgKHRoaXMuX2dyaWRzW29dID0gZSk7XG4gICAgfVxuICB9XG4gIGlzSGFzQ2FyZChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldEdyaWRDYXJkKGUpO1xuICAgIHJldHVybiBudWxsICE9IHQgJiYgdC5pc1ZhbGlkICYmICF0LmdldElzSW5TbG90QmFyKCk7XG4gIH1cbiAgZ2V0R3JpZENhcmQoZSkge1xuICAgIHJldHVybiBlIDwgMCB8fCBlID49IHRoaXMuX2dyaWRzLmxlbmd0aCA/IG51bGwgOiB0aGlzLl9ncmlkc1tlXTtcbiAgfVxuICByZWZyZXNoR3JpZFN0YXRlX1JlbW92ZShlKSB7XG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCBlLm93bmVyR3JpZElkcy5sZW5ndGg7IHQrKykgdGhpcy5fZ3JpZHNbZS5vd25lckdyaWRJZHNbdF1dID0gbnVsbDtcbiAgfVxuICByZWZyZXNoR3JpZFN0YXRlX0FkZChlKSB7XG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCBlLm93bmVyR3JpZElkcy5sZW5ndGg7ICsrdCkge1xuICAgICAgdmFyIG8gPSBlLm93bmVyR3JpZElkc1t0XTtcbiAgICAgIG8gPCAwIHx8IG8gPj0gdGhpcy5fZ3JpZHMubGVuZ3RoIHx8ICh0aGlzLl9ncmlkc1tvXSA9IGUpO1xuICAgIH1cbiAgfVxufSJdfQ==