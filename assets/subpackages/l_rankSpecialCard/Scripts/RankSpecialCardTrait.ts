import Trait from '../../../Scripts/framework/trait/Trait';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
@mj.trait
@mj.class("RankSpecialCardTrait")
export default class RankSpecialCardTrait extends Trait {
  _rankCollectCard = null;
  static traitKey = "RankSpecialCard";
  onRankColCard_initUI(t, e) {
    this._rankCollectCard = t.ins;
    e();
  }
  onRankColCard_clearNode(t, e) {
    this._rankCollectCard = null;
    e();
  }
  onRankTrait_chkSpCard(t, e) {
    var r,
      o,
      n = Array.isArray(null === (r = t.args) || void 0 === r ? void 0 : r[0]) ? t.args[0] : [],
      i = null === (o = t.args) || void 0 === o ? void 0 : o[1];
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
    this.checkSpecialCard(n, i);
  }
  checkRankColCardValid() {
    return this._rankCollectCard && cc.isValid(this._rankCollectCard.node);
  }
  showRankCollectCard() {
    if (!this.checkRankColCardValid()) return false;
    if (this._rankCollectCard.node.active) return true;
    this._rankCollectCard.setVisible(true);
    "function" == typeof this._rankCollectCard.startShowAnimation && this._rankCollectCard.startShowAnimation();
    return true;
  }
  isSpecialCard(t) {
    var e,
      r,
      o = null === (e = t.args) || void 0 === e ? void 0 : e[0],
      n = null === (r = t.args) || void 0 === r ? void 0 : r[1];
    if (!o || !n) return false;
    var i = t.ins.context.getTileNodeMap(),
      a = null == i ? void 0 : i.get(o);
    return !!(a && a.info && a.info.tileObject) && !!(a.info.tileObject.type == ETileType.RankCard);
  }
  getRankModel() {
    var t = mj.getClassByName("RankModel");
    return t ? t.getInstance() : null;
  }
  onClearEffBhv_playCollision(t, e) {
    var r = this.getRankModel();
    if (r) {
      if (r.hasOpeningActivity()) {
        if (this.isSpecialCard(t)) {
          e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
          var o = t.ins;
          o && "function" == typeof o.finish && o.finish();
          this.checkSpecialCard(null, o.context);
        } else e();
      } else e();
    } else e();
  }
  checkSpecialCard(t, e) {
    var r = this.getRankModel();
    if (r) {
      r.getLevelCollectCount();
      r.addLevelCollectCount(2);
      r.getLevelCollectCount();
      if (this.showRankCollectCard()) {
        "function" == typeof this._rankCollectCard.addPendingCard && this._rankCollectCard.addPendingCard(2);
        var o = e.getLastCollisionWorldPos();
        if (o) {
          var n = this._rankCollectCard.getCardWorldPosition();
          n && this.showColEff(o, n, t, e);
        }
      }
    }
  }
  @mj.traitEvent("RkSpCardTrait_showColEff")
  showColEff(t, e, o, n) {
    var i = this;
    try {
      var a = n.gameView;
      if (!cc.isValid(a) || !cc.isValid(a.nodeTopEffectRoot)) return;
      var l = mj.getClassByName("RankSpecialCardEffect");
      if (!l) return;
      l.createUI(l.getUrl()).then(function (r) {
        var n, l;
        if (cc.isValid(r)) if (a && cc.isValid(a.nodeTopEffectRoot) && (null === (l = null === (n = i._rankCollectCard) || void 0 === n ? void 0 : n.node) || void 0 === l ? void 0 : l.activeInHierarchy)) {
          a.nodeTopEffectRoot.addChild(r);
          var c = a.nodeTopEffectRoot.convertToNodeSpaceAR(t);
          r.position = cc.v3(c.x, c.y, 0);
          var s = r.getComponent("RankSpecialCardEffect"),
            d = true;
          if (s && o && o.length >= 2) {
            s.updatePos(o);
            d = false;
          }
          s.refreshCards().then(function () {
            if (d) {
              null == s || s.resetCardPositions();
              null == s || s.playCollisionAndSeparation();
            }
          }).then(function () {
            var t, o;
            if (null === (o = null === (t = i._rankCollectCard) || void 0 === t ? void 0 : t.node) || void 0 === o ? void 0 : o.activeInHierarchy) {
              null == s || s.playEffect(e, d, i._rankCollectCard.node, function () {
                cc.isValid(r) && r.destroy();
              });
            } else {
              null == r || r.destroy();
            }
          });
        } else r.destroy();
      });
    } catch (t) {
      console.error("[" + RankSpecialCardTrait.traitKey + "] 创建特效失败: " + t.message);
    }
  }
}