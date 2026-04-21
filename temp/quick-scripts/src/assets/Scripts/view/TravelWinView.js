"use strict";
cc._RF.push(module, 'c1e0cx7tWpHH4t9D0nGC1lF', 'TravelWinView');
// Scripts/view/TravelWinView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../framework/ui/UIView");
var I18NStrings_1 = require("../framework/data/I18NStrings");
var DGameBtnClick_1 = require("../dot/DGameBtnClick");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var SimulatorEvent_1 = require("../core/simulator/events/SimulatorEvent");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../gamePlay/base/ui/BaseSprite");
var CollectTargetItem_1 = require("../items/CollectTargetItem");
var TravelGameModel_1 = require("../gamePlay/travel/model/TravelGameModel");
var ControllerManager_1 = require("../framework/manager/ControllerManager");
var TravelConfig_1 = require("../config/TravelConfig");
var DataReader_1 = require("../framework/data/DataReader");
var ConfigType_1 = require("../gamePlay/base/data/ConfigType");
var IUserData_1 = require("../user/IUserData");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var JumpManager_1 = require("../base/jump/JumpManager");
var TravelWinView = /** @class */ (function (_super) {
    __extends(TravelWinView, _super);
    function TravelWinView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._contentNode = null;
        _this._maskNode = null;
        _this._maskTween = null;
        _this._lightSkeleton = null;
        _this._curLv = 0;
        _this._lblLv = null;
        _this._btnNext = null;
        _this._hardType = 0;
        _this._lblTitle = null;
        _this._lblTitle2 = null;
        _this._lblSubtitle = null;
        _this._wellDoneBg = null;
        _this._wellDoneSkeleton = null;
        _this._btnBgNor = null;
        _this._btnBgExpert = null;
        _this._btnBgHard = null;
        _this._btnBgExpertUp = null;
        _this._btnBgHardUp = null;
        _this._lblBtnDes = null;
        _this._rewardLevelNode = null;
        _this._rewardLevelAnim = null;
        _this._rewardBtn = null;
        _this._rewardIcon = null;
        _this._boxTipAnim = null;
        _this._refreshIcon = null;
        _this._refreshValue = null;
        _this._hintIcon = null;
        _this._hintValue = null;
        _this._showRewardsNodes = [];
        _this._collectContainer = null;
        _this._progressBar = null;
        _this._progressContainer = null;
        _this._rewardNode = null;
        _this._fullScreenBtn = null;
        _this._isAnimating = false;
        _this._currentTweens = [];
        _this._collects = [];
        _this._animSpeedRate = 1;
        _this._curReward = null;
        _this._canGain = false;
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
    Object.defineProperty(TravelWinView.prototype, "lblLv", {
        get: function () {
            return this._lblLv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelWinView.prototype, "btnNext", {
        get: function () {
            return this._btnNext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelWinView.prototype, "lblBtnDes", {
        get: function () {
            return this._lblBtnDes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelWinView.prototype, "fullScreenBtn", {
        get: function () {
            return this._fullScreenBtn;
        },
        enumerable: false,
        configurable: true
    });
    TravelWinView.prototype.getContentNode = function () {
        return this._contentNode;
    };
    TravelWinView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Win);
        this._contentNode = this.node.getChildByName("content");
        this._maskNode = this.node.getChildByName("bg");
        this._lightSkeleton = cc.find("light_node/spin_light", this._contentNode).getComponent(sp.Skeleton);
        this._wellDoneSkeleton = this._contentNode.getChildByName("spin_wellDone").getComponent(sp.Skeleton);
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
        this._collectContainer = this._contentNode.getChildByName("Collects");
        this._progressContainer = cc.find("progress", this._contentNode);
        this._progressBar = cc.find("progress/Progress", this._contentNode).getComponent(cc.ProgressBar);
        this._rewardNode = cc.find("progress/Reward", this._contentNode);
        this._rewardBtn = cc.find("Badge", this._rewardNode);
        this._rewardIcon = cc.find("Badge/Icon", this._rewardNode);
        this._rewardLevelAnim = cc.find("Badge/LevelAnim", this._rewardNode);
        this._rewardLevelNode = cc.find("Badge/LevelTip", this._rewardNode);
        this._boxTipAnim = cc.find("Badge/BoxTipAnim", this._rewardNode);
        this._refreshIcon = cc.find("Badge/RefreshTipIcon", this._rewardNode);
        this._refreshValue = cc.find("Badge/RefreshTipValue", this._rewardNode);
        this._hintIcon = cc.find("Badge/HintTipIcon", this._rewardNode);
        this._hintValue = cc.find("Badge/HintTipValue", this._rewardNode);
        this._fullScreenBtn = cc.find("fullBtn", this._contentNode);
        this.OnButtonClick(this._rewardBtn, this.onRewardBtnClick.bind(this));
        this.OnButtonClick(this._btnNext, this.onBtnNextClick.bind(this));
        this.OnButtonClick(this._fullScreenBtn, this.onFullScreenBtnClick.bind(this));
        this.initDynamicNode();
        this.initNodeStates();
        this.handleBgMusic();
        this.hookNodes();
        mj.triggerInternalEvent("BannerAd_NeedHideBanner", this, []);
    };
    TravelWinView.prototype.setAnimSpeedRate = function (e) {
        this._animSpeedRate = e;
    };
    TravelWinView.prototype.onRewardBtnClick = function () {
        var e, t;
        if (this._curReward.type === TravelConfig_1.ETravelRewardType.EGiftBox && cc.isValid(this._boxTipAnim)) {
            var o = Math.floor(this._showRewardsNodes.length / 2), n = this._boxTipAnim.getComponent(sp.Skeleton);
            this._boxTipAnim.active = true;
            if (o > 0 && o < 3) {
                try {
                    for (var i = __values(this._showRewardsNodes), r = i.next(); !r.done; r = i.next()) {
                        var a = r.value;
                        cc.isValid(a) && (a.active = true);
                    }
                }
                catch (t) {
                    e = {
                        error: t
                    };
                }
                finally {
                    try {
                        r && !r.done && (t = i.return) && t.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                GameUtils_1.default.playSpine(n, "click_" + o, false, function () {
                    GameUtils_1.default.playSpine(n, "init_" + o, true);
                });
                this._fullScreenBtn.active = true;
            }
        }
    };
    TravelWinView.prototype.onFullScreenBtnClick = function () {
        var e, t;
        cc.isValid(this._boxTipAnim) && (this._boxTipAnim.active = false);
        cc.isValid(this._fullScreenBtn) && (this._fullScreenBtn.active = false);
        if (this._showRewardsNodes.length > 0)
            try {
                for (var o = __values(this._showRewardsNodes), n = o.next(); !n.done; n = o.next()) {
                    var i = n.value;
                    cc.isValid(i) && (i.active = false);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    n && !n.done && (t = o.return) && t.call(o);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
    };
    TravelWinView.prototype.hookNodes = function () {
        var e = this, t = BaseSpine_1.default.refreshWithNode(this._wellDoneSkeleton.node);
        t.reset("");
        t.markReady("");
        t.attachNode("hook_icon", function () {
            return e._collectContainer;
        });
        (t = BaseSpine_1.default.refreshWithNode(this._rewardLevelAnim)).reset("");
        t.markReady("");
        t.attachNode("hook_num", function () {
            return e._rewardLevelNode;
        });
    };
    TravelWinView.prototype.handleBgMusic = function () {
        mj.audioManager.fadeBGMOut();
    };
    TravelWinView.prototype.initDynamicNode = function () {
        var e, t;
        this._lblTitle = null === (e = this._contentNode.getChildByName("lbl_title")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
        this._lblTitle2 = null === (t = this._contentNode.getChildByName("lbl_title2")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
    };
    TravelWinView.prototype.onBtnNextClick = function () {
        if (this.node && cc.isValid(this.node)) {
            var e = TravelGameModel_1.default.getInstance();
            DGameBtnClick_1.DotGameBtnClick.dotPandaResult(DGameBtnClick_1.EPandaResult.Travel);
            this._isAnimating = false;
            this.delegate.close();
            if (e.isSessionActive()) {
                if (e.isLevelEnd(this._curLv)) {
                    ControllerManager_1.default.getInstance().pushViewByController("TravelMapController", {
                        isReplace: true
                    });
                }
                else {
                    this.gotoNextLevel();
                }
            }
            else {
                JumpManager_1.default.getInstance().jumpToHall();
            }
        }
    };
    TravelWinView.prototype.gotoNextLevel = function () {
        mj.EventManager.emit(SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_NEXTLEVEL);
    };
    TravelWinView.prototype.getRewardNodes = function (e) {
        switch (e) {
            case IUserData_1.EItemType.Hint:
                return {
                    icon: this._hintIcon,
                    value: this._hintValue
                };
            case IUserData_1.EItemType.Shuffle:
                return {
                    icon: this._refreshIcon,
                    value: this._refreshValue
                };
        }
        return {
            icon: null,
            value: null
        };
    };
    TravelWinView.prototype.updateBoxReward = function () {
        var e = BaseSpine_1.default.refreshWithNode(this._boxTipAnim);
        e.reset("");
        e.markReady("");
        var t = function t(t, o, n) {
            if (t && o) {
                e.attachNode("hook_icon_" + n, function () {
                    return t;
                });
                e.attachNode("hook_num_" + n, function () {
                    return o;
                });
            }
        };
        this._boxTipAnim.active = false;
        if (this._curReward.type === TravelConfig_1.ETravelRewardType.EGiftBox) {
            this._boxTipAnim.active = true;
            for (var o = this._curReward.reward, n = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.reward_config, o), i = n.Items, r = n.Counts, a = 0; a < i.length; a++) {
                var l = i[a], s = this.getRewardNodes(l), c = s.icon, u = s.value;
                if (c && u) {
                    u.getComponent(cc.Label).string = r[a].toString();
                    this._showRewardsNodes.push(c, u);
                    t(c, u, a + 1);
                }
            }
            this._boxTipAnim.active = false;
        }
    };
    TravelWinView.prototype.updateReward = function () {
        var e = this._curLv - 1, t = TravelGameModel_1.default.getInstance(), o = t.getRewardInfo(t.getCurJourney()), n = o.findIndex(function (t) {
            return t.lv >= e;
        });
        if (!(n < -1)) {
            this._curReward = o[n];
            var i = n >= 1 ? o[n - 1].lv : 0, r = this._curReward.lv, a = (e - i) / (r - i), l = (e - 1 - i) / (r - i);
            this._progressBar.progress = l;
            this._progressBar.endProgress = a;
            I18NStrings_1.default.setText(this._rewardLevelNode, "Lv." + r, "MahjongTiles_MainPage_TargetLevel", [r]);
            if (this._curReward.type === TravelConfig_1.ETravelRewardType.EBadge) {
                var s = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.reward_config, this._curReward.reward), u = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, s.Items[0]);
                BaseSprite_1.default.refreshWithNode(this._rewardIcon, "texture/badge/" + u.Icon, false);
                this._rewardIcon.scale = 0.35;
            }
            else {
                BaseSprite_1.default.refreshWithNode(this._rewardIcon, "texture/journey/result_icon_chest", false);
                this._rewardIcon.scale = 1;
            }
            this.updateBoxReward();
        }
    };
    TravelWinView.prototype.updateCollect = function () {
        var e = this._collects;
        this._collectContainer.destroyAllChildren();
        for (var t = 0; t < e.length; t++) {
            var o = this.createUISync(CollectTargetItem_1.default), n = e[t];
            if (o && cc.isValid(o) && cc.isValid(this._collectContainer)) {
                this._collectContainer.addChild(o);
                var i = o.getComponent(CollectTargetItem_1.default);
                if (i) {
                    var a = Object.assign(Object.assign({}, n), {
                        count: 0
                    }), l = 1.2;
                    a.type === TileTypeEnum_1.ETileType.Yoga && (l = 1.5);
                    i.initUI(a);
                    i.node.scale = l;
                }
            }
        }
        this._collectContainer.getComponent(cc.Layout).updateLayout();
        this._collectContainer.opacity = 0;
    };
    TravelWinView.prototype.onViewLoad = function (e) {
        var t = e.data;
        this._curLv = t.curLv;
        this._collects = t.collects;
        this._canGain = e.canGain;
        var o = TravelGameModel_1.default.getInstance();
        if (!o.isSessionActive() || o.isLevelEnd(this._curLv)) {
            I18NStrings_1.default.setText(this._lblLv.node, "Back", "Common_Btn_Back");
        }
        else {
            I18NStrings_1.default.setText(this._lblLv.node, "Level " + this._curLv.toString(), "MahjongTiles_GameEnd_Level", [this._curLv]);
        }
        var n = this.getTitleConfig("wellDone");
        this._lblTitle && I18NStrings_1.default.setText(this._lblTitle.node, n.titleDefault, n.titleKey);
        this._lblTitle2 && I18NStrings_1.default.setText(this._lblTitle2.node, n.titleDefault, n.titleKey);
        I18NStrings_1.default.setText(this._lblSubtitle.node, n.subtitleDefault, n.subtitleKey);
        this.updateReward();
        this.updateCollect();
        var i = o.isHardLevel(this._curLv);
        this.resetAllButtonStates();
        if (i) {
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
    TravelWinView.prototype.updateDiffBgWidth = function () {
        if (cc.isValid(this._lblBtnDes) && this.lblBtnDes.node.activeInHierarchy && this.lblBtnDes.node.opacity > 0) {
            this._btnBgExpertUp.width = this._lblBtnDes.node.width + 50;
            this._btnBgHardUp.width = this._lblBtnDes.node.width + 50;
        }
    };
    TravelWinView.prototype.showWinView = function () {
        this.playWinAnimationSequence();
    };
    TravelWinView.prototype.playMaskFadeIn = function (e) {
        if (e === void 0) { e = 0.2; }
        var t;
        if (this._maskNode) {
            this.stopMaskAnimation();
            var o = null === (t = this.node.parent) || void 0 === t ? void 0 : t.getChildByName("BlurBg");
            cc.isValid(o) && (o.opacity = 0);
        }
    };
    TravelWinView.prototype.playMaskFadeOut = function (e) {
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
    TravelWinView.prototype.stopMaskAnimation = function () {
        if (this._maskTween) {
            this._maskTween.stop();
            this._maskTween = null;
        }
    };
    TravelWinView.prototype.initNodeStates = function () {
        if (this._lblTitle) {
            this._lblTitle.node.opacity = 0;
            this._lblTitle.node.scale = 0.3;
        }
        this._wellDoneBg && (this._wellDoneBg.opacity = 0);
        if (this._btnNext) {
            this._btnNext.scale = 0.6;
            this._btnNext.opacity = 0;
        }
        this._lblSubtitle && (this._lblSubtitle.node.opacity = 0);
        this._progressContainer && (this._progressContainer.active = false);
        this._refreshIcon.active = false;
        this._refreshValue.active = false;
        this._hintIcon.active = false;
        this._hintValue.active = false;
        this._fullScreenBtn.active = false;
        this._showRewardsNodes = [];
    };
    TravelWinView.prototype.getTitleConfig = function (e) {
        var t = this._titleConfig[e], o = this.getRandomSubtitle(t.subtitles);
        return {
            titleKey: t.titleKey,
            titleDefault: t.titleDefault,
            subtitleKey: o.key,
            subtitleDefault: o.default
        };
    };
    TravelWinView.prototype.getRandomSubtitle = function (e) {
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
    TravelWinView.prototype.playWinAnimationSequence = function () {
        var e = this;
        if (!this._isAnimating) {
            this._isAnimating = true;
            this.playMaskFadeIn();
            this.playWellDoneSpineAnimation();
            this.scheduleWinAnimations();
            if (this._curReward.lv === this._curLv - 1 && this._canGain)
                this.btnNext.getComponent(cc.Button).interactable = false;
            else {
                var t = {
                    delayTime: 1.5
                };
                mj.triggerInternalEvent("WinVw_btnNextDelay", this, [t]);
                this.btnNext.getComponent(cc.Button).interactable = false;
                this.scheduleOnce(function () {
                    cc.isValid(e.btnNext) && (e.btnNext.getComponent(cc.Button).interactable = true);
                }, t.delayTime);
                this.popNextView();
            }
        }
    };
    TravelWinView.prototype.popNextView = function (e) {
        if (e === void 0) { e = {}; }
    };
    TravelWinView.prototype.playWellDoneSpineAnimation = function () {
        var e, t = this;
        if ((null === (e = this._collects) || void 0 === e ? void 0 : e.length) <= 0) {
            this._wellDoneSkeleton.node.active = false;
            this._collectContainer.active = false;
        }
        else {
            this._wellDoneSkeleton.node.active = true;
            this._collectContainer.active = false;
            this._wellDoneSkeleton.setEventListener(function () {
                if (cc.isValid(t._collectContainer)) {
                    t._collectContainer.active = true;
                    t._collectContainer.opacity = 255;
                    t._wellDoneSkeleton.setEventListener(null);
                }
            });
            GameUtils_1.default.playSpine(this._wellDoneSkeleton, "in", false, null, 1 / this._animSpeedRate);
        }
    };
    TravelWinView.prototype.playLightSpineAnimation = function () {
        GameUtils_1.default.playSpine(this._lightSkeleton, "init", true, null, 1 / this._animSpeedRate);
    };
    TravelWinView.prototype.scheduleWinAnimations = function () {
        var e = this, t = this._animSpeedRate;
        this.scheduleOnce(function () {
            e.playLightSpineAnimation();
            e.playWellDoneTextAnimation();
        }, 0.2 * t);
        this.scheduleOnce(function () {
            e.playWellDoneOverlayAnimation();
            e.playWellDoneBgAnimation();
        }, 0.5 * t);
        this.scheduleOnce(function () {
            e.playProgressBarAnimation();
        }, 0.7 * t);
        this.scheduleOnce(function () {
            if (e._curReward.type === TravelConfig_1.ETravelRewardType.EBadge && e._curLv - 1 === e._curReward.lv && e._canGain)
                e.btnNext.active = false;
            else {
                e.btnNext.active = true;
                e._btnNext.opacity = 255;
                e.playButtonAnimation();
                e.scheduleOnce(function () {
                    e.updateDiffBgWidth();
                }, 0);
            }
        }, 0.9 * t);
        this.scheduleOnce(function () {
            e.playDescAnimation();
        }, 1.1 * t);
    };
    TravelWinView.prototype.playProgressBarAnimation = function () {
        var e = this;
        if (this._progressBar && this._curReward) {
            var t = this._animSpeedRate;
            this._progressContainer.active = true;
            this._progressContainer.opacity = 0;
            this._progressContainer.scale = 0.7;
            cc.Tween.stopAllByTarget(this._progressContainer);
            cc.tween(this._progressContainer).to(0.3 * t, {
                opacity: 255,
                scale: 1.05
            }, {
                easing: cc.easing.quadOut
            }).to(0.14 * t, {
                scale: 1
            }, {
                easing: cc.easing.quadIn
            }).start();
            var o = this._progressBar.endProgress, n = cc.tween(this._progressBar).to(0.3 * t, {
                progress: o
            }, {
                easing: cc.easing.quadInOut
            }), i = cc.tween(this._progressBar).delay(0.15 * t).call(function () {
                cc.isValid(e._rewardLevelAnim) && GameUtils_1.default.playSpine(e._rewardLevelAnim.getComponent(sp.Skeleton), "in", false, function () {
                    e.enterCompletedAnim();
                });
            });
            cc.tween(this._progressBar).delay(0.6 * t).parallel(n, i).start();
        }
    };
    TravelWinView.prototype.enterCompletedAnim = function () {
        var e = this;
        if (this._curReward && this._curLv - 1 === this._curReward.lv && this._canGain)
            if (this._curReward.type === TravelConfig_1.ETravelRewardType.EBadge)
                ControllerManager_1.default.getInstance().pushViewByController("TravelMapController", {
                    isReplace: true,
                    badge: true
                }, function () {
                    var t;
                    null === (t = e.delegate) || void 0 === t || t.close();
                });
            else {
                ControllerManager_1.default.getInstance().pushViewByController("TravelBoxController", {
                    reward: this._curReward
                }, function (t) {
                    if (cc.isValid(t)) {
                        var o = t.onUIDestroy.bind(t);
                        t.onUIDestroy = function () {
                            o(t);
                            e.popNextView({
                                hasBoxReward: true
                            });
                        };
                    }
                });
                this.scheduleOnce(function () {
                    e.btnNext.getComponent(cc.Button).interactable = true;
                }, 0.5);
            }
    };
    TravelWinView.prototype.playWellDoneTextAnimation = function () {
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
    TravelWinView.prototype.playWellDoneOverlayAnimation = function () { };
    TravelWinView.prototype.playWellDoneBgAnimation = function () {
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
    TravelWinView.prototype.playButtonAnimation = function () {
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
    TravelWinView.prototype.playDescAnimation = function () {
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
    TravelWinView.prototype.playCloseAnimation = function (e) {
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
    TravelWinView.prototype.stopAllAnimations = function () {
        this._currentTweens.forEach(function (e) {
            e && e.stop();
        });
        this._currentTweens = [];
        this.stopMaskAnimation();
        this.unscheduleAllCallbacks();
    };
    TravelWinView.prototype.resetAllButtonStates = function () {
        [this._btnBgExpert, this._btnBgExpertUp, this._btnBgHard, this._btnBgHardUp, this._btnBgNor].forEach(function (e) {
            e && (e.opacity = 0);
        });
        this._lblBtnDes.node.opacity = 0;
    };
    TravelWinView.prototype.showDifficultyLabel = function (e, t) {
        this._lblBtnDes.node.opacity = 255;
        e && I18NStrings_1.default.setText(this._lblBtnDes.node, e, t);
    };
    TravelWinView.prototype.onDestroy = function () {
        mj.triggerInternalEvent("BannerAd_NeedShowBanner", this, []);
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    TravelWinView.prototype.setBtnNextZIndex = function (e) {
        this._btnNext && cc.isValid(this._btnNext) && (this._btnNext.zIndex = e);
    };
    TravelWinView.prefabUrl = "prefabs/journey/JourneyWinView";
    __decorate([
        mj.traitEvent("TLWinVw_onLoad")
    ], TravelWinView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("TLWinVw_bgMusic")
    ], TravelWinView.prototype, "handleBgMusic", null);
    __decorate([
        mj.traitEvent("TLWinVw_initDyNode")
    ], TravelWinView.prototype, "initDynamicNode", null);
    __decorate([
        mj.traitEvent("TLWinVw_onNextClick")
    ], TravelWinView.prototype, "onBtnNextClick", null);
    __decorate([
        mj.traitEvent("TLWinVw_gotoNextLv")
    ], TravelWinView.prototype, "gotoNextLevel", null);
    __decorate([
        mj.traitEvent("TLWinVw_showTLWinVw")
    ], TravelWinView.prototype, "showWinView", null);
    __decorate([
        mj.traitEvent("TLWinVw_popNextView")
    ], TravelWinView.prototype, "popNextView", null);
    __decorate([
        mj.traitEvent("TLWinVw_playWdSpine")
    ], TravelWinView.prototype, "playWellDoneSpineAnimation", null);
    __decorate([
        mj.traitEvent("TLWinVw_playLightSpine")
    ], TravelWinView.prototype, "playLightSpineAnimation", null);
    __decorate([
        mj.traitEvent("TLWinVw_playWdAni2")
    ], TravelWinView.prototype, "playWellDoneTextAnimation", null);
    __decorate([
        mj.traitEvent("TLWinVw_playWdAni")
    ], TravelWinView.prototype, "playWellDoneBgAnimation", null);
    __decorate([
        mj.traitEvent("TLWinVw_playBtnAni")
    ], TravelWinView.prototype, "playButtonAnimation", null);
    __decorate([
        mj.traitEvent("TLWinVw_destroy")
    ], TravelWinView.prototype, "onDestroy", null);
    TravelWinView = __decorate([
        mj.class
    ], TravelWinView);
    return TravelWinView;
}(UIView_1.default));
exports.default = TravelWinView;

cc._RF.pop();