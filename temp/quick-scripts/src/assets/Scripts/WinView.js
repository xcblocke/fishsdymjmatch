"use strict";
cc._RF.push(module, 'de44dzbmtBFjq6bMblb4YNM', 'WinView');
// Scripts/WinView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("./framework/ui/UIView");
var I18NStrings_1 = require("./framework/data/I18NStrings");
var DGameBtnClick_1 = require("./dot/DGameBtnClick");
var ExtractTool_1 = require("./core/extractQuestion/ExtractTool");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var SimulatorEvent_1 = require("./core/simulator/events/SimulatorEvent");
var GameUtils_1 = require("./core/simulator/util/GameUtils");
var UserModel_1 = require("./gamePlay/user/UserModel");
var WinView = /** @class */ (function (_super) {
    __extends(WinView, _super);
    function WinView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._contentNode = null;
        _this._maskNode = null;
        _this._maskTween = null;
        _this._wellDoneSkeleton = null;
        _this._lightSkeleton = null;
        _this._curLv = 0;
        _this._score = 0;
        _this._settlementScore = 0;
        _this._perfectMaxScore = 0;
        _this._lblScore = null;
        _this._lblLv = null;
        _this._btnNext = null;
        _this._hardType = 0;
        _this._lblScoreDes = null;
        _this._lblTitle = null;
        _this._lblTitle2 = null;
        _this._lblSubtitle = null;
        _this._wellDoneBg = null;
        _this._btnBgNor = null;
        _this._btnBgExpert = null;
        _this._btnBgHard = null;
        _this._btnBgExpertUp = null;
        _this._btnBgHardUp = null;
        _this._lblBtnDes = null;
        _this._isAnimating = false;
        _this._currentTweens = [];
        _this._animSpeedRate = 1;
        _this._titleConfig = {
            unbelievable: {
                titleKey: "MahjongTiles_GameEnd_Name_1_2",
                titleDefault: "Unbelievable",
                subtitles: [{
                        key: "MahjongTiles_GameEnd_Word_1_2",
                        default: "Your skills are flawless!"
                    }, {
                        key: "MahjongTiles_GameEnd_Word_1_3",
                        default: "The rightful Tile champion!"
                    }, {
                        key: "",
                        default: "You are unstoppable!"
                    }, {
                        key: "",
                        default: "You hold all the power!"
                    }, {
                        key: "",
                        default: "Flawless logic!"
                    }, {
                        key: "",
                        default: "Veni, vidi, vici!"
                    }, {
                        key: "",
                        default: "The tiles themselves bow to you!"
                    }, {
                        key: "",
                        default: "A symphony of winning moves!"
                    }, {
                        key: "",
                        default: "You're on fire!"
                    }]
            },
            perfect: {
                titleKey: "MahjongTiles_GameEnd_Name_2_2",
                titleDefault: "Perfect",
                subtitles: [{
                        key: "MahjongTiles_GameEnd_Word_1_1",
                        default: "You were absolutely perfect!"
                    }, {
                        key: "MahjongTiles_GameEnd_Word_2_1",
                        default: "You are truly exceptional!"
                    }, {
                        key: "MahjongTiles_GameEnd_Word_2_3",
                        default: "What a brilliant performance!"
                    }, {
                        key: "MahjongTiles_GameEnd_Word_2_2",
                        default: "Unmatched skill, one of a kind!"
                    }, {
                        key: "",
                        default: "You've reached mastery!"
                    }, {
                        key: "",
                        default: "A strategic masterpiece!"
                    }, {
                        key: "",
                        default: "Your foresight is incredible!"
                    }, {
                        key: "",
                        default: "A mind for strategy, a touch of luck!"
                    }, {
                        key: "",
                        default: "Cogito, ergo sum!"
                    }]
            },
            wellDone: {
                titleKey: "MahjongTiles_GameEnd_Name_3_2",
                titleDefault: "Well Done",
                subtitles: [{
                        key: "MahjongTiles_GameEnd_Word_3_1",
                        default: "You shine under pressure!"
                    }, {
                        key: "MahjongTiles_GameEnd_Word_3_2",
                        default: "Relentless and unforgettable!"
                    }, {
                        key: "MahjongTiles_GameEnd_Word_3_3",
                        default: "Nothing can stop you!"
                    }, {
                        key: "",
                        default: "Sapere Aude!"
                    }, {
                        key: "",
                        default: "You make greatness look easy!"
                    }, {
                        key: "",
                        default: "The gold standard!"
                    }, {
                        key: "",
                        default: "You're in a league of your own!"
                    }, {
                        key: "",
                        default: "Pure class!"
                    }, {
                        key: "",
                        default: "You've got the winning formula!"
                    }]
            }
        };
        return _this;
    }
    Object.defineProperty(WinView.prototype, "maskNode", {
        get: function () {
            return this._maskNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinView.prototype, "lblLv", {
        get: function () {
            return this._lblLv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinView.prototype, "btnNext", {
        get: function () {
            return this._btnNext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinView.prototype, "btnNextNode", {
        get: function () {
            var e;
            return null === (e = this._btnNext) || void 0 === e ? void 0 : e.getChildByName("content");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinView.prototype, "lblBtnDes", {
        get: function () {
            return this._lblBtnDes;
        },
        enumerable: false,
        configurable: true
    });
    WinView.prototype.getContentNode = function () {
        return this._contentNode;
    };
    WinView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        UserModel_1.default.getInstance().updateGameActiveDays();
        this.playWiEffect();
        this._contentNode = this.node.getChildByName("content");
        this._maskNode = this.node.getChildByName("bg");
        this._wellDoneSkeleton = this._contentNode.getChildByName("spin_wellDone").getComponent(sp.Skeleton);
        cc.isValid(this._wellDoneSkeleton) && (this._wellDoneSkeleton.node.active = false);
        this._lightSkeleton = cc.find("light_node/spin_light", this._contentNode).getComponent(sp.Skeleton);
        this._lblScoreDes = this._contentNode.getChildByName("lbl_scoreDec").getComponent(cc.Label);
        this._lblSubtitle = this._contentNode.getChildByName("lbl_subtitle").getComponent(cc.Label);
        this._wellDoneBg = this._contentNode.getChildByName("spr_bg_wellDone");
        this._btnNext = this._contentNode.getChildByName("btn_next");
        var t = this._btnNext.getChildByName("content");
        this._btnBgNor = t.getChildByName("bg_nor");
        this._btnBgExpert = t.getChildByName("bg_expert");
        this._btnBgHard = t.getChildByName("bg_hard");
        this._btnBgExpertUp = t.getChildByName("bg_expert_up");
        this._btnBgHardUp = t.getChildByName("bg_hard_up");
        this._lblBtnDes = t.getChildByName("lbl_btn_des").getComponent(cc.Label);
        this._lblLv = t.getChildByName("lbl_lv").getComponent(cc.Label);
        this.OnButtonClick(this._btnNext, this.onBtnNextClick.bind(this));
        this.initDynamicNode();
        this.initNodeStates();
        this.handleBgMusic();
        mj.triggerInternalEvent("BannerAd_NeedHideBanner", this, []);
        this._lblSubtitle.node.setContentSize(this.getSubtitleContentSize());
    };
    WinView.prototype.getSubtitleContentSize = function () {
        return cc.size(1000, 82);
    };
    WinView.prototype.setAnimSpeedRate = function (e) {
        this._animSpeedRate = e;
    };
    WinView.prototype.getDescAnimationDelay = function () {
        return 1.53;
    };
    WinView.prototype.getBtnNextDelay = function () {
        return 1.33;
    };
    WinView.prototype.playWiEffect = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Win);
    };
    WinView.prototype.handleBgMusic = function () {
        mj.audioManager.fadeBGMOut();
    };
    WinView.prototype.initDynamicNode = function () {
        var e, t, o;
        this._lblTitle = null === (e = this._contentNode.getChildByName("lbl_title")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
        this._lblTitle2 = null === (t = this._contentNode.getChildByName("lbl_title2")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        this._lblScore = null === (o = this._contentNode.getChildByName("lbl_score")) || void 0 === o ? void 0 : o.getComponent(cc.Label);
    };
    WinView.prototype.moveSubTitleToBtnNextBottom = function () {
        var e = this._btnNext.position.clone();
        this._lblSubtitle.node.setPosition(e.x, e.y - 217);
    };
    WinView.prototype.onBtnNextClick = function () {
        if (this.node && cc.isValid(this.node)) {
            DGameBtnClick_1.DotGameBtnClick.doNextLevel(this._curLv);
            this.playCloseAnimation(function () {
                mj.EventManager.emit(SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_NEXTLEVEL);
            });
        }
    };
    WinView.prototype.showWinView = function (e) {
        var t = e.data;
        this._curLv = t.curLv;
        this._score = t.score;
        this._settlementScore = t.settlementScore;
        this._perfectMaxScore = t.perfectMaxScore;
        this._lblScore && I18NStrings_1.default.setText(this._lblScore.node, this._settlementScore.toString());
        I18NStrings_1.default.setText(this._lblLv.node, "Level " + this._curLv.toString(), "MahjongTiles_GameEnd_Level", [this._curLv]);
        var o = this.getTitleType(this._score, this._perfectMaxScore);
        this._lblTitle && I18NStrings_1.default.setText(this._lblTitle.node, o.titleDefault, o.titleKey);
        this._lblTitle2 && I18NStrings_1.default.setText(this._lblTitle2.node, o.titleDefault, o.titleKey);
        I18NStrings_1.default.setText(this._lblSubtitle.node, o.subtitleDefault, o.subtitleKey);
        this._titleType = null == o ? void 0 : o.titleDefault;
        this.playWinAnimationSequence();
        var n = ExtractTool_1.default.getInstance().isExpertUI(this._curLv), i = ExtractTool_1.default.getInstance().isHardUI(this._curLv);
        this.resetAllButtonStates();
        if (n) {
            this._btnBgExpert.opacity = 255;
            this._btnBgExpertUp.opacity = 255;
            this.showDifficultyLabel("Expert", "MahjongTiles_VeryHard");
            this._hardType = 2;
        }
        else if (i) {
            this._btnBgHard.opacity = 255;
            this._btnBgHardUp.opacity = 255;
            this.showDifficultyLabel("Hard", "MahjongTiles_Hard");
            this._hardType = 1;
        }
        else {
            this._btnBgNor.opacity = 255;
            this._hardType = 0;
        }
    };
    WinView.prototype.updateDiffBgWidth = function () {
        if (cc.isValid(this._lblBtnDes) && this.lblBtnDes.node.activeInHierarchy && this.lblBtnDes.node.opacity > 0) {
            this._btnBgExpertUp.width = this._lblBtnDes.node.width + 50;
            this._btnBgHardUp.width = this._lblBtnDes.node.width + 50;
        }
    };
    WinView.prototype.playMaskFadeIn = function (e) {
        if (e === void 0) { e = 0.2; }
        var t;
        if (this._maskNode) {
            this.stopMaskAnimation();
            var o = null === (t = this.node.parent) || void 0 === t ? void 0 : t.getChildByName("BlurBg");
            cc.isValid(o) && (o.opacity = 0);
        }
    };
    WinView.prototype.playMaskFadeOut = function (e) {
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
    WinView.prototype.stopMaskAnimation = function () {
        if (this._maskTween) {
            this._maskTween.stop();
            this._maskTween = null;
        }
    };
    WinView.prototype.initNodeStates = function () {
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
        }
        this._lblSubtitle && (this._lblSubtitle.node.opacity = 0);
    };
    WinView.prototype.getTitleType = function (e, t) {
        if (t <= 0)
            return this.getTitleConfig("wellDone");
        var o = e / t;
        return o >= 1 ? this.getTitleConfig("unbelievable") : o >= 0.9 ? this.getTitleConfig("perfect") : this.getTitleConfig("wellDone");
    };
    WinView.prototype.getTitleConfig = function (e) {
        var t = this._titleConfig[e], o = this.getRandomSubtitle(t.subtitles);
        return {
            titleKey: t.titleKey,
            titleDefault: t.titleDefault,
            subtitleKey: o.key,
            subtitleDefault: o.default
        };
    };
    WinView.prototype.getRandomSubtitle = function (e) {
        if (!e || 0 === e.length)
            return {
                key: "",
                default: ""
            };
        var t = Math.floor(Math.random() * e.length);
        if (void 0 !== mj.getClassByName("LanguageSelectorTrait")) {
            var o = e[t];
            if (o.key)
                return o;
            var n = e.filter(function (e) {
                return e.key;
            });
            return n[Math.floor(Math.random() * n.length)];
        }
        return e[t];
    };
    WinView.prototype.createDefeatPercentageText = function (e, t) {
        return "<color=#edab03>" + t.replace("{percentage}", "<color=#ff6e4a>" + e + "%</color>") + "</color>";
    };
    WinView.prototype.playWinAnimationSequence = function () {
        if (!this._isAnimating) {
            this._isAnimating = true;
            this.playMaskFadeIn();
            this.playWellDoneSpineAnimation();
            this.scheduleWinAnimations();
            this.popNextView();
        }
    };
    WinView.prototype.popNextView = function (e) {
        if (e === void 0) { e = {}; }
    };
    WinView.prototype.playWellDoneSpineAnimation = function () {
        cc.isValid(this._wellDoneSkeleton) && (this._wellDoneSkeleton.node.active = true);
        GameUtils_1.default.playSpine(this._wellDoneSkeleton, "in", false, null, 1 / this._animSpeedRate);
    };
    WinView.prototype.playLightSpineAnimation = function () {
        GameUtils_1.default.playSpine(this._lightSkeleton, "init", true, null, 1 / this._animSpeedRate);
    };
    WinView.prototype.scheduleWinAnimations = function () {
        var e = this, t = this._animSpeedRate;
        this.scheduleOnce(function () {
            e.playLightSpineAnimation();
            e.playWellDoneTextAnimation();
        }, 0.2 * t);
        this.scheduleOnce(function () {
            e.playWellDoneOverlayAnimation();
            e.playWellDoneBgAnimation();
            e.playScoreDescAnimation();
        }, 0.5 * t);
        this.scheduleOnce(function () {
            e.playScoreAnimation();
        }, 0.7 * t);
        this.scheduleOnce(function () {
            e._btnNext.opacity = 255;
            e.playButtonAnimation();
            e.scheduleOnce(function () {
                e.updateDiffBgWidth();
            }, 0);
        }, this.getBtnNextDelay() * t);
        this.scheduleOnce(function () {
            e.playDescAnimation();
        }, this.getDescAnimationDelay() * t);
    };
    WinView.prototype.playWellDoneTextAnimation = function () {
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
    WinView.prototype.playWellDoneOverlayAnimation = function () { };
    WinView.prototype.playWellDoneBgAnimation = function () {
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
    WinView.prototype.playScoreDescAnimation = function () {
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
    WinView.prototype.playScoreAnimation = function () {
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
    WinView.prototype.playButtonAnimation = function () {
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
    WinView.prototype.playDescAnimation = function () {
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
    WinView.prototype.playCloseAnimation = function (e) {
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
    WinView.prototype.stopAllAnimations = function () {
        this._currentTweens.forEach(function (e) {
            e && e.stop();
        });
        this._currentTweens = [];
        this.stopMaskAnimation();
        this.unscheduleAllCallbacks();
    };
    WinView.prototype.hideContent = function () {
        this._contentNode.active = false;
        this.disableBtnNext();
    };
    WinView.prototype.showContent = function () {
        this._contentNode.active = true;
        this.enableBtnNext();
    };
    WinView.prototype.disableBtnNext = function () {
        this._btnNext.getComponent(cc.Button).interactable = false;
    };
    WinView.prototype.enableBtnNext = function () {
        this._btnNext.getComponent(cc.Button).interactable = true;
    };
    WinView.prototype.resetAllButtonStates = function () {
        [this._btnBgExpert, this._btnBgExpertUp, this._btnBgHard, this._btnBgHardUp, this._btnBgNor].forEach(function (e) {
            e && (e.opacity = 0);
        });
        this._lblBtnDes.node.opacity = 0;
    };
    WinView.prototype.showDifficultyLabel = function (e, t) {
        this._lblBtnDes.node.opacity = 255;
        e && I18NStrings_1.default.setText(this._lblBtnDes.node, e, t);
    };
    WinView.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
        mj.triggerInternalEvent("BannerAd_NeedShowBanner", this, []);
    };
    WinView.prototype.setBtnNextZIndex = function (e) {
        this._btnNext && cc.isValid(this._btnNext) && (this._btnNext.zIndex = e);
    };
    WinView.prefabUrl = "prefabs/ui/WinView";
    __decorate([
        mj.traitEvent("WinVw_onLoad")
    ], WinView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("WinVw_getSubSize")
    ], WinView.prototype, "getSubtitleContentSize", null);
    __decorate([
        mj.traitEvent("WinVw_getDescAniDly")
    ], WinView.prototype, "getDescAnimationDelay", null);
    __decorate([
        mj.traitEvent("WinVw_getBtnNextDly")
    ], WinView.prototype, "getBtnNextDelay", null);
    __decorate([
        mj.traitEvent("WinVw_playWiEff")
    ], WinView.prototype, "playWiEffect", null);
    __decorate([
        mj.traitEvent("WinVw_bgMusic")
    ], WinView.prototype, "handleBgMusic", null);
    __decorate([
        mj.traitEvent("WinVw_initDyNode")
    ], WinView.prototype, "initDynamicNode", null);
    __decorate([
        mj.traitEvent("WinVw_mvSubTitToBtnBtm")
    ], WinView.prototype, "moveSubTitleToBtnNextBottom", null);
    __decorate([
        mj.traitEvent("WinVw_onNextClick")
    ], WinView.prototype, "onBtnNextClick", null);
    __decorate([
        mj.traitEvent("WinVw_showWinVw")
    ], WinView.prototype, "showWinView", null);
    __decorate([
        mj.traitEvent("WinVw_playMaskFadeIn")
    ], WinView.prototype, "playMaskFadeIn", null);
    __decorate([
        mj.traitEvent("WinVw_playWinAnimSeq")
    ], WinView.prototype, "playWinAnimationSequence", null);
    __decorate([
        mj.traitEvent("WinVw_popNextView")
    ], WinView.prototype, "popNextView", null);
    __decorate([
        mj.traitEvent("WinVw_playWdSpine")
    ], WinView.prototype, "playWellDoneSpineAnimation", null);
    __decorate([
        mj.traitEvent("WinVw_playLightSpine")
    ], WinView.prototype, "playLightSpineAnimation", null);
    __decorate([
        mj.traitEvent("WinVw_playWdAni2")
    ], WinView.prototype, "playWellDoneTextAnimation", null);
    __decorate([
        mj.traitEvent("WinVw_playWdAni")
    ], WinView.prototype, "playWellDoneBgAnimation", null);
    __decorate([
        mj.traitEvent("WinVw_playScoreAni")
    ], WinView.prototype, "playScoreAnimation", null);
    __decorate([
        mj.traitEvent("WinVw_playBtnAni")
    ], WinView.prototype, "playButtonAnimation", null);
    __decorate([
        mj.traitEvent("WinVw_destroy")
    ], WinView.prototype, "onDestroy", null);
    WinView = __decorate([
        mj.class
    ], WinView);
    return WinView;
}(UIView_1.default));
exports.default = WinView;

cc._RF.pop();