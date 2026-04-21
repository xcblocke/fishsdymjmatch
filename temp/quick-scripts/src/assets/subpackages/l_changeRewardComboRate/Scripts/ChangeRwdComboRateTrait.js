"use strict";
cc._RF.push(module, '6b460yNGVFFOIZHEep55Kn0', 'ChangeRwdComboRateTrait');
// subpackages/l_changeRewardComboRate/Scripts/ChangeRwdComboRateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var ChangeRwdComboRateTrait = /** @class */ (function (_super) {
    __extends(ChangeRwdComboRateTrait, _super);
    function ChangeRwdComboRateTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Normal;
        _this._rate = 1;
        _this._failShown = false;
        return _this;
    }
    ChangeRwdComboRateTrait.prototype.onLoad = function () {
        var e, o;
        _super.prototype.onLoad.call(this);
        this.localData.byGameType && "object" == typeof this.localData.byGameType || (this.localData.byGameType = {});
        var a = Number(null !== (o = null === (e = this._traitData) || void 0 === e ? void 0 : e.rate) && void 0 !== o ? o : 1);
        this._rate = Number.isFinite(a) && a > 0 ? a : 1;
    };
    ChangeRwdComboRateTrait.prototype.getMessageListeners = function () {
        var e = this;
        var _t = {};
        _t[GameEvent_1.EGameEvent.Fail_Auto] = function () {
            e.markFailShown();
        };
        return _t;
    };
    ChangeRwdComboRateTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var o, a, i = null === (a = null === (o = t.ins) || void 0 === o ? void 0 : o.context) || void 0 === a ? void 0 : a.gameType;
        this._gameType = i;
        this._failShown = false;
        e();
    };
    ChangeRwdComboRateTrait.prototype.onIptSetLv_newGComp = function (t, e) {
        var o, a, i, n, r = t.ins, l = null !== (a = null === (o = null == r ? void 0 : r.gameContext) || void 0 === o ? void 0 : o.gameType) && void 0 !== a ? a : null === (n = null === (i = null == r ? void 0 : r.tileMapObject) || void 0 === i ? void 0 : i.gameContext) || void 0 === n ? void 0 : n.gameType;
        if (l) {
            this._gameType = l;
            this.ensureStore(l);
            if (this.localData.byGameType[l]) {
                this.localData.byGameType[l] = false;
                this.localData.byGameType = this.localData.byGameType;
            }
        }
        e();
    };
    ChangeRwdComboRateTrait.prototype.onFailVw_show = function (t, e) {
        this.markFailShown();
        e();
    };
    ChangeRwdComboRateTrait.prototype.onIptShuffle_exec = function (t, e) {
        var o, a, i, n = t.ins, r = null == n ? void 0 : n.gameContext;
        if (this.hasFailShown()) {
            null === (i = null === (a = null === (o = null == r ? void 0 : r.getGameData) || void 0 === o ? void 0 : o.call(r)) || void 0 === a ? void 0 : a.setCurLvCanTriRewardCombo) || void 0 === i || i.call(a, 0);
            this.markReviveShuffle(this._gameType);
            this._failShown = false;
        }
        e();
    };
    ChangeRwdComboRateTrait.prototype.onRwdComboChk_getTrigRate = function (t, e) {
        var o, a, i, n, r;
        if (this.hasReviveShuffle(this._gameType)) {
            var l = Number(t.beforReturnVal);
            if (Number.isFinite(l)) {
                var s = Math.max(0, Math.min(1, l * this._rate)), c = 0;
                try {
                    var u = t.ins, p = null == u ? void 0 : u.context;
                    if (p) {
                        var f = null === (o = p.getGameData) || void 0 === o ? void 0 : o.call(p), h = null === (a = p.getTileMapObject) || void 0 === a ? void 0 : a.call(p);
                        if (f && h) {
                            c = 2 * ((null === (i = f.getCurLevelComboMaxLimit) || void 0 === i ? void 0 : i.call(f)) || 0);
                            null === (n = h.getCurTilesCnt) || void 0 === n || n.call(h);
                            if (0 === ((null === (r = f.getRewardComboTriTileCnt) || void 0 === r ? void 0 : r.call(f)) || 0) && c > 0) {
                                var y = u;
                                "function" == typeof y.calculateTriTileCnt && y.calculateTriTileCnt(c);
                            }
                        }
                    }
                }
                catch (t) { }
                e({
                    isBreak: true,
                    returnVal: s
                });
            }
            else
                e();
        }
        else
            e();
    };
    ChangeRwdComboRateTrait.prototype.ensureStore = function (t) {
        this.localData.byGameType && "object" == typeof this.localData.byGameType || (this.localData.byGameType = {});
        if ("boolean" != typeof this.localData.byGameType[t]) {
            this.localData.byGameType[t] = false;
            this.localData.byGameType = this.localData.byGameType;
        }
    };
    ChangeRwdComboRateTrait.prototype.hasReviveShuffle = function (t) {
        var e;
        if (!t)
            return false;
        this.ensureStore(t);
        return !!(null === (e = this.localData.byGameType) || void 0 === e ? void 0 : e[t]);
    };
    ChangeRwdComboRateTrait.prototype.hasFailShown = function () {
        return !!this._failShown;
    };
    ChangeRwdComboRateTrait.prototype.markReviveShuffle = function (t) {
        if (t) {
            this.ensureStore(t);
            if (!this.localData.byGameType[t]) {
                this.localData.byGameType[t] = true;
                this.localData.byGameType = this.localData.byGameType;
            }
        }
    };
    ChangeRwdComboRateTrait.prototype.markFailShown = function () {
        this._failShown || (this._failShown = true);
    };
    ChangeRwdComboRateTrait.traitKey = "ChangeRwdComboRate";
    ChangeRwdComboRateTrait = __decorate([
        mj.trait,
        mj.class("ChangeRwdComboRateTrait")
    ], ChangeRwdComboRateTrait);
    return ChangeRwdComboRateTrait;
}(Trait_1.default));
exports.default = ChangeRwdComboRateTrait;

cc._RF.pop();