import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import GameUtils from '../core/simulator/util/GameUtils';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import BaseSpine from '../gamePlay/base/ui/BaseSpine';
export class Tile2HitTipsBehavior extends GameBehaviorsBase {
  start(e) {
    var t,
      o,
      n = e.data.isClearHit,
      i = this.context.getTileNodeMap();
    if (n) {
      var r = e.data.tileId1,
        s = e.data.tileId2;
      null === (t = i.get(r)) || void 0 === t || t.hidePropHint();
      null === (o = i.get(s)) || void 0 === o || o.hidePropHint();
      this.removeFlipHand();
      this.onClearHint(e);
      this.finish(EBehaviorEnum.Success);
    } else {
      var c = e.data.tileId1,
        u = e.data.tileId2,
        p = e.data.flipId;
      if (c && u) {
        var f = i.get(c),
          d = i.get(u);
        null == f || f.showPropHint();
        null == d || d.showPropHint();
        this.triggerShowHintEvent(e);
        p && this.showFlipHand(p);
      } else this.showNoHintTips();
      mj.audioManager.playEffect(EAudioID.Hint);
      this.finish(EBehaviorEnum.Success);
    }
  }
  @mj.traitEvent("Tile2HitTipsBhv_trgHint")
  triggerShowHintEvent() {}
  @mj.traitEvent("Tile2HitTipsBhv_clrHint")
  onClearHint() {}
  showFlipHand(e) {
    var t,
      o = this.context.getTileNodeWorldPosition(e);
    if (o) {
      var n = null === (t = this.context.gameView) || void 0 === t ? void 0 : t.node;
      if (cc.isValid(n)) {
        var i = BaseSpine.create("spine/guide/gameplay_guide_finger", "in", 1, function () {
          cc.isValid(i.node) && GameUtils.playSpine(i.getSkeleton(), "init", true);
        }, false);
        n.addChild(i.node, 9999);
        var r = n.convertToNodeSpaceAR(cc.v3(o.x, o.y, 0));
        i.node.position = r;
        i.node.setSiblingIndex(0);
        i.node.name = "HitTipsFlipHand";
      }
    }
  }
  removeFlipHand() {
    var e,
      t,
      o,
      n = null === (o = null === (t = null === (e = this._context) || void 0 === e ? void 0 : e.gameView) || void 0 === t ? void 0 : t.node) || void 0 === o ? void 0 : o.getChildByName("HitTipsFlipHand");
    cc.isValid(n) && n.destroy();
  }
  showNoHintTips() {
    var e = I18NStrings.get("Tile4_tip_tool_cannot_use", "Try using other props to solve this challenge");
    mj.EventManager.emit("SHOWTILE2TIPS", e);
  }
}