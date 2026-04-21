"use strict";
cc._RF.push(module, '20658F24WhPJZup64VBHiCx', 'HolderPriorityShuffler');
// Scripts/HolderPriorityShuffler.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HolderPriorityShuffler = void 0;
var BaseCoreObject_1 = require("./BaseCoreObject");
var HolderPriorityShuffler = /** @class */ (function (_super) {
    __extends(HolderPriorityShuffler, _super);
    function HolderPriorityShuffler(t) {
        return _super.call(this, t) || this;
    }
    HolderPriorityShuffler.prototype.apply = function (e) {
        var t = this._context.getTileMapObject(), o = this._context.getGameData(), n = this.pickHolderCardIds(o, t, e);
        if (0 !== n.length)
            for (var i = 0; i < n.length; i++)
                this.ensureMatchable(n[i], t, e);
    };
    HolderPriorityShuffler.prototype.hasSolution = function () {
        var e = this._context.getTileMapObject();
        e.updateCanMatchTiles();
        return e.getCanMatchCardPairNum() > 0;
    };
    HolderPriorityShuffler.prototype.ensureMatchable = function (e, t, o) {
        var n = t.getAllCardTiles().filter(function (e) {
            return !e.getIsInSlotBar() && 0 === t.isCardLock(e) && !e.generating;
        });
        if (!n.some(function (t) {
            return t.cardId === e && (o.includeBack || !t.getIsBack());
        })) {
            var i = t.getAllCardTiles().filter(function (o) {
                return !o.getIsInSlotBar() && o.cardId === e && 0 !== t.isCardLock(o);
            })[0];
            if (i) {
                var r = n.filter(function (t) {
                    return t.cardId !== e;
                });
                if (0 !== r.length) {
                    var a = r[Math.floor(Math.random() * r.length)];
                    t.swapTilePositions(i.id, a.id);
                }
            }
        }
    };
    HolderPriorityShuffler.prototype.pickHolderCardIds = function (e, t, o) {
        var n = e.slotBarIds;
        if (!n || 0 === n.length)
            return [];
        var i = n.map(function (e) {
            return t.getTileObjectByPosId(e);
        }).filter(function (e) {
            return !!e;
        });
        if (0 === i.length)
            return [];
        switch (o.holderPickMode) {
            case "all":
                return i.map(function (e) {
                    return e.cardId;
                });
            case "eachOne":
                return __spreadArrays(new Set(i.map(function (e) {
                    return e.cardId;
                })));
            case "mostCountOne":
                var r = new Map();
                i.forEach(function (e) {
                    var t;
                    r.set(e.cardId, (null !== (t = r.get(e.cardId)) && void 0 !== t ? t : 0) + 1);
                });
                var l = -1, s = 0;
                r.forEach(function (e, t) {
                    if (e > s) {
                        s = e;
                        l = t;
                    }
                });
                return -1 === l ? [] : i.filter(function (e) {
                    return e.cardId === l;
                }).map(function (e) {
                    return e.cardId;
                });
            default:
                return [];
        }
    };
    return HolderPriorityShuffler;
}(BaseCoreObject_1.BaseCoreObject));
exports.HolderPriorityShuffler = HolderPriorityShuffler;

cc._RF.pop();