import { EBehaviorEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from '../../../Scripts/base/GameBehaviorsBase';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
export class AddDuoxiaoOutTimeBehavior extends GameBehaviorsBase {
  start(e) {
    var t = e.data,
      i = null == t ? void 0 : t.tileId;
    if (i) {
      this._rebuildTileNode(i);
      this._playFlashEffect(i);
    }
    this.finish(EBehaviorEnum.Success);
  }
  _rebuildTileNode(e) {
    var t,
      i = null === (t = this.context.getTileNodeMap()) || void 0 === t ? void 0 : t.get(e);
    if (i) {
      var o = null == i ? void 0 : i.tileNode;
      if (o && cc.isValid(o)) {
        var a = o.getChildByName("DuoxiaoCardFlagNode");
        if (a) {
          a.active = true;
          return;
        }
      }
      var n = this.context.getTileNodeManager();
      n && n.rebuildChangeTypeTileNodes([i]);
    }
  }
  _playFlashEffect(e) {
    var t,
      i = null === (t = this.context.getTileNodeMap()) || void 0 === t ? void 0 : t.get(e),
      o = null == i ? void 0 : i.tileNode;
    if (o && cc.isValid(o)) {
      var a = BaseSpine.create("spine/gameplay_effect_3", "in", 1, function () {
        cc.isValid(null == a ? void 0 : a.node) && a.node.destroy();
      }, false, "r_addDuoxiaoOutTime");
      if (null == a ? void 0 : a.node) {
        a.node.parent = o;
        a.node.setPosition(-5, 7);
      }
    }
  }
}