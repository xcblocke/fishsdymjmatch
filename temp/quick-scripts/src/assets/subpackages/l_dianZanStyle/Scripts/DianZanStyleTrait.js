"use strict";
cc._RF.push(module, '7c933LZfEhBy5RRApyJdXVF', 'DianZanStyleTrait');
// subpackages/l_dianZanStyle/Scripts/DianZanStyleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var l;
(function (l) {
    l[l["RandomDiff"] = 1] = "RandomDiff";
    l[l["IntervalRandomDiff"] = 2] = "IntervalRandomDiff";
})(l || (l = {}));
var DianZanStyleTrait = /** @class */ (function (_super) {
    __extends(DianZanStyleTrait, _super);
    function DianZanStyleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        _this._gameType = null;
        return _this;
    }
    DianZanStyleTrait_1 = DianZanStyleTrait;
    Object.defineProperty(DianZanStyleTrait.prototype, "styleCount", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.styleCount) || 5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStyleTrait.prototype, "switchMode", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.switchMode) || l.RandomDiff;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStyleTrait.prototype, "switchInterval", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.switchInterval) || 5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStyleTrait.prototype, "animPrefix", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.animPrefix) || "in_";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStyleTrait.prototype, "bundleName", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spineBundle) || "l_dianZanStyle";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStyleTrait.prototype, "spinePath", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spinePath) || "spine/dianzan_styles";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStyleTrait.prototype, "isMergeGameType", {
        get: function () {
            var t;
            return !!(null === (t = this.traitData) || void 0 === t ? void 0 : t.isMergeGameType);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStyleTrait.prototype, "gameTypes", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.gameTypes) || [];
        },
        enumerable: false,
        configurable: true
    });
    DianZanStyleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DianZanStyleTrait.prototype.isActiveForCurrentMode = function () {
        if (1 === NormalGameData_1.default.getInstance().getCurrentLevelId())
            return false;
        var t = this.gameTypes;
        return !t || 0 === t.length || t.includes(String(this._gameType));
    };
    DianZanStyleTrait.prototype.getDataKey = function () {
        var t;
        return this.isMergeGameType ? "all" : String(null !== (t = this._gameType) && void 0 !== t ? t : "all");
    };
    DianZanStyleTrait.prototype.getStyleData = function () {
        if (!this.localData.modeData) {
            this.localData.modeData = {};
            this.localData.modeData = this.localData.modeData;
        }
        var t = this.getDataKey();
        if (!this.localData.modeData[t]) {
            this.localData.modeData[t] = Object.assign({}, DianZanStyleTrait_1.DEFAULT_STYLE_DATA);
            this.localData.modeData = this.localData.modeData;
        }
        return this.localData.modeData[t];
    };
    DianZanStyleTrait.prototype.saveStyleData = function (t) {
        var e = this.getDataKey();
        this.localData.modeData[e] = t;
        this.localData.modeData = this.localData.modeData;
    };
    DianZanStyleTrait.prototype.getLastGameKey = function () {
        var t, e, a = String(null !== (t = this._gameType) && void 0 !== t ? t : "unknown");
        return (null === (e = this.localData.lastGameKeys) || void 0 === e ? void 0 : e[a]) || "";
    };
    DianZanStyleTrait.prototype.setLastGameKey = function (t) {
        var e;
        this.localData.lastGameKeys || (this.localData.lastGameKeys = {});
        this.localData.lastGameKeys[String(null !== (e = this._gameType) && void 0 !== e ? e : "unknown")] = t;
        this.localData.lastGameKeys = this.localData.lastGameKeys;
    };
    DianZanStyleTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var a, r, n, i;
        this._gameType = null === (r = null === (a = t.ins) || void 0 === a ? void 0 : a._context) || void 0 === r ? void 0 : r.gameType;
        if (this.isActiveForCurrentMode()) {
            var o = this.getStyleData(), l = this.getCurrentGameKey(), s = this.getLastGameKey();
            if (!(!l || l === s)) {
                o.gameCount += 1;
                o.currentGameStyleIndex = 0;
                this.saveStyleData(o);
                this.setLastGameKey(l);
            }
            this.loadSpine(null === (i = null === (n = t.ins) || void 0 === n ? void 0 : n.context) || void 0 === i ? void 0 : i.gameCtr);
            e();
        }
        else {
            this._currSkData = null;
            e();
        }
    };
    DianZanStyleTrait.prototype.getCurrentGameKey = function () {
        var t, e;
        try {
            var a = UserModel_1.default.getInstance();
            if (null != this._gameType && a) {
                var r = a.getGameDataByGameType(this._gameType);
                return ((null === (t = null == r ? void 0 : r.getLevelId) || void 0 === t ? void 0 : t.call(r)) || 0) + "_" + ((null === (e = null == r ? void 0 : r.getReplayCount) || void 0 === e ? void 0 : e.call(r)) || 0);
            }
        }
        catch (t) { }
        return "";
    };
    DianZanStyleTrait.prototype.loadSpine = function (t) {
        var e = this;
        if (t && "function" == typeof t.loadRes) {
            this._currSkData = null;
            t.loadRes(this.spinePath, sp.SkeletonData, this.bundleName).then(function (t) {
                var a = Array.isArray(t) ? t[0] : t;
                e._currSkData = a || null;
            }).catch(function () {
                e._currSkData = null;
            });
        }
    };
    DianZanStyleTrait.prototype.onDianZanItem_initComp = function (t, e) {
        var a;
        if (this.isActiveForCurrentMode()) {
            var r = null === (a = t.ins) || void 0 === a ? void 0 : a._spineAnim, n = this._currSkData;
            if (n && r && r.skeletonData !== n) {
                r.clearTracks();
                r.setToSetupPose();
                r.skeletonData = n;
            }
            e();
        }
        else
            e();
    };
    DianZanStyleTrait.prototype.onDianZanBhv_getAniName = function (t, e) {
        if (this.isActiveForCurrentMode()) {
            if (this._currSkData) {
                this.getStyleData().lastPlayedStyleIndex;
                var a = this.getNextStyleIndex(), r = "" + this.animPrefix + a;
                e({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.jump,
                    returnVal: r
                });
            }
            else
                e();
        }
        else
            e();
    };
    DianZanStyleTrait.prototype.onDianZanBhv_playAni = function (t, e) {
        var a;
        if (this.isActiveForCurrentMode()) {
            if (this._currSkData) {
                var r = null === (a = t.args) || void 0 === a ? void 0 : a[2];
                if (r && r.startsWith(this.animPrefix)) {
                    var n = parseInt(r.substring(this.animPrefix.length), 10);
                    if (!isNaN(n)) {
                        var i = this.getStyleData();
                        i.lastPlayedStyleIndex;
                        i.lastPlayedStyleIndex = n;
                        this.saveStyleData(i);
                    }
                }
                e();
            }
            else
                e();
        }
        else
            e();
    };
    DianZanStyleTrait.prototype.getNextStyleIndex = function () {
        var t = this.getStyleData();
        if (this.switchMode === l.RandomDiff)
            return this.randomStyleExcludeLast(t);
        if (t.currentGameStyleIndex > 0)
            return t.currentGameStyleIndex;
        var e;
        e = t.gameCount % this.switchInterval == 1 || 0 === t.lastPlayedStyleIndex ? this.randomStyleExcludeLast(t) : t.lastPlayedStyleIndex;
        t.currentGameStyleIndex = e;
        this.saveStyleData(t);
        return e;
    };
    DianZanStyleTrait.prototype.randomStyleExcludeLast = function (t) {
        var e = (t || this.getStyleData()).lastPlayedStyleIndex || 0, a = Array.from({
            length: this.styleCount
        }, function (t, e) {
            return e + 1;
        }), r = a.indexOf(e);
        if (-1 !== r) {
            a.splice(r, 1);
            a.push(e);
            return a[Math.floor(Math.random() * (a.length - 1))];
        }
        return a[Math.floor(Math.random() * a.length)];
    };
    var DianZanStyleTrait_1;
    DianZanStyleTrait.traitKey = "DianZanStyle";
    DianZanStyleTrait.DEFAULT_STYLE_DATA = {
        gameCount: 0,
        currentGameStyleIndex: 0,
        lastPlayedStyleIndex: 0
    };
    DianZanStyleTrait = DianZanStyleTrait_1 = __decorate([
        mj.trait,
        mj.class("DianZanStyleTrait")
    ], DianZanStyleTrait);
    return DianZanStyleTrait;
}(Trait_1.default));
exports.default = DianZanStyleTrait;

cc._RF.pop();