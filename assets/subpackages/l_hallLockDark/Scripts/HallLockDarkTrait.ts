import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
@mj.trait
@mj.class("HallLockDarkTrait")
export default class HallLockDarkTrait extends Trait {
  static traitKey = "HallLockDark";
  get darkScale() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.darkScale) && void 0 !== e ? e : 0.65;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  getBaseSpine(t) {
    if (!cc.isValid(t)) return null;
    if (!t.getComponent(sp.Skeleton)) return null;
    var e = BaseSpine.refreshWithNode(t);
    e.ready || e.markReady("");
    return e;
  }
  onTravelBtn_updateUI(t, e) {
    var n = t.ins;
    this.setTravelBtnDark(n, n.state);
    e();
  }
  onTravelBtn_forceUpdate(t, e) {
    var n = t.ins;
    this.setTravelBtnDark(n, n.state);
    e();
  }
  setTravelBtnDark(t, e) {
    if (cc.isValid(null == t ? void 0 : t.node)) {
      var n = 0 === e;
      GameUtils.setNodeDark(null == t ? void 0 : t.node, n, this.darkScale);
      var i = cc.find("Root/BgWood", t.node),
        o = cc.find("Root/Lock/Anim", t.node);
      if (n) {
        var a = this.getBaseSpine(i),
          r = this.getBaseSpine(o);
        this.pauseSpine(a, "init");
        this.pauseSpine(r, "init");
      } else (a = this.getBaseSpine(i)) && a.setAnimation("init", -1);
    }
  }
  onHDailyBtn_updateLock(t, e) {
    var n = t.ins;
    if (t.args[0]) {
      this.setDailyBtnDark(n, false);
    } else {
      this.setDailyBtnDark(n, true);
    }
    e();
  }
  setDailyBtnDark(t, e) {
    if (cc.isValid(null == t ? void 0 : t.node)) {
      GameUtils.setNodeDark(null == t ? void 0 : t.node, e, this.darkScale);
      var n = cc.find("eff_btn", t.node),
        i = cc.find("item_lock/eff_lock", t.node);
      if (e) {
        var o = this.getBaseSpine(n),
          a = this.getBaseSpine(i);
        this.pauseSpine(o, "init");
        this.pauseSpine(a, "init");
      } else (o = this.getBaseSpine(n)) && o.setAnimation("init", -1);
    }
  }
  onTaskTt_updateLock(t, e) {
    var n,
      i,
      o = t.ins;
    if (null !== (n = t.args[0]) && void 0 !== n ? n : null === (i = null == o ? void 0 : o.taskModel) || void 0 === i ? void 0 : i.isTaskOpen()) {
      this.setTaskBtnDark(o, false);
    } else {
      this.setTaskBtnDark(o, true);
    }
    e();
  }
  setTaskBtnDark(t, e) {
    if (cc.isValid(null == t ? void 0 : t.node)) {
      GameUtils.setNodeDark(null == t ? void 0 : t.node, e, this.darkScale);
      var n = cc.find("Bg/Icon", t.node),
        i = cc.find("Bg/item_lock/eff_lock", t.node);
      if (e) {
        var o = this.getBaseSpine(n),
          a = this.getBaseSpine(i);
        this.pauseSpine(o, "init");
        this.pauseSpine(a, "init");
      } else (o = this.getBaseSpine(n)) && o.setAnimation("init", -1);
    }
  }
  onHallRankBLockTt_chgLock(t, e) {
    var n = t.args[0],
      i = t.ins,
      o = t.args[1];
    if (n) {
      this.setRankBtnDark(i, o, false);
    } else {
      this.setRankBtnDark(i, o, true);
    }
    e();
  }
  setRankBtnDark(t, e, n) {
    if (cc.isValid(null == e ? void 0 : e.node)) {
      GameUtils.setNodeDark(null == e ? void 0 : e.node, n, this.darkScale);
      if (n) {
        this.pauseSpine(t._rankUnopenSpine, "init");
        this.pauseSpine(t._lockSpine, "init");
      }
    }
  }
  onSignBtn_updateLock(t, e) {
    var n,
      i,
      o = t.ins;
    if (null !== (n = t.args[0]) && void 0 !== n ? n : null === (i = null == o ? void 0 : o.signModel) || void 0 === i ? void 0 : i.isUnlocked()) {
      this.setSignBtnDark(o, false);
    } else {
      this.setSignBtnDark(o, true);
    }
    e();
  }
  setSignBtnDark(t, e) {
    if (cc.isValid(null == t ? void 0 : t.node)) {
      GameUtils.setNodeDark(null == t ? void 0 : t.node, e, this.darkScale);
      var n = cc.find("eff_btn", t.node),
        i = cc.find("item_lock/eff_lock", t.node);
      if (e) {
        var o = this.getBaseSpine(n),
          a = this.getBaseSpine(i);
        this.pauseSpine(o, "init");
        this.pauseSpine(a, "init");
      } else (o = this.getBaseSpine(n)) && o.setAnimation("init", -1);
    }
  }
  onVltnBtn_updateUI(t, e) {
    var n = t.ins;
    if (mj.getClassByName("ValentineModel").getInstance().getActivityState() > 1) {
      this.setVltnBtnDark(n, false);
    } else {
      this.setVltnBtnDark(n, true);
    }
    e();
  }
  setVltnBtnDark(t, e) {
    if (cc.isValid(null == t ? void 0 : t.node)) {
      GameUtils.setNodeDark(null == t ? void 0 : t.node, e, this.darkScale);
      var n = cc.find("Root/spine", t.node);
      if (e) {
        var i = this.getBaseSpine(n);
        this.pauseSpine(i, "off_init_jdt");
      }
    }
  }
  pauseSpine(t, e) {
    var n;
    if (cc.isValid(t)) {
      null === (n = t.getSkeleton()) || void 0 === n || n.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
      t.scheduleOnce(function () {
        cc.isValid(t) && t.stopAtFirstFrameOf(e);
      }, 0);
    }
  }
  onValHallBtn_setLabCol(t, e) {
    var n;
    if (null !== (n = null == t ? void 0 : t.beforReturnVal) && void 0 !== n && n) {
      var i = __read(t.args, 1)[0];
      cc.isValid(i) && GameUtils.clearNodeDark(i);
    }
    e();
  }
  onHDailyBtn_doLockAni(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onTaskTt_doLockAni(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onHallRankBLockTt_doLckAni(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onSignBtn_doLockAni(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
}