import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import Tile4GuideMask from './Tile4GuideMask';
@mj.trait
@mj.class("Tile4GuideTrait")
export default class Tile4GuideTrait extends Trait {
  _pendingWarnTimer = null;
  _guideMaskNode = null;
  static traitKey = "Tile4Guide";
  onLoad() {
    super.onLoad.call(this);
    GameUtils.isEmpty(this.localData.slotFullWarnShown) && (this.localData.slotFullWarnShown = false);
  }
  _showT4GuideMask(e, t) {
    this._clearWarnTimer();
    cc.isValid(this._guideMaskNode) || this._showT4GuideMaskImmediately(e, t);
  }
  _showT4GuideMaskImmediately(e, t) {
    var i = this;
    this.localData.slotFullWarnShown = true;
    Tile4GuideMask.createUI().then(function (o) {
      if (cc.isValid(e) && cc.isValid(t)) {
        var n = o.getComponent(Tile4GuideMask);
        o.parent = e.parent;
        n.setCloseCallback(e.zIndex, e.getSiblingIndex(), function (t, i) {
          !cc.isValid(e) || t < 0 || i < 0 || e.setSiblingIndex(i);
        });
        e.setSiblingIndex(t.getSiblingIndex() - 1);
        o.setSiblingIndex(t.getSiblingIndex() - 1);
        i._guideMaskNode = o;
      }
    });
  }
  onTile2FailVw_onLoad(e, t) {
    if (cc.isValid(this._guideMaskNode)) {
      this._guideMaskNode.destroy();
      this._guideMaskNode = null;
    }
    t();
  }
  onT2GameCtrl_initRes(e, t) {
    e.ins.addPreloadRes("Prefab", "l_tile4Guide:prefabs/Tile4GuideMask");
    t();
  }
  onT2SlotNumChg_start(e, t) {
    this._clearWarnTimer();
    var i = UserModel.getInstance().tile2NormalData.getLevelId();
    if (this.localData.slotFullWarnShown || i < 2) t();else {
      var o = e.ins.context.gameView,
        n = o.nodeDragCardRoot,
        r = o.getSlotBarNode();
      if (3 == e.args[0].data.endSlotBarCardCount) {
        this._showT4GuideMask(r, n);
      } else {
        this._clearWarnTimer();
      }
      t();
    }
  }
  _clearWarnTimer() {
    if (null != this._pendingWarnTimer) {
      clearTimeout(this._pendingWarnTimer);
      this._pendingWarnTimer = null;
    }
  }
}