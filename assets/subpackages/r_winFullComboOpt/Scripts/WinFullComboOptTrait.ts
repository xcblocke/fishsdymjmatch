import Trait from '../../../Scripts/framework/trait/Trait';
import WinFullComboOptView from './WinFullComboOptView';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
@mj.trait
@mj.class("WinFullComboOptTrait")
export default class WinFullComboOptTrait extends Trait {
  requireRes = ["r_winFullComboOpt:prefabs/WinFullComboOptView"];
  static traitKey = "WinFullComboOpt";
  onLoad() {
    super.onLoad.call(this);
  }
  @mj.traitEvent("WinFullComboOpt_rainbow")
  showRainbowUI() {
    return GameUtils.isFullComboTriggered();
  }
  onWinVw_getDescAniDly(e, t) {
    t({
      returnType: TraitCallbackReturnType.return,
      returnVal: 0.9,
      isBreak: true
    });
  }
  onTile2WinVw_getDescAniDly(e, t) {
    t({
      returnType: TraitCallbackReturnType.return,
      returnVal: 0.9,
      isBreak: true
    });
  }
  onWinVw_getSubSize(e, t) {
    t({
      returnType: TraitCallbackReturnType.return,
      returnVal: cc.size(888, 192),
      isBreak: true
    });
  }
  onTile2WinVw_getSubSize(e, t) {
    t({
      returnType: TraitCallbackReturnType.return,
      returnVal: cc.size(888, 192),
      isBreak: true
    });
  }
  onWinCtrl_initRes(e, t) {
    var i = e.ins;
    null == i || i.addPreloadRes("Prefab", this.requireRes);
    t();
  }
  onTile2WinCtrl_initRes(e, t) {
    var i = e.ins;
    null == i || i.addPreloadRes("Prefab", this.requireRes);
    t();
  }
  onLevelBox_pbDelay(e, t) {
    this.showRainbowUI() && (e.args[0].delayTime += 0.33);
    t();
  }
  onLvBoxProg_barBoxEnter(e, t) {
    var i = e.ins;
    if (cc.isValid(null == i ? void 0 : i.node)) {
      var o = i.node.getChildByName("BarLayout"),
        r = i.node.getChildByName("BoxBtn");
      o.y = -310;
      r.y = -310;
    }
    t();
  }
  onBoxRwdUI_barBoxEnter(e, t) {
    var i = e.ins;
    if (cc.isValid(null == i ? void 0 : i.node)) {
      var o = i.node.getChildByName("BarLayout"),
        r = i.node.getChildByName("BoxBtn");
      if (o && r) {
        o.y = -310;
        r.y = -310;
      }
    }
    t();
  }
  onWinVw_showWinVw(e, t) {
    this._doShowUI(e.ins, e.args[0]);
    t();
  }
  onTile2WinVw_show(e, t) {
    this._doShowUI(e.ins, e.args[0]);
    t();
  }
  _doShowUI(e, t) {
    var i;
    if (cc.isValid(e)) {
      var o = e.getContentNode();
      if (cc.isValid(o)) {
        this.fixPos(o);
        if (this.showRainbowUI()) {
          var r = o.getChildByName("WinFullComboOptView");
          if (!cc.isValid(r)) {
            r = e.createUISync(WinFullComboOptView);
            cc.isValid(r) && o.addChild(r);
          }
          cc.isValid(r) && (null === (i = r.getComponent(WinFullComboOptView)) || void 0 === i || i.showFullComboUI(t, o));
        }
      }
    }
  }
  fixPos(e) {
    var t, i;
    try {
      for (var o = __values([["lbl_score", 0, 254], ["lbl_scoreDec", 0, 405], ["spr_bg_wellDone", 0, 634], ["lbl_title", 0, 629], ["spin_wellDone", 0, 254], ["btn_next", 0, -552], ["lbl_subtitle", 0, 34], ["rate_richtext", 0, 34]]), r = o.next(); !r.done; r = o.next()) {
        var n = __read(r.value, 3),
          a = n[0],
          _ = n[1],
          u = n[2],
          d = e.getChildByName(a);
        cc.isValid(d) && d.setPosition(_, u);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (i = o.return) && i.call(o);
      } finally {
        if (t) throw t.error;
      }
    }
  }
}