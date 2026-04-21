"use strict";
cc._RF.push(module, '8da69ySi1dFbq2W/TM1nFoG', 'BombAvoidDeadTrait');
// subpackages/l_deathAnalyze/Scripts/BombAvoidDeadTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractNormalLevels_1 = require("../../../Scripts/core/extractQuestion/ExtractNormalLevels");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DeathAnalyserMgr_1 = require("../../../Scripts/DeathAnalyserMgr");
var u;
(function (u) {
    u[u["NonDeathGroup"] = 1] = "NonDeathGroup";
    u[u["DeathGroup"] = 2] = "DeathGroup";
    u[u["DeathRate"] = 3] = "DeathRate";
})(u || (u = {}));
var BombAvoidDeadTrait = /** @class */ (function (_super) {
    __extends(BombAvoidDeadTrait, _super);
    function BombAvoidDeadTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BombAvoidDeadTrait.prototype, "deathLimit", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.deathLimit) && void 0 !== e ? e : 3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BombAvoidDeadTrait.prototype, "strategy", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.strategy) && void 0 !== e ? e : u.NonDeathGroup;
        },
        enumerable: false,
        configurable: true
    });
    BombAvoidDeadTrait.prototype.onBombCdTp_filterList = function (t, e) {
        var r = this, n = (null == t ? void 0 : t.beforReturnVal) || [];
        n.push({
            filter: function (t, e, n) {
                return r.filter(t, e, n);
            }
        });
        e({
            returnVal: n
        });
    };
    BombAvoidDeadTrait.prototype.filter = function (t, e, r) {
        var n = mj.getClassByName("DeathAnalyserTrait");
        if (!n || !n.getInstance() || !n.getInstance().eventEnabled)
            return [false, 999];
        var i = DeathAnalyserMgr_1.default.instance.analyzeCardPair(t);
        if (i.levelAllDeathPairs.length <= 0)
            return [false, 999];
        if (this.isDeathGroup([e, r], i)) {
            return [true, this.getPriority()];
        }
        return [false, 999];
    };
    BombAvoidDeadTrait.prototype.getPriority = function () {
        var t, e;
        switch (this.strategy) {
            case u.NonDeathGroup:
                return 999;
            case u.DeathGroup:
                return 0;
            case u.DeathRate:
                return (null !== (e = null === (t = ExtractNormalLevels_1.default.getInstance().getData()) || void 0 === t ? void 0 : t.dieDimensionValue) && void 0 !== e ? e : 1) >= this.deathLimit ? 0 : 999;
        }
        return 999;
    };
    BombAvoidDeadTrait.prototype.isDeathGroup = function (t, e) {
        var r, n, i, a, u = __read(t, 2), c = u[0], f = u[1];
        try {
            for (var s = __values(e.levelAllDeathPairs), d = s.next(); !d.done; d = s.next()) {
                var y = d.value;
                try {
                    for (var h = (i = void 0, __values(y)), p = h.next(); !p.done; p = h.next())
                        if (p.value.isEqual({
                            tile1Id: c.id,
                            tile2Id: f.id
                        }))
                            return true;
                }
                catch (t) {
                    i = {
                        error: t
                    };
                }
                finally {
                    try {
                        p && !p.done && (a = h.return) && a.call(h);
                    }
                    finally {
                        if (i)
                            throw i.error;
                    }
                }
            }
        }
        catch (t) {
            r = {
                error: t
            };
        }
        finally {
            try {
                d && !d.done && (n = s.return) && n.call(s);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return false;
    };
    BombAvoidDeadTrait.traitKey = "BombAvoidDead";
    BombAvoidDeadTrait = __decorate([
        mj.trait,
        mj.class("BombAvoidDeadTrait")
    ], BombAvoidDeadTrait);
    return BombAvoidDeadTrait;
}(Trait_1.default));
exports.default = BombAvoidDeadTrait;

cc._RF.pop();