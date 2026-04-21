import BaseUI from '../framework/ui/BaseUI';
import GameUtils from '../core/simulator/util/GameUtils';
import I18NStrings from '../framework/data/I18NStrings';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
@mj.class
export default class GoalAchieveItem extends BaseUI {
  @mj.component("spin", sp.Skeleton)
  _spineAnim: "spin" = null;
  _tileLbl = null;
  static prefabUrl = "prefabs/effects/EffectGoalAchieve";
  static bundleName = "mainRes";
  onLoad() {
    super.onLoad.call(this);
    this._tileLbl = GameUtils.getSpineAttachedComponent(this._spineAnim, "hook_text", "tile", cc.Label);
    I18NStrings.setText(this._tileLbl.node, "Goal achieved", "Journey_Level_Done");
    this._tileLbl && this._tileLbl.node && (this._tileLbl.node.opacity = 0);
  }
  playAnimation(e) {
    GameUtils.playSpine(this._spineAnim, "in", false, function () {});
    this.playTextAnimation(e);
  }
  playTextAnimation(e) {
    var t = this;
    if (this._tileLbl && this._tileLbl.node) {
      cc.tween(this._tileLbl.node).to(0.16, {
        opacity: 255
      }, {
        easing: "cubicIn"
      }).delay(0.57).to(0.1, {
        opacity: 0
      }, {
        easing: "circOut"
      }).call(function () {
        t.node.destroy();
        null == e || e();
      }).start();
    } else {
      null == e || e();
    }
  }
  playSound() {
    mj.audioManager.playEffect(EAudioID.Goals);
  }
}