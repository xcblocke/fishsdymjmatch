"use strict";
cc._RF.push(module, 'b8d43wW5TNIpZsX66+pgOp9', 'InputTile2AutoMerge');
// Scripts/InputTile2AutoMerge.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./inputbase/InputBase");
var ClearHelper_1 = require("./ClearHelper");
var InputTile2AutoMerge = /** @class */ (function (_super) {
    __extends(InputTile2AutoMerge, _super);
    function InputTile2AutoMerge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2AutoMerge.prototype.excute = function (e) {
        var t, o, n, i, a, s = this.gameContext.getTileMapObject();
        s.updateCanMatchTiles();
        var c = s.getCanMatchTilesHint(), u = null !== (a = this.gameContext.getGameData().slotBarIds) && void 0 !== a ? a : [], p = [], f = null;
        try {
            for (var d = __values(s.tileObjectMap().values()), h = d.next(); !h.done; h = d.next()) {
                var y = h.value;
                if (y.isValid && 0 === y.isCardLock() && false === y.getIsInSlotBar()) {
                    p.push(y.id);
                    !f && this.gameContext.tile2SlotBarChecker.checkCanClearWithTileId(y.id) && (f = y.id);
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                h && !h.done && (o = d.return) && o.call(d);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var m = [], v = [];
        if (u.length >= 3) {
            var g = new Set();
            try {
                for (var _ = __values(u), T = _.next(); !T.done; T = _.next()) {
                    var C = T.value, b = s.getTileObjectByPosId(C);
                    (null == b ? void 0 : b.isValid) && g.add(b.cardId);
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    T && !T.done && (i = _.return) && i.call(_);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
            var E = s.getAllCardTiles().find(function (e) {
                return g.has(e.cardId) && !e.getIsInSlotBar();
            });
            E && (v = [E.id]);
        }
        if (0 === m.length && f) {
            m = [f];
        }
        else {
            0 === m.length && c.length > 0 && (m = c[0].slice(0, 2).map(function (e) {
                return e.id;
            }));
        }
        if (0 === m.length) {
            var S = this.gameContext.tile2HitTipsChecker.computeTile2Hint();
            if (S) {
                m = [S.clearId1, S.clearId2].filter(Boolean);
            }
            else {
                p.length > 0 && (m = [p[0]]);
            }
        }
        m.length > 0 && ClearHelper_1.default.runClear(this.gameContext, e, this, {
            tileIds: m,
            outTiles: v
        });
    };
    return InputTile2AutoMerge;
}(InputBase_1.InputBase));
exports.default = InputTile2AutoMerge;

cc._RF.pop();