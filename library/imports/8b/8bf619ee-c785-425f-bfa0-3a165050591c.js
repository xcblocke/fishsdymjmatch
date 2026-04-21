"use strict";
cc._RF.push(module, '8bf61nux4VCX7+gOhZQUFkc', 'DailyChallengeWinView');
// Scripts/view/DailyChallengeWinView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../framework/ui/UIView");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var I18NStrings_1 = require("../framework/data/I18NStrings");
var DGameBtnClick_1 = require("../dot/DGameBtnClick");
var DailyChallengeWinView = /** @class */ (function (_super) {
    __extends(DailyChallengeWinView, _super);
    function DailyChallengeWinView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._contentNode = null;
        _this._maskNode = null;
        _this._maskTween = null;
        _this._wellDoneSkeleton = null;
        _this._lightSkeleton = null;
        _this._score = 0;
        _this._settlementScore = 0;
        _this._perfectMaxScore = 0;
        _this._challengeDate = "";
        _this._lblScore = null;
        _this._lblLv = null;
        _this._btnNext = null;
        _this._lblScoreDes = null;
        _this._lblTitle = null;
        _this._lblSubtitle = null;
        _this._wellDoneBg = null;
        _this._isAnimating = false;
        _this._currentTweens = [];
        _this._animSpeedRate = 1;
        _this._titleConfig = {
            unbelievable: {
                titleKey: "MahjongTiles_GameEnd_Name_1_2",
                titleDefault: "Unbelievable"
            },
            perfect: {
                titleKey: "MahjongTiles_GameEnd_Name_2_2",
                titleDefault: "Perfect"
            },
            wellDone: {
                titleKey: "MahjongTiles_GameEnd_Name_3_2",
                titleDefault: "Well Done"
            }
        };
        return _this;
    }
    Object.defineProperty(DailyChallengeWinView.prototype, "btnNext", {
        get: function () {
            return this._btnNext;
        },
        enumerable: false,
        configurable: true
    });
    DailyChallengeWinView.prototype.getContentNode = function () {
        return this._contentNode;
    };
    DailyChallengeWinView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Win);
        this._contentNode = this.node.getChildByName("content");
        this._maskNode = this.node.getChildByName("bg");
        this._maskNode.opacity = 190;
        this._wellDoneSkeleton = this._contentNode.getChildByName("spin_wellDone").getComponent(sp.Skeleton);
        this._lightSkeleton = cc.find("light_node/spin_light", this._contentNode).getComponent(sp.Skeleton);
        this._lblScoreDes = this._contentNode.getChildByName("lbl_scoreDec").getComponent(cc.Label);
        this._lblSubtitle = this._contentNode.getChildByName("lbl_subtitle").getComponent(cc.Label);
        this._wellDoneBg = this._contentNode.getChildByName("spr_bg_wellDone");
        this._btnNext = this._contentNode.getChildByName("btn_next");
        this._lblLv = cc.find("btn_next/content/lbl_lv", this._contentNode).getComponent(cc.Label);
        this.initDynamicNode();
        this.initNodeStates();
        this.handleBgMusic();
        this.OnButtonClick(this._btnNext, this.onBtnNextClick.bind(this));
        mj.triggerInternalEvent("BannerAd_NeedHideBanner", this, []);
    };
    DailyChallengeWinView.prototype.setAnimSpeedRate = function (e) {
        this._animSpeedRate = e;
    };
    DailyChallengeWinView.prototype.handleBgMusic = function () {
        mj.audioManager.fadeBGMOut();
    };
    DailyChallengeWinView.prototype.initDynamicNode = function () {
        this._lblTitle = this._contentNode.getChildByName("lbl_title").getComponent(cc.Label);
        this._lblScore = this._contentNode.getChildByName("lbl_score").getComponent(cc.Label);
    };
    DailyChallengeWinView.prototype.moveSubTitleToBtnNextBottom = function () {
        var e = this._btnNext.position.clone();
        this._lblSubtitle.node.setPosition(e.x, e.y - 217);
    };
    DailyChallengeWinView.prototype.onBtnNextClick = function () {
        if (this.delegate && cc.isValid(this.delegate.rootView)) {
            DGameBtnClick_1.DotGameBtnClick.dotPandaResult(DGameBtnClick_1.EPandaResult.Daily);
            this.delegate.close();
        }
    };
    DailyChallengeWinView.prototype.showWinView = function (e) {
        var t = e.data;
        this._score = t.score;
        this._settlementScore = t.settlementScore;
        this._perfectMaxScore = t.perfectMaxScore;
        this._challengeDate = t.challengeDate;
        this._lblScore.string = this._settlementScore.toString();
        I18NStrings_1.default.setText(this._lblLv.node, "Continue", "DailyChallenge_Continue");
        this._lblSubtitle.string = GameUtils_1.default.formatDateStringToLanguage(this._challengeDate) || "";
        var o = this.getTitleType(this._score, this._perfectMaxScore);
        this._lblTitle && I18NStrings_1.default.setText(this._lblTitle.node, o.titleDefault, o.titleKey);
        this.playWinAnimationSequence();
    };
    DailyChallengeWinView.prototype.playMaskFadeIn = function (e) {
        if (e === void 0) { e = 0.2; }
        var t;
        if (this._maskNode) {
            this.stopMaskAnimation();
            var o = null === (t = this.node.parent) || void 0 === t ? void 0 : t.getChildByName("BlurBg");
            cc.isValid(o) && (o.opacity = 0);
        }
    };
    DailyChallengeWinView.prototype.playMaskFadeOut = function (e) {
        if (e === void 0) { e = 0.2; }
        var t = this;
        if (this._maskNode) {
            this.stopMaskAnimation();
            this._maskTween = cc.tween(this._maskNode).to(e, {
                opacity: 0
            }, {
                easing: "sineIn"
            }).call(function () {
                t._maskTween = null;
            }).start();
        }
    };
    DailyChallengeWinView.prototype.stopMaskAnimation = function () {
        if (this._maskTween) {
            this._maskTween.stop();
            this._maskTween = null;
        }
    };
    DailyChallengeWinView.prototype.initNodeStates = function () {
        if (this._lblTitle) {
            this._lblTitle.node.opacity = 0;
            this._lblTitle.node.scale = 0.3;
        }
        this._wellDoneBg && (this._wellDoneBg.opacity = 0);
        this._lblScoreDes && (this._lblScoreDes.node.opacity = 0);
        if (this._lblScore) {
            this._lblScore.node.opacity = 0;
            this._lblScore.node.scale = 1.6;
        }
        if (this._btnNext) {
            this._btnNext.scale = 0.6;
            this._btnNext.opacity = 0;
            this._btnNext.active = false;
        }
        this._lblSubtitle && (this._lblSubtitle.node.opacity = 0);
    };
    DailyChallengeWinView.prototype.getTitleType = function (e, t) {
        if (t <= 0)
            return this._titleConfig.wellDone;
        var o = e / t;
        return o >= 1 ? this._titleConfig.unbelievable : o >= 0.9 ? this._titleConfig.perfect : this._titleConfig.wellDone;
    };
    DailyChallengeWinView.prototype.playWinAnimationSequence = function () {
        if (!this._isAnimating) {
            this._isAnimating = true;
            this.playMaskFadeIn();
            this.playWellDoneSpineAnimation();
            this.scheduleWinAnimations();
            this.delayEnableBtnNext();
            this.popNextView();
        }
    };
    DailyChallengeWinView.prototype.delayEnableBtnNext = function () {
        var e = this, t = {
            delayTime: 0
        };
        mj.triggerInternalEvent("WinVw_btnNextDelay", this, [t]);
        this.btnNext.getComponent(cc.Button).interactable = false;
        this.scheduleOnce(function () {
            cc.isValid(e.btnNext) && (e.btnNext.getComponent(cc.Button).interactable = true);
        }, t.delayTime * this._animSpeedRate);
    };
    DailyChallengeWinView.prototype.popNextView = function (e) {
        if (e === void 0) { e = {}; }
    };
    DailyChallengeWinView.prototype.playWellDoneSpineAnimation = function () {
        GameUtils_1.default.playSpine(this._wellDoneSkeleton, "in", false, null, 1 / this._animSpeedRate);
    };
    DailyChallengeWinView.prototype.playLightSpineAnimation = function () {
        GameUtils_1.default.playSpine(this._lightSkeleton, "init", true, null, 1 / this._animSpeedRate);
    };
    DailyChallengeWinView.prototype.scheduleWinAnimations = function () {
        var e = this, t = this._animSpeedRate;
        this.scheduleOnce(function () {
            e.playLightSpineAnimation();
            e.playWellDoneTextAnimation();
        }, 0.2 * t);
        this.scheduleOnce(function () {
            e.playWellDoneBgAnimation();
            e.playScoreDescAnimation();
        }, 0.5 * t);
        this.scheduleOnce(function () {
            e.playScoreAnimation();
        }, 0.7 * t);
        this.scheduleOnce(function () {
            e._btnNext.opacity = 255;
            e._btnNext.active = true;
            e.playButtonAnimation();
        }, 1.33 * t);
        this.scheduleOnce(function () {
            e.playDescAnimation();
        }, 1.53 * t);
    };
    DailyChallengeWinView.prototype.playWellDoneTextAnimation = function () {
        if (this._lblTitle) {
            var e = this._animSpeedRate, t = cc.tween(this._lblTitle.node).to(0.2 * e, {
                scale: 1.3,
                opacity: 255
            }, {
                easing: "quadOut"
            }).to(0.17 * e, {
                scale: 0.8
            }, {
                easing: "sineInOut"
            }).to(0.13 * e, {
                scale: 1
            }, {
                easing: "sineInOut"
            });
            this._currentTweens.push(t);
            t.start();
        }
    };
    DailyChallengeWinView.prototype.playWellDoneBgAnimation = function () {
        if (this._wellDoneBg) {
            var e = this._animSpeedRate, t = cc.tween(this._wellDoneBg).to(0.7 * e, {
                opacity: 255
            }, {
                easing: "linear"
            });
            this._currentTweens.push(t);
            t.start();
        }
    };
    DailyChallengeWinView.prototype.playScoreDescAnimation = function () {
        if (this._lblScoreDes) {
            var e = this._animSpeedRate, t = cc.tween(this._lblScoreDes.node).to(0.2 * e, {
                opacity: 255
            }, {
                easing: "linear"
            });
            this._currentTweens.push(t);
            t.start();
        }
    };
    DailyChallengeWinView.prototype.playScoreAnimation = function () {
        if (this._lblScore) {
            var e = this._animSpeedRate, t = cc.tween(this._lblScore.node).to(0.2 * e, {
                scale: 0.7,
                opacity: 255
            }, {
                easing: "linear"
            }).to(0.13 * e, {
                scale: 1.05
            }, {
                easing: "sineInOut"
            }).to(0.1 * e, {
                scale: 1
            }, {
                easing: "sineInOut"
            });
            this._currentTweens.push(t);
            t.start();
        }
    };
    DailyChallengeWinView.prototype.playButtonAnimation = function () {
        if (this._btnNext) {
            var e = this._animSpeedRate, t = cc.tween(this._btnNext).to(0.2 * e, {
                scale: 1.05
            }, {
                easing: "quadOut"
            }).to(0.17 * e, {
                scale: 1
            }, {
                easing: "quadIn"
            });
            this._currentTweens.push(t);
            t.start();
        }
    };
    DailyChallengeWinView.prototype.playDescAnimation = function () {
        if (this._lblSubtitle) {
            var e = this._animSpeedRate, t = cc.tween(this._lblSubtitle.node).to(0.2 * e, {
                opacity: 255
            }, {
                easing: "linear"
            });
            this._currentTweens.push(t);
            t.start();
        }
    };
    DailyChallengeWinView.prototype.playCloseAnimation = function (e) {
        var t = this;
        if (this._contentNode) {
            var o = this._animSpeedRate;
            this.stopAllAnimations();
            cc.tween(this._contentNode).to(0.1 * o, {
                scale: 1.05
            }, {
                easing: "quadOut"
            }).to(0.2 * o, {
                scale: 0.3,
                opacity: 0
            }, {
                easing: "quadIn"
            }).call(function () {
                t._isAnimating = false;
                t.delegate.close();
                setTimeout(function () {
                    null == e || e();
                }, 10);
            }).start();
            cc.tween(this._lightSkeleton.node).to(0.1 * o, {
                opacity: 0
            }, {
                easing: "quadOut"
            }).call(function () { }).start();
        }
    };
    DailyChallengeWinView.prototype.stopAllAnimations = function () {
        this._currentTweens.forEach(function (e) {
            e && e.stop();
        });
        this._currentTweens = [];
        this.stopMaskAnimation();
        this.unscheduleAllCallbacks();
    };
    DailyChallengeWinView.prototype.hideContent = function () {
        this._contentNode.active = false;
        this.disableBtnNext();
    };
    DailyChallengeWinView.prototype.showContent = function () {
        this._contentNode.active = true;
        this.enableBtnNext();
    };
    DailyChallengeWinView.prototype.disableBtnNext = function () {
        this._btnNext.getComponent(cc.Button).interactable = false;
    };
    DailyChallengeWinView.prototype.enableBtnNext = function () {
        this._btnNext.getComponent(cc.Button).interactable = true;
    };
    DailyChallengeWinView.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
        mj.triggerInternalEvent("BannerAd_NeedShowBanner", this, []);
    };
    DailyChallengeWinView.prefabUrl = "prefabs/daily/DailyChallengeWinView";
    __decorate([
        mj.traitEvent("DCWinVw_onLoad")
    ], DailyChallengeWinView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("DCWinVw_bgMusic")
    ], DailyChallengeWinView.prototype, "handleBgMusic", null);
    __decorate([
        mj.traitEvent("DCWinVw_initDyNode")
    ], DailyChallengeWinView.prototype, "initDynamicNode", null);
    __decorate([
        mj.traitEvent("DCWinVw_mvSubTitToBtnBtm")
    ], DailyChallengeWinView.prototype, "moveSubTitleToBtnNextBottom", null);
    __decorate([
        mj.traitEvent("DCWinVw_onNextClick")
    ], DailyChallengeWinView.prototype, "onBtnNextClick", null);
    __decorate([
        mj.traitEvent("DCWinVw_showWinVw")
    ], DailyChallengeWinView.prototype, "showWinView", null);
    __decorate([
        mj.traitEvent("DCWinVw_popNextView")
    ], DailyChallengeWinView.prototype, "popNextView", null);
    __decorate([
        mj.traitEvent("DCWinVw_playWdSpine")
    ], DailyChallengeWinView.prototype, "playWellDoneSpineAnimation", null);
    __decorate([
        mj.traitEvent("DCWinVw_playLightSpine")
    ], DailyChallengeWinView.prototype, "playLightSpineAnimation", null);
    __decorate([
        mj.traitEvent("DCWinVw_playWdAni2")
    ], DailyChallengeWinView.prototype, "playWellDoneTextAnimation", null);
    __decorate([
        mj.traitEvent("DCWinVw_playWdAni")
    ], DailyChallengeWinView.prototype, "playWellDoneBgAnimation", null);
    __decorate([
        mj.traitEvent("DCWinVw_playBtnAni")
    ], DailyChallengeWinView.prototype, "playButtonAnimation", null);
    __decorate([
        mj.traitEvent("DCWinVw_destroy")
    ], DailyChallengeWinView.prototype, "onDestroy", null);
    DailyChallengeWinView = __decorate([
        mj.class
    ], DailyChallengeWinView);
    return DailyChallengeWinView;
}(UIView_1.default));
exports.default = DailyChallengeWinView;

cc._RF.pop();