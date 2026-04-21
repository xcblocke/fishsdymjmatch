"use strict";
cc._RF.push(module, '82167Mr6mFAdbH5yTY6IT/Q', 'ChangeRwdComboCardTrait');
// subpackages/l_changeRwdComboCard/Scripts/ChangeRwdComboCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var ChangeRwdComboCardTrait = /** @class */ (function (_super) {
    __extends(ChangeRwdComboCardTrait, _super);
    function ChangeRwdComboCardTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Normal;
        _this._rate = 1;
        _this._failShown = false;
        return _this;
    }
    ChangeRwdComboCardTrait.prototype.onLoad = function () {
        var e, o;
        _super.prototype.onLoad.call(this);
        this.localData.hasAdjusted && "object" == typeof this.localData.hasAdjusted || (this.localData.hasAdjusted = {});
        var a = Number(null !== (o = null === (e = this._traitData) || void 0 === e ? void 0 : e.rate) && void 0 !== o ? o : 1);
        this._rate = Number.isFinite(a) && a > 0 ? a : 1;
    };
    ChangeRwdComboCardTrait.prototype.getMessageListeners = function () {
        var e = this;
        var _t = {};
        _t[GameEvent_1.EGameEvent.Fail_Auto] = function () {
            e.markFailShown();
        };
        return _t;
    };
    ChangeRwdComboCardTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var o, a, i = null === (a = null === (o = t.ins) || void 0 === o ? void 0 : o._context) || void 0 === a ? void 0 : a.gameType;
        this._gameType = i || GameTypeEnums_1.MjGameType.Normal;
        this._failShown = false;
        e();
    };
    ChangeRwdComboCardTrait.prototype.onIptSetLv_newGComp = function (t, e) {
        var o, a, i, r, n, l = t.ins, s = null !== (n = null !== (a = null === (o = null == l ? void 0 : l.gameContext) || void 0 === o ? void 0 : o.gameType) && void 0 !== a ? a : null === (r = null === (i = null == l ? void 0 : l.tileMapObject) || void 0 === i ? void 0 : i.gameContext) || void 0 === r ? void 0 : r.gameType) && void 0 !== n ? n : this._gameType;
        if (s) {
            this._gameType = s;
            this.ensureStore(s);
            this.resetHasAdjusted(s);
        }
        e();
    };
    ChangeRwdComboCardTrait.prototype.onFailVw_show = function (t, e) {
        this.markFailShown();
        e();
    };
    ChangeRwdComboCardTrait.prototype.onIptShuffle_exec = function (t, e) {
        var o, a, i, r = t.ins, n = null == r ? void 0 : r.gameContext;
        if (this.hasFailShown()) {
            null === (i = null === (a = null === (o = null == n ? void 0 : n.getGameData) || void 0 === o ? void 0 : o.call(n)) || void 0 === a ? void 0 : a.setCurLvCanTriRewardCombo) || void 0 === i || i.call(a, 0);
            this._failShown = false;
            this.adjustTriggerTileCount(n);
        }
        e();
    };
    ChangeRwdComboCardTrait.prototype.adjustTriggerTileCount = function (t) {
        var e, o, a, i, r;
        if (!this.hasAdjusted(this._gameType))
            try {
                var n = null === (e = null == t ? void 0 : t.getGameData) || void 0 === e ? void 0 : e.call(t), l = null === (o = null == t ? void 0 : t.getTileMapObject) || void 0 === o ? void 0 : o.call(t);
                if (!n || !l)
                    return;
                var s = 2 * ((null === (a = n.getCurLevelComboMaxLimit) || void 0 === a ? void 0 : a.call(n)) || 0);
                if (s <= 0)
                    return;
                var u = (null === (i = n.getRewardComboTriTileCnt) || void 0 === i ? void 0 : i.call(n)) || 0;
                if (0 === u) {
                    if ((c = null == t ? void 0 : t.rewardComboChecker) && "function" == typeof c.calculateTriTileCnt)
                        u = c.calculateTriTileCnt(s);
                    else {
                        var d = (h = [0.2, 0.3])[Math.floor(Math.random() * h.length)];
                        (u = Math.floor(s * d)) < 2 && (u = 2);
                        u % 2 != 0 && (u += 1);
                    }
                }
                else if (u > Math.floor(0.5 * s) || u < 2) {
                    var c;
                    if ((c = null == t ? void 0 : t.rewardComboChecker) && "function" == typeof c.calculateTriTileCnt)
                        u = c.calculateTriTileCnt(s);
                    else {
                        var h;
                        d = (h = [0.2, 0.3])[Math.floor(Math.random() * h.length)];
                        (u = Math.floor(s * d)) < 2 && (u = 2);
                        u % 2 != 0 && (u += 1);
                    }
                }
                var f = function (t) {
                    if (!Number.isFinite(t))
                        return 2;
                    var e = Math.floor(t);
                    e < 2 && (e = 2);
                    1 == (1 & e) && (e += 1);
                    return e;
                }(u * this._rate), p = Math.min(s, f);
                null === (r = l.getCurTilesCnt) || void 0 === r || r.call(l);
                if (p !== u && "function" == typeof n.setRewardComboTriTileCnt) {
                    n.setRewardComboTriTileCnt(p);
                    this.markHasAdjusted(this._gameType);
                }
            }
            catch (t) { }
    };
    ChangeRwdComboCardTrait.prototype.ensureStore = function (t) {
        this.localData.hasAdjusted && "object" == typeof this.localData.hasAdjusted || (this.localData.hasAdjusted = {});
        if ("boolean" != typeof this.localData.hasAdjusted[t]) {
            this.localData.hasAdjusted[t] = false;
            this.localData.hasAdjusted = this.localData.hasAdjusted;
        }
    };
    ChangeRwdComboCardTrait.prototype.hasFailShown = function () {
        return !!this._failShown;
    };
    ChangeRwdComboCardTrait.prototype.markFailShown = function () {
        this._failShown || (this._failShown = true);
    };
    ChangeRwdComboCardTrait.prototype.hasAdjusted = function (t) {
        var e;
        if (!t)
            return false;
        this.ensureStore(t);
        return !!(null === (e = this.localData.hasAdjusted) || void 0 === e ? void 0 : e[t]);
    };
    ChangeRwdComboCardTrait.prototype.markHasAdjusted = function (t) {
        if (t) {
            this.ensureStore(t);
            if (!this.localData.hasAdjusted[t]) {
                this.localData.hasAdjusted[t] = true;
                this.localData.hasAdjusted = this.localData.hasAdjusted;
            }
        }
    };
    ChangeRwdComboCardTrait.prototype.resetHasAdjusted = function (t) {
        if (t) {
            this.ensureStore(t);
            if (this.localData.hasAdjusted[t]) {
                this.localData.hasAdjusted[t] = false;
                this.localData.hasAdjusted = this.localData.hasAdjusted;
            }
        }
    };
    ChangeRwdComboCardTrait.traitKey = "ChangeRwdComboCard";
    ChangeRwdComboCardTrait = __decorate([
        mj.trait,
        mj.class("ChangeRwdComboCardTrait")
    ], ChangeRwdComboCardTrait);
    return ChangeRwdComboCardTrait;
}(Trait_1.default));
exports.default = ChangeRwdComboCardTrait;

cc._RF.pop();