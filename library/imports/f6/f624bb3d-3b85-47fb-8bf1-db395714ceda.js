"use strict";
cc._RF.push(module, 'f624bs9O4VH+4vx2zlXFM7a', 'InputTile2DuoxiaoAuto');
// Scripts/InputTile2DuoxiaoAuto.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./inputbase/InputBase");
var ClearHelper_1 = require("./ClearHelper");
var InputTile2DuoxiaoAuto = /** @class */ (function (_super) {
    __extends(InputTile2DuoxiaoAuto, _super);
    function InputTile2DuoxiaoAuto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2DuoxiaoAuto.prototype.excute = function (e) {
        if (!(this.gameContext.getDuoxiaoClearCount() <= 0)) {
            var t = this.gameContext.getTileMapObject();
            t.updateCanMatchTiles();
            var o = t.getCanMatchTilesHint();
            if (o.length) {
                this.gameContext.duoxiaoModifier.decreaseDuoxiaoClearCount();
                var n = __read(this.findMatchTile(o), 2), i = n[0], a = n[1];
                i && a && ClearHelper_1.default.runClear(this.gameContext, e, this, {
                    tileIds: [i, a]
                });
            }
            else
                this.gameContext.duoxiaoModifier.resetDuoxiaoClearCount();
        }
    };
    InputTile2DuoxiaoAuto.prototype.findMatchTile = function (e) {
        var t, o, n, i, r, l;
        try {
            for (var s = __values(e), c = s.next(); !c.done; c = s.next()) {
                var u = c.value;
                if (u.length >= 2 && !u[0].getIsInSlotBar() && !u[1].getIsInSlotBar())
                    return [null === (n = u[0]) || void 0 === n ? void 0 : n.id, null === (i = u[1]) || void 0 === i ? void 0 : i.id];
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (o = s.return) && o.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var p = e[0];
        return [null === (r = p[0]) || void 0 === r ? void 0 : r.id, null === (l = p[1]) || void 0 === l ? void 0 : l.id];
    };
    return InputTile2DuoxiaoAuto;
}(InputBase_1.InputBase));
exports.default = InputTile2DuoxiaoAuto;

cc._RF.pop();