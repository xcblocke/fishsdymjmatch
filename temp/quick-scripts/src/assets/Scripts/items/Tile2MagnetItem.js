"use strict";
cc._RF.push(module, '8bffcfw+zFAb5+JTIIZE6Ka', 'Tile2MagnetItem');
// Scripts/items/Tile2MagnetItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EMagnetState = void 0;
var BaseUI_1 = require("../framework/ui/BaseUI");
var AdManager_1 = require("../base/ad/AdManager");
var DGameAdShow_1 = require("../gamePlay/dot/DGameAdShow");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var DGameAdShowStage_1 = require("../gamePlay/dot/DGameAdShowStage");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var EMagnetState;
(function (EMagnetState) {
    EMagnetState[EMagnetState["ExitAnimation"] = 0] = "ExitAnimation";
    EMagnetState[EMagnetState["EnterAnimation"] = 1] = "EnterAnimation";
    EMagnetState[EMagnetState["Countdown"] = 2] = "Countdown";
    EMagnetState[EMagnetState["PlayingAd"] = 3] = "PlayingAd";
    EMagnetState[EMagnetState["Clearing"] = 4] = "Clearing";
})(EMagnetState = exports.EMagnetState || (exports.EMagnetState = {}));
var Tile2MagnetItem = /** @class */ (function (_super) {
    __extends(Tile2MagnetItem, _super);
    function Tile2MagnetItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._progressNode = null;
        _this._progressBar = null;
        _this._progressBarIcon = null;
        _this._progressBgSpine = null;
        _this._btnAd = null;
        _this._iconAdSpine = null;
        _this._state = EMagnetState.ExitAnimation;
        _this._aniInfo = null;
        _this._countdownDuration = 2;
        _this._isEnableTimeDown = false;
        _this._elapsedTime = 0;
        return _this;
    }
    Tile2MagnetItem.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        this.node.name = "magnetNode";
        this._progressNode = this.node.getChildByName("progress");
        if (this._progressNode) {
            this._progressBar = this._progressNode.getComponent(cc.ProgressBar);
            this._progressNode.active = true;
            this._progressBgSpine = this._progressNode.getComponent(sp.Skeleton);
            this._btnAd = this._progressNode.getComponent(cc.Button);
            this.OnButtonClick(this._progressNode, this.onMagnetClick.bind(this));
            this._progressBarIcon = this._progressNode.getChildByName("Bar");
            this._iconAdSpine = null === (t = this._progressNode.getChildByName("icon_ad")) || void 0 === t ? void 0 : t.getComponent(sp.Skeleton);
        }
        this.setState(EMagnetState.ExitAnimation);
    };
    Tile2MagnetItem.prototype.getState = function () {
        return this._state;
    };
    Tile2MagnetItem.prototype.setState = function (e) {
        this._state;
        this._state = e;
    };
    Tile2MagnetItem.prototype.update = function (e) {
        if (this._isEnableTimeDown) {
            this._elapsedTime += e;
            var t = Math.min(this._elapsedTime / this._countdownDuration, 1);
            this._progressBar && (this._progressBar.progress = t);
            t >= 1 && this.onCountdownFinish();
        }
    };
    Tile2MagnetItem.prototype.playEnterAnimation = function (e) {
        var t = this;
        if (this.node && cc.isValid(this.node) && this._progressBar && this._progressBarIcon && this._progressBgSpine && this._iconAdSpine && this._btnAd) {
            if (this.getState() === EMagnetState.ExitAnimation) {
                this._aniInfo = e;
                this.setState(EMagnetState.EnterAnimation);
                this._countdownDuration = e.countdownDuration;
                var o = e.targetPos;
                this.node.setPosition(o);
                this.node.opacity = 255;
                this._progressBar.progress = 0;
                this._progressBarIcon.opacity = 255;
                this._btnAd.interactable = false;
                GameUtils_1.default.playSpine(this._progressBgSpine, "in", false, function () {
                    if (cc.isValid(t.node)) {
                        t._btnAd.interactable = true;
                        GameUtils_1.default.playSpine(t._progressBgSpine, "init", true, null);
                        GameUtils_1.default.playSpine(t._iconAdSpine, "init", true, null);
                        t.startCountdown();
                    }
                });
                GameUtils_1.default.playSpine(this._iconAdSpine, "in", false);
            }
        }
    };
    Tile2MagnetItem.prototype.startCountdown = function () {
        this.setState(EMagnetState.Countdown);
        this._elapsedTime = 0;
        this._isEnableTimeDown = true;
        this._progressBar && (this._progressBar.progress = 0);
    };
    Tile2MagnetItem.prototype.stopCountdown = function () {
        this._isEnableTimeDown = false;
        this._elapsedTime = 0;
    };
    Tile2MagnetItem.prototype.onCountdownFinish = function () {
        var e = this;
        this.stopCountdown();
        this.setState(EMagnetState.ExitAnimation);
        if (this.node && cc.isValid(this.node)) {
            this._btnAd && (this._btnAd.interactable = false);
            this._progressBarIcon && (this._progressBarIcon.opacity = 0);
            if (this._progressBgSpine && this._iconAdSpine) {
                GameUtils_1.default.playSpine(this._progressBgSpine, "out", false, function () {
                    cc.isValid(e.node) && (e.node.active = false);
                });
                GameUtils_1.default.playSpine(this._iconAdSpine, "out", false, null);
            }
        }
    };
    Tile2MagnetItem.prototype.onMagnetClick = function () {
        var e = this;
        this.setState(EMagnetState.PlayingAd);
        this.stopCountdown();
        if (AdManager_1.default.getInstance().checkVideoAdIsReady() && cc.isValid(this.node)) {
            this._btnAd && (this._btnAd.interactable = false);
            this.node.opacity = 0;
        }
        DGameAdShowStage_1.DotGameAdShowStage.dot(false, "clickAdLock");
        AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.InGameMotivation_Magnet, {
            onSuccess: function () {
                e.startAutoMerge();
            },
            onFailed: function (t) {
                e.onAdFailed(t);
            }
        }, "magnet_ad", {
            type: "magnet"
        });
    };
    Tile2MagnetItem.prototype.startAutoMerge = function () {
        if (this.node && cc.isValid(this.node)) {
            this.setState(EMagnetState.Clearing);
            if (this.node && cc.isValid(this.node)) {
                this.node.active = false;
                this.setState(EMagnetState.ExitAnimation);
            }
            this.autoMerger();
        }
    };
    Tile2MagnetItem.prototype.autoMerger = function () {
        var e, t = (null === (e = this._aniInfo) || void 0 === e ? void 0 : e.magnetCount) || 1;
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2MagnetMerge,
            type: "magnetMerge",
            magnetPair: t
        });
    };
    Tile2MagnetItem.prototype.onAdFailed = function () {
        this.forceExitWithoutAni();
    };
    Tile2MagnetItem.prototype.forceExitWithoutAni = function () {
        if (this.node && cc.isValid(this.node)) {
            this.node.active = false;
            this.stopCountdown();
            this.setState(EMagnetState.ExitAnimation);
        }
    };
    Tile2MagnetItem.prototype.onDestroy = function () {
        this._isEnableTimeDown = false;
        cc.Tween.stopAllByTarget(this.node);
        _super.prototype.onDestroy.call(this);
    };
    Tile2MagnetItem.prefabUrl = "prefabs/EffectMagnet";
    Tile2MagnetItem.bundleName = "l_magnet";
    __decorate([
        mj.traitEvent("T2MagnetItem_onLoad")
    ], Tile2MagnetItem.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("T2MagnetItem_enterAni")
    ], Tile2MagnetItem.prototype, "playEnterAnimation", null);
    __decorate([
        mj.traitEvent("T2MagnetItem_onDestroy")
    ], Tile2MagnetItem.prototype, "onDestroy", null);
    Tile2MagnetItem = __decorate([
        mj.class
    ], Tile2MagnetItem);
    return Tile2MagnetItem;
}(BaseUI_1.default));
exports.default = Tile2MagnetItem;

cc._RF.pop();