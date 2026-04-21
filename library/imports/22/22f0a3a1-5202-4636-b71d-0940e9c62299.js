"use strict";
cc._RF.push(module, '22f0aOhUgJGNrcdCUDpxiKZ', 'AllClearTrait');
// subpackages/l_allClear/Scripts/AllClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var h = {
    1: [0, 0],
    2: [4, 10],
    3: [8, 18],
    4: [8, 18],
    5: [8, 18],
    6: [6, 6],
    7: [10, 10],
    8: [0, 0]
};
var v = {
    1: {
        bundle: null,
        isLocal: true
    },
    2: {
        bundle: null,
        isLocal: true
    },
    3: {
        bundle: "r_daxiaoguofeng",
        isLocal: false
    },
    4: {
        bundle: "r_daxiaocaidai",
        isLocal: false
    },
    5: {
        bundle: "r_daxiaohudie",
        isLocal: false
    },
    6: {
        bundle: "l_daxiaozheshan",
        isLocal: true
    },
    7: {
        bundle: "l_daxiaoyinxiang",
        isLocal: true
    },
    8: {
        bundle: "r_gatherClear",
        isLocal: false
    }
};
var _ = [1, 2, 3, 4, 5, 6, 7];
var AllClearTrait = /** @class */ (function (_super) {
    __extends(AllClearTrait, _super);
    function AllClearTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._failCount = 0;
        _this._blocked = false;
        _this._atMinThreshold = false;
        _this._cachedContext = null;
        return _this;
    }
    AllClearTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._initLocalData();
        this._preloadRemoteBundles();
        this.registerEvent([{
                event: "GsListener_onSurvivalGame"
            }]);
    };
    AllClearTrait.prototype._preloadRemoteBundles = function () {
        var t, e, r = LowPriorityBundleLoader_1.default.getInstance();
        try {
            for (var i = __values(_), a = i.next(); !a.done; a = i.next()) {
                var o = a.value, n = v[o];
                n && !n.isLocal && n.bundle && r.addTask(n.bundle, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (e = i.return) && e.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    AllClearTrait.prototype._getAvailableEffectIds = function () {
        var t = this, e = LowPriorityBundleLoader_1.default.getInstance();
        return _.filter(function (r) {
            if (!t._isEffectRangeCompatible(r))
                return false;
            var i = v[r];
            return !(i && i.bundle && !i.isLocal) || e.isBundlePreLoaded(i.bundle);
        });
    };
    AllClearTrait.prototype.minTiles = function () {
        var t, e, r;
        return void 0 !== (null === (t = this._traitData) || void 0 === t ? void 0 : t.minTiles) && null !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.minTiles) ? null === (r = this._traitData) || void 0 === r ? void 0 : r.minTiles : 6;
    };
    AllClearTrait.prototype._isEffectRangeCompatible = function (t) {
        var e, r = __read(null !== (e = h[t]) && void 0 !== e ? e : [0, 0], 2), i = r[0], a = r[1], o = this.minTiles();
        return !((o < i || o > a) && i > 0);
    };
    AllClearTrait.prototype._isEffectReady = function (t) {
        var e = v[t];
        return !(e && e.bundle && !e.isLocal) || LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(e.bundle);
    };
    AllClearTrait.prototype.isSurvivalAllClear = function () {
        return true;
    };
    AllClearTrait.prototype.onGsListener_onSurvivalGame = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var r = UserModel_1.default.getInstance().getCurrentGameData();
            if (!r || "function" != typeof r.getStartGameTime) {
                e();
                return;
            }
            if (!this.isSurvivalAllClear()) {
                e();
                return;
            }
            if (!this._isColdBootResumeBoard(r)) {
                e();
                return;
            }
            r.setHasBrokenCombo(true);
        }
        e();
    };
    AllClearTrait.prototype._isColdBootResumeBoard = function (t) {
        var e, r, i, a = t.getStartGameTime(), o = null !== (i = null === (r = (e = UserModel_1.default.getInstance()).getAppStartTime) || void 0 === r ? void 0 : r.call(e)) && void 0 !== i ? i : 0;
        return a > 0 && o > 0 && a < o;
    };
    AllClearTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var r, i, a = null === (i = null === (r = t.ins) || void 0 === r ? void 0 : r._context) || void 0 === i ? void 0 : i.gameType;
        if (this._isGameTypeEnabled(a)) {
            var o = this.localData;
            o.curEffectId = this._pickEffectId();
            this.localData = this.localData;
            this._failCount = 0;
            this._blocked = false;
            this._ensureEffectBundleLoaded(o.curEffectId);
            e();
        }
        else
            e();
    };
    AllClearTrait.prototype._isGameTypeEnabled = function (t) {
        var e, r;
        return -1 !== ((null === (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.gameTypes) || void 0 === r ? void 0 : r.length) ? this._traitData.gameTypes : [GameTypeEnums_1.MjGameType.Tile2Normal]).indexOf(t);
    };
    AllClearTrait.prototype._ensureEffectBundleLoaded = function (t) {
        var e = v[t];
        e && e.bundle && !e.isLocal && LowPriorityBundleLoader_1.default.getInstance().addTask(e.bundle, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultHightPriority);
    };
    AllClearTrait.prototype.onAllClrChk_allClr = function (t, e) {
        var r, i, a;
        if (this._isGuideActive())
            e();
        else {
            var o = null === (r = t.ins) || void 0 === r ? void 0 : r.context;
            if (o) {
                if (this._isGameTypeEnabled(o.gameType)) {
                    if (this._blocked)
                        e();
                    else {
                        var l = this.localData, n = this._isEffectReady(l.curEffectId) ? l.curEffectId : this._pickEffectId(), u = o.allClearChecker;
                        if (u) {
                            var c = u.getTotalTileCount(), s = null !== (i = h[n]) && void 0 !== i ? i : [0, 0], f = s[0];
                            c < (null === (a = this._traitData) || void 0 === a ? void 0 : a.maxTiles) && this._failCount++;
                            if (s[0] > 0 && (c > s[1] || c < s[0]))
                                e();
                            else {
                                this._atMinThreshold = f > 0 && c === f;
                                this._cachedContext = o;
                                var p = u.canTrigger();
                                this._cachedContext = null;
                                this._atMinThreshold = false;
                                p || c === f && f > 0 && (this._blocked = true);
                                e({
                                    returnType: TraitManager_1.TraitCallbackReturnType.jump,
                                    isBreak: true,
                                    returnVal: {
                                        isShow: p,
                                        effectId: p ? n : 0
                                    }
                                });
                            }
                        }
                        else
                            e();
                    }
                }
                else
                    e();
            }
            else
                e();
        }
    };
    AllClearTrait.prototype.onAllClearBhv_skipMrg = function (t, e) {
        if (this.localData.curEffectId > 1) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    AllClearTrait.prototype.onAllClrChk_minTiles = function (t, e) {
        var r, i = null === (r = this._traitData) || void 0 === r ? void 0 : r.minTiles;
        if (null == i) {
            e();
        }
        else {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: i
            });
        }
    };
    AllClearTrait.prototype.onAllClrChk_maxTiles = function (t, e) {
        var r, i = null === (r = this._traitData) || void 0 === r ? void 0 : r.maxTiles;
        if (null == i) {
            e();
        }
        else {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: i
            });
        }
    };
    AllClearTrait.prototype.onAllClrChk_triRate = function (t, e) {
        var r, i, a, o, l, n, u, c, s, f;
        if (this._atMinThreshold) {
            var p = null === (r = this._traitData) || void 0 === r ? void 0 : r.minTileRate;
            if (null == p)
                f = 1;
            else {
                var h = null !== (l = null === (o = null === (a = null === (i = this._cachedContext) || void 0 === i ? void 0 : i.getGameData()) || void 0 === a ? void 0 : a.getLevelId) || void 0 === o ? void 0 : o.call(a)) && void 0 !== l ? l : 1;
                f = this._parseRateCfg(p, h);
            }
        }
        else {
            var v = (null !== (u = null === (n = this._traitData) || void 0 === n ? void 0 : n.baseRate) && void 0 !== u ? u : 50) / 100, _ = (null !== (s = null === (c = this._traitData) || void 0 === c ? void 0 : c.incRate) && void 0 !== s ? s : 0) / 100;
            f = Math.min(1, v + this._failCount * _);
        }
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: f
        });
    };
    AllClearTrait.prototype._getPickMode = function () {
        var t;
        return null !== (t = this.localData.pickMode) && void 0 !== t ? t : 0;
    };
    AllClearTrait.prototype._initLocalData = function () {
        var t, e, r = this.localData;
        if (void 0 === r.pickMode || null === r.pickMode) {
            r.pickMode = null !== (e = null === (t = this._traitData) || void 0 === t ? void 0 : t.pickMode) && void 0 !== e ? e : 0;
            this.localData = this.localData;
        }
        if (!r.orderQueue || 0 === r.orderQueue.length) {
            r.orderQueue = [];
            r.orderIdx = 0;
            this.localData = this.localData;
        }
        if (!r.lastEffectId) {
            r.lastEffectId = 0;
            this.localData = this.localData;
        }
        if (void 0 === r.curEffectId || null === r.curEffectId) {
            r.curEffectId = -1;
            this.localData = this.localData;
        }
    };
    AllClearTrait.prototype._pickEffectId = function () {
        var t;
        null === (t = this._traitData) || void 0 === t || t.effectId;
        var e = this._getAvailableEffectIds();
        return 0 === e.length ? 1 : 1 === this._getPickMode() ? this._pickNoRepeatNoReplace(e) : this._pickNoRepeatWithReplace(e);
    };
    AllClearTrait.prototype._pickNoRepeatWithReplace = function (t) {
        var e = this.localData, r = e.lastEffectId || 0, i = t.filter(function (t) {
            return t !== r;
        }), a = i.length > 0 ? i : t, o = a[Math.floor(Math.random() * a.length)];
        e.lastEffectId = o;
        this.localData = this.localData;
        return o;
    };
    AllClearTrait.prototype._pickNoRepeatNoReplace = function (t) {
        var e, r, i, a, o = this.localData;
        if (0 === (null !== (e = o.orderQueue) && void 0 !== e ? e : []).slice(null !== (r = o.orderIdx) && void 0 !== r ? r : 0).filter(function (e) {
            return t.includes(e);
        }).length) {
            var l = null !== (a = null === (i = o.orderQueue) || void 0 === i ? void 0 : i[o.orderIdx > 0 ? o.orderIdx - 1 : 0]) && void 0 !== a ? a : 0;
            o.orderQueue = this._shuffleAvoidStart(t, l);
            o.orderIdx = 0;
        }
        var n = o.orderQueue[o.orderIdx];
        o.orderIdx++;
        o.lastEffectId = n;
        this.localData = this.localData;
        return n;
    };
    AllClearTrait.prototype._shuffleAvoidStart = function (t, e) {
        for (var r, i, a = __spreadArrays(t), o = a.length - 1; o > 0; o--) {
            var l = Math.floor(Math.random() * (o + 1));
            r = __read([a[l], a[o]], 2), a[o] = r[0], a[l] = r[1];
        }
        if (a[0] === e && a.length > 1) {
            var c = 1 + Math.floor(Math.random() * (a.length - 1));
            i = __read([a[c], a[0]], 2), a[0] = i[0], a[c] = i[1];
        }
        return a;
    };
    AllClearTrait.prototype._parseRateCfg = function (t, e) {
        var r;
        if ("number" == typeof t)
            return t / 100;
        for (var i = null !== (r = t[1]) && void 0 !== r ? r : 100, a = 0; a < t.length - 1; a += 2)
            e > t[a] && (i = t[a + 1]);
        return i / 100;
    };
    AllClearTrait.prototype._isGuideActive = function () {
        var t = UserModel_1.default.getInstance().getMainGameData(), e = 1;
        t && (e = t.getLevelId());
        return !UserModel_1.default.getInstance().isGuideFinished() || 1 === e;
    };
    AllClearTrait.traitKey = "AllClear";
    __decorate([
        mj.traitEvent("AllClearTt_minTiles")
    ], AllClearTrait.prototype, "minTiles", null);
    __decorate([
        mj.traitEvent("AllClearTt_isSurAc")
    ], AllClearTrait.prototype, "isSurvivalAllClear", null);
    AllClearTrait = __decorate([
        mj.trait,
        mj.class("AllClearTrait")
    ], AllClearTrait);
    return AllClearTrait;
}(Trait_1.default));
exports.default = AllClearTrait;

cc._RF.pop();