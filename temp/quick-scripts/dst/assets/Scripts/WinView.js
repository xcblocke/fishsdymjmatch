
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/WinView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1dpblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyw0REFBdUQ7QUFDdkQscURBQXNEO0FBQ3RELGtFQUE2RDtBQUM3RCx5RUFBbUU7QUFDbkUseUVBQXlGO0FBQ3pGLDZEQUF3RDtBQUN4RCx1REFBa0Q7QUFFbEQ7SUFBcUMsMkJBQU07SUFBM0M7UUFBQSxxRUF1aUJDO1FBdGlCQyxrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLHVCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLHNCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQixzQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGtCQUFZLEdBQUcsS0FBSyxDQUFDO1FB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Q0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7OERBSXZDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO2lEQVFsQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQzs4Q0FnQ2hDO0lBUUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO2lEQVFyQztJQXdFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7MkRBU3JDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDOzhDQUNiO0lBRXRCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQzs2REFJbEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7MERBR3JDO0lBNEJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQzs0REFxQmpDO0lBR0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDOzBEQVloQztJQWNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztxREFxQm5DO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDO3NEQWdCakM7SUEwRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQzs0Q0FJOUI7SUFuaUJrQixPQUFPO1FBRDNCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksT0FBTyxDQXVpQjNCO0lBQUQsY0FBQztDQXZpQkQsQUF1aUJDLENBdmlCb0MsZ0JBQU0sR0F1aUIxQztrQkF2aUJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJVmlldyBmcm9tICcuL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4vZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrIH0gZnJvbSAnLi9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgRXh0cmFjdFRvb2wgZnJvbSAnLi9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0VG9vbCc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBFVlRfTVNHX0tFWV9TSU1VTEFUT1JfTkVYVExFVkVMIH0gZnJvbSAnLi9jb3JlL3NpbXVsYXRvci9ldmVudHMvU2ltdWxhdG9yRXZlbnQnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpblZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBfY29udGVudE5vZGUgPSBudWxsO1xuICBfbWFza05vZGUgPSBudWxsO1xuICBfbWFza1R3ZWVuID0gbnVsbDtcbiAgX3dlbGxEb25lU2tlbGV0b24gPSBudWxsO1xuICBfbGlnaHRTa2VsZXRvbiA9IG51bGw7XG4gIF9jdXJMdiA9IDA7XG4gIF9zY29yZSA9IDA7XG4gIF9zZXR0bGVtZW50U2NvcmUgPSAwO1xuICBfcGVyZmVjdE1heFNjb3JlID0gMDtcbiAgX2xibFNjb3JlID0gbnVsbDtcbiAgX2xibEx2ID0gbnVsbDtcbiAgX2J0bk5leHQgPSBudWxsO1xuICBfaGFyZFR5cGUgPSAwO1xuICBfbGJsU2NvcmVEZXMgPSBudWxsO1xuICBfbGJsVGl0bGUgPSBudWxsO1xuICBfbGJsVGl0bGUyID0gbnVsbDtcbiAgX2xibFN1YnRpdGxlID0gbnVsbDtcbiAgX3dlbGxEb25lQmcgPSBudWxsO1xuICBfYnRuQmdOb3IgPSBudWxsO1xuICBfYnRuQmdFeHBlcnQgPSBudWxsO1xuICBfYnRuQmdIYXJkID0gbnVsbDtcbiAgX2J0bkJnRXhwZXJ0VXAgPSBudWxsO1xuICBfYnRuQmdIYXJkVXAgPSBudWxsO1xuICBfbGJsQnRuRGVzID0gbnVsbDtcbiAgX2lzQW5pbWF0aW5nID0gZmFsc2U7XG4gIF9jdXJyZW50VHdlZW5zID0gW107XG4gIF9hbmltU3BlZWRSYXRlID0gMTtcbiAgX3RpdGxlQ29uZmlnID0ge1xuICAgIHVuYmVsaWV2YWJsZToge1xuICAgICAgdGl0bGVLZXk6IFwiTWFoam9uZ1RpbGVzX0dhbWVFbmRfTmFtZV8xXzJcIixcbiAgICAgIHRpdGxlRGVmYXVsdDogXCJVbmJlbGlldmFibGVcIixcbiAgICAgIHN1YnRpdGxlczogW3tcbiAgICAgICAga2V5OiBcIk1haGpvbmdUaWxlc19HYW1lRW5kX1dvcmRfMV8yXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiWW91ciBza2lsbHMgYXJlIGZsYXdsZXNzIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJNYWhqb25nVGlsZXNfR2FtZUVuZF9Xb3JkXzFfM1wiLFxuICAgICAgICBkZWZhdWx0OiBcIlRoZSByaWdodGZ1bCBUaWxlIGNoYW1waW9uIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJZb3UgYXJlIHVuc3RvcHBhYmxlIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJZb3UgaG9sZCBhbGwgdGhlIHBvd2VyIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJGbGF3bGVzcyBsb2dpYyFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiVmVuaSwgdmlkaSwgdmljaSFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiVGhlIHRpbGVzIHRoZW1zZWx2ZXMgYm93IHRvIHlvdSFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiQSBzeW1waG9ueSBvZiB3aW5uaW5nIG1vdmVzIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJZb3UncmUgb24gZmlyZSFcIlxuICAgICAgfV1cbiAgICB9LFxuICAgIHBlcmZlY3Q6IHtcbiAgICAgIHRpdGxlS2V5OiBcIk1haGpvbmdUaWxlc19HYW1lRW5kX05hbWVfMl8yXCIsXG4gICAgICB0aXRsZURlZmF1bHQ6IFwiUGVyZmVjdFwiLFxuICAgICAgc3VidGl0bGVzOiBbe1xuICAgICAgICBrZXk6IFwiTWFoam9uZ1RpbGVzX0dhbWVFbmRfV29yZF8xXzFcIixcbiAgICAgICAgZGVmYXVsdDogXCJZb3Ugd2VyZSBhYnNvbHV0ZWx5IHBlcmZlY3QhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIk1haGpvbmdUaWxlc19HYW1lRW5kX1dvcmRfMl8xXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiWW91IGFyZSB0cnVseSBleGNlcHRpb25hbCFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiTWFoam9uZ1RpbGVzX0dhbWVFbmRfV29yZF8yXzNcIixcbiAgICAgICAgZGVmYXVsdDogXCJXaGF0IGEgYnJpbGxpYW50IHBlcmZvcm1hbmNlIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJNYWhqb25nVGlsZXNfR2FtZUVuZF9Xb3JkXzJfMlwiLFxuICAgICAgICBkZWZhdWx0OiBcIlVubWF0Y2hlZCBza2lsbCwgb25lIG9mIGEga2luZCFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiWW91J3ZlIHJlYWNoZWQgbWFzdGVyeSFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiQSBzdHJhdGVnaWMgbWFzdGVycGllY2UhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIllvdXIgZm9yZXNpZ2h0IGlzIGluY3JlZGlibGUhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIkEgbWluZCBmb3Igc3RyYXRlZ3ksIGEgdG91Y2ggb2YgbHVjayFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiQ29naXRvLCBlcmdvIHN1bSFcIlxuICAgICAgfV1cbiAgICB9LFxuICAgIHdlbGxEb25lOiB7XG4gICAgICB0aXRsZUtleTogXCJNYWhqb25nVGlsZXNfR2FtZUVuZF9OYW1lXzNfMlwiLFxuICAgICAgdGl0bGVEZWZhdWx0OiBcIldlbGwgRG9uZVwiLFxuICAgICAgc3VidGl0bGVzOiBbe1xuICAgICAgICBrZXk6IFwiTWFoam9uZ1RpbGVzX0dhbWVFbmRfV29yZF8zXzFcIixcbiAgICAgICAgZGVmYXVsdDogXCJZb3Ugc2hpbmUgdW5kZXIgcHJlc3N1cmUhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIk1haGpvbmdUaWxlc19HYW1lRW5kX1dvcmRfM18yXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiUmVsZW50bGVzcyBhbmQgdW5mb3JnZXR0YWJsZSFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiTWFoam9uZ1RpbGVzX0dhbWVFbmRfV29yZF8zXzNcIixcbiAgICAgICAgZGVmYXVsdDogXCJOb3RoaW5nIGNhbiBzdG9wIHlvdSFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiU2FwZXJlIEF1ZGUhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIllvdSBtYWtlIGdyZWF0bmVzcyBsb29rIGVhc3khXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIlRoZSBnb2xkIHN0YW5kYXJkIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJZb3UncmUgaW4gYSBsZWFndWUgb2YgeW91ciBvd24hXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIlB1cmUgY2xhc3MhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIllvdSd2ZSBnb3QgdGhlIHdpbm5pbmcgZm9ybXVsYSFcIlxuICAgICAgfV1cbiAgICB9XG4gIH07XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvdWkvV2luVmlld1wiO1xuICBnZXQgbWFza05vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hc2tOb2RlO1xuICB9XG4gIGdldCBsYmxMdigpIHtcbiAgICByZXR1cm4gdGhpcy5fbGJsTHY7XG4gIH1cbiAgZ2V0IGJ0bk5leHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J0bk5leHQ7XG4gIH1cbiAgZ2V0IGJ0bk5leHROb2RlKCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiBudWxsID09PSAoZSA9IHRoaXMuX2J0bk5leHQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpO1xuICB9XG4gIGdldCBsYmxCdG5EZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xibEJ0bkRlcztcbiAgfVxuICBnZXRDb250ZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudE5vZGU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJXaW5Wd19vbkxvYWRcIilcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLnVwZGF0ZUdhbWVBY3RpdmVEYXlzKCk7XG4gICAgdGhpcy5wbGF5V2lFZmZlY3QoKTtcbiAgICB0aGlzLl9jb250ZW50Tm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XG4gICAgdGhpcy5fbWFza05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKTtcbiAgICB0aGlzLl93ZWxsRG9uZVNrZWxldG9uID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluX3dlbGxEb25lXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl93ZWxsRG9uZVNrZWxldG9uKSAmJiAodGhpcy5fd2VsbERvbmVTa2VsZXRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB0aGlzLl9saWdodFNrZWxldG9uID0gY2MuZmluZChcImxpZ2h0X25vZGUvc3Bpbl9saWdodFwiLCB0aGlzLl9jb250ZW50Tm9kZSkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICB0aGlzLl9sYmxTY29yZURlcyA9IHRoaXMuX2NvbnRlbnROb2RlLmdldENoaWxkQnlOYW1lKFwibGJsX3Njb3JlRGVjXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5fbGJsU3VidGl0bGUgPSB0aGlzLl9jb250ZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImxibF9zdWJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuX3dlbGxEb25lQmcgPSB0aGlzLl9jb250ZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwcl9iZ193ZWxsRG9uZVwiKTtcbiAgICB0aGlzLl9idG5OZXh0ID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fbmV4dFwiKTtcbiAgICB2YXIgdCA9IHRoaXMuX2J0bk5leHQuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpO1xuICAgIHRoaXMuX2J0bkJnTm9yID0gdC5nZXRDaGlsZEJ5TmFtZShcImJnX25vclwiKTtcbiAgICB0aGlzLl9idG5CZ0V4cGVydCA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ19leHBlcnRcIik7XG4gICAgdGhpcy5fYnRuQmdIYXJkID0gdC5nZXRDaGlsZEJ5TmFtZShcImJnX2hhcmRcIik7XG4gICAgdGhpcy5fYnRuQmdFeHBlcnRVcCA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ19leHBlcnRfdXBcIik7XG4gICAgdGhpcy5fYnRuQmdIYXJkVXAgPSB0LmdldENoaWxkQnlOYW1lKFwiYmdfaGFyZF91cFwiKTtcbiAgICB0aGlzLl9sYmxCdG5EZXMgPSB0LmdldENoaWxkQnlOYW1lKFwibGJsX2J0bl9kZXNcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLl9sYmxMdiA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfbHZcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fYnRuTmV4dCwgdGhpcy5vbkJ0bk5leHRDbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmluaXREeW5hbWljTm9kZSgpO1xuICAgIHRoaXMuaW5pdE5vZGVTdGF0ZXMoKTtcbiAgICB0aGlzLmhhbmRsZUJnTXVzaWMoKTtcbiAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkJhbm5lckFkX05lZWRIaWRlQmFubmVyXCIsIHRoaXMsIFtdKTtcbiAgICB0aGlzLl9sYmxTdWJ0aXRsZS5ub2RlLnNldENvbnRlbnRTaXplKHRoaXMuZ2V0U3VidGl0bGVDb250ZW50U2l6ZSgpKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIldpblZ3X2dldFN1YlNpemVcIilcbiAgZ2V0U3VidGl0bGVDb250ZW50U2l6ZSgpIHtcbiAgICByZXR1cm4gY2Muc2l6ZSgxMDAwLCA4Mik7XG4gIH1cbiAgc2V0QW5pbVNwZWVkUmF0ZShlKSB7XG4gICAgdGhpcy5fYW5pbVNwZWVkUmF0ZSA9IGU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJXaW5Wd19nZXREZXNjQW5pRGx5XCIpXG4gIGdldERlc2NBbmltYXRpb25EZWxheSgpIHtcbiAgICByZXR1cm4gMS41MztcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIldpblZ3X2dldEJ0bk5leHREbHlcIilcbiAgZ2V0QnRuTmV4dERlbGF5KCkge1xuICAgIHJldHVybiAxLjMzO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiV2luVndfcGxheVdpRWZmXCIpXG4gIHBsYXlXaUVmZmVjdCgpIHtcbiAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5XaW4pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiV2luVndfYmdNdXNpY1wiKVxuICBoYW5kbGVCZ011c2ljKCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5mYWRlQkdNT3V0KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJXaW5Wd19pbml0RHlOb2RlXCIpXG4gIGluaXREeW5hbWljTm9kZSgpIHtcbiAgICB2YXIgZSwgdCwgbztcbiAgICB0aGlzLl9sYmxUaXRsZSA9IG51bGwgPT09IChlID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfdGl0bGVcIikpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLl9sYmxUaXRsZTIgPSBudWxsID09PSAodCA9IHRoaXMuX2NvbnRlbnROb2RlLmdldENoaWxkQnlOYW1lKFwibGJsX3RpdGxlMlwiKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuX2xibFNjb3JlID0gbnVsbCA9PT0gKG8gPSB0aGlzLl9jb250ZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImxibF9zY29yZVwiKSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiV2luVndfbXZTdWJUaXRUb0J0bkJ0bVwiKVxuICBtb3ZlU3ViVGl0bGVUb0J0bk5leHRCb3R0b20oKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9idG5OZXh0LnBvc2l0aW9uLmNsb25lKCk7XG4gICAgdGhpcy5fbGJsU3VidGl0bGUubm9kZS5zZXRQb3NpdGlvbihlLngsIGUueSAtIDIxNyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJXaW5Wd19vbk5leHRDbGlja1wiKVxuICBvbkJ0bk5leHRDbGljaygpIHtcbiAgICBpZiAodGhpcy5ub2RlICYmIGNjLmlzVmFsaWQodGhpcy5ub2RlKSkge1xuICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvTmV4dExldmVsKHRoaXMuX2N1ckx2KTtcbiAgICAgIHRoaXMucGxheUNsb3NlQW5pbWF0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRVZUX01TR19LRVlfU0lNVUxBVE9SX05FWFRMRVZFTCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJXaW5Wd19zaG93V2luVndcIilcbiAgc2hvd1dpblZpZXcoZSkge1xuICAgIHZhciB0ID0gZS5kYXRhO1xuICAgIHRoaXMuX2N1ckx2ID0gdC5jdXJMdjtcbiAgICB0aGlzLl9zY29yZSA9IHQuc2NvcmU7XG4gICAgdGhpcy5fc2V0dGxlbWVudFNjb3JlID0gdC5zZXR0bGVtZW50U2NvcmU7XG4gICAgdGhpcy5fcGVyZmVjdE1heFNjb3JlID0gdC5wZXJmZWN0TWF4U2NvcmU7XG4gICAgdGhpcy5fbGJsU2NvcmUgJiYgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLl9sYmxTY29yZS5ub2RlLCB0aGlzLl9zZXR0bGVtZW50U2NvcmUudG9TdHJpbmcoKSk7XG4gICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLl9sYmxMdi5ub2RlLCBcIkxldmVsIFwiICsgdGhpcy5fY3VyTHYudG9TdHJpbmcoKSwgXCJNYWhqb25nVGlsZXNfR2FtZUVuZF9MZXZlbFwiLCBbdGhpcy5fY3VyTHZdKTtcbiAgICB2YXIgbyA9IHRoaXMuZ2V0VGl0bGVUeXBlKHRoaXMuX3Njb3JlLCB0aGlzLl9wZXJmZWN0TWF4U2NvcmUpO1xuICAgIHRoaXMuX2xibFRpdGxlICYmIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5fbGJsVGl0bGUubm9kZSwgby50aXRsZURlZmF1bHQsIG8udGl0bGVLZXkpO1xuICAgIHRoaXMuX2xibFRpdGxlMiAmJiBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMuX2xibFRpdGxlMi5ub2RlLCBvLnRpdGxlRGVmYXVsdCwgby50aXRsZUtleSk7XG4gICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLl9sYmxTdWJ0aXRsZS5ub2RlLCBvLnN1YnRpdGxlRGVmYXVsdCwgby5zdWJ0aXRsZUtleSk7XG4gICAgdGhpcy5fdGl0bGVUeXBlID0gbnVsbCA9PSBvID8gdm9pZCAwIDogby50aXRsZURlZmF1bHQ7XG4gICAgdGhpcy5wbGF5V2luQW5pbWF0aW9uU2VxdWVuY2UoKTtcbiAgICB2YXIgbiA9IEV4dHJhY3RUb29sLmdldEluc3RhbmNlKCkuaXNFeHBlcnRVSSh0aGlzLl9jdXJMdiksXG4gICAgICBpID0gRXh0cmFjdFRvb2wuZ2V0SW5zdGFuY2UoKS5pc0hhcmRVSSh0aGlzLl9jdXJMdik7XG4gICAgdGhpcy5yZXNldEFsbEJ1dHRvblN0YXRlcygpO1xuICAgIGlmIChuKSB7XG4gICAgICB0aGlzLl9idG5CZ0V4cGVydC5vcGFjaXR5ID0gMjU1O1xuICAgICAgdGhpcy5fYnRuQmdFeHBlcnRVcC5vcGFjaXR5ID0gMjU1O1xuICAgICAgdGhpcy5zaG93RGlmZmljdWx0eUxhYmVsKFwiRXhwZXJ0XCIsIFwiTWFoam9uZ1RpbGVzX1ZlcnlIYXJkXCIpO1xuICAgICAgdGhpcy5faGFyZFR5cGUgPSAyO1xuICAgIH0gZWxzZSBpZiAoaSkge1xuICAgICAgdGhpcy5fYnRuQmdIYXJkLm9wYWNpdHkgPSAyNTU7XG4gICAgICB0aGlzLl9idG5CZ0hhcmRVcC5vcGFjaXR5ID0gMjU1O1xuICAgICAgdGhpcy5zaG93RGlmZmljdWx0eUxhYmVsKFwiSGFyZFwiLCBcIk1haGpvbmdUaWxlc19IYXJkXCIpO1xuICAgICAgdGhpcy5faGFyZFR5cGUgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idG5CZ05vci5vcGFjaXR5ID0gMjU1O1xuICAgICAgdGhpcy5faGFyZFR5cGUgPSAwO1xuICAgIH1cbiAgfVxuICB1cGRhdGVEaWZmQmdXaWR0aCgpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9sYmxCdG5EZXMpICYmIHRoaXMubGJsQnRuRGVzLm5vZGUuYWN0aXZlSW5IaWVyYXJjaHkgJiYgdGhpcy5sYmxCdG5EZXMubm9kZS5vcGFjaXR5ID4gMCkge1xuICAgICAgdGhpcy5fYnRuQmdFeHBlcnRVcC53aWR0aCA9IHRoaXMuX2xibEJ0bkRlcy5ub2RlLndpZHRoICsgNTA7XG4gICAgICB0aGlzLl9idG5CZ0hhcmRVcC53aWR0aCA9IHRoaXMuX2xibEJ0bkRlcy5ub2RlLndpZHRoICsgNTA7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiV2luVndfcGxheU1hc2tGYWRlSW5cIilcbiAgcGxheU1hc2tGYWRlSW4oZSA9IDAuMikge1xuICAgIHZhciB0O1xuICAgIGlmICh0aGlzLl9tYXNrTm9kZSkge1xuICAgICAgdGhpcy5zdG9wTWFza0FuaW1hdGlvbigpO1xuICAgICAgdmFyIG8gPSBudWxsID09PSAodCA9IHRoaXMubm9kZS5wYXJlbnQpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q2hpbGRCeU5hbWUoXCJCbHVyQmdcIik7XG4gICAgICBjYy5pc1ZhbGlkKG8pICYmIChvLm9wYWNpdHkgPSAwKTtcbiAgICB9XG4gIH1cbiAgcGxheU1hc2tGYWRlT3V0KGUgPSAwLjIpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX21hc2tOb2RlKSB7XG4gICAgICB0aGlzLnN0b3BNYXNrQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLl9tYXNrVHdlZW4gPSBjYy50d2Vlbih0aGlzLl9tYXNrTm9kZSkudG8oZSwge1xuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJzaW5lSW5cIlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQuX21hc2tUd2VlbiA9IG51bGw7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBzdG9wTWFza0FuaW1hdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbWFza1R3ZWVuKSB7XG4gICAgICB0aGlzLl9tYXNrVHdlZW4uc3RvcCgpO1xuICAgICAgdGhpcy5fbWFza1R3ZWVuID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgaW5pdE5vZGVTdGF0ZXMoKSB7XG4gICAgaWYgKHRoaXMuX2xibFRpdGxlKSB7XG4gICAgICB0aGlzLl9sYmxUaXRsZS5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5fbGJsVGl0bGUubm9kZS5zY2FsZSA9IDAuMztcbiAgICB9XG4gICAgdGhpcy5fd2VsbERvbmVCZyAmJiAodGhpcy5fd2VsbERvbmVCZy5vcGFjaXR5ID0gMCk7XG4gICAgdGhpcy5fbGJsU2NvcmVEZXMgJiYgKHRoaXMuX2xibFNjb3JlRGVzLm5vZGUub3BhY2l0eSA9IDApO1xuICAgIGlmICh0aGlzLl9sYmxTY29yZSkge1xuICAgICAgdGhpcy5fbGJsU2NvcmUubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuX2xibFNjb3JlLm5vZGUuc2NhbGUgPSAxLjY7XG4gICAgfVxuICAgIGlmICh0aGlzLl9idG5OZXh0KSB7XG4gICAgICB0aGlzLl9idG5OZXh0LnNjYWxlID0gMC42O1xuICAgICAgdGhpcy5fYnRuTmV4dC5vcGFjaXR5ID0gMDtcbiAgICB9XG4gICAgdGhpcy5fbGJsU3VidGl0bGUgJiYgKHRoaXMuX2xibFN1YnRpdGxlLm5vZGUub3BhY2l0eSA9IDApO1xuICB9XG4gIGdldFRpdGxlVHlwZShlLCB0KSB7XG4gICAgaWYgKHQgPD0gMCkgcmV0dXJuIHRoaXMuZ2V0VGl0bGVDb25maWcoXCJ3ZWxsRG9uZVwiKTtcbiAgICB2YXIgbyA9IGUgLyB0O1xuICAgIHJldHVybiBvID49IDEgPyB0aGlzLmdldFRpdGxlQ29uZmlnKFwidW5iZWxpZXZhYmxlXCIpIDogbyA+PSAwLjkgPyB0aGlzLmdldFRpdGxlQ29uZmlnKFwicGVyZmVjdFwiKSA6IHRoaXMuZ2V0VGl0bGVDb25maWcoXCJ3ZWxsRG9uZVwiKTtcbiAgfVxuICBnZXRUaXRsZUNvbmZpZyhlKSB7XG4gICAgdmFyIHQgPSB0aGlzLl90aXRsZUNvbmZpZ1tlXSxcbiAgICAgIG8gPSB0aGlzLmdldFJhbmRvbVN1YnRpdGxlKHQuc3VidGl0bGVzKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGVLZXk6IHQudGl0bGVLZXksXG4gICAgICB0aXRsZURlZmF1bHQ6IHQudGl0bGVEZWZhdWx0LFxuICAgICAgc3VidGl0bGVLZXk6IG8ua2V5LFxuICAgICAgc3VidGl0bGVEZWZhdWx0OiBvLmRlZmF1bHRcbiAgICB9O1xuICB9XG4gIGdldFJhbmRvbVN1YnRpdGxlKGUpIHtcbiAgICBpZiAoIWUgfHwgMCA9PT0gZS5sZW5ndGgpIHJldHVybiB7XG4gICAgICBrZXk6IFwiXCIsXG4gICAgICBkZWZhdWx0OiBcIlwiXG4gICAgfTtcbiAgICB2YXIgdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGUubGVuZ3RoKTtcbiAgICBpZiAodm9pZCAwICE9PSBtai5nZXRDbGFzc0J5TmFtZShcIkxhbmd1YWdlU2VsZWN0b3JUcmFpdFwiKSkge1xuICAgICAgdmFyIG8gPSBlW3RdO1xuICAgICAgaWYgKG8ua2V5KSByZXR1cm4gbztcbiAgICAgIHZhciBuID0gZS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUua2V5O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gZVt0XTtcbiAgfVxuICBjcmVhdGVEZWZlYXRQZXJjZW50YWdlVGV4dChlLCB0KSB7XG4gICAgcmV0dXJuIFwiPGNvbG9yPSNlZGFiMDM+XCIgKyB0LnJlcGxhY2UoXCJ7cGVyY2VudGFnZX1cIiwgXCI8Y29sb3I9I2ZmNmU0YT5cIiArIGUgKyBcIiU8L2NvbG9yPlwiKSArIFwiPC9jb2xvcj5cIjtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIldpblZ3X3BsYXlXaW5BbmltU2VxXCIpXG4gIHBsYXlXaW5BbmltYXRpb25TZXF1ZW5jZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLl9pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICB0aGlzLnBsYXlNYXNrRmFkZUluKCk7XG4gICAgICB0aGlzLnBsYXlXZWxsRG9uZVNwaW5lQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLnNjaGVkdWxlV2luQW5pbWF0aW9ucygpO1xuICAgICAgdGhpcy5wb3BOZXh0VmlldygpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIldpblZ3X3BvcE5leHRWaWV3XCIpXG4gIHBvcE5leHRWaWV3KGUgPSB7fSkge31cbiAgQG1qLnRyYWl0RXZlbnQoXCJXaW5Wd19wbGF5V2RTcGluZVwiKVxuICBwbGF5V2VsbERvbmVTcGluZUFuaW1hdGlvbigpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuX3dlbGxEb25lU2tlbGV0b24pICYmICh0aGlzLl93ZWxsRG9uZVNrZWxldG9uLm5vZGUuYWN0aXZlID0gdHJ1ZSk7XG4gICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLl93ZWxsRG9uZVNrZWxldG9uLCBcImluXCIsIGZhbHNlLCBudWxsLCAxIC8gdGhpcy5fYW5pbVNwZWVkUmF0ZSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJXaW5Wd19wbGF5TGlnaHRTcGluZVwiKVxuICBwbGF5TGlnaHRTcGluZUFuaW1hdGlvbigpIHtcbiAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuX2xpZ2h0U2tlbGV0b24sIFwiaW5pdFwiLCB0cnVlLCBudWxsLCAxIC8gdGhpcy5fYW5pbVNwZWVkUmF0ZSk7XG4gIH1cbiAgc2NoZWR1bGVXaW5BbmltYXRpb25zKCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHQgPSB0aGlzLl9hbmltU3BlZWRSYXRlO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUucGxheUxpZ2h0U3BpbmVBbmltYXRpb24oKTtcbiAgICAgIGUucGxheVdlbGxEb25lVGV4dEFuaW1hdGlvbigpO1xuICAgIH0sIDAuMiAqIHQpO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUucGxheVdlbGxEb25lT3ZlcmxheUFuaW1hdGlvbigpO1xuICAgICAgZS5wbGF5V2VsbERvbmVCZ0FuaW1hdGlvbigpO1xuICAgICAgZS5wbGF5U2NvcmVEZXNjQW5pbWF0aW9uKCk7XG4gICAgfSwgMC41ICogdCk7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgZS5wbGF5U2NvcmVBbmltYXRpb24oKTtcbiAgICB9LCAwLjcgKiB0KTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBlLl9idG5OZXh0Lm9wYWNpdHkgPSAyNTU7XG4gICAgICBlLnBsYXlCdXR0b25BbmltYXRpb24oKTtcbiAgICAgIGUuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZS51cGRhdGVEaWZmQmdXaWR0aCgpO1xuICAgICAgfSwgMCk7XG4gICAgfSwgdGhpcy5nZXRCdG5OZXh0RGVsYXkoKSAqIHQpO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUucGxheURlc2NBbmltYXRpb24oKTtcbiAgICB9LCB0aGlzLmdldERlc2NBbmltYXRpb25EZWxheSgpICogdCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJXaW5Wd19wbGF5V2RBbmkyXCIpXG4gIHBsYXlXZWxsRG9uZVRleHRBbmltYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xibFRpdGxlKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2FuaW1TcGVlZFJhdGUsXG4gICAgICAgIHQgPSBjYy50d2Vlbih0aGlzLl9sYmxUaXRsZS5ub2RlKS50bygwLjIgKiBlLCB7XG4gICAgICAgICAgc2NhbGU6IDEuMyxcbiAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJxdWFkT3V0XCJcbiAgICAgICAgfSkudG8oMC4xNyAqIGUsIHtcbiAgICAgICAgICBzY2FsZTogMC44XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwic2luZUluT3V0XCJcbiAgICAgICAgfSkudG8oMC4xMyAqIGUsIHtcbiAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVucy5wdXNoKHQpO1xuICAgICAgdC5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBwbGF5V2VsbERvbmVPdmVybGF5QW5pbWF0aW9uKCkge31cbiAgQG1qLnRyYWl0RXZlbnQoXCJXaW5Wd19wbGF5V2RBbmlcIilcbiAgcGxheVdlbGxEb25lQmdBbmltYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuX3dlbGxEb25lQmcpIHtcbiAgICAgIHZhciBlID0gdGhpcy5fYW5pbVNwZWVkUmF0ZSxcbiAgICAgICAgdCA9IGNjLnR3ZWVuKHRoaXMuX3dlbGxEb25lQmcpLnRvKDAuNyAqIGUsIHtcbiAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJsaW5lYXJcIlxuICAgICAgICB9KTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbnMucHVzaCh0KTtcbiAgICAgIHQuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgcGxheVNjb3JlRGVzY0FuaW1hdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGJsU2NvcmVEZXMpIHtcbiAgICAgIHZhciBlID0gdGhpcy5fYW5pbVNwZWVkUmF0ZSxcbiAgICAgICAgdCA9IGNjLnR3ZWVuKHRoaXMuX2xibFNjb3JlRGVzLm5vZGUpLnRvKDAuMiAqIGUsIHtcbiAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJsaW5lYXJcIlxuICAgICAgICB9KTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbnMucHVzaCh0KTtcbiAgICAgIHQuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJXaW5Wd19wbGF5U2NvcmVBbmlcIilcbiAgcGxheVNjb3JlQW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLl9sYmxTY29yZSkge1xuICAgICAgdmFyIGUgPSB0aGlzLl9hbmltU3BlZWRSYXRlLFxuICAgICAgICB0ID0gY2MudHdlZW4odGhpcy5fbGJsU2NvcmUubm9kZSkudG8oMC4yICogZSwge1xuICAgICAgICAgIHNjYWxlOiAwLjcsXG4gICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCJcbiAgICAgICAgfSkudG8oMC4xMyAqIGUsIHtcbiAgICAgICAgICBzY2FsZTogMS4wNVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICAgIH0pLnRvKDAuMSAqIGUsIHtcbiAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVucy5wdXNoKHQpO1xuICAgICAgdC5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIldpblZ3X3BsYXlCdG5BbmlcIilcbiAgcGxheUJ1dHRvbkFuaW1hdGlvbigpIHtcbiAgICBpZiAodGhpcy5fYnRuTmV4dCkge1xuICAgICAgdmFyIGUgPSB0aGlzLl9hbmltU3BlZWRSYXRlLFxuICAgICAgICB0ID0gY2MudHdlZW4odGhpcy5fYnRuTmV4dCkudG8oMC4yICogZSwge1xuICAgICAgICAgIHNjYWxlOiAxLjA1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwicXVhZE91dFwiXG4gICAgICAgIH0pLnRvKDAuMTcgKiBlLCB7XG4gICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJxdWFkSW5cIlxuICAgICAgICB9KTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbnMucHVzaCh0KTtcbiAgICAgIHQuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgcGxheURlc2NBbmltYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xibFN1YnRpdGxlKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2FuaW1TcGVlZFJhdGUsXG4gICAgICAgIHQgPSBjYy50d2Vlbih0aGlzLl9sYmxTdWJ0aXRsZS5ub2RlKS50bygwLjIgKiBlLCB7XG4gICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCJcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW5zLnB1c2godCk7XG4gICAgICB0LnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIHBsYXlDbG9zZUFuaW1hdGlvbihlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9jb250ZW50Tm9kZSkge1xuICAgICAgdmFyIG8gPSB0aGlzLl9hbmltU3BlZWRSYXRlO1xuICAgICAgdGhpcy5zdG9wQWxsQW5pbWF0aW9ucygpO1xuICAgICAgY2MudHdlZW4odGhpcy5fY29udGVudE5vZGUpLnRvKDAuMSAqIG8sIHtcbiAgICAgICAgc2NhbGU6IDEuMDVcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YWRPdXRcIlxuICAgICAgfSkudG8oMC4yICogbywge1xuICAgICAgICBzY2FsZTogMC4zLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJxdWFkSW5cIlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQuX2lzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHQuZGVsZWdhdGUuY2xvc2UoKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbnVsbCA9PSBlIHx8IGUoKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMuX2xpZ2h0U2tlbGV0b24ubm9kZSkudG8oMC4xICogbywge1xuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJxdWFkT3V0XCJcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge30pLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIHN0b3BBbGxBbmltYXRpb25zKCkge1xuICAgIHRoaXMuX2N1cnJlbnRUd2VlbnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZSAmJiBlLnN0b3AoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9jdXJyZW50VHdlZW5zID0gW107XG4gICAgdGhpcy5zdG9wTWFza0FuaW1hdGlvbigpO1xuICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICB9XG4gIGhpZGVDb250ZW50KCkge1xuICAgIHRoaXMuX2NvbnRlbnROb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZUJ0bk5leHQoKTtcbiAgfVxuICBzaG93Q29udGVudCgpIHtcbiAgICB0aGlzLl9jb250ZW50Tm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuZW5hYmxlQnRuTmV4dCgpO1xuICB9XG4gIGRpc2FibGVCdG5OZXh0KCkge1xuICAgIHRoaXMuX2J0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gIH1cbiAgZW5hYmxlQnRuTmV4dCgpIHtcbiAgICB0aGlzLl9idG5OZXh0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gIH1cbiAgcmVzZXRBbGxCdXR0b25TdGF0ZXMoKSB7XG4gICAgW3RoaXMuX2J0bkJnRXhwZXJ0LCB0aGlzLl9idG5CZ0V4cGVydFVwLCB0aGlzLl9idG5CZ0hhcmQsIHRoaXMuX2J0bkJnSGFyZFVwLCB0aGlzLl9idG5CZ05vcl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZSAmJiAoZS5vcGFjaXR5ID0gMCk7XG4gICAgfSk7XG4gICAgdGhpcy5fbGJsQnRuRGVzLm5vZGUub3BhY2l0eSA9IDA7XG4gIH1cbiAgc2hvd0RpZmZpY3VsdHlMYWJlbChlLCB0KSB7XG4gICAgdGhpcy5fbGJsQnRuRGVzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICBlICYmIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5fbGJsQnRuRGVzLm5vZGUsIGUsIHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiV2luVndfZGVzdHJveVwiKVxuICBvbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIub25EZXN0cm95ICYmIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIG1qLnRyaWdnZXJJbnRlcm5hbEV2ZW50KFwiQmFubmVyQWRfTmVlZFNob3dCYW5uZXJcIiwgdGhpcywgW10pO1xuICB9XG4gIHNldEJ0bk5leHRaSW5kZXgoZSkge1xuICAgIHRoaXMuX2J0bk5leHQgJiYgY2MuaXNWYWxpZCh0aGlzLl9idG5OZXh0KSAmJiAodGhpcy5fYnRuTmV4dC56SW5kZXggPSBlKTtcbiAgfVxufSJdfQ==