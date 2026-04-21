"use strict";
cc._RF.push(module, '6d3a1pvkrVLpq6ggEMCspOo', 'WatchAdFreeAdLimitTrait');
// subpackages/l_watchAdGetProp/Scripts/WatchAdFreeAdLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var WatchAdFreeAdLimitTrait = /** @class */ (function (_super) {
    __extends(WatchAdFreeAdLimitTrait, _super);
    function WatchAdFreeAdLimitTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pendingMode = null;
        _this._pendingAutoClose = -1;
        return _this;
    }
    WatchAdFreeAdLimitTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._pendingAutoClose = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.autoCloseTime) && void 0 !== r ? r : -1;
    };
    WatchAdFreeAdLimitTrait.prototype.onAdUnavailVw_autoCloseTime = function (t, e) {
        if (this._pendingAutoClose > 0) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: this._pendingAutoClose
            });
        }
        else {
            e();
        }
    };
    WatchAdFreeAdLimitTrait.prototype.onAdUnavailVw_ShowRetry = function (t, e) {
        if ("noRetry" !== this._pendingMode) {
            e();
        }
        else {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    WatchAdFreeAdLimitTrait.prototype.onAdUnavailVw_ShowNoNet = function (t, e) {
        if ("noRetry" !== this._pendingMode && "freebie" !== this._pendingMode) {
            e();
        }
        else {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    WatchAdFreeAdLimitTrait.prototype.onAdUnavailVw_ShowLoading = function (t, e) {
        if ("noRetry" !== this._pendingMode) {
            e();
        }
        else {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    WatchAdFreeAdLimitTrait.prototype.onAdUnavailVw_onLoad = function (t, e) {
        var r, o, i;
        if (AdManager_1.default.getInstance().checkVideoAdIsReady())
            e();
        else {
            var n = t.ins, a = null === (o = null === (r = n.node) || void 0 === r ? void 0 : r.getChildByName) || void 0 === o ? void 0 : o.call(r, "content_node");
            if (a) {
                if ("noRetry" === this._pendingMode) {
                    this._hideBtns(a, ["btn_retry", "btn_noNet", "btn_loading"]);
                    var s = a.getChildByName("btn_cancel");
                    s && cc.isValid(s) && s.setPosition(s.position.x, -221);
                    var c = null === (i = n.node) || void 0 === i ? void 0 : i.getChildByName("bg_spr");
                    c && cc.isValid(c) && (c.height = 820);
                }
                else
                    "freebie" === this._pendingMode && this._hideBtns(a, ["btn_noNet", "btn_loading"]);
                e();
            }
            else
                e();
        }
    };
    WatchAdFreeAdLimitTrait.prototype._hideBtns = function (t, e) {
        var r, o;
        try {
            for (var i = __values(e), n = i.next(); !n.done; n = i.next()) {
                var s = n.value, c = t.getChildByName(s);
                c && cc.isValid(c) && (c.active = false);
            }
        }
        catch (t) {
            r = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (o = i.return) && o.call(i);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
    };
    WatchAdFreeAdLimitTrait.prototype.onWatchAdCtrl_playAd = function (t, e) {
        var r;
        if (AdManager_1.default.getInstance().checkVideoAdIsReady())
            e();
        else {
            var o = null === (r = this._traitData) || void 0 === r ? void 0 : r.tag, i = t.ins, n = i.getPropType();
            if (1 !== o && 2 !== o) {
                if (3 === o) {
                    this._pendingMode = "noRetry";
                    i.close();
                    ControllerManager_1.default.getInstance().pushViewByController("AdUnavailableController", {
                        isShowAction: true
                    });
                }
                else {
                    if (4 !== o) {
                        e();
                        return;
                    }
                    this._pendingMode = "noRetry";
                    i.close();
                    ControllerManager_1.default.getInstance().pushViewByController("AdUnavailableController", {
                        isShowAction: true
                    });
                }
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
            else {
                this._handleDailyLimitTag(o, n, i);
                e();
            }
        }
    };
    WatchAdFreeAdLimitTrait.prototype._handleDailyLimitTag = function (t, e, r) {
        var o = this._getTodayStr(), i = e + "_" + (2 === t ? this._getModeKey() : "all");
        if (this._getFreebieUsed(i) !== o) {
            this._setFreebieUsed(i, o);
            this._pendingMode = "freebie";
        }
        else
            this._pendingMode = "noRetry";
        r.close();
        ControllerManager_1.default.getInstance().pushViewByController("AdUnavailableController", {
            isShowAction: true
        });
    };
    WatchAdFreeAdLimitTrait.prototype._getFreebieUsed = function (t) {
        var e, r;
        return null !== (r = null === (e = this.localData.freebieUsed) || void 0 === e ? void 0 : e[t]) && void 0 !== r ? r : null;
    };
    WatchAdFreeAdLimitTrait.prototype._setFreebieUsed = function (t, e) {
        this.localData.freebieUsed || (this.localData.freebieUsed = {});
        this.localData.freebieUsed[t] = e;
        this.localData.freebieUsed = this.localData.freebieUsed;
    };
    WatchAdFreeAdLimitTrait.prototype._getTodayStr = function () {
        var t = new Date();
        return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
    };
    WatchAdFreeAdLimitTrait.prototype._getModeKey = function () {
        var t = UserModel_1.default.getInstance().getCurrentGameType();
        return t ? String(t) : "unknown";
    };
    WatchAdFreeAdLimitTrait.traitKey = "WatchAdFreeAdLimit";
    WatchAdFreeAdLimitTrait = __decorate([
        mj.trait,
        mj.class("WatchAdFreeAdLimitTrait")
    ], WatchAdFreeAdLimitTrait);
    return WatchAdFreeAdLimitTrait;
}(Trait_1.default));
exports.default = WatchAdFreeAdLimitTrait;

cc._RF.pop();