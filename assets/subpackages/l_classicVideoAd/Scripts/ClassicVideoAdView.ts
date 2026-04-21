import UIView from '../../../Scripts/framework/ui/UIView';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import BaseLabel from '../../../Scripts/gamePlay/base/ui/BaseLabel';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import I18NComponent from '../../../Scripts/component/I18NComponent';
const {
  ccclass,
  property
} = cc._decorator;
@mj.class
export default class ClassicVideoAdView extends UIView {
  watchBtn = null;
  refuseBtn = null;
  titleNode = null;
  static prefabUrl = "prefabs/ClassicVideoAdView";
  @mj.traitEvent("ClcVideoAdVw_load")
  onLoad() {
    super.onLoad.call(this);
    this.titleNode = this.node.getChildByName("title");
    var e = this.node.getChildByName("btn");
    if (e) {
      this.watchBtn = e.getComponent(cc.Button);
      var i = e.getChildByName("spine").getComponent(BaseSpine);
      i.markReady("");
      i && i.attachNodeWithAlpha("hook_text", "hook_text", function () {
        var t = I18NStrings.get("Common_Btn_Continue", "Continue"),
          e = BaseLabel.create(t, "font/SPARTAN-BOLD", "mainRes", 50);
        e.setColor(new cc.Color().fromHEX("#e0ffe7"));
        e.setAlign(cc.Label.HorizontalAlign.CENTER, cc.Label.VerticalAlign.CENTER);
        return e.node;
      });
    }
    var a = this.node.getChildByName("btn_no");
    a && (this.refuseBtn = a.getComponent(cc.Button));
    var o = this.refuseBtn.node.getChildByName("spr"),
      n = this.refuseBtn.node.getChildByName("label");
    o.active = false;
    n.active = true;
    this.watchBtn && this.OnButtonClick(this.watchBtn.node, this.onClickWatch.bind(this));
    this.refuseBtn && this.OnButtonClick(this.refuseBtn.node, this.onClickRefuse.bind(this));
    this.playEnterAnimation();
  }
  playEnterAnimation() {
    if (this.titleNode && cc.isValid(this.titleNode)) {
      this.titleNode.scale = 0;
      cc.tween(this.titleNode).to(0.26, {
        scale: 1
      }, {
        easing: "backOut"
      }).start();
    }
    if (this.refuseBtn && cc.isValid(this.refuseBtn.node)) {
      this.refuseBtn.node.scale = 0;
      cc.tween(this.refuseBtn.node).delay(0.53).to(0.27, {
        scale: 1
      }, {
        easing: "backOut"
      }).start();
    }
  }
  @mj.traitEvent("ClcVideoAdVw_clickWatch")
  onClickWatch() {
    var t = this.delegate;
    null == t || t.onClickWatch();
  }
  @mj.traitEvent("ClcVideoAdVw_clickRefuse")
  onClickRefuse() {
    var t = this.delegate;
    null == t || t.onClickRefuse();
  }
  updateDisplay(t) {
    if (this.titleNode && cc.isValid(this.titleNode)) {
      var e = this.titleNode.getComponent(I18NComponent);
      if (e) if (t.showSpecialTitle) {
        e.setTranslateId("Get_MORE_SCOREplus", "Get More Score x{0}");
        var i = this.titleNode.getComponent(cc.Label);
        if (i) {
          var a = I18NStrings.get("Get_MORE_SCOREplus", "Get More Score x{0}");
          i.string = a.replace("{0}", t.currentMultiplier.toFixed(1));
        }
      } else e.setTranslateId("Get_MORE_SCORE", "Get More Score");
    }
    if (this.refuseBtn && cc.isValid(this.refuseBtn.node)) {
      var o = this.refuseBtn.node.getChildByName("spr"),
        n = this.refuseBtn.node.getChildByName("label");
      if (t.hasCloseCount) {
        o.active = false;
        n.active = true;
      } else {
        o.active = true;
        n.active = false;
      }
    }
  }
}