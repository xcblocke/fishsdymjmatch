"use strict";
cc._RF.push(module, 'e4a471UZtlEQqEJaT5Q/tQj', 'DianZanClearTimeTrait');
// subpackages/l_dianZanStep/Scripts/DianZanClearTimeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DianZanClearTimeTrait = /** @class */ (function (_super) {
    __extends(DianZanClearTimeTrait, _super);
    function DianZanClearTimeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lastClearTimestamp = 0;
        _this._currSkData = null;
        _this._triggerDianZan = false;
        _this._currentLevel = 1;
        _this._lastTriggered = false;
        _this._isPlayDianZan = false;
        return _this;
    }
    Object.defineProperty(DianZanClearTimeTrait.prototype, "bundleName", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spineBundle) || "l_dianZanStep";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanClearTimeTrait.prototype, "matchNum", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.matchNum) && void 0 !== e ? e : 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanClearTimeTrait.prototype, "clearTime", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.clearTime) && void 0 !== e ? e : 6;
        },
        enumerable: false,
        configurable: true
    });
    DianZanClearTimeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DianZanClearTimeTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.Effect_InitView] = this.onEffectInitViewCB.bind(this);
        return _t;
    };
    DianZanClearTimeTrait.prototype.onEffectInitViewCB = function () {
        this._lastClearTimestamp = Date.now();
        this._currentLevel = 1;
        this._lastTriggered = false;
        this._triggerDianZan = false;
        this._isPlayDianZan = false;
    };
    DianZanClearTimeTrait.prototype.onIptRestart_excute = function (t, e) {
        this._currentLevel = 1;
        this._lastTriggered = false;
        e();
    };
    DianZanClearTimeTrait.prototype.onFailBhv_start = function (t, e) {
        this._currentLevel = 1;
        this._lastTriggered = false;
        e();
    };
    DianZanClearTimeTrait.prototype.onWinVw_showWinVw = function (t, e) {
        this._currentLevel = 1;
        this._lastTriggered = false;
        e();
    };
    DianZanClearTimeTrait.prototype.onDCWinVw_showWinVw = function (t, e) {
        this._currentLevel = 1;
        this._lastTriggered = false;
        e();
    };
    DianZanClearTimeTrait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        this._currentLevel = 1;
        this._lastTriggered = false;
        e();
    };
    DianZanClearTimeTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var r, i;
        this.loadSpine(null === (i = null === (r = t.ins) || void 0 === r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameCtr);
        e();
    };
    DianZanClearTimeTrait.prototype.loadSpine = function (t) {
        var e, r = this;
        if (t && "function" == typeof t.loadRes) {
            var i = (null === (e = this.traitData) || void 0 === e ? void 0 : e.spinePath) || "spine/gamplay_doubleLikes";
            this._currSkData = null;
            t.loadRes(i, sp.SkeletonData, this.bundleName).then(function (t) {
                var e = Array.isArray(t) ? t[0] : t;
                r._currSkData = e || null;
            }).catch(function () {
                r._currSkData = null;
            });
        }
    };
    DianZanClearTimeTrait.prototype.checkBeforeMatchNum = function (t) {
        return t <= this.matchNum;
    };
    DianZanClearTimeTrait.prototype.checkInterval = function () {
        return (Date.now() - this._lastClearTimestamp) / 1000 <= this.clearTime;
    };
    DianZanClearTimeTrait.prototype.onDianZanTt_checkDZ = function (t, e) {
        var r, i = null !== (r = t.ins._beforeClearMatchNum) && void 0 !== r ? r : 0, n = this.checkBeforeMatchNum(i), a = this.checkInterval(), o = n && a;
        this._lastClearTimestamp = Date.now();
        if (o) {
            if (this._isPlayDianZan) {
                this._currentLevel = Math.min(3, this._currentLevel + 1);
            }
            else {
                this._currentLevel = 1;
            }
            this._lastTriggered = true;
            this._triggerDianZan = true;
        }
        else {
            this._lastTriggered;
            this._currentLevel = 1;
            this._lastTriggered = false;
            this._triggerDianZan = false;
        }
        this._isPlayDianZan = false;
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: o
        });
    };
    DianZanClearTimeTrait.prototype.onDianZanItem_initComp = function (t, e) {
        var r;
        if (this._triggerDianZan) {
            var i = null === (r = t.ins) || void 0 === r ? void 0 : r._spineAnim, n = this._currSkData;
            if (n && i && i.skeletonData !== n) {
                i.clearTracks();
                i.setToSetupPose();
                i.skeletonData = n;
            }
            e();
        }
        else
            e();
    };
    DianZanClearTimeTrait.prototype.onDianZanBhv_getAniName = function (t, e) {
        if (this._triggerDianZan) {
            if (this._currSkData) {
                this._isPlayDianZan = true;
                var r = "in_" + (this._currentLevel || 1);
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.jump,
                    returnVal: r
                });
            }
            else
                e();
        }
        else
            e();
    };
    DianZanClearTimeTrait.prototype.onDianZanTt_checkDZSpecial = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: true
        });
    };
    DianZanClearTimeTrait.traitKey = "DianZanClearTime";
    DianZanClearTimeTrait = __decorate([
        mj.trait,
        mj.class("DianZanClearTimeTrait")
    ], DianZanClearTimeTrait);
    return DianZanClearTimeTrait;
}(Trait_1.default));
exports.default = DianZanClearTimeTrait;

cc._RF.pop();