import { EAnimationConfigName } from '../../enums/AnimationEnums';
import { AnimationUtil } from '../../util/AnimationUtil';
export class AnimationManager {
  currentConfigName = EAnimationConfigName.INTERLACE;
  isPlaying = false;
  constructor() {
    this.setAnimationConfig(EAnimationConfigName.INTERLACE);
  }
  static getInstance() {
    AnimationManager.instance || (AnimationManager.instance = new AnimationManager());
    return AnimationManager.instance;
  }
  setAnimationConfig(e) {
    this.currentConfigName = e;
    AnimationUtil.setFadeInAnimation(e);
  }
  getCurrentConfigName() {
    return this.currentConfigName;
  }
  isAnimationPlaying() {
    return this.isPlaying;
  }
  playFadeInAnimation(e) {
    var t = this;
    if (!this.isPlaying) {
      this.isPlaying = true;
      var o = e.endCallback;
      AnimationUtil.playFadeInAnimation(e.timerComponent, e.rects, e.shadows, e.halfCardWidth, e.halfMaxColNum, e.halfMaxRowNum, e.startCallback, e.beforeShadowCallback, function () {
        t.isPlaying = false;
        AnimationUtil.clearAnimatingNodes();
        o && o();
      }, e.refreshDuration || false);
    }
  }
  stopCurrentAnimation() {
    if (this.isPlaying) {
      this.isPlaying = false;
      AnimationUtil.stopAllAnimations();
    }
  }
  resetAnimationState() {
    this.isPlaying = false;
  }
  getAvailableConfigNames() {
    return [EAnimationConfigName.ZIPPER, EAnimationConfigName.DOOR_CLOSE, EAnimationConfigName.INTERLACE];
  }
  randomizeAnimationConfig() {
    var e = this.getAvailableConfigNames();
    Math.floor(Math.random() * e.length);
    var t = e[2];
    this.setAnimationConfig(t);
  }
}