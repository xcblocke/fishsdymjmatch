import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.class
export default class HardLevelBannerView extends BaseUI {
  @mj.node("bannerBg")
  _bannerBg: "bannerBg" = null;
  @mj.node("bannerBg/lblText")
  _lblText: "bannerBg/lblText" = null;
  _duration = 2.5;
  static prefabUrl = "prefabs/HardLevelBanner";
  static bundleName = "r_hardLevelBanner";
  onLoad() {
    super.onLoad.call(this);
    this.node.opacity = 0;
  }
  showBanner(e, t, n = 2.5) {
    this._duration = n;
    this.setBannerText(e, t);
    this.playEnterAnimation();
  }
  setBannerText(e, t) {
    var n = "<color=#FF5F40>" + t + "%</color>",
      r = I18NStrings.get(e);
    r = r ? "<color=#FFD987>" + r + "</color>" : this.getDefaultText();
    r = I18NStrings.stringFormat(r, [n]);
    this._lblText.getComponent(cc.RichText).string = r;
  }
  getDefaultText() {
    return "<color=#FF5F40>{0}</color> <color=#FFD987>of players find this level challenging</color>";
  }
  playEnterAnimation() {
    var e = this;
    cc.Tween.stopAllByTarget(this.node);
    this._bannerBg && cc.isValid(this._bannerBg) && cc.Tween.stopAllByTarget(this._bannerBg);
    this._lblText && cc.isValid(this._lblText) && cc.Tween.stopAllByTarget(this._lblText);
    this.node.opacity = 255;
    this.node.setScale(1);
    this.playBannerSound();
    this.playBannerBgAnimation();
    this.playTextAnimation();
    this.scheduleOnce(function () {
      e.playExitAnimation();
    }, 0.37 + this._duration);
  }
  playBannerSound() {
    mj.audioManager && mj.audioManager.playEffect(EAudioID.HardLevelBanner);
  }
  playBannerBgAnimation() {
    if (this._bannerBg && cc.isValid(this._bannerBg)) {
      this._bannerBg.opacity = 0;
      this._bannerBg.setScale(0.6, 1);
      cc.tween(this._bannerBg).to(0.17, {
        opacity: 255,
        scaleX: 1.03
      }, {
        easing: cc.easing.quadOut
      }).to(0.1, {
        scaleX: 1
      }, {
        easing: cc.easing.quadInOut
      }).start();
    }
  }
  playTextAnimation() {
    if (this._lblText && cc.isValid(this._lblText)) {
      this._lblText.opacity = 0;
      this._lblText.setScale(0.6);
      cc.tween(this._lblText).delay(0.1).to(0.17, {
        opacity: 255,
        scale: 1.02
      }, {
        easing: cc.easing.quadOut
      }).to(0.1, {
        scale: 1
      }, {
        easing: cc.easing.quadInOut
      }).start();
    }
  }
  playExitAnimation() {
    var e = this;
    cc.isValid(this.node) && cc.tween(this.node).to(0.17, {
      opacity: 0
    }, {
      easing: cc.easing.quadIn
    }).call(function () {
      e.destroyBanner();
    }).start();
  }
  destroyBanner() {
    cc.isValid(this.node) && this.node.destroy();
  }
  onDestroy() {
    super.onDestroy.call(this);
    this.unscheduleAllCallbacks();
    cc.Tween.stopAllByTarget(this.node);
    this._bannerBg && cc.isValid(this._bannerBg) && cc.Tween.stopAllByTarget(this._bannerBg);
    this._lblText && cc.isValid(this._lblText) && cc.Tween.stopAllByTarget(this._lblText);
  }
}