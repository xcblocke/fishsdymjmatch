import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { EAudioID, ETile2SlotType } from '../core/simulator/constant/GameTypeEnums';
import { EffectLayer } from '../constant/EffectLayerEnum';
import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2CheerBehavior extends GameBehaviorsBase {
  _mainlineAniCfg = {
    0: "in_good",
    1: "in_great",
    2: "in_excellent",
    3: "in_amazing",
    4: "in_unbelievable"
  };
  _soundCfg = [EAudioID.GoodMan, EAudioID.GreatMan, EAudioID.ExcellentMan, EAudioID.AmazingMan, EAudioID.UnbelievableMan];
  start(e) {
    var t,
      o = e.data.index;
    try {
      var n = null === (t = this.context.gameView) || void 0 === t ? void 0 : t.getEffectLayer(EffectLayer.Top);
      if (!n || !cc.isValid(n)) {
        this.finish(EBehaviorEnum.Success);
        return;
      }
      var i = this.getCheerPosition(),
        r = n.convertToWorldSpaceAR(cc.v2(i.x, i.y)),
        l = this.getSafePosition(r, o),
        c = n.convertToNodeSpaceAR(l),
        u = cc.v3(c.x, c.y),
        p = this.onAnimComplete.bind(this);
      this.createCheerNode(n, u, o, p);
      this.playSound(o);
    } catch (e) {
      this.finish(EBehaviorEnum.Success);
    }
  }
  @mj.traitEvent("T2CheerBhv_createNode")
  createCheerNode(e, t, o, n) {
    var i = this,
      r = new cc.Node("CheerContainer");
    r.parent = e;
    r.position = t;
    var a = new cc.Node("spinEffect");
    a.parent = r;
    a.scale = this.getScale();
    var l = this.getSpineUrl(o),
      s = BaseSpine.refreshWithNode(a, l, this.getBundleName());
    s.setOnReadyCallback(function () {
      var e = i.getAnimName(o);
      s.setAnimation(e, 1, function () {
        n(r);
      });
    });
    return r;
  }
  onAnimComplete(e) {
    cc.isValid(e) && e.destroy();
    this.finish(EBehaviorEnum.Success);
  }
  getCheerPosition() {
    return this.context.getTile2SlotType() === ETile2SlotType.Slot3 ? this.getClearPosition() : this.getSlotBarBottomPosition();
  }
  getClearPosition() {
    var e = this.context.getLastCollisionWorldPos();
    if (!e) return this.getSlotBarBottomPosition();
    var t = this.context.gameView.getEffectLayer(EffectLayer.Top).convertToNodeSpaceAR(e);
    return cc.v3(t.x, t.y);
  }
  getSlotBarBottomPosition() {
    var e = this.context.gameView.getSlotBarNode(),
      t = this.context.gameView.getEffectLayer(EffectLayer.Top),
      o = e.parent.convertToWorldSpaceAR(cc.v2(e.x, e.y - e.height * e.anchorY + this.getOffsetY())),
      n = t.convertToNodeSpaceAR(o);
    return cc.v3(n.x, n.y);
  }
  @mj.traitEvent("T2CheerBhv_getOfsY")
  getOffsetY() {
    return -200;
  }
  getSpineUrl() {
    return "spine/tile2Cheer/gameplay_word";
  }
  getBundleName() {
    return "mainRes";
  }
  @mj.traitEvent("T2CheerBhv_getAniNm")
  getAnimName(e) {
    return this._mainlineAniCfg[e] || "in_good";
  }
  getScale() {
    return 1;
  }
  playSound(e) {
    var t = this.getSoundId(e);
    null != t && mj.audioManager && mj.audioManager.playEffect(t);
  }
  getSoundId(e) {
    return this._soundCfg[e];
  }
  getSafePosition(e, t) {
    return this.clampToScreenWorld(e, t);
  }
  clampToScreenWorld(e, t) {
    var o = cc.view.getVisibleSize(),
      n = o.width,
      i = o.height,
      r = this.getWordsSize(t),
      a = r.width,
      l = r.height,
      s = e.x - 0.5 * a,
      c = e.x + 0.5 * a,
      u = e.y - 0.5 * l,
      p = e.y + 0.5 * l,
      f = 0,
      d = 0;
    if (s < 0) {
      f = -s;
    } else {
      c > n && (f = n - c);
    }
    if (u < 0) {
      d = -u;
    } else {
      p > i && (d = i - p);
    }
    if (0 !== f || 0 !== d) {
      return cc.v2(e.x + f, e.y + d);
    }
    return e;
  }
  getWordsSize(e) {
    var t = [{
      width: 300,
      height: 150
    }, {
      width: 320,
      height: 150
    }, {
      width: 450,
      height: 150
    }, {
      width: 450,
      height: 150
    }, {
      width: 580,
      height: 150
    }];
    return e < 0 || e >= t.length ? {
      width: 350,
      height: 150
    } : t[e];
  }
}