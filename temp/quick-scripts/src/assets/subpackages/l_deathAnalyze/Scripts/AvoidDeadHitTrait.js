"use strict";
cc._RF.push(module, '6357c3H6DNCgYSdoGOIiPCs', 'AvoidDeadHitTrait');
// subpackages/l_deathAnalyze/Scripts/AvoidDeadHitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractNormalLevels_1 = require("../../../Scripts/core/extractQuestion/ExtractNormalLevels");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DeadSelectUtils_1 = require("./DeadSelectUtils");
var DeathAnalyserMgr_1 = require("../../../Scripts/DeathAnalyserMgr");
var u;
(function (u) {
    u[u["NonDeathGroupHint"] = 1] = "NonDeathGroupHint";
    u[u["DeathGroupHint"] = 2] = "DeathGroupHint";
    u[u["DeathRateHint"] = 3] = "DeathRateHint";
})(u || (u = {}));
var AvoidDeadHitTrait = /** @class */ (function (_super) {
    __extends(AvoidDeadHitTrait, _super);
    function AvoidDeadHitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AvoidDeadHitTrait.prototype, "deathLimit", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.deathLimit) && void 0 !== e ? e : 3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AvoidDeadHitTrait.prototype, "strategy", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.strategy) && void 0 !== e ? e : u.NonDeathGroupHint;
        },
        enumerable: false,
        configurable: true
    });
    AvoidDeadHitTrait.prototype.onIptHitTips_findHint = function (t, e) {
        var r, n = mj.getClassByName("DeathAnalyserTrait");
        if (n && n.getInstance() && n.getInstance().eventEnabled) {
            var i = DeathAnalyserMgr_1.default.instance.analyzeCardPair(null === (r = t.ins) || void 0 === r ? void 0 : r.gameContext);
            if (i.levelAllDeathPairs.length <= 0)
                e();
            else {
                var a = this.findHintTile(t.args[0], i);
                if (!a || a.length <= 0) {
                    e();
                }
                else {
                    e({
                        returnType: TraitCallbackReturnType.return,
                        returnVal: a,
                        isBreak: true
                    });
                }
            }
        }
        else
            e();
    };
    AvoidDeadHitTrait.prototype.randomHintTile = function (t) {
        if (t.length <= 0)
            return [];
        var e = t[Math.floor(Math.random() * t.length)];
        return [e.tile1, e.tile2];
    };
    AvoidDeadHitTrait.prototype.findHintTile = function (t, e) {
        switch (this.strategy) {
            case u.NonDeathGroupHint:
                return this.nonDeathGroupHint(t, e);
            case u.DeathGroupHint:
                return this.deathGroupHint(t, e);
            case u.DeathRateHint:
                return this.deathRateHint(t, e);
        }
        return [];
    };
    AvoidDeadHitTrait.prototype.deathGroupHint = function (t, e) {
        var r, n, i, a, l = [];
        try {
            for (var u = __values(t), c = u.next(); !c.done; c = u.next()) {
                var f = c.value, d = DeadSelectUtils_1.DeadSelectUtils.getAllMatchTiles(f);
                try {
                    for (var y = (i = void 0, __values(d)), h = y.next(); !h.done; h = y.next()) {
                        var p = h.value, v = this.isDeathGroup(p, e);
                        l.push({
                            tile1: p[0],
                            tile2: p[1],
                            priority: v
                        });
                    }
                }
                catch (t) {
                    i = {
                        error: t
                    };
                }
                finally {
                    try {
                        h && !h.done && (a = y.return) && a.call(y);
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
                c && !c.done && (n = u.return) && n.call(u);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        if (l.length <= 0)
            return [];
        l.sort(function (t, e) {
            return e.priority - t.priority;
        });
        var D = l[0].priority, g = l.filter(function (t) {
            return t.priority === D;
        });
        return this.randomHintTile(g);
    };
    AvoidDeadHitTrait.prototype.nonDeathGroupHint = function (t, e) {
        var r, n, i, a, l = [];
        try {
            for (var u = __values(t), c = u.next(); !c.done; c = u.next()) {
                var f = c.value, d = DeadSelectUtils_1.DeadSelectUtils.getAllMatchTiles(f);
                try {
                    for (var y = (i = void 0, __values(d)), h = y.next(); !h.done; h = y.next()) {
                        var p = h.value, v = this.isDeathGroup(p, e);
                        l.push({
                            tile1: p[0],
                            tile2: p[1],
                            priority: v
                        });
                    }
                }
                catch (t) {
                    i = {
                        error: t
                    };
                }
                finally {
                    try {
                        h && !h.done && (a = y.return) && a.call(y);
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
                c && !c.done && (n = u.return) && n.call(u);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        if (l.length <= 0)
            return [];
        l.sort(function (t, e) {
            return t.priority - e.priority;
        });
        var D = l[0].priority, g = l.filter(function (t) {
            return t.priority === D;
        });
        return this.randomHintTile(g);
    };
    AvoidDeadHitTrait.prototype.isDeathGroup = function (t, e) {
        var r, n, i, a, u = __read(t, 2), c = u[0], f = u[1], s = 0;
        try {
            for (var d = __values(e.levelAllDeathPairs), y = d.next(); !y.done; y = d.next()) {
                var h = y.value;
                try {
                    for (var p = (i = void 0, __values(h)), v = p.next(); !v.done; v = p.next()) {
                        var D = v.value;
                        if (D.isEqual({
                            tile1Id: c.id,
                            tile2Id: f.id
                        }))
                            return s = 2;
                        (D.containsTile(c.id) || D.containsTile(f.id)) && (s = 1);
                    }
                }
                catch (t) {
                    i = {
                        error: t
                    };
                }
                finally {
                    try {
                        v && !v.done && (a = p.return) && a.call(p);
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
                y && !y.done && (n = d.return) && n.call(d);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return s;
    };
    AvoidDeadHitTrait.prototype.deathRateHint = function (t, e) {
        var r, n;
        return (null !== (n = null === (r = ExtractNormalLevels_1.default.getInstance().getData()) || void 0 === r ? void 0 : r.dieDimensionValue) && void 0 !== n ? n : 1) >= this.deathLimit ? this.deathGroupHint(t, e) : this.nonDeathGroupHint(t, e);
    };
    AvoidDeadHitTrait.traitKey = "AvoidDeadHit";
    AvoidDeadHitTrait = __decorate([
        mj.trait,
        mj.class("AvoidDeadHitTrait")
    ], AvoidDeadHitTrait);
    return AvoidDeadHitTrait;
}(Trait_1.default));
exports.default = AvoidDeadHitTrait;

cc._RF.pop();