import ChangeSkinTrait from './ChangeSkinTrait';
import { playSpineAnim } from '../../../Scripts/framework/utils/CommonUtils';
import Adapter from '../../../Scripts/component/Adapter';
@mj.trait
@mj.class("ChangeSkinTrait70")
export default class ChangeSkinTrait70 extends ChangeSkinTrait {
  static traitKey = "ChangeSkin70";
  onWinVw_showWinVw(t, e) {
    var i = t.ins;
    if (cc.isValid(i)) {
      var n = i.getContentNode();
      if (cc.isValid(n)) {
        var r = n.getChildByName("spine_victory");
        if (cc.isValid(r)) {
          var a = r.getComponent(sp.Skeleton);
          a && playSpineAnim(a, 1, "in_1", function () {
            playSpineAnim(a, -1, "init");
          });
        }
        var o = n.getChildByName("lbl_subtitle");
        cc.isValid(o) && (o.y = -149);
      }
    }
    e();
  }
  onWinVw_getDescAniDly(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      returnVal: 0.9,
      isBreak: true
    });
  }
  onWinVw_playWdAni2(t, e) {
    var i = t.ins;
    if (cc.isValid(i)) {
      var n = i.getContentNode();
      if (cc.isValid(n)) {
        var r = n.getChildByName("lbl_title");
        if (cc.isValid(r)) {
          r.scale = 1.8;
          r.opacity = 0;
          r.stopAllActions();
          cc.tween(r).to(0.2, {
            scale: 0.7
          }, {
            easing: cc.easing.sineInOut
          }).to(0.13, {
            scale: 1.05
          }, {
            easing: cc.easing.sineInOut
          }).to(0.1, {
            scale: 1
          }, {
            easing: cc.easing.quadIn
          }).start();
          cc.tween(r).to(0.43, {
            opacity: 255
          }).start();
          e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true
          });
          return;
        }
      }
    }
    e();
  }
  onBoxRwdUI_barBoxEnter(t, e) {
    var i = t.ins;
    if (cc.isValid(i) && cc.isValid(i.node)) {
      var n = i.node,
        r = n.getChildByName("sp_bottom_bg");
      if (cc.isValid(r)) {
        r.active = true;
        Adapter.ignoreSafeRect(r);
      }
      var a = n.getChildByName("BarLayout");
      if (cc.isValid(a)) {
        a.active = true;
        Adapter.ignoreSafeRect(a);
      }
      var o = n.getChildByName("BoxBtn");
      if (cc.isValid(o)) {
        o.active = true;
        Adapter.ignoreSafeRect(o);
      }
      n.opacity = 0;
      cc.tween(n).delay(1).to(0.5, {
        opacity: 255
      }).start();
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else e();
  }
  onLvBoxProg_barBoxEnter(t, e) {
    var i = t.ins;
    if (cc.isValid(i) && cc.isValid(i.node)) {
      var n = i.node,
        r = n.getChildByName("sp_bottom_bg");
      if (cc.isValid(r)) {
        r.active = true;
        Adapter.ignoreSafeRect(r);
      }
      var a = n.getChildByName("BarLayout");
      if (cc.isValid(a)) {
        a.active = true;
        Adapter.ignoreSafeRect(a);
      }
      var o = n.getChildByName("BoxBtn");
      if (cc.isValid(o)) {
        o.active = true;
        Adapter.ignoreSafeRect(o);
      }
      n.opacity = 0;
      cc.tween(n).delay(1).to(0.5, {
        opacity: 255
      }).start();
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else e();
  }
}