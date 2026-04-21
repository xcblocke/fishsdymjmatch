"use strict";
cc._RF.push(module, '4970d6xH39McoIbWE9LyAXw', 'TimeDoRwdComboTrait');
// subpackages/l_timeNumDoRwdCombo/Scripts/TimeDoRwdComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TimeDoRwdComboTrait = /** @class */ (function (_super) {
    __extends(TimeDoRwdComboTrait, _super);
    function TimeDoRwdComboTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.None;
        _this._levelId = 0;
        _this._hasDecidedThisLevel = false;
        _this._enabledThisLevel = false;
        _this._lastClearTimestamp = 0;
        return _this;
    }
    TimeDoRwdComboTrait.prototype.isGameTypeEnabled = function () {
        var e, t = null === (e = this._config) || void 0 === e ? void 0 : e.gameType;
        return !t || 0 === t.length || t.includes(this._gameType);
    };
    TimeDoRwdComboTrait.prototype.getStore = function (e) {
        this.localData && "object" == typeof this.localData || (this.localData = {});
        if (!this.localData.byGameType || "object" != typeof this.localData.byGameType) {
            this.localData.byGameType = {};
            this.localData = this.localData;
        }
        var t = this.localData.byGameType[e];
        if (!t || "object" != typeof t) {
            var a = {
                levelId: 0,
                hasDecided: false,
                enabled: false
            };
            this.localData.byGameType[e] = a;
            this.localData.byGameType = this.localData.byGameType;
            return a;
        }
        return t;
    };
    TimeDoRwdComboTrait.prototype.resetForLevel = function (e, t) {
        this._levelId = e;
        this._hasDecidedThisLevel = false;
        this._enabledThisLevel = false;
        this._lastClearTimestamp = Date.now();
        t.levelId = e;
        t.hasDecided = false;
        t.enabled = false;
        this.localData.byGameType = this.localData.byGameType;
    };
    TimeDoRwdComboTrait.prototype.onLoad = function () {
        var t, a, i, o, l, n, s, c, u, d, m, p;
        _super.prototype.onLoad.call(this);
        this._config = {
            hardRate: null !== (a = null === (t = this._traitData) || void 0 === t ? void 0 : t.hardRate) && void 0 !== a ? a : 100,
            executeRate: null !== (o = null === (i = this._traitData) || void 0 === i ? void 0 : i.executeRate) && void 0 !== o ? o : 34,
            timeMax: null !== (n = null === (l = this._traitData) || void 0 === l ? void 0 : l.timeMax) && void 0 !== n ? n : 0,
            tileMax: null !== (c = null === (s = this._traitData) || void 0 === s ? void 0 : s.tileMax) && void 0 !== c ? c : 8,
            timeMin: null !== (d = null === (u = this._traitData) || void 0 === u ? void 0 : u.timeMin) && void 0 !== d ? d : 0,
            gameType: null !== (p = null === (m = this._traitData) || void 0 === m ? void 0 : m.gameType) && void 0 !== p ? p : [GameTypeEnums_1.MjGameType.Normal]
        };
    };
    TimeDoRwdComboTrait.prototype.onInitViewBhv_crtTls = function (e, t) {
        var a, i, o;
        this._gameType = null !== (o = null === (i = null === (a = e.ins) || void 0 === a ? void 0 : a._context) || void 0 === i ? void 0 : i.gameType) && void 0 !== o ? o : GameTypeEnums_1.MjGameType.None;
        this._levelId = 0;
        this._hasDecidedThisLevel = false;
        this._enabledThisLevel = false;
        this._lastClearTimestamp = Date.now();
        t();
    };
    TimeDoRwdComboTrait.prototype.onRwdComboChk_sTriNow = function (e, t) {
        var a, i, o, l, r, s, d, m, p, h, v = (null === (a = e.ins) || void 0 === a ? void 0 : a.context) || (null === (i = e.ins) || void 0 === i ? void 0 : i._context), y = null === (o = null == v ? void 0 : v.getGameData) || void 0 === o ? void 0 : o.call(v), T = null === (l = null == v ? void 0 : v.getTileMapObject) || void 0 === l ? void 0 : l.call(v);
        if (y && T) {
            if (this.isGameTypeEnabled()) {
                if (UserModel_1.default.getInstance().isGuideFinished()) {
                    var f = null !== (s = null === (r = y.getLevelId) || void 0 === r ? void 0 : r.call(y)) && void 0 !== s ? s : 0;
                    if (1 !== f) {
                        if (null !== (d = y.getHasTriggeredFullCombo) && void 0 !== d && d.call(y))
                            t();
                        else if (null !== (m = y.getHasTriggeredRewardCombo) && void 0 !== m && m.call(y))
                            t({
                                isBreak: true,
                                returnType: TraitManager_1.TraitCallbackReturnType.return,
                                returnVal: true
                            });
                        else {
                            var _ = this.getStore(this._gameType);
                            if (_.levelId !== f) {
                                this.resetForLevel(f, _);
                            }
                            else {
                                this._levelId = f;
                            }
                            if (!this._hasDecidedThisLevel)
                                if (_.levelId === f && _.hasDecided) {
                                    this._enabledThisLevel = _.enabled;
                                    this._hasDecidedThisLevel = true;
                                }
                                else {
                                    var b = ExtractTool_1.default.getInstance().isHardLevel(f) ? this._config.hardRate : this._config.executeRate, g = Math.max(0, Math.min(100, Number(b) || 0)), D = Math.floor(100 * Math.random());
                                    this._enabledThisLevel = D < g;
                                    this._hasDecidedThisLevel = true;
                                    _.levelId = f;
                                    _.hasDecided = true;
                                    _.enabled = this._enabledThisLevel;
                                    this.localData.byGameType = this.localData.byGameType;
                                }
                            if (this._enabledThisLevel) {
                                var M = Date.now(), x = this._lastClearTimestamp || M, R = Math.max(0, (M - x) / 1000);
                                this._lastClearTimestamp = M;
                                var C, w = null !== (h = null === (p = T.getCurTilesCnt) || void 0 === p ? void 0 : p.call(T)) && void 0 !== h ? h : 0, G = Math.max(0, Number(this._config.timeMax) || 0), j = Math.max(0, Math.floor(Number(this._config.tileMax) || 0));
                                C = G > 0 ? R >= G && w > 0 && w <= j : this._config.timeMin > 0 ? R < this._config.timeMin && w > 0 && w <= j : w > 0 && w <= j;
                                t({
                                    isBreak: true,
                                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                                    returnVal: C
                                });
                            }
                            else
                                t({
                                    isBreak: true,
                                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                                    returnVal: false
                                });
                        }
                    }
                    else
                        t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    TimeDoRwdComboTrait.traitKey = "TimeDoRwdCombo";
    TimeDoRwdComboTrait = __decorate([
        mj.trait,
        mj.class("TimeDoRwdComboTrait")
    ], TimeDoRwdComboTrait);
    return TimeDoRwdComboTrait;
}(Trait_1.default));
exports.default = TimeDoRwdComboTrait;

cc._RF.pop();