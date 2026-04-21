"use strict";
cc._RF.push(module, '441a0L2nnlKw7RsUDO9NBu4', 'Tile2PreFillTrait');
// subpackages/l_tile2PreFill/Scripts/Tile2PreFillTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var LevelUtil_1 = require("../../../Scripts/core/simulator/config/LevelUtil");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileMapSimulator_1 = require("../../../Scripts/objects/TileMapSimulator");
var SolverUtils_1 = require("../../../Scripts/SolverUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Tile2PreFillTrait = /** @class */ (function (_super) {
    __extends(Tile2PreFillTrait, _super);
    function Tile2PreFillTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2PreFillTrait.prototype.onLoad = function () {
        var e, i, r, o, a, l, n, s, c;
        _super.prototype.onLoad.call(this);
        this._config = {
            minDay: null !== (e = this._traitData.minDay) && void 0 !== e ? e : 2,
            minLevel: null !== (i = this._traitData.minLevel) && void 0 !== i ? i : 31,
            afterTriggerWeight: null !== (r = this._traitData.afterTriggerWeight) && void 0 !== r ? r : 0,
            nonTriggerThreshold: null !== (o = this._traitData.nonTriggerThreshold) && void 0 !== o ? o : 2,
            increaseAmount: null !== (a = this._traitData.increaseAmount) && void 0 !== a ? a : 0.25,
            countWeights: null !== (l = this._traitData.countWeights) && void 0 !== l ? l : [1, 1, 1],
            relativePositions: null !== (n = this._traitData.relativePositions) && void 0 !== n ? n : [0.5, 0.5],
            threshold1: null !== (s = this._traitData.threshold1) && void 0 !== s ? s : 0.75,
            threshold2: null !== (c = this._traitData.threshold2) && void 0 !== c ? c : 0.5
        };
        this.isEmptyField(this.localData.consecutiveNonTrigger) && (this.localData.consecutiveNonTrigger = 0);
        this.isEmptyField(this.localData.hasEverTriggered) && (this.localData.hasEverTriggered = false);
        this.isEmptyField(this.localData.preFilledSlotBarIds) && (this.localData.preFilledSlotBarIds = []);
    };
    Tile2PreFillTrait.prototype.isEmptyField = function (t) {
        return null == t || "" === t;
    };
    Tile2PreFillTrait.prototype.isSupportMode = function (t) {
        return t === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2PreFillTrait.prototype.isTriggered = function () {
        return this.localData.preFilledSlotBarIds.length > 0;
    };
    Tile2PreFillTrait.prototype.resetTriggeredInfo = function () {
        this.localData.preFilledSlotBarIds = [];
    };
    Tile2PreFillTrait.prototype.onIptT2SetLv_newGmComplete = function (t, e) {
        var i = t.ins.gameContext;
        if (this.isSupportMode(i.gameType)) {
            if (i.getIsRestart()) {
                this.isTriggered() && i.getGameData().resetSlotBarIds(this.localData.preFilledSlotBarIds);
                e();
            }
            else if (i.getIsNewGame()) {
                try {
                    this.tryPreFill(i);
                }
                catch (t) {
                    console.error("[Tile2PreFill] 预填块异常: " + ((null == t ? void 0 : t.message) || "未知错误"));
                }
                e();
            }
            else
                e();
        }
        else
            e();
    };
    Tile2PreFillTrait.prototype.getActiveDays = function () {
        var t;
        return null !== (t = LoginModel_1.default.getInstance().activeDay) && void 0 !== t ? t : 1;
    };
    Tile2PreFillTrait.prototype.getNormalLevel = function () {
        return UserModel_1.default.getInstance().getMainGameData().getLevelId() || 0;
    };
    Tile2PreFillTrait.prototype.tryPreFill = function (t) {
        var e = this.getActiveDays(), i = this.getNormalLevel();
        if (!(e < this._config.minDay || i < this._config.minLevel)) {
            this.resetTriggeredInfo();
            if (this.checkProbability()) {
                var r = t.getGameData(), o = TileMapSimulator_1.TileMapSimulator.createSim(t), a = r.getSolvers();
                if (a) {
                    var l = LevelUtil_1.LevelUtil.parseStepSolver(a);
                    if (l && 0 !== l.length) {
                        var n = r.slotBarCount;
                        if (n <= 0)
                            this.updateProbabilityState(false);
                        else {
                            var c = SolverUtils_1.SolverUtils.simulateOccupancy(l, o, n);
                            if (0 !== c.length) {
                                var f = this.selectTiles(c, o, n);
                                if (0 !== f.length) {
                                    var h = f.map(function (t) {
                                        return t.saveKey();
                                    });
                                    this.localData.preFilledSlotBarIds = h;
                                    r.resetSlotBarIds(h);
                                    this.updateProbabilityState(true);
                                }
                                else
                                    this.updateProbabilityState(false);
                            }
                            else
                                this.updateProbabilityState(false);
                        }
                    }
                    else
                        this.updateProbabilityState(false);
                }
                else
                    this.updateProbabilityState(false);
            }
            else
                this.updateProbabilityState(false);
        }
    };
    Tile2PreFillTrait.prototype.checkProbability = function () {
        if (!this.localData.hasEverTriggered)
            return true;
        var t = this.localData.consecutiveNonTrigger, e = this._config.nonTriggerThreshold, i = this._config.increaseAmount, r = this._config.afterTriggerWeight, o = e > 0 ? Math.floor(t / e) : 0, a = Math.min(1, r + o * i);
        return Math.random() < a;
    };
    Tile2PreFillTrait.prototype.updateProbabilityState = function (t) {
        if (t) {
            this.localData.hasEverTriggered = true;
            this.localData.consecutiveNonTrigger = 0;
        }
        else
            this.localData.consecutiveNonTrigger = (this.localData.consecutiveNonTrigger || 0) + 1;
    };
    Tile2PreFillTrait.prototype.selectTiles = function (t, e) {
        var i, r, o, a, l = this._config, n = this.weightedRandomSelect(l.countWeights) + 1, s = t.find(function (t) {
            return t.occupancyRate >= l.threshold1;
        }), c = t.find(function (t) {
            return t.occupancyRate >= l.threshold2;
        }), u = [], d = new Set(), f = new Set();
        if (n >= 1 && s) {
            var h = this.findTileAtRelativePosition(t, e, s.step, l.relativePositions[0], d, f);
            if (h) {
                u.push(h.tile);
                d.add(h.tileId);
                f.add(h.tile.cardId);
            }
        }
        var p = u.length > 0 && null !== (r = null === (i = t.find(function (t) {
            return t.tileId === u[0].id;
        })) || void 0 === i ? void 0 : i.step) && void 0 !== r ? r : Infinity;
        if (n >= 2 && c) {
            var v = Math.min(c.step, p), g = this.findTileAtRelativePosition(t, e, v, l.relativePositions[1], d, f);
            if (g) {
                u.push(g.tile);
                d.add(g.tileId);
                f.add(g.tile.cardId);
            }
        }
        var y = u.length > 1 && null !== (a = null === (o = t.find(function (t) {
            return t.tileId === u[1].id;
        })) || void 0 === o ? void 0 : o.step) && void 0 !== a ? a : Infinity;
        if (n >= 3 && y < Infinity) {
            var m = this.findMatchableTile(t, e, y, d, f);
            m && u.push(m);
        }
        return u;
    };
    Tile2PreFillTrait.prototype.findTileAtRelativePosition = function (t, e, i, r, o, a) {
        var n, s, c = t.filter(function (t) {
            return t.step < i && !o.has(t.tileId);
        });
        if (0 === c.length)
            return null;
        var u = Math.round(i * r);
        c.sort(function (t, e) {
            return Math.abs(t.step - u) - Math.abs(e.step - u);
        });
        try {
            for (var d = __values(c), f = d.next(); !f.done; f = d.next()) {
                var h = f.value, p = e.getTileObject(h.tileId);
                if (p && p.isValid && !p.getIsInSlotBar() && !a.has(p.cardId))
                    return {
                        tile: p,
                        tileId: h.tileId
                    };
            }
        }
        catch (t) {
            n = {
                error: t
            };
        }
        finally {
            try {
                f && !f.done && (s = d.return) && s.call(d);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        return null;
    };
    Tile2PreFillTrait.prototype.findMatchableTile = function (t, e, i, r, o) {
        var a, s, c, u, d = new Map(), f = new Set();
        try {
            for (var h = __values(e.tileObjectMap()), p = h.next(); !p.done; p = h.next()) {
                var v = __read(p.value, 2), g = v[0];
                if ((_ = v[1]).isValid && !_.getIsInSlotBar() && 0 === e.isCardLock(_)) {
                    d.set(_.cardId, (d.get(_.cardId) || 0) + 1);
                    f.add(g);
                }
            }
        }
        catch (t) {
            a = {
                error: t
            };
        }
        finally {
            try {
                p && !p.done && (s = h.return) && s.call(h);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        var y = t.filter(function (t) {
            return t.step < i && !r.has(t.tileId);
        });
        try {
            for (var m = __values(y), T = m.next(); !T.done; T = m.next()) {
                var _, b = T.value;
                if ((_ = e.getTileObject(b.tileId)) && f.has(_.id) && !o.has(_.cardId) && (d.get(_.cardId) || 0) >= 2)
                    return _;
            }
        }
        catch (t) {
            c = {
                error: t
            };
        }
        finally {
            try {
                T && !T.done && (u = m.return) && u.call(m);
            }
            finally {
                if (c)
                    throw c.error;
            }
        }
        return null;
    };
    Tile2PreFillTrait.prototype.weightedRandomSelect = function (t) {
        var e = t.reduce(function (t, e) {
            return t + e;
        }, 0);
        if (e <= 0)
            return 0;
        for (var i = Math.random() * e, r = 0; r < t.length; r++)
            if ((i -= t[r]) <= 0)
                return r;
        return t.length - 1;
    };
    Tile2PreFillTrait.traitKey = "Tile2PreFill";
    Tile2PreFillTrait = __decorate([
        mj.trait,
        mj.class("Tile2PreFillTrait")
    ], Tile2PreFillTrait);
    return Tile2PreFillTrait;
}(Trait_1.default));
exports.default = Tile2PreFillTrait;

cc._RF.pop();