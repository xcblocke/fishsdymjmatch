import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
@mj.trait
@mj.class("HallRankBtnLockTrait")
export default class HallRankBtnLockTrait extends Trait {
  _rankTrait = null;
  _rankUnopenSpine = null;
  _lockSpine = null;
  static traitKey = "HallRankBtnLock";
  onRankTrait_startEnterHall(t, e) {
    e();
    this._rankTrait = t.ins;
  }
  onRankTrait_checkLv(t, e) {
    e({
      returnVal: true,
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onRankBtn_updateAll(t, e) {
    if (this._rankTrait) {
      var n = t.ins;
      if (cc.isValid(n._labelTime)) {
        var i = this.isRankOpen();
        n.node.getChildByName("bg").active = i;
        var r = n._labelTime,
          o = r.getComponent(cc.Label);
        r.setPosition(i ? 0 : 19, r.position.y);
        o.fontSize = i ? 30 : 36;
        var a = n._labelRankNode.getComponent(cc.Label);
        if (i) {
          this.destroyRankUnopenSpine();
          this.destroyLockSpine();
          this.changeLockState(true, n);
          e();
        } else {
          this.createRankUnopenSpine(n.node);
          this.createLockSpine(n.node);
          var c = this.getUnlockLevel(),
            p = this.getLevel(c);
          p || (p = c);
          o.string = "Lv." + p;
          a.string = "";
          this.changeLockState(false, n);
          e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
        }
      } else e();
    } else e();
  }
  @mj.traitEvent("HallRankBLockTt_chgLock")
  changeLockState() {}
  onRankBtn_closeOutCD(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onRankBtn_click(t, e) {
    if (this._rankTrait) {
      if (this.isRankOpen()) e();else {
        this.playLockAnim();
        var n = this.getUnlockLevel(),
          i = this.getOpenTips(n);
        ControllerManager.getInstance().pushViewByController("LockTipsController", {
          isReuse: false,
          tips: i,
          noBlock: true,
          isGlobal: false,
          bgStyle: null,
          isShowAction: false
        });
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
      }
    } else e();
  }
  @mj.traitEvent("HallRankBLockTt_getLv")
  getLevel(t) {
    return t;
  }
  @mj.traitEvent("HallRankBLockTt_unlockLv")
  getUnlockLevel() {
    var t, e;
    return null === (e = null === (t = this._rankTrait.traitData) || void 0 === t ? void 0 : t.config) || void 0 === e ? void 0 : e.unLockLevel;
  }
  @mj.traitEvent("HallRankBLockTt_getOTips")
  getOpenTips(t) {
    return I18NStrings.get("Common_Reward_target_1", "Finish Level {0}").replace("{0}", String(t));
  }
  isRankOpen() {
    return !!this._rankTrait && UserModel.getInstance().getMainGameData().getLevelId() > this.getUnlockLevel();
  }
  @mj.traitEvent("HallRankBLockTt_crtBtnSp")
  createRankUnopenSpine(t) {
    if (!cc.isValid(this._rankUnopenSpine) && cc.isValid(t)) {
      var e = BaseSpine.create("spine/rank/main_iconB_gardeningMaster", "init", -1, null, false);
      e.node.parent = t;
      e.node.position = cc.v3(0, 0, 0);
      e.node.setSiblingIndex(0);
      this._rankUnopenSpine = e;
    }
  }
  @mj.traitEvent("HallRankBLockTt_doLckAni")
  playLockAnim() {
    if (cc.isValid(this._lockSpine)) {
      var t = this._lockSpine.getSkeleton();
      GameUtils.playSpine(t, "in", false, function () {
        GameUtils.playSpine(t, "init", true);
      });
    }
  }
  destroyRankUnopenSpine() {
    if (cc.isValid(this._rankUnopenSpine)) {
      this._rankUnopenSpine.node.destroy();
      this._rankUnopenSpine = null;
    }
  }
  createLockSpine(t) {
    if (!cc.isValid(this._lockSpine) && cc.isValid(t)) {
      var e = BaseSpine.create("spine/lock/main_icon_lock", "init", 1, null, false);
      e.node.parent = t;
      e.node.position = cc.v3(-63, -53);
      this._lockSpine = e;
    }
  }
  destroyLockSpine() {
    if (cc.isValid(this._lockSpine)) {
      this._lockSpine.node.destroy();
      this._lockSpine = null;
    }
  }
}