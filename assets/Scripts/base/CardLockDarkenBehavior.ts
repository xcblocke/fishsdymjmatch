import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class CardLockDarkenBehavior extends GameBehaviorsBase {
  start(e) {
    var t = e.data.isAutoMerge || false,
      o = void 0 === e.data.isShowAni || e.data.isShowAni,
      n = this.context.getTileMapObject().getCurAllLockCards(),
      i = n.lockCardIds,
      a = n.unLockCardIds,
      l = this.context.getTileNodeMap();
    if (t) {
      this._isShowAni = false;
      this.updateLockIcons(i, l, false);
      this.updateLockIcons(a, l, false);
    } else {
      this._isShowAni = o;
      this.updateLockIcons(i, l, true);
      this.updateLockIcons(a, l, false);
    }
    this.finish(EBehaviorEnum.Success);
  }
  updateLockIcons(e, t, o) {
    var n = this;
    e.forEach(function (e) {
      var i = t.get(e);
      if (i) {
        var r = i;
        if ("function" != typeof r.tile2SetLockDarken) {
          var a = i.imgLockBg;
          if (a && cc.isValid(a) && a.activeInHierarchy !== o) if (!o && n._isShowAni) n.hideLockIconWithFadeOut(a, null, e);else {
            o && (a.opacity = 255);
            a.active = o;
          }
        } else r.tile2SetLockDarken(o, !o && n._isShowAni);
      }
    });
  }
  hideLockIconWithFadeOut(e, t = 0, o = "") {
    var n = this;
    cc.Tween.stopAllByTarget(e);
    cc.tween(e).delay(t).to(0.25, {
      opacity: 0
    }).call(function () {
      var t;
      cc.isValid(e) && (e.active = false);
      if (o) {
        var i = null === (t = n.context.getTileNodeManager()) || void 0 === t ? void 0 : t.getTileNodeByTileId(o);
        if (i && cc.isValid(i.imgLockBg) && 0 != i.tileObject.isCardLock()) {
          e.active = true;
          e.opacity = 255;
        }
      }
    }).start();
  }
}