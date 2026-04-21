import BaseUI from '../framework/ui/BaseUI';
import AdManager from '../base/ad/AdManager';
import { EAdPosition } from '../gamePlay/dot/DGameAdShow';
import GameUtils from '../core/simulator/util/GameUtils';
import { DotGameAdShowStage } from '../gamePlay/dot/DGameAdShowStage';
import { GameInteraction } from '../GameInteraction/GameInteraction';
import { EGameInputEnum } from '../simulator/constant/GameInputEnum';
export enum EMagnetState {
  ExitAnimation = 0,
  EnterAnimation = 1,
  Countdown = 2,
  PlayingAd = 3,
  Clearing = 4,
}
@mj.class
export default class Tile2MagnetItem extends BaseUI {
  _progressNode = null;
  _progressBar = null;
  _progressBarIcon = null;
  _progressBgSpine = null;
  _btnAd = null;
  _iconAdSpine = null;
  _state = EMagnetState.ExitAnimation;
  _aniInfo = null;
  _countdownDuration = 2;
  _isEnableTimeDown = false;
  _elapsedTime = 0;
  static prefabUrl = "prefabs/EffectMagnet";
  static bundleName = "l_magnet";
  @mj.traitEvent("T2MagnetItem_onLoad")
  onLoad() {
    var t;
    super.onLoad.call(this);
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
  }
  getState() {
    return this._state;
  }
  setState(e) {
    this._state;
    this._state = e;
  }
  update(e) {
    if (this._isEnableTimeDown) {
      this._elapsedTime += e;
      var t = Math.min(this._elapsedTime / this._countdownDuration, 1);
      this._progressBar && (this._progressBar.progress = t);
      t >= 1 && this.onCountdownFinish();
    }
  }
  @mj.traitEvent("T2MagnetItem_enterAni")
  playEnterAnimation(e) {
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
        GameUtils.playSpine(this._progressBgSpine, "in", false, function () {
          if (cc.isValid(t.node)) {
            t._btnAd.interactable = true;
            GameUtils.playSpine(t._progressBgSpine, "init", true, null);
            GameUtils.playSpine(t._iconAdSpine, "init", true, null);
            t.startCountdown();
          }
        });
        GameUtils.playSpine(this._iconAdSpine, "in", false);
      }
    }
  }
  startCountdown() {
    this.setState(EMagnetState.Countdown);
    this._elapsedTime = 0;
    this._isEnableTimeDown = true;
    this._progressBar && (this._progressBar.progress = 0);
  }
  stopCountdown() {
    this._isEnableTimeDown = false;
    this._elapsedTime = 0;
  }
  onCountdownFinish() {
    var e = this;
    this.stopCountdown();
    this.setState(EMagnetState.ExitAnimation);
    if (this.node && cc.isValid(this.node)) {
      this._btnAd && (this._btnAd.interactable = false);
      this._progressBarIcon && (this._progressBarIcon.opacity = 0);
      if (this._progressBgSpine && this._iconAdSpine) {
        GameUtils.playSpine(this._progressBgSpine, "out", false, function () {
          cc.isValid(e.node) && (e.node.active = false);
        });
        GameUtils.playSpine(this._iconAdSpine, "out", false, null);
      }
    }
  }
  onMagnetClick() {
    var e = this;
    this.setState(EMagnetState.PlayingAd);
    this.stopCountdown();
    if (AdManager.getInstance().checkVideoAdIsReady() && cc.isValid(this.node)) {
      this._btnAd && (this._btnAd.interactable = false);
      this.node.opacity = 0;
    }
    DotGameAdShowStage.dot(false, "clickAdLock");
    AdManager.getInstance().playVideoAd(EAdPosition.InGameMotivation_Magnet, {
      onSuccess: function () {
        e.startAutoMerge();
      },
      onFailed: function (t) {
        e.onAdFailed(t);
      }
    }, "magnet_ad", {
      type: "magnet"
    });
  }
  startAutoMerge() {
    if (this.node && cc.isValid(this.node)) {
      this.setState(EMagnetState.Clearing);
      if (this.node && cc.isValid(this.node)) {
        this.node.active = false;
        this.setState(EMagnetState.ExitAnimation);
      }
      this.autoMerger();
    }
  }
  autoMerger() {
    var e,
      t = (null === (e = this._aniInfo) || void 0 === e ? void 0 : e.magnetCount) || 1;
    GameInteraction.input({
      inputType: EGameInputEnum.Tile2MagnetMerge,
      type: "magnetMerge",
      magnetPair: t
    });
  }
  onAdFailed() {
    this.forceExitWithoutAni();
  }
  forceExitWithoutAni() {
    if (this.node && cc.isValid(this.node)) {
      this.node.active = false;
      this.stopCountdown();
      this.setState(EMagnetState.ExitAnimation);
    }
  }
  @mj.traitEvent("T2MagnetItem_onDestroy")
  onDestroy() {
    this._isEnableTimeDown = false;
    cc.Tween.stopAllByTarget(this.node);
    super.onDestroy.call(this);
  }
}