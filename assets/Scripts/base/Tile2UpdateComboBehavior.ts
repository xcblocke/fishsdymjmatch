import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import Tile2ComboItem from '../items/Tile2ComboItem';
import { EffectLayer } from '../constant/EffectLayerEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2UpdateComboBehavior extends GameBehaviorsBase {
  static _currentComboItem = null;
  static _comboAnimationId = 0;
  start(e) {
    var o = this;
    Tile2UpdateComboBehavior._currentComboItem && cc.isValid(Tile2UpdateComboBehavior._currentComboItem.node) && this.stopAndRecycleCurrentCombo();
    Tile2UpdateComboBehavior._comboAnimationId++;
    var n = Tile2UpdateComboBehavior._comboAnimationId;
    Tile2ComboItem.create().then(function (i) {
      if (i) if (n === Tile2UpdateComboBehavior._comboAnimationId) {
        Tile2UpdateComboBehavior._currentComboItem = i;
        var r = o.context.gameView.getEffectLayer(EffectLayer.Top);
        i.node.parent = r;
        i.node.active = true;
        i.setComboNum(e.data.comboNum);
        i.adjustSpinePositions();
        i.node.scale = 1;
        var a = o.getComboPosition();
        a.x -= 0.5 * i.getLabelWidth();
        a.y += o.getOffsetY();
        i.node.position = a;
        i.playComboAnimation(function () {
          o.checkAndFinish(n, i);
        });
      } else i.node.destroy();
    });
    this.finish(EBehaviorEnum.Success);
  }
  getComboPosition() {
    var e = this.context.gameView.getSlotBarNode(),
      t = this.context.gameView.getEffectLayer(EffectLayer.Top),
      o = e.parent.convertToWorldSpaceAR(cc.v2(e.x, e.y - e.height * e.anchorY)),
      n = t.convertToNodeSpaceAR(o);
    return cc.v3(n.x, n.y);
  }
  @mj.traitEvent("T2UpdComboBhv_getOfsY")
  getOffsetY() {
    return -90;
  }
  stopAndRecycleCurrentCombo() {
    if (Tile2UpdateComboBehavior._currentComboItem && cc.isValid(Tile2UpdateComboBehavior._currentComboItem.node)) {
      Tile2UpdateComboBehavior._currentComboItem.stopAllAnimations();
      Tile2UpdateComboBehavior._currentComboItem.node.destroy();
      Tile2UpdateComboBehavior._currentComboItem = null;
    }
  }
  checkAndFinish(e, o) {
    if (e === Tile2UpdateComboBehavior._comboAnimationId && Tile2UpdateComboBehavior._currentComboItem === o) {
      o.node.destroy();
      Tile2UpdateComboBehavior._currentComboItem = null;
    }
  }
}