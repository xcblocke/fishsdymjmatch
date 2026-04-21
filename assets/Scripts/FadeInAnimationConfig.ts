import { AnimationConfig } from './AnimationConfig';
import { EAnimationConfigName } from './enums/AnimationEnums';
export class FadeInAnimationConfig extends AnimationConfig {
  static CONFIG_NAMES = [EAnimationConfigName.ZIPPER, EAnimationConfigName.DOOR_CLOSE, EAnimationConfigName.INTERLACE];
  constructor(t = EAnimationConfigName.INTERLACE) {
    super(t);
  }
  initializeConfig(e) {
    this.resetConfig();
    switch (e) {
      case EAnimationConfigName.ZIPPER:
        this.setupZipperConfig();
        break;
      case EAnimationConfigName.DOOR_CLOSE:
        this.setupDoorCloseConfig();
        break;
      case EAnimationConfigName.INTERLACE:
      default:
        this.setupInterlaceConfig();
    }
  }
  setupZipperConfig() {
    this.layerDurations.push(0, 0.05, 0.01, 0.005, 0);
    this.pushValues(this.lineDurations, 2, 0);
    this.pushValues(this.lineDurations, 2, 0.01);
    this.pushValues(this.lineDurations, 2, 0.02);
    this.pushValues(this.lineDurations, 2, 0.03);
    this.pushValues(this.lineDurations, 2, 0.04);
    this.pushValues(this.lineDurations, 2, 0.05);
    this.pushValues(this.lineDurations, 2, 0.06);
    this.pushValues(this.lineDurations, 2, 0.07);
    this.pushValues(this.lineDurations, 2, 0.08);
    this.pushValues(this.itemDurations, 14, 0);
    this.pushValues(this.linePositionDeviations, 18, -1);
    this.leftOutScreenPosition = cc.v2(-150, 0);
    this.leftOutScreenTime = 0.45;
    this.rightOutScreenPosition = cc.v2(150, 0);
    this.rightOutScreenTime = 0.45;
    this.shadowFadeOutTime = 0;
    this.shadowFadeInTime = 0.2;
  }
  setupDoorCloseConfig() {
    this.layerDurations.push(0, 0.04, 0.07, 0.1, 0);
    this.pushValues(this.lineDurations, 18, 0);
    this.pushValues(this.itemDurations, 14, 0);
    this.pushValues(this.linePositionDeviations, 18, 0);
    this.leftOutScreenPosition = cc.v2(-250, 0);
    this.leftOutScreenTime = 0.45;
    this.rightOutScreenPosition = cc.v2(250, 0);
    this.rightOutScreenTime = 0.45;
    this.shadowFadeOutTime = 0;
    this.shadowFadeInTime = 0.2;
  }
  setupInterlaceConfig() {
    this.layerDurations.push(0, 0.04, 0.02, 0.01, 0);
    this.pushValues(this.lineDurations, 2, 0.05);
    this.pushValues(this.lineDurations, 2, 0.03);
    this.pushValues(this.lineDurations, 4, 0.02);
    this.pushValues(this.lineDurations, 6, 0.01);
    this.pushValues(this.lineDurations, 4, 0);
    this.pushValues(this.itemDurations, 14, 0);
    this.pushValues(this.linePositionDeviations, 2, 6);
    this.pushValues(this.linePositionDeviations, 2, -6);
    this.pushValues(this.linePositionDeviations, 2, 6);
    this.pushValues(this.linePositionDeviations, 2, -6);
    this.pushValues(this.linePositionDeviations, 2, 6);
    this.pushValues(this.linePositionDeviations, 2, -6);
    this.pushValues(this.linePositionDeviations, 2, 6);
    this.pushValues(this.linePositionDeviations, 2, -6);
    this.pushValues(this.linePositionDeviations, 2, 6);
    this.leftOutScreenPosition = cc.v2(-50, 0);
    this.leftOutScreenTime = 0.44;
    this.rightOutScreenPosition = cc.v2(50, 0);
    this.rightOutScreenTime = 0.44;
    this.shadowFadeOutTime = 0;
    this.shadowFadeInTime = 0.2;
  }
  randomizeConfig() {
    Math.floor(Math.random() * FadeInAnimationConfig.CONFIG_NAMES.length);
    var e = FadeInAnimationConfig.CONFIG_NAMES[2];
    this.initializeConfig(e);
  }
  setConfig(e) {
    this.initializeConfig(e);
  }
}