import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { ETileType } from '../simulator/constant/TileTypeEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import CollectTargetItem from '../items/CollectTargetItem';
import TravelCollectTip from '../gamePlay/travel/view/TravelCollectTip';
export class InitCollectTargetBehavior extends GameBehaviorsBase {
  _timeout = 8000;
  collectItems = [];
  start(e) {
    var t = this;
    try {
      var o = e.data.collectDetails;
      if (!o || 0 === o.length) {
        this.finish(EBehaviorEnum.Success);
        return;
      }
      this.context.gameView.setSwallowEventNodeActive(true);
      this.createCollectItems(o).then(function () {
        t.createShowCollectView(function () {
          t.finish(EBehaviorEnum.Success);
          t.context.gameView.setSwallowEventNodeActive(false);
        });
      }).catch(function () {
        t.finish(EBehaviorEnum.Success);
        t.context.gameView.setSwallowEventNodeActive(false);
      });
    } catch (e) {
      this.finish(EBehaviorEnum.Success);
      this.context.gameView.setSwallowEventNodeActive(false);
    }
  }
  @mj.traitEvent("InitColTagBhv_crtItems")
  async createCollectItems(e, t = 20, o = 157, n = 0.56, i = 0) {
    var r, a, s, u, f, d, h, y, m, v, g, _, T;
    if (!(r = this.context.gameView) || !r.node) {
      return;
    }
    if (!(a = r.nodeCollect) || !cc.isValid(a)) {
      return;
    }
    this.context.clearCollectTargetPositions();
    this.context.clearCollectTargetItems();
    s = o * n;
    u = e.length * s + (e.length - 1) * t;
    f = -u / 2 + s / 2;
    d = await Promise.all(e.map(function () {
      return CollectTargetItem.createUI();
    }));
    for (h = 0; h < d.length; h++) {
      y = d[h];
      m = e[h];
      if (y && cc.isValid(y)) {
        a.addChild(y);
        v = f + h * (s + t);
        y.setPosition(v, i);
        y._designPos = cc.v3(v, i, 0);
        if (g = y.getComponent(CollectTargetItem)) {
          g.delegate = r.delegate;
          g.initUI(m);
          g.node.active = false;
          this.collectItems.push(g);
          _ = m.type === ETileType.RollCard ? "" + m.type : m.type + "_" + m.cardId;
          T = y.convertToWorldSpaceAR(cc.v2(0, 0));
          this.context.setCollectTargetPosition(_, cc.v3(T.x, T.y, 0));
          this.context.registerCollectTargetItem(_, g);
        }
      }
    }
    return;
  }
  createShowCollectView(e) {
    var t = this;
    try {
      TravelCollectTip.createUI().then(function (o) {
        if (o && cc.isValid(o) && cc.isValid(t.context.gameView)) {
          var n = t.context.gameView,
            i = n.nodeCollectShow;
          if (!cc.isValid(i)) {
            null == e || e();
            return;
          }
          i.addChild(o);
          o.setPosition(0, 0);
          var r = o.getComponent(TravelCollectTip);
          r.delegate = n.delegate;
          r.playShowAnim(t.collectItems.map(function (e) {
            return e.node;
          }), t.collectItems.map(function (e) {
            return e.getData().type;
          }), e);
        }
      });
    } catch (t) {
      null == e || e();
    }
  }
}