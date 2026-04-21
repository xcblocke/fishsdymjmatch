"use strict";
cc._RF.push(module, 'd8ac9hhIn5P+bl4iNjUSooL', 'ItemUsageWarningTrait');
// subpackages/l_itemUsageWarning/Scripts/ItemUsageWarningTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../../../Scripts/Config");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ItemUsageWarningTrait = /** @class */ (function (_super) {
    __extends(ItemUsageWarningTrait, _super);
    function ItemUsageWarningTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.countdownTimeout = -1;
        _this.isCurRoundCleared = false;
        _this.shuffleNode = null;
        _this.tipsNode = null;
        return _this;
    }
    ItemUsageWarningTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "T2NodeBtmVw_onLoad"
            }, {
                event: "ClearT2Hlp_newClrEffEff"
            }, {
                event: "ClearT4Hlp_newClrEffEff"
            }]);
    };
    ItemUsageWarningTrait.prototype.onMainGameCtrl_initRes = function (t, e) {
        e();
        t.ins.addPreloadRes("SkeletonData", ["l_itemUsageWarning:spine/gameplay_icon_prop"]);
        this.isCurRoundCleared = false;
    };
    ItemUsageWarningTrait.prototype.onMainGameCtrl_nextLv = function (t, e) {
        e();
        this.stopCountdown();
        this.isCurRoundCleared = false;
    };
    ItemUsageWarningTrait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        e();
        this.stopCountdown();
        this.shuffleNode = null;
        this.tipsNode = null;
        this.isCurRoundCleared = false;
    };
    ItemUsageWarningTrait.prototype.onMainGmVw_initLayers = function (t, e) {
        var o, n, i, r;
        e();
        var s = t.ins;
        this.shuffleNode = null === (n = null === (o = s.bottomRootNode) || void 0 === o ? void 0 : o.getChildByName("btnShuffle")) || void 0 === n ? void 0 : n.getChildByName("Background");
        this.tipsNode = null === (r = null === (i = s.bottomRootNode) || void 0 === i ? void 0 : i.getChildByName("btnPropHint")) || void 0 === r ? void 0 : r.getChildByName("Background");
    };
    ItemUsageWarningTrait.prototype.onT2NodeBtmVw_onLoad = function (t, e) {
        var o, n;
        e();
        var i = t.ins;
        this.shuffleNode = null === (o = i.node.getChildByName("btnShuffle")) || void 0 === o ? void 0 : o.getChildByName("Background");
        this.tipsNode = null === (n = i.node.getChildByName("btnPropHint")) || void 0 === n ? void 0 : n.getChildByName("Background");
    };
    ItemUsageWarningTrait.prototype.onIptBase_pushClrEff = function (t, e) {
        e();
        this.startCountdown();
        this.isCurRoundCleared = true;
    };
    ItemUsageWarningTrait.prototype.onClearT2Hlp_newClrEffEff = function (t, e) {
        e();
        this.startCountdown();
        this.isCurRoundCleared = true;
    };
    ItemUsageWarningTrait.prototype.onClearT4Hlp_newClrEffEff = function (t, e) {
        e();
        this.startCountdown();
        this.isCurRoundCleared = true;
    };
    ItemUsageWarningTrait.prototype.stopCountdown = function () {
        if (this.countdownTimeout > 0) {
            clearTimeout(this.countdownTimeout);
            this.countdownTimeout = -1;
        }
    };
    ItemUsageWarningTrait.prototype.checkCondition = function () {
        return true;
    };
    ItemUsageWarningTrait.prototype.startCountdown = function () {
        var t = this;
        if (this.checkCondition()) {
            this.stopCountdown();
            this.countdownTimeout = setTimeout(function () {
                t.countdownTimeout = -1;
                t.showWarningEffect();
            }, 1000 * this.getDelayTime());
        }
    };
    ItemUsageWarningTrait.prototype.getDelayTime = function () {
        return null == this._traitData.delayTime ? 15 : this._traitData.delayTime;
    };
    ItemUsageWarningTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
        return _t;
    };
    ItemUsageWarningTrait.prototype.onTopTouchStart = function () {
        this.isCurRoundCleared && this.startCountdown();
    };
    ItemUsageWarningTrait.prototype.showWarningEffect = function () {
        if (GameTypeEnums_1.MjGameType.Classic != UserModel_1.default.getInstance().getCurrentGameType()) {
            var t = this._traitData.effType, e = "", o = null;
            if (1 == t) {
                e = "refresh";
                o = this.shuffleNode;
            }
            else if (2 == t) {
                e = "hint";
                o = this.tipsNode;
            }
            else {
                var n = Math.random();
                e = n > 0.5 ? "refresh" : "hint";
                o = n > 0.5 ? this.shuffleNode : this.tipsNode;
            }
            this.showEffectByParent(o, e);
        }
    };
    ItemUsageWarningTrait.prototype.showEffectByParent = function (t, e) {
        cc.isValid(t) && (BaseSpine_1.default.create("spine/gameplay_icon_prop", e, 1, this.onEffectComplete.bind(this), true, "l_itemUsageWarning").node.parent = t);
    };
    ItemUsageWarningTrait.prototype.onEffectComplete = function () {
        this.isCurRoundCleared && this.startCountdown();
    };
    ItemUsageWarningTrait.traitKey = "ItemUsageWarning";
    __decorate([
        mj.traitEvent("ItemWarning_check")
    ], ItemUsageWarningTrait.prototype, "checkCondition", null);
    __decorate([
        mj.traitEvent("ItemWarning_delayTime")
    ], ItemUsageWarningTrait.prototype, "getDelayTime", null);
    ItemUsageWarningTrait = __decorate([
        mj.trait,
        mj.class("ItemUsageWarningTrait")
    ], ItemUsageWarningTrait);
    return ItemUsageWarningTrait;
}(Trait_1.default));
exports.default = ItemUsageWarningTrait;

cc._RF.pop();