import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import { ELevelBoxCondType } from './LevelBoxTypes';
@mj.trait
@mj.class("LevelBoxTenFourTrait")
export default class LevelBoxTenFourTrait extends Trait {
  static traitKey = "LevelBoxTenFour";
  onLvBoxPrgs_initCpts(t, e) {
    this.initBoxAnim(t.ins);
    e();
  }
  initBoxAnim(t) {
    if (t && cc.isValid(t.boxBtn) && cc.isValid(t.conditionTip)) {
      t.boxAnimProxy = BaseSpine.create("spine/boxReward/result_boxBar", "in", 1, null, false);
      var e = t.boxAnimProxy.node;
      t.boxBtn.addChild(e);
      e.setSiblingIndex(0);
      e.active = false;
      t.boxAnim = e;
      var i = cc.instantiate(t.conditionTip);
      i.setAnchorPoint(cc.v2(0.5, 0.5));
      i.color = cc.color(234, 205, 115);
      var o = i.getComponent(cc.Label);
      o.fontSize = 28;
      o.lineHeight = 40;
      o.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
      o.verticalAlign = cc.Label.VerticalAlign.CENTER;
      t.levelTip = i;
      t.levelTip.setPosition(cc.v3(0, 0, 0));
      t.levelTip.active = false;
    }
  }
  onLvBoxPrgs_upBoxReward(t, e) {
    this.updateBoxReward(t.ins, t.args[0]);
    e();
  }
  updateBoxReward(t, e) {
    if (cc.isValid(t.boxAnim) && cc.isValid(t.boxAnimProxy) && cc.isValid(t.levelTip) && cc.isValid(t.chestIcon) && cc.isValid(t.boxTipAnim)) {
      var i = e.progress.condType;
      t.boxAnim.active = true;
      t.boxAnimProxy.attachNode("hook_num", function () {
        return t.levelTip;
      });
      t.boxAnim.active = false;
      if (i === ELevelBoxCondType.Level) {
        t.chestIcon.active = false;
        t.boxAnim.active = true;
        t.boxTipAnim.setPosition(cc.v3(0, 80, 0));
      } else {
        t.chestIcon.active = true;
        t.boxAnim.active = false;
        t.boxTipAnim.setPosition(cc.v3(0, 53.21, 0));
      }
    }
  }
  onLvBoxPrgs_upProgLabel(t, e) {
    this.updateProgressLabel(t.ins, t.args[0]);
    e();
  }
  updateProgressLabel(t, e) {
    if (t && cc.isValid(t.conditionTip) && cc.isValid(t.levelTip)) {
      var i = e.progress.condValue,
        o = e.progress.condType === ELevelBoxCondType.Level;
      t.conditionTip.active = !o;
      t.levelTip.active = o;
      o && I18NStrings.setText(t.levelTip, "Lv." + i[0], "MahjongTiles_MainPage_TargetLevel", [i[0]]);
    }
  }
  onLvBoxPrgs_playCurBarHigh(t, e) {
    var i = t.ins;
    if (i.levelBox.progress.condType === ELevelBoxCondType.Level) {
      var o = i.boxAnimProxy;
      cc.isValid(o) && o.setAnimation("in", 1, function () {});
    }
    e();
  }
  onLvBoxPrgs_getCompDelay(t, e) {
    if (t.ins.levelBox.progress.condType === ELevelBoxCondType.Level) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: 0.75
      });
    } else {
      e();
    }
  }
}