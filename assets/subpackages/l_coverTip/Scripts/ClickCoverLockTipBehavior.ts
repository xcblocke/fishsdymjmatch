import { EBehaviorEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from '../../../Scripts/base/GameBehaviorsBase';
import { PrefabPath } from '../../../Scripts/constant/enumRes';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
export class ClickCoverLockTipBehavior extends GameBehaviorsBase {
  static TIP_NODE_NAME = "CoverLockTip";
  static TIP_OFFSET_Y = 50;
  static TIP_FLOAT_DISTANCE = 100;
  static TIP_ANIMATION_DURATION = 0.85;
  static TIP_WIDTH = 500;
  getTileNode(t) {
    var e;
    return (null === (e = this.context.getTileNodeMap().get(t)) || void 0 === e ? void 0 : e.cardNode) || null;
  }
  async start(t) {
    var e, o;
    this.finish(EBehaviorEnum.Success);
    if (e = this.getTileNode(t.data.tileId)) {
      if (!(o = await this.getOrCreateTip())) return;
      this.setupTipAndPlayAnimation(e, o);
      return;
    } else {
      return;
    }
  }
  async getOrCreateTip() {
    var t, o, r, i, c;
    t = this.context.gameView;
    if (!(o = t.nodeTopEffectRoot) || !cc.isValid(o)) {
      return null;
    }
    r = o.getChildByName(ClickCoverLockTipBehavior.TIP_NODE_NAME);
    if (cc.isValid(r)) {
      cc.Tween.stopAllByTarget(r);
      this.resetTipState(r);
      return r;
    }
    i = await BaseUI.createUI(PrefabPath.CoverLockTip, "mainRes");
    if (!cc.isValid(o)) {
      return null;
    }
    if (!i) {
      return null;
    }
    i.name = ClickCoverLockTipBehavior.TIP_NODE_NAME;
    (c = i.getChildByName("content")) && I18NStrings.setText(c, "The tile is blocked!", "MahjongTiles_InGame_Tips_2");
    o.addChild(i);
    this.resetTipState(i);
    return i;
  }
  resetTipState(t) {
    t.opacity = 255;
    t.scale = 1;
    t.active = true;
  }
  setupTipAndPlayAnimation(t, o) {
    if (cc.isValid(o) && cc.isValid(t)) {
      var r = o.parent;
      if (r && cc.isValid(r)) {
        var i = t.convertToWorldSpaceAR(cc.v2(0, 0)),
          c = cc.view.getDesignResolutionSize().width;
        if (i.x + ClickCoverLockTipBehavior.TIP_WIDTH / 2 > c) {
          i.x = c - ClickCoverLockTipBehavior.TIP_WIDTH / 2 - 25;
        } else {
          i.x - ClickCoverLockTipBehavior.TIP_WIDTH / 2 < 0 && (i.x = ClickCoverLockTipBehavior.TIP_WIDTH / 2 + 25);
        }
        var n = r.convertToNodeSpaceAR(i);
        o.position = cc.v3(n.x, n.y + ClickCoverLockTipBehavior.TIP_OFFSET_Y, 0);
        this.playTipAnimation(o);
      }
    }
  }
  playTipAnimation(t) {
    cc.tween(t).parallel(cc.tween().by(ClickCoverLockTipBehavior.TIP_ANIMATION_DURATION, {
      position: cc.v3(0, ClickCoverLockTipBehavior.TIP_FLOAT_DISTANCE, 0)
    }), cc.tween().to(ClickCoverLockTipBehavior.TIP_ANIMATION_DURATION, {
      opacity: 0
    })).call(function () {
      cc.isValid(t) && (t.active = false);
    }).start();
  }
}