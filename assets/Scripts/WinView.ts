import UIView from './framework/ui/UIView';
import I18NStrings from './framework/data/I18NStrings';
import { DotGameBtnClick } from './dot/DGameBtnClick';
import ExtractTool from './core/extractQuestion/ExtractTool';
import { EAudioID } from './core/simulator/constant/GameTypeEnums';
import { EVT_MSG_KEY_SIMULATOR_NEXTLEVEL } from './core/simulator/events/SimulatorEvent';
import GameUtils from './core/simulator/util/GameUtils';
import UserModel from './gamePlay/user/UserModel';
@mj.class
export default class WinView extends UIView {
  _contentNode = null;
  _maskNode = null;
  _maskTween = null;
  _wellDoneSkeleton = null;
  _lightSkeleton = null;
  _curLv = 0;
  _score = 0;
  _settlementScore = 0;
  _perfectMaxScore = 0;
  _lblScore = null;
  _lblLv = null;
  _btnNext = null;
  _hardType = 0;
  _lblScoreDes = null;
  _lblTitle = null;
  _lblTitle2 = null;
  _lblSubtitle = null;
  _wellDoneBg = null;
  _btnBgNor = null;
  _btnBgExpert = null;
  _btnBgHard = null;
  _btnBgExpertUp = null;
  _btnBgHardUp = null;
  _lblBtnDes = null;
  _isAnimating = false;
  _currentTweens = [];
  _animSpeedRate = 1;
  _titleConfig = {
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
  static prefabUrl = "prefabs/ui/WinView";
  get maskNode() {
    return this._maskNode;
  }
  get lblLv() {
    return this._lblLv;
  }
  get btnNext() {
    return this._btnNext;
  }
  get btnNextNode() {
    var e;
    return null === (e = this._btnNext) || void 0 === e ? void 0 : e.getChildByName("content");
  }
  get lblBtnDes() {
    return this._lblBtnDes;
  }
  getContentNode() {
    return this._contentNode;
  }
  @mj.traitEvent("WinVw_onLoad")
  onLoad() {
    super.onLoad.call(this);
    UserModel.getInstance().updateGameActiveDays();
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
  }
  @mj.traitEvent("WinVw_getSubSize")
  getSubtitleContentSize() {
    return cc.size(1000, 82);
  }
  setAnimSpeedRate(e) {
    this._animSpeedRate = e;
  }
  @mj.traitEvent("WinVw_getDescAniDly")
  getDescAnimationDelay() {
    return 1.53;
  }
  @mj.traitEvent("WinVw_getBtnNextDly")
  getBtnNextDelay() {
    return 1.33;
  }
  @mj.traitEvent("WinVw_playWiEff")
  playWiEffect() {
    mj.audioManager.playEffect(EAudioID.Win);
  }
  @mj.traitEvent("WinVw_bgMusic")
  handleBgMusic() {
    mj.audioManager.fadeBGMOut();
  }
  @mj.traitEvent("WinVw_initDyNode")
  initDynamicNode() {
    var e, t, o;
    this._lblTitle = null === (e = this._contentNode.getChildByName("lbl_title")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
    this._lblTitle2 = null === (t = this._contentNode.getChildByName("lbl_title2")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
    this._lblScore = null === (o = this._contentNode.getChildByName("lbl_score")) || void 0 === o ? void 0 : o.getComponent(cc.Label);
  }
  @mj.traitEvent("WinVw_mvSubTitToBtnBtm")
  moveSubTitleToBtnNextBottom() {
    var e = this._btnNext.position.clone();
    this._lblSubtitle.node.setPosition(e.x, e.y - 217);
  }
  @mj.traitEvent("WinVw_onNextClick")
  onBtnNextClick() {
    if (this.node && cc.isValid(this.node)) {
      DotGameBtnClick.doNextLevel(this._curLv);
      this.playCloseAnimation(function () {
        mj.EventManager.emit(EVT_MSG_KEY_SIMULATOR_NEXTLEVEL);
      });
    }
  }
  @mj.traitEvent("WinVw_showWinVw")
  showWinView(e) {
    var t = e.data;
    this._curLv = t.curLv;
    this._score = t.score;
    this._settlementScore = t.settlementScore;
    this._perfectMaxScore = t.perfectMaxScore;
    this._lblScore && I18NStrings.setText(this._lblScore.node, this._settlementScore.toString());
    I18NStrings.setText(this._lblLv.node, "Level " + this._curLv.toString(), "MahjongTiles_GameEnd_Level", [this._curLv]);
    var o = this.getTitleType(this._score, this._perfectMaxScore);
    this._lblTitle && I18NStrings.setText(this._lblTitle.node, o.titleDefault, o.titleKey);
    this._lblTitle2 && I18NStrings.setText(this._lblTitle2.node, o.titleDefault, o.titleKey);
    I18NStrings.setText(this._lblSubtitle.node, o.subtitleDefault, o.subtitleKey);
    this._titleType = null == o ? void 0 : o.titleDefault;
    this.playWinAnimationSequence();
    var n = ExtractTool.getInstance().isExpertUI(this._curLv),
      i = ExtractTool.getInstance().isHardUI(this._curLv);
    this.resetAllButtonStates();
    if (n) {
      this._btnBgExpert.opacity = 255;
      this._btnBgExpertUp.opacity = 255;
      this.showDifficultyLabel("Expert", "MahjongTiles_VeryHard");
      this._hardType = 2;
    } else if (i) {
      this._btnBgHard.opacity = 255;
      this._btnBgHardUp.opacity = 255;
      this.showDifficultyLabel("Hard", "MahjongTiles_Hard");
      this._hardType = 1;
    } else {
      this._btnBgNor.opacity = 255;
      this._hardType = 0;
    }
  }
  updateDiffBgWidth() {
    if (cc.isValid(this._lblBtnDes) && this.lblBtnDes.node.activeInHierarchy && this.lblBtnDes.node.opacity > 0) {
      this._btnBgExpertUp.width = this._lblBtnDes.node.width + 50;
      this._btnBgHardUp.width = this._lblBtnDes.node.width + 50;
    }
  }
  @mj.traitEvent("WinVw_playMaskFadeIn")
  playMaskFadeIn(e = 0.2) {
    var t;
    if (this._maskNode) {
      this.stopMaskAnimation();
      var o = null === (t = this.node.parent) || void 0 === t ? void 0 : t.getChildByName("BlurBg");
      cc.isValid(o) && (o.opacity = 0);
    }
  }
  playMaskFadeOut(e = 0.2) {
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
  }
  stopMaskAnimation() {
    if (this._maskTween) {
      this._maskTween.stop();
      this._maskTween = null;
    }
  }
  initNodeStates() {
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
  }
  getTitleType(e, t) {
    if (t <= 0) return this.getTitleConfig("wellDone");
    var o = e / t;
    return o >= 1 ? this.getTitleConfig("unbelievable") : o >= 0.9 ? this.getTitleConfig("perfect") : this.getTitleConfig("wellDone");
  }
  getTitleConfig(e) {
    var t = this._titleConfig[e],
      o = this.getRandomSubtitle(t.subtitles);
    return {
      titleKey: t.titleKey,
      titleDefault: t.titleDefault,
      subtitleKey: o.key,
      subtitleDefault: o.default
    };
  }
  getRandomSubtitle(e) {
    if (!e || 0 === e.length) return {
      key: "",
      default: ""
    };
    var t = Math.floor(Math.random() * e.length);
    if (void 0 !== mj.getClassByName("LanguageSelectorTrait")) {
      var o = e[t];
      if (o.key) return o;
      var n = e.filter(function (e) {
        return e.key;
      });
      return n[Math.floor(Math.random() * n.length)];
    }
    return e[t];
  }
  createDefeatPercentageText(e, t) {
    return "<color=#edab03>" + t.replace("{percentage}", "<color=#ff6e4a>" + e + "%</color>") + "</color>";
  }
  @mj.traitEvent("WinVw_playWinAnimSeq")
  playWinAnimationSequence() {
    if (!this._isAnimating) {
      this._isAnimating = true;
      this.playMaskFadeIn();
      this.playWellDoneSpineAnimation();
      this.scheduleWinAnimations();
      this.popNextView();
    }
  }
  @mj.traitEvent("WinVw_popNextView")
  popNextView(e = {}) {}
  @mj.traitEvent("WinVw_playWdSpine")
  playWellDoneSpineAnimation() {
    cc.isValid(this._wellDoneSkeleton) && (this._wellDoneSkeleton.node.active = true);
    GameUtils.playSpine(this._wellDoneSkeleton, "in", false, null, 1 / this._animSpeedRate);
  }
  @mj.traitEvent("WinVw_playLightSpine")
  playLightSpineAnimation() {
    GameUtils.playSpine(this._lightSkeleton, "init", true, null, 1 / this._animSpeedRate);
  }
  scheduleWinAnimations() {
    var e = this,
      t = this._animSpeedRate;
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
  }
  @mj.traitEvent("WinVw_playWdAni2")
  playWellDoneTextAnimation() {
    if (this._lblTitle) {
      var e = this._animSpeedRate,
        t = cc.tween(this._lblTitle.node).to(0.2 * e, {
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
  }
  playWellDoneOverlayAnimation() {}
  @mj.traitEvent("WinVw_playWdAni")
  playWellDoneBgAnimation() {
    if (this._wellDoneBg) {
      var e = this._animSpeedRate,
        t = cc.tween(this._wellDoneBg).to(0.7 * e, {
          opacity: 255
        }, {
          easing: "linear"
        });
      this._currentTweens.push(t);
      t.start();
    }
  }
  playScoreDescAnimation() {
    if (this._lblScoreDes) {
      var e = this._animSpeedRate,
        t = cc.tween(this._lblScoreDes.node).to(0.2 * e, {
          opacity: 255
        }, {
          easing: "linear"
        });
      this._currentTweens.push(t);
      t.start();
    }
  }
  @mj.traitEvent("WinVw_playScoreAni")
  playScoreAnimation() {
    if (this._lblScore) {
      var e = this._animSpeedRate,
        t = cc.tween(this._lblScore.node).to(0.2 * e, {
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
  }
  @mj.traitEvent("WinVw_playBtnAni")
  playButtonAnimation() {
    if (this._btnNext) {
      var e = this._animSpeedRate,
        t = cc.tween(this._btnNext).to(0.2 * e, {
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
  }
  playDescAnimation() {
    if (this._lblSubtitle) {
      var e = this._animSpeedRate,
        t = cc.tween(this._lblSubtitle.node).to(0.2 * e, {
          opacity: 255
        }, {
          easing: "linear"
        });
      this._currentTweens.push(t);
      t.start();
    }
  }
  playCloseAnimation(e) {
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
      }).call(function () {}).start();
    }
  }
  stopAllAnimations() {
    this._currentTweens.forEach(function (e) {
      e && e.stop();
    });
    this._currentTweens = [];
    this.stopMaskAnimation();
    this.unscheduleAllCallbacks();
  }
  hideContent() {
    this._contentNode.active = false;
    this.disableBtnNext();
  }
  showContent() {
    this._contentNode.active = true;
    this.enableBtnNext();
  }
  disableBtnNext() {
    this._btnNext.getComponent(cc.Button).interactable = false;
  }
  enableBtnNext() {
    this._btnNext.getComponent(cc.Button).interactable = true;
  }
  resetAllButtonStates() {
    [this._btnBgExpert, this._btnBgExpertUp, this._btnBgHard, this._btnBgHardUp, this._btnBgNor].forEach(function (e) {
      e && (e.opacity = 0);
    });
    this._lblBtnDes.node.opacity = 0;
  }
  showDifficultyLabel(e, t) {
    this._lblBtnDes.node.opacity = 255;
    e && I18NStrings.setText(this._lblBtnDes.node, e, t);
  }
  @mj.traitEvent("WinVw_destroy")
  onDestroy() {
    super.onDestroy && super.onDestroy.call(this);
    mj.triggerInternalEvent("BannerAd_NeedShowBanner", this, []);
  }
  setBtnNextZIndex(e) {
    this._btnNext && cc.isValid(this._btnNext) && (this._btnNext.zIndex = e);
  }
}