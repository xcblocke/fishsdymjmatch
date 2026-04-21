"use strict";
cc._RF.push(module, 'c536d8pyAhJdpjMDSle4DCQ', 'Tile2ResultChecker');
// Scripts/process/tile2/Tile2ResultChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ResultChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var Tile2ResultChecker = /** @class */ (function (_super) {
    __extends(Tile2ResultChecker, _super);
    function Tile2ResultChecker(t) {
        return _super.call(this, t) || this;
    }
    Tile2ResultChecker.prototype.getMaxSlotBarCount = function () {
        return this._context.getGameData().slotBarCount;
    };
    Tile2ResultChecker.prototype.checkIsDead = function () {
        var e = this._context.getGameData(), t = e.slotBarIds, o = e.slotBarCount;
        return t.length >= o;
    };
    Tile2ResultChecker.prototype.checkIsEnd = function () {
        var e, t, o, n, i = this._context.getTileMapObject().mapLayers();
        try {
            for (var a = __values(i), l = a.next(); !l.done; l = a.next()) {
                var s = l.value.allCards;
                try {
                    for (var c = (o = void 0, __values(s)), u = c.next(); !u.done; u = c.next()) {
                        var p = u.value;
                        if (p.isValid && !p.getIsInSlotBar())
                            return false;
                    }
                }
                catch (e) {
                    o = {
                        error: e
                    };
                }
                finally {
                    try {
                        u && !u.done && (n = c.return) && n.call(c);
                    }
                    finally {
                        if (o)
                            throw o.error;
                    }
                }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                l && !l.done && (t = a.return) && t.call(a);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return true;
    };
    return Tile2ResultChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2ResultChecker = Tile2ResultChecker;

cc._RF.pop();