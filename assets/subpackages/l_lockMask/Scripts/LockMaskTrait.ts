import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import { EGameInputEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { ShowLockMaskEffect } from '../../../Scripts/ShowLockMaskEffect';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import { BehaviorFactory } from '../../../Scripts/BehaviorFactory';
import { RemoveLockMaskBehavior } from '../../../Scripts/base/RemoveLockMaskBehavior';
import { ToggleShowLockMaskBehavior } from '../../../Scripts/base/ToggleShowLockMaskBehavior';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("LockMaskTrait")
export default class LockMaskTrait extends Trait {
  static traitKey = "LockMask";
  onLoad() {
    super.onLoad.call(this);
    this.isNewParam() && this._registerBehaviors();
  }
  isNewParam() {
    return "number" == typeof this._traitData.delay;
  }
  isShowCoveredTile() {
    return true === this._traitData.showCovered;
  }
  _registerBehaviors() {
    BehaviorFactory.registerBehavior(BehaviorsMapping.ToggleShowLockMask, ToggleShowLockMaskBehavior);
    BehaviorFactory.registerBehavior(BehaviorsMapping.RemoveLockMask, RemoveLockMaskBehavior);
  }
  getMessageListeners() {
    var _e = {};
    _e[EGameEvent.Effect_Shuffle] = this.onEffectShuffleCB.bind(this);
    return _e;
  }
  onEffectShuffleCB() {
    this.isNewParam() && GameInteraction.input({
      inputType: EGameInputEnum.RemoveLockMask
    });
  }
  onIptTchStart_Lock(e, t) {
    t();
    this._handleLockMask(e.args[0], e.ins);
  }
  onT2TchRunLock_exec(e, t) {
    t();
    var o = e.args[0],
      r = e.args[1];
    !this.isShowCoveredTile() && this._isTileCovered(o, r) || this._handleLockMask(r, o);
  }
  _isTileCovered(e, t) {
    if (!e || !t) return false;
    var o = e.tileMapObject;
    if (!o) return false;
    var r = o.getTileObject(t);
    return !!r && o.isHasCover(r);
  }
  _handleLockMask(e, t) {
    if (!this.shouldSkipAnimation() && e && t) {
      var o = new ShowLockMaskEffect({
        tileId: e,
        delay: this.isNewParam() ? this._traitData.delay : 0.7
      });
      t.pushEffect(o, EInsertType.Parallel);
    }
  }
  onUISetDlg_updLckHL(e, t) {
    var o = e.args[0];
    this._toggleShowLockMask(o);
    t();
  }
  onGuide_skip(e, t) {
    var o = UserModel.getInstance().isLockHighlightEnabled();
    this._toggleShowLockMask(o);
    t();
  }
  _toggleShowLockMask(e) {
    GameInteraction.input({
      inputType: EGameInputEnum.ToggleShowLockMask,
      enabled: e
    });
  }
  shouldSkipAnimation() {
    var e = UserModel.getInstance(),
      t = mj.getClassByName("GuideTrait");
    if (t && t.getInstance() && true === t.getInstance().eventEnabled && !e.isGuideFinished()) {
      var o = mj.getClassByName("CardLockDarkenTrait");
      if (o) {
        var r = o.getInstance();
        if (r && r.isEnabled()) return true;
      }
    } else if (e.isLockHighlightEnabled()) return true;
    return false;
  }
  onClearBhv_collision(e, t) {
    var o = e.ins.context;
    if (cc.isValid(o)) {
      var r = o.getTileMapObject(),
        i = o.getTileNodeMap();
      if (cc.isValid(r) && cc.isValid(i)) {
        i.forEach(function (e, t) {
          var o = r.getTileObject(t);
          if (o && o.isValid && 0 === o.isCardLock()) {
            var i = e.tileNode.getChildByName("imgMaskFadeOut");
            cc.isValid(i) && i.destroy();
          }
        });
        t();
      } else t();
    } else t();
  }
}