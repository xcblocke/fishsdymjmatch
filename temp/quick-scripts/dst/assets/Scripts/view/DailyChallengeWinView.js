
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/DailyChallengeWinView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvRGFpbHlDaGFsbGVuZ2VXaW5WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDNUMsMEVBQW9FO0FBQ3BFLDhEQUF5RDtBQUN6RCw2REFBd0Q7QUFDeEQsc0RBQXFFO0FBRXJFO0lBQW1ELHlDQUFNO0lBQXpEO1FBQUEscUVBbVdDO1FBbFdDLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsdUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxzQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixrQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixvQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixvQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixrQkFBWSxHQUFHO1lBQ2IsWUFBWSxFQUFFO2dCQUNaLFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFlBQVksRUFBRSxjQUFjO2FBQzdCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFlBQVksRUFBRSxTQUFTO2FBQ3hCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLFFBQVEsRUFBRSwr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QixDQUFDO3dFQVlsQztJQW1DRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7b0VBZ0JuQztJQWdFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7MERBSWhDO0lBbFdrQixxQkFBcUI7UUFEekMsRUFBRSxDQUFDLEtBQUs7T0FDWSxxQkFBcUIsQ0FtV3pDO0lBQUQsNEJBQUM7Q0FuV0QsQUFtV0MsQ0FuV2tELGdCQUFNLEdBbVd4RDtrQkFuV29CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVZpZXcgZnJvbSAnLi4vZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFUGFuZGFSZXN1bHQgfSBmcm9tICcuLi9kb3QvREdhbWVCdG5DbGljayc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5Q2hhbGxlbmdlV2luVmlldyBleHRlbmRzIFVJVmlldyB7XG4gIF9jb250ZW50Tm9kZSA9IG51bGw7XG4gIF9tYXNrTm9kZSA9IG51bGw7XG4gIF9tYXNrVHdlZW4gPSBudWxsO1xuICBfd2VsbERvbmVTa2VsZXRvbiA9IG51bGw7XG4gIF9saWdodFNrZWxldG9uID0gbnVsbDtcbiAgX3Njb3JlID0gMDtcbiAgX3NldHRsZW1lbnRTY29yZSA9IDA7XG4gIF9wZXJmZWN0TWF4U2NvcmUgPSAwO1xuICBfY2hhbGxlbmdlRGF0ZSA9IFwiXCI7XG4gIF9sYmxTY29yZSA9IG51bGw7XG4gIF9sYmxMdiA9IG51bGw7XG4gIF9idG5OZXh0ID0gbnVsbDtcbiAgX2xibFNjb3JlRGVzID0gbnVsbDtcbiAgX2xibFRpdGxlID0gbnVsbDtcbiAgX2xibFN1YnRpdGxlID0gbnVsbDtcbiAgX3dlbGxEb25lQmcgPSBudWxsO1xuICBfaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgX2N1cnJlbnRUd2VlbnMgPSBbXTtcbiAgX2FuaW1TcGVlZFJhdGUgPSAxO1xuICBfdGl0bGVDb25maWcgPSB7XG4gICAgdW5iZWxpZXZhYmxlOiB7XG4gICAgICB0aXRsZUtleTogXCJNYWhqb25nVGlsZXNfR2FtZUVuZF9OYW1lXzFfMlwiLFxuICAgICAgdGl0bGVEZWZhdWx0OiBcIlVuYmVsaWV2YWJsZVwiXG4gICAgfSxcbiAgICBwZXJmZWN0OiB7XG4gICAgICB0aXRsZUtleTogXCJNYWhqb25nVGlsZXNfR2FtZUVuZF9OYW1lXzJfMlwiLFxuICAgICAgdGl0bGVEZWZhdWx0OiBcIlBlcmZlY3RcIlxuICAgIH0sXG4gICAgd2VsbERvbmU6IHtcbiAgICAgIHRpdGxlS2V5OiBcIk1haGpvbmdUaWxlc19HYW1lRW5kX05hbWVfM18yXCIsXG4gICAgICB0aXRsZURlZmF1bHQ6IFwiV2VsbCBEb25lXCJcbiAgICB9XG4gIH07XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvZGFpbHkvRGFpbHlDaGFsbGVuZ2VXaW5WaWV3XCI7XG4gIGdldCBidG5OZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl9idG5OZXh0O1xuICB9XG4gIGdldENvbnRlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50Tm9kZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRDV2luVndfb25Mb2FkXCIpXG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5XaW4pO1xuICAgIHRoaXMuX2NvbnRlbnROb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKTtcbiAgICB0aGlzLl9tYXNrTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpO1xuICAgIHRoaXMuX21hc2tOb2RlLm9wYWNpdHkgPSAxOTA7XG4gICAgdGhpcy5fd2VsbERvbmVTa2VsZXRvbiA9IHRoaXMuX2NvbnRlbnROb2RlLmdldENoaWxkQnlOYW1lKFwic3Bpbl93ZWxsRG9uZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIHRoaXMuX2xpZ2h0U2tlbGV0b24gPSBjYy5maW5kKFwibGlnaHRfbm9kZS9zcGluX2xpZ2h0XCIsIHRoaXMuX2NvbnRlbnROb2RlKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIHRoaXMuX2xibFNjb3JlRGVzID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfc2NvcmVEZWNcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLl9sYmxTdWJ0aXRsZSA9IHRoaXMuX2NvbnRlbnROb2RlLmdldENoaWxkQnlOYW1lKFwibGJsX3N1YnRpdGxlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5fd2VsbERvbmVCZyA9IHRoaXMuX2NvbnRlbnROb2RlLmdldENoaWxkQnlOYW1lKFwic3ByX2JnX3dlbGxEb25lXCIpO1xuICAgIHRoaXMuX2J0bk5leHQgPSB0aGlzLl9jb250ZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9uZXh0XCIpO1xuICAgIHRoaXMuX2xibEx2ID0gY2MuZmluZChcImJ0bl9uZXh0L2NvbnRlbnQvbGJsX2x2XCIsIHRoaXMuX2NvbnRlbnROb2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuaW5pdER5bmFtaWNOb2RlKCk7XG4gICAgdGhpcy5pbml0Tm9kZVN0YXRlcygpO1xuICAgIHRoaXMuaGFuZGxlQmdNdXNpYygpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9idG5OZXh0LCB0aGlzLm9uQnRuTmV4dENsaWNrLmJpbmQodGhpcykpO1xuICAgIG1qLnRyaWdnZXJJbnRlcm5hbEV2ZW50KFwiQmFubmVyQWRfTmVlZEhpZGVCYW5uZXJcIiwgdGhpcywgW10pO1xuICB9XG4gIHNldEFuaW1TcGVlZFJhdGUoZSkge1xuICAgIHRoaXMuX2FuaW1TcGVlZFJhdGUgPSBlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRENXaW5Wd19iZ011c2ljXCIpXG4gIGhhbmRsZUJnTXVzaWMoKSB7XG4gICAgbWouYXVkaW9NYW5hZ2VyLmZhZGVCR01PdXQoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRDV2luVndfaW5pdER5Tm9kZVwiKVxuICBpbml0RHluYW1pY05vZGUoKSB7XG4gICAgdGhpcy5fbGJsVGl0bGUgPSB0aGlzLl9jb250ZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImxibF90aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuX2xibFNjb3JlID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfc2NvcmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRDV2luVndfbXZTdWJUaXRUb0J0bkJ0bVwiKVxuICBtb3ZlU3ViVGl0bGVUb0J0bk5leHRCb3R0b20oKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9idG5OZXh0LnBvc2l0aW9uLmNsb25lKCk7XG4gICAgdGhpcy5fbGJsU3VidGl0bGUubm9kZS5zZXRQb3NpdGlvbihlLngsIGUueSAtIDIxNyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEQ1dpblZ3X29uTmV4dENsaWNrXCIpXG4gIG9uQnRuTmV4dENsaWNrKCkge1xuICAgIGlmICh0aGlzLmRlbGVnYXRlICYmIGNjLmlzVmFsaWQodGhpcy5kZWxlZ2F0ZS5yb290VmlldykpIHtcbiAgICAgIERvdEdhbWVCdG5DbGljay5kb3RQYW5kYVJlc3VsdChFUGFuZGFSZXN1bHQuRGFpbHkpO1xuICAgICAgdGhpcy5kZWxlZ2F0ZS5jbG9zZSgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRDV2luVndfc2hvd1dpblZ3XCIpXG4gIHNob3dXaW5WaWV3KGUpIHtcbiAgICB2YXIgdCA9IGUuZGF0YTtcbiAgICB0aGlzLl9zY29yZSA9IHQuc2NvcmU7XG4gICAgdGhpcy5fc2V0dGxlbWVudFNjb3JlID0gdC5zZXR0bGVtZW50U2NvcmU7XG4gICAgdGhpcy5fcGVyZmVjdE1heFNjb3JlID0gdC5wZXJmZWN0TWF4U2NvcmU7XG4gICAgdGhpcy5fY2hhbGxlbmdlRGF0ZSA9IHQuY2hhbGxlbmdlRGF0ZTtcbiAgICB0aGlzLl9sYmxTY29yZS5zdHJpbmcgPSB0aGlzLl9zZXR0bGVtZW50U2NvcmUudG9TdHJpbmcoKTtcbiAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMuX2xibEx2Lm5vZGUsIFwiQ29udGludWVcIiwgXCJEYWlseUNoYWxsZW5nZV9Db250aW51ZVwiKTtcbiAgICB0aGlzLl9sYmxTdWJ0aXRsZS5zdHJpbmcgPSBHYW1lVXRpbHMuZm9ybWF0RGF0ZVN0cmluZ1RvTGFuZ3VhZ2UodGhpcy5fY2hhbGxlbmdlRGF0ZSkgfHwgXCJcIjtcbiAgICB2YXIgbyA9IHRoaXMuZ2V0VGl0bGVUeXBlKHRoaXMuX3Njb3JlLCB0aGlzLl9wZXJmZWN0TWF4U2NvcmUpO1xuICAgIHRoaXMuX2xibFRpdGxlICYmIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5fbGJsVGl0bGUubm9kZSwgby50aXRsZURlZmF1bHQsIG8udGl0bGVLZXkpO1xuICAgIHRoaXMucGxheVdpbkFuaW1hdGlvblNlcXVlbmNlKCk7XG4gIH1cbiAgcGxheU1hc2tGYWRlSW4oZSA9IDAuMikge1xuICAgIHZhciB0O1xuICAgIGlmICh0aGlzLl9tYXNrTm9kZSkge1xuICAgICAgdGhpcy5zdG9wTWFza0FuaW1hdGlvbigpO1xuICAgICAgdmFyIG8gPSBudWxsID09PSAodCA9IHRoaXMubm9kZS5wYXJlbnQpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q2hpbGRCeU5hbWUoXCJCbHVyQmdcIik7XG4gICAgICBjYy5pc1ZhbGlkKG8pICYmIChvLm9wYWNpdHkgPSAwKTtcbiAgICB9XG4gIH1cbiAgcGxheU1hc2tGYWRlT3V0KGUgPSAwLjIpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX21hc2tOb2RlKSB7XG4gICAgICB0aGlzLnN0b3BNYXNrQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLl9tYXNrVHdlZW4gPSBjYy50d2Vlbih0aGlzLl9tYXNrTm9kZSkudG8oZSwge1xuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJzaW5lSW5cIlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQuX21hc2tUd2VlbiA9IG51bGw7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBzdG9wTWFza0FuaW1hdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbWFza1R3ZWVuKSB7XG4gICAgICB0aGlzLl9tYXNrVHdlZW4uc3RvcCgpO1xuICAgICAgdGhpcy5fbWFza1R3ZWVuID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgaW5pdE5vZGVTdGF0ZXMoKSB7XG4gICAgaWYgKHRoaXMuX2xibFRpdGxlKSB7XG4gICAgICB0aGlzLl9sYmxUaXRsZS5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5fbGJsVGl0bGUubm9kZS5zY2FsZSA9IDAuMztcbiAgICB9XG4gICAgdGhpcy5fd2VsbERvbmVCZyAmJiAodGhpcy5fd2VsbERvbmVCZy5vcGFjaXR5ID0gMCk7XG4gICAgdGhpcy5fbGJsU2NvcmVEZXMgJiYgKHRoaXMuX2xibFNjb3JlRGVzLm5vZGUub3BhY2l0eSA9IDApO1xuICAgIGlmICh0aGlzLl9sYmxTY29yZSkge1xuICAgICAgdGhpcy5fbGJsU2NvcmUubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuX2xibFNjb3JlLm5vZGUuc2NhbGUgPSAxLjY7XG4gICAgfVxuICAgIGlmICh0aGlzLl9idG5OZXh0KSB7XG4gICAgICB0aGlzLl9idG5OZXh0LnNjYWxlID0gMC42O1xuICAgICAgdGhpcy5fYnRuTmV4dC5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuX2J0bk5leHQuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX2xibFN1YnRpdGxlICYmICh0aGlzLl9sYmxTdWJ0aXRsZS5ub2RlLm9wYWNpdHkgPSAwKTtcbiAgfVxuICBnZXRUaXRsZVR5cGUoZSwgdCkge1xuICAgIGlmICh0IDw9IDApIHJldHVybiB0aGlzLl90aXRsZUNvbmZpZy53ZWxsRG9uZTtcbiAgICB2YXIgbyA9IGUgLyB0O1xuICAgIHJldHVybiBvID49IDEgPyB0aGlzLl90aXRsZUNvbmZpZy51bmJlbGlldmFibGUgOiBvID49IDAuOSA/IHRoaXMuX3RpdGxlQ29uZmlnLnBlcmZlY3QgOiB0aGlzLl90aXRsZUNvbmZpZy53ZWxsRG9uZTtcbiAgfVxuICBwbGF5V2luQW5pbWF0aW9uU2VxdWVuY2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5faXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wbGF5TWFza0ZhZGVJbigpO1xuICAgICAgdGhpcy5wbGF5V2VsbERvbmVTcGluZUFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5zY2hlZHVsZVdpbkFuaW1hdGlvbnMoKTtcbiAgICAgIHRoaXMuZGVsYXlFbmFibGVCdG5OZXh0KCk7XG4gICAgICB0aGlzLnBvcE5leHRWaWV3KCk7XG4gICAgfVxuICB9XG4gIGRlbGF5RW5hYmxlQnRuTmV4dCgpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0ge1xuICAgICAgICBkZWxheVRpbWU6IDBcbiAgICAgIH07XG4gICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJXaW5Wd19idG5OZXh0RGVsYXlcIiwgdGhpcywgW3RdKTtcbiAgICB0aGlzLmJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgY2MuaXNWYWxpZChlLmJ0bk5leHQpICYmIChlLmJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZSk7XG4gICAgfSwgdC5kZWxheVRpbWUgKiB0aGlzLl9hbmltU3BlZWRSYXRlKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRDV2luVndfcG9wTmV4dFZpZXdcIilcbiAgcG9wTmV4dFZpZXcoZSA9IHt9KSB7fVxuICBAbWoudHJhaXRFdmVudChcIkRDV2luVndfcGxheVdkU3BpbmVcIilcbiAgcGxheVdlbGxEb25lU3BpbmVBbmltYXRpb24oKSB7XG4gICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLl93ZWxsRG9uZVNrZWxldG9uLCBcImluXCIsIGZhbHNlLCBudWxsLCAxIC8gdGhpcy5fYW5pbVNwZWVkUmF0ZSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEQ1dpblZ3X3BsYXlMaWdodFNwaW5lXCIpXG4gIHBsYXlMaWdodFNwaW5lQW5pbWF0aW9uKCkge1xuICAgIEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5fbGlnaHRTa2VsZXRvbiwgXCJpbml0XCIsIHRydWUsIG51bGwsIDEgLyB0aGlzLl9hbmltU3BlZWRSYXRlKTtcbiAgfVxuICBzY2hlZHVsZVdpbkFuaW1hdGlvbnMoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IHRoaXMuX2FuaW1TcGVlZFJhdGU7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgZS5wbGF5TGlnaHRTcGluZUFuaW1hdGlvbigpO1xuICAgICAgZS5wbGF5V2VsbERvbmVUZXh0QW5pbWF0aW9uKCk7XG4gICAgfSwgMC4yICogdCk7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgZS5wbGF5V2VsbERvbmVCZ0FuaW1hdGlvbigpO1xuICAgICAgZS5wbGF5U2NvcmVEZXNjQW5pbWF0aW9uKCk7XG4gICAgfSwgMC41ICogdCk7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgZS5wbGF5U2NvcmVBbmltYXRpb24oKTtcbiAgICB9LCAwLjcgKiB0KTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBlLl9idG5OZXh0Lm9wYWNpdHkgPSAyNTU7XG4gICAgICBlLl9idG5OZXh0LmFjdGl2ZSA9IHRydWU7XG4gICAgICBlLnBsYXlCdXR0b25BbmltYXRpb24oKTtcbiAgICB9LCAxLjMzICogdCk7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgZS5wbGF5RGVzY0FuaW1hdGlvbigpO1xuICAgIH0sIDEuNTMgKiB0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRDV2luVndfcGxheVdkQW5pMlwiKVxuICBwbGF5V2VsbERvbmVUZXh0QW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLl9sYmxUaXRsZSkge1xuICAgICAgdmFyIGUgPSB0aGlzLl9hbmltU3BlZWRSYXRlLFxuICAgICAgICB0ID0gY2MudHdlZW4odGhpcy5fbGJsVGl0bGUubm9kZSkudG8oMC4yICogZSwge1xuICAgICAgICAgIHNjYWxlOiAxLjMsXG4gICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwicXVhZE91dFwiXG4gICAgICAgIH0pLnRvKDAuMTcgKiBlLCB7XG4gICAgICAgICAgc2NhbGU6IDAuOFxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICAgIH0pLnRvKDAuMTMgKiBlLCB7XG4gICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJzaW5lSW5PdXRcIlxuICAgICAgICB9KTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbnMucHVzaCh0KTtcbiAgICAgIHQuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEQ1dpblZ3X3BsYXlXZEFuaVwiKVxuICBwbGF5V2VsbERvbmVCZ0FuaW1hdGlvbigpIHtcbiAgICBpZiAodGhpcy5fd2VsbERvbmVCZykge1xuICAgICAgdmFyIGUgPSB0aGlzLl9hbmltU3BlZWRSYXRlLFxuICAgICAgICB0ID0gY2MudHdlZW4odGhpcy5fd2VsbERvbmVCZykudG8oMC43ICogZSwge1xuICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcImxpbmVhclwiXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVucy5wdXNoKHQpO1xuICAgICAgdC5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBwbGF5U2NvcmVEZXNjQW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLl9sYmxTY29yZURlcykge1xuICAgICAgdmFyIGUgPSB0aGlzLl9hbmltU3BlZWRSYXRlLFxuICAgICAgICB0ID0gY2MudHdlZW4odGhpcy5fbGJsU2NvcmVEZXMubm9kZSkudG8oMC4yICogZSwge1xuICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcImxpbmVhclwiXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVucy5wdXNoKHQpO1xuICAgICAgdC5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBwbGF5U2NvcmVBbmltYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xibFNjb3JlKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2FuaW1TcGVlZFJhdGUsXG4gICAgICAgIHQgPSBjYy50d2Vlbih0aGlzLl9sYmxTY29yZS5ub2RlKS50bygwLjIgKiBlLCB7XG4gICAgICAgICAgc2NhbGU6IDAuNyxcbiAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJsaW5lYXJcIlxuICAgICAgICB9KS50bygwLjEzICogZSwge1xuICAgICAgICAgIHNjYWxlOiAxLjA1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwic2luZUluT3V0XCJcbiAgICAgICAgfSkudG8oMC4xICogZSwge1xuICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwic2luZUluT3V0XCJcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW5zLnB1c2godCk7XG4gICAgICB0LnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRENXaW5Wd19wbGF5QnRuQW5pXCIpXG4gIHBsYXlCdXR0b25BbmltYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuX2J0bk5leHQpIHtcbiAgICAgIHZhciBlID0gdGhpcy5fYW5pbVNwZWVkUmF0ZSxcbiAgICAgICAgdCA9IGNjLnR3ZWVuKHRoaXMuX2J0bk5leHQpLnRvKDAuMiAqIGUsIHtcbiAgICAgICAgICBzY2FsZTogMS4wNVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcInF1YWRPdXRcIlxuICAgICAgICB9KS50bygwLjE3ICogZSwge1xuICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwicXVhZEluXCJcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW5zLnB1c2godCk7XG4gICAgICB0LnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIHBsYXlEZXNjQW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLl9sYmxTdWJ0aXRsZSkge1xuICAgICAgdmFyIGUgPSB0aGlzLl9hbmltU3BlZWRSYXRlLFxuICAgICAgICB0ID0gY2MudHdlZW4odGhpcy5fbGJsU3VidGl0bGUubm9kZSkudG8oMC4yICogZSwge1xuICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcImxpbmVhclwiXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVucy5wdXNoKHQpO1xuICAgICAgdC5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBwbGF5Q2xvc2VBbmltYXRpb24oZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAodGhpcy5fY29udGVudE5vZGUpIHtcbiAgICAgIHZhciBvID0gdGhpcy5fYW5pbVNwZWVkUmF0ZTtcbiAgICAgIHRoaXMuc3RvcEFsbEFuaW1hdGlvbnMoKTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMuX2NvbnRlbnROb2RlKS50bygwLjEgKiBvLCB7XG4gICAgICAgIHNjYWxlOiAxLjA1XG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJxdWFkT3V0XCJcbiAgICAgIH0pLnRvKDAuMiAqIG8sIHtcbiAgICAgICAgc2NhbGU6IDAuMyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwicXVhZEluXCJcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICB0Ll9pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICB0LmRlbGVnYXRlLmNsb3NlKCk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICBjYy50d2Vlbih0aGlzLl9saWdodFNrZWxldG9uLm5vZGUpLnRvKDAuMSAqIG8sIHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwicXVhZE91dFwiXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHt9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBzdG9wQWxsQW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLl9jdXJyZW50VHdlZW5zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUgJiYgZS5zdG9wKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fY3VycmVudFR3ZWVucyA9IFtdO1xuICAgIHRoaXMuc3RvcE1hc2tBbmltYXRpb24oKTtcbiAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgfVxuICBoaWRlQ29udGVudCgpIHtcbiAgICB0aGlzLl9jb250ZW50Tm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVCdG5OZXh0KCk7XG4gIH1cbiAgc2hvd0NvbnRlbnQoKSB7XG4gICAgdGhpcy5fY29udGVudE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmVuYWJsZUJ0bk5leHQoKTtcbiAgfVxuICBkaXNhYmxlQnRuTmV4dCgpIHtcbiAgICB0aGlzLl9idG5OZXh0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICB9XG4gIGVuYWJsZUJ0bk5leHQoKSB7XG4gICAgdGhpcy5fYnRuTmV4dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRENXaW5Wd19kZXN0cm95XCIpXG4gIG9uRGVzdHJveSgpIHtcbiAgICBzdXBlci5vbkRlc3Ryb3kgJiYgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJCYW5uZXJBZF9OZWVkU2hvd0Jhbm5lclwiLCB0aGlzLCBbXSk7XG4gIH1cbn0iXX0=