import { EFadeInAnimationType, EScreenFadeType } from '../enums/AnimationEnums';
export class AnimationTimingConfig {
  fadeInType = EFadeInAnimationType.FOUR_PARTS;
  outScreenLayerDurations = [];
  outScreenLineDurations = [];
  leftTopOutScreenPosition = cc.v2(-400, 0);
  leftTopOutScreenTime = 0.334;
  rightTopOutScreenPosition = cc.v2(400, 0);
  rightTopOutScreenTime = 0.334;
  rightBottomOutScreenPosition = cc.v2(400, 0);
  rightBottomOutScreenTime = 0.334;
  leftBottomOutScreenPosition = cc.v2(-400, 0);
  leftBottomOutScreenTime = 0.3;
  leftOutScreenPosition = cc.v2(50, 0);
  leftOutScreenTime = 0.5;
  rightOutScreenPosition = cc.v2(500, 0);
  rightOutScreenTime = 0.5;
  shadowFadeOutTime = 0;
  shadowFadeInTime = 0.1;
  constructor() {
    this.initializeDefaultValues();
  }
  initializeDefaultValues() {
    this.outScreenLayerDurations.push(0, 0.133, 0.05, 0.02);
    this.outScreenLineDurations.push(0);
    for (var e = 0; e <= 13; e++) this.outScreenLineDurations.push(0.06);
  }
  getPositionAndTime(e) {
    switch (e) {
      case EScreenFadeType.LEFT_TOP:
        return {
          position: this.leftTopOutScreenPosition,
          time: this.leftTopOutScreenTime
        };
      case EScreenFadeType.RIGHT_TOP:
        return {
          position: this.rightTopOutScreenPosition,
          time: this.rightTopOutScreenTime
        };
      case EScreenFadeType.RIGHT_BOTTOM:
        return {
          position: this.rightBottomOutScreenPosition,
          time: this.rightBottomOutScreenTime
        };
      case EScreenFadeType.LEFT_BOTTOM:
        return {
          position: this.leftBottomOutScreenPosition,
          time: this.leftBottomOutScreenTime
        };
      case EScreenFadeType.LEFT:
        return {
          position: this.leftOutScreenPosition,
          time: this.leftOutScreenTime
        };
      case EScreenFadeType.RIGHT:
        return {
          position: this.rightOutScreenPosition,
          time: this.rightOutScreenTime
        };
      default:
        return {
          position: this.leftOutScreenPosition,
          time: this.leftOutScreenTime
        };
    }
  }
}