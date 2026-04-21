"use strict";
cc._RF.push(module, 'c3b61BN2XdH3blc1A3s/AZV', 'CancelSelOnlockTrait');
// subpackages/l_cancelselonlock/Scripts/CancelSelOnlockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var CancelSelOnlockTrait = /** @class */ (function (_super) {
    __extends(CancelSelOnlockTrait, _super);
    function CancelSelOnlockTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CancelSelOnlockTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CancelSelOnlockTrait.prototype.onIptTchStart_Lock = function (t, e) {
        var r = t.args[0], o = t.ins, n = o.gameContext.getTileMapObject();
        if (r) {
            var i = n.getSelectTileIds();
            if (1 != i.length) {
                e();
                return;
            }
            var a = i[0], l = n.getTileObject(a), c = n.getTileObject(r);
            if (l && c && l.isValid && c.isValid && (this.isAdjacent(l, c) || this.isCoverLockTile(n, c, l))) {
                o.pushUnSelectAllTileIds();
                e();
                return;
            }
        }
        e();
    };
    CancelSelOnlockTrait.prototype.isAdjacent = function (t, e) {
        if (t.layer == e.layer) {
            var r = Math.abs(t.gridPosX - e.gridPosX) <= 2 && Math.abs(t.gridPosY - e.gridPosY) <= 1, o = Math.abs(t.gridPosX - e.gridPosX) <= 1 && Math.abs(t.gridPosY - e.gridPosY) <= 2;
            if (r || o)
                return true;
        }
        return false;
    };
    CancelSelOnlockTrait.prototype.isCoverLockTile = function (t, e, r) {
        for (var o, n, i = [], l = false, c = e.layer + 1; c <= t.maxLayerIndex; c++)
            for (var f = 0; f < e.ownerGridIds.length; f++) {
                var u = t.getTileObjectByGridIndex(c, e.ownerGridIds[f]);
                if (u) {
                    i.push(u);
                    u.id == r.id && (l = true);
                }
            }
        if (l) {
            try {
                for (var s = __values(i), p = s.next(); !p.done; p = s.next())
                    if (p.value.layer < r.layer)
                        return false;
            }
            catch (t) {
                o = {
                    error: t
                };
            }
            finally {
                try {
                    p && !p.done && (n = s.return) && n.call(s);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            return true;
        }
        return false;
    };
    CancelSelOnlockTrait.traitKey = "CancelSelOnlock";
    CancelSelOnlockTrait = __decorate([
        mj.trait,
        mj.class("CancelSelOnlockTrait")
    ], CancelSelOnlockTrait);
    return CancelSelOnlockTrait;
}(Trait_1.default));
exports.default = CancelSelOnlockTrait;

cc._RF.pop();