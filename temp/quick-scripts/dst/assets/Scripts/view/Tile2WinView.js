
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/Tile2WinView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39fcf0Sub5Cx7L4T8vmHvlh', 'Tile2WinView');
// Scripts/view/Tile2WinView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../framework/ui/UIView");
var I18NStrings_1 = require("../framework/data/I18NStrings");
var DGameBtnClick_1 = require("../dot/DGameBtnClick");
var ExtractTool_1 = require("../core/extractQuestion/ExtractTool");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var SimulatorEvent_1 = require("../core/simulator/events/SimulatorEvent");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var UserModel_1 = require("../gamePlay/user/UserModel");
var Tile2WinView = /** @class */ (function (_super) {
    __extends(Tile2WinView, _super);
    function Tile2WinView() {
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
    Object.defineProperty(Tile2WinView.prototype, "maskNode", {
        get: function () {
            return this._maskNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2WinView.prototype, "lblLv", {
        get: function () {
            return this._lblLv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2WinView.prototype, "btnNext", {
        get: function () {
            return this._btnNext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2WinView.prototype, "btnNextNode", {
        get: function () {
            var e;
            return null === (e = this._btnNext) || void 0 === e ? void 0 : e.getChildByName("content");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2WinView.prototype, "lblBtnDes", {
        get: function () {
            return this._lblBtnDes;
        },
        enumerable: false,
        configurable: true
    });
    Tile2WinView.prototype.getContentNode = function () {
        return this._contentNode;
    };
    Tile2WinView.prototype.onLoad = function () {
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
        this.OnButtonClick(this._btnNext, {
            func: this.onBtnNextClick.bind(this)
        });
        this.initDynamicNode();
        this.initNodeStates();
        this.handleBgMusic();
        mj.triggerInternalEvent("BannerAd_NeedHideBanner", this, []);
        this._lblSubtitle.node.setContentSize(this.getSubtitleContentSize());
    };
    Tile2WinView.prototype.getSubtitleContentSize = function () {
        return cc.size(1000, 82);
    };
    Tile2WinView.prototype.setAnimSpeedRate = function (e) {
        this._animSpeedRate = e;
    };
    Tile2WinView.prototype.getDescAnimationDelay = function () {
        return 1.53;
    };
    Tile2WinView.prototype.getBtnNextDelay = function () {
        return 1.33;
    };
    Tile2WinView.prototype.playWiEffect = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Win);
    };
    Tile2WinView.prototype.handleBgMusic = function () {
        mj.audioManager.fadeBGMOut();
    };
    Tile2WinView.prototype.initDynamicNode = function () {
        var e, t, o;
        this._lblTitle = null === (e = this._contentNode.getChildByName("lbl_title")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
        this._lblTitle2 = null === (t = this._contentNode.getChildByName("lbl_title2")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        this._lblScore = null === (o = this._contentNode.getChildByName("lbl_score")) || void 0 === o ? void 0 : o.getComponent(cc.Label);
    };
    Tile2WinView.prototype.moveSubTitleToBtnNextBottom = function () {
        var e = this._btnNext.position.clone();
        this._lblSubtitle.node.setPosition(e.x, e.y - 217);
    };
    Tile2WinView.prototype.onBtnNextClick = function () {
        if (this.node && cc.isValid(this.node)) {
            DGameBtnClick_1.DotGameBtnClick.doNextLevel(this._curLv);
            this.playCloseAnimation(function () {
                mj.EventManager.emit(SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_NEXTLEVEL);
            });
        }
    };
    Tile2WinView.prototype.showWinView = function (e) {
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
    Tile2WinView.prototype.updateDiffBgWidth = function () {
        if (cc.isValid(this._lblBtnDes) && this.lblBtnDes.node.activeInHierarchy && this.lblBtnDes.node.opacity > 0) {
            this._btnBgExpertUp.width = this._lblBtnDes.node.width + 50;
            this._btnBgHardUp.width = this._lblBtnDes.node.width + 50;
        }
    };
    Tile2WinView.prototype.playMaskFadeIn = function (e) {
        if (e === void 0) { e = 0.2; }
        var t;
        if (this._maskNode) {
            this.stopMaskAnimation();
            var o = null === (t = this.node.parent) || void 0 === t ? void 0 : t.getChildByName("BlurBg");
            cc.isValid(o) && (o.opacity = 0);
        }
    };
    Tile2WinView.prototype.playMaskFadeOut = function (e) {
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
    Tile2WinView.prototype.stopMaskAnimation = function () {
        if (this._maskTween) {
            this._maskTween.stop();
            this._maskTween = null;
        }
    };
    Tile2WinView.prototype.initNodeStates = function () {
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
    Tile2WinView.prototype.getTitleType = function (e, t) {
        if (t <= 0)
            return this.getTitleConfig("wellDone");
        var o = e / t;
        return o >= 1 ? this.getTitleConfig("unbelievable") : o >= 0.9 ? this.getTitleConfig("perfect") : this.getTitleConfig("wellDone");
    };
    Tile2WinView.prototype.getTitleConfig = function (e) {
        var t = this._titleConfig[e], o = this.getRandomSubtitle(t.subtitles);
        return {
            titleKey: t.titleKey,
            titleDefault: t.titleDefault,
            subtitleKey: o.key,
            subtitleDefault: o.default
        };
    };
    Tile2WinView.prototype.getRandomSubtitle = function (e) {
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
    Tile2WinView.prototype.playWinAnimationSequence = function () {
        if (!this._isAnimating) {
            this._isAnimating = true;
            this.playMaskFadeIn();
            this.playWellDoneSpineAnimation();
            this.scheduleWinAnimations();
            this.popNextView();
        }
    };
    Tile2WinView.prototype.popNextView = function (e) {
        if (e === void 0) { e = {}; }
    };
    Tile2WinView.prototype.playWellDoneSpineAnimation = function () {
        cc.isValid(this._wellDoneSkeleton) && (this._wellDoneSkeleton.node.active = true);
        GameUtils_1.default.playSpine(this._wellDoneSkeleton, "in", false, null, 1 / this._animSpeedRate);
    };
    Tile2WinView.prototype.playLightSpineAnimation = function () {
        GameUtils_1.default.playSpine(this._lightSkeleton, "init", true, null, 1 / this._animSpeedRate);
    };
    Tile2WinView.prototype.scheduleWinAnimations = function () {
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
            e.playButtonAnimation();
            e.scheduleOnce(function () {
                e.updateDiffBgWidth();
            }, 0);
        }, this.getBtnNextDelay() * t);
        this.scheduleOnce(function () {
            e.playDescAnimation();
        }, this.getDescAnimationDelay() * t);
    };
    Tile2WinView.prototype.playWellDoneTextAnimation = function () {
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
    Tile2WinView.prototype.playWellDoneBgAnimation = function () {
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
    Tile2WinView.prototype.playScoreDescAnimation = function () {
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
    Tile2WinView.prototype.playScoreAnimation = function () {
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
    Tile2WinView.prototype.playButtonAnimation = function () {
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
    Tile2WinView.prototype.playDescAnimation = function () {
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
    Tile2WinView.prototype.playCloseAnimation = function (e) {
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
    Tile2WinView.prototype.stopAllAnimations = function () {
        this._currentTweens.forEach(function (e) {
            e && e.stop();
        });
        this._currentTweens = [];
        this.stopMaskAnimation();
        this.unscheduleAllCallbacks();
    };
    Tile2WinView.prototype.hideContent = function () {
        this._contentNode.active = false;
        this.disableBtnNext();
    };
    Tile2WinView.prototype.showContent = function () {
        this._contentNode.active = true;
        this.enableBtnNext();
    };
    Tile2WinView.prototype.disableBtnNext = function () {
        if (this._btnNext && cc.isValid(this._btnNext)) {
            var e = this._btnNext.getComponent(cc.Button);
            e && (e.interactable = false);
        }
    };
    Tile2WinView.prototype.enableBtnNext = function () {
        if (this._btnNext && cc.isValid(this._btnNext)) {
            var e = this._btnNext.getComponent(cc.Button);
            e && (e.interactable = true);
        }
    };
    Tile2WinView.prototype.resetAllButtonStates = function () {
        [this._btnBgExpert, this._btnBgExpertUp, this._btnBgHard, this._btnBgHardUp, this._btnBgNor].forEach(function (e) {
            e && (e.opacity = 0);
        });
        this._lblBtnDes.node.opacity = 0;
    };
    Tile2WinView.prototype.showDifficultyLabel = function (e, t) {
        this._lblBtnDes.node.opacity = 255;
        e && I18NStrings_1.default.setText(this._lblBtnDes.node, e, t);
    };
    Tile2WinView.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
        mj.triggerInternalEvent("BannerAd_NeedShowBanner", this, []);
    };
    Tile2WinView.prototype.setBtnNextZIndex = function (e) {
        this._btnNext && cc.isValid(this._btnNext) && (this._btnNext.zIndex = e);
    };
    Tile2WinView.prefabUrl = "prefabs/ui/Tile2WinView";
    __decorate([
        mj.traitEvent("Tile2WinVw_onLoad")
    ], Tile2WinView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_getSubSize")
    ], Tile2WinView.prototype, "getSubtitleContentSize", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_getDescAniDly")
    ], Tile2WinView.prototype, "getDescAnimationDelay", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_getBtnNextDly")
    ], Tile2WinView.prototype, "getBtnNextDelay", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_playWiEff")
    ], Tile2WinView.prototype, "playWiEffect", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_bgMusic")
    ], Tile2WinView.prototype, "handleBgMusic", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_initDyNode")
    ], Tile2WinView.prototype, "initDynamicNode", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_mvSbTiToBtnBtm")
    ], Tile2WinView.prototype, "moveSubTitleToBtnNextBottom", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_onNextClick")
    ], Tile2WinView.prototype, "onBtnNextClick", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_show")
    ], Tile2WinView.prototype, "showWinView", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_playMaskFadeIn")
    ], Tile2WinView.prototype, "playMaskFadeIn", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_playWinAnimSeq")
    ], Tile2WinView.prototype, "playWinAnimationSequence", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_popNextView")
    ], Tile2WinView.prototype, "popNextView", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_playWdSpine")
    ], Tile2WinView.prototype, "playWellDoneSpineAnimation", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_playLightSpine")
    ], Tile2WinView.prototype, "playLightSpineAnimation", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_playWdAni2")
    ], Tile2WinView.prototype, "playWellDoneTextAnimation", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_playWdAni")
    ], Tile2WinView.prototype, "playWellDoneBgAnimation", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_playScoreAni")
    ], Tile2WinView.prototype, "playScoreAnimation", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_playBtnAni")
    ], Tile2WinView.prototype, "playButtonAnimation", null);
    __decorate([
        mj.traitEvent("Tile2WinVw_destroy")
    ], Tile2WinView.prototype, "onDestroy", null);
    Tile2WinView = __decorate([
        mj.class
    ], Tile2WinView);
    return Tile2WinView;
}(UIView_1.default));
exports.default = Tile2WinView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvVGlsZTJXaW5WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDNUMsNkRBQXdEO0FBQ3hELHNEQUF1RDtBQUN2RCxtRUFBOEQ7QUFDOUQsMEVBQW9FO0FBQ3BFLDBFQUEwRjtBQUMxRiw4REFBeUQ7QUFDekQsd0RBQW1EO0FBRW5EO0lBQTBDLGdDQUFNO0lBQWhEO1FBQUEscUVBMGlCQztRQXppQkMsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQix1QkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxzQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixrQkFBWSxHQUFHLEtB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QUMsb0JBQW9CLENBQUM7cURBR25DO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO3VEQU10QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQzttRUFJMUM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7c0RBUXZDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDO21EQWdDaEM7SUFRRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7c0RBUTFDO0lBcUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQztnRUFTMUM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7bURBQ2xCO0lBRXRCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztrRUFJdkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7K0RBRzFDO0lBMkJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztpRUFxQnRDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDOytEQVlyQztJQWNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQzswREFxQnhDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDOzJEQWdCdEM7SUFnRkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO2lEQUluQztJQXRpQmtCLFlBQVk7UUFEaEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxZQUFZLENBMGlCaEM7SUFBRCxtQkFBQztDQTFpQkQsQUEwaUJDLENBMWlCeUMsZ0JBQU0sR0EwaUIvQztrQkExaUJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJVmlldyBmcm9tICcuLi9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgeyBEb3RHYW1lQnRuQ2xpY2sgfSBmcm9tICcuLi9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgRXh0cmFjdFRvb2wgZnJvbSAnLi4vY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdFRvb2wnO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVWVF9NU0dfS0VZX1NJTVVMQVRPUl9ORVhUTEVWRUwgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9ldmVudHMvU2ltdWxhdG9yRXZlbnQnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJXaW5WaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgX2NvbnRlbnROb2RlID0gbnVsbDtcbiAgX21hc2tOb2RlID0gbnVsbDtcbiAgX21hc2tUd2VlbiA9IG51bGw7XG4gIF93ZWxsRG9uZVNrZWxldG9uID0gbnVsbDtcbiAgX2xpZ2h0U2tlbGV0b24gPSBudWxsO1xuICBfY3VyTHYgPSAwO1xuICBfc2NvcmUgPSAwO1xuICBfc2V0dGxlbWVudFNjb3JlID0gMDtcbiAgX3BlcmZlY3RNYXhTY29yZSA9IDA7XG4gIF9sYmxTY29yZSA9IG51bGw7XG4gIF9sYmxMdiA9IG51bGw7XG4gIF9idG5OZXh0ID0gbnVsbDtcbiAgX2hhcmRUeXBlID0gMDtcbiAgX2xibFNjb3JlRGVzID0gbnVsbDtcbiAgX2xibFRpdGxlID0gbnVsbDtcbiAgX2xibFRpdGxlMiA9IG51bGw7XG4gIF9sYmxTdWJ0aXRsZSA9IG51bGw7XG4gIF93ZWxsRG9uZUJnID0gbnVsbDtcbiAgX2J0bkJnTm9yID0gbnVsbDtcbiAgX2J0bkJnRXhwZXJ0ID0gbnVsbDtcbiAgX2J0bkJnSGFyZCA9IG51bGw7XG4gIF9idG5CZ0V4cGVydFVwID0gbnVsbDtcbiAgX2J0bkJnSGFyZFVwID0gbnVsbDtcbiAgX2xibEJ0bkRlcyA9IG51bGw7XG4gIF9pc0FuaW1hdGluZyA9IGZhbHNlO1xuICBfY3VycmVudFR3ZWVucyA9IFtdO1xuICBfYW5pbVNwZWVkUmF0ZSA9IDE7XG4gIF90aXRsZUNvbmZpZyA9IHtcbiAgICB1bmJlbGlldmFibGU6IHtcbiAgICAgIHRpdGxlS2V5OiBcIk1haGpvbmdUaWxlc19HYW1lRW5kX05hbWVfMV8yXCIsXG4gICAgICB0aXRsZURlZmF1bHQ6IFwiVW5iZWxpZXZhYmxlXCIsXG4gICAgICBzdWJ0aXRsZXM6IFt7XG4gICAgICAgIGtleTogXCJNYWhqb25nVGlsZXNfR2FtZUVuZF9Xb3JkXzFfMlwiLFxuICAgICAgICBkZWZhdWx0OiBcIllvdXIgc2tpbGxzIGFyZSBmbGF3bGVzcyFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiTWFoam9uZ1RpbGVzX0dhbWVFbmRfV29yZF8xXzNcIixcbiAgICAgICAgZGVmYXVsdDogXCJUaGUgcmlnaHRmdWwgVGlsZSBjaGFtcGlvbiFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiWW91IGFyZSB1bnN0b3BwYWJsZSFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiWW91IGhvbGQgYWxsIHRoZSBwb3dlciFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiRmxhd2xlc3MgbG9naWMhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIlZlbmksIHZpZGksIHZpY2khXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIlRoZSB0aWxlcyB0aGVtc2VsdmVzIGJvdyB0byB5b3UhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIkEgc3ltcGhvbnkgb2Ygd2lubmluZyBtb3ZlcyFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiWW91J3JlIG9uIGZpcmUhXCJcbiAgICAgIH1dXG4gICAgfSxcbiAgICBwZXJmZWN0OiB7XG4gICAgICB0aXRsZUtleTogXCJNYWhqb25nVGlsZXNfR2FtZUVuZF9OYW1lXzJfMlwiLFxuICAgICAgdGl0bGVEZWZhdWx0OiBcIlBlcmZlY3RcIixcbiAgICAgIHN1YnRpdGxlczogW3tcbiAgICAgICAga2V5OiBcIk1haGpvbmdUaWxlc19HYW1lRW5kX1dvcmRfMV8xXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiWW91IHdlcmUgYWJzb2x1dGVseSBwZXJmZWN0IVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJNYWhqb25nVGlsZXNfR2FtZUVuZF9Xb3JkXzJfMVwiLFxuICAgICAgICBkZWZhdWx0OiBcIllvdSBhcmUgdHJ1bHkgZXhjZXB0aW9uYWwhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIk1haGpvbmdUaWxlc19HYW1lRW5kX1dvcmRfMl8zXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiV2hhdCBhIGJyaWxsaWFudCBwZXJmb3JtYW5jZSFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiTWFoam9uZ1RpbGVzX0dhbWVFbmRfV29yZF8yXzJcIixcbiAgICAgICAgZGVmYXVsdDogXCJVbm1hdGNoZWQgc2tpbGwsIG9uZSBvZiBhIGtpbmQhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIllvdSd2ZSByZWFjaGVkIG1hc3RlcnkhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIkEgc3RyYXRlZ2ljIG1hc3RlcnBpZWNlIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJZb3VyIGZvcmVzaWdodCBpcyBpbmNyZWRpYmxlIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJBIG1pbmQgZm9yIHN0cmF0ZWd5LCBhIHRvdWNoIG9mIGx1Y2shXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIkNvZ2l0bywgZXJnbyBzdW0hXCJcbiAgICAgIH1dXG4gICAgfSxcbiAgICB3ZWxsRG9uZToge1xuICAgICAgdGl0bGVLZXk6IFwiTWFoam9uZ1RpbGVzX0dhbWVFbmRfTmFtZV8zXzJcIixcbiAgICAgIHRpdGxlRGVmYXVsdDogXCJXZWxsIERvbmVcIixcbiAgICAgIHN1YnRpdGxlczogW3tcbiAgICAgICAga2V5OiBcIk1haGpvbmdUaWxlc19HYW1lRW5kX1dvcmRfM18xXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiWW91IHNoaW5lIHVuZGVyIHByZXNzdXJlIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJNYWhqb25nVGlsZXNfR2FtZUVuZF9Xb3JkXzNfMlwiLFxuICAgICAgICBkZWZhdWx0OiBcIlJlbGVudGxlc3MgYW5kIHVuZm9yZ2V0dGFibGUhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIk1haGpvbmdUaWxlc19HYW1lRW5kX1dvcmRfM18zXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiTm90aGluZyBjYW4gc3RvcCB5b3UhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIlNhcGVyZSBBdWRlIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJZb3UgbWFrZSBncmVhdG5lc3MgbG9vayBlYXN5IVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJUaGUgZ29sZCBzdGFuZGFyZCFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiWW91J3JlIGluIGEgbGVhZ3VlIG9mIHlvdXIgb3duIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJQdXJlIGNsYXNzIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJZb3UndmUgZ290IHRoZSB3aW5uaW5nIGZvcm11bGEhXCJcbiAgICAgIH1dXG4gICAgfVxuICB9O1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL3VpL1RpbGUyV2luVmlld1wiO1xuICBnZXQgbWFza05vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hc2tOb2RlO1xuICB9XG4gIGdldCBsYmxMdigpIHtcbiAgICByZXR1cm4gdGhpcy5fbGJsTHY7XG4gIH1cbiAgZ2V0IGJ0bk5leHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J0bk5leHQ7XG4gIH1cbiAgZ2V0IGJ0bk5leHROb2RlKCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiBudWxsID09PSAoZSA9IHRoaXMuX2J0bk5leHQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpO1xuICB9XG4gIGdldCBsYmxCdG5EZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xibEJ0bkRlcztcbiAgfVxuICBnZXRDb250ZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudE5vZGU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMldpblZ3X29uTG9hZFwiKVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkudXBkYXRlR2FtZUFjdGl2ZURheXMoKTtcbiAgICB0aGlzLnBsYXlXaUVmZmVjdCgpO1xuICAgIHRoaXMuX2NvbnRlbnROb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKTtcbiAgICB0aGlzLl9tYXNrTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpO1xuICAgIHRoaXMuX3dlbGxEb25lU2tlbGV0b24gPSB0aGlzLl9jb250ZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5fd2VsbERvbmVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuX3dlbGxEb25lU2tlbGV0b24pICYmICh0aGlzLl93ZWxsRG9uZVNrZWxldG9uLm5vZGUuYWN0aXZlID0gZmFsc2UpO1xuICAgIHRoaXMuX2xpZ2h0U2tlbGV0b24gPSBjYy5maW5kKFwibGlnaHRfbm9kZS9zcGluX2xpZ2h0XCIsIHRoaXMuX2NvbnRlbnROb2RlKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIHRoaXMuX2xibFNjb3JlRGVzID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfc2NvcmVEZWNcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLl9sYmxTdWJ0aXRsZSA9IHRoaXMuX2NvbnRlbnROb2RlLmdldENoaWxkQnlOYW1lKFwibGJsX3N1YnRpdGxlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5fd2VsbERvbmVCZyA9IHRoaXMuX2NvbnRlbnROb2RlLmdldENoaWxkQnlOYW1lKFwic3ByX2JnX3dlbGxEb25lXCIpO1xuICAgIHRoaXMuX2J0bk5leHQgPSB0aGlzLl9jb250ZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9uZXh0XCIpO1xuICAgIHZhciB0ID0gdGhpcy5fYnRuTmV4dC5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XG4gICAgdGhpcy5fYnRuQmdOb3IgPSB0LmdldENoaWxkQnlOYW1lKFwiYmdfbm9yXCIpO1xuICAgIHRoaXMuX2J0bkJnRXhwZXJ0ID0gdC5nZXRDaGlsZEJ5TmFtZShcImJnX2V4cGVydFwiKTtcbiAgICB0aGlzLl9idG5CZ0hhcmQgPSB0LmdldENoaWxkQnlOYW1lKFwiYmdfaGFyZFwiKTtcbiAgICB0aGlzLl9idG5CZ0V4cGVydFVwID0gdC5nZXRDaGlsZEJ5TmFtZShcImJnX2V4cGVydF91cFwiKTtcbiAgICB0aGlzLl9idG5CZ0hhcmRVcCA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ19oYXJkX3VwXCIpO1xuICAgIHRoaXMuX2xibEJ0bkRlcyA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfYnRuX2Rlc1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuX2xibEx2ID0gdC5nZXRDaGlsZEJ5TmFtZShcImxibF9sdlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9idG5OZXh0LCB7XG4gICAgICBmdW5jOiB0aGlzLm9uQnRuTmV4dENsaWNrLmJpbmQodGhpcylcbiAgICB9KTtcbiAgICB0aGlzLmluaXREeW5hbWljTm9kZSgpO1xuICAgIHRoaXMuaW5pdE5vZGVTdGF0ZXMoKTtcbiAgICB0aGlzLmhhbmRsZUJnTXVzaWMoKTtcbiAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkJhbm5lckFkX05lZWRIaWRlQmFubmVyXCIsIHRoaXMsIFtdKTtcbiAgICB0aGlzLl9sYmxTdWJ0aXRsZS5ub2RlLnNldENvbnRlbnRTaXplKHRoaXMuZ2V0U3VidGl0bGVDb250ZW50U2l6ZSgpKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyV2luVndfZ2V0U3ViU2l6ZVwiKVxuICBnZXRTdWJ0aXRsZUNvbnRlbnRTaXplKCkge1xuICAgIHJldHVybiBjYy5zaXplKDEwMDAsIDgyKTtcbiAgfVxuICBzZXRBbmltU3BlZWRSYXRlKGUpIHtcbiAgICB0aGlzLl9hbmltU3BlZWRSYXRlID0gZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyV2luVndfZ2V0RGVzY0FuaURseVwiKVxuICBnZXREZXNjQW5pbWF0aW9uRGVsYXkoKSB7XG4gICAgcmV0dXJuIDEuNTM7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMldpblZ3X2dldEJ0bk5leHREbHlcIilcbiAgZ2V0QnRuTmV4dERlbGF5KCkge1xuICAgIHJldHVybiAxLjMzO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJXaW5Wd19wbGF5V2lFZmZcIilcbiAgcGxheVdpRWZmZWN0KCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELldpbik7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMldpblZ3X2JnTXVzaWNcIilcbiAgaGFuZGxlQmdNdXNpYygpIHtcbiAgICBtai5hdWRpb01hbmFnZXIuZmFkZUJHTU91dCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJXaW5Wd19pbml0RHlOb2RlXCIpXG4gIGluaXREeW5hbWljTm9kZSgpIHtcbiAgICB2YXIgZSwgdCwgbztcbiAgICB0aGlzLl9sYmxUaXRsZSA9IG51bGwgPT09IChlID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfdGl0bGVcIikpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLl9sYmxUaXRsZTIgPSBudWxsID09PSAodCA9IHRoaXMuX2NvbnRlbnROb2RlLmdldENoaWxkQnlOYW1lKFwibGJsX3RpdGxlMlwiKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuX2xibFNjb3JlID0gbnVsbCA9PT0gKG8gPSB0aGlzLl9jb250ZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImxibF9zY29yZVwiKSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJXaW5Wd19tdlNiVGlUb0J0bkJ0bVwiKVxuICBtb3ZlU3ViVGl0bGVUb0J0bk5leHRCb3R0b20oKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9idG5OZXh0LnBvc2l0aW9uLmNsb25lKCk7XG4gICAgdGhpcy5fbGJsU3VidGl0bGUubm9kZS5zZXRQb3NpdGlvbihlLngsIGUueSAtIDIxNyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMldpblZ3X29uTmV4dENsaWNrXCIpXG4gIG9uQnRuTmV4dENsaWNrKCkge1xuICAgIGlmICh0aGlzLm5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSB7XG4gICAgICBEb3RHYW1lQnRuQ2xpY2suZG9OZXh0TGV2ZWwodGhpcy5fY3VyTHYpO1xuICAgICAgdGhpcy5wbGF5Q2xvc2VBbmltYXRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFVlRfTVNHX0tFWV9TSU1VTEFUT1JfTkVYVExFVkVMKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyV2luVndfc2hvd1wiKVxuICBzaG93V2luVmlldyhlKSB7XG4gICAgdmFyIHQgPSBlLmRhdGE7XG4gICAgdGhpcy5fY3VyTHYgPSB0LmN1ckx2O1xuICAgIHRoaXMuX3Njb3JlID0gdC5zY29yZTtcbiAgICB0aGlzLl9zZXR0bGVtZW50U2NvcmUgPSB0LnNldHRsZW1lbnRTY29yZTtcbiAgICB0aGlzLl9wZXJmZWN0TWF4U2NvcmUgPSB0LnBlcmZlY3RNYXhTY29yZTtcbiAgICB0aGlzLl9sYmxTY29yZSAmJiBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMuX2xibFNjb3JlLm5vZGUsIHRoaXMuX3NldHRsZW1lbnRTY29yZS50b1N0cmluZygpKTtcbiAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMuX2xibEx2Lm5vZGUsIFwiTGV2ZWwgXCIgKyB0aGlzLl9jdXJMdi50b1N0cmluZygpLCBcIk1haGpvbmdUaWxlc19HYW1lRW5kX0xldmVsXCIsIFt0aGlzLl9jdXJMdl0pO1xuICAgIHZhciBvID0gdGhpcy5nZXRUaXRsZVR5cGUodGhpcy5fc2NvcmUsIHRoaXMuX3BlcmZlY3RNYXhTY29yZSk7XG4gICAgdGhpcy5fbGJsVGl0bGUgJiYgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLl9sYmxUaXRsZS5ub2RlLCBvLnRpdGxlRGVmYXVsdCwgby50aXRsZUtleSk7XG4gICAgdGhpcy5fbGJsVGl0bGUyICYmIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5fbGJsVGl0bGUyLm5vZGUsIG8udGl0bGVEZWZhdWx0LCBvLnRpdGxlS2V5KTtcbiAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMuX2xibFN1YnRpdGxlLm5vZGUsIG8uc3VidGl0bGVEZWZhdWx0LCBvLnN1YnRpdGxlS2V5KTtcbiAgICB0aGlzLl90aXRsZVR5cGUgPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLnRpdGxlRGVmYXVsdDtcbiAgICB0aGlzLnBsYXlXaW5BbmltYXRpb25TZXF1ZW5jZSgpO1xuICAgIHZhciBuID0gRXh0cmFjdFRvb2wuZ2V0SW5zdGFuY2UoKS5pc0V4cGVydFVJKHRoaXMuX2N1ckx2KSxcbiAgICAgIGkgPSBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmlzSGFyZFVJKHRoaXMuX2N1ckx2KTtcbiAgICB0aGlzLnJlc2V0QWxsQnV0dG9uU3RhdGVzKCk7XG4gICAgaWYgKG4pIHtcbiAgICAgIHRoaXMuX2J0bkJnRXhwZXJ0Lm9wYWNpdHkgPSAyNTU7XG4gICAgICB0aGlzLl9idG5CZ0V4cGVydFVwLm9wYWNpdHkgPSAyNTU7XG4gICAgICB0aGlzLnNob3dEaWZmaWN1bHR5TGFiZWwoXCJFeHBlcnRcIiwgXCJNYWhqb25nVGlsZXNfVmVyeUhhcmRcIik7XG4gICAgICB0aGlzLl9oYXJkVHlwZSA9IDI7XG4gICAgfSBlbHNlIGlmIChpKSB7XG4gICAgICB0aGlzLl9idG5CZ0hhcmQub3BhY2l0eSA9IDI1NTtcbiAgICAgIHRoaXMuX2J0bkJnSGFyZFVwLm9wYWNpdHkgPSAyNTU7XG4gICAgICB0aGlzLnNob3dEaWZmaWN1bHR5TGFiZWwoXCJIYXJkXCIsIFwiTWFoam9uZ1RpbGVzX0hhcmRcIik7XG4gICAgICB0aGlzLl9oYXJkVHlwZSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J0bkJnTm9yLm9wYWNpdHkgPSAyNTU7XG4gICAgICB0aGlzLl9oYXJkVHlwZSA9IDA7XG4gICAgfVxuICB9XG4gIHVwZGF0ZURpZmZCZ1dpZHRoKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX2xibEJ0bkRlcykgJiYgdGhpcy5sYmxCdG5EZXMubm9kZS5hY3RpdmVJbkhpZXJhcmNoeSAmJiB0aGlzLmxibEJ0bkRlcy5ub2RlLm9wYWNpdHkgPiAwKSB7XG4gICAgICB0aGlzLl9idG5CZ0V4cGVydFVwLndpZHRoID0gdGhpcy5fbGJsQnRuRGVzLm5vZGUud2lkdGggKyA1MDtcbiAgICAgIHRoaXMuX2J0bkJnSGFyZFVwLndpZHRoID0gdGhpcy5fbGJsQnRuRGVzLm5vZGUud2lkdGggKyA1MDtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMldpblZ3X3BsYXlNYXNrRmFkZUluXCIpXG4gIHBsYXlNYXNrRmFkZUluKGUgPSAwLjIpIHtcbiAgICB2YXIgdDtcbiAgICBpZiAodGhpcy5fbWFza05vZGUpIHtcbiAgICAgIHRoaXMuc3RvcE1hc2tBbmltYXRpb24oKTtcbiAgICAgIHZhciBvID0gbnVsbCA9PT0gKHQgPSB0aGlzLm5vZGUucGFyZW50KSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldENoaWxkQnlOYW1lKFwiQmx1ckJnXCIpO1xuICAgICAgY2MuaXNWYWxpZChvKSAmJiAoby5vcGFjaXR5ID0gMCk7XG4gICAgfVxuICB9XG4gIHBsYXlNYXNrRmFkZU91dChlID0gMC4yKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9tYXNrTm9kZSkge1xuICAgICAgdGhpcy5zdG9wTWFza0FuaW1hdGlvbigpO1xuICAgICAgdGhpcy5fbWFza1R3ZWVuID0gY2MudHdlZW4odGhpcy5fbWFza05vZGUpLnRvKGUsIHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwic2luZUluXCJcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICB0Ll9tYXNrVHdlZW4gPSBudWxsO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgc3RvcE1hc2tBbmltYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuX21hc2tUd2Vlbikge1xuICAgICAgdGhpcy5fbWFza1R3ZWVuLnN0b3AoKTtcbiAgICAgIHRoaXMuX21hc2tUd2VlbiA9IG51bGw7XG4gICAgfVxuICB9XG4gIGluaXROb2RlU3RhdGVzKCkge1xuICAgIGlmICh0aGlzLl9sYmxUaXRsZSkge1xuICAgICAgdGhpcy5fbGJsVGl0bGUubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuX2xibFRpdGxlLm5vZGUuc2NhbGUgPSAwLjM7XG4gICAgfVxuICAgIHRoaXMuX3dlbGxEb25lQmcgJiYgKHRoaXMuX3dlbGxEb25lQmcub3BhY2l0eSA9IDApO1xuICAgIHRoaXMuX2xibFNjb3JlRGVzICYmICh0aGlzLl9sYmxTY29yZURlcy5ub2RlLm9wYWNpdHkgPSAwKTtcbiAgICBpZiAodGhpcy5fbGJsU2NvcmUpIHtcbiAgICAgIHRoaXMuX2xibFNjb3JlLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICB0aGlzLl9sYmxTY29yZS5ub2RlLnNjYWxlID0gMS42O1xuICAgIH1cbiAgICBpZiAodGhpcy5fYnRuTmV4dCkge1xuICAgICAgdGhpcy5fYnRuTmV4dC5zY2FsZSA9IDAuNjtcbiAgICAgIHRoaXMuX2J0bk5leHQub3BhY2l0eSA9IDA7XG4gICAgfVxuICAgIHRoaXMuX2xibFN1YnRpdGxlICYmICh0aGlzLl9sYmxTdWJ0aXRsZS5ub2RlLm9wYWNpdHkgPSAwKTtcbiAgfVxuICBnZXRUaXRsZVR5cGUoZSwgdCkge1xuICAgIGlmICh0IDw9IDApIHJldHVybiB0aGlzLmdldFRpdGxlQ29uZmlnKFwid2VsbERvbmVcIik7XG4gICAgdmFyIG8gPSBlIC8gdDtcbiAgICByZXR1cm4gbyA+PSAxID8gdGhpcy5nZXRUaXRsZUNvbmZpZyhcInVuYmVsaWV2YWJsZVwiKSA6IG8gPj0gMC45ID8gdGhpcy5nZXRUaXRsZUNvbmZpZyhcInBlcmZlY3RcIikgOiB0aGlzLmdldFRpdGxlQ29uZmlnKFwid2VsbERvbmVcIik7XG4gIH1cbiAgZ2V0VGl0bGVDb25maWcoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fdGl0bGVDb25maWdbZV0sXG4gICAgICBvID0gdGhpcy5nZXRSYW5kb21TdWJ0aXRsZSh0LnN1YnRpdGxlcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlS2V5OiB0LnRpdGxlS2V5LFxuICAgICAgdGl0bGVEZWZhdWx0OiB0LnRpdGxlRGVmYXVsdCxcbiAgICAgIHN1YnRpdGxlS2V5OiBvLmtleSxcbiAgICAgIHN1YnRpdGxlRGVmYXVsdDogby5kZWZhdWx0XG4gICAgfTtcbiAgfVxuICBnZXRSYW5kb21TdWJ0aXRsZShlKSB7XG4gICAgaWYgKCFlIHx8IDAgPT09IGUubGVuZ3RoKSByZXR1cm4ge1xuICAgICAga2V5OiBcIlwiLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH07XG4gICAgdmFyIHQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlLmxlbmd0aCk7XG4gICAgaWYgKHZvaWQgMCAhPT0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJMYW5ndWFnZVNlbGVjdG9yVHJhaXRcIikpIHtcbiAgICAgIHZhciBvID0gZVt0XTtcbiAgICAgIGlmIChvLmtleSkgcmV0dXJuIG87XG4gICAgICB2YXIgbiA9IGUuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmtleTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbi5sZW5ndGgpXTtcbiAgICB9XG4gICAgcmV0dXJuIGVbdF07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMldpblZ3X3BsYXlXaW5BbmltU2VxXCIpXG4gIHBsYXlXaW5BbmltYXRpb25TZXF1ZW5jZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLl9pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICB0aGlzLnBsYXlNYXNrRmFkZUluKCk7XG4gICAgICB0aGlzLnBsYXlXZWxsRG9uZVNwaW5lQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLnNjaGVkdWxlV2luQW5pbWF0aW9ucygpO1xuICAgICAgdGhpcy5wb3BOZXh0VmlldygpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyV2luVndfcG9wTmV4dFZpZXdcIilcbiAgcG9wTmV4dFZpZXcoZSA9IHt9KSB7fVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyV2luVndfcGxheVdkU3BpbmVcIilcbiAgcGxheVdlbGxEb25lU3BpbmVBbmltYXRpb24oKSB7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl93ZWxsRG9uZVNrZWxldG9uKSAmJiAodGhpcy5fd2VsbERvbmVTa2VsZXRvbi5ub2RlLmFjdGl2ZSA9IHRydWUpO1xuICAgIEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5fd2VsbERvbmVTa2VsZXRvbiwgXCJpblwiLCBmYWxzZSwgbnVsbCwgMSAvIHRoaXMuX2FuaW1TcGVlZFJhdGUpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJXaW5Wd19wbGF5TGlnaHRTcGluZVwiKVxuICBwbGF5TGlnaHRTcGluZUFuaW1hdGlvbigpIHtcbiAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuX2xpZ2h0U2tlbGV0b24sIFwiaW5pdFwiLCB0cnVlLCBudWxsLCAxIC8gdGhpcy5fYW5pbVNwZWVkUmF0ZSk7XG4gIH1cbiAgc2NoZWR1bGVXaW5BbmltYXRpb25zKCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHQgPSB0aGlzLl9hbmltU3BlZWRSYXRlO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUucGxheUxpZ2h0U3BpbmVBbmltYXRpb24oKTtcbiAgICAgIGUucGxheVdlbGxEb25lVGV4dEFuaW1hdGlvbigpO1xuICAgIH0sIDAuMiAqIHQpO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUucGxheVdlbGxEb25lQmdBbmltYXRpb24oKTtcbiAgICAgIGUucGxheVNjb3JlRGVzY0FuaW1hdGlvbigpO1xuICAgIH0sIDAuNSAqIHQpO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUucGxheVNjb3JlQW5pbWF0aW9uKCk7XG4gICAgfSwgMC43ICogdCk7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgZS5fYnRuTmV4dC5vcGFjaXR5ID0gMjU1O1xuICAgICAgZS5wbGF5QnV0dG9uQW5pbWF0aW9uKCk7XG4gICAgICBlLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUudXBkYXRlRGlmZkJnV2lkdGgoKTtcbiAgICAgIH0sIDApO1xuICAgIH0sIHRoaXMuZ2V0QnRuTmV4dERlbGF5KCkgKiB0KTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBlLnBsYXlEZXNjQW5pbWF0aW9uKCk7XG4gICAgfSwgdGhpcy5nZXREZXNjQW5pbWF0aW9uRGVsYXkoKSAqIHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJXaW5Wd19wbGF5V2RBbmkyXCIpXG4gIHBsYXlXZWxsRG9uZVRleHRBbmltYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xibFRpdGxlKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2FuaW1TcGVlZFJhdGUsXG4gICAgICAgIHQgPSBjYy50d2Vlbih0aGlzLl9sYmxUaXRsZS5ub2RlKS50bygwLjIgKiBlLCB7XG4gICAgICAgICAgc2NhbGU6IDEuMyxcbiAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJxdWFkT3V0XCJcbiAgICAgICAgfSkudG8oMC4xNyAqIGUsIHtcbiAgICAgICAgICBzY2FsZTogMC44XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwic2luZUluT3V0XCJcbiAgICAgICAgfSkudG8oMC4xMyAqIGUsIHtcbiAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVucy5wdXNoKHQpO1xuICAgICAgdC5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyV2luVndfcGxheVdkQW5pXCIpXG4gIHBsYXlXZWxsRG9uZUJnQW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLl93ZWxsRG9uZUJnKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2FuaW1TcGVlZFJhdGUsXG4gICAgICAgIHQgPSBjYy50d2Vlbih0aGlzLl93ZWxsRG9uZUJnKS50bygwLjcgKiBlLCB7XG4gICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCJcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW5zLnB1c2godCk7XG4gICAgICB0LnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIHBsYXlTY29yZURlc2NBbmltYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xibFNjb3JlRGVzKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2FuaW1TcGVlZFJhdGUsXG4gICAgICAgIHQgPSBjYy50d2Vlbih0aGlzLl9sYmxTY29yZURlcy5ub2RlKS50bygwLjIgKiBlLCB7XG4gICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCJcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW5zLnB1c2godCk7XG4gICAgICB0LnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJXaW5Wd19wbGF5U2NvcmVBbmlcIilcbiAgcGxheVNjb3JlQW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLl9sYmxTY29yZSkge1xuICAgICAgdmFyIGUgPSB0aGlzLl9hbmltU3BlZWRSYXRlLFxuICAgICAgICB0ID0gY2MudHdlZW4odGhpcy5fbGJsU2NvcmUubm9kZSkudG8oMC4yICogZSwge1xuICAgICAgICAgIHNjYWxlOiAwLjcsXG4gICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCJcbiAgICAgICAgfSkudG8oMC4xMyAqIGUsIHtcbiAgICAgICAgICBzY2FsZTogMS4wNVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICAgIH0pLnRvKDAuMSAqIGUsIHtcbiAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVucy5wdXNoKHQpO1xuICAgICAgdC5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyV2luVndfcGxheUJ0bkFuaVwiKVxuICBwbGF5QnV0dG9uQW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLl9idG5OZXh0KSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2FuaW1TcGVlZFJhdGUsXG4gICAgICAgIHQgPSBjYy50d2Vlbih0aGlzLl9idG5OZXh0KS50bygwLjIgKiBlLCB7XG4gICAgICAgICAgc2NhbGU6IDEuMDVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJxdWFkT3V0XCJcbiAgICAgICAgfSkudG8oMC4xNyAqIGUsIHtcbiAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcInF1YWRJblwiXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVucy5wdXNoKHQpO1xuICAgICAgdC5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBwbGF5RGVzY0FuaW1hdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGJsU3VidGl0bGUpIHtcbiAgICAgIHZhciBlID0gdGhpcy5fYW5pbVNwZWVkUmF0ZSxcbiAgICAgICAgdCA9IGNjLnR3ZWVuKHRoaXMuX2xibFN1YnRpdGxlLm5vZGUpLnRvKDAuMiAqIGUsIHtcbiAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJsaW5lYXJcIlxuICAgICAgICB9KTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbnMucHVzaCh0KTtcbiAgICAgIHQuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgcGxheUNsb3NlQW5pbWF0aW9uKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX2NvbnRlbnROb2RlKSB7XG4gICAgICB2YXIgbyA9IHRoaXMuX2FuaW1TcGVlZFJhdGU7XG4gICAgICB0aGlzLnN0b3BBbGxBbmltYXRpb25zKCk7XG4gICAgICBjYy50d2Vlbih0aGlzLl9jb250ZW50Tm9kZSkudG8oMC4xICogbywge1xuICAgICAgICBzY2FsZTogMS4wNVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwicXVhZE91dFwiXG4gICAgICB9KS50bygwLjIgKiBvLCB7XG4gICAgICAgIHNjYWxlOiAwLjMsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YWRJblwiXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5faXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdC5kZWxlZ2F0ZS5jbG9zZSgpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBudWxsID09IGUgfHwgZSgpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgY2MudHdlZW4odGhpcy5fbGlnaHRTa2VsZXRvbi5ub2RlKS50bygwLjEgKiBvLCB7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YWRPdXRcIlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7fSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgc3RvcEFsbEFuaW1hdGlvbnMoKSB7XG4gICAgdGhpcy5fY3VycmVudFR3ZWVucy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlICYmIGUuc3RvcCgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2N1cnJlbnRUd2VlbnMgPSBbXTtcbiAgICB0aGlzLnN0b3BNYXNrQW5pbWF0aW9uKCk7XG4gICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gIH1cbiAgaGlkZUNvbnRlbnQoKSB7XG4gICAgdGhpcy5fY29udGVudE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlQnRuTmV4dCgpO1xuICB9XG4gIHNob3dDb250ZW50KCkge1xuICAgIHRoaXMuX2NvbnRlbnROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5lbmFibGVCdG5OZXh0KCk7XG4gIH1cbiAgZGlzYWJsZUJ0bk5leHQoKSB7XG4gICAgaWYgKHRoaXMuX2J0bk5leHQgJiYgY2MuaXNWYWxpZCh0aGlzLl9idG5OZXh0KSkge1xuICAgICAgdmFyIGUgPSB0aGlzLl9idG5OZXh0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgZSAmJiAoZS5pbnRlcmFjdGFibGUgPSBmYWxzZSk7XG4gICAgfVxuICB9XG4gIGVuYWJsZUJ0bk5leHQoKSB7XG4gICAgaWYgKHRoaXMuX2J0bk5leHQgJiYgY2MuaXNWYWxpZCh0aGlzLl9idG5OZXh0KSkge1xuICAgICAgdmFyIGUgPSB0aGlzLl9idG5OZXh0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgZSAmJiAoZS5pbnRlcmFjdGFibGUgPSB0cnVlKTtcbiAgICB9XG4gIH1cbiAgcmVzZXRBbGxCdXR0b25TdGF0ZXMoKSB7XG4gICAgW3RoaXMuX2J0bkJnRXhwZXJ0LCB0aGlzLl9idG5CZ0V4cGVydFVwLCB0aGlzLl9idG5CZ0hhcmQsIHRoaXMuX2J0bkJnSGFyZFVwLCB0aGlzLl9idG5CZ05vcl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZSAmJiAoZS5vcGFjaXR5ID0gMCk7XG4gICAgfSk7XG4gICAgdGhpcy5fbGJsQnRuRGVzLm5vZGUub3BhY2l0eSA9IDA7XG4gIH1cbiAgc2hvd0RpZmZpY3VsdHlMYWJlbChlLCB0KSB7XG4gICAgdGhpcy5fbGJsQnRuRGVzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICBlICYmIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5fbGJsQnRuRGVzLm5vZGUsIGUsIHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJXaW5Wd19kZXN0cm95XCIpXG4gIG9uRGVzdHJveSgpIHtcbiAgICBzdXBlci5vbkRlc3Ryb3kgJiYgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJCYW5uZXJBZF9OZWVkU2hvd0Jhbm5lclwiLCB0aGlzLCBbXSk7XG4gIH1cbiAgc2V0QnRuTmV4dFpJbmRleChlKSB7XG4gICAgdGhpcy5fYnRuTmV4dCAmJiBjYy5pc1ZhbGlkKHRoaXMuX2J0bk5leHQpICYmICh0aGlzLl9idG5OZXh0LnpJbmRleCA9IGUpO1xuICB9XG59Il19