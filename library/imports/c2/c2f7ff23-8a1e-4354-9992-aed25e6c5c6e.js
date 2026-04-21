"use strict";
cc._RF.push(module, 'c2f7f8jih5DVJmSrtJebFxu', 'MatchTimeDisplayTrait');
// subpackages/l_matchTimeDisplay/Scripts/MatchTimeDisplayTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var I18NComponent_1 = require("../../../Scripts/component/I18NComponent");
var MatchTimeLabel_1 = require("./MatchTimeLabel");
var MatchTimeDisplayTrait = /** @class */ (function (_super) {
    __extends(MatchTimeDisplayTrait, _super);
    function MatchTimeDisplayTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isHardOrExpert = false;
        _this._currentGameType = GameTypeEnums_1.MjGameType.Normal;
        _this._startTimestamp = 0;
        _this._matchTimeLabelComp = null;
        _this._topRootNode = null;
        _this._originalTranslateId = "";
        _this._originalDefaultText = "";
        _this._originalTextSaved = false;
        return _this;
    }
    MatchTimeDisplayTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.savedTimeData && "" !== this.localData.savedTimeData || (this.localData.savedTimeData = {});
    };
    MatchTimeDisplayTrait.prototype.setTime = function (t, e, i) {
        if (void 0 !== e && 0 !== e) {
            var a = i || GameTypeEnums_1.MjGameType.Normal;
            this.localData.savedTimeData[a] || (this.localData.savedTimeData[a] = {
                levelId: 0,
                savedTime: 0
            });
            this.localData.savedTimeData[a].levelId = e;
            this.localData.savedTimeData[a].savedTime = t;
            this.localData.savedTimeData = this.localData.savedTimeData;
        }
    };
    MatchTimeDisplayTrait.prototype.getTime = function (t, e) {
        if (void 0 === t || 0 === t)
            return 0;
        var i = e || GameTypeEnums_1.MjGameType.Normal, a = this.localData.savedTimeData[i];
        return a ? a.levelId !== t ? 0 : a.savedTime || 0 : 0;
    };
    MatchTimeDisplayTrait.prototype.saveTimeFromLabel = function (t) {
        var e, i, a = null === (e = mj.getClassByName("UserModel")) || void 0 === e ? void 0 : e.getInstance(), o = null == a ? void 0 : a.getGameDataByGameType(this._currentGameType), s = (null === (i = null == o ? void 0 : o.getLevelId) || void 0 === i ? void 0 : i.call(o)) || 0;
        this.setTime(t, s, this._currentGameType);
    };
    MatchTimeDisplayTrait.prototype.isMatchGameType = function (t) {
        var e;
        return ((null === (e = this.traitData) || void 0 === e ? void 0 : e.gameTypes) || ["Normal"]).includes(t);
    };
    MatchTimeDisplayTrait.prototype.checkIsHardOrExpert = function (t) {
        var e, i, a, o, s = UserModel_1.default.getInstance().getGameDataByGameType(t), n = null !== (o = null !== (i = null === (e = null == s ? void 0 : s.getCurrentLevelId) || void 0 === e ? void 0 : e.call(s)) && void 0 !== i ? i : null === (a = null == s ? void 0 : s.getLevelId) || void 0 === a ? void 0 : a.call(s)) && void 0 !== o ? o : 0;
        return GameUtils_1.default.isTypeHardLevel(t, n);
    };
    MatchTimeDisplayTrait.prototype.saveOriginalMatchText = function (t) {
        if (!this._originalTextSaved && t && cc.isValid(t)) {
            var e = t.getComponent(I18NComponent_1.default);
            if (e) {
                this._originalTranslateId = e.translateId || "";
                this._originalDefaultText = e.defaultText || "";
            }
            else {
                var i = t.getComponent(cc.Label);
                i && (this._originalDefaultText = i.string || "");
            }
            this._originalTextSaved = true;
        }
    };
    MatchTimeDisplayTrait.prototype.replaceMatchTextToTime = function (t) {
        t && cc.isValid(t) && I18NStrings_1.default.setText(t, "Time", "TILE_Time");
    };
    MatchTimeDisplayTrait.prototype.restoreMatchText = function (t) {
        t && cc.isValid(t) && this._originalTextSaved && I18NStrings_1.default.setText(t, this._originalDefaultText, this._originalTranslateId);
    };
    MatchTimeDisplayTrait.prototype.getOrCreateMatchTimeLabel = function (t) {
        if (!t || !cc.isValid(t))
            return null;
        var e = t.getComponent(MatchTimeLabel_1.default);
        e || (e = t.addComponent(MatchTimeLabel_1.default));
        return e;
    };
    MatchTimeDisplayTrait.prototype.onMainGRTop_applyTSCfg = function (t, e) {
        var i, a, o, s = null === (i = t.args) || void 0 === i ? void 0 : i[0], n = null == s ? void 0 : s.topRootNode, r = null == s ? void 0 : s.gameType;
        if (n) {
            if (this.isMatchGameType(r)) {
                this._currentGameType = r;
                this._topRootNode = n;
                var l = n.getChildByName("labelCanMatchNum"), m = n.getChildByName("labelMatch");
                m && this.saveOriginalMatchText(m);
                l && (this._matchTimeLabelComp = this.getOrCreateMatchTimeLabel(l));
                this._isHardOrExpert = this.checkIsHardOrExpert(r);
                if (this._isHardOrExpert) {
                    m && this.replaceMatchTextToTime(m);
                    if (this._matchTimeLabelComp) {
                        var c = null === (a = mj.getClassByName("UserModel")) || void 0 === a ? void 0 : a.getInstance(), p = null == c ? void 0 : c.getGameDataByGameType(r), h = (null === (o = null == p ? void 0 : p.getLevelId) || void 0 === o ? void 0 : o.call(p)) || 0, u = this.getTime(h, r);
                        this._matchTimeLabelComp.stopTimer();
                        this._matchTimeLabelComp.setTime(u);
                        this.setTime(u, h, r);
                    }
                    this._startTimestamp = Date.now();
                }
                else {
                    this._matchTimeLabelComp && this._matchTimeLabelComp.stopTimer();
                    this._startTimestamp = 0;
                }
                e();
            }
            else {
                this._isHardOrExpert = false;
                this._startTimestamp = 0;
                this._matchTimeLabelComp && this._matchTimeLabelComp.stopTimer();
                e();
            }
        }
        else
            e();
    };
    MatchTimeDisplayTrait.prototype.onIptEnterAni_excute = function (t, e) {
        var i, a, o, s = t.ins, n = null === (i = null == s ? void 0 : s.gameContext) || void 0 === i ? void 0 : i.gameType;
        if (this.isMatchGameType(n)) {
            this._currentGameType = n;
            var r = this._isHardOrExpert;
            this._isHardOrExpert = this.checkIsHardOrExpert(n);
            var l = this._topRootNode;
            if (l && cc.isValid(l)) {
                var m = l.getChildByName("labelMatch");
                if (this._isHardOrExpert) {
                    if (m) {
                        this.saveOriginalMatchText(m);
                        this.replaceMatchTextToTime(m);
                    }
                    if (this._matchTimeLabelComp) {
                        var c = null === (a = mj.getClassByName("UserModel")) || void 0 === a ? void 0 : a.getInstance(), p = null == c ? void 0 : c.getGameDataByGameType(n), h = (null === (o = null == p ? void 0 : p.getLevelId) || void 0 === o ? void 0 : o.call(p)) || 0, u = this.getTime(h, n);
                        if (0 === u) {
                            this._matchTimeLabelComp.stopTimer();
                            this._matchTimeLabelComp.setTime(0);
                            this._matchTimeLabelComp.startTimer();
                            this.setTime(0, h, n);
                        }
                        else {
                            this._matchTimeLabelComp.stopTimer();
                            this._matchTimeLabelComp.setTime(u);
                            this._matchTimeLabelComp.continueTimer();
                        }
                    }
                    this._startTimestamp = Date.now();
                }
                else if (r) {
                    m && this.restoreMatchText(m);
                    this._matchTimeLabelComp && this._matchTimeLabelComp.stopTimer();
                }
                e();
            }
            else
                e();
        }
        else {
            var d = this._isHardOrExpert;
            this._isHardOrExpert = false;
            if (d) {
                var _ = this._topRootNode;
                if (_ && cc.isValid(_)) {
                    var T = _.getChildByName("labelMatch");
                    T && this.restoreMatchText(T);
                }
                this._matchTimeLabelComp && this._matchTimeLabelComp.stopTimer();
            }
            e();
        }
    };
    MatchTimeDisplayTrait.prototype.onUpdateMatchNumBhv_start = function (t, e) {
        e();
        this._isHardOrExpert && this._matchTimeLabelComp && this._matchTimeLabelComp.updateDisplay();
    };
    MatchTimeDisplayTrait.prototype.onEnterAniBhv_startPlay = function (t, e) {
        if (this._isHardOrExpert) {
            this._matchTimeLabelComp && !this._matchTimeLabelComp.isRunning() && this._matchTimeLabelComp.continueTimer();
            e();
        }
        else
            e();
    };
    MatchTimeDisplayTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        var i, a;
        if (this._isHardOrExpert) {
            var o = null === (i = mj.getClassByName("UserModel")) || void 0 === i ? void 0 : i.getInstance(), s = null == o ? void 0 : o.getGameDataByGameType(this._currentGameType), n = (null === (a = null == s ? void 0 : s.getLevelId) || void 0 === a ? void 0 : a.call(s)) || 0;
            this.setTime(0, n, this._currentGameType);
            if (this._matchTimeLabelComp) {
                this._matchTimeLabelComp.setTime(0);
                this._matchTimeLabelComp.updateDisplay();
            }
        }
        e();
    };
    MatchTimeDisplayTrait.prototype.onGsListener_onGameEnd = function (t, e) {
        var i, a;
        if (this._isHardOrExpert && this._matchTimeLabelComp) {
            var o = this._matchTimeLabelComp.getIncreaseTime(), s = null === (i = mj.getClassByName("UserModel")) || void 0 === i ? void 0 : i.getInstance(), n = null == s ? void 0 : s.getGameDataByGameType(this._currentGameType), r = (null === (a = null == n ? void 0 : n.getLevelId) || void 0 === a ? void 0 : a.call(n)) || 0;
            this.setTime(o, r, this._currentGameType);
        }
        e();
    };
    MatchTimeDisplayTrait.prototype.onMainGameBtnBack_onClick = function (t, e) {
        var i, a;
        if (this._isHardOrExpert && this._matchTimeLabelComp) {
            var o = this._matchTimeLabelComp.getIncreaseTime(), s = null === (i = mj.getClassByName("UserModel")) || void 0 === i ? void 0 : i.getInstance(), n = null == s ? void 0 : s.getGameDataByGameType(this._currentGameType), r = (null === (a = null == n ? void 0 : n.getLevelId) || void 0 === a ? void 0 : a.call(n)) || 0;
            this.setTime(o, r, this._currentGameType);
        }
        e();
    };
    MatchTimeDisplayTrait.prototype.onWinCtrl_viewShow = function (t, e) {
        this._isHardOrExpert && this._matchTimeLabelComp && this._matchTimeLabelComp.isRunning() && this._matchTimeLabelComp.stopTimer();
        e();
    };
    MatchTimeDisplayTrait.prototype.onFailVw_show = function (t, e) {
        this._isHardOrExpert && this._matchTimeLabelComp && this._matchTimeLabelComp.isRunning() && this._matchTimeLabelComp.stopTimer();
        e();
    };
    MatchTimeDisplayTrait.prototype.onFailVw_useShuffle = function (t, e) {
        this._isHardOrExpert && this._matchTimeLabelComp && !this._matchTimeLabelComp.isRunning() && this._matchTimeLabelComp.continueTimer();
        e();
    };
    MatchTimeDisplayTrait.prototype.onFailVw_watchAdShuffle = function (t, e) {
        this._isHardOrExpert && this._matchTimeLabelComp && !this._matchTimeLabelComp.isRunning() && this._matchTimeLabelComp.continueTimer();
        e();
    };
    MatchTimeDisplayTrait.prototype.onGameUI_onBtnSettings = function (t, e) {
        this._isHardOrExpert && this._matchTimeLabelComp && this._matchTimeLabelComp.isRunning() && this._matchTimeLabelComp.stopTimer();
        e();
    };
    MatchTimeDisplayTrait.prototype.onUISetDlg_close = function (t, e) {
        this._isHardOrExpert && this._matchTimeLabelComp && (this._matchTimeLabelComp.isRunning() || this._matchTimeLabelComp.continueTimer());
        e();
    };
    MatchTimeDisplayTrait.traitKey = "MatchTimeDisplay";
    MatchTimeDisplayTrait = __decorate([
        mj.trait,
        mj.class("MatchTimeDisplayTrait")
    ], MatchTimeDisplayTrait);
    return MatchTimeDisplayTrait;
}(Trait_1.default));
exports.default = MatchTimeDisplayTrait;

cc._RF.pop();