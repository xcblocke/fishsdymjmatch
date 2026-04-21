
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/TravelWinView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvVHJhdmVsV2luVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLDZEQUF3RDtBQUN4RCxzREFBcUU7QUFDckUsMEVBQW9FO0FBQ3BFLDBFQUEwRjtBQUMxRiw4REFBeUQ7QUFDekQsMkRBQXNEO0FBQ3RELDZEQUF3RDtBQUN4RCxnRUFBMkQ7QUFDM0QsNEVBQXVFO0FBQ3ZFLDRFQUF1RTtBQUN2RSx1REFBMkQ7QUFDM0QsMkRBQTBEO0FBQzFELCtEQUE4RDtBQUM5RCwrQ0FBOEM7QUFDOUMsbUVBQStEO0FBQy9ELHdEQUFtRDtBQUVuRDtJQUEyQyxpQ0FBTTtJQUFqRDtRQUFBLHFFQTB2QkM7UUF6dkJDLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLHVCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4Qixz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QUFVLENBQUMsaUJBQWlCLENBQUM7a0RBSWhDO0lBdHZCa0IsYUFBYTtRQURqQyxFQUFFLENBQUMsS0FBSztPQUNZLGFBQWEsQ0EwdkJqQztJQUFELG9CQUFDO0NBMXZCRCxBQTB2QkMsQ0ExdkIwQyxnQkFBTSxHQTB2QmhEO2tCQTF2Qm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlWaWV3IGZyb20gJy4uL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRVBhbmRhUmVzdWx0IH0gZnJvbSAnLi4vZG90L0RHYW1lQnRuQ2xpY2snO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVWVF9NU0dfS0VZX1NJTVVMQVRPUl9ORVhUTEVWRUwgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9ldmVudHMvU2ltdWxhdG9yRXZlbnQnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgQ29sbGVjdFRhcmdldEl0ZW0gZnJvbSAnLi4vaXRlbXMvQ29sbGVjdFRhcmdldEl0ZW0nO1xuaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCBmcm9tICcuLi9nYW1lUGxheS90cmF2ZWwvbW9kZWwvVHJhdmVsR2FtZU1vZGVsJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgeyBFVHJhdmVsUmV3YXJkVHlwZSB9IGZyb20gJy4uL2NvbmZpZy9UcmF2ZWxDb25maWcnO1xuaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uL2ZyYW1ld29yay9kYXRhL0RhdGFSZWFkZXInO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvZGF0YS9Db25maWdUeXBlJztcbmltcG9ydCB7IEVJdGVtVHlwZSB9IGZyb20gJy4uL3VzZXIvSVVzZXJEYXRhJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IEp1bXBNYW5hZ2VyIGZyb20gJy4uL2Jhc2UvanVtcC9KdW1wTWFuYWdlcic7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYXZlbFdpblZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBfY29udGVudE5vZGUgPSBudWxsO1xuICBfbWFza05vZGUgPSBudWxsO1xuICBfbWFza1R3ZWVuID0gbnVsbDtcbiAgX2xpZ2h0U2tlbGV0b24gPSBudWxsO1xuICBfY3VyTHYgPSAwO1xuICBfbGJsTHYgPSBudWxsO1xuICBfYnRuTmV4dCA9IG51bGw7XG4gIF9oYXJkVHlwZSA9IDA7XG4gIF9sYmxUaXRsZSA9IG51bGw7XG4gIF9sYmxUaXRsZTIgPSBudWxsO1xuICBfbGJsU3VidGl0bGUgPSBudWxsO1xuICBfd2VsbERvbmVCZyA9IG51bGw7XG4gIF93ZWxsRG9uZVNrZWxldG9uID0gbnVsbDtcbiAgX2J0bkJnTm9yID0gbnVsbDtcbiAgX2J0bkJnRXhwZXJ0ID0gbnVsbDtcbiAgX2J0bkJnSGFyZCA9IG51bGw7XG4gIF9idG5CZ0V4cGVydFVwID0gbnVsbDtcbiAgX2J0bkJnSGFyZFVwID0gbnVsbDtcbiAgX2xibEJ0bkRlcyA9IG51bGw7XG4gIF9yZXdhcmRMZXZlbE5vZGUgPSBudWxsO1xuICBfcmV3YXJkTGV2ZWxBbmltID0gbnVsbDtcbiAgX3Jld2FyZEJ0biA9IG51bGw7XG4gIF9yZXdhcmRJY29uID0gbnVsbDtcbiAgX2JveFRpcEFuaW0gPSBudWxsO1xuICBfcmVmcmVzaEljb24gPSBudWxsO1xuICBfcmVmcmVzaFZhbHVlID0gbnVsbDtcbiAgX2hpbnRJY29uID0gbnVsbDtcbiAgX2hpbnRWYWx1ZSA9IG51bGw7XG4gIF9zaG93UmV3YXJkc05vZGVzID0gW107XG4gIF9jb2xsZWN0Q29udGFpbmVyID0gbnVsbDtcbiAgX3Byb2dyZXNzQmFyID0gbnVsbDtcbiAgX3Byb2dyZXNzQ29udGFpbmVyID0gbnVsbDtcbiAgX3Jld2FyZE5vZGUgPSBudWxsO1xuICBfZnVsbFNjcmVlbkJ0biA9IG51bGw7XG4gIF9pc0FuaW1hdGluZyA9IGZhbHNlO1xuICBfY3VycmVudFR3ZWVucyA9IFtdO1xuICBfY29sbGVjdHMgPSBbXTtcbiAgX2FuaW1TcGVlZFJhdGUgPSAxO1xuICBfY3VyUmV3YXJkID0gbnVsbDtcbiAgX2NhbkdhaW4gPSBmYWxzZTtcbiAgX3RpdGxlQ29uZmlnID0ge1xuICAgIHVuYmVsaWV2YWJsZToge1xuICAgICAgdGl0bGVLZXk6IFwiTWFoam9uZ1RpbGVzX0dhbWVFbmRfTmFtZV8xXzJcIixcbiAgICAgIHRpdGxlRGVmYXVsdDogXCJVbmJlbGlldmFibGVcIixcbiAgICAgIHN1YnRpdGxlczogW3tcbiAgICAgICAga2V5OiBcIk1haGpvbmdUaWxlc19HYW1lRW5kX1dvcmRfMV8yXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiWW91ciBza2lsbHMgYXJlIGZsYXdsZXNzIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJNYWhqb25nVGlsZXNfR2FtZUVuZF9Xb3JkXzFfM1wiLFxuICAgICAgICBkZWZhdWx0OiBcIlRoZSByaWdodGZ1bCBUaWxlIGNoYW1waW9uIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJZb3UgYXJlIHVuc3RvcHBhYmxlIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJZb3UgaG9sZCBhbGwgdGhlIHBvd2VyIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJGbGF3bGVzcyBsb2dpYyFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiVmVuaSwgdmlkaSwgdmljaSFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiVGhlIHRpbGVzIHRoZW1zZWx2ZXMgYm93IHRvIHlvdSFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiQSBzeW1waG9ueSBvZiB3aW5uaW5nIG1vdmVzIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJZb3UncmUgb24gZmlyZSFcIlxuICAgICAgfV1cbiAgICB9LFxuICAgIHBlcmZlY3Q6IHtcbiAgICAgIHRpdGxlS2V5OiBcIk1haGpvbmdUaWxlc19HYW1lRW5kX05hbWVfMl8yXCIsXG4gICAgICB0aXRsZURlZmF1bHQ6IFwiUGVyZmVjdFwiLFxuICAgICAgc3VidGl0bGVzOiBbe1xuICAgICAgICBrZXk6IFwiTWFoam9uZ1RpbGVzX0dhbWVFbmRfV29yZF8xXzFcIixcbiAgICAgICAgZGVmYXVsdDogXCJZb3Ugd2VyZSBhYnNvbHV0ZWx5IHBlcmZlY3QhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIk1haGpvbmdUaWxlc19HYW1lRW5kX1dvcmRfMl8xXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiWW91IGFyZSB0cnVseSBleGNlcHRpb25hbCFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiTWFoam9uZ1RpbGVzX0dhbWVFbmRfV29yZF8yXzNcIixcbiAgICAgICAgZGVmYXVsdDogXCJXaGF0IGEgYnJpbGxpYW50IHBlcmZvcm1hbmNlIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJNYWhqb25nVGlsZXNfR2FtZUVuZF9Xb3JkXzJfMlwiLFxuICAgICAgICBkZWZhdWx0OiBcIlVubWF0Y2hlZCBza2lsbCwgb25lIG9mIGEga2luZCFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiWW91J3ZlIHJlYWNoZWQgbWFzdGVyeSFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiQSBzdHJhdGVnaWMgbWFzdGVycGllY2UhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIllvdXIgZm9yZXNpZ2h0IGlzIGluY3JlZGlibGUhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIkEgbWluZCBmb3Igc3RyYXRlZ3ksIGEgdG91Y2ggb2YgbHVjayFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiQ29naXRvLCBlcmdvIHN1bSFcIlxuICAgICAgfV1cbiAgICB9LFxuICAgIHdlbGxEb25lOiB7XG4gICAgICB0aXRsZUtleTogXCJNYWhqb25nVGlsZXNfR2FtZUVuZF9OYW1lXzNfMlwiLFxuICAgICAgdGl0bGVEZWZhdWx0OiBcIldlbGwgRG9uZVwiLFxuICAgICAgc3VidGl0bGVzOiBbe1xuICAgICAgICBrZXk6IFwiTWFoam9uZ1RpbGVzX0dhbWVFbmRfV29yZF8zXzFcIixcbiAgICAgICAgZGVmYXVsdDogXCJZb3Ugc2hpbmUgdW5kZXIgcHJlc3N1cmUhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIk1haGpvbmdUaWxlc19HYW1lRW5kX1dvcmRfM18yXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiUmVsZW50bGVzcyBhbmQgdW5mb3JnZXR0YWJsZSFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiTWFoam9uZ1RpbGVzX0dhbWVFbmRfV29yZF8zXzNcIixcbiAgICAgICAgZGVmYXVsdDogXCJOb3RoaW5nIGNhbiBzdG9wIHlvdSFcIlxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiU2FwZXJlIEF1ZGUhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIllvdSBtYWtlIGdyZWF0bmVzcyBsb29rIGVhc3khXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIlRoZSBnb2xkIHN0YW5kYXJkIVwiXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJcIixcbiAgICAgICAgZGVmYXVsdDogXCJZb3UncmUgaW4gYSBsZWFndWUgb2YgeW91ciBvd24hXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIlB1cmUgY2xhc3MhXCJcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICBkZWZhdWx0OiBcIllvdSd2ZSBnb3QgdGhlIHdpbm5pbmcgZm9ybXVsYSFcIlxuICAgICAgfV1cbiAgICB9XG4gIH07XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvam91cm5leS9Kb3VybmV5V2luVmlld1wiO1xuICBnZXQgbGJsTHYoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xibEx2O1xuICB9XG4gIGdldCBidG5OZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl9idG5OZXh0O1xuICB9XG4gIGdldCBsYmxCdG5EZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xibEJ0bkRlcztcbiAgfVxuICBnZXQgZnVsbFNjcmVlbkJ0bigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnVsbFNjcmVlbkJ0bjtcbiAgfVxuICBnZXRDb250ZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudE5vZGU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUTFdpblZ3X29uTG9hZFwiKVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuV2luKTtcbiAgICB0aGlzLl9jb250ZW50Tm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XG4gICAgdGhpcy5fbWFza05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKTtcbiAgICB0aGlzLl9saWdodFNrZWxldG9uID0gY2MuZmluZChcImxpZ2h0X25vZGUvc3Bpbl9saWdodFwiLCB0aGlzLl9jb250ZW50Tm9kZSkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICB0aGlzLl93ZWxsRG9uZVNrZWxldG9uID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluX3dlbGxEb25lXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgdGhpcy5fbGJsU3VidGl0bGUgPSB0aGlzLl9jb250ZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImxibF9zdWJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuX3dlbGxEb25lQmcgPSB0aGlzLl9jb250ZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwcl9iZ193ZWxsRG9uZVwiKTtcbiAgICB0aGlzLl9idG5OZXh0ID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fbmV4dFwiKTtcbiAgICB2YXIgdCA9IHRoaXMuX2J0bk5leHQuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpO1xuICAgIHRoaXMuX2J0bkJnTm9yID0gdC5nZXRDaGlsZEJ5TmFtZShcImJnX25vclwiKTtcbiAgICB0aGlzLl9idG5CZ0V4cGVydCA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ19leHBlcnRcIik7XG4gICAgdGhpcy5fYnRuQmdIYXJkID0gdC5nZXRDaGlsZEJ5TmFtZShcImJnX2hhcmRcIik7XG4gICAgdGhpcy5fYnRuQmdFeHBlcnRVcCA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ19leHBlcnRfdXBcIik7XG4gICAgdGhpcy5fYnRuQmdIYXJkVXAgPSB0LmdldENoaWxkQnlOYW1lKFwiYmdfaGFyZF91cFwiKTtcbiAgICB0aGlzLl9sYmxCdG5EZXMgPSB0LmdldENoaWxkQnlOYW1lKFwibGJsX2J0bl9kZXNcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLl9sYmxMdiA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfbHZcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLl9jb2xsZWN0Q29udGFpbmVyID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDb2xsZWN0c1wiKTtcbiAgICB0aGlzLl9wcm9ncmVzc0NvbnRhaW5lciA9IGNjLmZpbmQoXCJwcm9ncmVzc1wiLCB0aGlzLl9jb250ZW50Tm9kZSk7XG4gICAgdGhpcy5fcHJvZ3Jlc3NCYXIgPSBjYy5maW5kKFwicHJvZ3Jlc3MvUHJvZ3Jlc3NcIiwgdGhpcy5fY29udGVudE5vZGUpLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XG4gICAgdGhpcy5fcmV3YXJkTm9kZSA9IGNjLmZpbmQoXCJwcm9ncmVzcy9SZXdhcmRcIiwgdGhpcy5fY29udGVudE5vZGUpO1xuICAgIHRoaXMuX3Jld2FyZEJ0biA9IGNjLmZpbmQoXCJCYWRnZVwiLCB0aGlzLl9yZXdhcmROb2RlKTtcbiAgICB0aGlzLl9yZXdhcmRJY29uID0gY2MuZmluZChcIkJhZGdlL0ljb25cIiwgdGhpcy5fcmV3YXJkTm9kZSk7XG4gICAgdGhpcy5fcmV3YXJkTGV2ZWxBbmltID0gY2MuZmluZChcIkJhZGdlL0xldmVsQW5pbVwiLCB0aGlzLl9yZXdhcmROb2RlKTtcbiAgICB0aGlzLl9yZXdhcmRMZXZlbE5vZGUgPSBjYy5maW5kKFwiQmFkZ2UvTGV2ZWxUaXBcIiwgdGhpcy5fcmV3YXJkTm9kZSk7XG4gICAgdGhpcy5fYm94VGlwQW5pbSA9IGNjLmZpbmQoXCJCYWRnZS9Cb3hUaXBBbmltXCIsIHRoaXMuX3Jld2FyZE5vZGUpO1xuICAgIHRoaXMuX3JlZnJlc2hJY29uID0gY2MuZmluZChcIkJhZGdlL1JlZnJlc2hUaXBJY29uXCIsIHRoaXMuX3Jld2FyZE5vZGUpO1xuICAgIHRoaXMuX3JlZnJlc2hWYWx1ZSA9IGNjLmZpbmQoXCJCYWRnZS9SZWZyZXNoVGlwVmFsdWVcIiwgdGhpcy5fcmV3YXJkTm9kZSk7XG4gICAgdGhpcy5faGludEljb24gPSBjYy5maW5kKFwiQmFkZ2UvSGludFRpcEljb25cIiwgdGhpcy5fcmV3YXJkTm9kZSk7XG4gICAgdGhpcy5faGludFZhbHVlID0gY2MuZmluZChcIkJhZGdlL0hpbnRUaXBWYWx1ZVwiLCB0aGlzLl9yZXdhcmROb2RlKTtcbiAgICB0aGlzLl9mdWxsU2NyZWVuQnRuID0gY2MuZmluZChcImZ1bGxCdG5cIiwgdGhpcy5fY29udGVudE5vZGUpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9yZXdhcmRCdG4sIHRoaXMub25SZXdhcmRCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fYnRuTmV4dCwgdGhpcy5vbkJ0bk5leHRDbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fZnVsbFNjcmVlbkJ0biwgdGhpcy5vbkZ1bGxTY3JlZW5CdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmluaXREeW5hbWljTm9kZSgpO1xuICAgIHRoaXMuaW5pdE5vZGVTdGF0ZXMoKTtcbiAgICB0aGlzLmhhbmRsZUJnTXVzaWMoKTtcbiAgICB0aGlzLmhvb2tOb2RlcygpO1xuICAgIG1qLnRyaWdnZXJJbnRlcm5hbEV2ZW50KFwiQmFubmVyQWRfTmVlZEhpZGVCYW5uZXJcIiwgdGhpcywgW10pO1xuICB9XG4gIHNldEFuaW1TcGVlZFJhdGUoZSkge1xuICAgIHRoaXMuX2FuaW1TcGVlZFJhdGUgPSBlO1xuICB9XG4gIG9uUmV3YXJkQnRuQ2xpY2soKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgaWYgKHRoaXMuX2N1clJld2FyZC50eXBlID09PSBFVHJhdmVsUmV3YXJkVHlwZS5FR2lmdEJveCAmJiBjYy5pc1ZhbGlkKHRoaXMuX2JveFRpcEFuaW0pKSB7XG4gICAgICB2YXIgbyA9IE1hdGguZmxvb3IodGhpcy5fc2hvd1Jld2FyZHNOb2Rlcy5sZW5ndGggLyAyKSxcbiAgICAgICAgbiA9IHRoaXMuX2JveFRpcEFuaW0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgIHRoaXMuX2JveFRpcEFuaW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGlmIChvID4gMCAmJiBvIDwgMykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyh0aGlzLl9zaG93UmV3YXJkc05vZGVzKSwgciA9IGkubmV4dCgpOyAhci5kb25lOyByID0gaS5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBhID0gci52YWx1ZTtcbiAgICAgICAgICAgIGNjLmlzVmFsaWQoYSkgJiYgKGEuYWN0aXZlID0gdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgZSA9IHtcbiAgICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgciAmJiAhci5kb25lICYmICh0ID0gaS5yZXR1cm4pICYmIHQuY2FsbChpKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUobiwgXCJjbGlja19cIiArIG8sIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShuLCBcImluaXRfXCIgKyBvLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2Z1bGxTY3JlZW5CdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25GdWxsU2NyZWVuQnRuQ2xpY2soKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9ib3hUaXBBbmltKSAmJiAodGhpcy5fYm94VGlwQW5pbS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9mdWxsU2NyZWVuQnRuKSAmJiAodGhpcy5fZnVsbFNjcmVlbkJ0bi5hY3RpdmUgPSBmYWxzZSk7XG4gICAgaWYgKHRoaXMuX3Nob3dSZXdhcmRzTm9kZXMubGVuZ3RoID4gMCkgdHJ5IHtcbiAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyh0aGlzLl9zaG93UmV3YXJkc05vZGVzKSwgbiA9IG8ubmV4dCgpOyAhbi5kb25lOyBuID0gby5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGkgPSBuLnZhbHVlO1xuICAgICAgICBjYy5pc1ZhbGlkKGkpICYmIChpLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbiAmJiAhbi5kb25lICYmICh0ID0gby5yZXR1cm4pICYmIHQuY2FsbChvKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBob29rTm9kZXMoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5fd2VsbERvbmVTa2VsZXRvbi5ub2RlKTtcbiAgICB0LnJlc2V0KFwiXCIpO1xuICAgIHQubWFya1JlYWR5KFwiXCIpO1xuICAgIHQuYXR0YWNoTm9kZShcImhvb2tfaWNvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5fY29sbGVjdENvbnRhaW5lcjtcbiAgICB9KTtcbiAgICAodCA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5fcmV3YXJkTGV2ZWxBbmltKSkucmVzZXQoXCJcIik7XG4gICAgdC5tYXJrUmVhZHkoXCJcIik7XG4gICAgdC5hdHRhY2hOb2RlKFwiaG9va19udW1cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGUuX3Jld2FyZExldmVsTm9kZTtcbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRMV2luVndfYmdNdXNpY1wiKVxuICBoYW5kbGVCZ011c2ljKCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5mYWRlQkdNT3V0KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUTFdpblZ3X2luaXREeU5vZGVcIilcbiAgaW5pdER5bmFtaWNOb2RlKCkge1xuICAgIHZhciBlLCB0O1xuICAgIHRoaXMuX2xibFRpdGxlID0gbnVsbCA9PT0gKGUgPSB0aGlzLl9jb250ZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImxibF90aXRsZVwiKSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuX2xibFRpdGxlMiA9IG51bGwgPT09ICh0ID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfdGl0bGUyXCIpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUTFdpblZ3X29uTmV4dENsaWNrXCIpXG4gIG9uQnRuTmV4dENsaWNrKCkge1xuICAgIGlmICh0aGlzLm5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSB7XG4gICAgICB2YXIgZSA9IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvdFBhbmRhUmVzdWx0KEVQYW5kYVJlc3VsdC5UcmF2ZWwpO1xuICAgICAgdGhpcy5faXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtcbiAgICAgIGlmIChlLmlzU2Vzc2lvbkFjdGl2ZSgpKSB7XG4gICAgICAgIGlmIChlLmlzTGV2ZWxFbmQodGhpcy5fY3VyTHYpKSB7XG4gICAgICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlRyYXZlbE1hcENvbnRyb2xsZXJcIiwge1xuICAgICAgICAgICAgaXNSZXBsYWNlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nb3RvTmV4dExldmVsKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEp1bXBNYW5hZ2VyLmdldEluc3RhbmNlKCkuanVtcFRvSGFsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRMV2luVndfZ290b05leHRMdlwiKVxuICBnb3RvTmV4dExldmVsKCkge1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVWVF9NU0dfS0VZX1NJTVVMQVRPUl9ORVhUTEVWRUwpO1xuICB9XG4gIGdldFJld2FyZE5vZGVzKGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgRUl0ZW1UeXBlLkhpbnQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWNvbjogdGhpcy5faGludEljb24sXG4gICAgICAgICAgdmFsdWU6IHRoaXMuX2hpbnRWYWx1ZVxuICAgICAgICB9O1xuICAgICAgY2FzZSBFSXRlbVR5cGUuU2h1ZmZsZTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpY29uOiB0aGlzLl9yZWZyZXNoSWNvbixcbiAgICAgICAgICB2YWx1ZTogdGhpcy5fcmVmcmVzaFZhbHVlXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpY29uOiBudWxsLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9O1xuICB9XG4gIHVwZGF0ZUJveFJld2FyZCgpIHtcbiAgICB2YXIgZSA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5fYm94VGlwQW5pbSk7XG4gICAgZS5yZXNldChcIlwiKTtcbiAgICBlLm1hcmtSZWFkeShcIlwiKTtcbiAgICB2YXIgdCA9IGZ1bmN0aW9uIHQodCwgbywgbikge1xuICAgICAgaWYgKHQgJiYgbykge1xuICAgICAgICBlLmF0dGFjaE5vZGUoXCJob29rX2ljb25fXCIgKyBuLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgIH0pO1xuICAgICAgICBlLmF0dGFjaE5vZGUoXCJob29rX251bV9cIiArIG4sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLl9ib3hUaXBBbmltLmFjdGl2ZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLl9jdXJSZXdhcmQudHlwZSA9PT0gRVRyYXZlbFJld2FyZFR5cGUuRUdpZnRCb3gpIHtcbiAgICAgIHRoaXMuX2JveFRpcEFuaW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGZvciAodmFyIG8gPSB0aGlzLl9jdXJSZXdhcmQucmV3YXJkLCBuID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLnJld2FyZF9jb25maWcsIG8pLCBpID0gbi5JdGVtcywgciA9IG4uQ291bnRzLCBhID0gMDsgYSA8IGkubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgdmFyIGwgPSBpW2FdLFxuICAgICAgICAgIHMgPSB0aGlzLmdldFJld2FyZE5vZGVzKGwpLFxuICAgICAgICAgIGMgPSBzLmljb24sXG4gICAgICAgICAgdSA9IHMudmFsdWU7XG4gICAgICAgIGlmIChjICYmIHUpIHtcbiAgICAgICAgICB1LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gclthXS50b1N0cmluZygpO1xuICAgICAgICAgIHRoaXMuX3Nob3dSZXdhcmRzTm9kZXMucHVzaChjLCB1KTtcbiAgICAgICAgICB0KGMsIHUsIGEgKyAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fYm94VGlwQW5pbS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlUmV3YXJkKCkge1xuICAgIHZhciBlID0gdGhpcy5fY3VyTHYgLSAxLFxuICAgICAgdCA9IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgbyA9IHQuZ2V0UmV3YXJkSW5mbyh0LmdldEN1ckpvdXJuZXkoKSksXG4gICAgICBuID0gby5maW5kSW5kZXgoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQubHYgPj0gZTtcbiAgICAgIH0pO1xuICAgIGlmICghKG4gPCAtMSkpIHtcbiAgICAgIHRoaXMuX2N1clJld2FyZCA9IG9bbl07XG4gICAgICB2YXIgaSA9IG4gPj0gMSA/IG9bbiAtIDFdLmx2IDogMCxcbiAgICAgICAgciA9IHRoaXMuX2N1clJld2FyZC5sdixcbiAgICAgICAgYSA9IChlIC0gaSkgLyAociAtIGkpLFxuICAgICAgICBsID0gKGUgLSAxIC0gaSkgLyAociAtIGkpO1xuICAgICAgdGhpcy5fcHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBsO1xuICAgICAgdGhpcy5fcHJvZ3Jlc3NCYXIuZW5kUHJvZ3Jlc3MgPSBhO1xuICAgICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLl9yZXdhcmRMZXZlbE5vZGUsIFwiTHYuXCIgKyByLCBcIk1haGpvbmdUaWxlc19NYWluUGFnZV9UYXJnZXRMZXZlbFwiLCBbcl0pO1xuICAgICAgaWYgKHRoaXMuX2N1clJld2FyZC50eXBlID09PSBFVHJhdmVsUmV3YXJkVHlwZS5FQmFkZ2UpIHtcbiAgICAgICAgdmFyIHMgPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUucmV3YXJkX2NvbmZpZywgdGhpcy5fY3VyUmV3YXJkLnJld2FyZCksXG4gICAgICAgICAgdSA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5pdGVtX2NvbmZpZywgcy5JdGVtc1swXSk7XG4gICAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX3Jld2FyZEljb24sIFwidGV4dHVyZS9iYWRnZS9cIiArIHUuSWNvbiwgZmFsc2UpO1xuICAgICAgICB0aGlzLl9yZXdhcmRJY29uLnNjYWxlID0gMC4zNTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX3Jld2FyZEljb24sIFwidGV4dHVyZS9qb3VybmV5L3Jlc3VsdF9pY29uX2NoZXN0XCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fcmV3YXJkSWNvbi5zY2FsZSA9IDE7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUJveFJld2FyZCgpO1xuICAgIH1cbiAgfVxuICB1cGRhdGVDb2xsZWN0KCkge1xuICAgIHZhciBlID0gdGhpcy5fY29sbGVjdHM7XG4gICAgdGhpcy5fY29sbGVjdENvbnRhaW5lci5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IGUubGVuZ3RoOyB0KyspIHtcbiAgICAgIHZhciBvID0gdGhpcy5jcmVhdGVVSVN5bmMoQ29sbGVjdFRhcmdldEl0ZW0pLFxuICAgICAgICBuID0gZVt0XTtcbiAgICAgIGlmIChvICYmIGNjLmlzVmFsaWQobykgJiYgY2MuaXNWYWxpZCh0aGlzLl9jb2xsZWN0Q29udGFpbmVyKSkge1xuICAgICAgICB0aGlzLl9jb2xsZWN0Q29udGFpbmVyLmFkZENoaWxkKG8pO1xuICAgICAgICB2YXIgaSA9IG8uZ2V0Q29tcG9uZW50KENvbGxlY3RUYXJnZXRJdGVtKTtcbiAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICB2YXIgYSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbiksIHtcbiAgICAgICAgICAgICAgY291bnQ6IDBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbCA9IDEuMjtcbiAgICAgICAgICBhLnR5cGUgPT09IEVUaWxlVHlwZS5Zb2dhICYmIChsID0gMS41KTtcbiAgICAgICAgICBpLmluaXRVSShhKTtcbiAgICAgICAgICBpLm5vZGUuc2NhbGUgPSBsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NvbGxlY3RDb250YWluZXIuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkudXBkYXRlTGF5b3V0KCk7XG4gICAgdGhpcy5fY29sbGVjdENvbnRhaW5lci5vcGFjaXR5ID0gMDtcbiAgfVxuICBvblZpZXdMb2FkKGUpIHtcbiAgICB2YXIgdCA9IGUuZGF0YTtcbiAgICB0aGlzLl9jdXJMdiA9IHQuY3VyTHY7XG4gICAgdGhpcy5fY29sbGVjdHMgPSB0LmNvbGxlY3RzO1xuICAgIHRoaXMuX2NhbkdhaW4gPSBlLmNhbkdhaW47XG4gICAgdmFyIG8gPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICBpZiAoIW8uaXNTZXNzaW9uQWN0aXZlKCkgfHwgby5pc0xldmVsRW5kKHRoaXMuX2N1ckx2KSkge1xuICAgICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLl9sYmxMdi5ub2RlLCBcIkJhY2tcIiwgXCJDb21tb25fQnRuX0JhY2tcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5fbGJsTHYubm9kZSwgXCJMZXZlbCBcIiArIHRoaXMuX2N1ckx2LnRvU3RyaW5nKCksIFwiTWFoam9uZ1RpbGVzX0dhbWVFbmRfTGV2ZWxcIiwgW3RoaXMuX2N1ckx2XSk7XG4gICAgfVxuICAgIHZhciBuID0gdGhpcy5nZXRUaXRsZUNvbmZpZyhcIndlbGxEb25lXCIpO1xuICAgIHRoaXMuX2xibFRpdGxlICYmIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5fbGJsVGl0bGUubm9kZSwgbi50aXRsZURlZmF1bHQsIG4udGl0bGVLZXkpO1xuICAgIHRoaXMuX2xibFRpdGxlMiAmJiBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMuX2xibFRpdGxlMi5ub2RlLCBuLnRpdGxlRGVmYXVsdCwgbi50aXRsZUtleSk7XG4gICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLl9sYmxTdWJ0aXRsZS5ub2RlLCBuLnN1YnRpdGxlRGVmYXVsdCwgbi5zdWJ0aXRsZUtleSk7XG4gICAgdGhpcy51cGRhdGVSZXdhcmQoKTtcbiAgICB0aGlzLnVwZGF0ZUNvbGxlY3QoKTtcbiAgICB2YXIgaSA9IG8uaXNIYXJkTGV2ZWwodGhpcy5fY3VyTHYpO1xuICAgIHRoaXMucmVzZXRBbGxCdXR0b25TdGF0ZXMoKTtcbiAgICBpZiAoaSkge1xuICAgICAgdGhpcy5fYnRuQmdIYXJkLm9wYWNpdHkgPSAyNTU7XG4gICAgICB0aGlzLl9idG5CZ0hhcmRVcC5vcGFjaXR5ID0gMjU1O1xuICAgICAgdGhpcy5zaG93RGlmZmljdWx0eUxhYmVsKFwiSGFyZFwiLCBcIk1haGpvbmdUaWxlc19IYXJkXCIpO1xuICAgICAgdGhpcy5faGFyZFR5cGUgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idG5CZ05vci5vcGFjaXR5ID0gMjU1O1xuICAgICAgdGhpcy5faGFyZFR5cGUgPSAwO1xuICAgIH1cbiAgfVxuICB1cGRhdGVEaWZmQmdXaWR0aCgpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9sYmxCdG5EZXMpICYmIHRoaXMubGJsQnRuRGVzLm5vZGUuYWN0aXZlSW5IaWVyYXJjaHkgJiYgdGhpcy5sYmxCdG5EZXMubm9kZS5vcGFjaXR5ID4gMCkge1xuICAgICAgdGhpcy5fYnRuQmdFeHBlcnRVcC53aWR0aCA9IHRoaXMuX2xibEJ0bkRlcy5ub2RlLndpZHRoICsgNTA7XG4gICAgICB0aGlzLl9idG5CZ0hhcmRVcC53aWR0aCA9IHRoaXMuX2xibEJ0bkRlcy5ub2RlLndpZHRoICsgNTA7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVExXaW5Wd19zaG93VExXaW5Wd1wiKVxuICBzaG93V2luVmlldygpIHtcbiAgICB0aGlzLnBsYXlXaW5BbmltYXRpb25TZXF1ZW5jZSgpO1xuICB9XG4gIHBsYXlNYXNrRmFkZUluKGUgPSAwLjIpIHtcbiAgICB2YXIgdDtcbiAgICBpZiAodGhpcy5fbWFza05vZGUpIHtcbiAgICAgIHRoaXMuc3RvcE1hc2tBbmltYXRpb24oKTtcbiAgICAgIHZhciBvID0gbnVsbCA9PT0gKHQgPSB0aGlzLm5vZGUucGFyZW50KSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldENoaWxkQnlOYW1lKFwiQmx1ckJnXCIpO1xuICAgICAgY2MuaXNWYWxpZChvKSAmJiAoby5vcGFjaXR5ID0gMCk7XG4gICAgfVxuICB9XG4gIHBsYXlNYXNrRmFkZU91dChlID0gMC4yKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9tYXNrTm9kZSkge1xuICAgICAgdGhpcy5zdG9wTWFza0FuaW1hdGlvbigpO1xuICAgICAgdGhpcy5fbWFza1R3ZWVuID0gY2MudHdlZW4odGhpcy5fbWFza05vZGUpLnRvKGUsIHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwic2luZUluXCJcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICB0Ll9tYXNrVHdlZW4gPSBudWxsO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgc3RvcE1hc2tBbmltYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuX21hc2tUd2Vlbikge1xuICAgICAgdGhpcy5fbWFza1R3ZWVuLnN0b3AoKTtcbiAgICAgIHRoaXMuX21hc2tUd2VlbiA9IG51bGw7XG4gICAgfVxuICB9XG4gIGluaXROb2RlU3RhdGVzKCkge1xuICAgIGlmICh0aGlzLl9sYmxUaXRsZSkge1xuICAgICAgdGhpcy5fbGJsVGl0bGUubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuX2xibFRpdGxlLm5vZGUuc2NhbGUgPSAwLjM7XG4gICAgfVxuICAgIHRoaXMuX3dlbGxEb25lQmcgJiYgKHRoaXMuX3dlbGxEb25lQmcub3BhY2l0eSA9IDApO1xuICAgIGlmICh0aGlzLl9idG5OZXh0KSB7XG4gICAgICB0aGlzLl9idG5OZXh0LnNjYWxlID0gMC42O1xuICAgICAgdGhpcy5fYnRuTmV4dC5vcGFjaXR5ID0gMDtcbiAgICB9XG4gICAgdGhpcy5fbGJsU3VidGl0bGUgJiYgKHRoaXMuX2xibFN1YnRpdGxlLm5vZGUub3BhY2l0eSA9IDApO1xuICAgIHRoaXMuX3Byb2dyZXNzQ29udGFpbmVyICYmICh0aGlzLl9wcm9ncmVzc0NvbnRhaW5lci5hY3RpdmUgPSBmYWxzZSk7XG4gICAgdGhpcy5fcmVmcmVzaEljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fcmVmcmVzaFZhbHVlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2hpbnRJY29uLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2hpbnRWYWx1ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9mdWxsU2NyZWVuQnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX3Nob3dSZXdhcmRzTm9kZXMgPSBbXTtcbiAgfVxuICBnZXRUaXRsZUNvbmZpZyhlKSB7XG4gICAgdmFyIHQgPSB0aGlzLl90aXRsZUNvbmZpZ1tlXSxcbiAgICAgIG8gPSB0aGlzLmdldFJhbmRvbVN1YnRpdGxlKHQuc3VidGl0bGVzKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGVLZXk6IHQudGl0bGVLZXksXG4gICAgICB0aXRsZURlZmF1bHQ6IHQudGl0bGVEZWZhdWx0LFxuICAgICAgc3VidGl0bGVLZXk6IG8ua2V5LFxuICAgICAgc3VidGl0bGVEZWZhdWx0OiBvLmRlZmF1bHRcbiAgICB9O1xuICB9XG4gIGdldFJhbmRvbVN1YnRpdGxlKGUpIHtcbiAgICBpZiAoIWUgfHwgMCA9PT0gZS5sZW5ndGgpIHJldHVybiB7XG4gICAgICBrZXk6IFwiXCIsXG4gICAgICBkZWZhdWx0OiBcIlwiXG4gICAgfTtcbiAgICB2YXIgdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGUubGVuZ3RoKTtcbiAgICBpZiAodm9pZCAwICE9PSBtai5nZXRDbGFzc0J5TmFtZShcIkxhbmd1YWdlU2VsZWN0b3JUcmFpdFwiKSkge1xuICAgICAgdmFyIG8gPSBlW3RdO1xuICAgICAgaWYgKG8ua2V5KSByZXR1cm4gbztcbiAgICAgIHZhciBuID0gZS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUua2V5O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gZVt0XTtcbiAgfVxuICBwbGF5V2luQW5pbWF0aW9uU2VxdWVuY2UoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICghdGhpcy5faXNBbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucGxheU1hc2tGYWRlSW4oKTtcbiAgICAgIHRoaXMucGxheVdlbGxEb25lU3BpbmVBbmltYXRpb24oKTtcbiAgICAgIHRoaXMuc2NoZWR1bGVXaW5BbmltYXRpb25zKCk7XG4gICAgICBpZiAodGhpcy5fY3VyUmV3YXJkLmx2ID09PSB0aGlzLl9jdXJMdiAtIDEgJiYgdGhpcy5fY2FuR2FpbikgdGhpcy5idG5OZXh0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO2Vsc2Uge1xuICAgICAgICB2YXIgdCA9IHtcbiAgICAgICAgICBkZWxheVRpbWU6IDEuNVxuICAgICAgICB9O1xuICAgICAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIldpblZ3X2J0bk5leHREZWxheVwiLCB0aGlzLCBbdF0pO1xuICAgICAgICB0aGlzLmJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYy5pc1ZhbGlkKGUuYnRuTmV4dCkgJiYgKGUuYnRuTmV4dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlKTtcbiAgICAgICAgfSwgdC5kZWxheVRpbWUpO1xuICAgICAgICB0aGlzLnBvcE5leHRWaWV3KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVExXaW5Wd19wb3BOZXh0Vmlld1wiKVxuICBwb3BOZXh0VmlldyhlID0ge30pIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiVExXaW5Wd19wbGF5V2RTcGluZVwiKVxuICBwbGF5V2VsbERvbmVTcGluZUFuaW1hdGlvbigpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQgPSB0aGlzO1xuICAgIGlmICgobnVsbCA9PT0gKGUgPSB0aGlzLl9jb2xsZWN0cykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5sZW5ndGgpIDw9IDApIHtcbiAgICAgIHRoaXMuX3dlbGxEb25lU2tlbGV0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbGxlY3RDb250YWluZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3dlbGxEb25lU2tlbGV0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5fY29sbGVjdENvbnRhaW5lci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3dlbGxEb25lU2tlbGV0b24uc2V0RXZlbnRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHQuX2NvbGxlY3RDb250YWluZXIpKSB7XG4gICAgICAgICAgdC5fY29sbGVjdENvbnRhaW5lci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIHQuX2NvbGxlY3RDb250YWluZXIub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICB0Ll93ZWxsRG9uZVNrZWxldG9uLnNldEV2ZW50TGlzdGVuZXIobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLl93ZWxsRG9uZVNrZWxldG9uLCBcImluXCIsIGZhbHNlLCBudWxsLCAxIC8gdGhpcy5fYW5pbVNwZWVkUmF0ZSk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVExXaW5Wd19wbGF5TGlnaHRTcGluZVwiKVxuICBwbGF5TGlnaHRTcGluZUFuaW1hdGlvbigpIHtcbiAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuX2xpZ2h0U2tlbGV0b24sIFwiaW5pdFwiLCB0cnVlLCBudWxsLCAxIC8gdGhpcy5fYW5pbVNwZWVkUmF0ZSk7XG4gIH1cbiAgc2NoZWR1bGVXaW5BbmltYXRpb25zKCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHQgPSB0aGlzLl9hbmltU3BlZWRSYXRlO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUucGxheUxpZ2h0U3BpbmVBbmltYXRpb24oKTtcbiAgICAgIGUucGxheVdlbGxEb25lVGV4dEFuaW1hdGlvbigpO1xuICAgIH0sIDAuMiAqIHQpO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUucGxheVdlbGxEb25lT3ZlcmxheUFuaW1hdGlvbigpO1xuICAgICAgZS5wbGF5V2VsbERvbmVCZ0FuaW1hdGlvbigpO1xuICAgIH0sIDAuNSAqIHQpO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUucGxheVByb2dyZXNzQmFyQW5pbWF0aW9uKCk7XG4gICAgfSwgMC43ICogdCk7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGUuX2N1clJld2FyZC50eXBlID09PSBFVHJhdmVsUmV3YXJkVHlwZS5FQmFkZ2UgJiYgZS5fY3VyTHYgLSAxID09PSBlLl9jdXJSZXdhcmQubHYgJiYgZS5fY2FuR2FpbikgZS5idG5OZXh0LmFjdGl2ZSA9IGZhbHNlO2Vsc2Uge1xuICAgICAgICBlLmJ0bk5leHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZS5fYnRuTmV4dC5vcGFjaXR5ID0gMjU1O1xuICAgICAgICBlLnBsYXlCdXR0b25BbmltYXRpb24oKTtcbiAgICAgICAgZS5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGUudXBkYXRlRGlmZkJnV2lkdGgoKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgfSwgMC45ICogdCk7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgZS5wbGF5RGVzY0FuaW1hdGlvbigpO1xuICAgIH0sIDEuMSAqIHQpO1xuICB9XG4gIHBsYXlQcm9ncmVzc0JhckFuaW1hdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX3Byb2dyZXNzQmFyICYmIHRoaXMuX2N1clJld2FyZCkge1xuICAgICAgdmFyIHQgPSB0aGlzLl9hbmltU3BlZWRSYXRlO1xuICAgICAgdGhpcy5fcHJvZ3Jlc3NDb250YWluZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3Byb2dyZXNzQ29udGFpbmVyLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5fcHJvZ3Jlc3NDb250YWluZXIuc2NhbGUgPSAwLjc7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5fcHJvZ3Jlc3NDb250YWluZXIpO1xuICAgICAgY2MudHdlZW4odGhpcy5fcHJvZ3Jlc3NDb250YWluZXIpLnRvKDAuMyAqIHQsIHtcbiAgICAgICAgb3BhY2l0eTogMjU1LFxuICAgICAgICBzY2FsZTogMS4wNVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICB9KS50bygwLjE0ICogdCwge1xuICAgICAgICBzY2FsZTogMVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkSW5cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB2YXIgbyA9IHRoaXMuX3Byb2dyZXNzQmFyLmVuZFByb2dyZXNzLFxuICAgICAgICBuID0gY2MudHdlZW4odGhpcy5fcHJvZ3Jlc3NCYXIpLnRvKDAuMyAqIHQsIHtcbiAgICAgICAgICBwcm9ncmVzczogb1xuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluT3V0XG4gICAgICAgIH0pLFxuICAgICAgICBpID0gY2MudHdlZW4odGhpcy5fcHJvZ3Jlc3NCYXIpLmRlbGF5KDAuMTUgKiB0KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYy5pc1ZhbGlkKGUuX3Jld2FyZExldmVsQW5pbSkgJiYgR2FtZVV0aWxzLnBsYXlTcGluZShlLl9yZXdhcmRMZXZlbEFuaW0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJpblwiLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZS5lbnRlckNvbXBsZXRlZEFuaW0oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICBjYy50d2Vlbih0aGlzLl9wcm9ncmVzc0JhcikuZGVsYXkoMC42ICogdCkucGFyYWxsZWwobiwgaSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgZW50ZXJDb21wbGV0ZWRBbmltKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAodGhpcy5fY3VyUmV3YXJkICYmIHRoaXMuX2N1ckx2IC0gMSA9PT0gdGhpcy5fY3VyUmV3YXJkLmx2ICYmIHRoaXMuX2NhbkdhaW4pIGlmICh0aGlzLl9jdXJSZXdhcmQudHlwZSA9PT0gRVRyYXZlbFJld2FyZFR5cGUuRUJhZGdlKSBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiVHJhdmVsTWFwQ29udHJvbGxlclwiLCB7XG4gICAgICBpc1JlcGxhY2U6IHRydWUsXG4gICAgICBiYWRnZTogdHJ1ZVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0O1xuICAgICAgbnVsbCA9PT0gKHQgPSBlLmRlbGVnYXRlKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5jbG9zZSgpO1xuICAgIH0pO2Vsc2Uge1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlRyYXZlbEJveENvbnRyb2xsZXJcIiwge1xuICAgICAgICByZXdhcmQ6IHRoaXMuX2N1clJld2FyZFxuICAgICAgfSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgICAgICB2YXIgbyA9IHQub25VSURlc3Ryb3kuYmluZCh0KTtcbiAgICAgICAgICB0Lm9uVUlEZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbyh0KTtcbiAgICAgICAgICAgIGUucG9wTmV4dFZpZXcoe1xuICAgICAgICAgICAgICBoYXNCb3hSZXdhcmQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBlLmJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgIH0sIDAuNSk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVExXaW5Wd19wbGF5V2RBbmkyXCIpXG4gIHBsYXlXZWxsRG9uZVRleHRBbmltYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xibFRpdGxlKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2FuaW1TcGVlZFJhdGUsXG4gICAgICAgIHQgPSBjYy50d2Vlbih0aGlzLl9sYmxUaXRsZS5ub2RlKS50bygwLjIgKiBlLCB7XG4gICAgICAgICAgc2NhbGU6IDEuMyxcbiAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJxdWFkT3V0XCJcbiAgICAgICAgfSkudG8oMC4xNyAqIGUsIHtcbiAgICAgICAgICBzY2FsZTogMC44XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwic2luZUluT3V0XCJcbiAgICAgICAgfSkudG8oMC4xMyAqIGUsIHtcbiAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVucy5wdXNoKHQpO1xuICAgICAgdC5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBwbGF5V2VsbERvbmVPdmVybGF5QW5pbWF0aW9uKCkge31cbiAgQG1qLnRyYWl0RXZlbnQoXCJUTFdpblZ3X3BsYXlXZEFuaVwiKVxuICBwbGF5V2VsbERvbmVCZ0FuaW1hdGlvbigpIHtcbiAgICBpZiAodGhpcy5fd2VsbERvbmVCZykge1xuICAgICAgdmFyIGUgPSB0aGlzLl9hbmltU3BlZWRSYXRlLFxuICAgICAgICB0ID0gY2MudHdlZW4odGhpcy5fd2VsbERvbmVCZykudG8oMC43ICogZSwge1xuICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcImxpbmVhclwiXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVucy5wdXNoKHQpO1xuICAgICAgdC5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRMV2luVndfcGxheUJ0bkFuaVwiKVxuICBwbGF5QnV0dG9uQW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLl9idG5OZXh0KSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2FuaW1TcGVlZFJhdGUsXG4gICAgICAgIHQgPSBjYy50d2Vlbih0aGlzLl9idG5OZXh0KS50bygwLjIgKiBlLCB7XG4gICAgICAgICAgc2NhbGU6IDEuMDVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJxdWFkT3V0XCJcbiAgICAgICAgfSkudG8oMC4xNyAqIGUsIHtcbiAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcInF1YWRJblwiXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVucy5wdXNoKHQpO1xuICAgICAgdC5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBwbGF5RGVzY0FuaW1hdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGJsU3VidGl0bGUpIHtcbiAgICAgIHZhciBlID0gdGhpcy5fYW5pbVNwZWVkUmF0ZSxcbiAgICAgICAgdCA9IGNjLnR3ZWVuKHRoaXMuX2xibFN1YnRpdGxlLm5vZGUpLnRvKDAuMiAqIGUsIHtcbiAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJsaW5lYXJcIlxuICAgICAgICB9KTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbnMucHVzaCh0KTtcbiAgICAgIHQuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgcGxheUNsb3NlQW5pbWF0aW9uKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX2NvbnRlbnROb2RlKSB7XG4gICAgICB2YXIgbyA9IHRoaXMuX2FuaW1TcGVlZFJhdGU7XG4gICAgICB0aGlzLnN0b3BBbGxBbmltYXRpb25zKCk7XG4gICAgICBjYy50d2Vlbih0aGlzLl9jb250ZW50Tm9kZSkudG8oMC4xICogbywge1xuICAgICAgICBzY2FsZTogMS4wNVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwicXVhZE91dFwiXG4gICAgICB9KS50bygwLjIgKiBvLCB7XG4gICAgICAgIHNjYWxlOiAwLjMsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YWRJblwiXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5faXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdC5kZWxlZ2F0ZS5jbG9zZSgpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBudWxsID09IGUgfHwgZSgpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgY2MudHdlZW4odGhpcy5fbGlnaHRTa2VsZXRvbi5ub2RlKS50bygwLjEgKiBvLCB7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YWRPdXRcIlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7fSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgc3RvcEFsbEFuaW1hdGlvbnMoKSB7XG4gICAgdGhpcy5fY3VycmVudFR3ZWVucy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlICYmIGUuc3RvcCgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2N1cnJlbnRUd2VlbnMgPSBbXTtcbiAgICB0aGlzLnN0b3BNYXNrQW5pbWF0aW9uKCk7XG4gICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gIH1cbiAgcmVzZXRBbGxCdXR0b25TdGF0ZXMoKSB7XG4gICAgW3RoaXMuX2J0bkJnRXhwZXJ0LCB0aGlzLl9idG5CZ0V4cGVydFVwLCB0aGlzLl9idG5CZ0hhcmQsIHRoaXMuX2J0bkJnSGFyZFVwLCB0aGlzLl9idG5CZ05vcl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZSAmJiAoZS5vcGFjaXR5ID0gMCk7XG4gICAgfSk7XG4gICAgdGhpcy5fbGJsQnRuRGVzLm5vZGUub3BhY2l0eSA9IDA7XG4gIH1cbiAgc2hvd0RpZmZpY3VsdHlMYWJlbChlLCB0KSB7XG4gICAgdGhpcy5fbGJsQnRuRGVzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICBlICYmIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5fbGJsQnRuRGVzLm5vZGUsIGUsIHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVExXaW5Wd19kZXN0cm95XCIpXG4gIG9uRGVzdHJveSgpIHtcbiAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkJhbm5lckFkX05lZWRTaG93QmFubmVyXCIsIHRoaXMsIFtdKTtcbiAgICBzdXBlci5vbkRlc3Ryb3kgJiYgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbiAgc2V0QnRuTmV4dFpJbmRleChlKSB7XG4gICAgdGhpcy5fYnRuTmV4dCAmJiBjYy5pc1ZhbGlkKHRoaXMuX2J0bk5leHQpICYmICh0aGlzLl9idG5OZXh0LnpJbmRleCA9IGUpO1xuICB9XG59Il19