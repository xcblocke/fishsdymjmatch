"use strict";
cc._RF.push(module, 'b7089+XavxDZqe9fVfH4iK9', 'MaterialCardOptListTrait');
// subpackages/l_materialCardOpt/Scripts/MaterialCardOptListTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var MaterialCardOptBaseTrait_1 = require("./MaterialCardOptBaseTrait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var f = ["gameplay_img_mj_dn", "gameplay_img_mj_up", "gameplay_select_mj"];
var MaterialCardOptListTrait = /** @class */ (function (_super) {
    __extends(MaterialCardOptListTrait, _super);
    function MaterialCardOptListTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._materials = [];
        _this._mode = 2;
        _this._preloadedIds = [];
        return _this;
    }
    MaterialCardOptListTrait.prototype.onLoad = function () {
        var e, r, a, i, o, l;
        _super.prototype.onLoad.call(this);
        this._materials = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.materials) && void 0 !== i ? i : [];
        this._mode = null !== (l = null === (o = this._traitData) || void 0 === o ? void 0 : o.mode) && void 0 !== l ? l : 2;
        this._initLocalData();
        try {
            for (var s = __values(this._materials), u = s.next(); !u.done; u = s.next()) {
                var c = u.value, p = this.getBundleNameById(c);
                p && LowPriorityBundleLoader_1.default.getInstance().addTask(p, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.Default);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                u && !u.done && (r = s.return) && r.call(s);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    MaterialCardOptListTrait.prototype._initLocalData = function () {
        2 === this._mode && this.isLocalEmpty(this.localData.phase) && (this.localData.phase = 1);
    };
    MaterialCardOptListTrait.prototype.onMainGameCtrl_initRes = function (t, e) {
        var r;
        this._preloadedIds = [];
        var a = this._pickConfiguredNotInList(this._preloadedIds);
        if (a.length > 0) {
            this.addPreloadRes(t.ins, a);
            (r = this._preloadedIds).push.apply(r, __spreadArrays(a));
        }
        e();
    };
    MaterialCardOptListTrait.prototype.getConfiguredAvailableMaterials = function () {
        var t = new Set(this.getAvailableMaterials());
        return this._materials.filter(function (e) {
            return t.has(e);
        });
    };
    MaterialCardOptListTrait.prototype.switchToNextMaterialCard = function () {
        var t, e = this, r = this.getConfiguredAvailableMaterials(), a = r.filter(function (t) {
            return e._preloadedIds.includes(t);
        }), i = a.length > 0 ? a : r;
        if (0 === i.length)
            return -1;
        if (1 === i.length) {
            this._setAndRecord(i[0]);
            this._preloadNextTwo();
            return i[0];
        }
        switch (this._mode) {
            case 1:
                t = this._pickInOrder(i);
                break;
            case 2:
                t = this._pickInOrderThenRandom(i);
                break;
            case 3:
                t = this._pickRandomReturn(i);
                break;
            case 4:
            default:
                t = this._pickRandomOrder(i);
        }
        this._setAndRecord(t);
        this._preloadNextTwo();
        return t;
    };
    MaterialCardOptListTrait.prototype._setAndRecord = function (t) {
        this.setCurMaterialCard(t);
        this.localData.lastSwitchedMat = t;
    };
    MaterialCardOptListTrait.prototype._getLastMat = function () {
        var t;
        return null !== (t = this.localData.lastSwitchedMat) && void 0 !== t ? t : this.getCurMaterialCard();
    };
    MaterialCardOptListTrait.prototype._pickConfiguredNotInList = function (t, e) {
        if (e === void 0) { e = 2; }
        return this.getConfiguredAvailableMaterials().filter(function (e) {
            return !t.includes(e);
        }).slice(0, e);
    };
    MaterialCardOptListTrait.prototype._getGameCtrl = function () {
        var t = ControllerManager_1.default.getInstance();
        switch (this.getCurrentGameType()) {
            case GameTypeEnums_1.MjGameType.Travel:
                return t.getControByName("TravelGameController");
            case GameTypeEnums_1.MjGameType.DailyChallenge:
                return t.getControByName("DailyChallengeController");
            case GameTypeEnums_1.MjGameType.Classic:
                return t.getControByName("ClassicController");
            case GameTypeEnums_1.MjGameType.Tile2Normal:
                return t.getControByName("Tile2GameController");
            default:
                return t.getControByName("MainGameController");
        }
    };
    MaterialCardOptListTrait.prototype._preloadNextTwo = function () {
        var t, e, r = this._getGameCtrl();
        if (r && "function" == typeof r.loadRes) {
            var a = this._pickConfiguredNotInList(this._preloadedIds), i = function i(t) {
                var e, a, i = o.getBundleNameById(t);
                if (!i)
                    return "continue";
                var l = function l(t) {
                    r.loadRes("texture/" + t, cc.SpriteFrame, i).then(function () { }).catch(function () { });
                };
                try {
                    for (var s = (e = void 0, __values(f)), d = s.next(); !d.done; d = s.next())
                        l(d.value);
                }
                catch (t) {
                    e = {
                        error: t
                    };
                }
                finally {
                    try {
                        d && !d.done && (a = s.return) && a.call(s);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                o._preloadedIds.push(t);
            }, o = this;
            try {
                for (var l = __values(a), s = l.next(); !s.done; s = l.next())
                    i(s.value);
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    s && !s.done && (e = l.return) && e.call(l);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
    };
    MaterialCardOptListTrait.prototype._pickInOrder = function (t) {
        var e = (t.indexOf(this._getLastMat()) + 1) % t.length;
        return t[e];
    };
    MaterialCardOptListTrait.prototype._pickInOrderThenRandom = function (t) {
        var e;
        if (1 === (null !== (e = this.localData.phase) && void 0 !== e ? e : 1)) {
            var r = t.indexOf(this._getLastMat()), a = t[(r + 1) % t.length];
            if (r + 1 >= this._materials.length) {
                this.localData.phase = 2;
                this.localData.randomOrder = null;
                this.localData.randomOrderIndex = 0;
                return this._pickRandomOrder(t);
            }
            return a;
        }
        return this._pickRandomOrder(t);
    };
    MaterialCardOptListTrait.prototype._pickRandomReturn = function (t) {
        var e = this._getLastMat(), r = t.filter(function (t) {
            return t !== e;
        }), a = r.length > 0 ? r : t;
        return a[Math.floor(Math.random() * a.length)];
    };
    MaterialCardOptListTrait.prototype._pickRandomOrder = function (t) {
        var e, r, a = null !== (e = this.localData.randomOrder) && void 0 !== e ? e : [], i = null !== (r = this.localData.randomOrderIndex) && void 0 !== r ? r : 0, o = this._getLastMat();
        if (0 === a.length || i >= a.length) {
            a = this._shuffleAvoidFirst(t, o);
            i = 0;
        }
        if (!t.includes(a[i])) {
            a = this._shuffleAvoidFirst(t, o);
            i = 0;
        }
        var n = a[i];
        this.localData.randomOrder = a;
        this.localData.randomOrderIndex = i + 1;
        return n;
    };
    MaterialCardOptListTrait.prototype._shuffleAvoidFirst = function (t, e) {
        for (var r, a, i = __spreadArrays(t), o = i.length - 1; o > 0; o--) {
            var n = Math.floor(Math.random() * (o + 1));
            r = __read([i[n], i[o]], 2), i[o] = r[0], i[n] = r[1];
        }
        if (void 0 !== e && i.length > 1 && i[0] === e) {
            var d = Math.floor(Math.random() * (i.length - 1)) + 1;
            a = __read([i[d], i[0]], 2), i[0] = a[0], i[d] = a[1];
        }
        return i;
    };
    MaterialCardOptListTrait.traitKey = "MaterialCardOptList";
    MaterialCardOptListTrait = __decorate([
        mj.trait,
        mj.class("MaterialCardOptListTrait")
    ], MaterialCardOptListTrait);
    return MaterialCardOptListTrait;
}(MaterialCardOptBaseTrait_1.default));
exports.default = MaterialCardOptListTrait;

cc._RF.pop();