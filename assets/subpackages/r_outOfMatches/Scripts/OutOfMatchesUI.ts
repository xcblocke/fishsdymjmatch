import BaseUI from '../../../Scripts/framework/ui/BaseUI';
@mj.class
export default class OutOfMatchesUI extends BaseUI {
  @mj.node("bottom_bg")
  bottomBg: "bottom_bg" = null;
  @mj.node("bottom_bg/tip_spr")
  tipSpr: "bottom_bg/tip_spr" = null;
  static prefabUrl = "prefabs/OutOfMatches";
  static bundleName = "r_outOfMatches";
  onLoad() {
    super.onLoad.call(this);
  }
  playAnimation(t) {
    if (this.bottomBg && this.tipSpr) {
      this.bottomBg.opacity = 0;
      this.tipSpr.scale = 0;
      this.tipSpr.opacity = 0;
      cc.tween(this.bottomBg).to(0.4, {
        opacity: 178
      }, {
        easing: "sineInOut"
      }).start();
      cc.tween(this.tipSpr).parallel(cc.tween().to(0.4, {
        scale: 1
      }, {
        easing: "backOut"
      }), cc.tween().to(0.4, {
        opacity: 255
      }, {
        easing: "sineInOut"
      })).delay(0.5).call(function () {
        null == t || t();
      }).start();
    } else null == t || t();
  }
  onDestroy() {
    super.onDestroy && super.onDestroy.call(this);
  }
}