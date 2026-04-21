import UIView from '../framework/ui/UIView';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import GameUtils from '../core/simulator/util/GameUtils';
import I18NStrings from '../framework/data/I18NStrings';
import { DotGameBtnClick, EPandaResult } from '../dot/DGameBtnClick';
@mj.class
export default class DailyChallengeWinView extends UIView {
  _contentNode = null;
  _maskNode = null;
  _maskTween = null;
  _wellDoneSkeleton = null;
  _lightSkeleton = null;
  _score = 0;
  _settlementScore = 0;
  _perfectMaxScore = 0;
  _challengeDate = "";
  _lblScore = null;
  _lblLv = null;
  _btnNext = null;
  _lblScoreDes = null;
  _lblTitle = null;
  _lblSubtitle = null;
  _wellDoneBg = null;
  _isAnimating = false;
  _currentTweens = [];
  _animSpeedRate = 1;
  _titleConfig = {
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
  static prefabUrl = "prefabs/daily/DailyChallengeWinView";
  get btnNext() {
    return this._btnNext;
  }
  getContentNode() {
    return this._contentNode;
  }
  @mj.traitEvent("DCWinVw_onLoad")
  onLoad() {
    super.onLoad.call(this);
    mj.audioManager.playEffect(EAudioID.Win);
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
  }
  setAnimSpeedRate(e) {
    this._animSpeedRate = e;
  }
  @mj.traitEvent("DCWinVw_bgMusic")
  handleBgMusic() {
    mj.audioManager.fadeBGMOut();
  }
  @mj.traitEvent("DCWinVw_initDyNode")
  initDynamicNode() {
    this._lblTitle = this._contentNode.getChildByName("lbl_title").getComponent(cc.Label);
    this._lblScore = this._contentNode.getChildByName("lbl_score").getComponent(cc.Label);
  }
  @mj.traitEvent("DCWinVw_mvSubTitToBtnBtm")
  moveSubTitleToBtnNextBottom() {
    var e = this._btnNext.position.clone();
    this._lblSubtitle.node.setPosition(e.x, e.y - 217);
  }
  @mj.traitEvent("DCWinVw_onNextClick")
  onBtnNextClick() {
    if (this.delegate && cc.isValid(this.delegate.rootView)) {
      DotGameBtnClick.dotPandaResult(EPandaResult.Daily);
      this.delegate.close();
    }
  }
  @mj.traitEvent("DCWinVw_showWinVw")
  showWinView(e) {
    var t = e.data;
    this._score = t.score;
    this._settlementScore = t.settlementScore;
    this._perfectMaxScore = t.perfectMaxScore;
    this._challengeDate = t.challengeDate;
    this._lblScore.string = this._settlementScore.toString();
    I18NStrings.setText(this._lblLv.node, "Continue", "DailyChallenge_Continue");
    this._lblSubtitle.string = GameUtils.formatDateStringToLanguage(this._challengeDate) || "";
    var o = this.getTitleType(this._score, this._perfectMaxScore);
    this._lblTitle && I18NStrings.setText(this._lblTitle.node, o.titleDefault, o.titleKey);
    this.playWinAnimationSequence();
  }
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
      this._btnNext.active = false;
    }
    this._lblSubtitle && (this._lblSubtitle.node.opacity = 0);
  }
  getTitleType(e, t) {
    if (t <= 0) return this._titleConfig.wellDone;
    var o = e / t;
    return o >= 1 ? this._titleConfig.unbelievable : o >= 0.9 ? this._titleConfig.perfect : this._titleConfig.wellDone;
  }
  playWinAnimationSequence() {
    if (!this._isAnimating) {
      this._isAnimating = true;
      this.playMaskFadeIn();
      this.playWellDoneSpineAnimation();
      this.scheduleWinAnimations();
      this.delayEnableBtnNext();
      this.popNextView();
    }
  }
  delayEnableBtnNext() {
    var e = this,
      t = {
        delayTime: 0
      };
    mj.triggerInternalEvent("WinVw_btnNextDelay", this, [t]);
    this.btnNext.getComponent(cc.Button).interactable = false;
    this.scheduleOnce(function () {
      cc.isValid(e.btnNext) && (e.btnNext.getComponent(cc.Button).interactable = true);
    }, t.delayTime * this._animSpeedRate);
  }
  @mj.traitEvent("DCWinVw_popNextView")
  popNextView(e = {}) {}
  @mj.traitEvent("DCWinVw_playWdSpine")
  playWellDoneSpineAnimation() {
    GameUtils.playSpine(this._wellDoneSkeleton, "in", false, null, 1 / this._animSpeedRate);
  }
  @mj.traitEvent("DCWinVw_playLightSpine")
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
  }
  @mj.traitEvent("DCWinVw_playWdAni2")
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
  @mj.traitEvent("DCWinVw_playWdAni")
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
  @mj.traitEvent("DCWinVw_playBtnAni")
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
  @mj.traitEvent("DCWinVw_destroy")
  onDestroy() {
    super.onDestroy && super.onDestroy.call(this);
    mj.triggerInternalEvent("BannerAd_NeedShowBanner", this, []);
  }
}